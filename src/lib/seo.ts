import type { Metadata } from "next";

/** Kanonische Produktionsdomain – identisch mit der bestehenden Live-Website. */
export const SITE_URL = "https://www.319webdesign.de";

export const ANALYTICS = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-2F2YJSZXG5",
  pirschCode:
    process.env.NEXT_PUBLIC_PIRSCH_CODE ?? "vJWT37N3h190aNHNNLe4ZWy9zexmJm6H",
} as const;

export function isProductionDeployment(): boolean {
  return process.env.VERCEL_ENV === "production";
}

export function isPreviewDeployment(): boolean {
  return process.env.VERCEL_ENV === "preview";
}

/**
 * Indexierung nur auf der echten Produktion.
 * Preview, `next dev` und lokale Builds bleiben noindex.
 * Ein Production-Build ohne Vercel (`next start`) bleibt indexierbar,
 * damit ein Livegang nicht versehentlich auf noindex hängt.
 */
export function isIndexable(): boolean {
  if (isPreviewDeployment()) return false;
  if (process.env.VERCEL_ENV === "development") return false;
  if (process.env.NODE_ENV !== "production") return false;
  return true;
}

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_URL;
  return `${SITE_URL}${normalized.replace(/\/$/, "")}`;
}

export function robotsForEnvironment(
  pageRobots?: Metadata["robots"],
): Metadata["robots"] {
  if (!isIndexable()) {
    return { index: false, follow: false };
  }
  return pageRobots ?? { index: true, follow: true };
}

export function defaultOpenGraph(
  title: string,
  description: string,
  path: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    locale: "de_DE",
    type: "website",
    url: path,
    siteName: "319Webdesign",
  };
}
