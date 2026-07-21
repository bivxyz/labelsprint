# Google Workspace Extension

This folder contains a Google Sheets sidebar integration for LabelsPrint mail merge labels.

## Setup

1. Create a Google Apps Script project attached to a Sheet.
2. Copy `Code.gs`, `Sidebar.html`, and `appsscript.json` into the Apps Script project.
3. Reload the Sheet and open `LabelsPrint > Open mail merge labels`.
4. Select a range where the first row contains column headers.
5. Choose the Avery 5160 template, insert merge fields, then create either a PDF or Google Doc for printing.

The sidebar reads only the active selected range using the `spreadsheets.currentonly` scope. It requests Google Docs and Drive access only so it can create the print-ready Google Doc or PDF output in the user's Drive. No API keys are required, and no credentials are embedded in the web app or sidebar.
