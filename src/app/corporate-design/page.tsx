import { CorporateDesignPage } from "@/components/services/CorporateDesignPage";
import { corporateDesignFaq, corporateDesignMeta } from "@/data/corporate-design";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: corporateDesignMeta.title,
  description: corporateDesignMeta.description,
  alternates: {
    canonical: corporateDesignMeta.canonical,
  },
  openGraph: {
    title: corporateDesignMeta.ogTitle,
    description: corporateDesignMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: corporateDesignMeta.canonical,
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
        name: "Corporate Design",
        item: "https://319webdesign.de/corporate-design",
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: corporateDesignFaq.map((item) => ({
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

export default function CorporateDesignRoutePage() {
  return (
    <>
      <JsonLd />
      <CorporateDesignPage />
    </>
  );
}
