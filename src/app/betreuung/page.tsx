import { BetreuungPage } from "@/components/services/BetreuungPage";
import { betreuungFaq, betreuungMeta } from "@/data/betreuung";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: betreuungMeta.title,
  description: betreuungMeta.description,
  alternates: {
    canonical: betreuungMeta.canonical,
  },
  openGraph: {
    title: betreuungMeta.ogTitle,
    description: betreuungMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: betreuungMeta.canonical,
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
        name: "Betreuung",
        item: "https://319webdesign.de/betreuung",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: betreuungFaq.map((item) => ({
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

export default function BetreuungRoutePage() {
  return (
    <>
      <JsonLd />
      <BetreuungPage />
    </>
  );
}
