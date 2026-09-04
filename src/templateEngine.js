import Papa from "papaparse";

const MAX_ROWS = 25000;
const MAX_CELL_LENGTH = 1000;

export const DEFAULT_LABEL_TEMPLATE = "John Doe\n123 Street Ave\nCity, State 12345";

export const DEFAULT_STYLE = Object.freeze({
  fontFamily: "arial",
  fontSize: 10,
  alignment: "left",
  verticalAlign: "top",
  isBold: false,
  isItalic: false,
  isUpper: false,
});

const LABEL_FONT_FAMILIES = new Set(["arial", "roboto", "georgia", "times", "courier"]);

export function normalizeFontFamily(value) {
  const fontFamily = String(value || "").trim().toLowerCase();
  if (fontFamily === "diatype" || fontFamily === "circular") return "arial";
  return LABEL_FONT_FAMILIES.has(fontFamily) ? fontFamily : DEFAULT_STYLE.fontFamily;
}

export function normalizeLabelStyle(style = {}) {
  return {
    ...DEFAULT_STYLE,
    ...(style && typeof style === "object" ? style : {}),
    fontFamily: normalizeFontFamily(style?.fontFamily),
  };
}

export function normalizeLabelOverrides(overrides = {}) {
  if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) return {};

  return Object.fromEntries(
    Object.entries(overrides)
      .filter(([, override]) => override && typeof override === "object")
      .map(([index, override]) => [index, {
        ...override,
        style: normalizeLabelStyle(override.style),
      }]),
  );
}

export function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

export function normalizeFieldName(rawName, fallback, used = new Set()) {
  const base = String(rawName || fallback || "field")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || String(fallback || "field");

  let candidate = base;
  let suffix = 2;
  while (used.has(candidate)) {
    candidate = `${base}_${suffix}`;
    suffix += 1;
  }
  used.add(candidate);
  return candidate;
}

export function sanitizeCell(value) {
  return String(value ?? "")
    .replace(/\u0000/g, "")
    .slice(0, MAX_CELL_LENGTH)
    .trim();
}

export function sanitizeRows(rows, headers) {
  const safeHeaders = headers.length > 0 ? headers : ["content"];
  return rows.slice(0, MAX_ROWS).map((row) => {
    const normalized = {};
    for (const header of safeHeaders) {
      normalized[header] = sanitizeCell(row?.[header]);
    }
    return normalized;
  });
}

function guessFieldName(rows, colIndex) {
  const samples = rows.slice(0, 6).map((row) => sanitizeCell(row[colIndex])).filter(Boolean);
  if (samples.length === 0) return `field_${colIndex + 1}`;
  if (colIndex === 0 && samples.every((sample) => /^[A-Za-z &.,'-]+$/.test(sample))) return "name";
  if (samples.some((sample) => /^\d+\s+\w/.test(sample))) return "address";
  if (samples.some((sample) => /\b[A-Za-z]{2}\b\s*\d{5}/.test(sample))) return "city_state_zip";
  if (samples.some((sample) => /@/.test(sample))) return "email";
  if (samples.some((sample) => /\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(sample))) return "phone";
  return `field_${colIndex + 1}`;
}

function rowsToObjects(rawRows, firstRowIsHeader) {
  const rows = rawRows
    .map((row) => Array.isArray(row) ? row.map(sanitizeCell) : [])
    .filter((row) => row.some(Boolean));

  if (rows.length === 0) return { data: [], headers: [] };

  const used = new Set();
  let dataRows = rows;
  let headers;

  if (firstRowIsHeader && rows.length > 1) {
    headers = rows[0].map((name, index) => normalizeFieldName(name, `field_${index + 1}`, used));
    dataRows = rows.slice(1);
  } else {
    const colCount = Math.max(...rows.map((row) => row.length));
    headers = Array.from({ length: colCount }, (_, index) =>
      normalizeFieldName(guessFieldName(rows, index), `field_${index + 1}`, used)
    );
  }

  const objects = dataRows.map((row) => {
    const result = {};
    headers.forEach((header, index) => {
      result[header] = sanitizeCell(row[index]);
    });
    return result;
  });

  return { data: sanitizeRows(objects, headers), headers };
}

function parseAddressBlocks(text, firstRowIsHeader) {
  const blocks = text.split(/\r?\n\s*\r?\n/).map((block) => block.trim()).filter(Boolean);
  const rows = blocks.map((block) => block.split(/\r?\n/).map(sanitizeCell));
  return rowsToObjects(rows, firstRowIsHeader);
}

export function parsePastedText(text, firstRowIsHeader = true) {
  const cleanText = String(text || "").trim();
  if (!cleanText) return { data: [], headers: [] };

  const hasTabs = cleanText.includes("\t");
  const hasBlankBlocks = /\r?\n\s*\r?\n/.test(cleanText);
  const hasLikelyCsv = /(?:^|[\r\n])[^"\r\n]*,[^"\r\n]*(?:[\r\n]|$)/.test(cleanText) || /".*,.*"/.test(cleanText);

  if (hasBlankBlocks && !hasTabs && !hasLikelyCsv) {
    return parseAddressBlocks(cleanText, firstRowIsHeader);
  }

  if (hasTabs || hasLikelyCsv) {
    const parsed = Papa.parse(cleanText, {
      delimiter: hasTabs ? "\t" : "",
      skipEmptyLines: true,
    });

    if (parsed.errors?.length) {
      const blocking = parsed.errors.find((error) => error.type === "Quotes" || error.code === "UndetectableDelimiter");
      if (blocking) throw new Error(`Could not parse pasted rows: ${blocking.message}`);
    }

    return rowsToObjects(parsed.data, firstRowIsHeader);
  }

  const lines = cleanText.split(/\r?\n/).map(sanitizeCell).filter(Boolean);
  if (lines.length === 0) return { data: [], headers: [] };

  if (firstRowIsHeader && lines.length > 1) {
    const used = new Set();
    const header = normalizeFieldName(lines[0], "content", used);
    return {
      data: sanitizeRows(lines.slice(1).map((line) => ({ [header]: line })), [header]),
      headers: [header],
    };
  }

  return {
    data: sanitizeRows(lines.map((line) => ({ content: line })), ["content"]),
    headers: ["content"],
  };
}

export function parseCsvFile(file, firstRowIsHeader = true) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: firstRowIsHeader,
      skipEmptyLines: true,
      worker: file.size > 512 * 1024,
      complete: (results) => {
        if (results.errors?.length) {
          const blocking = results.errors.find((error) => error.type === "Quotes" || error.type === "Delimiter");
          if (blocking) {
            reject(new Error(`CSV parse failed: ${blocking.message}`));
            return;
          }
        }

        if (firstRowIsHeader) {
          const used = new Set();
          const headers = (results.meta.fields || []).map((field, index) =>
            normalizeFieldName(field, `field_${index + 1}`, used)
          );
          const renamedRows = results.data.map((row) => {
            const next = {};
            (results.meta.fields || []).forEach((source, index) => {
              next[headers[index]] = sanitizeCell(row[source]);
            });
            return next;
          });
          resolve({ data: sanitizeRows(renamedRows, headers), headers });
          return;
        }

        resolve(rowsToObjects(results.data, false));
      },
      error: (error) => reject(error),
    });
  });
}

