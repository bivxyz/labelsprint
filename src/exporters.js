import { jsPDF } from "jspdf";
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeightRule,
  ImageRun,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from "docx";

import { buildSlots, LETTER, TWIPS_PER_INCH } from "./templates.js";
import { getTotalLabels, resolveLabelAt } from "./templateEngine.js";

const PT_TO_PX = 96 / 72;

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function waitForPaint() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function getImageFormat(dataUrl) {
  if (/^data:image\/jpe?g/i.test(dataUrl)) return "JPEG";
  if (/^data:image\/webp/i.test(dataUrl)) return "WEBP";
  return "PNG";
}

function dataUrlToUint8Array(dataUrl) {
  const [, raw = ""] = String(dataUrl).split(",");
  const binary = atob(raw);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function textAlignToDocx(alignment) {
  if (alignment === "center") return AlignmentType.CENTER;
  if (alignment === "right") return AlignmentType.RIGHT;
  return AlignmentType.LEFT;
}

function verticalAlignToDocx(alignment) {
  if (alignment === "middle") return VerticalAlign.CENTER;
  if (alignment === "bottom") return VerticalAlign.BOTTOM;
  return VerticalAlign.TOP;
}

function pdfFontFamily(style) {
  return {
    diatype: "helvetica",
    circular: "helvetica",
    arial: "helvetica",
    helvetica: "helvetica",
    times: "times",
    courier: "courier",
  }[style.fontFamily] || "helvetica";
}

function docxFontFamily(style) {
  return {
    diatype: "Diatype",
    circular: "Circular",
    arial: "Arial",
    helvetica: "Helvetica",
    times: "Times New Roman",
    courier: "Courier New",
  }[style.fontFamily] || "Diatype";
}

function borderlessCellBorders() {
  const border = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: border, bottom: border, left: border, right: border };
}

function normalizeLogoPosition(position) {
  if (position === "top-left") return "above";
  if (position === "top-right") return "right";
  if (position === "center") return "watermark";
  return ["above", "below", "left", "right", "watermark"].includes(position) ? position : "above";
}

function getLogoSize(state, slot, position) {
  const rawSize = Math.min(slot.wPt, slot.hPt) * (state.logoSize / 100);
  const padding = Math.max(4, Math.min(8, slot.hPt * 0.08));

  if (position === "left" || position === "right") {
    return Math.max(6, Math.min(rawSize, slot.wPt * 0.38, slot.hPt - padding * 2));
  }

  if (position === "above" || position === "below") {
    return Math.max(6, Math.min(rawSize, slot.hPt * 0.36, slot.wPt - padding * 2));
  }

  return Math.max(6, Math.min(rawSize, slot.wPt * 0.75, slot.hPt * 0.75));
}

function drawPdfImage(doc, state, x, y, size, opacity = 1) {
  const format = getImageFormat(state.logoDataUrl);

  if (opacity < 1) {
    try {
      doc.setGState(new doc.GState({ opacity }));
    } catch {
      // Some jsPDF builds omit advanced graphics state support.
    }
  }

  try {
    doc.addImage(state.logoDataUrl, format, x, y, size, size);
  } catch (error) {
    console.warn("Logo could not be embedded in PDF:", error);
  } finally {
    if (opacity < 1) {
      try {
        doc.setGState(new doc.GState({ opacity: 1 }));
      } catch {
        // Best effort reset.
      }
    }
  }
}

function drawPdfText(doc, content, style, box) {
  if (!content) return;

  const padding = Math.max(4, Math.min(8, box.hPt * 0.08));
  const maxWidth = Math.max(8, box.wPt - padding * 2);
  const lines = doc.splitTextToSize(content, maxWidth);
  const lineHeight = style.fontSize * 1.18;
  const textHeight = lines.length * lineHeight;

  doc.setFont(pdfFontFamily(style), style.isBold ? (style.isItalic ? "bolditalic" : "bold") : (style.isItalic ? "italic" : "normal"));
  doc.setFontSize(style.fontSize);
  doc.setTextColor(20, 27, 36);

  let y = box.yPt + padding + style.fontSize * 0.82;
  if (style.verticalAlign === "middle") {
    y = box.yPt + (box.hPt - textHeight) / 2 + style.fontSize * 0.82;
  } else if (style.verticalAlign === "bottom") {
    y = box.yPt + box.hPt - textHeight - padding + style.fontSize * 0.82;
  }

  for (const line of lines) {
    let x = box.xPt + padding;
    if (style.alignment === "center") {
      x = box.xPt + box.wPt / 2;
      doc.text(line, x, y, { align: "center", maxWidth });
    } else if (style.alignment === "right") {
      x = box.xPt + box.wPt - padding;
      doc.text(line, x, y, { align: "right", maxWidth });
    } else {
      doc.text(line, x, y, { maxWidth });
    }
    y += lineHeight;
  }
}

