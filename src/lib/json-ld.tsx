import { legalContact } from "@/data/legal";
import { siteConfig } from "@/data/site";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: legalContact.street,
  addressLocality: "Trebur",
  postalCode: "65468",
  addressRegion: "Hessen",
  addressCountry: "DE",
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: SITE_URL,
    email: legalContact.email,
    telephone: siteConfig.phone,
    address: postalAddress,
    founder: {
      "@type": "Person",
      name: legalContact.owner,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: siteConfig.name,
    url: SITE_URL,
    email: legalContact.email,
    telephone: siteConfig.phone,
    address: postalAddress,
    areaServed: [
      { "@type": "City", name: "Darmstadt" },
      { "@type": "City", name: "Pfungstadt" },
      { "@type": "City", name: "Trebur" },
      { "@type": "AdministrativeArea", name: "Südhessen" },
    ],
    founder: {
      "@type": "Person",
      name: legalContact.owner,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
  };
}
