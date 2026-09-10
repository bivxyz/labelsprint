import { createIcons, icons } from "lucide";

import { exportDocx, exportPdf } from "./exporters.js";
import {
  AVERY_TEMPLATES,
  buildSlots,
  getAllTemplateLibraryEntries,
  getTopTemplateEntries,
  getTemplateById,
  LETTER,
  POINTS_PER_INCH,
  templateMatchesSearch,
  validateTemplateGeometry,
} from "./templates.js";
import {
  DEFAULT_LABEL_TEMPLATE,
  DEFAULT_STYLE,
  clampNumber,
  deriveTemplateFromHeaders,
  getDataRows,
  getStyleForIndex,
  getTotalLabels,
  normalizeLabelOverrides,
  normalizeLabelStyle,
  parseCsvFile,
  parsePastedText,
  resolveLabelAt,
  rowsFromWorkspace,
  validateImportedProject,
} from "./templateEngine.js";
import { initWorkspaceBridge, isWorkspaceMode } from "./workspaceBridge.js";

const PREF_KEY = "labelsprint_preferences_v3";
const PROJECT_VERSION = "3.0";
const LOGO_POSITIONS = new Set(["above", "below", "left", "right", "watermark"]);
const ICON_PRESETS = Object.freeze([
  {
    category: "Popular",
    icons: [
      { value: "\u2B50", label: "Star" },
      { value: "\u2764\uFE0F", label: "Heart" },
      { value: "\u2728", label: "Sparkles" },
      { value: "\u2705", label: "Check" },
      { value: "\uD83C\uDF89", label: "Celebration" },
      { value: "\uD83C\uDFF7\uFE0F", label: "Tag" },
    ],
  },
  {
    category: "Holiday",
    icons: [
      { value: "\uD83C\uDF85", label: "Santa" },
      { value: "\uD83C\uDF84", label: "Christmas tree" },
      { value: "\uD83C\uDF81", label: "Gift" },
      { value: "\u2744\uFE0F", label: "Snowflake" },
      { value: "\uD83E\uDD83", label: "Thanksgiving" },
      { value: "\uD83C\uDF83", label: "Pumpkin" },
    ],
  },
  {
    category: "Events",
    icons: [
      { value: "\uD83C\uDF82", label: "Birthday cake" },
      { value: "\uD83D\uDC8D", label: "Wedding ring" },
      { value: "\uD83C\uDF38", label: "Flower" },
      { value: "\uD83C\uDFE1", label: "Home" },
      { value: "\uD83D\uDCE6", label: "Package" },
      { value: "\u2709\uFE0F", label: "Envelope" },
    ],
  },
]);const TUTORIAL_KEY = "labelsprint_tutorial_seen";

const sampleRows = [
  { name: "John Doe", address: "123 Street Ave", city_state_zip: "City, State 12345" },
  { name: "Jane Doe", address: "456 Label Lane", city_state_zip: "City, State 12345" },
  { name: "Sample Recipient", address: "789 Mail Merge Rd", city_state_zip: "City, State 12345" },
];

let state = {
  projectId: crypto.randomUUID(),
  templateId: "5160",
  inputMethod: "manual",
  manualCount: 30,
  firstRowIsHeader: true,
  data: [],
  headers: [],
  labelTemplate: DEFAULT_LABEL_TEMPLATE,
  overrides: {},
  style: { ...DEFAULT_STYLE },
  skipCount: 0,
  zoom: 0.72,
  logoDataUrl: null,
  logoName: "",
  logoEmoji: "",
  logoPosition: "above",
  logoSize: 30,
  workspaceSource: "",
  exportBusy: false,
  activeEditIndex: null,
  sessionLabelsGenerated: 0,
};

let els = {};
let undoStack = [];
let redoStack = [];
let tutorialIndex = 0;
let tutorialIsOpen = false;
let templateLibraryMode = "top";
const templateFilters = {
  shape: "Any",
  category: "Any",
  perSheet: "Any",
};

const tutorialSteps = [
  {
    target: "#dataSourceSection",
    title: "Choose data",
    body: "Start with manual entry, pasted rows, or a CSV mail merge.",
  },
  {
    target: "#labelTemplate",
    title: "Enter label text",
    body: "Type the label text or insert merge fields from your data.",
  },
  {
    target: "#formatSection",
    title: "Format labels",
    body: "Set typeface, size, alignment, bold, italic, and uppercase.",
  },
  {
    target: "#logoSection",
    title: "Add a logo",
    body: "Upload a logo and place it above, below, left, right, or as a watermark.",
  },
  {
    target: "#previewArea",
    title: "Preview the sheet",
    body: "Review labels exactly as they will print before exporting.",
  },
  {
    target: "#labelModal",
    fallbackTarget: "#previewArea",
    title: "Edit one label",
    body: "Select any label single to customize or reset only that label.",
  },
  {
    target: "#exportControls",
    title: "Finish",
    body: "Download PDF/DOCX or print directly when the sheet looks right.",
  },
];

function cloneStateSnapshot(source = state) {
  return JSON.parse(JSON.stringify({
    ...source,
    exportBusy: false,
    activeEditIndex: null,
  }));
}

