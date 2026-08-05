"use client";

import { Eye, MapPin, Rocket } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SpreadFromCenter } from "@/components/ui/SpreadFromCenter";
import { cn } from "@/lib/cn";

const points: {
  title: string;
  text: string;
  icon: ReactNode;
  side: -1 | 0 | 1;
}[] = [
  {
    title: "Der erste Eindruck",
    text: "Eine veraltete Website kostet Vertrauen – noch bevor ein Besucher Kontakt aufnimmt.",
    icon: <Eye className="size-5" strokeWidth={1.5} aria-hidden />,
    side: 1,
  },
  {
    title: "Die Sichtbarkeit",
    text: "Wer bei Google kaum gefunden wird, verliert potenzielle Kunden an die Konkurrenz.",
    icon: <MapPin className="size-5" strokeWidth={1.5} aria-hidden />,
    side: 0,
  },
  {
    title: "Das Ergebnis",
    text: "Eine gute Website überzeugt nicht nur optisch, sondern unterstützt Ihr Unternehmen dabei, neue Anfragen zu gewinnen.",
    icon: <Rocket className="size-5" strokeWidth={1.5} aria-hidden />,
    side: -1,
  },
];

export function ProblemSection() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl overflow-hidden px-6 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand">
              Warum viele Websites ihr Potenzial verlieren
            </p>
          </Reveal>

          <Reveal variant="slide" delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Ihre Website entscheidet oft,
              <br className="hidden sm:block" /> bevor Sie überhaupt mit einem
              Kunden sprechen.
            </h2>
          </Reveal>

          <Reveal variant="slide" delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Potenzielle Kunden entscheiden innerhalb weniger Sekunden, ob ein
              Unternehmen professionell wirkt. Genau deshalb sollte Ihre Website
              nicht nur gut aussehen, sondern Vertrauen schaffen, gefunden werden
              und Besucher zu echten Anfragen führen.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-14">
          {points.map((point, index) => (
            <SpreadFromCenter
              key={point.title}
              side={point.side}
              delay={0.08 + index * 0.1}
              distance={index === 1 ? 0 : 120}
            >
              <article className="group">
                <div
                  className={cn(
                    "inline-flex text-brand transition-transform duration-[250ms] ease-out",
                    "group-hover:-translate-y-0.5",
                  )}
                >
                  {point.icon}
                </div>
                <h3 className="mt-5 font-display text-[1.375rem] font-medium tracking-tight text-ink transition-colors duration-[250ms] ease-out group-hover:text-brand-dark">
                  {point.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                  {point.text}
                </p>
              </article>
            </SpreadFromCenter>
          ))}
        </div>
      </div>
    </section>
  );
}