function drawPdfLabel(doc, content, style, state, slot) {
  if (!state.logoDataUrl) {
    drawPdfText(doc, content, style, slot);
    return;
  }

  const position = normalizeLogoPosition(state.logoPosition);
  const size = getLogoSize(state, slot, position);
  const gap = Math.max(3, Math.min(6, slot.hPt * 0.06));
  const padding = Math.max(4, Math.min(8, slot.hPt * 0.08));

  if (position === "watermark") {
    drawPdfImage(
      doc,
      state,
      slot.xPt + (slot.wPt - size) / 2,
      slot.yPt + (slot.hPt - size) / 2,
      size,
      0.14
    );
    drawPdfText(doc, content, style, slot);
    return;
  }

  if (position === "left") {
    const sideStyle = { ...style, verticalAlign: style.verticalAlign === "top" ? "middle" : style.verticalAlign };
    drawPdfImage(doc, state, slot.xPt + padding, slot.yPt + (slot.hPt - size) / 2, size);
    drawPdfText(doc, content, sideStyle, {
      ...slot,
      xPt: slot.xPt + padding + size + gap,
      wPt: Math.max(8, slot.wPt - padding * 2 - size - gap),
      hPt: slot.hPt,
    });
    return;
  }

  if (position === "right") {
    const sideStyle = { ...style, verticalAlign: style.verticalAlign === "top" ? "middle" : style.verticalAlign };
    drawPdfImage(doc, state, slot.xPt + slot.wPt - padding - size, slot.yPt + (slot.hPt - size) / 2, size);
    drawPdfText(doc, content, sideStyle, {
      ...slot,
      wPt: Math.max(8, slot.wPt - padding * 2 - size - gap),
      hPt: slot.hPt,
    });
    return;
  }

  if (position === "below") {
    drawPdfText(doc, content, style, {
      ...slot,
      hPt: Math.max(8, slot.hPt - padding - size - gap),
    });
    drawPdfImage(doc, state, slot.xPt + (slot.wPt - size) / 2, slot.yPt + slot.hPt - padding - size, size);
    return;
  }

  drawPdfImage(doc, state, slot.xPt + (slot.wPt - size) / 2, slot.yPt + padding, size);
  drawPdfText(doc, content, style, {
    ...slot,
    yPt: slot.yPt + padding + size + gap,
    hPt: Math.max(8, slot.hPt - padding * 2 - size - gap),
  });
}

export async function exportPdf(state, template, callbacks = {}) {
  const totalLabels = getTotalLabels(state);
  const slots = buildSlots(template);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));
  const doc = new jsPDF({ unit: "pt", format: "letter", compress: true });

  callbacks.onStart?.({ totalPages, totalLabels });

  for (let page = 0; page < totalPages; page += 1) {
    if (page > 0) doc.addPage("letter", "portrait");

    for (const slot of slots) {
      const absoluteIndex = page * template.perSheet + slot.index;
      if (absoluteIndex >= totalLabels && !state.overrides?.[absoluteIndex]) continue;

      const label = resolveLabelAt(state, absoluteIndex);
      if (label.skipped) continue;

      drawPdfLabel(doc, label.content, label.style, state, slot);
    }

    callbacks.onProgress?.({ currentPage: page + 1, totalPages, percent: Math.round(((page + 1) / totalPages) * 100) });
    if (page % 2 === 0) await waitForPaint();
  }

  doc.save(`labels-avery-${template.id}-${Date.now()}.pdf`);
  callbacks.onComplete?.({ totalPages, totalLabels });
  return { totalPages, totalLabels };
}

function createDocxImageParagraph(state, slot, position, alignment = AlignmentType.CENTER) {
  try {
    const imageSize = Math.max(8, Math.round(getLogoSize(state, slot, position) * PT_TO_PX));
    return new Paragraph({
      alignment,
      children: [
        new ImageRun({
          data: dataUrlToUint8Array(state.logoDataUrl),
          transformation: {
            width: imageSize,
            height: imageSize,
          },
        }),
      ],
      spacing: { before: 0, after: 0 },
    });
  } catch (error) {
    console.warn("Logo could not be embedded in DOCX:", error);
    return null;
  }
}

function createDocxTextParagraphs(content, style) {
  const lines = String(content || "").split(/\r?\n/);
  return (lines.length ? lines : [""]).map((line) =>
    new Paragraph({
      alignment: textAlignToDocx(style.alignment),
      children: [
        new TextRun({
          text: line,
          bold: style.isBold,
          italics: style.isItalic,
          size: style.fontSize * 2,
          font: docxFontFamily(style),
        }),
      ],
      spacing: {
        before: 0,
        after: 0,
        line: Math.round(style.fontSize * 24),
      },
    })
  );
}

