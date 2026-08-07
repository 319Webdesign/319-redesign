import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import {
  getServiceBySlug,
  serviceLandings,
} from "@/data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceLandings
    .filter((s) => s.slug !== "webdesign" && s.slug !== "lokale-seo")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Leistung nicht gefunden" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      locale: "de_DE",
      type: "website",
    },
    alternates: {
      canonical: `/leistungen/${service.slug}`,
    },
  };
}

export default async function LeistungDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceLandingPage service={service} />;
}
