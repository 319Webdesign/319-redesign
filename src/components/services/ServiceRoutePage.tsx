import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import {
  getServiceBySlug,
  getServicePath,
} from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function serviceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Leistung nicht gefunden", robots: { index: false } };
  }

  const path = getServicePath(service);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: defaultOpenGraph(
      service.metaTitle,
      service.metaDescription,
      path,
    ),
  };
}

export function ServiceRoutePage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const path = getServicePath(service);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: service.title, path },
        ])}
      />
      <JsonLd data={faqJsonLd(service.faq)} />
      <ServiceLandingPage service={service} />
    </>
  );
}
