import {
  AVERY_TEMPLATE_CATALOG,
  AVERY_TEMPLATE_CODE_COUNT,
} from "./averyTemplateCatalog.js";

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

export const AVERY_TEMPLATES = Object.freeze([
  createTemplate({
    id: "5160",
    aliases: ["5260", "55160", "5520", "5630", "5960", "5970", "8160", "8250", "8460", "8660", "18160", "18660", "16460"],
    category: "Address",
    name: "Avery 5160 / 8160",
    description: "Address labels, 30 per sheet",
    w: 2.625,
    h: 1,
    rows: 10,
    cols: 3,
    top: 0.5,
    left: 0.1875,
    hGap: 0.125,
  }),
  createTemplate({
    id: "5161",
    aliases: ["5261", "5961", "8161"],
    category: "Address",
    name: "Avery 5161 / 8161",
    description: "Address labels, 20 per sheet",
    w: 4,
    h: 1,
    rows: 10,
    cols: 2,
    top: 0.5,
    left: 0.15625,
    hGap: 0.1875,
  }),
  createTemplate({
    id: "5162",
    aliases: ["5262", "5962", "8162", "48862"],
    category: "Address",
    name: "Avery 5162 / 8162",
    description: "Address labels, 14 per sheet",
    w: 4,
    h: 1.333333,
    rows: 7,
    cols: 2,
    top: 0.833333,
    left: 0.25,
  }),
  createTemplate({
    id: "5163",
    aliases: ["5263", "5663", "5963", "8163", "18163", "48363"],
    category: "Shipping",
    name: "Avery 5163 / 8163",
    description: "Shipping labels, 10 per sheet",
    w: 4,
    h: 2,
    rows: 5,
    cols: 2,
    top: 0.5,
    left: 0.25,
  }),
  createTemplate({
    id: "5164",
    aliases: ["5264", "5664", "8164"],
    category: "Shipping",
    name: "Avery 5164 / 8164",
    description: "Shipping labels, 6 per sheet",
    w: 4,
    h: 3.333333,
    rows: 3,
    cols: 2,
    top: 0.5,
    left: 0.25,
  }),
  createTemplate({
    id: "5126",
    aliases: ["8126"],
    category: "Shipping",
    name: "Avery 5126 / 8126",
    description: "Half-sheet shipping labels, 2 per sheet",
    w: 8.5,
    h: 5.5,
    rows: 2,
    cols: 1,
    top: 0,
    left: 0,
  }),
  createTemplate({
    id: "5168",
    aliases: ["5268", "8168"],
    category: "Shipping",
    name: "Avery 5168 / 8168",
    description: "Large shipping labels, 4 per sheet",
    w: 3.5,
    h: 5,
    rows: 2,
    cols: 2,
    top: 0.5,
    left: 0.75,
  }),
  createTemplate({
    id: "5167",
    aliases: ["5267", "5667", "8167", "11408", "11410", "11452", "16062"],
    category: "Return",
    name: "Avery 5167 / 8167",
    description: "Return address labels, 80 per sheet",
    w: 1.75,
    h: 0.5,
    rows: 20,
    cols: 4,
    top: 0.5,
    left: 0.28125,
    hGap: 0.3125,
  }),
  createTemplate({
    id: "5195",
    aliases: ["8195", "18195"],
    category: "Return",
    name: "Avery 5195 / 8195",
    description: "Return address labels, 60 per sheet",
    w: 1.75,
    h: 0.666667,
    rows: 15,
    cols: 4,
    top: 0.5,
    left: 0.28125,
    hGap: 0.3125,
  }),
  createTemplate({
    id: "5366",
    aliases: ["5266", "8366", "48366"],
    category: "File Folder",
    name: "Avery 5366",
    description: "File folder labels, 30 per sheet",
    w: 3.4375,
    h: 0.666667,
    rows: 15,
    cols: 2,
    top: 0.5,
    left: 0.8125,
  }),
  createTemplate({
    id: "5371",
    aliases: ["28371", "8371", "8387", "8871", "38873", "38876"],
    category: "Cards",
    name: "Avery 5371 / 8371",
    description: "Business cards, 10 per sheet",
    w: 3.5,
    h: 2,
    rows: 5,
    cols: 2,
    top: 0.5,
    left: 0.75,
  }),
  createTemplate({
    id: "5395",
    aliases: ["8395"],
    category: "Badges",
    name: "Avery 5395",
    description: "Name badges, 8 per sheet",
    w: 3.375,
    h: 2.333333,
    rows: 4,
    cols: 2,
    top: 0.833333,
    left: 0.6875,
    hGap: 0.375,
  }),
  createTemplate({
    id: "5392",
    aliases: ["35392", "5384", "5393", "74459", "74536", "74540", "74541", "78617", "78619", "8780", "8781"],
    category: "Badges",
    name: "Avery 5392",
    description: "Name badge insert refills, 6 per sheet",
    w: 4,
    h: 3,
    rows: 3,
    cols: 2,
    top: 1,
    left: 0.25,
  }),
  createTemplate({
    id: "5302",
    aliases: ["5812", "5913"],
    category: "Cards",
    name: "Avery 5302",
    description: "Small tent cards, 4 per sheet",
    w: 3.5,
    h: 2,
    rows: 2,
    cols: 2,
    top: 3.5,
    left: 0.75,
  }),
  createTemplate({
    id: "5305",
    category: "Cards",
    name: "Avery 5305",
    description: "Full-width cards, 4 per sheet",
    w: 8.5,
    h: 2.5,
    rows: 4,
    cols: 1,
    top: 0.5,
    left: 0,
  }),
  createTemplate({
    id: "7714",
    aliases: ["07714", "11984", "23281"],
    category: "Specialty",
    name: "Avery 7714",
    description: "Small labels, 36 per sheet",
    w: 2,
    h: 0.5,
    rows: 18,
    cols: 2,
    top: 1,
    left: 2.25,
  }),
  createTemplate({
    id: "11102",
    category: "Specialty",
    name: "Avery 11102",
    description: "Small labels, 52 per sheet",
    w: 1.5,
    h: 0.333333,
    rows: 26,
    cols: 2,
    top: 1.166667,
    left: 2.75,
  }),
  createTemplate({
    id: "11270",
    category: "Specialty",
    name: "Avery 11270",
    description: "Small labels, 52 per sheet",
    w: 2,
    h: 0.333333,
    rows: 26,
    cols: 2,
    top: 1.1708,
    left: 2.25,
  }),
  createTemplate({
    id: "11401",
    aliases: ["11836"],
    category: "Specialty",
    name: "Avery 11401",
    description: "Small labels, 40 per sheet",
    w: 1.5,
    h: 0.5,
    rows: 20,
    cols: 2,
    top: 0.5,
    left: 2.75,
  }),
  createTemplate({
    id: "11415",
    aliases: ["11433", "11991", "11995"],
    category: "Specialty",
    name: "Avery 11415",
    description: "Small labels, 80 per sheet",
    w: 1.125,
    h: 0.5,
    rows: 20,
    cols: 4,
    top: 0.5,
    left: 0.5104,
    hGap: 1,
  }),
  createTemplate({
    id: "22816",
    aliases: ["22923", "22933", "22961", "41467"],
    category: "Specialty",
    name: "Avery 22816",
    description: "Round or specialty labels, 12 per sheet",
    w: 2,
    h: 2,
    rows: 4,
    cols: 3,
    top: 0.625,
    left: 0.625,
    hGap: 0.625,
    vGap: 0.5826,
  }),
  createTemplate({
    id: "22926",
    category: "Specialty",
    name: "Avery 22926",
    description: "Round or specialty labels, 9 per sheet",
    w: 2.5,
    h: 2.5,
    rows: 3,
    cols: 3,
    top: 0.625,
    left: 0.3229,
    hGap: 0.1771,
    vGap: 1.1146,
  }),
  createTemplate({
    id: "22964",
    category: "Specialty",
    name: "Avery 22964",
    description: "Specialty labels, 8 per sheet",
    w: 3.3333,
    h: 2,
    rows: 4,
    cols: 2,
    top: 1.0125,
    left: 0.75,
    hGap: 0.3334,
    vGap: 0.3542,
  }),
  createTemplate({
    id: "4331",
    category: "Specialty",
    name: "Avery 4331",
    description: "Large labels, 15 per sheet",
    w: 2.625,
    h: 2,
    rows: 5,
    cols: 3,
    top: 0.5,
    left: 0.1875,
    hGap: 0.125,
  }),
  createTemplate({
    id: "5360",
    aliases: ["55360"],
    category: "File Folder",
    name: "Avery 5360",
    description: "File folder labels, 21 per sheet",
    w: 2.8125,
    h: 1.5,
    rows: 7,
    cols: 3,
    top: 0.25,
    left: 0.03125,
  }),
  createTemplate({
    id: "38373",
    aliases: ["18820"],
    category: "Cards",
    name: "Avery 38373",
    description: "Cards, 8 per sheet",
    w: 3.5,
    h: 2,
    rows: 4,
    cols: 2,
    top: 0.75,
    left: 0.5,
    hGap: 0.5,
    vGap: 0.5,
  }),
  createTemplate({
    id: "22806",
    aliases: ["22807"],
    category: "Specialty",
    name: "Avery 22806",
    description: "Square labels, 12 per sheet",
    w: 2,
    h: 2,
    rows: 4,
    cols: 3,
    top: 0.75,
    left: 1.125,
    hGap: 0.125,
    vGap: 0.125,
  }),
]);

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
  return templateLookup.get(normalizeTemplateCode(id)) || AVERY_TEMPLATES[0];
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
