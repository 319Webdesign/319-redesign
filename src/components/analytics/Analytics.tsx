"use client";

import {
  disableAnalytics,
  enableAnalytics,
  isWhatsAppHref,
  trackEmailClick,
  trackPageView,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics";
import {
  CONSENT_CHANGE_EVENT,
  readConsent,
  type ConsentState,
} from "@/lib/consent";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Analytics({ enabled = false }: { enabled?: boolean }) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const existing = readConsent();
    if (existing?.analytics) {
      enableAnalytics();
      setAllowed(true);
    }

    const onConsentChange = (event: Event) => {
      const state =
        (event as CustomEvent<ConsentState>).detail ?? readConsent();
      if (state?.analytics) {
        enableAnalytics();
        lastTrackedPath.current = null;
        setAllowed(true);
        return;
      }
      disableAnalytics();
      lastTrackedPath.current = null;
      setAllowed(false);
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !allowed) return;
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    trackPageView(pathname);
  }, [allowed, enabled, pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const normalized = href.trim().toLowerCase();
      if (normalized.startsWith("tel:")) {
        trackPhoneClick();
        return;
      }
      if (normalized.startsWith("mailto:")) {
        trackEmailClick();
        return;
      }
      if (isWhatsAppHref(href)) {
        trackWhatsAppClick();
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
