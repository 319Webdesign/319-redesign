import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  betreuungAfterLaunch,
  betreuungAudience,
  betreuungBackups,
  betreuungClosing,
  betreuungExisting,
  betreuungExtra,
  betreuungFaq,
  betreuungGrowth,
  betreuungHero,
  betreuungHours,
  betreuungPackage,
  betreuungScope,
  betreuungSupport,
  betreuungUpdates,
  betreuungWebdesign,
} from "@/data/betreuung";
import { siteConfig } from "@/data/site";
import { ArrowRight, Check, Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BrandVerticalFlow({ steps }: { steps: readonly string[] }) {
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

export function BetreuungPage() {
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
                <li className="text-white/80">Betreuung</li>
              </ol>
            </nav>

            <div className="max-w-4xl text-center md:text-left">
              <Reveal variant="fade">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 sm:text-base">
                  {betreuungHero.eyebrow}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.05}>
                <h1 className="mt-5 text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {betreuungHero.headline}
                </h1>
              </Reveal>
              <Reveal variant="slide" delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl md:mx-0 lg:text-[1.375rem]">
                  {betreuungHero.lead}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.14}>
                <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
                  <Button
                    href={betreuungHero.primaryHref}
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {betreuungHero.primaryCta}
                  </Button>
                  <Button
                    href={betreuungHero.secondaryHref}
                    variant="secondary"
                    size="lg"
                    className="w-full border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white md:w-auto"
                  >
                    {betreuungHero.secondaryCta}
                  </Button>
                </div>
              </Reveal>
              <Reveal variant="fade" delay={0.18}>
                <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3 md:mx-0">
                  {betreuungHero.trust.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-2.5 text-base text-white/70 md:justify-start"
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

        {/* 02 Nach dem Livegang */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungAfterLaunch.eyebrow}
                title={betreuungAfterLaunch.headline}
                lead={betreuungAfterLaunch.lead}
              />
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <ol className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-3 sm:mt-16 sm:gap-x-3">
                {betreuungAfterLaunch.steps.map((step, index) => (
                  <li key={step} className="flex items-center gap-2 sm:gap-3">
                    <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                      {step}
                    </span>
                    {index < betreuungAfterLaunch.steps.length - 1 ? (
                      <span className="text-brand/40 select-none" aria-hidden>
                        ·
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl font-display text-xl font-medium tracking-tight text-brand sm:text-2xl">
                {betreuungAfterLaunch.closing}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 Was übernimmt 319Webdesign */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungScope.eyebrow}
                title={betreuungScope.headline}
              />
            </Reveal>
            <div className="mt-14 space-y-0 sm:mt-16">
              {betreuungScope.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  variant="slide"
                  delay={Math.min(index * 0.03, 0.2)}
                >
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

        {/* 04 Wartungspaket */}
        <section id="wartungspaket" className="scroll-mt-24 bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <header className="max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                  {betreuungPackage.eyebrow}
                </p>
                <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {betreuungPackage.headline}
                </h2>
              </header>
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <div className="mt-14 grid gap-10 border-t border-white/15 pt-12 sm:mt-16 sm:pt-14 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="font-display text-6xl font-medium tracking-tight text-white sm:text-7xl">
                    {betreuungPackage.price}
                  </p>
                  <p className="mt-2 text-lg text-white/70">
                    {betreuungPackage.priceSuffix}
                  </p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/55">
                    Enthalten
                  </p>
                  <ul className="mt-5 space-y-4">
                    {betreuungPackage.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-lg text-white sm:text-xl"
                      >
                        <Check
                          className="mt-1 size-4 shrink-0 text-cta"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {betreuungPackage.note}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.12}>
              <div className="mt-8">
                <Button
                  href={betreuungPackage.ctaHref}
                  variant="primary"
                  size="lg"
                >
                  {betreuungPackage.ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 Zwei Arbeitsstunden */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungHours.eyebrow}
                title={betreuungHours.headline}
                lead={betreuungHours.lead}
              />
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <ol className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-3 sm:mt-16 sm:gap-x-3">
                {betreuungHours.examples.map((item, index) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3">
                    <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                      {item}
                    </span>
                    {index < betreuungHours.examples.length - 1 ? (
                      <span className="text-brand/40 select-none" aria-hidden>
                        ·
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {betreuungHours.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 06 Updates */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="ml-auto w-full max-w-xl lg:max-w-2xl">
              <Reveal variant="slide">
                <SectionHeader
                  eyebrow={betreuungUpdates.eyebrow}
                  title={betreuungUpdates.headline}
                  lead={betreuungUpdates.lead}
                />
              </Reveal>
              <Reveal variant="slide" delay={0.06}>
                <p className="mt-8 text-base leading-relaxed text-ink-muted sm:text-lg">
                  {betreuungUpdates.wordpressNote}
                </p>
              </Reveal>
              <Reveal variant="fade" delay={0.1}>
                <p className="mt-8 border-l-2 border-brand pl-5 text-lg font-medium leading-relaxed text-ink sm:pl-6 sm:text-xl">
                  {betreuungUpdates.closing}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 07 Backups */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungBackups.eyebrow}
                title={betreuungBackups.headline}
                lead={betreuungBackups.lead}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <ol className="mt-14 max-w-md space-y-0 sm:mt-16">
                {betreuungBackups.flow.map((step, index) => (
                  <li key={step}>
                    <div className="flex flex-col items-start">
                      <span className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                        {step}
                      </span>
                      {index < betreuungBackups.flow.length - 1 ? (
                        <span className="my-3 text-ink-subtle" aria-hidden>
                          ↓
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* 08 Änderungen & Weiterentwicklung */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungGrowth.eyebrow}
                title={betreuungGrowth.headline}
                lead={betreuungGrowth.lead}
              />
            </Reveal>
            <div className="mt-14 space-y-0 sm:mt-16">
              {betreuungGrowth.examples.map((example, index) => (
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
                {betreuungGrowth.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 09 Persönlicher Support */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal variant="scale">
                  <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-lg">
                    <Image
                      src={betreuungSupport.image.src}
                      alt={betreuungSupport.image.alt}
                      fill
                      sizes="(max-width: 1024px) 80vw, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal variant="slide">
                  <header>
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      {betreuungSupport.eyebrow}
                    </p>
                    <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {betreuungSupport.headline}
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                      {betreuungSupport.lead}
                    </p>
                  </header>
                </Reveal>
                <Reveal variant="slide" delay={0.08}>
                  <div className="mt-10 border-t border-white/15 pt-8">
                    <p className="font-display text-2xl font-medium tracking-tight text-white">
                      {betreuungSupport.name}
                    </p>
                    <p className="mt-1 text-white/70">
                      {betreuungSupport.company}
                    </p>
                    <p className="mt-3 text-base text-white/65">
                      {betreuungSupport.role}
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
                      <a
                        href={siteConfig.phoneHref}
                        className="inline-flex items-center gap-2 text-base font-medium text-white/80 transition-motion hover:text-white"
                      >
                        <Phone className="size-4" aria-hidden />
                        {siteConfig.phone}
                      </a>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center gap-2 text-base font-medium text-white/80 transition-motion hover:text-white"
                      >
                        <Mail className="size-4" aria-hidden />
                        E-Mail
                      </a>
                      <a
                        href={siteConfig.whatsappHref}
                        className="inline-flex items-center gap-2 text-base font-medium text-white/80 transition-motion hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="size-4" aria-hidden />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Bestehende Websites */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungExisting.eyebrow}
                title={betreuungExisting.headline}
                lead={betreuungExisting.lead}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <p className="mt-10 text-base font-medium text-ink sm:text-lg">
                Vor einer Übernahme wird geprüft:
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {betreuungExisting.checks.map((item) => (
                  <li
                    key={item}
                    className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {betreuungExisting.note}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.12}>
              <div className="mt-8">
                <Button
                  href={betreuungExisting.ctaHref}
                  variant="primary"
                  size="lg"
                >
                  {betreuungExisting.ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 11 Mehraufwand */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungExtra.eyebrow}
                title={betreuungExtra.headline}
                lead={betreuungExtra.lead}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 space-y-4 sm:mt-14">
                {betreuungExtra.examples.map((item) => (
                  <li
                    key={item}
                    className="border-t border-border pt-4 font-display text-xl font-medium tracking-tight text-ink last:border-b last:pb-4 sm:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {betreuungExtra.note}
              </p>
            </Reveal>
            <Reveal variant="fade" delay={0.12}>
              <p className="mt-8 font-display text-2xl font-medium tracking-tight text-brand sm:text-3xl">
                {betreuungExtra.closing}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 12 Webdesign + Betreuung */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <header className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      {betreuungWebdesign.eyebrow}
                    </p>
                    <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {betreuungWebdesign.headline}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
                      {betreuungWebdesign.lead}
                    </p>
                  </header>
                </Reveal>
                <Reveal variant="fade" delay={0.1}>
                  <div className="mt-8">
                    <Link
                      href={betreuungWebdesign.linkHref}
                      className="group inline-flex items-center gap-2 text-base font-medium text-white transition-motion hover:text-cta"
                    >
                      {betreuungWebdesign.linkLabel}
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
                  <BrandVerticalFlow steps={betreuungWebdesign.flow} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 13 Zielgruppe */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={betreuungAudience.eyebrow}
                title={betreuungAudience.headline}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10 sm:gap-y-5">
                {betreuungAudience.items.map((item) => (
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
                {betreuungAudience.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 14 FAQ */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Häufige Fragen"
                title="Fragen zu Wartung & Betreuung."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...betreuungFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 15 Abschluss-CTA */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {betreuungClosing.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {betreuungClosing.headline}
              </h2>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {betreuungClosing.lead}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.14}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={betreuungClosing.primaryHref}
                  variant="primary"
                  size="lg"
                >
                  {betreuungClosing.primaryCta}
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
                  href={betreuungClosing.secondaryHref}
                  className="text-sm font-medium text-white/70 transition-motion hover:text-white"
                >
                  {betreuungClosing.secondaryCta}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="mt-8 text-sm text-white/60">
                {betreuungClosing.trust}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