function pushHistory() {
  undoStack.push(cloneStateSnapshot());
  if (undoStack.length > 80) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function restoreHistorySnapshot(snapshot) {
  state = {
    ...state,
    ...cloneStateSnapshot(snapshot),
    exportBusy: false,
    activeEditIndex: null,
  };
  savePreferences();
  closeLabelModal();
  closeTemplateModal();
  renderAll();
}

function undoChange() {
  if (!undoStack.length) return;
  redoStack.push(cloneStateSnapshot());
  restoreHistorySnapshot(undoStack.pop());
}

function redoChange() {
  if (!redoStack.length) return;
  undoStack.push(cloneStateSnapshot());
  restoreHistorySnapshot(redoStack.pop());
}

function updateHistoryButtons() {
  if (!els.undoButton || !els.redoButton) return;
  els.undoButton.disabled = undoStack.length === 0;
  els.redoButton.disabled = redoStack.length === 0;
}

function normalizeLogoPosition(position) {
  if (position === "top-left") return "above";
  if (position === "top-right") return "right";
  if (position === "center") return "watermark";
  return LOGO_POSITIONS.has(position) ? position : "above";
}

function html(strings, ...values) {
  return strings.reduce((result, part, index) => `${result}${part}${values[index] ?? ""}`, "");
}

function renderIconLibraryMarkup() {
  return ICON_PRESETS.map((group) => `
    <div class="icon-library-group">
      <p class="icon-library-title">${group.category}</p>
      <div class="icon-picker-grid">
        ${group.icons.map((icon) => `
          <button class="icon-preset-button" type="button" data-icon="${icon.value}" data-label="${icon.label}" aria-label="Use ${icon.label} icon">
            <span aria-hidden="true">${icon.value}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function emojiToLogoDataUrl(emoji) {
  const canvas = document.createElement("canvas");
  const size = 256;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return "";

  context.clearRect(0, 0, size, size);
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = '180px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
  context.fillText(emoji, size / 2, size / 2 + 6);
  return canvas.toDataURL("image/png");
}

function selectIconPreset(emoji, label) {
  const logoDataUrl = emojiToLogoDataUrl(emoji);
  if (!logoDataUrl) {
    showToast("Unable to add that icon.", "error");
    return;
  }

  pushHistory();
  state.logoDataUrl = logoDataUrl;
  state.logoName = `${label} icon`;
  state.logoEmoji = emoji;
  state.logoPosition = normalizeLogoPosition(state.logoPosition || "above");
  state.logoSize = clampNumber(state.logoSize, 5, 100, 30);
  savePreferences();
  renderAll();
  showToast(`${label} icon added.`, "success");
}

function renderShell() {
  document.querySelector("#app").innerHTML = html`
    <header class="app-header">
      <div class="app-promo-bar">
        <p>Free label maker for Avery-compatible sheets.</p>
      </div>
      <div class="app-main-nav">
        <a class="labelsprint-wordmark" href="/" aria-label="LabelsPrint homepage">
          <span class="labelsprint-mark" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </span>
          <span>LabelsPrint.app</span>
        </a>
        <nav class="app-nav-links" aria-label="LabelsPrint navigation">
          <a href="/avery/">Label Maker</a>
          <button class="nav-link-button" type="button" data-open-template-library>Templates</button>
          <a href="/#workspace">Workspace</a>
          <a href="/#faq">FAQ</a>
          <a href="/privacy.html">Privacy</a>
        </nav>
      </div>
      <div class="tool-action-bar">
        <div id="workspaceChip" class="status-chip hidden">
          <i data-lucide="table-2"></i>
          <span>Workspace</span>
        </div>
        <button id="templateButton" class="toolbar-button primary-soft" type="button">
          <i data-lucide="layout-template"></i>
          <span id="templateButtonLabel">Avery 5160</span>
        </button>
        <button id="undoButton" class="toolbar-button icon-only" type="button" title="Undo" aria-label="Undo">
          <i data-lucide="undo-2"></i>
        </button>
        <button id="redoButton" class="toolbar-button icon-only" type="button" title="Redo" aria-label="Redo">
          <i data-lucide="redo-2"></i>
        </button>
        <button id="tutorialButton" class="toolbar-button" type="button">
          <i data-lucide="circle-help"></i>
          <span>Tutorial</span>
        </button>
        <label class="toolbar-button" for="projectImport">
          <i data-lucide="upload-cloud"></i>
          <span>Import</span>
        </label>
        <input id="projectImport" class="sr-only" type="file" accept="application/json,.json">
        <button id="projectExport" class="toolbar-button icon-only" type="button" title="Save project" aria-label="Save project">
          <i data-lucide="save"></i>
        </button>
        <button id="startOver" class="toolbar-button danger" type="button">
          <i data-lucide="refresh-ccw"></i>
          <span>Reset</span>
        </button>
        <div class="header-spacer"></div>
        <div id="exportControls" class="header-export-group">
          <details id="downloadMenu" class="download-menu">
            <summary class="export-button">
              <i data-lucide="download"></i>
              <span>Download</span>
              <i data-lucide="chevron-down"></i>
            </summary>
            <div class="download-options">
              <button id="downloadPdf" type="button">
                <i data-lucide="file-down"></i>
                <span>PDF</span>
              </button>
              <button id="downloadDocx" type="button">
                <i data-lucide="file-text"></i>
                <span>DOCX</span>
              </button>
            </div>
          </details>
          <button id="printLabels" class="export-button dark" type="button">
            <i data-lucide="printer"></i>
            <span>Print</span>
          </button>
        </div>
      </div>
    </header>

    <main class="app-grid">
      <aside class="control-panel">
        <section id="dataSourceSection" class="panel-section">
          <div class="section-heading">
            <div>
              <div class="step-kicker">
                <p>Step 1</p>
                <span class="step-help" tabindex="0" aria-label="Step 1 help" data-help="Choose how to create Avery-compatible labels: type one label manually, paste multiple addresses, or upload a CSV for mail merge.">?</span>
              </div>
              <h2>Data Source</h2>
            </div>
            <span id="dataSummary" class="mini-metric">Manual</span>
          </div>

          <div class="segmented-control" role="tablist" aria-label="Data source">
            <button class="mode-button" data-mode="manual" type="button">Manual</button>
            <button class="mode-button" data-mode="paste" type="button">Paste</button>
            <button class="mode-button" data-mode="upload" type="button">CSV</button>
          </div>

          <div id="manualPanel" class="mode-panel">
          </div>

          <div id="pastePanel" class="mode-panel hidden">
            <label class="field-label" for="pasteArea">Paste rows or address blocks</label>
            <textarea id="pasteArea" class="input-control mono tall" spellcheck="false" placeholder="Name,Address,City State Zip"></textarea>
            <label class="check-row">
              <input id="pasteHeader" type="checkbox">
              <span>First row contains headers</span>
            </label>
            <button id="processPaste" class="action-button" type="button">
              <i data-lucide="wand-2"></i>
              Process rows
            </button>
          </div>

          <div id="uploadPanel" class="mode-panel hidden">
            <label class="check-row">
              <input id="uploadHeader" type="checkbox">
              <span>First row contains headers</span>
            </label>
            <label id="dropZone" class="drop-zone" for="csvInput">
              <i data-lucide="upload"></i>
              <strong id="fileName">Choose CSV</strong>
              <span>or drop a file here</span>
            </label>
            <input id="csvInput" class="sr-only" type="file" accept=".csv,text/csv">
          </div>
        </section>

        <section id="sheetSetupSection" class="panel-section">
          <div class="section-heading">
            <div>
              <div class="step-kicker">
                <p>Step 2</p>
                <span class="step-help" tabindex="0" aria-label="Step 2 help" data-help="Use this when printing on a partially used Avery sheet.">?</span>
              </div>
              <h2>Sheet Setup</h2>
            </div>
          </div>
          <div class="sheet-setup-row">
            <label>
              <span class="field-label">Labels to generate</span>
              <input id="manualCount" class="input-control compact" type="number" min="1" max="25000">
            </label>
            <label>
              <span class="field-label">Skip used labels</span>
              <input id="skipCount" class="input-control compact" type="number" min="0">
            </label>
          </div>
        </section>

        <section id="mergeSection" class="panel-section hidden">
          <div class="section-heading">
            <div>
              <p>Mail merge</p>
              <h2>Merge Fields</h2>
            </div>
          </div>
          <div id="fieldPills" class="field-pills"></div>
        </section>

        <section id="labelContentSection" class="panel-section">
          <div class="section-heading">
            <div>
              <div class="step-kicker">
                <p>Step 3</p>
                <span class="step-help" tabindex="0" aria-label="Step 3 help" data-help="Enter name, street address, city, state, and ZIP code exactly as you want them printed.">?</span>
              </div>
              <h2>Label Content</h2>
            </div>
            <button id="clearOverrides" class="text-button hidden" type="button">Clear custom labels</button>
          </div>
          <textarea id="labelTemplate" class="input-control editor" spellcheck="false"></textarea>

          <div id="formatSection" class="format-section">
            <div id="formatControls" class="style-grid">
              <label>
                <span class="field-label">Typeface</span>
                <select id="fontFamily" class="input-control compact">
                  <option value="arial">Arial</option>
                  <option value="roboto">Roboto</option>
                  <option value="georgia">Georgia</option>
                  <option value="times">Times New Roman</option>
                  <option value="courier">Courier New</option>
                </select>
              </label>
              <label>
                <span class="field-label">Font size</span>
                <input id="fontSize" class="input-control compact" type="number" min="6" max="36">
              </label>
            </div>

            <div class="button-row" aria-label="Horizontal alignment">
              <button class="icon-toggle align-toggle" data-align="left" type="button" title="Align left"><i data-lucide="align-left"></i></button>
              <button class="icon-toggle align-toggle" data-align="center" type="button" title="Align center"><i data-lucide="align-center"></i></button>
              <button class="icon-toggle align-toggle" data-align="right" type="button" title="Align right"><i data-lucide="align-right"></i></button>
            </div>

            <div class="button-row" aria-label="Vertical alignment">
              <button class="icon-toggle valign-toggle" data-valign="top" type="button" title="Align top"><i data-lucide="align-vertical-justify-start"></i></button>
              <button class="icon-toggle valign-toggle" data-valign="middle" type="button" title="Align middle"><i data-lucide="align-vertical-justify-center"></i></button>
              <button class="icon-toggle valign-toggle" data-valign="bottom" type="button" title="Align bottom"><i data-lucide="align-vertical-justify-end"></i></button>
            </div>

            <div class="button-row" aria-label="Text style">
              <button id="boldToggle" class="icon-toggle" type="button" title="Bold"><i data-lucide="bold"></i></button>
              <button id="italicToggle" class="icon-toggle" type="button" title="Italic"><i data-lucide="italic"></i></button>
              <button id="upperToggle" class="icon-toggle text-toggle" type="button" title="Uppercase">AA</button>
            </div>
          </div>
        </section>

        <section id="logoSection" class="panel-section">
          <div class="section-heading">
            <div>
              <p>Optional</p>
              <h2>Logo</h2>
            </div>
            <button id="removeLogo" class="text-button hidden" type="button">Remove</button>
          </div>
                <label id="logoDrop" class="drop-zone compact-drop" for="logoInput">
                  <i data-lucide="image-plus"></i>
                  <strong id="logoName">Add logo or icon</strong>
                  <span>PNG, JPG, or WebP</span>
                </label>
                <input id="logoInput" class="sr-only" type="file" accept="image/png,image/jpeg,image/webp">
                <div class="icon-library" aria-label="Built-in icon library">
                  <div class="icon-library-header">
                    <strong>Or choose an icon</strong>
                    <span>Pick one, then set position &amp; size below.</span>
                  </div>
                  ${renderIconLibraryMarkup()}
                </div>
                <div id="logoControls" class="style-grid hidden">
            <label>
              <span class="field-label">Position</span>
              <select id="logoPosition" class="input-control compact">
                <option value="above">Above text</option>
                <option value="below">Below text</option>
                <option value="left">Left of text</option>
                <option value="right">Right of text</option>
                <option value="watermark">Watermark</option>
              </select>
            </label>
            <label>
              <span class="field-label">Size</span>
              <input id="logoSize" class="input-control compact" type="number" min="5" max="100">
            </label>
          </div>
        </section>
      </aside>

      <section class="preview-panel">
        <div class="preview-toolbar">
          <div>
            <p id="templateMeta" class="preview-kicker">Avery template</p>
            <h2 id="previewTitle">Live sheet preview</h2>
          </div>
          <div class="preview-actions">
            <span id="fillCounter" class="counter-chip">0 labels</span>
            <select id="zoomSelect" class="zoom-select" aria-label="Zoom">
              <option value="fit">Fit</option>
              <option value="0.5">50%</option>
              <option value="0.72">72%</option>
              <option value="1">100%</option>
              <option value="1.25">125%</option>
            </select>
          </div>
        </div>
        <div id="previewArea" class="sheet-preview">
          <div id="pagesContainer"></div>
        </div>
      </section>
    </main>

    <div id="templateModal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="templateModalTitle">
      <div class="modal-card wide">
        <div class="modal-header">
          <div>
            <p>Template Library</p>
            <h2 id="templateModalTitle">Choose an Avery format</h2>
          </div>
          <button id="closeTemplateModal" class="icon-toggle" type="button" aria-label="Close"><i data-lucide="x"></i></button>
        </div>
        <div class="template-browser">
          <aside class="template-filters" aria-label="Template filters">
            <label>
              <span class="field-label">Search</span>
              <input id="templateSearch" class="input-control search" type="search" placeholder="Avery number, size, or type">
            </label>
            <label>
              <span class="field-label">Form</span>
              <select id="templateShapeFilter" class="input-control compact">
                <option>Any</option>
                <option>Rectangle</option>
                <option>Square</option>
                <option>Round</option>
                <option>Oval</option>
                <option>Custom/Other</option>
              </select>
            </label>
            <label>
              <span class="field-label">Category</span>
              <select id="templateCategoryFilter" class="input-control compact">
                <option>Any</option>
                <option>Address</option>
                <option>Shipping</option>
                <option>Return</option>
                <option>File Folder</option>
                <option>Cards</option>
                <option>Badges</option>
                <option>Specialty</option>
              </select>
            </label>
            <label>
              <span class="field-label">Labels per sheet</span>
              <select id="templatePerSheetFilter" class="input-control compact">
                <option>Any</option>
                <option>1-4</option>
                <option>5-10</option>
                <option>11-30</option>
                <option>31-80</option>
                <option>80+</option>
              </select>
            </label>
            <button id="clearTemplateFilters" class="text-button hidden" type="button">Clear filters</button>
          </aside>
          <section class="template-results" aria-live="polite">
            <div class="template-results-header">
              <p id="templateResultsCount" class="template-section-title">Top Avery templates</p>
            </div>
            <div id="templateGrid" class="template-grid"></div>
          </section>
        </div>
      </div>
    </div>

    <div id="labelModal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="labelModalTitle">
      <div class="modal-card">
        <div class="modal-header">
          <div>
            <p>Custom Label</p>
            <h2 id="labelModalTitle">Edit selected label</h2>
          </div>
          <button id="closeLabelModal" class="icon-toggle" type="button" aria-label="Close"><i data-lucide="x"></i></button>
        </div>
        <textarea id="labelModalBody" class="input-control editor modal-editor" spellcheck="false"></textarea>
        <div class="modal-actions">
          <button id="resetLabel" class="toolbar-button danger" type="button">Reset label</button>
          <div class="header-spacer"></div>
          <button id="cancelLabel" class="toolbar-button" type="button">Cancel</button>
          <button id="saveLabel" class="export-button" type="button">Save label</button>
        </div>
      </div>
    </div>

    <div id="exportModal" class="modal-backdrop hidden" role="status" aria-live="polite">
      <div class="export-card">
        <div class="spinner"></div>
        <div>
          <h2 id="exportTitle">Preparing export</h2>
          <p id="exportDetail">Building print-ready pages...</p>
          <div class="progress-track">
            <span id="exportProgress"></span>
          </div>
        </div>
      </div>
    </div>

    <div id="tutorialOverlay" class="tutorial-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="tutorialTitle" aria-describedby="tutorialBody">
      <div id="tutorialSpotlight" class="tutorial-spotlight" aria-hidden="true"></div>
      <section id="tutorialCard" class="tutorial-card">
        <div class="tutorial-card-header">
          <div id="tutorialDots" class="tutorial-dots" aria-label="Tutorial progress"></div>
          <button id="tutorialSkip" class="text-button" type="button">Skip</button>
        </div>
        <h2 id="tutorialTitle">Tutorial</h2>
        <p id="tutorialBody"></p>
        <div class="tutorial-actions">
          <button id="tutorialBack" class="toolbar-button" type="button">Back</button>
          <button id="tutorialNext" class="export-button" type="button">Next</button>
        </div>
      </section>
    </div>

    <div id="toast" class="toast hidden"></div>
  `;
}

function cacheElements() {
  const ids = [
    "workspaceChip", "templateButton", "templateButtonLabel", "projectImport", "projectExport", "startOver",
    "undoButton", "redoButton", "tutorialButton", "exportControls", "downloadMenu", "downloadPdf", "downloadDocx", "printLabels", "dataSummary", "manualPanel", "pastePanel", "uploadPanel", "manualCount",
    "pasteArea", "pasteHeader", "uploadHeader", "processPaste", "dropZone", "csvInput", "fileName",
    "mergeSection", "fieldPills", "clearOverrides", "labelTemplate", "fontFamily", "fontSize", "skipCount", "boldToggle",
    "italicToggle", "upperToggle", "logoInput", "logoName", "removeLogo", "logoControls", "logoPosition",
    "logoSize", "templateMeta", "previewTitle", "fillCounter", "zoomSelect", "previewArea", "pagesContainer",
    "templateModal", "closeTemplateModal", "templateSearch", "templateShapeFilter", "templateCategoryFilter",
    "templatePerSheetFilter", "clearTemplateFilters", "templateResultsCount", "templateGrid", "labelModal", "closeLabelModal",
    "labelModalTitle", "labelModalBody", "resetLabel", "cancelLabel", "saveLabel", "exportModal", "exportTitle",
    "exportDetail", "exportProgress", "tutorialOverlay", "tutorialSpotlight", "tutorialCard", "tutorialDots",
    "tutorialSkip", "tutorialTitle", "tutorialBody", "tutorialBack", "tutorialNext", "toast",
  ];
  els = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
  els.modeButtons = [...document.querySelectorAll(".mode-button")];
  els.alignToggles = [...document.querySelectorAll(".align-toggle")];
  els.valignToggles = [...document.querySelectorAll(".valign-toggle")];
  els.iconPresetButtons = [...document.querySelectorAll(".icon-preset-button")];
  els.templateLibraryButtons = [...document.querySelectorAll("[data-open-template-library]")];
}

function loadPreferences() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
    state = {
      ...state,
      templateId: parsed.templateId || state.templateId,
      inputMethod: parsed.inputMethod || state.inputMethod,
      manualCount: clampNumber(parsed.manualCount, 1, 25000, state.manualCount),
      firstRowIsHeader: parsed.firstRowIsHeader !== false,
      style: normalizeLabelStyle(parsed.style),
      skipCount: clampNumber(parsed.skipCount, 0, 25000, 0),
      zoom: Number.isFinite(parsed.zoom) ? parsed.zoom : state.zoom,
      logoDataUrl: parsed.logoEmoji ? emojiToLogoDataUrl(parsed.logoEmoji) : null,
      logoName: parsed.logoEmoji ? `${parsed.logoName || "Selected"} icon` : "",
      logoEmoji: parsed.logoEmoji || "",
      logoPosition: normalizeLogoPosition(parsed.logoPosition || state.logoPosition),
      logoSize: clampNumber(parsed.logoSize, 5, 100, state.logoSize),
    };
  } catch {
    localStorage.removeItem(PREF_KEY);
  }
}

function savePreferences() {
  const prefs = {
    templateId: state.templateId,
    inputMethod: state.inputMethod,
    manualCount: state.manualCount,
    firstRowIsHeader: state.firstRowIsHeader,
    style: state.style,
    skipCount: state.skipCount,
    zoom: state.zoom,
    logoEmoji: state.logoEmoji,
    logoName: state.logoEmoji ? state.logoName : "",
    logoPosition: state.logoPosition,
    logoSize: state.logoSize,
  };
  localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
}

function selectedTemplate() {
  return getTemplateById(state.templateId);
}

function showToast(message, tone = "info") {
  els.toast.textContent = message;
  els.toast.dataset.tone = tone;
  els.toast.classList.remove("hidden");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => els.toast.classList.add("hidden"), 4200);
}

