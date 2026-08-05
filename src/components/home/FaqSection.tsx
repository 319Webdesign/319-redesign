import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/data/site";

export function FaqSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="FAQ"
            title="Fragen, die vor dem Start klären"
            lead="Damit am Ende nichts im Weg steht — außer dem Erstgespräch."
          />
        </Reveal>
        <Reveal variant="slide" delay={0.08}>
          <div className="mt-12">
            <FaqAccordion items={faqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
