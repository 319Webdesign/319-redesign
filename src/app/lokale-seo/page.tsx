import { LokaleSeoPage } from "@/components/services/LokaleSeoPage";
import { lokaleSeoFaq, lokaleSeoMeta } from "@/data/lokale-seo";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: lokaleSeoMeta.title,
  description: lokaleSeoMeta.description,
  alternates: {
    canonical: lokaleSeoMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    lokaleSeoMeta.ogTitle,
    lokaleSeoMeta.ogDescription,
    lokaleSeoMeta.canonical,
  ),
};

export default function LokaleSeoRoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Lokale SEO", path: "/lokale-seo" },
        ])}
      />
      <JsonLd data={faqJsonLd(lokaleSeoFaq)} />
      <LokaleSeoPage />
    </>
  );
}
