import {
  AVERY_TEMPLATE_CATALOG,
  AVERY_TEMPLATE_CODE_COUNT,
} from "./averyTemplateCatalog.js";
import { GENERATED_AVERY_TEMPLATES } from "./generatedAveryTemplates.js";

export const POINTS_PER_INCH = 72;
export const TWIPS_PER_INCH = 1440;

export { AVERY_TEMPLATE_CATALOG, AVERY_TEMPLATE_CODE_COUNT };

export const TOP_AVERY_CODES = Object.freeze([
  "5160",
  "5163",
  "8160",
  "5164",
  "5162",
  "18160",
  "5371",
  "5366",
  "5161",
  "5167",
  "5260",
  "5392",
  "5302",
  "8163",
  "5395",
  "22807",
  "5390",
  "5309",
  "18660",
  "5388",
]);

export const FEATURED_AVERY_CODES = TOP_AVERY_CODES;

export const LETTER = Object.freeze({
  widthIn: 8.5,
  heightIn: 11,
  widthPt: 8.5 * POINTS_PER_INCH,
  heightPt: 11 * POINTS_PER_INCH,
  widthTwip: 8.5 * TWIPS_PER_INCH,
  heightTwip: 11 * TWIPS_PER_INCH,
});

const round = (value, places = 4) => Number(value.toFixed(places));

function deriveTemplateShape({ category = "", name = "", description = "", w, h }) {
  const text = `${category} ${name} ${description}`.toLowerCase();
  if (text.includes("round")) return "Round";
  if (text.includes("oval")) return "Oval";
  if (text.includes("square") || Math.abs(w - h) < 0.04) return "Square";
  if (text.includes("card") || text.includes("badge") || text.includes("label") || w !== h) return "Rectangle";
  return "Custom/Other";
}

export function normalizeTemplateCode(value) {
  const compact = String(value || "").trim().replace(/[^A-Za-z0-9-]/g, "").toUpperCase();
  if (!compact) return "";

  const ticketMatch = compact.match(/^T\d{2}-[A-Z0-9]{2,5}$/);
  if (ticketMatch) return compact;

  const numericMatch = compact.match(/^0*(\d{3,6})([A-Z]{0,2})$/);
  if (numericMatch) return `${Number(numericMatch[1])}${numericMatch[2]}`;

  const prefixedMatch = compact.match(/^([A-Z]{1,3})0*(\d{2,6})([A-Z]{0,3})$/);
  if (prefixedMatch) return `${prefixedMatch[1]}${Number(prefixedMatch[2])}${prefixedMatch[3]}`;

  return compact;
}

function createTemplate(config) {
  const {
    id,
    aliases = [],
    category,
    name,
    description,
    w,
    h,
    rows,
    cols,
    top,
    left,
    hGap = 0,
    vGap = 0,
  } = config;

  const usedWidth = cols * w + Math.max(0, cols - 1) * hGap;
  const usedHeight = rows * h + Math.max(0, rows - 1) * vGap;
  const shape = config.shape || deriveTemplateShape({ category, name, description, w, h });

  return Object.freeze({
    id,
    aliases,
    category,
    shape,
    pageSize: "Letter",
    isCalibrated: true,
    name,
    description,
    w,
    h,
    rows,
    cols,
    top,
    left,
    hGap,
    vGap,
    perSheet: rows * cols,
    right: round(LETTER.widthIn - left - usedWidth),
    bottom: round(LETTER.heightIn - top - usedHeight),
  });
}

export const AVERY_TEMPLATES = Object.freeze(
  GENERATED_AVERY_TEMPLATES.map((template) => createTemplate(template)),
);

const templateLookup = new Map();
for (const template of AVERY_TEMPLATES) {
  templateLookup.set(normalizeTemplateCode(template.id), template);
  for (const alias of template.aliases) {
    templateLookup.set(normalizeTemplateCode(alias), template);
  }
}

const catalogLookup = new Map();
for (const record of AVERY_TEMPLATE_CATALOG) {
  catalogLookup.set(normalizeTemplateCode(record.code), record);
  for (const code of record.codes || []) {
    catalogLookup.set(normalizeTemplateCode(code), record);
  }
}

export function getTemplateById(id) {
  return templateLookup.get(normalizeTemplateCode(id)) || templateLookup.get("5160");
}

export function getTemplateCatalogRecord(id) {
  return catalogLookup.get(normalizeTemplateCode(id)) || null;
}

export function getFeaturedTemplates() {
  const seen = new Set();
  const templates = [];

  for (const code of FEATURED_AVERY_CODES) {
    const template = templateLookup.get(normalizeTemplateCode(code));
    if (!template || seen.has(template.id)) continue;
    seen.add(template.id);
    templates.push(template);
  }

  return templates;
}

export function isFeaturedTemplate(template) {
  if (!template) return false;
  return FEATURED_AVERY_CODES.some((code) => templateLookup.get(normalizeTemplateCode(code)) === template);
}