function setBusy(isBusy) {
  state.exportBusy = isBusy;
  els.downloadPdf.disabled = isBusy;
  els.downloadDocx.disabled = isBusy;
  els.printLabels.disabled = isBusy;
  els.downloadPdf.classList.toggle("is-busy", isBusy);
  els.downloadDocx.classList.toggle("is-busy", isBusy);
  els.printLabels.classList.toggle("is-busy", isBusy);
}

function showExportProgress(title, detail, percent = 0) {
  els.exportTitle.textContent = title;
  els.exportDetail.textContent = detail;
  els.exportProgress.style.width = `${Math.max(4, percent)}%`;
  els.exportModal.classList.remove("hidden");
}

function hideExportProgress() {
  els.exportModal.classList.add("hidden");
}

function getAveryTemplateUrl(code) {
  return `https://www.avery.com/templates/${encodeURIComponent(String(code || "").trim())}`;
}

function createAveryLink(code) {
  const link = document.createElement("a");
  link.className = "template-external-link";
  link.href = getAveryTemplateUrl(code);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.title = `Open Avery ${code} template`;
  link.setAttribute("aria-label", `Open Avery ${code} template on avery.com`);

  const icon = document.createElement("i");
  icon.dataset.lucide = "external-link";
  link.appendChild(icon);

  return link;
}

