import { getListedPortfolioProjects } from "@/data/projects";
import { serviceLandings, getServicePath } from "@/data/services";
import { SITE_URL } from "@/lib/seo";
import type { MetadataRoute } from "next";

const STATIC_PATHS = [
  "/",
  "/leistungen",
  "/webdesign",
  "/lokale-seo",
  "/corporate-design",
  "/digitale-loesungen",
  "/betreuung",
  "/portfolio",
  "/uber-mich",
  "/kontakt",
  "/impressum",
  "/datenschutz",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = new Set(
    serviceLandings.map((service) => getServicePath(service)),
  );

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));

  const extraServiceEntries = [...servicePaths]
    .filter((path) => !STATIC_PATHS.includes(path as (typeof STATIC_PATHS)[number]))
    .map((path) => ({
      url: `${SITE_URL}${path}`,
    }));

  const projectEntries = getListedPortfolioProjects().map((project) => ({
    url: `${SITE_URL}${project.href}`,
  }));

  return [...staticEntries, ...extraServiceEntries, ...projectEntries];
}
