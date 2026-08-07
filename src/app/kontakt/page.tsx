import { KontaktPage } from "@/components/kontakt/KontaktPage";
import { kontaktFaq, kontaktMeta } from "@/data/kontakt";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: kontaktMeta.title,
  description: kontaktMeta.description,
  alternates: {
    canonical: kontaktMeta.canonical,
  },
  openGraph: {
    title: kontaktMeta.ogTitle,
    description: kontaktMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: kontaktMeta.canonical,
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
        name: "Kontakt",
        item: "https://319webdesign.de/kontakt",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kontaktFaq.map((item) => ({
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

export default function KontaktRoutePage() {
  return (
    <>
      <JsonLd />
      <KontaktPage />
    </>
  );
}
