import {
  ServiceRoutePage,
  serviceMetadata,
} from "@/components/services/ServiceRoutePage";
import { getServiceBySlug, serviceLandings } from "@/data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const dedicatedSlugs = new Set([
  "webdesign",
  "lokale-seo",
  "corporate-design",
  "digitale-loesungen",
  "website-wartung",
  "webdesign-darmstadt",
  "seo-darmstadt",
  "website-relaunch",
  "homepage-handwerker",
]);

export function generateStaticParams() {
  return serviceLandings
    .filter((s) => !dedicatedSlugs.has(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (dedicatedSlugs.has(slug) || !getServiceBySlug(slug)) {
    return { title: "Leistung nicht gefunden", robots: { index: false } };
  }
  return serviceMetadata(slug);
}

export default async function LeistungDetailPage({ params }: Props) {
  const { slug } = await params;
  if (dedicatedSlugs.has(slug) || !getServiceBySlug(slug)) {
    notFound();
  }
  return <ServiceRoutePage slug={slug} />;
}
