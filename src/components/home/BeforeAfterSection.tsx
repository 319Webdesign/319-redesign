"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { useState } from "react";

function OldPanel() {
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-between bg-bg-muted p-6 text-ink sm:min-h-[380px] sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          Alte Website
        </p>
        <div className="mt-8 space-y-3">
          <div className="h-3 w-20 rounded-sm bg-ink/15" />
          <div className="h-8 w-3/4 rounded-sm bg-ink/40" />
          <div className="h-3 w-1/2 rounded-sm bg-ink/20" />
          <div className="mt-8 h-28 rounded-md bg-ink/10" />
        </div>
      </div>
      <p className="mt-6 text-sm text-ink-muted">Unklar · langsam · unsichtbar</p>
    </div>
  );
}

function NewPanel() {
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-between bg-brand p-6 text-bg sm:min-h-[380px] sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
          Neue Website
        </p>
        <div className="mt-8 space-y-3">
          <div className="h-3 w-20 rounded-sm bg-white/30" />
          <div className="h-8 w-3/4 rounded-sm bg-white/90" />
          <div className="h-3 w-1/2 rounded-sm bg-white/35" />
          <div className="mt-8 h-28 rounded-md bg-white/15" />
        </div>
      </div>
      <div className="mt-6 inline-flex h-10 w-40 items-center justify-center rounded-md bg-cta text-sm font-semibold text-cta-ink">
        Anfrage starten
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const [position, setPosition] = useState(52);

  return (
    <section id="vorher-nachher" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Vorher / Nachher"
            title="Der Unterschied ist sichtbar"
            lead="Von veraltet und austauschbar zu klar, schnell und anfrageorientiert."
          />
        </Reveal>

        <Reveal variant="scale" delay={0.08}>
          <div className="mt-14">
            <div
              className="relative overflow-hidden rounded-lg border border-border select-none"
              style={{ touchAction: "none" }}
            >
              <OldPanel />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
              >
                <NewPanel />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-bg"
                style={{ left: `${position}%` }}
                aria-hidden
              >
                <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg">
                  <span className="h-3 w-0.5 bg-ink-muted" />
                  <span className="mx-1 h-0.5 w-3 bg-ink-muted" />
                  <span className="h-3 w-0.5 bg-ink-muted" />
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={95}
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className={cn(
                  "absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0",
                )}
                aria-label="Vorher-Nachher-Vergleich verschieben"
              />
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Ziehen, um Alt und Neu zu vergleichen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