export function rowsFromWorkspace(values, firstRowIsHeader = true) {
  if (!Array.isArray(values)) return { data: [], headers: [] };
  return rowsToObjects(values, firstRowIsHeader);
}

export function deriveTemplateFromHeaders(headers) {
  if (!headers?.length) return DEFAULT_LABEL_TEMPLATE;
  const preferredOrder = ["name", "company", "address", "address_2", "city", "state", "zip", "city_state_zip"];
  const ordered = [
    ...preferredOrder.filter((name) => headers.includes(name)),
    ...headers.filter((name) => !preferredOrder.includes(name)),
  ];
  return ordered.slice(0, 6).map((header) => `{{${header}}}`).join("\n");
}

export function mergeTemplate(template, rowData = {}, options = {}) {
  const source = String(template || "");
  const normalizedRow = new Map();

  for (const [key, value] of Object.entries(rowData || {})) {
    const safeValue = sanitizeCell(value);
    const rawKey = String(key);
    normalizedRow.set(rawKey.toLowerCase(), safeValue);
    normalizedRow.set(normalizeFieldName(rawKey, rawKey, new Set()).toLowerCase(), safeValue);
  }

  const merged = source.replace(/{{\s*([^{}]+?)\s*}}/g, (_match, token) => {
    const normalizedToken = normalizeFieldName(token, token, new Set()).toLowerCase();
    return normalizedRow.get(normalizedToken) ?? "";
  });

  return options.uppercase ? merged.toUpperCase() : merged;
}

export function createManualRows(count) {
  return Array.from({ length: clampNumber(count, 1, MAX_ROWS, 1) }, () => ({}));
}

export function getDataRows(state) {
  if (state.inputMethod === "manual") return createManualRows(state.manualCount);
  return Array.isArray(state.data) ? state.data : [];
}

export function getMaxOverrideIndex(overrides = {}) {
  return Object.keys(overrides).reduce((max, key) => {
    const index = Number.parseInt(key, 10);
    return Number.isFinite(index) ? Math.max(max, index) : max;
  }, -1);
}

export function getTotalLabels(state) {
  const dataRows = getDataRows(state);
  const contentTotal = dataRows.length + clampNumber(state.skipCount, 0, MAX_ROWS, 0);
  return Math.max(contentTotal, getMaxOverrideIndex(state.overrides) + 1, 1);
}

export function getStyleForIndex(state, index) {
  const base = normalizeLabelStyle(state.style);
  return state.overrides?.[index]?.style
    ? normalizeLabelStyle({ ...base, ...state.overrides[index].style })
    : base;
}

export function resolveLabelAt(state, index) {
  const dataRows = getDataRows(state);
  const skipCount = clampNumber(state.skipCount, 0, MAX_ROWS, 0);
  const override = state.overrides?.[index];
  const style = getStyleForIndex(state, index);

  if (override) {
    return {
      content: style.isUpper ? String(override.content || "").toUpperCase() : String(override.content || ""),
      style,
      skipped: false,
      custom: true,
    };
  }

  if (index < skipCount) {
    return { content: "", style, skipped: true, custom: false };
  }

  const dataIndex = index - skipCount;
  if (dataIndex >= dataRows.length) {
    return { content: "", style, skipped: false, custom: false };
  }

  return {
    content: mergeTemplate(state.labelTemplate, dataRows[dataIndex], { uppercase: style.isUpper }),
    style,
    skipped: false,
    custom: false,
  };
}

export function validateImportedProject(project) {
  if (!project || typeof project !== "object") throw new Error("Project file is empty.");
  if (project.data && !Array.isArray(project.data)) throw new Error("Project data is invalid.");
  if (project.headers && !Array.isArray(project.headers)) throw new Error("Project headers are invalid.");
  return project;
}
