"use client";

import { Code2, MessageCircle, PenTool, Rocket } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpreadFromCenter } from "@/components/ui/SpreadFromCenter";
import { processSteps } from "@/data/site";
import { cn } from "@/lib/cn";

const stepIcons: ReactNode[] = [
  <MessageCircle key="meet" className="size-4" strokeWidth={1.5} aria-hidden />,
  <PenTool key="design" className="size-4" strokeWidth={1.5} aria-hidden />,
  <Code2 key="dev" className="size-4" strokeWidth={1.5} aria-hidden />,
  <Rocket key="launch" className="size-4" strokeWidth={1.5} aria-hidden />,
];

const steps = processSteps.map((step, index) => ({
  ...step,
  icon: stepIcons[index],
  side: (index % 2 === 0 ? 1 : -1) as -1 | 1,
}));

export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-brand">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">
              Projektablauf
            </p>
          </Reveal>

          <Reveal variant="slide" delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              So läuft die Zusammenarbeit
            </h2>
          </Reveal>

          <Reveal variant="slide" delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Klar, persönlich und ohne Stress — die meisten Projekte sind
              innerhalb von 3–6 Wochen online.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid list-none gap-x-12 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-y-12 lg:mt-16">
          {steps.map((step, index) => (
            <SpreadFromCenter
              key={step.title}
              side={step.side}
              delay={0.06 + index * 0.07}
              distance={80}
            >
              <li className="flex gap-4">
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white",
                  )}
                >
                  {step.icon}
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </li>
            </SpreadFromCenter>
          ))}
        </ol>

        <Reveal variant="slide">
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-white/20 pt-10 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <h3 className="font-display text-xl font-medium tracking-tight text-white sm:text-2xl">
              Bereit für den ersten Schritt?
            </h3>
            <Button
              href="/kontakt"
              variant="primary"
              size="md"
              className="shrink-0 hover:-translate-y-0.5"
            >
              Kostenloses Erstgespräch vereinbaren
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
