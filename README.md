# LabelsPrint

LabelsPrint is a production-ready Avery-compatible label generator for standalone web use and Google Workspace sidebar workflows.

## What It Supports

- Grid-based Avery template selection for common address, shipping, return, file folder, badge, card, and square label formats.
- Comprehensive cleaned Avery catalog lookup with duplicate consolidation and normalized leading-zero/equivalent template codes.
- Manual entry, pasted rows, quoted CSV parsing, CSV upload, and selected Google Sheets ranges.
- Per-label modal overrides plus print-preview rendering that shares geometry with PDF and DOCX export.
- Client-side PDF/DOCX generation with export progress feedback.

## Security Notes

- The browser app does not require API keys.
- Imported address data is kept in memory by default. Device storage is limited to non-sensitive preferences such as selected template, typography, and zoom.
- Project export is an explicit user action that downloads a local JSON file.
- The Google Workspace sidebar uses Apps Script to read only the selected range, then creates the requested Google Doc or PDF output in the user's Drive.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The generated Avery catalog index lives in `src/averyTemplateCatalog.js`. It stores safe template codes only; raw URLs and pasted page fragments are intentionally excluded. The Workspace integration scaffold lives in `workspace-extension/`.
