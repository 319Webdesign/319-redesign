import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Projektablauf"
            title="So läuft die Zusammenarbeit"
            lead="Sechs klare Schritte — vorhersehbar, ohne Blackbox und ohne Agentur-Theater."
          />
        </Reveal>
        <Reveal variant="slide" delay={0.1}>
          <div className="mt-14">
            <Timeline steps={processSteps} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
