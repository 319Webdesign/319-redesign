"use client";

import Image from "next/image";
import { Check, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpreadFromCenter } from "@/components/ui/SpreadFromCenter";
import { siteConfig } from "@/data/site";

const trustItems = [
  "Unverbindlich",
  "Individuell",
  "Persönlich",
] as const;

export function DesignProposalCta() {
  return (
    <section className="bg-bg" aria-labelledby="design-proposal-heading">
      <div className="mx-auto max-w-6xl overflow-hidden px-6 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <SpreadFromCenter
            side={1}
            delay={0.05}
            distance={120}
            className="order-2 flex justify-center lg:order-1 lg:col-span-4 lg:justify-start"
          >
            <div className="flex max-w-[16rem] flex-col items-center text-center sm:max-w-[17rem]">
              <div className="relative size-40 sm:size-44 lg:size-48">
                <div className="absolute inset-0 rounded-full bg-brand-soft" />
                <div className="absolute inset-[3px] overflow-hidden rounded-full ring-1 ring-brand/15">
                  <Image
                    src="/maik.webp"
                    alt="Maik Schmidt"
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <UserRound
                  className="size-4 shrink-0 text-brand"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="font-display text-lg font-medium tracking-tight text-ink">
                  Maik Schmidt
                </p>
              </div>
              <p className="mt-1 text-sm text-brand">
                Inhaber von {siteConfig.name}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-subtle">
                Ihr persönlicher Ansprechpartner für moderne Websites im
                Rhein-Main-Gebiet.
              </p>
            </div>
          </SpreadFromCenter>

          <SpreadFromCenter
            side={-1}
            delay={0.12}
            distance={120}
            className="order-1 lg:order-2 lg:col-span-8"
          >
            <h2
              id="design-proposal-heading"
              className="text-balance font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Genau hier setzt {siteConfig.name} an.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Ich entwickle für Sie einen unverbindlichen Designvorschlag und
              zeige Ihnen, wie Ihr Unternehmen online moderner, professioneller
              und überzeugender auftreten kann. Gemeinsam besprechen wir, welche
              Möglichkeiten für Ihr Projekt sinnvoll sind – ganz ohne
              Verpflichtung.
            </p>

            <ul className="mt-7 flex list-none flex-wrap gap-x-6 gap-y-2.5">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink-muted"
                >
                  <Check
                    className="size-3.5 shrink-0 text-brand"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-3 sm:mt-14 sm:flex-row sm:flex-wrap">
              <Button
                href="/kontakt"
                variant="primary"
                size="md"
                className="hover:-translate-y-0.5"
              >
                Kostenlosen Designvorschlag anfordern
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
          </SpreadFromCenter>
        </div>
      </div>
    </section>
  );
}
