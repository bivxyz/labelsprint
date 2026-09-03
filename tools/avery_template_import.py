#!/usr/bin/env python3
"""Download Avery PDFs and convert confidently detected cut paths into template geometry."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable

try:
    import fitz
except ImportError as error:  # pragma: no cover - exercised by setup failures
    raise SystemExit("PyMuPDF is required. Run: pip install -r tools/requirements.txt") from error


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_ENDPOINT = "https://services.print.avery.com/dpp/public/v2/content/downloadables/"
PARSER_VERSION = "1.0.0"
MAX_PDF_BYTES = 20 * 1024 * 1024
LETTER_POINTS = (612.0, 792.0)
POINTS_PER_INCH = 72.0
ALLOWED_ENDPOINT_HOST = "services.print.avery.com"
ALLOWED_ENDPOINT_PATH = "/dpp/public/v2/content/downloadables/"
ALLOWED_PDF_HOST = "s3.amazonaws.com"
ALLOWED_PDF_PATH = re.compile(
    r"^/avery\.dpp\.projects\.s3us[pt]downloadables/US_en/Downloadables/pdf/",
    re.IGNORECASE,
)


class ImportFailure(RuntimeError):
    pass


@dataclass(frozen=True)
class DrawingBox:
    x0: float
    y0: float
    x1: float
    y1: float
    shape_hint: str = "Rectangle"

    @property
    def width(self) -> float:
        return self.x1 - self.x0

    @property
    def height(self) -> float:
        return self.y1 - self.y0


def normalize_code(value: Any) -> str:
    compact = re.sub(r"[^A-Za-z0-9-]", "", str(value or "")).upper()
    match = re.fullmatch(r"0*(\d{3,6})([A-Z]{0,2})", compact)
    return f"{int(match.group(1))}{match.group(2)}" if match else compact


def validate_sku(value: Any) -> str:
    normalized = normalize_code(value)
    if not re.fullmatch(r"[1-9]\d{2,5}[A-Z]{0,2}", normalized):
        raise ImportFailure("SKU must contain 3-6 digits and may end with up to two letters.")
    return normalized


def validate_remote_url(url: str, purpose: str) -> str:
    try:
        parsed = urllib.parse.urlsplit(url)
        port = parsed.port
    except (TypeError, ValueError) as error:
        raise ImportFailure("Avery returned an invalid download URL.") from error

    if parsed.scheme != "https" or parsed.username or parsed.password or port not in {None, 443}:
        raise ImportFailure("Remote URLs must use HTTPS without credentials or custom ports.")

    host = (parsed.hostname or "").lower()
    if purpose == "endpoint":
        if host != ALLOWED_ENDPOINT_HOST or parsed.path != ALLOWED_ENDPOINT_PATH or parsed.query or parsed.fragment:
            raise ImportFailure("The configured endpoint is not the approved Avery downloadables API.")
    elif purpose == "pdf":
        if host != ALLOWED_PDF_HOST or not ALLOWED_PDF_PATH.match(parsed.path) or parsed.fragment:
            raise ImportFailure("Avery returned a PDF URL outside the approved download location.")
    else:  # pragma: no cover - internal programming error
        raise ValueError(f"Unknown URL purpose: {purpose}")
    return url


class ValidatingRedirectHandler(urllib.request.HTTPRedirectHandler):
    def __init__(self, purpose: str):
        super().__init__()
        self.purpose = purpose

    def redirect_request(self, request: Any, file_pointer: Any, code: int, message: str, headers: Any, new_url: str) -> Any:
        validate_remote_url(new_url, self.purpose)
        return super().redirect_request(request, file_pointer, code, message, headers, new_url)


def round_inches(points: float) -> float:
    return round(points / POINTS_PER_INCH, 6)


def load_catalog(path: Path) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8")
    start = text.find("[")
    end = text.rfind("]")
    if start < 0 or end < start:
        raise ImportFailure(f"Could not parse catalog array from {path}.")
    return json.loads(text[start : end + 1])


def load_manifest(path: Path) -> dict[str, Any]:
    manifest = json.loads(path.read_text(encoding="utf-8"))
    if manifest.get("schemaVersion") != 1 or not isinstance(manifest.get("templates"), list):
        raise ImportFailure("Template manifest must use schemaVersion 1.")
    return manifest


def template_codes(template: dict[str, Any]) -> set[str]:
    return {normalize_code(code) for code in [template["id"], *template.get("aliases", [])]}


def target_records(
    catalog: list[dict[str, Any]], manifest: dict[str, Any], requested_skus: list[str]
) -> list[dict[str, Any]]:
    calibrated = set().union(*(template_codes(template) for template in manifest["templates"]))
    lookup: dict[str, dict[str, Any]] = {}
    for record in catalog:
        for code in [record.get("code"), *record.get("codes", [])]:
            lookup[normalize_code(code)] = record

    if requested_skus:
        records = []
        seen = set()
        for sku in requested_skus:
            normalized = validate_sku(sku)
            record = lookup.get(normalized, {"code": normalized, "codes": [normalized]})
            key = normalize_code(record["code"])
            if key not in seen:
                seen.add(key)
                records.append(record)
        return records

    return [
        record
        for record in catalog
        if not any(normalize_code(code) in calibrated for code in [record.get("code"), *record.get("codes", [])])
    ]


def http_request(url: str, purpose: str, attempts: int = 4) -> tuple[bytes, dict[str, str], str]:
    validate_remote_url(url, purpose)
    headers = {"User-Agent": "LabelsPrint-template-importer/1.0", "Accept": "application/json, application/pdf"}
    opener = urllib.request.build_opener(ValidatingRedirectHandler(purpose))
    for attempt in range(attempts):
        try:
            request = urllib.request.Request(url, headers=headers)
            with opener.open(request, timeout=45) as response:
                validate_remote_url(response.geturl(), purpose)
                content_length = response.headers.get("Content-Length")
                if content_length and int(content_length) > MAX_PDF_BYTES:
                    raise ImportFailure("Response exceeds the 20 MB limit.")
                body = response.read(MAX_PDF_BYTES + 1)
                if len(body) > MAX_PDF_BYTES:
                    raise ImportFailure("Response exceeds the 20 MB limit.")
                return body, {key.lower(): value for key, value in response.headers.items()}, response.geturl()
        except urllib.error.HTTPError as error:
            if error.code not in {429, 500, 502, 503, 504}:
                raise ImportFailure(f"HTTP {error.code} while requesting Avery content.") from error
            retry_after = error.headers.get("Retry-After")
            delay = float(retry_after) if retry_after and retry_after.isdigit() else 2**attempt
        except (urllib.error.URLError, TimeoutError) as error:
            delay = 2**attempt
        if attempt < attempts - 1:
            time.sleep(delay)
    raise ImportFailure(f"Avery request failed after {attempts} attempts.")


def iter_strings(value: Any) -> Iterable[str]:
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for child in value.values():
            yield from iter_strings(child)
    elif isinstance(value, list):
        for child in value:
            yield from iter_strings(child)


def is_pdf_url(value: str) -> bool:
    try:
        validate_remote_url(value, "pdf")
    except ImportFailure:
        return False
    decoded = urllib.parse.unquote(value).lower()
    return ".pdf" in decoded or "format=pdf" in decoded or "type=pdf" in decoded


def filename_from_headers(headers: dict[str, str], url: str, sku: str) -> str:
    disposition = headers.get("content-disposition", "")
    match = re.search(r"filename\*?=(?:UTF-8''|\")?([^\";]+)", disposition, re.IGNORECASE)
    if match:
        return urllib.parse.unquote(match.group(1)).strip()
    query = urllib.parse.parse_qs(urllib.parse.urlparse(url).query)
    for value in query.get("response-content-disposition", []):
        nested = re.search(r"filename=(?:\")?([^\";]+)", value, re.IGNORECASE)
        if nested:
            return urllib.parse.unquote(nested.group(1)).strip()
    name = Path(urllib.parse.urlparse(url).path).name
    return name if name.lower().endswith(".pdf") else f"Avery{sku}.pdf"


def resolve_api_pdf(sku: str, endpoint: str) -> tuple[bytes, str]:
    sku = validate_sku(sku)
    validate_remote_url(endpoint, "endpoint")
    query = urllib.parse.urlencode({"deploymentId": "US_en", "sku": sku, "consumer": "Avery"})
    body, headers, final_url = http_request(f"{endpoint}?{query}", "endpoint")
    content_type = headers.get("content-type", "").lower()
    if body.startswith(b"%PDF-") or "application/pdf" in content_type:
        return validate_pdf(body), filename_from_headers(headers, final_url, sku)

    try:
        payload = json.loads(body.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as error:
        raise ImportFailure("Avery returned neither JSON metadata nor a PDF.") from error

    urls = list(dict.fromkeys(value for value in iter_strings(payload) if is_pdf_url(value)))
    if len(urls) != 1:
        raise ImportFailure(f"Expected one PDF download for SKU {sku}; found {len(urls)}.")
    pdf, pdf_headers, pdf_url = http_request(urls[0], "pdf")
    return validate_pdf(pdf), filename_from_headers(pdf_headers, pdf_url, sku)


def validate_pdf(content: bytes) -> bytes:
    if not content.startswith(b"%PDF-"):
        raise ImportFailure("Downloaded content does not have a PDF signature.")
    return content


def rect_to_box(rect: Any, shape_hint: str = "Rectangle") -> DrawingBox:
    return DrawingBox(float(rect.x0), float(rect.y0), float(rect.x1), float(rect.y1), shape_hint)


def extract_drawing_boxes(page: Any) -> list[DrawingBox]:
    boxes: list[DrawingBox] = []
    for drawing in page.get_drawings():
        rectangle_items = [item for item in drawing.get("items", []) if item and item[0] == "re"]
        if rectangle_items:
            boxes.extend(rect_to_box(item[1]) for item in rectangle_items)
            continue

        rect = drawing.get("rect")
        if not rect:
            continue
        operations = [item[0] for item in drawing.get("items", []) if item]
        has_lines = any(operation in {"l", "re"} for operation in operations)
        has_curves = any(operation in {"c", "qu"} for operation in operations)
        if has_curves and not has_lines:
            hint = "Round" if abs(rect.width - rect.height) <= 1.0 else "Oval"
        else:
            hint = "Square" if abs(rect.width - rect.height) <= 1.0 else "Rectangle"
        boxes.append(rect_to_box(rect, hint))
    return boxes


def deduplicate_boxes(boxes: Iterable[DrawingBox], tolerance: float = 0.75) -> list[DrawingBox]:
    unique: list[DrawingBox] = []
    for box in boxes:
        if box.width < 18 or box.height < 18:
            continue
        if any(
            max(abs(a - b) for a, b in zip((box.x0, box.y0, box.x1, box.y1), (other.x0, other.y0, other.x1, other.y1)))
            <= tolerance
            for other in unique
        ):
            continue
        unique.append(box)
    return unique


def cluster_values(values: Iterable[float], tolerance: float = 1.0) -> list[float]:
    clusters: list[list[float]] = []
    for value in sorted(values):
        if not clusters or abs(value - sum(clusters[-1]) / len(clusters[-1])) > tolerance:
            clusters.append([value])
        else:
            clusters[-1].append(value)
    return [sum(cluster) / len(cluster) for cluster in clusters]


def dimension_groups(boxes: list[DrawingBox], tolerance: float = 1.0) -> list[list[DrawingBox]]:
    groups: list[list[DrawingBox]] = []
    for box in boxes:
        for group in groups:
            reference = group[0]
            if abs(box.width - reference.width) <= tolerance and abs(box.height - reference.height) <= tolerance:
                group.append(box)
                break
        else:
            groups.append([box])
    return groups


def uniform_step(values: list[float], tolerance: float = 1.5) -> bool:
    if len(values) < 3:
        return True
    steps = [values[index + 1] - values[index] for index in range(len(values) - 1)]
    return max(steps) - min(steps) <= tolerance


def infer_layout(page_width: float, page_height: float, raw_boxes: Iterable[DrawingBox]) -> dict[str, Any]:
    if abs(page_width - LETTER_POINTS[0]) > 2 or abs(page_height - LETTER_POINTS[1]) > 2:
        raise ImportFailure(f"Only portrait Letter PDFs are supported; found {page_width:.1f} x {page_height:.1f} points.")

    boxes = deduplicate_boxes(raw_boxes)
    candidates: list[tuple[float, int, list[DrawingBox], list[float], list[float]]] = []
    for group in dimension_groups(boxes):
        if len(group) < 2:
            continue
        xs = cluster_values(box.x0 for box in group)
        ys = cluster_values(box.y0 for box in group)
        if len(xs) * len(ys) != len(group) or not uniform_step(xs) or not uniform_step(ys):
            continue
        positions = {(min(range(len(xs)), key=lambda index: abs(xs[index] - box.x0)), min(range(len(ys)), key=lambda index: abs(ys[index] - box.y0))) for box in group}
        if len(positions) != len(group):
            continue
        candidates.append((len(group) * group[0].width * group[0].height, len(group), group, xs, ys))

    if not candidates:
        raise ImportFailure("No uniform grid of repeated vector label boundaries was detected.")
    candidates.sort(key=lambda candidate: (candidate[0], candidate[1]), reverse=True)
    _, count, group, xs, ys = candidates[0]
    width = sum(box.width for box in group) / count
    height = sum(box.height for box in group) / count
    h_gap = (sum(xs[index + 1] - xs[index] for index in range(len(xs) - 1)) / max(1, len(xs) - 1) - width) if len(xs) > 1 else 0
    v_gap = (sum(ys[index + 1] - ys[index] for index in range(len(ys) - 1)) / max(1, len(ys) - 1) - height) if len(ys) > 1 else 0
    if h_gap < -1 or v_gap < -1:
        raise ImportFailure("Detected label boundaries overlap.")

    hints = [box.shape_hint for box in group]
    shape = max(set(hints), key=hints.count)
    if shape == "Rectangle" and abs(width - height) <= 1:
        shape = "Square"

    geometry = {
        "pageSize": "Letter",
        "shape": shape,
        "w": round_inches(width),
        "h": round_inches(height),
        "rows": len(ys),
        "cols": len(xs),
        "top": round_inches(min(ys)),
        "left": round_inches(min(xs)),
        "hGap": max(0, round_inches(h_gap)),
        "vGap": max(0, round_inches(v_gap)),
        "perSheet": count,
    }
    validate_geometry(geometry)
    return geometry


def validate_geometry(geometry: dict[str, Any]) -> None:
    used_width = geometry["cols"] * geometry["w"] + max(0, geometry["cols"] - 1) * geometry["hGap"]
    used_height = geometry["rows"] * geometry["h"] + max(0, geometry["rows"] - 1) * geometry["vGap"]
    if geometry["left"] < 0 or geometry["top"] < 0:
        raise ImportFailure("Detected margins cannot be negative.")
    if geometry["left"] + used_width > 8.52 or geometry["top"] + used_height > 11.02:
        raise ImportFailure("Detected labels extend beyond Letter paper.")
    if geometry["perSheet"] != geometry["rows"] * geometry["cols"]:
        raise ImportFailure("Detected label count does not match the row and column grid.")


def calibrate_pdf(content: bytes) -> dict[str, Any]:
    document = fitz.open(stream=content, filetype="pdf")
    try:
        if document.page_count != 1:
            raise ImportFailure(f"Expected a one-page template PDF; found {document.page_count} pages.")
        page = document[0]
        return infer_layout(page.rect.width, page.rect.height, extract_drawing_boxes(page))
    finally:
        document.close()


def infer_category(filename: str) -> str:
    text = filename.lower()
    if "return" in text:
        return "Return"
    if "address" in text:
        return "Address"
    if "shipping" in text:
        return "Shipping"
    if "folder" in text:
        return "File Folder"
    if "badge" in text or "name tag" in text:
        return "Badges"
    if "card" in text:
        return "Cards"
    return "Specialty"


def description_for(category: str, shape: str, count: int) -> str:
    label = {
        "Address": "Address labels",
        "Shipping": "Shipping labels",
        "Return": "Return address labels",
        "File Folder": "File folder labels",
        "Badges": "Name badges",
        "Cards": "Cards",
    }.get(category, f"{shape} labels")
    return f"{label}, {count} per sheet"


def imported_template(
    sku: str,
    aliases: list[str],
    filename: str,
    geometry: dict[str, Any],
    pdf_sha256: str,
    endpoint: str,
    existing: dict[str, Any] | None,
) -> dict[str, Any]:
    category = existing.get("category") if existing else infer_category(filename)
    shape = geometry["shape"]
    return {
        "id": sku,
        "aliases": aliases,
        "category": category,
        "shape": shape,
        "name": existing.get("name", f"Avery {sku}") if existing else f"Avery {sku}",
        "description": existing.get("description", description_for(category, shape, geometry["perSheet"])) if existing else description_for(category, shape, geometry["perSheet"]),
        "w": geometry["w"],
        "h": geometry["h"],
        "rows": geometry["rows"],
        "cols": geometry["cols"],
        "top": geometry["top"],
        "left": geometry["left"],
        "hGap": geometry["hGap"],
        "vGap": geometry["vGap"],
        "pageSize": "Letter",
        "source": {
            "provider": "avery",
            "kind": "api",
            "sku": sku,
            "endpoint": endpoint,
            "importedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
            "pdfSha256": pdf_sha256,
            "parserVersion": PARSER_VERSION,
        },
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sku", action="append", default=[], help="SKU or comma-separated SKUs. Repeatable.")
    parser.add_argument("--scope", choices=["coming-soon"], default="coming-soon")
    parser.add_argument("--pdf", type=Path, help="Use one local PDF instead of the API; requires one --sku.")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--delay", type=float, default=0.5, help="Delay between API SKUs in seconds.")
    parser.add_argument("--endpoint", default=os.environ.get("AVERY_DOWNLOADABLES_ENDPOINT") or DEFAULT_ENDPOINT)
    parser.add_argument("--manifest", type=Path, default=ROOT / "data" / "avery-templates.json")
    parser.add_argument("--catalog", type=Path, default=ROOT / "src" / "averyTemplateCatalog.js")
    parser.add_argument("--report", type=Path)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    requested = [part.strip() for value in args.sku for part in value.split(",") if part.strip()]
    requested = [validate_sku(sku) for sku in requested]
    if args.pdf and len(requested) != 1:
        raise ImportFailure("--pdf requires exactly one --sku.")

    manifest = load_manifest(args.manifest)
    catalog = load_catalog(args.catalog)
    records = target_records(catalog, manifest, requested)
    existing_by_code = {code: template for template in manifest["templates"] for code in template_codes(template)}
    results: list[dict[str, Any]] = []
    imported: list[dict[str, Any]] = []

    for index, record in enumerate(records):
        sku = validate_sku(record["code"])
        try:
            if args.pdf:
                content = validate_pdf(args.pdf.read_bytes())
                filename = args.pdf.name
            else:
                content, filename = resolve_api_pdf(sku, args.endpoint)
            digest = hashlib.sha256(content).hexdigest()
            geometry = calibrate_pdf(content)
            aliases = [normalize_code(code) for code in record.get("codes", []) if normalize_code(code) != sku]
            existing = existing_by_code.get(sku)
            template = imported_template(sku, aliases, filename, geometry, digest, args.endpoint, existing)
            if existing and existing.get("source", {}).get("pdfSha256") == digest:
                template["source"]["importedAt"] = existing["source"].get("importedAt", template["source"]["importedAt"])
            imported.append(template)
            results.append({"sku": sku, "status": "imported", "filename": filename, "geometry": geometry})
            print(f"{sku}: {geometry['rows']}x{geometry['cols']} {geometry['shape']} ({geometry['perSheet']} per sheet)")
        except (ImportFailure, OSError, ValueError) as error:
            results.append({"sku": sku, "status": "coming-soon", "reason": str(error)})
            print(f"{sku}: coming soon - {error}", file=sys.stderr)
        if not args.pdf and index < len(records) - 1:
            time.sleep(max(0, args.delay))

    if not args.dry_run and imported:
        imported_codes = {code for template in imported for code in template_codes(template)}
        retained = [template for template in manifest["templates"] if not template_codes(template) & imported_codes]
        manifest["templates"] = sorted(retained + imported, key=lambda item: (int(re.search(r"\d+", item["id"]).group()), item["id"]))
        args.manifest.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    report_path = args.report or (ROOT / ("artifacts" if args.dry_run else "data") / "avery-template-import-report.json")
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report = {
        "generatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "dryRun": args.dry_run,
        "scope": "requested-skus" if requested else args.scope,
        "requested": len(records),
        "imported": sum(result["status"] == "imported" for result in results),
        "remainingComingSoon": sum(result["status"] == "coming-soon" for result in results),
        "results": results,
    }
    report_path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(f"Report: {report_path}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except ImportFailure as error:
        print(f"Import failed: {error}", file=sys.stderr)
        raise SystemExit(2) from error
