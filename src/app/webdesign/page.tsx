import { WebdesignPage } from "@/components/services/WebdesignPage";
import { webdesignFaq, webdesignMeta } from "@/data/webdesign";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: webdesignMeta.title,
  description: webdesignMeta.description,
  alternates: {
    canonical: webdesignMeta.canonical,
  },
  openGraph: {
    title: webdesignMeta.ogTitle,
    description: webdesignMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: webdesignMeta.canonical,
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
        name: "Webdesign",
        item: "https://319webdesign.de/webdesign",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: webdesignFaq.map((item) => ({
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

export default function WebdesignRoutePage() {
  return (
    <>
      <JsonLd />
      <WebdesignPage />
    </>
  );
}
