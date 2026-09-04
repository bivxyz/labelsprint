import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  DEFAULT_STYLE,
  getStyleForIndex,
  normalizeFontFamily,
  normalizeLabelOverrides,
  normalizeLabelStyle,
} from "../src/templateEngine.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

assert.equal(DEFAULT_STYLE.fontFamily, "arial");
assert.equal(normalizeFontFamily("diatype"), "arial");
assert.equal(normalizeFontFamily("Circular"), "arial");
assert.equal(normalizeFontFamily("roboto"), "roboto");
assert.equal(normalizeFontFamily("georgia"), "georgia");
assert.equal(normalizeFontFamily("unknown"), "arial");
assert.equal(normalizeLabelStyle({ fontFamily: "circular", isBold: true }).fontFamily, "arial");

const overrides = normalizeLabelOverrides({
  0: { content: "Legacy", style: { fontFamily: "diatype", isItalic: true } },
});
assert.equal(overrides[0].style.fontFamily, "arial");
assert.equal(overrides[0].style.isItalic, true);
assert.equal(getStyleForIndex({ style: { fontFamily: "roboto" }, overrides: {} }, 0).fontFamily, "roboto");

const mainSource = fs.readFileSync(path.join(root, "src", "main.js"), "utf8");
const cssSource = fs.readFileSync(path.join(root, "src", "index.css"), "utf8");

for (const font of ["arial", "roboto", "georgia", "times", "courier"]) {
  assert.match(mainSource, new RegExp(`<option value=["']${font}["']>`));
}
assert.doesNotMatch(mainSource, /<option value=["'](?:diatype|circular)["']>/);
assert.doesNotMatch(cssSource, /\.label-cell\s*,\s*\.label-text\s*\{/);

console.log("Label font checks passed.");
