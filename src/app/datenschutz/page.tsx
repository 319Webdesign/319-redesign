import { LegalPage } from "@/components/legal/LegalPage";
import { datenschutzContent, datenschutzMeta } from "@/data/legal";
import { breadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: datenschutzMeta.title,
  description: datenschutzMeta.description,
  alternates: {
    canonical: datenschutzMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    datenschutzMeta.ogTitle,
    datenschutzMeta.ogDescription,
    datenschutzMeta.canonical,
  ),
};

export default function DatenschutzPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Datenschutz", path: "/datenschutz" },
        ])}
      />
      <LegalPage content={datenschutzContent} />
    </>
  );
}
