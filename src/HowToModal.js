import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const STORAGE_KEY = "labelsprint_howto_seen";

const HOW_TO_STEPS = [
  {
    name: "Choose your input method",
    text: "Upload a CSV, paste data, or enter labels manually",
  },
  {
    name: "Map your columns",
    text: "Tell LabelsPrint which column is the label text (or use auto-detect)",
  },
  {
    name: "Select your label format",
    text: "Search the Avery catalog and choose a calibrated sheet layout",
  },
  {
    name: "Preview your labels",
    text: "Review layout before exporting",
  },
  {
    name: "Export and print",
    text: "Download as PDF or DOCX, then print on your label sheets",
  },
];

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => element.offsetParent !== null);
}

export function HowToModal() {
  const dialogRef = useRef(null);
  const dismissButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        previousFocusRef.current = document.activeElement;
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const focusables = getFocusableElements(dialog);
    (dismissButtonRef.current || focusables[0] || dialog)?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        dismiss();
        return;
      }

      if (event.key !== "Tab") return;

      const currentFocusables = getFocusableElements(dialog);
      if (currentFocusables.length === 0) {
        event.preventDefault();
        dialog?.focus();
        return;
      }

      const first = currentFocusables[0];
      const last = currentFocusables[currentFocusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // If storage is unavailable, still close the modal for this session.
    }
    setIsOpen(false);
    previousFocusRef.current?.focus?.();
  }

  if (!isOpen) return null;

  return React.createElement(
    "div",
    { className: "howto-modal-backdrop" },
    React.createElement(
      "section",
      {
        ref: dialogRef,
        className: "howto-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "howto-modal-title",
        "aria-describedby": "howto-modal-description",
        tabIndex: -1,
      },
      React.createElement(
        "div",
        { className: "howto-modal-header" },
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "Quick Start"),
          React.createElement("h2", { id: "howto-modal-title" }, "Print Avery labels in five steps")
        )
      ),
      React.createElement(
        "p",
        { id: "howto-modal-description", className: "howto-modal-description" },
        "Use LabelsPrint to create labels from CSV data, pasted rows, or manual entry, then export a print-ready PDF or DOCX file."
      ),
      React.createElement(
        "ol",
        { className: "howto-modal-steps" },
        HOW_TO_STEPS.map((step) =>
          React.createElement(
            "li",
            { key: step.name },
            React.createElement("strong", null, step.name),
            React.createElement("span", null, step.text)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "howto-modal-actions" },
        React.createElement(
          "button",
          {
            ref: dismissButtonRef,
            type: "button",
            className: "export-button",
            onClick: dismiss,
          },
          "Got it"
        )
      )
    )
  );
}

export function mountHowToModal(rootId = "howto-modal-root") {
  const rootElement = document.getElementById(rootId);
  if (!rootElement) return;
  createRoot(rootElement).render(React.createElement(HowToModal));
}
