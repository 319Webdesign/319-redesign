import { SiteShell } from "@/components/layout/SiteShell";
import { ProjectDetailView } from "@/components/portfolio";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/projects";
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
    return { title: "Projekt nicht gefunden" };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: project.href },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [{ url: project.image.src }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <ProjectDetailView project={project} />
    </SiteShell>
  );
}
