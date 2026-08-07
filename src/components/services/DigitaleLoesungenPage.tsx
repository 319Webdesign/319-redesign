import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  digitaleLoesungenAudience,
  digitaleLoesungenAutomation,
  digitaleLoesungenBenefits,
  digitaleLoesungenBooking,
  digitaleLoesungenClosing,
  digitaleLoesungenContact,
  digitaleLoesungenExplain,
  digitaleLoesungenFaq,
  digitaleLoesungenHero,
  digitaleLoesungenIntegrations,
  digitaleLoesungenProblems,
  digitaleLoesungenProcess,
  digitaleLoesungenSolutions,
  digitaleLoesungenWebsite,
} from "@/data/digitale-loesungen";
import { siteConfig } from "@/data/site";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

function VerticalFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <li key={`${step}-${index}`}>
          <div className="flex flex-col items-start">
            <span className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="my-2 text-ink-subtle" aria-hidden>
                ↓
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function BrandVerticalFlow({
  steps,
}: {
  steps: readonly string[];
}) {
  return (
    <ol className="rounded-lg border border-white/15 bg-white/5 p-5 sm:p-6">
      {steps.map((step, index) => (
        <li key={`${step}-${index}`}>
          <div className="flex items-start gap-4">
            <div className="flex w-8 shrink-0 flex-col items-center">
              <span className="flex size-8 items-center justify-center rounded-full border border-white/25 text-xs font-medium text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 ? (
                <span className="mt-1 h-8 w-px bg-white/20" aria-hidden />
              ) : null}
            </div>
            <p className="pt-1.5 font-display text-lg font-medium tracking-tight text-white">
              {step}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DigitaleLoesungenPage() {
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
            <nav
              aria-label="Brotkrumen"
              className="mb-10 text-sm text-white/55 sm:mb-12"
            >
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
                <li className="text-white/80">Digitale Lösungen</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <Reveal variant="fade">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 sm:text-base">
                  {digitaleLoesungenHero.eyebrow}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.05}>
                <h1 className="mt-5 text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {digitaleLoesungenHero.headline}
                </h1>
              </Reveal>
              <Reveal variant="slide" delay={0.1}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl lg:text-[1.375rem]">
                  {digitaleLoesungenHero.lead}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    href={digitaleLoesungenHero.primaryHref}
                    variant="primary"
                    size="lg"
                  >
                    {digitaleLoesungenHero.primaryCta}
                  </Button>
                  <Button
                    href={digitaleLoesungenHero.secondaryHref}
                    variant="secondary"
                    size="lg"
                    className="border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white"
                  >
                    {digitaleLoesungenHero.secondaryCta}
                  </Button>
                </div>
              </Reveal>
              <Reveal variant="fade" delay={0.18}>
                <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
                  {digitaleLoesungenHero.trust.map((item) => (
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

        {/* 02 Typische Probleme */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenProblems.eyebrow}
                title={digitaleLoesungenProblems.headline}
                lead={digitaleLoesungenProblems.lead}
              />
            </Reveal>

            <div className="mt-14 max-w-3xl space-y-0 sm:mt-16">
              {digitaleLoesungenProblems.items.map((item, index) => (
                <Reveal key={item} variant="slide" delay={index * 0.04}>
                  <div>
                    <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                      {item}
                    </p>
                    {index < digitaleLoesungenProblems.items.length - 1 ? (
                      <p className="my-4 text-ink-subtle" aria-hidden>
                        ↓
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={0.12}>
              <p className="mt-12 max-w-2xl font-display text-lg font-medium tracking-tight text-brand sm:text-xl">
                {digitaleLoesungenProblems.closing}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 Was bedeutet digitale Lösungen */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36 lg:py-40">
            <div className="ml-auto w-full max-w-xl lg:max-w-2xl">
              <Reveal variant="slide">
                <SectionHeader
                  eyebrow={digitaleLoesungenExplain.eyebrow}
                  title={digitaleLoesungenExplain.headline}
                  lead={digitaleLoesungenExplain.lead}
                />
              </Reveal>

              <Reveal variant="slide" delay={0.06}>
                <p className="mt-10 text-base font-medium text-ink sm:text-lg">
                  Eine gute digitale Lösung verbindet:
                </p>
                <ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-x-3">
                  {digitaleLoesungenExplain.connects.map((item, index) => (
                    <li key={item} className="flex items-center gap-2 sm:gap-3">
                      <span className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                        {item}
                      </span>
                      {index < digitaleLoesungenExplain.connects.length - 1 ? (
                        <span className="text-brand/40 select-none" aria-hidden>
                          ·
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="fade" delay={0.1}>
                <p className="mt-10 max-w-2xl border-l-2 border-brand pl-5 text-lg font-medium leading-relaxed text-ink sm:pl-6 sm:text-xl">
                  {digitaleLoesungenExplain.statement}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 04 Welche Lösungen */}
        <section id="moeglichkeiten" className="scroll-mt-24 bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenSolutions.eyebrow}
                title={digitaleLoesungenSolutions.headline}
              />
            </Reveal>

            <div className="mt-14 space-y-0 sm:mt-16">
              {digitaleLoesungenSolutions.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  variant="slide"
                  delay={Math.min(index * 0.03, 0.2)}
                >
                  <article className="grid gap-4 border-t border-border py-10 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-12">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl lg:col-span-4">
                      {item.title}
                    </h3>
                    <div className="lg:col-span-7 lg:col-start-6">
                      <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                        {item.text}
                      </p>
                      {"details" in item && item.details ? (
                        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                          {item.details.map((detail) => (
                            <li
                              key={detail}
                              className="text-sm text-ink-subtle sm:text-base"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal variant="slide" delay={0.1}>
              <div className="mt-10">
                <Button href="/kontakt" variant="primary" size="lg">
                  Individuelle Lösung starten
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 Kontakt- & Anfrageprozesse */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenContact.eyebrow}
                title={digitaleLoesungenContact.headline}
                lead={digitaleLoesungenContact.lead}
              />
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-border pt-14 sm:mt-16 sm:pt-16 lg:grid-cols-2 lg:gap-16">
              <Reveal variant="slide" delay={0.04}>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                    {digitaleLoesungenContact.standard.label}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {digitaleLoesungenContact.standard.fields.map((field) => (
                      <li
                        key={field}
                        className="border-b border-border pb-3 font-display text-xl font-medium tracking-tight text-ink-muted"
                      >
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal variant="slide" delay={0.08}>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                    {digitaleLoesungenContact.custom.label}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {digitaleLoesungenContact.custom.fields.map((field) => (
                      <li
                        key={field}
                        className="border-b border-border pb-3 font-display text-xl font-medium tracking-tight text-ink"
                      >
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal variant="fade" delay={0.12}>
              <div className="mt-14 border-t border-border pt-10">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                  Das Ergebnis
                </p>
                <ul className="mt-5 space-y-2">
                  {digitaleLoesungenContact.results.map((result) => (
                    <li
                      key={result}
                      className="font-display text-xl font-medium tracking-tight text-brand sm:text-2xl"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 Terminbuchung */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <header className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      {digitaleLoesungenBooking.eyebrow}
                    </p>
                    <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {digitaleLoesungenBooking.headline}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
                      {digitaleLoesungenBooking.lead}
                    </p>
                  </header>
                </Reveal>
                <Reveal variant="slide" delay={0.08}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    {digitaleLoesungenBooking.note}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal variant="scale" delay={0.08}>
                  <BrandVerticalFlow steps={digitaleLoesungenBooking.flow} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 07 CRM & Schnittstellen */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenIntegrations.eyebrow}
                title={digitaleLoesungenIntegrations.headline}
                lead={digitaleLoesungenIntegrations.lead}
              />
            </Reveal>

            <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
              {digitaleLoesungenIntegrations.flows.map((flow, index) => (
                <Reveal key={flow.label} variant="slide" delay={index * 0.05}>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                      {flow.label}
                    </p>
                    <div className="mt-5">
                      <VerticalFlow steps={flow.steps} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="slide" delay={0.1}>
              <div className="mt-14 border-t border-border pt-12 sm:mt-16 sm:pt-14">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                  {digitaleLoesungenIntegrations.reference.title}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                  {digitaleLoesungenIntegrations.reference.text}
                </p>
                <Link
                  href={digitaleLoesungenIntegrations.reference.linkHref}
                  className="group mt-6 inline-flex items-center gap-2 text-base font-medium text-brand transition-motion hover:underline"
                >
                  {digitaleLoesungenIntegrations.reference.linkLabel}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 08 Automatisierungen */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenAutomation.eyebrow}
                title={digitaleLoesungenAutomation.headline}
                lead={digitaleLoesungenAutomation.lead}
              />
            </Reveal>

            <div className="mt-14 space-y-0 sm:mt-16">
              {digitaleLoesungenAutomation.examples.map((example, index) => (
                <Reveal
                  key={example.from}
                  variant="slide"
                  delay={index * 0.03}
                >
                  <div className="grid gap-2 border-t border-border py-8 last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-10">
                    <p className="font-display text-xl font-medium tracking-tight text-ink sm:col-span-4 sm:text-2xl">
                      {example.from}
                    </p>
                    <p className="text-ink-subtle sm:col-span-1" aria-hidden>
                      ↓
                    </p>
                    <p className="font-display text-xl font-medium tracking-tight text-ink-muted sm:col-span-7 sm:text-2xl">
                      {example.to}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {digitaleLoesungenAutomation.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 09 Website + Funktion */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <header className="max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                  {digitaleLoesungenWebsite.eyebrow}
                </p>
                <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {digitaleLoesungenWebsite.headline}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
                  {digitaleLoesungenWebsite.lead}
                </p>
              </header>
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10">
                {digitaleLoesungenWebsite.combos.map((combo) => (
                  <li
                    key={combo}
                    className="font-display text-xl font-medium tracking-tight text-white sm:text-2xl"
                  >
                    <span className="text-white/40">Website + </span>
                    {combo}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="fade" delay={0.1}>
              <div className="mt-10">
                <Link
                  href={digitaleLoesungenWebsite.linkHref}
                  className="group inline-flex items-center gap-2 text-base font-medium text-white transition-motion hover:text-cta"
                >
                  {digitaleLoesungenWebsite.linkLabel}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10 Ablauf */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenProcess.eyebrow}
                title={digitaleLoesungenProcess.headline}
              />
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12">
              {digitaleLoesungenProcess.steps.map((step, index) => (
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

        {/* 11 Vorteile */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenBenefits.eyebrow}
                title={digitaleLoesungenBenefits.headline}
              />
            </Reveal>
            <div className="mt-14 space-y-0 sm:mt-16">
              {digitaleLoesungenBenefits.items.map((item, index) => (
                <Reveal key={item.title} variant="slide" delay={index * 0.04}>
                  <article className="grid gap-3 border-t border-border py-10 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-12">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl lg:col-span-4">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-muted lg:col-span-7 lg:col-start-6 sm:text-lg">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 12 Zielgruppe */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={digitaleLoesungenAudience.eyebrow}
                title={digitaleLoesungenAudience.headline}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10 sm:gap-y-5">
                {digitaleLoesungenAudience.items.map((item) => (
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
                {digitaleLoesungenAudience.note}
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
                title="Fragen rund um digitale Lösungen."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...digitaleLoesungenFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 14 Abschluss-CTA */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {digitaleLoesungenClosing.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {digitaleLoesungenClosing.headline}
              </h2>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {digitaleLoesungenClosing.lead}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.14}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={digitaleLoesungenClosing.primaryHref}
                  variant="primary"
                  size="lg"
                >
                  {digitaleLoesungenClosing.primaryCta}
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
              <div className="mt-6">
                <Link
                  href={digitaleLoesungenClosing.secondaryHref}
                  className="text-sm font-medium text-white/70 transition-motion hover:text-white"
                >
                  {digitaleLoesungenClosing.secondaryCta}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="mt-8 text-sm text-white/60">
                {digitaleLoesungenClosing.trust}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
