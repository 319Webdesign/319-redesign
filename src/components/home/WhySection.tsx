import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whyPoints } from "@/data/site";

const trustItems = [
  "Kostenlos",
  "Ohne Verpflichtung",
  "Persönlich",
] as const;

export function WhySection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand">
              Wie wir arbeiten
            </p>
          </Reveal>

          <Reveal variant="slide" delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-[2.5rem] font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.08]">
              Keine Agentur.
              <br />
              Keine Baukästen.
              <br />
              Sondern eine Website, die zu Ihrem Unternehmen passt.
            </h2>
          </Reveal>

          <Reveal variant="slide" delay={0.1}>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink-muted">
              Sie arbeiten direkt mit mir zusammen – ohne Zwischenhändler, ohne
              Ticketsystem und ohne Standardlösungen. Jede Website entsteht
              individuell, technisch sauber und mit einem klaren Ziel: Ihr
              Unternehmen professionell zu präsentieren und neue Anfragen zu
              gewinnen.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          {whyPoints.map((point, index) => (
            <Reveal key={point.title} variant="slide" delay={index * 0.05}>
              <div className="grid gap-5 border-t border-border py-14 sm:gap-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-[1.75rem] font-medium leading-snug tracking-tight text-ink sm:text-[2.125rem]">
                    {point.title}
                  </h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-xl leading-relaxed text-ink-muted">
                    {point.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="slide">
          <div className="mx-auto max-w-2xl border-t border-border pt-14 text-center sm:pt-16">
            <h3 className="text-balance font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Überzeugt von unserer Arbeitsweise?
            </h3>

            <p className="mx-auto mt-4 text-lg leading-relaxed text-ink-muted">
              Lassen Sie uns gemeinsam herausfinden, wie Ihre neue Website
              aussehen könnte. Im unverbindlichen Erstgespräch sprechen wir über
              Ihr Unternehmen, Ihre Ziele und erste Ideen für einen modernen
              Internetauftritt.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                href="/kontakt"
                variant="primary"
                size="md"
                className="hover:-translate-y-0.5"
              >
                Kostenloses Erstgespräch vereinbaren
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="md"
                className="hover:-translate-y-0.5"
              >
                Referenzen ansehen
              </Button>
            </div>

            <ul className="mt-6 flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-ink-subtle"
                >
                  <Check
                    className="size-3.5 shrink-0 text-ink-subtle"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
