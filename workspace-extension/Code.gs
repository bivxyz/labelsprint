/**
 * @OnlyCurrentDoc
 */

const LABELSPRINT_MAX_ROWS = 5000;
const LABELSPRINT_MAX_CELL_LENGTH = 2000;
const LABELSPRINT_POINTS_PER_INCH = 72;

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('LabelsPrint')
    .addItem('Create mail merge labels', 'showLabelsPrintSidebar')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function showLabelsPrintSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('LabelsPrint');
  SpreadsheetApp.getUi().showSidebar(html);
}

function getSelectedMergeData() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const range = SpreadsheetApp.getActiveRange();
  const source = spreadsheet ? spreadsheet.getName() : 'Google Sheets';

  if (!range) {
    return emptySelection_(source);
  }

  if (range.getNumRows() > LABELSPRINT_MAX_ROWS + 1) {
    throw new Error(`Select no more than ${LABELSPRINT_MAX_ROWS} data rows at a time.`);
  }

  const values = range.getDisplayValues()
    .map((row) => row.map(sanitizeMergeValue_))
    .filter((row) => row.some((cell) => cell !== ''));

  if (!values.length) {
    return emptySelection_(source);
  }

  const headers = values[0].map((header, index) => header || `Column ${index + 1}`);
  const rows = values.slice(1, LABELSPRINT_MAX_ROWS + 1);

  return {
    headers: headers,
    rows: rows,
    firstRowIsHeader: true,
    source: source,
    rangeA1: range.getA1Notation()
  };
}

function getLabelsPrintTemplates() {
  return Object.keys(LABELSPRINT_TEMPLATES)
    .map((id) => LABELSPRINT_TEMPLATES[id])
    .sort((first, second) => Number(first.id) - Number(second.id))
    .map((template) => ({
      id: template.id,
      name: template.name,
      category: template.category,
      description: template.description,
      labelsPerSheet: template.labelsPerSheet,
      widthIn: template.widthIn,
      heightIn: template.heightIn,
      aliases: template.aliases
    }));
}

function createLabelsGoogleDoc(payload) {
  const result = createLabelsDocument_(payload || {});
  return {
    name: result.name,
    url: result.url,
    type: 'google-doc'
  };
}

function createLabelsPdf(payload) {
  const documentResult = createLabelsDocument_(payload || {});
  const pdfName = `${documentResult.name}.pdf`;
  const pdfBlob = exportDocumentBlob_(
    documentResult.id,
    MimeType.PDF,
    pdfName
  );
  const pdfFile = Drive.Files.create(
    {
      name: pdfName,
      mimeType: MimeType.PDF
    },
    pdfBlob,
    {
      fields: 'id,name'
    }
  );

  try {
    Drive.Files.update({ trashed: true }, documentResult.id, null, { fields: 'id' });
  } catch (error) {
    console.warn(`LabelsPrint could not trash the temporary source document: ${error.message}`);
  }

  return {
    name: pdfFile.name,
    url: `https://drive.google.com/file/d/${pdfFile.id}/view`,
    type: 'pdf'
  };
}

function exportDocumentBlob_(fileId, mimeType, fileName) {
  const exportUrl = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}/export` +
    `?mimeType=${encodeURIComponent(mimeType)}&alt=media`;
  const response = UrlFetchApp.fetch(exportUrl, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${ScriptApp.getOAuthToken()}`
    },
    muteHttpExceptions: true
  });
  const statusCode = response.getResponseCode();

  if (statusCode < 200 || statusCode >= 300) {
    const details = response.getContentText().slice(0, 500);
    throw new Error(`PDF export failed (${statusCode}). ${details}`);
  }

  return response.getBlob()
    .setContentType(MimeType.PDF)
    .setName(fileName);
}

function createLabelsDocument_(rawPayload) {
  const payload = normalizePayload_(rawPayload);
  const template = getWorkspaceTemplate_(payload.templateId);
  const labelContent = payload.labelContent || defaultLabelContent_(payload.headers);
  const rows = payload.rows.slice(0, payload.labelCount || payload.rows.length);
  const labels = rows.map((row) => mergeLabel_(labelContent, payload.headers, row, payload.formatting.uppercase));
  const positions = Array(payload.skipCount).fill('').concat(labels);
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HHmm');
  const name = `LabelsPrint ${template.name} ${timestamp}`;
  const doc = DocumentApp.create(name);
  const body = doc.getBody();

  configurePage_(body, template);
  appendLabelPages_(body, template, positions, payload.formatting);
  doc.saveAndClose();

  return {
    id: doc.getId(),
    name: name,
    url: doc.getUrl()
  };
}

