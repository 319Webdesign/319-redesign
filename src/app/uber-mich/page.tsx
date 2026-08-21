import { UeberMichPage } from "@/components/about/UeberMichPage";
import { legalContact } from "@/data/legal";
import { ueberMichFaq, ueberMichMeta } from "@/data/ueber-mich";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { absoluteUrl, defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ueberMichMeta.title,
  description: ueberMichMeta.description,
  alternates: {
    canonical: ueberMichMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    ueberMichMeta.ogTitle,
    ueberMichMeta.ogDescription,
    ueberMichMeta.canonical,
  ),
};

export default function UeberMichRoutePage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: legalContact.owner,
    jobTitle: legalContact.profession,
    url: absoluteUrl("/uber-mich"),
    image: absoluteUrl("/maik.webp"),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    email: legalContact.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: legalContact.street,
      addressLocality: "Trebur",
      postalCode: "65468",
      addressRegion: "Hessen",
      addressCountry: "DE",
    },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Über mich", path: "/uber-mich" },
        ])}
      />
      <JsonLd data={person} />
      <JsonLd data={faqJsonLd(ueberMichFaq)} />
      <UeberMichPage />
    </>
  );
}
