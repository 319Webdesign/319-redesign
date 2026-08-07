import { LokaleSeoPage } from "@/components/services/LokaleSeoPage";
import { lokaleSeoFaq, lokaleSeoMeta } from "@/data/lokale-seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: lokaleSeoMeta.title,
  description: lokaleSeoMeta.description,
  alternates: {
    canonical: lokaleSeoMeta.canonical,
  },
  openGraph: {
    title: lokaleSeoMeta.ogTitle,
    description: lokaleSeoMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: lokaleSeoMeta.canonical,
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
        name: "Lokale SEO",
        item: "https://319webdesign.de/lokale-seo",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lokaleSeoFaq.map((item) => ({
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

export default function LokaleSeoRoutePage() {
  return (
    <>
      <JsonLd />
      <LokaleSeoPage />
    </>
  );
}
