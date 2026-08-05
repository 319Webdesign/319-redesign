import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyPoints } from "@/data/site";

export function WhySection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Warum 319Webdesign"
            title="Nicht anonym. Nicht Baukasten. Sondern persönlich und premium."
            lead="Große Aussagen, klare Haltung — damit du weißt, worauf du dich einlässt."
          />
        </Reveal>

        <div className="mt-16 space-y-0">
          {whyPoints.map((point, index) => (
            <Reveal key={point.title} variant="slide" delay={index * 0.04}>
              <div className="grid gap-4 border-t border-border py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {point.title}
                  </h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-lg leading-relaxed text-ink-muted">
                    {point.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
