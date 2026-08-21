"use client";

import { openCookieSettings } from "@/components/legal/CookieConsent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="transition-motion hover:text-brand"
    >
      Cookie-Einstellungen
    </button>
  );
}
