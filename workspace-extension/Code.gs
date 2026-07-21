const LABELSPRINT_TEMPLATES = {
  '5160': {
    id: '5160',
    name: 'Avery 5160 / 8160',
    columns: 3,
    rows: 10,
    labelsPerSheet: 30,
    labelWidthPt: 189,
    labelHeightPt: 72
  },
  '5161': {
    id: '5161',
    name: 'Avery 5161 / 8161',
    columns: 2,
    rows: 10,
    labelsPerSheet: 20,
    labelWidthPt: 288,
    labelHeightPt: 72
  },
  '5162': {
    id: '5162',
    name: 'Avery 5162 / 8162',
    columns: 2,
    rows: 7,
    labelsPerSheet: 14,
    labelWidthPt: 288,
    labelHeightPt: 96
  },
  '5163': {
    id: '5163',
    name: 'Avery 5163 / 8163',
    columns: 2,
    rows: 5,
    labelsPerSheet: 10,
    labelWidthPt: 288,
    labelHeightPt: 144
  },
  '5164': {
    id: '5164',
    name: 'Avery 5164 / 8164',
    columns: 2,
    rows: 3,
    labelsPerSheet: 6,
    labelWidthPt: 288,
    labelHeightPt: 240
  },
  '5126': {
    id: '5126',
    name: 'Avery 5126 / 8126',
    columns: 1,
    rows: 2,
    labelsPerSheet: 2,
    labelWidthPt: 612,
    labelHeightPt: 396
  },
  '5168': {
    id: '5168',
    name: 'Avery 5168 / 8168',
    columns: 2,
    rows: 2,
    labelsPerSheet: 4,
    labelWidthPt: 252,
    labelHeightPt: 360
  },
  '5167': {
    id: '5167',
    name: 'Avery 5167 / 8167',
    columns: 4,
    rows: 20,
    labelsPerSheet: 80,
    labelWidthPt: 126,
    labelHeightPt: 36
  },
  '5195': {
    id: '5195',
    name: 'Avery 5195 / 8195',
    columns: 4,
    rows: 15,
    labelsPerSheet: 60,
    labelWidthPt: 126,
    labelHeightPt: 48
  },
  '5366': {
    id: '5366',
    name: 'Avery 5366',
    columns: 2,
    rows: 15,
    labelsPerSheet: 30,
    labelWidthPt: 247.5,
    labelHeightPt: 48
  },
  '5371': {
    id: '5371',
    name: 'Avery 5371 / 8371',
    columns: 2,
    rows: 5,
    labelsPerSheet: 10,
    labelWidthPt: 252,
    labelHeightPt: 144
  },
  '5395': {
    id: '5395',
    name: 'Avery 5395',
    columns: 2,
    rows: 4,
    labelsPerSheet: 8,
    labelWidthPt: 243,
    labelHeightPt: 168
  },
  '22806': {
    id: '22806',
    name: 'Avery 22806',
    columns: 3,
    rows: 4,
    labelsPerSheet: 12,
    labelWidthPt: 144,
    labelHeightPt: 144
  }
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('LabelsPrint')
    .addItem('Open mail merge labels', 'showLabelsPrintSidebar')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function showLabelsPrintSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('LabelsPrint')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  SpreadsheetApp.getUi().showSidebar(html);
}

function getSelectedMergeData() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const range = SpreadsheetApp.getActiveRange();
  const source = spreadsheet ? spreadsheet.getName() : 'Google Sheets';

  if (!range) {
    return {
      headers: [],
      rows: [],
      values: [],
      firstRowIsHeader: true,
      source
    };
  }

  const values = range.getDisplayValues()
    .filter((row) => row.some((cell) => String(cell).trim() !== ''));

  if (!values.length) {
    return {
      headers: [],
      rows: [],
      values: [],
      firstRowIsHeader: true,
      source
    };
  }

  const headerRow = values[0];
  const headers = headerRow.map((header, index) => {
    const trimmed = String(header).trim();
    return trimmed || `Column ${index + 1}`;
  });

  return {
    headers,
    rows: values.slice(1),
    values,
    firstRowIsHeader: true,
    source
  };
}

function getLabelsPrintTemplates() {
  return Object.keys(LABELSPRINT_TEMPLATES).map((id) => {
    const template = LABELSPRINT_TEMPLATES[id];
    return {
      id: template.id,
      name: template.name,
      labelsPerSheet: template.labelsPerSheet
    };
  });
}

function getSelectedValues() {
  const payload = getSelectedMergeData();
  return {
    values: payload.values,
    firstRowIsHeader: payload.firstRowIsHeader,
    source: payload.source
  };
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
  const doc = createLabelsDocument_(payload || {});
  const sourceFile = DriveApp.getFileById(doc.id);
  const pdfBlob = sourceFile
    .getAs(MimeType.PDF)
    .setName(`${doc.name}.pdf`);
  const pdfFile = DriveApp.createFile(pdfBlob);

  return {
    name: pdfFile.getName(),
    url: pdfFile.getUrl(),
    type: 'pdf'
  };
}