export function getFeaturedCatalogRecords() {
  const seen = new Set();
  const records = [];

  for (const code of FEATURED_AVERY_CODES) {
    const template = templateLookup.get(normalizeTemplateCode(code));
    if (template) continue;

    const record = catalogLookup.get(normalizeTemplateCode(code));
    if (!record || seen.has(record.code)) continue;
    seen.add(record.code);
    records.push(record);
  }

  return records;
}

export function getTopTemplateEntries() {
  const entries = [];

  for (const code of TOP_AVERY_CODES) {
    const normalizedCode = normalizeTemplateCode(code);
    const template = templateLookup.get(normalizedCode);

    if (template) {
      entries.push({ type: "template", code, codes: [code], template });
      continue;
    }

    const record = catalogLookup.get(normalizedCode);
    if (!record) continue;
    entries.push({ type: "catalog", code, codes: [code], record });
  }

  return entries;
}

function getNumericSortValue(code) {
  const match = String(code || "").match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

export function getAllTemplateLibraryEntries() {
  const entries = [];
  const seenCatalogCodes = new Set();

  for (const template of AVERY_TEMPLATES) {
    entries.push({
      type: "template",
      code: template.id,
      template,
      sortCode: getNumericSortValue(template.id),
      sortLabel: template.id,
    });

    seenCatalogCodes.add(normalizeTemplateCode(template.id));
    for (const alias of template.aliases || []) {
      seenCatalogCodes.add(normalizeTemplateCode(alias));
    }
  }

  for (const record of AVERY_TEMPLATE_CATALOG) {
    const recordCodes = [record.code, ...(record.codes || [])];
    if (recordCodes.some((code) => seenCatalogCodes.has(normalizeTemplateCode(code)))) continue;
    entries.push({
      type: "catalog",
      code: record.code,
      record,
      sortCode: getNumericSortValue(record.code),
      sortLabel: record.code,
    });
  }

  return entries.sort((a, b) => {
    if (a.sortCode !== b.sortCode) return a.sortCode - b.sortCode;
    return String(a.sortLabel).localeCompare(String(b.sortLabel), undefined, { numeric: true });
  });
}

export function getTemplateSearchText(template) {
  return [
    template.id,
    ...template.aliases,
    template.category,
    template.shape,
    template.pageSize,
    template.name,
    template.description,
    `${template.w}x${template.h}`,
    `${template.perSheet}`,
  ].join(" ").toLowerCase();
}

export function templateMatchesSearch(template, query) {
  const rawQuery = String(query || "").trim().toLowerCase();
  if (!rawQuery) return true;
  if (getTemplateSearchText(template).includes(rawQuery)) return true;

  const normalizedQuery = normalizeTemplateCode(query);
  return templateLookup.get(normalizedQuery) === template;
}

export function getUncalibratedCatalogMatches(query, limit = 18) {
  const rawQuery = String(query || "").trim().toLowerCase();
  if (!rawQuery) return [];

  const normalizedQuery = normalizeTemplateCode(query);
  const matches = [];

  for (const record of AVERY_TEMPLATE_CATALOG) {
    const recordCodes = [record.code, ...(record.codes || [])];
    const isCalibrated = recordCodes.some((code) => templateLookup.has(normalizeTemplateCode(code)));
    if (isCalibrated) continue;

    const searchText = recordCodes.join(" ").toLowerCase();
    const normalizedMatch = normalizedQuery && recordCodes.some((code) => normalizeTemplateCode(code).includes(normalizedQuery));
    if (searchText.includes(rawQuery) || normalizedMatch) {
      matches.push(record);
      if (matches.length >= limit) break;
    }
  }

  return matches;
}

export function validateTemplateGeometry(template) {
  const errors = [];
  const usedWidth = template.cols * template.w + Math.max(0, template.cols - 1) * template.hGap;
  const usedHeight = template.rows * template.h + Math.max(0, template.rows - 1) * template.vGap;

  if (template.left < 0 || template.top < 0) errors.push("Margins cannot be negative.");
  if (template.left + usedWidth > LETTER.widthIn + 0.001) errors.push("Template is wider than letter paper.");
  if (template.top + usedHeight > LETTER.heightIn + 0.001) errors.push("Template is taller than letter paper.");
  if (!Number.isFinite(template.perSheet) || template.perSheet <= 0) errors.push("Template has no printable labels.");

  return errors;
}

export function buildSlots(template) {
  const slots = [];
  for (let row = 0; row < template.rows; row += 1) {
    for (let col = 0; col < template.cols; col += 1) {
      const xIn = template.left + col * (template.w + template.hGap);
      const yIn = template.top + row * (template.h + template.vGap);
      slots.push({
        index: slots.length,
        row,
        col,
        xIn,
        yIn,
        wIn: template.w,
        hIn: template.h,
        xPt: xIn * POINTS_PER_INCH,
        yPt: yIn * POINTS_PER_INCH,
        wPt: template.w * POINTS_PER_INCH,
        hPt: template.h * POINTS_PER_INCH,
        xTwip: xIn * TWIPS_PER_INCH,
        yTwip: yIn * TWIPS_PER_INCH,
        wTwip: template.w * TWIPS_PER_INCH,
        hTwip: template.h * TWIPS_PER_INCH,
      });
    }
  }
  return slots;
}
