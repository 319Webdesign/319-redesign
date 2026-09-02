import { ANALYTICS } from "@/lib/seo";
import { hasAnalyticsConsent } from "@/lib/consent";

export type GtagEventParams = Record<
  string,
  string | number | boolean | null | undefined
>;

export type LeadEventParams = {
  form_name: string;
  lead_type?: string;
  page_path?: string;
  topic?: string;
};

type ConsentValue = "granted" | "denied";

export type GoogleConsentState = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
  wait_for_update?: number;
};

type GtagFunction = {
  (command: "js", date: Date): void;
  (command: "config", targetId: string, config?: GtagEventParams): void;
  (command: "event", eventName: string, params?: GtagEventParams): void;
  (
    command: "consent",
    action: "default" | "update",
    params: GoogleConsentState,
  ): void;
  (command: "set", params: Record<string, unknown>): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
  }
}

const GTAG_SCRIPT_ID = "ga-gtag";
const PIRSCH_SCRIPT_ID = "pianjs";

const DENIED_CONSENT: GoogleConsentState = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

const GRANTED_CONSENT: GoogleConsentState = {
  analytics_storage: "granted",
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
};

/** Inline-Skript für Consent Mode v2 – vor jedem Google-Tag im Root-Layout. */
export const GOOGLE_CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
`.trim();

type QueuedEvent = {
  name: string;
  params?: GtagEventParams;
};

let consentGranted = false;
let analyticsReady = false;
let loadStarted = false;
let configuredMeasurementId: string | null = null;
const pendingEvents: QueuedEvent[] = [];

export function getGaMeasurementId(): string | undefined {
  const id = ANALYTICS.gaMeasurementId.trim();
  return id.startsWith("G-") ? id : undefined;
}

function currentPagePath(): string | undefined {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
}

function withPageContext(params?: GtagEventParams): GtagEventParams {
  return {
    page_path: currentPagePath(),
    ...params,
  };
}

function ensureGtagStub() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag === "function") return;

  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  } as GtagFunction;
}

function updateGoogleConsent(state: GoogleConsentState) {
  if (typeof window === "undefined") return;
  ensureGtagStub();
  try {
    window.gtag?.("consent", "update", state);
  } catch {
    // Tracking darf die Seite nicht stören.
  }
}

function sendEvent(name: string, params?: GtagEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  try {
    window.gtag("event", name, withPageContext(params));
  } catch {
    // Tracking darf die Seite nicht stören.
  }
}

function flushQueuedEvents() {
  analyticsReady = true;
  while (pendingEvents.length > 0) {
    const next = pendingEvents.shift();
    if (next) sendEvent(next.name, next.params);
  }
}

function configureGoogleAnalytics(measurementId: string) {
  if (configuredMeasurementId === measurementId) {
    flushQueuedEvents();
    return;
  }

  ensureGtagStub();
  try {
    window.gtag?.("js", new Date());
    window.gtag?.("config", measurementId, {
      anonymize_ip: true,
      send_page_view: false,
    });
    configuredMeasurementId = measurementId;
    flushQueuedEvents();
  } catch {
    // Tracking darf die Seite nicht stören.
  }
}

function loadPirsch() {
  if (typeof document === "undefined") return;
  if (document.getElementById(PIRSCH_SCRIPT_ID)) return;

  const code = ANALYTICS.pirschCode.trim();
  if (!code) return;

  const pirschScript = document.createElement("script");
  pirschScript.defer = true;
  pirschScript.src = "https://api.pirsch.io/pa.js";
  pirschScript.id = PIRSCH_SCRIPT_ID;
  pirschScript.setAttribute("data-code", code);
  document.head.appendChild(pirschScript);
}

function loadGtagScript(measurementId: string) {
  if (typeof document === "undefined") return;

  const existing = document.getElementById(GTAG_SCRIPT_ID);
  if (existing) {
    configureGoogleAnalytics(measurementId);
    return;
  }

  const script = document.createElement("script");
  script.id = GTAG_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => configureGoogleAnalytics(measurementId);
  script.onerror = () => {
    loadStarted = false;
  };
  document.head.appendChild(script);
}

/**
 * Lädt Google Analytics / Ads-Tag und Pirsch erst nach erteilter Einwilligung.
 * Mehrfachaufrufe sind idempotent.
 */
export function enableAnalytics() {
  if (typeof window === "undefined") return;

  consentGranted = true;
  ensureGtagStub();
  updateGoogleConsent(GRANTED_CONSENT);

  if (loadStarted) {
    if (configuredMeasurementId) flushQueuedEvents();
    return;
  }
  loadStarted = true;

  const measurementId = getGaMeasurementId();
  if (measurementId) {
    loadGtagScript(measurementId);
  } else {
    // Ohne Measurement-ID trotzdem Pirsch laden, Events an GA entfallen.
    flushQueuedEvents();
  }

  loadPirsch();
}

/** Widerruf: Consent Mode auf denied, keine weiteren Events. */
export function disableAnalytics() {
  consentGranted = false;
  analyticsReady = false;
  pendingEvents.length = 0;
  updateGoogleConsent(DENIED_CONSENT);
}

export function syncAnalyticsWithConsent() {
  if (hasAnalyticsConsent()) {
    enableAnalytics();
  } else {
    disableAnalytics();
  }
}

export function trackEvent(name: string, params?: GtagEventParams) {
  if (typeof window === "undefined") return;
  if (!consentGranted) return;

  const payload: QueuedEvent = { name, params };
  if (!analyticsReady || typeof window.gtag !== "function") {
    pendingEvents.push(payload);
    return;
  }

  sendEvent(name, params);
}

export function trackPageView(path?: string) {
  const measurementId = getGaMeasurementId();
  trackEvent("page_view", {
    page_path: path ?? currentPagePath(),
    page_title: typeof document === "undefined" ? undefined : document.title,
    page_location:
      typeof window === "undefined" ? undefined : window.location.href,
    send_to: measurementId,
  });
}

function leadPayload(
  params: LeadEventParams,
  defaultLeadType: string,
): GtagEventParams {
  return {
    form_name: params.form_name,
    lead_type: params.lead_type ?? defaultLeadType,
    page_path: params.page_path ?? currentPagePath(),
    ...(params.topic ? { topic: params.topic } : {}),
  };
}

export function trackGenerateLead(params: LeadEventParams) {
  trackEvent("generate_lead", leadPayload(params, "contact"));
}

export function trackRequestQuote(params: LeadEventParams) {
  const payload = leadPayload(params, "quote");
  trackEvent("request_quote", payload);
  /**
   * Bestehende Google-Ads-Conversion aus dem gtag-Event-Snippet.
   * Kein delayed-navigation-Helper: nach dem Versand bleibt der
   * Success-State auf der Seite, es gibt keinen URL-Wechsel.
   */
  trackEvent("conversion_event_request_quote", payload);
}

export function trackPhoneClick() {
  trackEvent("click_phone");
}

export function trackEmailClick() {
  trackEvent("click_email");
}

export function trackWhatsAppClick() {
  trackEvent("click_whatsapp");
}

export function isWhatsAppHref(href: string): boolean {
  const value = href.toLowerCase();
  return (
    value.includes("wa.me/") ||
    value.includes("api.whatsapp.com") ||
    value.includes("whatsapp.com")
  );
}
