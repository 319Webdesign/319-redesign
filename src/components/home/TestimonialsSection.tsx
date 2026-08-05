import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Testimonial } from "@/components/ui/Testimonial";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Kundenbewertungen"
            title="Was Auftraggeber sagen"
            lead="Nicht nur Sterne — Stimmen von Betrieben, die Ergebnisse wollen."
          />
        </Reveal>
        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} variant="slide" delay={index * 0.08}>
              <Testimonial
                quote={item.quote}
                name={item.name}
                company={item.company}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
