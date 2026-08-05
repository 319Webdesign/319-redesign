import { BeforeAfterCompare } from "@/components/home/BeforeAfterCompare";
import {
  DeviceMockup,
  MobileMockup,
} from "@/components/home/DeviceMockup";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/site";

export function ReferencesSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Referenzen"
            title="Ähnliche Betriebe. Messbare Ergebnisse."
            lead="Die wichtigste Frage: Hat er schon Unternehmen wie meins betreut?"
          />
        </Reveal>

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.href} variant="slide" delay={index * 0.06}>
              <ProjectCard
                title={project.title}
                industry={project.industry}
                service={project.service}
                result={project.result}
                href={project.href}
                image={project.image}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                reverse={index % 2 === 1}
                desktopMockup={
                  <DeviceMockup
                    variant={index % 2 === 0 ? "brand" : "light"}
                    label="Case Study"
                    className="rounded-none border-0"
                  />
                }
                mobileMockup={<MobileMockup />}
              />
            </Reveal>
          ))}
        </div>

        <div id="vorher-nachher" className="mt-24 scroll-mt-24 sm:mt-28">
          <Reveal variant="slide">
            <SectionHeader
              eyebrow="Vorher / Nachher"
              title="Der Unterschied ist sichtbar"
              lead="Von veraltet und austauschbar zu klar, schnell und anfrageorientiert."
            />
          </Reveal>

          <Reveal variant="scale" delay={0.08}>
            <div className="mt-12 sm:mt-14">
              <BeforeAfterCompare />
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={0.1}>
          <div className="mt-16 flex justify-center sm:mt-20">
            <Button href="/portfolio" variant="primary" size="lg">
              Alle Projekte ansehen
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