function createDocxLogoTextTable(imageParagraph, textParagraphs, slot, position) {
  const imageWidth = Math.round(Math.min(slot.wTwip * 0.36, slot.hTwip));
  const textWidth = Math.max(1, Math.round(slot.wTwip - imageWidth));
  const borders = borderlessCellBorders();
  const imageCell = new TableCell({
    width: { size: imageWidth, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: position === "right"
      ? { top: 0, bottom: 0, left: 80, right: 0 }
      : { top: 0, bottom: 0, left: 0, right: 80 },
    borders,
    children: [imageParagraph],
  });
  const textCell = new TableCell({
    width: { size: textWidth, type: WidthType.DXA },
    verticalAlign: VerticalAlign.TOP,
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    borders,
    children: textParagraphs,
  });
  const children = position === "right" ? [textCell, imageCell] : [imageCell, textCell];

  return new Table({
    rows: [new TableRow({ children })],
    layout: TableLayoutType.FIXED,
    width: { size: 100, type: WidthType.PERCENTAGE },
  });
}

function createDocxParagraphs(content, style, state, slot) {
  const textParagraphs = createDocxTextParagraphs(content, style);
  const position = normalizeLogoPosition(state.logoPosition);

  if (!state.logoDataUrl) return textParagraphs.length ? textParagraphs : [new Paragraph("")];

  const imageAlignment = position === "above" || position === "below" || position === "watermark"
    ? AlignmentType.CENTER
    : textAlignToDocx(style.alignment);
  const imageParagraph = createDocxImageParagraph(state, slot, position, imageAlignment);
  if (!imageParagraph) return textParagraphs;

  if (position === "left" || position === "right") {
    return [createDocxLogoTextTable(imageParagraph, textParagraphs, slot, position)];
  }

  if (position === "below") {
    return [...textParagraphs, imageParagraph];
  }

  return [imageParagraph, ...textParagraphs];
}

function createEmptyCell(widthTwip) {
  return new TableCell({
    width: { size: widthTwip, type: WidthType.DXA },
    borders: borderlessCellBorders(),
    children: [new Paragraph("")],
  });
}

export async function exportDocx(state, template, callbacks = {}) {
  const totalLabels = getTotalLabels(state);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));
  const sections = [];

  callbacks.onStart?.({ totalPages, totalLabels });

  const layoutWidth = (template.cols * template.w + Math.max(0, template.cols - 1) * template.hGap) * TWIPS_PER_INCH;

  for (let page = 0; page < totalPages; page += 1) {
    const tableRows = [];

    for (let row = 0; row < template.rows; row += 1) {
      const cells = [];

      for (let col = 0; col < template.cols; col += 1) {
        const index = page * template.perSheet + row * template.cols + col;
        const slot = {
          wPt: template.w * 72,
          hPt: template.h * 72,
          wTwip: template.w * TWIPS_PER_INCH,
          hTwip: template.h * TWIPS_PER_INCH,
        };
        const label = index < totalLabels || state.overrides?.[index]
          ? resolveLabelAt(state, index)
          : { content: "", style: state.style, skipped: false };
        const logoPosition = normalizeLogoPosition(state.logoPosition);
        const cellVerticalAlign = state.logoDataUrl && (logoPosition === "left" || logoPosition === "right") && label.style.verticalAlign === "top"
          ? VerticalAlign.CENTER
          : verticalAlignToDocx(label.style.verticalAlign);

        cells.push(new TableCell({
          width: { size: slot.wTwip, type: WidthType.DXA },
          verticalAlign: cellVerticalAlign,
          margins: { top: 90, bottom: 50, left: 90, right: 90 },
          borders: borderlessCellBorders(),
          children: label.skipped ? [new Paragraph("")] : createDocxParagraphs(label.content, label.style, state, slot),
        }));

        if (col < template.cols - 1 && template.hGap > 0) {
          cells.push(createEmptyCell(template.hGap * TWIPS_PER_INCH));
        }
      }

      tableRows.push(new TableRow({
        children: cells,
        height: { value: template.h * TWIPS_PER_INCH, rule: HeightRule.EXACT },
      }));

      if (row < template.rows - 1 && template.vGap > 0) {
        tableRows.push(new TableRow({
          children: [createEmptyCell(layoutWidth)],
          height: { value: template.vGap * TWIPS_PER_INCH, rule: HeightRule.EXACT },
        }));
      }
    }

    sections.push({
      properties: {
        page: {
          margin: {
            top: Math.max(0, template.top * TWIPS_PER_INCH),
            left: Math.max(0, template.left * TWIPS_PER_INCH),
            right: Math.max(0, template.right * TWIPS_PER_INCH),
            bottom: Math.max(0, template.bottom * TWIPS_PER_INCH),
          },
          size: {
            width: LETTER.widthTwip,
            height: LETTER.heightTwip,
          },
        },
      },
      children: [
        new Table({
          rows: tableRows,
          layout: TableLayoutType.FIXED,
          width: { size: layoutWidth, type: WidthType.DXA },
        }),
      ],
    });

    callbacks.onProgress?.({ currentPage: page + 1, totalPages, percent: Math.round(((page + 1) / totalPages) * 100) });
    if (page % 2 === 0) await waitForPaint();
  }

  const document = new Document({ sections });
  const blob = await Packer.toBlob(document);
  saveBlob(blob, `labels-avery-${template.id}-${Date.now()}.docx`);
  callbacks.onComplete?.({ totalPages, totalLabels });
  return { totalPages, totalLabels };
}
