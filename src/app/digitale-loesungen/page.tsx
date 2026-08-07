import { DigitaleLoesungenPage } from "@/components/services/DigitaleLoesungenPage";
import {
  digitaleLoesungenFaq,
  digitaleLoesungenMeta,
} from "@/data/digitale-loesungen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: digitaleLoesungenMeta.title,
  description: digitaleLoesungenMeta.description,
  alternates: {
    canonical: digitaleLoesungenMeta.canonical,
  },
  openGraph: {
    title: digitaleLoesungenMeta.ogTitle,
    description: digitaleLoesungenMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: digitaleLoesungenMeta.canonical,
  },
};

function JsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: "https://319webdesign.de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: "https://319webdesign.de/leistungen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digitale Lösungen",
        item: "https://319webdesign.de/digitale-loesungen",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: digitaleLoesungenFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function DigitaleLoesungenRoutePage() {
  return (
    <>
      <JsonLd />
      <DigitaleLoesungenPage />
    </>
  );
}
