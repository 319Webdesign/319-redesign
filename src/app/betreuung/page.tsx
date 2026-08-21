import { BetreuungPage } from "@/components/services/BetreuungPage";
import { betreuungFaq, betreuungMeta } from "@/data/betreuung";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: betreuungMeta.title,
  description: betreuungMeta.description,
  alternates: {
    canonical: betreuungMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    betreuungMeta.ogTitle,
    betreuungMeta.ogDescription,
    betreuungMeta.canonical,
  ),
};

export default function BetreuungRoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Betreuung", path: "/betreuung" },
        ])}
      />
      <JsonLd data={faqJsonLd(betreuungFaq)} />
      <BetreuungPage />
    </>
  );
}
