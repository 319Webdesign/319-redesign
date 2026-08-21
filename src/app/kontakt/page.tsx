import { KontaktPage } from "@/components/kontakt/KontaktPage";
import { kontaktFaq, kontaktMeta } from "@/data/kontakt";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: kontaktMeta.title,
  description: kontaktMeta.description,
  alternates: {
    canonical: kontaktMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    kontaktMeta.ogTitle,
    kontaktMeta.ogDescription,
    kontaktMeta.canonical,
  ),
};

export default function KontaktRoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <JsonLd data={faqJsonLd(kontaktFaq)} />
      <KontaktPage />
    </>
  );
}
