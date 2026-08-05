import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { digitalSolutions } from "@/data/site";
import { cn } from "@/lib/cn";

export function ServicesSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand">
              Digitale Lösungen
            </p>
          </Reveal>

          <Reveal variant="slide" delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Wir kümmern uns um mehr als nur Ihre Website.
            </h2>
          </Reveal>

          <Reveal variant="slide" delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Ein professioneller Online-Auftritt besteht aus vielen Bausteinen.
              Ich begleite Unternehmen von der ersten Website bis zur
              langfristigen Betreuung und sorge dafür, dass alle digitalen
              Elemente perfekt zusammenspielen.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          {digitalSolutions.map((solution, index) => (
            <Reveal key={solution.id} variant="slide" delay={index * 0.05}>
              <Link
                href={solution.href}
                className={cn(
                  "group grid gap-4 border-t border-border py-10 transition-colors duration-300",
                  "hover:border-brand/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
                  "sm:py-12 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-14",
                )}
              >
                <h3 className="font-display text-[1.75rem] font-medium leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-[2.125rem] lg:col-span-4">
                  {solution.title}
                </h3>

                <div className="lg:col-span-6">
                  <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">
                    {solution.description}
                  </p>

                  <ul
                    className={cn(
                      "mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-subtle transition-all duration-300 ease-out",
                      "max-lg:opacity-100",
                      "lg:mt-0 lg:max-h-0 lg:overflow-hidden lg:opacity-0",
                      "lg:group-hover:mt-5 lg:group-hover:max-h-40 lg:group-hover:opacity-100",
                    )}
                  >
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          className="size-1 rounded-full bg-brand/40"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex lg:col-span-2 lg:justify-end lg:pt-2">
                  <ArrowRight
                    className="size-5 text-ink-subtle transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-brand"
                    aria-hidden
                  />
                  <span className="sr-only">Mehr erfahren</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal variant="slide">
          <div className="mx-auto mt-16 max-w-2xl border-t border-border pt-14 text-center sm:mt-20 sm:pt-16">
            <h3 className="text-balance font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Nicht sicher, welche Lösung zu Ihrem Unternehmen passt?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
              Lassen Sie uns gemeinsam herausfinden, welche digitalen Maßnahmen
              Ihr Unternehmen wirklich weiterbringen.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                href="/kontakt"
                variant="primary"
                size="md"
                className="hover:-translate-y-0.5"
              >
                Kostenloses Erstgespräch vereinbaren
              </Button>
              <Button
                href="/leistungen"
                variant="secondary"
                size="md"
                className="hover:-translate-y-0.5"
              >
                Alle Leistungen ansehen
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
