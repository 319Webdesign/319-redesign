import { SiteShell } from "@/components/layout/SiteShell";
import { ProjectDetailView } from "@/components/portfolio";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/projects";
import { breadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Projekt nicht gefunden", robots: { index: false } };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: project.href },
    openGraph: {
      ...defaultOpenGraph(
        project.seo.title,
        project.seo.description,
        project.href,
      ),
      images: [{ url: project.image.src, alt: project.image.alt }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.shortTitle, path: project.href },
        ])}
      />
      <ProjectDetailView project={project} />
    </SiteShell>
  );
}
