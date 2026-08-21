import { SiteShell } from "@/components/layout/SiteShell";
import {
  PortfolioApproach,
  PortfolioCta,
  PortfolioFacts,
  PortfolioFeatured,
  PortfolioHero,
  PortfolioTestimonials,
} from "@/components/portfolio";
import { breadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio · Ausgewählte Websites & Case Studies",
  description:
    "Echte Projekte von 319Webdesign: Websites für Handwerk, Immobilien, Videoproduktion und regionale Unternehmen – individuell, klar und anfrageorientiert.",
  alternates: { canonical: "/portfolio" },
  openGraph: defaultOpenGraph(
    "Portfolio · Ausgewählte Websites & Case Studies",
    "Echte Projekte von 319Webdesign: Websites für Handwerk, Immobilien, Videoproduktion und regionale Unternehmen – individuell, klar und anfrageorientiert.",
    "/portfolio",
  ),
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <main>
        <PortfolioHero />
        <PortfolioFacts />
        <PortfolioFeatured />
        <PortfolioApproach />
        <PortfolioTestimonials />
        <PortfolioCta />
      </main>
    </SiteShell>
  );
}
