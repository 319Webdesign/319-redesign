import {
  PlaceholderPage,
  placeholderMetadata,
} from "@/components/layout/PlaceholderPage";
import { projects } from "@/data/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const bySlug = Object.fromEntries(
  projects.map((p) => [p.href.replace("/portfolio/", ""), p]),
);

export async function generateStaticParams() {
  return Object.keys(bySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = bySlug[slug];
  if (!project) return placeholderMetadata("Case Study", "Case Study folgt.");
  return placeholderMetadata(project.title, project.result);
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = bySlug[slug];
  if (!project) notFound();

  return (
    <PlaceholderPage
      eyebrow="Case Study"
      title={project.title}
      description={`${project.result} Die ausführliche Case Study folgt.`}
    />
  );
}
