const WORKSPACE_MESSAGE = "LABELSPRINT_WORKSPACE_DATA";
const READY_MESSAGE = "LABELSPRINT_READY";

function getWorkspaceNonce() {
  return new URLSearchParams(window.location.search).get("workspaceNonce") || "";
}

function isTrustedWorkspaceOrigin(origin) {
  try {
    const { hostname, protocol } = new URL(origin);
    if (protocol !== "https:") return false;
    return (
      hostname === "script.google.com" ||
      hostname === "docs.google.com" ||
      hostname.endsWith(".googleusercontent.com")
    );
  } catch {
    return false;
  }
}

function getReferrerOrigin() {
  try {
    return document.referrer ? new URL(document.referrer).origin : "*";
  } catch {
    return "*";
  }
}

export function isWorkspaceMode() {
  return new URLSearchParams(window.location.search).get("workspace") === "1";
}

export function initWorkspaceBridge({ onRows, onStatus }) {
  const nonce = getWorkspaceNonce();

  window.addEventListener("message", (event) => {
    const message = event.data;
    if (!message || message.type !== WORKSPACE_MESSAGE) return;
    if (!isTrustedWorkspaceOrigin(event.origin)) {
      onStatus?.("Blocked Workspace message from an untrusted origin.");
      return;
    }
    if (nonce && message.nonce !== nonce) {
      onStatus?.("Blocked Workspace message with an invalid session token.");
      return;
    }
    if (!Array.isArray(message.values)) {
      onStatus?.("Workspace selection did not include rows.");
      return;
    }

    onRows?.({
      values: message.values,
      firstRowIsHeader: message.firstRowIsHeader !== false,
      source: message.source || "Google Sheets",
    });
  });

  if (isWorkspaceMode()) {
    window.parent?.postMessage({ type: READY_MESSAGE, nonce }, getReferrerOrigin());
  }
}