function createLabelsDocument_(payload) {
  const template = LABELSPRINT_TEMPLATES[payload.templateId] || LABELSPRINT_TEMPLATES['5160'];
  const headers = normalizeHeaders_(payload.headers);
  const rows = normalizeRows_(payload.rows);
  const labelContent = String(payload.labelContent || '').trim() || defaultLabelContent_(headers);
  const name = `LabelsPrint ${template.name} ${Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HHmm')}`;
  const doc = DocumentApp.create(name);
  const body = doc.getBody();

  body.clear();
  body.setMarginTop(36);
  body.setMarginRight(14);
  body.setMarginBottom(36);
  body.setMarginLeft(14);

  appendLabels_(body, {
    template,
    headers,
    rows,
    labelContent,
    formatting: payload.formatting || {}
  });

  doc.saveAndClose();

  return {
    id: doc.getId(),
    name,
    url: doc.getUrl()
  };
}

function appendLabels_(body, options) {
  const labels = options.rows.length
    ? options.rows.map((row) => mergeLabel_(options.labelContent, options.headers, row))
    : [mergeLabel_(options.labelContent, options.headers, [])];
  const perSheet = options.template.labelsPerSheet;

  for (let start = 0; start < labels.length; start += perSheet) {
    if (start > 0) {
      body.appendPageBreak();
    }

    const pageLabels = labels.slice(start, start + perSheet);
    const tableData = [];
    let labelIndex = 0;

    for (let rowIndex = 0; rowIndex < options.template.rows; rowIndex += 1) {
      const row = [];
      for (let colIndex = 0; colIndex < options.template.columns; colIndex += 1) {
        row.push(pageLabels[labelIndex] || '');
        labelIndex += 1;
      }
      tableData.push(row);
    }

    const table = body.appendTable(tableData);
    table.setBorderWidth(0);
    styleLabelsTable_(table, options.template, options.formatting);
  }
}

function styleLabelsTable_(table, template, formatting) {
  const alignment = formatting.align || 'left';
  const paragraphAlignment = {
    left: DocumentApp.HorizontalAlignment.LEFT,
    center: DocumentApp.HorizontalAlignment.CENTER,
    right: DocumentApp.HorizontalAlignment.RIGHT
  }[alignment] || DocumentApp.HorizontalAlignment.LEFT;

  for (let rowIndex = 0; rowIndex < table.getNumRows(); rowIndex += 1) {
    const row = table.getRow(rowIndex);
    row.setMinimumHeight(template.labelHeightPt);

    for (let colIndex = 0; colIndex < row.getNumCells(); colIndex += 1) {
      const cell = row.getCell(colIndex);
      cell.setWidth(template.labelWidthPt);
      cell.setPaddingTop(8);
      cell.setPaddingBottom(6);
      cell.setPaddingLeft(12);
      cell.setPaddingRight(12);
      cell.setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);

      const text = cell.editAsText();
      text.setFontFamily('Diatype');
      text.setFontSize(10);
      text.setBold(Boolean(formatting.bold));
      text.setItalic(Boolean(formatting.italic));
      text.setUnderline(Boolean(formatting.underline));

      for (let paragraphIndex = 0; paragraphIndex < cell.getNumChildren(); paragraphIndex += 1) {
        const child = cell.getChild(paragraphIndex);
        if (child.getType() === DocumentApp.ElementType.PARAGRAPH) {
          child.asParagraph().setAlignment(paragraphAlignment);
        }
      }
    }
  }
}

function mergeLabel_(template, headers, row) {
  return String(template).replace(/<<([^<>]+)>>/g, (match, fieldName) => {
    const normalizedField = normalizeFieldName_(fieldName);
    const index = headers.findIndex((header) => normalizeFieldName_(header) === normalizedField);
    return index >= 0 ? String(row[index] || '') : '';
  });
}

function normalizeHeaders_(headers) {
  return Array.isArray(headers)
    ? headers.map((header, index) => String(header || `Column ${index + 1}`).trim())
    : [];
}

function normalizeRows_(rows) {
  return Array.isArray(rows)
    ? rows.filter((row) => Array.isArray(row) && row.some((cell) => String(cell).trim() !== ''))
    : [];
}

function normalizeFieldName_(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function defaultLabelContent_(headers) {
  if (!headers.length) {
    return '<<Name>>\n<<Street Address 1>>\n<<Street Address 2>>';
  }

  return headers.slice(0, 3).map((header) => `<<${header}>>`).join('\n');
}
