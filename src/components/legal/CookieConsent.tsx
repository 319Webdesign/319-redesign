"use client";

import { Button } from "@/components/ui/Button";
import {
  CONSENT_OPEN_EVENT,
  openCookieSettings,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    }

    const onOpen = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  function accept() {
    writeConsent({ analytics: true });
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
            Wir verwenden optionale Analyse-Cookies von Google Analytics, um die
            Website zu verbessern und erfolgreiche Anfragen zu messen.
            Notwendige Funktionen bleiben ohne Einwilligung nutzbar. Details
            stehen in der{" "}
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

export { openCookieSettings };