function configurePage_(body, template) {
  body.clear();
  body.setPageWidth(8.5 * LABELSPRINT_POINTS_PER_INCH);
  body.setPageHeight(11 * LABELSPRINT_POINTS_PER_INCH);
  body.setMarginTop(template.topIn * LABELSPRINT_POINTS_PER_INCH);
  body.setMarginLeft(template.leftIn * LABELSPRINT_POINTS_PER_INCH);

  const usedWidth = template.columns * template.widthIn +
    Math.max(0, template.columns - 1) * template.horizontalGapIn;
  const usedHeight = template.rows * template.heightIn +
    Math.max(0, template.rows - 1) * template.verticalGapIn;

  body.setMarginRight(Math.max(0, 8.5 - template.leftIn - usedWidth) * LABELSPRINT_POINTS_PER_INCH);
  body.setMarginBottom(Math.max(0, 11 - template.topIn - usedHeight) * LABELSPRINT_POINTS_PER_INCH);
}

function appendLabelPages_(body, template, labels, formatting) {
  const labelsPerSheet = template.labelsPerSheet;
  const totalPositions = Math.max(1, labels.length);

  for (let pageStart = 0; pageStart < totalPositions; pageStart += labelsPerSheet) {
    if (pageStart > 0) {
      body.appendPageBreak();
    }

    const pageLabels = labels.slice(pageStart, pageStart + labelsPerSheet);
    const table = body.appendTable(buildPageGrid_(template, pageLabels));
    table.setBorderWidth(0);
    stylePageGrid_(table, template, formatting);
  }
}

function buildPageGrid_(template, pageLabels) {
  const grid = [];
  let labelIndex = 0;

  for (let labelRow = 0; labelRow < template.rows; labelRow += 1) {
    const row = [];
    for (let labelColumn = 0; labelColumn < template.columns; labelColumn += 1) {
      row.push(pageLabels[labelIndex] || '');
      labelIndex += 1;
      if (template.horizontalGapIn > 0 && labelColumn < template.columns - 1) {
        row.push('');
      }
    }
    grid.push(row);

    if (template.verticalGapIn > 0 && labelRow < template.rows - 1) {
      grid.push(Array(row.length).fill(''));
    }
  }

  return grid;
}

function stylePageGrid_(table, template, formatting) {
  const labelHeightPt = template.heightIn * LABELSPRINT_POINTS_PER_INCH;
  const gapHeightPt = template.verticalGapIn * LABELSPRINT_POINTS_PER_INCH;
  const labelWidthPt = template.widthIn * LABELSPRINT_POINTS_PER_INCH;
  const gapWidthPt = template.horizontalGapIn * LABELSPRINT_POINTS_PER_INCH;

  for (let tableRowIndex = 0; tableRowIndex < table.getNumRows(); tableRowIndex += 1) {
    const row = table.getRow(tableRowIndex);
    const isGapRow = template.verticalGapIn > 0 && tableRowIndex % 2 === 1;
    row.setMinimumHeight(isGapRow ? gapHeightPt : labelHeightPt);

    for (let tableColumnIndex = 0; tableColumnIndex < row.getNumCells(); tableColumnIndex += 1) {
      const cell = row.getCell(tableColumnIndex);
      const isGapColumn = template.horizontalGapIn > 0 && tableColumnIndex % 2 === 1;
      cell.setWidth(isGapColumn ? gapWidthPt : labelWidthPt);
      cell.setPaddingTop(isGapRow || isGapColumn ? 0 : 6);
      cell.setPaddingRight(isGapRow || isGapColumn ? 0 : 8);
      cell.setPaddingBottom(isGapRow || isGapColumn ? 0 : 6);
      cell.setPaddingLeft(isGapRow || isGapColumn ? 0 : 8);

      if (!isGapRow && !isGapColumn) {
        styleLabelCell_(cell, formatting);
      }
    }
  }
}

