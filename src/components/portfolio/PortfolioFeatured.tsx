import { Reveal, SectionHeader } from "@/components/ui";
import { getAllPortfolioProjects } from "@/data/projects";
import { PortfolioCaseBlock } from "./PortfolioCaseBlock";

export function PortfolioFeatured() {
  const projects = getAllPortfolioProjects();

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

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            variant="slide"
            delay={index === 0 ? 0 : 0.04}
          >
            <div id={`projekt-${project.slug}`} className="scroll-mt-24">
              <PortfolioCaseBlock
                project={project}
                priority={index === 0}
                reverse={index % 2 === 1}
                nextProject={projects[index + 1] ?? null}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
