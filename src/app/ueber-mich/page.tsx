import { UeberMichPage } from "@/components/about/UeberMichPage";
import { ueberMichFaq, ueberMichMeta } from "@/data/ueber-mich";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ueberMichMeta.title,
  description: ueberMichMeta.description,
  alternates: {
    canonical: ueberMichMeta.canonical,
  },
  openGraph: {
    title: ueberMichMeta.ogTitle,
    description: ueberMichMeta.ogDescription,
    locale: "de_DE",
    type: "website",
    url: ueberMichMeta.canonical,
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
        name: "Über mich",
        item: "https://319webdesign.de/ueber-mich",
      },
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maik Schmidt",
    jobTitle: "Webdesigner",
    url: "https://319webdesign.de/ueber-mich",
    image: "https://319webdesign.de/maik.webp",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: "https://319webdesign.de",
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Hessen",
      addressCountry: "DE",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ueberMichFaq.map((item) => ({
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
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
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

export default function UeberMichRoutePage() {
  return (
    <>
      <JsonLd />
      <UeberMichPage />
    </>
  );
}
