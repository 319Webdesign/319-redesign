"use client";

import { Button } from "@/components/ui/Button";
import { ANALYTICS } from "@/lib/seo";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "319-consent";
const OPEN_EVENT = "319-open-consent";

type ConsentState = {
  analytics: boolean;
};

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function loadAnalytics() {
  if (window.gtag) return;

  const gaId = ANALYTICS.gaMeasurementId;
  const pirsch = ANALYTICS.pirschCode;

  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaId, { anonymize_ip: true });

  if (!document.getElementById("pianjs")) {
    const pirschScript = document.createElement("script");
    pirschScript.defer = true;
    pirschScript.src = "https://api.pirsch.io/pa.js";
    pirschScript.id = "pianjs";
    pirschScript.setAttribute("data-code", pirsch);
    document.head.appendChild(pirschScript);
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent({
  enableAnalytics = false,
}: {
  enableAnalytics?: boolean;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (enableAnalytics && existing?.analytics) {
      loadAnalytics();
    }
    if (!existing) {
      setVisible(true);
    }

    const onOpen = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, [enableAnalytics]);

  function accept() {
    writeConsent({ analytics: true });
    if (enableAnalytics) loadAnalytics();
    setVisible(false);
  }

  function decline() {
    writeConsent({ analytics: false });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-bg p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            id="cookie-consent-title"
            className="font-display text-base font-medium text-ink"
          >
            Cookies & Analyse
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Wir verwenden optionale Analyse-Cookies, um die Website zu
            verbessern. Notwendige Funktionen bleiben ohne Einwilligung nutzbar.
            Details stehen in der{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" size="sm" onClick={decline}>
            Ablehnen
          </Button>
          <Button type="button" variant="primary" size="sm" onClick={accept}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_EVENT));
}
