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

The Vite build produces two public entry points in `dist/`:

- `/` is the static, indexable LabelsPrint marketing homepage.
- `/avery/` is the interactive label editor and is intentionally marked `noindex,follow`.

Cloudflare Pages should continue using `npm run build` with `dist` as the output directory.

The generated Avery catalog index lives in `src/averyTemplateCatalog.js`. It stores safe template codes only; raw URLs and pasted page fragments are intentionally excluded. The Workspace integration scaffold lives in `workspace-extension/`.

## Avery Template Imports

Calibrated layouts have one source of truth: `data/avery-templates.json`. Run `npm run templates:generate` after changing it to regenerate the browser and Google Workspace catalogs. `npm run templates:check` fails when either generated file is stale.

The **Import Avery templates** GitHub Action calls Avery's downloadables API from the runner, analyzes official PDFs, and opens a pull request for layouts that pass validation. The default dry run analyzes all catalog records still shown as **Coming soon** and uploads a report without modifying template data. A comma-separated SKU input limits the run to specific products.

For a local PDF calibration:

```bash
python -m pip install -r tools/requirements.txt
python tools/avery_template_import.py --sku 94224 --pdf /path/to/Avery94224RectangleLabels.pdf --dry-run
```

Downloaded PDFs are temporary and are never committed. The manifest records the originating SKU, endpoint, PDF SHA-256 checksum, import time, and parser version. If Avery later requires authentication, configure it only in GitHub Actions; never put credentials in browser code.
