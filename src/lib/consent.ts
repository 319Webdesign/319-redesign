export const CONSENT_STORAGE_KEY = "319-consent";
export const CONSENT_OPEN_EVENT = "319-open-consent";
export const CONSENT_CHANGE_EVENT = "319-consent-change";

export type ConsentState = {
  analytics: boolean;
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(
    new CustomEvent<ConsentState>(CONSENT_CHANGE_EVENT, { detail: value }),
  );
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function hasAnalyticsConsent(state: ConsentState | null = readConsent()) {
  return state?.analytics === true;
}