function styleLabelCell_(cell, formatting) {
  const verticalAlignment = {
    top: DocumentApp.VerticalAlignment.TOP,
    middle: DocumentApp.VerticalAlignment.CENTER,
    bottom: DocumentApp.VerticalAlignment.BOTTOM
  }[formatting.verticalAlign] || DocumentApp.VerticalAlignment.CENTER;
  const horizontalAlignment = {
    left: DocumentApp.HorizontalAlignment.LEFT,
    center: DocumentApp.HorizontalAlignment.CENTER,
    right: DocumentApp.HorizontalAlignment.RIGHT
  }[formatting.align] || DocumentApp.HorizontalAlignment.LEFT;

  cell.setVerticalAlignment(verticalAlignment);

  const text = cell.editAsText();
  text.setFontFamily(formatting.fontFamily);
  text.setFontSize(formatting.fontSize);
  text.setBold(formatting.bold);
  text.setItalic(formatting.italic);
  text.setUnderline(formatting.underline);

  for (let childIndex = 0; childIndex < cell.getNumChildren(); childIndex += 1) {
    const child = cell.getChild(childIndex);
    if (child.getType() === DocumentApp.ElementType.PARAGRAPH) {
      child.asParagraph()
        .setAlignment(horizontalAlignment)
        .setLineSpacing(1);
    }
  }
}

function normalizePayload_(payload) {
  const headers = normalizeHeaders_(payload.headers);
  const rows = normalizeRows_(payload.rows, headers.length);

  if (!headers.length || !rows.length) {
    throw new Error('Select a header row and at least one data row before exporting.');
  }

  const template = getWorkspaceTemplate_(payload.templateId);
  return {
    templateId: template.id,
    headers: headers,
    rows: rows,
    labelContent: sanitizeMergeValue_(payload.labelContent),
    labelCount: clampInteger_(payload.labelCount, 0, rows.length, rows.length),
    skipCount: clampInteger_(payload.skipCount, 0, template.labelsPerSheet - 1, 0),
    formatting: {
      fontFamily: allowedFontFamily_(payload.formatting && payload.formatting.fontFamily),
      fontSize: clampInteger_(payload.formatting && payload.formatting.fontSize, 6, 36, 10),
      bold: Boolean(payload.formatting && payload.formatting.bold),
      italic: Boolean(payload.formatting && payload.formatting.italic),
      underline: Boolean(payload.formatting && payload.formatting.underline),
      uppercase: Boolean(payload.formatting && payload.formatting.uppercase),
      align: allowedValue_(payload.formatting && payload.formatting.align, ['left', 'center', 'right'], 'left'),
      verticalAlign: allowedValue_(payload.formatting && payload.formatting.verticalAlign, ['top', 'middle', 'bottom'], 'middle')
    }
  };
}

function mergeLabel_(template, headers, row, uppercase) {
  const merged = String(template).replace(/<<([^<>]+)>>|{{([^{}]+)}}/g, (match, angleField, braceField) => {
    const normalizedField = normalizeFieldName_(angleField || braceField);
    const index = headers.findIndex((header) => normalizeFieldName_(header) === normalizedField);
    return index >= 0 ? String(row[index] || '') : '';
  });
  const compact = merged
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.trim() !== '')
    .join('\n');
  return uppercase ? compact.toUpperCase() : compact;
}

function normalizeHeaders_(headers) {
  return Array.isArray(headers)
    ? headers.slice(0, 100).map((header, index) => sanitizeMergeValue_(header) || `Column ${index + 1}`)
    : [];
}

function normalizeRows_(rows, columnCount) {
  return Array.isArray(rows)
    ? rows.slice(0, LABELSPRINT_MAX_ROWS)
      .filter((row) => Array.isArray(row) && row.some((cell) => sanitizeMergeValue_(cell) !== ''))
      .map((row) => Array.from({ length: columnCount }, (unused, index) => sanitizeMergeValue_(row[index])))
    : [];
}

function sanitizeMergeValue_(value) {
  return String(value == null ? '' : value)
    .replace(/\u0000/g, '')
    .slice(0, LABELSPRINT_MAX_CELL_LENGTH)
    .trim();
}

function normalizeFieldName_(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function defaultLabelContent_(headers) {
  return headers.slice(0, 4).map((header) => `<<${header}>>`).join('\n');
}

function clampInteger_(value, minimum, maximum, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.min(maximum, Math.max(minimum, parsed));
}

function allowedValue_(value, allowed, fallback) {
  return allowed.indexOf(String(value || '')) >= 0 ? String(value) : fallback;
}

function allowedFontFamily_(value) {
  return allowedValue_(value, ['Arial', 'Roboto', 'Georgia', 'Times New Roman', 'Courier New'], 'Arial');
}

function emptySelection_(source) {
  return {
    headers: [],
    rows: [],
    firstRowIsHeader: true,
    source: source,
    rangeA1: ''
  };
}
