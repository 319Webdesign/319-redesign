import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  lokaleSeoAudience,
  lokaleSeoClosing,
  lokaleSeoExpectations,
  lokaleSeoExplain,
  lokaleSeoFaq,
  lokaleSeoGbp,
  lokaleSeoHero,
  lokaleSeoLandingpages,
  lokaleSeoProblem,
  lokaleSeoProcess,
  lokaleSeoServices,
  lokaleSeoSignals,
  lokaleSeoTechnical,
  lokaleSeoWebdesign,
} from "@/data/lokale-seo";
import { siteConfig } from "@/data/site";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

function GbpCard() {
  return (
    <div className="rounded-lg border border-border bg-bg p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
        Google Unternehmensprofil
      </p>
      <p className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
        Ihr Unternehmen
      </p>
      <p className="mt-1 text-sm text-ink-muted">Region · Dienstleistung</p>
      <div className="mt-6 space-y-3 border-t border-border pt-6">
        {["Adresse", "Telefon", "Öffnungszeiten", "Website"].map((row) => (
          <div
            key={row}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <span className="text-ink-subtle">{row}</span>
            <span className="h-2 w-24 rounded-sm bg-bg-muted" aria-hidden />
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-ink-subtle">
        Schematische Darstellung – keine echten Rankings oder Bewertungen.
      </p>
    </div>
  );
}

export function LokaleSeoPage() {
  return (
    <SiteShell>
      <main>
        {/* 01 Hero */}
        <section className="relative overflow-hidden bg-brand">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,#123a6b_0%,#1b4f8c_48%,#1f5a9e_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 top-0 h-[70%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-[55%] w-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.12)_0%,transparent_70%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:pb-24">
            <nav aria-label="Brotkrumen" className="mb-10 text-sm text-white/55 sm:mb-12">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-motion hover:text-white">
                    Start
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/leistungen"
                    className="transition-motion hover:text-white"
                  >
                    Leistungen
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/80">Lokale SEO</li>
              </ol>
            </nav>

            <div className="max-w-4xl text-center md:text-left">
              <Reveal variant="fade">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 sm:text-base">
                  {lokaleSeoHero.eyebrow}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.05}>
                <h1 className="mt-5 text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {lokaleSeoHero.headline}
                </h1>
              </Reveal>
              <Reveal variant="slide" delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl md:mx-0 lg:text-[1.375rem]">
                  {lokaleSeoHero.lead}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.14}>
                <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
                  <Button
                    href={lokaleSeoHero.primaryHref}
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {lokaleSeoHero.primaryCta}
                  </Button>
                  <Button
                    href={lokaleSeoHero.secondaryHref}
                    variant="secondary"
                    size="lg"
                    className="w-full border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white md:w-auto"
                  >
                    {lokaleSeoHero.secondaryCta}
                  </Button>
                </div>
              </Reveal>
              <Reveal variant="fade" delay={0.18}>
                <ul className="mt-10 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:justify-start md:gap-x-6 md:gap-y-3">
                  {lokaleSeoHero.trust.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-base text-white/70"
                    >
                      <Check
                        className="size-4 shrink-0 text-cta"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 Problem */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoProblem.eyebrow}
                title={lokaleSeoProblem.headline}
                lead={lokaleSeoProblem.lead}
              />
            </Reveal>
            <div className="mt-16 max-w-3xl space-y-6 sm:mt-20 sm:space-y-8">
              {lokaleSeoProblem.steps.map((step, index) => (
                <Reveal key={step} variant="slide" delay={index * 0.05}>
                  <p
                    className={
                      index === 0
                        ? "font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl"
                        : "font-display text-2xl font-medium tracking-tight text-ink-muted sm:text-3xl"
                    }
                  >
                    {index > 0 ? (
                      <span className="mr-3 text-brand/40" aria-hidden>
                        →
                      </span>
                    ) : null}
                    {step}
                  </p>
                </Reveal>
              ))}
              <Reveal variant="slide" delay={0.25}>
                <p className="pt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  {lokaleSeoProblem.closing}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 Was ist lokale SEO */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoExplain.eyebrow}
                title={lokaleSeoExplain.headline}
                lead={lokaleSeoExplain.lead}
              />
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 sm:mt-14 sm:gap-x-8">
                {lokaleSeoExplain.examples.map((example) => (
                  <li
                    key={example}
                    className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl"
                  >
                    „{example}“
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="slide" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:mt-14 sm:text-lg">
                {lokaleSeoExplain.criteriaLead}
              </p>
            </Reveal>
            <ul className="mt-8 max-w-2xl space-y-4">
              {lokaleSeoExplain.criteria.map((item, index) => (
                <Reveal key={item} variant="slide" delay={0.04 * index}>
                  <li className="flex items-start gap-3 border-t border-border pt-4 text-base text-ink sm:text-lg">
                    <Check
                      className="mt-1 size-4 shrink-0 text-brand"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 04 Signale */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoSignals.eyebrow}
                title={lokaleSeoSignals.headline}
                align="center"
              />
            </Reveal>

            <Reveal variant="scale" delay={0.08}>
              <div className="mt-14 sm:mt-16">
                <div className="mx-auto max-w-md text-center">
                  <p className="inline-block rounded-md border border-brand bg-brand px-6 py-4 font-display text-lg font-medium tracking-tight text-white sm:text-xl">
                    {lokaleSeoSignals.center}
                  </p>
                </div>
                <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-5">
                  {lokaleSeoSignals.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border pb-2 font-display text-lg font-medium tracking-tight text-ink sm:text-xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={0.12}>
              <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-ink-muted sm:mt-14 sm:text-lg">
                {lokaleSeoSignals.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 05 Leistungen */}
        <section id="leistungen" className="scroll-mt-24 bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoServices.eyebrow}
                title={lokaleSeoServices.headline}
                lead={lokaleSeoServices.lead}
              />
            </Reveal>
            <div className="mt-14 space-y-0">
              {lokaleSeoServices.items.map((item, index) => (
                <Reveal key={item.title} variant="slide" delay={index * 0.03}>
                  <div className="grid gap-3 border-t border-border py-8 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-10">
                    <div className="lg:col-span-4">
                      <p className="font-display text-sm tabular-nums text-brand/45">
                        {item.number}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-6">
                      <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                        {item.text}
                      </p>
                      {"details" in item && item.details ? (
                        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                          {item.details.map((detail) => (
                            <li
                              key={detail}
                              className="text-sm font-medium text-ink"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 06 Google Unternehmensprofil */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <header className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      {lokaleSeoGbp.eyebrow}
                    </p>
                    <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {lokaleSeoGbp.headline}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
                      {lokaleSeoGbp.lead}
                    </p>
                  </header>
                </Reveal>
                <Reveal variant="slide" delay={0.06}>
                  <p className="mt-8 text-base font-medium text-white sm:text-lg">
                    Darüber finden potenzielle Kunden beispielsweise:
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {lokaleSeoGbp.finds.map((item) => (
                      <li key={item} className="text-base text-white/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal variant="slide" delay={0.1}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    {lokaleSeoGbp.note}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={0.12}>
                  <div className="mt-8">
                    <Link
                      href={lokaleSeoGbp.linkHref}
                      className="group inline-flex items-center gap-2 text-base font-medium text-white transition-motion hover:text-cta"
                    >
                      {lokaleSeoGbp.linkLabel}
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal variant="scale" delay={0.08}>
                  <GbpCard />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 07 Lokale Landingpages */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoLandingpages.eyebrow}
                title={lokaleSeoLandingpages.headline}
                lead={lokaleSeoLandingpages.lead}
              />
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal variant="slide" delay={0.04}>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                    {lokaleSeoLandingpages.examples.label}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {lokaleSeoLandingpages.examples.paths.map((path) => (
                      <li
                        key={path}
                        className="font-mono text-sm text-ink sm:text-base"
                      >
                        {path}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-base leading-relaxed text-ink-muted sm:text-lg">
                    {lokaleSeoLandingpages.quality}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <Reveal variant="scale" delay={0.08}>
                  <div className="rounded-lg border border-border bg-bg p-6 sm:p-8">
                    <p className="text-center font-display text-xl font-medium tracking-tight text-ink">
                      {lokaleSeoLandingpages.tree.root}
                    </p>
                    <div
                      className="mx-auto my-4 h-8 w-px bg-border"
                      aria-hidden
                    />
                    <ul className="grid gap-3 sm:grid-cols-3">
                      {lokaleSeoLandingpages.tree.children.map((child) => (
                        <li
                          key={child}
                          className="border border-border px-4 py-3 text-center text-sm font-medium text-ink"
                        >
                          {child}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 08 Technisches SEO */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoTechnical.eyebrow}
                title={lokaleSeoTechnical.headline}
                lead={lokaleSeoTechnical.lead}
              />
            </Reveal>
            <div className="mt-14 space-y-0">
              {lokaleSeoTechnical.items.map((item, index) => (
                <Reveal key={item.title} variant="slide" delay={index * 0.03}>
                  <div className="grid gap-3 border-t border-border py-8 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-10">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl lg:col-span-4">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-muted lg:col-span-7 lg:col-start-6 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 09 Ablauf */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoProcess.eyebrow}
                title={lokaleSeoProcess.headline}
              />
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-12">
              {lokaleSeoProcess.steps.map((step, index) => (
                <Reveal key={step.title} variant="slide" delay={index * 0.04}>
                  <div>
                    <p className="font-display text-sm tabular-nums text-brand/45">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink sm:text-[1.375rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10 SEO braucht Zeit */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <header className="max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                  {lokaleSeoExpectations.eyebrow}
                </p>
                <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {lokaleSeoExpectations.headline}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
                  {lokaleSeoExpectations.lead}
                </p>
              </header>
            </Reveal>
            <div className="mt-14 space-y-4 sm:mt-16">
              {lokaleSeoExpectations.statements.map((statement, index) => (
                <Reveal key={statement} variant="slide" delay={index * 0.05}>
                  <p className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {statement}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade" delay={0.16}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {lokaleSeoExpectations.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 11 Webdesign + SEO */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <SectionHeader
                    eyebrow={lokaleSeoWebdesign.eyebrow}
                    title={lokaleSeoWebdesign.headline}
                    lead={lokaleSeoWebdesign.lead}
                  />
                </Reveal>
                <Reveal variant="slide" delay={0.08}>
                  <p className="mt-8 text-base leading-relaxed text-ink-muted sm:text-lg">
                    {lokaleSeoWebdesign.note}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={0.1}>
                  <div className="mt-8">
                    <Link
                      href={lokaleSeoWebdesign.linkHref}
                      className="group inline-flex items-center gap-2 text-base font-medium text-brand transition-motion hover:text-brand-dark"
                    >
                      {lokaleSeoWebdesign.linkLabel}
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal variant="slide" delay={0.06}>
                  <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                    {lokaleSeoWebdesign.includedLead}
                  </p>
                  <ul className="mt-6 divide-y divide-border border-y border-border">
                    {lokaleSeoWebdesign.included.map((item) => (
                      <li
                        key={item}
                        className="py-4 font-display text-lg font-medium tracking-tight text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 12 Zielgruppe */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={lokaleSeoAudience.eyebrow}
                title={lokaleSeoAudience.headline}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10 sm:gap-y-5">
                {lokaleSeoAudience.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl lg:text-3xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {lokaleSeoAudience.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 13 FAQ */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Häufige Fragen"
                title="Fragen zur lokalen Suchmaschinenoptimierung."
                lead="Kurz und klar – ohne Ranking-Märchen."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...lokaleSeoFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 14 Abschluss-CTA */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {lokaleSeoClosing.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {lokaleSeoClosing.headline}
              </h2>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {lokaleSeoClosing.lead}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.14}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={lokaleSeoClosing.primaryHref}
                  variant="primary"
                  size="lg"
                >
                  {lokaleSeoClosing.primaryCta}
                </Button>
                <Button
                  href={siteConfig.whatsappHref}
                  variant="ghost"
                  size="lg"
                  icon={<MessageCircle className="size-5" aria-hidden />}
                  className="!bg-[#25D366] font-semibold !text-white hover:!bg-[#20BD5A] hover:!text-white"
                >
                  WhatsApp
                </Button>
              </div>
            </Reveal>
            <Reveal variant="fade" delay={0.18}>
              <p className="mt-8 text-sm text-white/60">
                {lokaleSeoClosing.trust}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
