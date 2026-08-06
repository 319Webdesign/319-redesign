import { Reveal, SectionHeader } from "@/components/ui";
import { getFeaturedProjects } from "@/data/projects";
import { PortfolioCaseBlock } from "./PortfolioCaseBlock";

export function PortfolioFeatured() {
  const featured = getFeaturedProjects();

  return (
    <section id="projekte" className="scroll-mt-24 border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 pt-20 sm:px-8 sm:pt-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Ausgewählte Projekte"
            title="Echte Projekte. Individuelle Lösungen. Klare Ergebnisse."
            lead="Entdecken Sie ausgewählte Websites, die individuell für Unternehmen entwickelt wurden – mit Fokus auf Design, Nutzerfreundlichkeit und nachhaltigen Erfolg."
          />
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {featured.map((project, index) => (
          <div
            key={project.slug}
            id={`projekt-${project.slug}`}
            className="scroll-mt-24"
          >
            <PortfolioCaseBlock
              project={project}
              priority={index === 0}
              nextProject={featured[index + 1] ?? null}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
