import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";
import { portfolioTestimonials } from "@/data/projects";

export function PortfolioTestimonials() {
  return (
    <section className="border-b border-border bg-bg-soft" id="stimmen">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            title="Was Kunden über die Zusammenarbeit sagen."
            lead="Echte Rückmeldungen aus Projekten mit Handwerk und regionalen Unternehmen."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          {portfolioTestimonials.map((item, index) => (
            <Reveal key={item.name} variant="slide" delay={index * 0.06}>
              <figure className="border-t border-border pt-8">
                <div
                  className="mb-4 flex gap-0.5 text-cta"
                  aria-label={`${item.rating ?? 5} von 5 Sternen`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-3.5 ${i < (item.rating ?? 5) ? "fill-current" : "fill-none text-border-strong"}`}
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="font-display text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl sm:leading-snug">
                  „{item.quote}“
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {"logoSrc" in item && item.logoSrc ? (
                    <div className="relative flex h-10 w-24 shrink-0 items-center">
                      <Image
                        src={item.logoSrc}
                        alt={`Logo ${item.company}`}
                        width={120}
                        height={40}
                        className="h-8 w-auto max-w-[6rem] object-contain object-left"
                      />
                    </div>
                  ) : null}
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-sm text-ink-muted">{item.company}</p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-subtle">
                      Google Bewertung
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