function getTemplateEntrySearchText(entry) {
  if (entry.type === "template") {
    const template = entry.template;
    return [
      entry.code,
      ...(template.aliases || []),
      template.category,
      template.shape,
      template.pageSize,
      template.name,
      template.description,
      `${template.w}x${template.h}`,
      `${template.perSheet}`,
    ].join(" ").toLowerCase();
  }

  const codes = [entry.record.code, ...(entry.record.codes || [])];
  return codes.join(" ").toLowerCase();
}

function getEntryShape(entry) {
  return entry.type === "template" ? entry.template.shape : "Custom/Other";
}

function getEntryCategory(entry) {
  return entry.type === "template" ? entry.template.category : "Specialty";
}

function getEntryPerSheet(entry) {
  return entry.type === "template" ? entry.template.perSheet : null;
}

function perSheetMatches(value, range) {
  if (range === "Any") return true;
  if (!Number.isFinite(value)) return false;
  if (range === "1-4") return value >= 1 && value <= 4;
  if (range === "5-10") return value >= 5 && value <= 10;
  if (range === "11-30") return value >= 11 && value <= 30;
  if (range === "31-80") return value >= 31 && value <= 80;
  if (range === "80+") return value > 80;
  return true;
}

function hasActiveTemplateFilters() {
  return Boolean(
    els.templateSearch.value.trim()
    || templateFilters.shape !== "Any"
    || templateFilters.category !== "Any"
    || templateFilters.perSheet !== "Any"
  );
}

function templateEntryMatchesFilters(entry) {
  const query = els.templateSearch.value.trim().toLowerCase();
  if (query && !getTemplateEntrySearchText(entry).includes(query) && (entry.type !== "template" || !templateMatchesSearch(entry.template, query))) {
    return false;
  }
  if (templateFilters.shape !== "Any" && getEntryShape(entry) !== templateFilters.shape) return false;
  if (templateFilters.category !== "Any" && getEntryCategory(entry) !== templateFilters.category) return false;
  if (!perSheetMatches(getEntryPerSheet(entry), templateFilters.perSheet)) return false;
  return true;
}

