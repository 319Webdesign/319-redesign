import { DigitaleLoesungenPage } from "@/components/services/DigitaleLoesungenPage";
import {
  digitaleLoesungenFaq,
  digitaleLoesungenMeta,
} from "@/data/digitale-loesungen";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: digitaleLoesungenMeta.title,
  description: digitaleLoesungenMeta.description,
  alternates: {
    canonical: digitaleLoesungenMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    digitaleLoesungenMeta.ogTitle,
    digitaleLoesungenMeta.ogDescription,
    digitaleLoesungenMeta.canonical,
  ),
};

export default function DigitaleLoesungenRoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Digitale Lösungen", path: "/digitale-loesungen" },
        ])}
      />
      <JsonLd data={faqJsonLd(digitaleLoesungenFaq)} />
      <DigitaleLoesungenPage />
    </>
  );
}
