# LabelsPrint for Google Sheets

This folder contains the first production-oriented Google Sheets integration for LabelsPrint. It reads the active selected range, merges the selected rows into calibrated Avery-compatible layouts, and creates either a Google Doc or PDF in the user's Drive.

## Current Workflow

1. Select a range in Google Sheets. The first selected row must contain column headers.
2. Open `LabelsPrint > Create mail merge labels`.
3. Search for and select a calibrated Avery template.
4. Set the number of labels to generate and any used positions to skip on the first sheet.
5. Insert merge fields, format the text, and create a Google Doc or PDF.

The Workspace catalog currently mirrors the calibrated templates in `src/templates.js`. Keep `TemplateCatalog.gs` synchronized whenever web-app template geometry changes.

## Install for Development

1. Open a Google Sheet.
2. Choose `Extensions > Apps Script`.
3. Enable `Show "appsscript.json" manifest file in editor` in Project Settings.
4. Create or replace these project files:
   - `Code.gs`
   - `TemplateCatalog.gs`
   - `sidebar.html` (create an HTML file named `sidebar`)
   - `appsscript.json`
5. In Apps Script, open `Services`, choose `+`, and add **Drive API v3** if it is not already enabled by the manifest.
6. Save the project, reload the Sheet, and authorize LabelsPrint when prompted.
7. Use `LabelsPrint > Create mail merge labels`.

## Security and Permissions

- `spreadsheets.currentonly` reads only the open spreadsheet.
- `script.container.ui` adds the LabelsPrint menu and sidebar.
- `script.external_request` downloads the generated Google Doc from Google's Drive export endpoint as PDF bytes.
- `documents` creates the requested Google Doc label sheets.
- `drive.file` lets LabelsPrint export and manage only files created by the application.
- No API keys, access tokens, or user data are embedded in the sidebar.
- Selected cell values are sent only between the user's Sheet and the Apps Script runtime for the requested export.

The Advanced Drive service is used instead of the broad built-in `DriveApp` service so the extension can use the narrower `drive.file` scope.

The sidebar includes a responsive preview of the first selected row. It reflects the selected template's aspect ratio, merged content, typeface, font size, emphasis, and horizontal and vertical alignment. The preview is approximate; exported files use the calibrated dimensions in `TemplateCatalog.gs`.

## Print Notes

- Print at **100%** or **Actual size**. Disable browser or printer scaling.
- Test on plain paper before loading label stock.
- Google Docs can reflow text that is too large for a label. Keep content concise and use the preview before printing.

## Next Workspace Milestones

- Add logo and built-in icon placement.
- Add per-label editing and reset behavior.
- Package the script as a test deployment, then prepare the Marketplace listing and OAuth verification materials.
