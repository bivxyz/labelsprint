import json
import tempfile
import unittest
from pathlib import Path

from avery_template_import import (
    DrawingBox,
    ImportFailure,
    infer_layout,
    is_pdf_url,
    load_manifest,
    target_records,
    validate_pdf,
    validate_remote_url,
    validate_sku,
)


ROOT = Path(__file__).resolve().parents[1]


class GeometryTests(unittest.TestCase):
    def test_94224_golden_geometry(self):
        fixture = json.loads((ROOT / "tools" / "fixtures" / "avery-94224-drawings.json").read_text())
        boxes = [DrawingBox(*values) for values in fixture["boxes"]]
        geometry = infer_layout(fixture["pageWidth"], fixture["pageHeight"], boxes)
        self.assertEqual(
            geometry,
            {
                "pageSize": "Letter",
                "shape": "Rectangle",
                "w": 3.0,
                "h": 1.0,
                "rows": 8,
                "cols": 2,
                "top": 0.625,
                "left": 0.875,
                "hGap": 0.75,
                "vGap": 0.25,
                "perSheet": 16,
            },
        )

    def test_non_letter_page_is_rejected(self):
        with self.assertRaisesRegex(ImportFailure, "portrait Letter"):
            infer_layout(595, 842, [DrawingBox(10, 10, 110, 110), DrawingBox(120, 10, 220, 110)])

    def test_irregular_grid_is_rejected(self):
        boxes = [DrawingBox(10, 10, 110, 60), DrawingBox(130, 10, 230, 60), DrawingBox(10, 90, 110, 140)]
        with self.assertRaisesRegex(ImportFailure, "uniform grid"):
            infer_layout(612, 792, boxes)


class ImportSelectionTests(unittest.TestCase):
    def test_coming_soon_excludes_ids_and_aliases_already_calibrated(self):
        manifest = {"templates": [{"id": "5160", "aliases": ["8160"]}]}
        catalog = [
            {"code": "5160", "codes": ["5160"]},
            {"code": "8160", "codes": ["8160"]},
            {"code": "94224", "codes": ["94224"]},
        ]
        self.assertEqual([record["code"] for record in target_records(catalog, manifest, [])], ["94224"])

    def test_requested_sku_can_override_existing_geometry(self):
        manifest = {"templates": [{"id": "5160", "aliases": ["8160"]}]}
        catalog = [{"code": "5160", "codes": ["5160", "8160"]}]
        self.assertEqual(target_records(catalog, manifest, ["8160"])[0]["code"], "5160")

    def test_pdf_response_validation(self):
        self.assertEqual(validate_pdf(b"%PDF-1.7\ncontent"), b"%PDF-1.7\ncontent")
        with self.assertRaisesRegex(ImportFailure, "PDF signature"):
            validate_pdf(b"<html>error</html>")

    def test_pdf_url_detection(self):
        self.assertTrue(is_pdf_url("https://s3.amazonaws.com/avery.dpp.projects.s3uspdownloadables/US_en/Downloadables/pdf/file.pdf?signature=x"))
        self.assertFalse(is_pdf_url("https://example.com/file.pdf"))
        self.assertFalse(is_pdf_url("http://s3.amazonaws.com/avery.dpp.projects.s3uspdownloadables/US_en/Downloadables/pdf/file.pdf"))

    def test_remote_url_allowlist(self):
        endpoint = "https://services.print.avery.com/dpp/public/v2/content/downloadables/"
        self.assertEqual(validate_remote_url(endpoint, "endpoint"), endpoint)
        with self.assertRaisesRegex(ImportFailure, "approved Avery"):
            validate_remote_url("https://example.com/dpp/public/v2/content/downloadables/", "endpoint")
        with self.assertRaisesRegex(ImportFailure, "approved download"):
            validate_remote_url("https://s3.amazonaws.com/unrelated/file.pdf", "pdf")

    def test_sku_validation(self):
        self.assertEqual(validate_sku("094224"), "94224")
        self.assertEqual(validate_sku("5160A"), "5160A")
        for value in ["", "12", "../../etc/passwd", "5160?redirect=https://example.com"]:
            with self.subTest(value=value), self.assertRaises(ImportFailure):
                validate_sku(value)

    def test_manifest_schema_validation(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "manifest.json"
            path.write_text('{"schemaVersion": 2, "templates": []}', encoding="utf-8")
            with self.assertRaisesRegex(ImportFailure, "schemaVersion 1"):
                load_manifest(path)


class ExistingTemplateTests(unittest.TestCase):
    def test_common_layouts_remain_available_and_fit_letter_paper(self):
        manifest = json.loads((ROOT / "data" / "avery-templates.json").read_text())
        by_code = {
            code: template
            for template in manifest["templates"]
            for code in [template["id"], *template.get("aliases", [])]
        }
        for code in ["5160", "5163", "5167", "5371", "5392", "5302", "22816", "5360"]:
            template = by_code[code]
            used_width = template["cols"] * template["w"] + (template["cols"] - 1) * template["hGap"]
            used_height = template["rows"] * template["h"] + (template["rows"] - 1) * template["vGap"]
            self.assertLessEqual(template["left"] + used_width, 8.501, code)
            self.assertLessEqual(template["top"] + used_height, 11.001, code)


if __name__ == "__main__":
    unittest.main()