function createTemplatePreview(template) {
  const preview = document.createElement("div");
  preview.className = "template-preview";

  const sheet = document.createElement("div");
  sheet.className = "template-preview-sheet";
  const scale = 124 / LETTER.widthIn;
  sheet.style.width = `${LETTER.widthIn * scale}px`;
  sheet.style.height = `${LETTER.heightIn * scale}px`;

  buildSlots(template).forEach((slot) => {
    const cell = document.createElement("span");
    cell.className = `template-preview-cell shape-${template.shape.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    cell.style.left = `${slot.xIn * scale}px`;
    cell.style.top = `${slot.yIn * scale}px`;
    cell.style.width = `${slot.wIn * scale}px`;
    cell.style.height = `${slot.hIn * scale}px`;
    sheet.appendChild(cell);
  });

  preview.appendChild(sheet);
  return preview;
}

function createCatalogPreview() {
  const preview = document.createElement("div");
  preview.className = "template-preview catalog-preview";
  const sheet = document.createElement("div");
  sheet.className = "template-preview-sheet";
  for (let index = 0; index < 12; index += 1) {
    const cell = document.createElement("span");
    cell.className = "template-preview-cell placeholder";
    sheet.appendChild(cell);
  }
  preview.appendChild(sheet);
  return preview;
}

function createTemplateCard(template, contextLabel = "Top template", representedCodes = [], displayCode = "") {
  const errors = validateTemplateGeometry(template);
  const card = document.createElement("article");
  card.className = "template-card";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "template-card-main";
  const normalizedDisplayCode = String(displayCode || "").trim();
  card.classList.toggle("active", template.id === selectedTemplate().id || normalizedDisplayCode === selectedTemplate().id);
  button.dataset.templateId = template.id;
  const averyCode = normalizedDisplayCode || template.id;

  const title = document.createElement("strong");
  title.textContent = normalizedDisplayCode ? `Avery ${normalizedDisplayCode}` : template.name;

  const description = document.createElement("span");
  description.textContent = template.description;

  const meta = document.createElement("small");
  meta.textContent = `${template.w}" x ${template.h}" | ${template.rows} x ${template.cols}`;
  if (normalizedDisplayCode && normalizedDisplayCode !== template.id) {
    meta.textContent += ` | Uses ${template.name}`;
  } else if (representedCodes.length > 1) {
    meta.textContent += ` | Top IDs ${representedCodes.join(", ")}`;
  }

  const category = document.createElement("em");
  category.textContent = errors.length ? "Check geometry" : contextLabel;

  button.append(createTemplatePreview(template), title, description, meta, category);
  card.append(button, createAveryLink(averyCode));
  button.addEventListener("click", () => {
    pushHistory();
    state.templateId = template.id;
    state.skipCount = Math.min(state.skipCount, template.perSheet - 1);
    savePreferences();
    closeTemplateModal();
    renderAll();
  });

  return card;
}

function createCatalogCard(record, listStyle = false, representedCodes = []) {
  const card = document.createElement("article");
  card.className = listStyle ? "template-card catalog-only list-item" : "template-card catalog-only";
  const content = document.createElement("div");
  content.className = "template-card-main";

  const title = document.createElement("strong");
  title.textContent = `Avery ${record.code}`;

  const description = document.createElement("span");
  description.textContent = "Imported Avery catalog record";

  const aliases = (record.codes || []).filter((code) => code !== record.code);
  const meta = document.createElement("small");
  meta.textContent = representedCodes.length > 1
    ? `Top IDs ${representedCodes.join(", ")}`
    : aliases.length
      ? `Also listed as ${aliases.slice(0, 4).join(", ")}`
      : `${record.sourceRows} catalog source row${record.sourceRows === 1 ? "" : "s"}`;

  const category = document.createElement("em");
  category.textContent = "Coming soon";

  content.append(createCatalogPreview(), title, description, meta, category);
  card.append(content, createAveryLink(record.code));
  return card;
}

function renderTemplateGrid() {
  const activeFilters = hasActiveTemplateFilters();
  const searchQuery = els.templateSearch.value.trim();
  const isSearching = Boolean(searchQuery);
  const showAll = templateLibraryMode === "all" || activeFilters;
  const fragment = document.createDocumentFragment();
  const allEntries = getAllTemplateLibraryEntries();
  const readyEntries = allEntries.filter((entry) => entry.type === "template");
  const baseEntries = isSearching
    ? allEntries
    : showAll
      ? readyEntries
      : getTopTemplateEntries().filter((entry) => entry.type === "template");
  const entries = baseEntries.filter(templateEntryMatchesFilters);
  const readyCount = entries.filter((entry) => entry.type === "template").length;
  const comingSoonCount = entries.length - readyCount;
  const allReadyCount = readyEntries.length;

  els.templateGrid.innerHTML = "";
  els.templateGrid.classList.toggle("list", false);
  els.templateResultsCount.textContent = isSearching
    ? `${entries.length.toLocaleString()} match${entries.length === 1 ? "" : "es"} | ${readyCount.toLocaleString()} ready | ${comingSoonCount.toLocaleString()} coming soon`
    : showAll
      ? `${entries.length.toLocaleString()} ready template${entries.length === 1 ? "" : "s"}`
      : `${entries.length.toLocaleString()} top templates | ${allReadyCount.toLocaleString()} ready in catalog`;
  els.clearTemplateFilters.classList.toggle("hidden", !activeFilters);
  els.templateShapeFilter.value = templateFilters.shape;
  els.templateCategoryFilter.value = templateFilters.category;
  els.templatePerSheetFilter.value = templateFilters.perSheet;

  entries.forEach((entry) => {
    if (entry.type === "template") {
      fragment.appendChild(createTemplateCard(entry.template, showAll ? entry.template.category : "Top template", entry.codes, entry.code));
    } else {
      fragment.appendChild(createCatalogCard(entry.record, showAll, entry.codes));
    }
  });

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = isSearching
      ? `No Avery template matches “${searchQuery}”.`
      : "No ready Avery templates match these filters.";
    fragment.appendChild(empty);
  }

  if (!activeFilters && templateLibraryMode === "top") {
    const seeAll = document.createElement("button");
    seeAll.type = "button";
    seeAll.className = "template-see-all";
    seeAll.textContent = `See all ${allReadyCount.toLocaleString()} ready Avery templates`;
    seeAll.addEventListener("click", () => {
      templateLibraryMode = "all";
      renderTemplateGrid();
    });
    fragment.appendChild(seeAll);
  }

  if (!activeFilters && templateLibraryMode === "all") {
    const showTop = document.createElement("button");
    showTop.type = "button";
    showTop.className = "template-see-all";
    showTop.textContent = "Back to top templates";
    showTop.addEventListener("click", () => {
      templateLibraryMode = "top";
      renderTemplateGrid();
    });
    fragment.appendChild(showTop);
  }

  els.templateGrid.appendChild(fragment);
  createIcons({ icons });
}

function openTemplateModal() {
  templateLibraryMode = "top";
  els.templateModal.classList.remove("hidden");
  els.templateSearch.focus();
  renderTemplateGrid();
}

function closeTemplateModal() {
  els.templateModal.classList.add("hidden");
}

function setInputMethod(mode) {
  if (state.inputMethod === mode) return;
  pushHistory();
  state.inputMethod = mode;
  savePreferences();
  renderAll();
}

function setHeadersAndRows({ data, headers }) {
  state.data = data;
  state.headers = headers;
  state.overrides = {};
  if (!state.labelTemplate || state.labelTemplate === DEFAULT_LABEL_TEMPLATE) {
    state.labelTemplate = deriveTemplateFromHeaders(headers);
  }
}

function renderDataControls() {
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.inputMethod);
  });

  els.manualPanel.classList.toggle("hidden", state.inputMethod !== "manual");
  els.pastePanel.classList.toggle("hidden", state.inputMethod !== "paste");
  els.uploadPanel.classList.toggle("hidden", state.inputMethod !== "upload");

  els.manualCount.value = state.manualCount;
  els.pasteHeader.checked = state.firstRowIsHeader;
  els.uploadHeader.checked = state.firstRowIsHeader;
  els.labelTemplate.value = state.labelTemplate;
  els.fontFamily.value = state.style.fontFamily || DEFAULT_STYLE.fontFamily;
  els.fontSize.value = state.style.fontSize;
  els.skipCount.value = state.skipCount;
  state.logoPosition = normalizeLogoPosition(state.logoPosition);
  els.logoPosition.value = state.logoPosition;
  els.logoSize.value = state.logoSize;

  const rows = getDataRows(state);
  if (state.inputMethod === "manual") {
    els.dataSummary.textContent = `${state.manualCount} manual`;
  } else {
    els.dataSummary.textContent = `${rows.length} rows`;
  }

  els.fileName.textContent = state.headers.length ? `${state.data.length} rows loaded` : "Choose CSV";
  els.logoName.textContent = state.logoName || "Add logo or icon";
  els.removeLogo.classList.toggle("hidden", !state.logoDataUrl);
  els.logoControls.classList.toggle("hidden", !state.logoDataUrl);
  els.iconPresetButtons.forEach((button) => {
    button.classList.toggle("active", Boolean(state.logoEmoji && button.dataset.icon === state.logoEmoji));
  });
  els.clearOverrides.classList.toggle("hidden", Object.keys(state.overrides).length === 0);
}

function renderStyleControls() {
  els.alignToggles.forEach((button) => {
    button.classList.toggle("active", button.dataset.align === state.style.alignment);
  });
  els.valignToggles.forEach((button) => {
    button.classList.toggle("active", button.dataset.valign === state.style.verticalAlign);
  });
  els.boldToggle.classList.toggle("active", state.style.isBold);
  els.italicToggle.classList.toggle("active", state.style.isItalic);
  els.upperToggle.classList.toggle("active", state.style.isUpper);
}

function insertFieldIntoActiveEditor(fieldName) {
  const token = `{{${fieldName}}}`;
  const target = document.activeElement === els.labelModalBody ? els.labelModalBody : els.labelTemplate;
  const start = target.selectionStart || 0;
  const end = target.selectionEnd || 0;
  target.value = `${target.value.slice(0, start)}${token}${target.value.slice(end)}`;
  target.focus();
  target.setSelectionRange(start + token.length, start + token.length);

  if (target === els.labelTemplate) {
    pushHistory();
    state.labelTemplate = target.value;
    savePreferences();
    renderPreview();
  }
}

function renderFieldPills() {
  els.fieldPills.innerHTML = "";
  els.mergeSection.classList.toggle("hidden", state.headers.length === 0 || state.inputMethod === "manual");
  if (state.headers.length === 0 || state.inputMethod === "manual") return;

  const fragment = document.createDocumentFragment();
  state.headers.forEach((field) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "field-pill";
    button.textContent = `{{${field}}}`;
    button.addEventListener("click", () => insertFieldIntoActiveEditor(field));
    fragment.appendChild(button);
  });
  els.fieldPills.appendChild(fragment);
}

function renderPreviewHeader() {
  const template = selectedTemplate();
  const totalLabels = getTotalLabels(state);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));

  els.templateButtonLabel.textContent = template.name;
  els.templateMeta.textContent = `${template.description} | ${template.perSheet} per sheet`;
  els.previewTitle.textContent = `${template.name} preview`;
  els.fillCounter.textContent = `${totalLabels} labels | ${totalPages} page${totalPages === 1 ? "" : "s"}`;
  els.workspaceChip.classList.toggle("hidden", !isWorkspaceMode() && !state.workspaceSource);
  if (state.workspaceSource) {
    els.workspaceChip.querySelector("span").textContent = state.workspaceSource;
  }
}

function getPreviewRows() {
  if (state.inputMethod === "manual") return getDataRows(state);
  if (state.data.length) return state.data;
  return sampleRows;
}

function getPreviewState() {
  if (state.inputMethod === "manual" || state.data.length) return state;
  return {
    ...state,
    data: sampleRows,
    headers: ["name", "address", "city_state_zip"],
    labelTemplate: "{{name}}\n{{address}}\n{{city_state_zip}}",
  };
}

function updateZoom() {
  const fitZoom = Math.min(0.9, Math.max(0.35, (els.previewArea.clientWidth - 72) / (LETTER.widthPt)));
  const zoom = els.zoomSelect.value === "fit" ? fitZoom : Number.parseFloat(els.zoomSelect.value);
  state.zoom = Number.isFinite(zoom) ? zoom : fitZoom;
  els.pagesContainer.style.transform = "none";
  els.pagesContainer.style.height = "auto";
  const naturalHeight = els.pagesContainer.scrollHeight;
  els.pagesContainer.style.transform = `scale(${state.zoom})`;
  els.pagesContainer.style.height = `${naturalHeight * state.zoom}px`;
  els.pagesContainer.style.minWidth = `${LETTER.widthPt * state.zoom}px`;
  savePreferences();
}

function renderPreview(options = {}) {
  const template = selectedTemplate();
  const previewState = getPreviewState();
  const rows = getPreviewRows();
  const isGhost = state.inputMethod !== "manual" && state.data.length === 0;
  const totalLabels = isGhost ? Math.min(rows.length, template.perSheet) : getTotalLabels(state);
  const totalPages = Math.max(1, Math.ceil(totalLabels / template.perSheet));
  const pagesToShow = options.allPages ? totalPages : Math.min(totalPages, 8);
  const slots = buildSlots(template);

  els.pagesContainer.innerHTML = "";
  els.pagesContainer.style.height = "auto";

  const fragment = document.createDocumentFragment();

  for (let page = 0; page < pagesToShow; page += 1) {
    const sheet = document.createElement("div");
    sheet.className = "page-sheet";
    sheet.style.width = `${LETTER.widthPt}pt`;
    sheet.style.height = `${LETTER.heightPt}pt`;

    for (const slot of slots) {
      const absoluteIndex = page * template.perSheet + slot.index;
      const label = resolveLabelAt(previewState, absoluteIndex);
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = `label-cell align-${label.style.alignment} valign-${label.style.verticalAlign}`;
      cell.style.left = `${slot.xPt}pt`;
      cell.style.top = `${slot.yPt}pt`;
      cell.style.width = `${slot.wPt}pt`;
      cell.style.height = `${slot.hPt}pt`;
      cell.style.fontSize = `${label.style.fontSize}pt`;
      cell.style.fontFamily = {
        arial: "Arial, Helvetica, sans-serif",
        roboto: "Roboto, Arial, Helvetica, sans-serif",
        georgia: "Georgia, \"Times New Roman\", Times, serif",
        times: "\"Times New Roman\", Times, serif",
        courier: "\"Courier New\", Courier, monospace",
      }[label.style.fontFamily] || "Arial, Helvetica, sans-serif";
      cell.style.fontWeight = label.style.isBold ? "700" : "400";
      cell.style.fontStyle = label.style.isItalic ? "italic" : "normal";
      cell.dataset.index = String(absoluteIndex);

      if (isGhost) cell.classList.add("ghost");
      if (label.skipped) cell.classList.add("skipped");
      if (label.custom) cell.classList.add("customized");

      const contentWrap = document.createElement("div");
      contentWrap.className = "label-content";

      const text = document.createElement("span");
      text.className = "label-text";
      text.textContent = label.content;

      if (state.logoDataUrl && !label.skipped) {
        const logoPosition = normalizeLogoPosition(state.logoPosition);
        contentWrap.classList.add(`logo-layout-${logoPosition}`);
        const image = document.createElement("img");
        image.src = state.logoDataUrl;
        image.alt = "";
        const imageSize = Math.min(slot.wPt, slot.hPt) * (state.logoSize / 100);
        image.style.width = `${imageSize}pt`;
        image.style.height = `${imageSize}pt`;
        image.className = `label-logo logo-${logoPosition}`;

        contentWrap.append(image, text);
      } else {
        contentWrap.appendChild(text);
      }

      cell.appendChild(contentWrap);

      if (label.custom) {
        const badge = document.createElement("em");
        badge.textContent = "CUSTOM";
        cell.appendChild(badge);
      }

      cell.addEventListener("click", () => {
        if (isGhost) return;
        openLabelModal(absoluteIndex);
      });

      sheet.appendChild(cell);
    }
    fragment.appendChild(sheet);
  }

  if (totalPages > pagesToShow) {
    const note = document.createElement("p");
    note.className = "preview-note";
    note.textContent = `Previewing first ${pagesToShow} pages. Export will include all ${totalPages} pages.`;
    fragment.appendChild(note);
  }

  els.pagesContainer.appendChild(fragment);
  updateZoom();
}

function renderAll() {
  renderDataControls();
  renderStyleControls();
  renderFieldPills();
  renderPreviewHeader();
  renderPreview();
  updateHistoryButtons();
  if (tutorialIsOpen) {
    requestAnimationFrame(positionTutorial);
  }
  createIcons({ icons });
}

function getTutorialTarget(step) {
  const target = document.querySelector(step.target);
  if (target && !target.classList.contains("hidden")) return target;
  return step.fallbackTarget ? document.querySelector(step.fallbackTarget) : target;
}

function getVisibleRect(element) {
  const rect = element.getBoundingClientRect();
  let top = rect.top;
  let right = rect.right;
  let bottom = rect.bottom;
  let left = rect.left;
  let parent = element.parentElement;

  while (parent && parent !== document.body) {
    const style = getComputedStyle(parent);
    if (/(auto|scroll|hidden|clip)/.test(`${style.overflow}${style.overflowX}${style.overflowY}`)) {
      const parentRect = parent.getBoundingClientRect();
      top = Math.max(top, parentRect.top);
      right = Math.min(right, parentRect.right);
      bottom = Math.min(bottom, parentRect.bottom);
      left = Math.max(left, parentRect.left);
    }
    parent = parent.parentElement;
  }

  return {
    top,
    right,
    bottom,
    left,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top),
  };
}

function markTutorialSeen() {
  try {
    localStorage.setItem(TUTORIAL_KEY, "true");
  } catch {
    // Tutorial replay still works when storage is unavailable.
  }
}

function shouldAutoStartTutorial() {
  try {
    return localStorage.getItem(TUTORIAL_KEY) !== "true";
  } catch {
    return true;
  }
}

function startTutorial(index = 0) {
  tutorialIndex = clampNumber(index, 0, tutorialSteps.length - 1, 0);
  tutorialIsOpen = true;
  els.tutorialOverlay.classList.remove("hidden");
  document.body.classList.add("tutorial-active");
  renderTutorialStep();
}

function closeTutorial(markSeen = true) {
  tutorialIsOpen = false;
  els.tutorialOverlay.classList.add("hidden");
  document.body.classList.remove("tutorial-active");
  if (markSeen) markTutorialSeen();
}

function renderTutorialStep() {
  if (!tutorialIsOpen) return;
  const step = tutorialSteps[tutorialIndex];
  els.tutorialDots.innerHTML = tutorialSteps
    .map((_, index) => `<span class="${index === tutorialIndex ? "active" : ""}" aria-hidden="true"></span>`)
    .join("");
  els.tutorialDots.setAttribute("aria-label", `Tutorial step ${tutorialIndex + 1} of ${tutorialSteps.length}`);
  els.tutorialTitle.textContent = step.title;
  els.tutorialBody.textContent = step.body;
  els.tutorialBack.disabled = tutorialIndex === 0;
  els.tutorialNext.textContent = tutorialIndex === tutorialSteps.length - 1 ? "Done" : "Next";
  positionTutorial();
  els.tutorialNext.focus();
}

function positionTutorial() {
  if (!tutorialIsOpen) return;
  const step = tutorialSteps[tutorialIndex];
  const target = getTutorialTarget(step);
  const viewportPad = 14;

  if (!target) {
    els.tutorialSpotlight.style.display = "none";
    els.tutorialCard.style.left = `${viewportPad}px`;
    els.tutorialCard.style.top = `${viewportPad}px`;
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

  requestAnimationFrame(() => {
    const rect = getVisibleRect(target);
    const pad = 8;
    const top = Math.max(viewportPad, rect.top - pad);
    const left = Math.max(viewportPad, rect.left - pad);
    const width = Math.min(window.innerWidth - left - viewportPad, rect.width + pad * 2);
    const height = Math.min(window.innerHeight - top - viewportPad, rect.height + pad * 2);

    els.tutorialSpotlight.style.display = "block";
    els.tutorialSpotlight.style.left = `${left}px`;
    els.tutorialSpotlight.style.top = `${top}px`;
    els.tutorialSpotlight.style.width = `${Math.max(44, width)}px`;
    els.tutorialSpotlight.style.height = `${Math.max(44, height)}px`;
    els.tutorialSpotlight.style.borderRadius = rect.width < 90 && rect.height < 90 ? "999px" : "18px";

    const cardRect = els.tutorialCard.getBoundingClientRect();
    const spaceBelow = window.innerHeight - (top + height);
    const cardLeft = Math.min(
      window.innerWidth - cardRect.width - viewportPad,
      Math.max(viewportPad, left + Math.min(32, width / 3))
    );
    const cardTop = spaceBelow >= cardRect.height + 28
      ? top + height + 18
      : Math.max(viewportPad, top - cardRect.height - 18);

    els.tutorialCard.style.left = `${Math.max(viewportPad, cardLeft)}px`;
    els.tutorialCard.style.top = `${Math.max(viewportPad, cardTop)}px`;
  });
}

function nextTutorialStep() {
  if (tutorialIndex >= tutorialSteps.length - 1) {
    closeTutorial(true);
    return;
  }
  tutorialIndex += 1;
  renderTutorialStep();
}

function previousTutorialStep() {
  if (tutorialIndex === 0) return;
  tutorialIndex -= 1;
  renderTutorialStep();
}

function openLabelModal(index) {
  state.activeEditIndex = index;
  const label = resolveLabelAt(state, index);
  els.labelModalTitle.textContent = `Edit label ${index + 1}`;
  els.labelModalBody.value = label.content;
  els.resetLabel.classList.toggle("hidden", !state.overrides[index]);
  els.labelModal.classList.remove("hidden");
  els.labelModalBody.focus();
}

function closeLabelModal() {
  state.activeEditIndex = null;
  els.labelModal.classList.add("hidden");
}

function saveLabelOverride() {
  if (state.activeEditIndex === null) return;
  pushHistory();
  const index = state.activeEditIndex;
  state.overrides[index] = {
    content: els.labelModalBody.value,
    style: getStyleForIndex(state, index),
  };
  savePreferences();
  closeLabelModal();
  renderAll();
}

function resetLabelOverride() {
  if (state.activeEditIndex === null) return;
  pushHistory();
  delete state.overrides[state.activeEditIndex];
  savePreferences();
  closeLabelModal();
  renderAll();
}

async function loadCsvFile(file) {
  if (!file) return;
  try {
    showToast("Parsing CSV...");
    const parsed = await parseCsvFile(file, state.firstRowIsHeader);
    pushHistory();
    state.inputMethod = "upload";
    state.workspaceSource = "";
    setHeadersAndRows(parsed);
    savePreferences();
    showToast(`${parsed.data.length} rows loaded from CSV.`, "success");
    renderAll();
  } catch (error) {
    showToast(error.message || "CSV could not be parsed.", "error");
  }
}

function exportProject() {
  const project = {
    version: PROJECT_VERSION,
    exportedAt: new Date().toISOString(),
    templateId: state.templateId,
    inputMethod: state.inputMethod,
    manualCount: state.manualCount,
    firstRowIsHeader: state.firstRowIsHeader,
    data: state.data,
    headers: state.headers,
    labelTemplate: state.labelTemplate,
    overrides: state.overrides,
    style: state.style,
    skipCount: state.skipCount,
    logoDataUrl: state.logoDataUrl,
    logoName: state.logoName,
    logoEmoji: state.logoEmoji,
    logoPosition: state.logoPosition,
    logoSize: state.logoSize,
  };
  const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `labelsprint-project-${state.projectId.slice(0, 8)}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function importProject(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const project = validateImportedProject(JSON.parse(reader.result));
      pushHistory();
      state = {
        ...state,
        templateId: project.templateId || state.templateId,
        inputMethod: project.inputMethod || state.inputMethod,
        manualCount: clampNumber(project.manualCount, 1, 25000, state.manualCount),
        firstRowIsHeader: project.firstRowIsHeader !== false,
        data: Array.isArray(project.data) ? project.data : [],
        headers: Array.isArray(project.headers) ? project.headers : [],
        labelTemplate: String(project.labelTemplate || DEFAULT_LABEL_TEMPLATE),
        overrides: normalizeLabelOverrides(project.overrides),
        style: normalizeLabelStyle(project.style),
        skipCount: clampNumber(project.skipCount, 0, 25000, 0),
        logoDataUrl: project.logoDataUrl || (project.logoEmoji ? emojiToLogoDataUrl(project.logoEmoji) : null),
        logoName: project.logoName || "",
        logoEmoji: project.logoEmoji || "",
        logoPosition: normalizeLogoPosition(project.logoPosition || "above"),
        logoSize: clampNumber(project.logoSize, 5, 100, 30),
        workspaceSource: "",
      };
      savePreferences();
      showToast("Project imported.", "success");
      renderAll();
    } catch (error) {
      showToast(error.message || "Invalid project file.", "error");
    }
  };
  reader.readAsText(file);
}

async function runExport(kind) {
  if (els.downloadMenu) els.downloadMenu.open = false;
  const template = selectedTemplate();
  const errors = validateTemplateGeometry(template);
  if (errors.length) {
    showToast(errors[0], "error");
    return;
  }

  setBusy(true);
  showExportProgress(`Preparing ${kind.toUpperCase()}`, "Building print-ready pages...", 4);

  const callbacks = {
    onProgress: ({ currentPage, totalPages, percent }) => {
      showExportProgress(`Exporting ${kind.toUpperCase()}`, `Page ${currentPage} of ${totalPages}`, percent);
    },
  };

  try {
    const result = kind === "pdf"
      ? await exportPdf(state, template, callbacks)
      : await exportDocx(state, template, callbacks);
    state.sessionLabelsGenerated += result.totalLabels;
    showToast(`${kind.toUpperCase()} ready: ${result.totalLabels} labels across ${result.totalPages} pages.`, "success");
  } catch (error) {
    console.error(error);
    showToast(error.message || `${kind.toUpperCase()} export failed.`, "error");
  } finally {
    hideExportProgress();
    setBusy(false);
  }
}

function printLabels() {
  const template = selectedTemplate();
  const errors = validateTemplateGeometry(template);
  if (errors.length) {
    showToast(errors[0], "error");
    return;
  }

  if (tutorialIsOpen) closeTutorial(false);
  closeTemplateModal();
  closeLabelModal();
  renderPreview({ allPages: true });
  updateZoom();

  requestAnimationFrame(() => {
    window.print();
  });
}

function bindEvents() {
  els.tutorialButton.addEventListener("click", () => startTutorial(0));
  els.tutorialSkip.addEventListener("click", () => closeTutorial(true));
  els.tutorialNext.addEventListener("click", nextTutorialStep);
  els.tutorialBack.addEventListener("click", previousTutorialStep);
  window.addEventListener("scroll", positionTutorial, { passive: true });
  window.addEventListener("resize", positionTutorial);

  els.undoButton.addEventListener("click", undoChange);
  els.redoButton.addEventListener("click", redoChange);

  els.templateButton.addEventListener("click", openTemplateModal);
  els.templateLibraryButtons.forEach((button) => button.addEventListener("click", openTemplateModal));
  els.closeTemplateModal.addEventListener("click", closeTemplateModal);
  els.templateModal.addEventListener("click", (event) => {
    if (event.target === els.templateModal) closeTemplateModal();
  });
  els.templateSearch.addEventListener("input", renderTemplateGrid);
  [
    [els.templateShapeFilter, "shape"],
    [els.templateCategoryFilter, "category"],
    [els.templatePerSheetFilter, "perSheet"],
  ].forEach(([select, key]) => {
    select.addEventListener("change", () => {
      templateFilters[key] = select.value;
      renderTemplateGrid();
    });
  });
  els.clearTemplateFilters.addEventListener("click", () => {
    els.templateSearch.value = "";
    templateFilters.shape = "Any";
    templateFilters.category = "Any";
    templateFilters.perSheet = "Any";
    templateLibraryMode = "top";
    renderTemplateGrid();
  });

  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => setInputMethod(button.dataset.mode));
  });

  els.manualCount.addEventListener("input", () => {
    pushHistory();
    state.manualCount = clampNumber(els.manualCount.value, 1, 25000, 1);
    savePreferences();
    renderAll();
  });

  [els.pasteHeader, els.uploadHeader].forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      pushHistory();
      state.firstRowIsHeader = checkbox.checked;
      savePreferences();
      renderDataControls();
    });
  });

  els.processPaste.addEventListener("click", () => {
    try {
      const parsed = parsePastedText(els.pasteArea.value, state.firstRowIsHeader);
      pushHistory();
      state.workspaceSource = "";
      setHeadersAndRows(parsed);
      showToast(`${parsed.data.length} rows processed.`, "success");
      renderAll();
    } catch (error) {
      showToast(error.message || "Pasted rows could not be parsed.", "error");
    }
  });

  els.dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    els.dropZone.classList.add("is-dragging");
  });
  els.dropZone.addEventListener("dragleave", () => els.dropZone.classList.remove("is-dragging"));
  els.dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    els.dropZone.classList.remove("is-dragging");
    loadCsvFile(event.dataTransfer.files[0]);
  });
  els.csvInput.addEventListener("change", (event) => loadCsvFile(event.target.files[0]));

  els.labelTemplate.addEventListener("input", () => {
    pushHistory();
    state.labelTemplate = els.labelTemplate.value;
    savePreferences();
    renderPreview();
  });

  els.fontSize.addEventListener("input", () => {
    pushHistory();
    state.style.fontSize = clampNumber(els.fontSize.value, 6, 36, DEFAULT_STYLE.fontSize);
    savePreferences();
    renderAll();
  });

  els.fontFamily.addEventListener("change", () => {
    pushHistory();
    state.style.fontFamily = els.fontFamily.value || DEFAULT_STYLE.fontFamily;
    savePreferences();
    renderAll();
  });

  els.skipCount.addEventListener("input", () => {
    pushHistory();
    state.skipCount = clampNumber(els.skipCount.value, 0, 25000, 0);
    savePreferences();
    renderAll();
  });

  els.alignToggles.forEach((button) => {
    button.addEventListener("click", () => {
      pushHistory();
      state.style.alignment = button.dataset.align;
      savePreferences();
      renderAll();
    });
  });
  els.valignToggles.forEach((button) => {
    button.addEventListener("click", () => {
      pushHistory();
      state.style.verticalAlign = button.dataset.valign;
      savePreferences();
      renderAll();
    });
  });

  els.boldToggle.addEventListener("click", () => {
    pushHistory();
    state.style.isBold = !state.style.isBold;
    savePreferences();
    renderAll();
  });
  els.italicToggle.addEventListener("click", () => {
    pushHistory();
    state.style.isItalic = !state.style.isItalic;
    savePreferences();
    renderAll();
  });
  els.upperToggle.addEventListener("click", () => {
    pushHistory();
    state.style.isUpper = !state.style.isUpper;
    savePreferences();
    renderAll();
  });

  els.iconPresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectIconPreset(button.dataset.icon, button.dataset.label);
    });
  });

  els.logoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      showToast("Use a logo smaller than 2 MB for reliable PDF and DOCX export.", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      pushHistory();
      state.logoDataUrl = reader.result;
      state.logoName = file.name;
      state.logoEmoji = "";
      savePreferences();
      renderAll();
    };
    reader.readAsDataURL(file);
  });

  els.removeLogo.addEventListener("click", () => {
    pushHistory();
    state.logoDataUrl = null;
    state.logoName = "";
    state.logoEmoji = "";
    savePreferences();
    renderAll();
  });
  els.logoPosition.addEventListener("change", () => {
    pushHistory();
    state.logoPosition = normalizeLogoPosition(els.logoPosition.value);
    savePreferences();
    renderAll();
  });
  els.logoSize.addEventListener("input", () => {
    pushHistory();
    state.logoSize = clampNumber(els.logoSize.value, 5, 100, 30);
    savePreferences();
    renderAll();
  });

  els.zoomSelect.addEventListener("change", updateZoom);
  window.addEventListener("resize", updateZoom);

  els.clearOverrides.addEventListener("click", () => {
    pushHistory();
    state.overrides = {};
    savePreferences();
    renderAll();
  });

  els.closeLabelModal.addEventListener("click", closeLabelModal);
  els.cancelLabel.addEventListener("click", closeLabelModal);
  els.saveLabel.addEventListener("click", saveLabelOverride);
  els.resetLabel.addEventListener("click", resetLabelOverride);
  els.labelModal.addEventListener("click", (event) => {
    if (event.target === els.labelModal) closeLabelModal();
  });

  els.projectExport.addEventListener("click", exportProject);
  els.projectImport.addEventListener("change", (event) => importProject(event.target.files[0]));

  els.startOver.addEventListener("click", () => {
    if (!confirm("Reset this project and clear imported rows from memory?")) return;
    pushHistory();
    const keepTemplateId = state.templateId;
    state = {
      ...state,
      projectId: crypto.randomUUID(),
      templateId: keepTemplateId,
      inputMethod: "manual",
      manualCount: 30,
      data: [],
      headers: [],
      labelTemplate: DEFAULT_LABEL_TEMPLATE,
      overrides: {},
      logoDataUrl: null,
      logoName: "",
      logoEmoji: "",
      logoPosition: "above",
      workspaceSource: "",
      skipCount: 0,
    };
    savePreferences();
    renderAll();
  });

  els.downloadPdf.addEventListener("click", () => runExport("pdf"));
  els.downloadDocx.addEventListener("click", () => runExport("docx"));
  els.printLabels.addEventListener("click", printLabels);
  window.addEventListener("afterprint", () => {
    renderPreview();
    updateZoom();
  });

  window.addEventListener("keydown", (event) => {
    if (tutorialIsOpen) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeTutorial(true);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextTutorialStep();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousTutorialStep();
        return;
      }
    }

    if (event.key === "Escape") {
      closeTemplateModal();
      closeLabelModal();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
      event.preventDefault();
      if (event.shiftKey) {
        redoChange();
      } else {
        undoChange();
      }
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y") {
      event.preventDefault();
      redoChange();
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      runExport("pdf");
    }
  });
}

function initWorkspace() {
  initWorkspaceBridge({
    onRows: ({ values, firstRowIsHeader, source }) => {
      const parsed = rowsFromWorkspace(values, firstRowIsHeader);
      pushHistory();
      state.inputMethod = "upload";
      state.firstRowIsHeader = firstRowIsHeader;
      state.workspaceSource = source;
      setHeadersAndRows(parsed);
      savePreferences();
      showToast(`${parsed.data.length} selected Workspace rows loaded.`, "success");
      renderAll();
    },
    onStatus: (message) => showToast(message, "error"),
  });
}

function init() {
  renderShell();
  cacheElements();
  loadPreferences();
  bindEvents();
  initWorkspace();
  renderAll();
  const shouldOpenTemplates = new URLSearchParams(window.location.search).get("templates") === "1";
  if (shouldOpenTemplates) {
    openTemplateModal();
  } else if (shouldAutoStartTutorial()) {
    window.setTimeout(() => startTutorial(0), 350);
  }
}

init();
