import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  corporateDesignApplications,
  corporateDesignBuildingBlocks,
  corporateDesignClosing,
  corporateDesignDeliverables,
  corporateDesignExplain,
  corporateDesignFaq,
  corporateDesignHero,
  corporateDesignLogo,
  corporateDesignProcess,
  corporateDesignWebsite,
  corporateDesignWhy,
  getEnabledApplications,
} from "@/data/corporate-design";
import { siteConfig } from "@/data/site";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

function EmailSignaturePreview({
  details,
}: {
  details: readonly string[];
}) {
  return (
    <div className="rounded-lg border border-border bg-bg-soft p-5 sm:p-6">
      <div className="flex gap-4 border-l-[3px] border-brand pl-4">
        <div
          className="flex size-12 shrink-0 items-center justify-center bg-brand font-display text-sm font-medium text-white"
          aria-hidden
        >
          319
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink">Ihr Name</p>
          <p className="text-xs text-ink-subtle">Position · Unternehmen</p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {details.map((detail) => (
              <li key={detail} className="text-xs text-ink-muted">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Kompakte Kontaktpunkt-Darstellung: auf einen Blick lesbar,
 * ohne große Typografie-Kaskade.
 */
function TouchpointCascade({
  points,
  closing,
}: {
  points: readonly string[];
  closing: string;
}) {
  return (
    <div className="mt-12 sm:mt-14">
      <Reveal variant="slide" delay={0.06}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-x-3">
          {points.map((point, index) => (
            <li key={point} className="flex items-center gap-2 sm:gap-3">
              <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                {point}
              </span>
              {index < points.length - 1 ? (
                <span
                  className="text-brand/40 select-none"
                  aria-hidden
                >
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal variant="fade" delay={0.12}>
        <p className="mt-8 max-w-xl border-t border-border pt-6 font-display text-lg font-medium tracking-tight text-brand sm:text-xl">
          {closing}
        </p>
      </Reveal>
    </div>
  );
}

export function CorporateDesignPage() {
  const applications = getEnabledApplications();

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
                <li className="text-white/80">Corporate Design</li>
              </ol>
            </nav>

            <div className="max-w-4xl text-center md:text-left">
              <Reveal variant="fade">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 sm:text-base">
                  {corporateDesignHero.eyebrow}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.05}>
                <h1 className="mt-5 text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {corporateDesignHero.headline}
                </h1>
              </Reveal>
              <Reveal variant="slide" delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl md:mx-0 lg:text-[1.375rem]">
                  {corporateDesignHero.lead}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.14}>
                <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
                  <Button
                    href={corporateDesignHero.primaryHref}
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {corporateDesignHero.primaryCta}
                  </Button>
                  <Button
                    href={corporateDesignHero.secondaryHref}
                    variant="secondary"
                    size="lg"
                    className="w-full border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white md:w-auto"
                  >
                    {corporateDesignHero.secondaryCta}
                  </Button>
                </div>
              </Reveal>
              <Reveal variant="fade" delay={0.18}>
                <ul className="mt-10 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:justify-start md:gap-x-6 md:gap-y-3">
                  {corporateDesignHero.trust.map((item) => (
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

        {/* 02 Warum einheitlicher Auftritt */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={corporateDesignWhy.eyebrow}
                title={corporateDesignWhy.headline}
                lead={corporateDesignWhy.lead}
              />
            </Reveal>

            <TouchpointCascade
              points={corporateDesignWhy.touchpoints}
              closing={corporateDesignWhy.closing}
            />
          </div>
        </section>

        {/* 03 Was ist Corporate Design */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={corporateDesignExplain.eyebrow}
                title={corporateDesignExplain.headline}
                lead={corporateDesignExplain.lead}
              />
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <p className="mt-10 max-w-3xl border-l-2 border-brand pl-5 text-lg font-medium leading-relaxed text-ink sm:pl-6 sm:text-xl">
                {corporateDesignExplain.statement}
              </p>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-border pt-14 sm:mt-16 sm:pt-16 lg:grid-cols-2 lg:gap-16">
              {corporateDesignExplain.distinction.map((item, index) => (
                <Reveal key={item.title} variant="slide" delay={0.04 + index * 0.04}>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                      {item.title}
                    </p>
                    <p className="mt-3 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={0.12}>
              <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-subtle sm:text-base">
                {corporateDesignExplain.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 Bausteine */}
        <section id="bausteine" className="scroll-mt-24 bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={corporateDesignBuildingBlocks.eyebrow}
                title={corporateDesignBuildingBlocks.headline}
              />
            </Reveal>

            <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <Reveal variant="slide" delay={0.04}>
                  <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
                    {corporateDesignBuildingBlocks.compositionTitle}
                  </p>
                </Reveal>
              </div>

              <div className="space-y-0 lg:col-span-7 lg:col-start-6">
                {corporateDesignBuildingBlocks.items.map((item, index) => (
                  <Reveal
                    key={item.title}
                    variant="slide"
                    delay={Math.min(index * 0.03, 0.2)}
                  >
                    <article className="border-t border-border py-8 last:border-b sm:py-10">
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                        {item.text}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal variant="fade" delay={0.08}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {corporateDesignBuildingBlocks.note}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <div className="mt-8">
                <Button href="/kontakt" variant="primary" size="lg">
                  Individuelles Angebot einfordern
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 Website & Corporate Design */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <header className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      {corporateDesignWebsite.eyebrow}
                    </p>
                    <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {corporateDesignWebsite.headline}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-white/75 sm:text-xl">
                      {corporateDesignWebsite.lead}
                    </p>
                  </header>
                </Reveal>
                <Reveal variant="slide" delay={0.08}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    {corporateDesignWebsite.benefit}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={0.1}>
                  <div className="mt-8">
                    <Link
                      href={corporateDesignWebsite.linkHref}
                      className="group inline-flex items-center gap-2 text-base font-medium text-white transition-motion hover:text-cta"
                    >
                      {corporateDesignWebsite.linkLabel}
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
                  <ol className="rounded-lg border border-white/15 bg-white/5 p-5 sm:p-6">
                    {corporateDesignWebsite.flow.map((step, index) => (
                      <li key={step}>
                        <div className="flex items-start gap-4">
                          <div className="flex w-8 shrink-0 flex-col items-center">
                            <span className="flex size-8 items-center justify-center rounded-full border border-white/25 text-xs font-medium text-white">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {index < corporateDesignWebsite.flow.length - 1 ? (
                              <span
                                className="mt-1 h-8 w-px bg-white/20"
                                aria-hidden
                              />
                            ) : null}
                          </div>
                          <p className="pt-1.5 font-display text-lg font-medium tracking-tight text-white">
                            {step}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 07 Logo weiterentwickeln */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={corporateDesignLogo.eyebrow}
                title={corporateDesignLogo.headline}
                lead={corporateDesignLogo.lead}
              />
            </Reveal>

            <div className="mt-14 grid gap-0 border-t border-border sm:mt-16 lg:grid-cols-3">
              {corporateDesignLogo.options.map((option, index) => {
                const isFirst = index === 0;
                const isLast =
                  index === corporateDesignLogo.options.length - 1;

                return (
                  <Reveal
                    key={option.title}
                    variant="slide"
                    delay={index * 0.05}
                  >
                    <div
                      className={
                        !isLast
                          ? `border-b border-border py-8 lg:border-b-0 lg:border-r lg:py-10 ${isFirst ? "lg:pr-10" : "lg:px-10"}`
                          : `border-b border-border py-8 last:border-b-0 lg:border-b-0 lg:py-10 lg:pl-10`
                      }
                    >
                      <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                        {option.title}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                        {option.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 08 Digitale Geschäftsausstattung */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={corporateDesignApplications.eyebrow}
                title={corporateDesignApplications.headline}
                lead={corporateDesignApplications.lead}
              />
            </Reveal>

            <div className="mt-14 space-y-0 sm:mt-16">
              {applications.map((item, index) => (
                <Reveal
                  key={item.id}
                  variant="slide"
                  delay={Math.min(index * 0.04, 0.2)}
                >
                  <article className="grid gap-6 border-t border-border py-10 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-12">
                    <div className="lg:col-span-4">
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-6">
                      <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                        {item.text}
                      </p>
                      {"details" in item && item.details ? (
                        <div className="mt-6">
                          <EmailSignaturePreview details={item.details} />
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 09 Ablauf */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <header className="max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                  {corporateDesignProcess.eyebrow}
                </p>
                <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {corporateDesignProcess.headline}
                </h2>
              </header>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12">
              {corporateDesignProcess.steps.map((step, index) => (
                <Reveal key={step.title} variant="slide" delay={index * 0.04}>
                  <div>
                    <p className="font-display text-sm tabular-nums text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-white sm:text-[1.375rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-white/70 sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10 Lieferumfang */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={corporateDesignDeliverables.eyebrow}
                title={corporateDesignDeliverables.headline}
                lead={corporateDesignDeliverables.lead}
              />
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 grid gap-x-10 gap-y-4 sm:mt-14 sm:grid-cols-2">
                {corporateDesignDeliverables.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-ink sm:text-lg"
                  >
                    <Check
                      className="mt-1 size-4 shrink-0 text-brand"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {corporateDesignDeliverables.note}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 11 FAQ */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Häufige Fragen"
                title="Fragen rund um Corporate Design."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...corporateDesignFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 13 Abschluss-CTA */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {corporateDesignClosing.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {corporateDesignClosing.headline}
              </h2>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {corporateDesignClosing.lead}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.14}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={corporateDesignClosing.primaryHref}
                  variant="primary"
                  size="lg"
                >
                  {corporateDesignClosing.primaryCta}
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
                  href={corporateDesignClosing.secondaryHref}
                  className="text-sm font-medium text-white/70 transition-motion hover:text-white"
                >
                  {corporateDesignClosing.secondaryCta}
                </Link>
              </div>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="mt-8 text-sm text-white/60">
                {corporateDesignClosing.trust}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
