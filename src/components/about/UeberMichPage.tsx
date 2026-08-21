import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  ProjectCard,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  getUeberMichProjects,
  ueberMichAudience,
  ueberMichClosing,
  ueberMichCollaboration,
  ueberMichFaq,
  ueberMichHero,
  ueberMichIntro,
  ueberMichPersonalAdvantage,
  ueberMichPersonalNote,
  ueberMichPrinciples,
  ueberMichProjectsSection,
  ueberMichQuality,
  ueberMichWhy,
} from "@/data/ueber-mich";
import { siteConfig } from "@/data/site";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function UeberMichPage() {
  const projects = getUeberMichProjects();

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
                <li className="text-white/80">Über mich</li>
              </ol>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
                <Reveal variant="fade">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 sm:text-base">
                    {ueberMichHero.eyebrow}
                  </p>
                </Reveal>
                <Reveal variant="slide" delay={0.05}>
                  <h1 className="mt-5 text-balance font-display text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                    {ueberMichHero.headline}
                  </h1>
                </Reveal>
                <Reveal variant="slide" delay={0.1}>
                  <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl lg:mx-0 lg:text-[1.375rem]">
                    {ueberMichHero.lead}
                  </p>
                </Reveal>
                <Reveal variant="slide" delay={0.14}>
                  <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
                    <Button
                      href={ueberMichHero.primaryHref}
                      variant="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {ueberMichHero.primaryCta}
                    </Button>
                    <Button
                      href={ueberMichHero.secondaryHref}
                      variant="secondary"
                      size="lg"
                      className="w-full border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white md:w-auto"
                    >
                      {ueberMichHero.secondaryCta}
                    </Button>
                  </div>
                </Reveal>
              </div>

              <Reveal
                variant="scale"
                delay={0.08}
                className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={ueberMichHero.image.src}
                    alt={ueberMichHero.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 Persönliche Vorstellung */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal variant="slide">
                  <SectionHeader
                    eyebrow={ueberMichIntro.eyebrow}
                    title={ueberMichIntro.headline}
                  />
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {ueberMichIntro.paragraphs.map((paragraph, index) => (
                    <Reveal
                      key={paragraph.slice(0, 24)}
                      variant="slide"
                      delay={0.05 + index * 0.04}
                    >
                      <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">
                        {paragraph}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Warum 319Webdesign */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={ueberMichWhy.eyebrow}
                title={ueberMichWhy.headline}
                lead={ueberMichWhy.lead}
              />
            </Reveal>

            <Reveal variant="fade" delay={0.06}>
              <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
                319Webdesign steht für direkten Kontakt, persönliche Betreuung,
                klare Kommunikation, individuelle Lösungen und technische
                Umsetzung aus einer Hand.
              </p>
            </Reveal>

            <div className="mt-14 sm:mt-16">
              {ueberMichWhy.statements.map((item, index) => (
                <Reveal
                  key={item.reject}
                  variant="slide"
                  delay={index * 0.05}
                >
                  <div className="grid gap-3 border-t border-border py-8 last:border-b sm:grid-cols-12 sm:gap-8 sm:py-10">
                    <p className="font-display text-xl font-medium tracking-tight text-ink-subtle sm:col-span-6 sm:text-2xl lg:text-3xl">
                      {item.reject}
                    </p>
                    <p className="font-display text-xl font-medium tracking-tight text-ink sm:col-span-6 sm:text-2xl lg:text-3xl">
                      {item.affirm}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 Was mir bei Projekten wichtig ist */}
        <section className="bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <header className="max-w-3xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                  {ueberMichPrinciples.eyebrow}
                </p>
                <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {ueberMichPrinciples.headline}
                </h2>
              </header>
            </Reveal>

            <div className="mt-14 sm:mt-16">
              {ueberMichPrinciples.items.map((item, index) => (
                <Reveal
                  key={item.number}
                  variant="slide"
                  delay={index * 0.04}
                >
                  <div className="grid gap-4 border-t border-white/15 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
                    <p className="font-display text-sm tabular-nums text-white/40 sm:col-span-2">
                      {item.number}
                    </p>
                    <h3 className="font-display text-xl font-medium tracking-tight text-white sm:col-span-4 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/70 sm:col-span-6 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-white/15" aria-hidden />
            </div>
          </div>
        </section>

        {/* 05 So sieht die Zusammenarbeit aus */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <SectionHeader
                    eyebrow={ueberMichCollaboration.eyebrow}
                    title={ueberMichCollaboration.headline}
                    lead={ueberMichCollaboration.lead}
                  />
                </Reveal>
                <Reveal variant="fade" delay={0.1}>
                  <p className="mt-10 max-w-md font-display text-xl font-medium tracking-tight text-brand sm:text-2xl">
                    {ueberMichCollaboration.closing}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={0.12}>
                  <p className="mt-8 text-base text-ink-muted">
                    Passend dazu:{" "}
                    <Link
                      href="/webdesign"
                      className="font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      Webdesign
                    </Link>
                    {" · "}
                    <Link
                      href="/betreuung"
                      className="font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      Betreuung
                    </Link>
                    {" · "}
                    <Link
                      href="/kontakt"
                      className="font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      Kontakt
                    </Link>
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal variant="slide" delay={0.06}>
                  <ol>
                    {ueberMichCollaboration.steps.map((step, index) => (
                      <li key={step}>
                        <div className="flex items-start gap-4">
                          <div className="flex w-10 shrink-0 flex-col items-center">
                            <span className="flex size-10 items-center justify-center rounded-full border border-border bg-bg font-display text-sm font-medium tabular-nums text-brand">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {index < ueberMichCollaboration.steps.length - 1 ? (
                              <span
                                className="mt-1 h-8 w-px bg-border"
                                aria-hidden
                              />
                            ) : null}
                          </div>
                          <p className="pt-2 font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
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

        {/* 06 Warum persönliche Betreuung ein Vorteil ist */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={ueberMichPersonalAdvantage.eyebrow}
                title={ueberMichPersonalAdvantage.headline}
                lead={ueberMichPersonalAdvantage.lead}
              />
            </Reveal>

            <ul className="mt-14 sm:mt-16">
              {ueberMichPersonalAdvantage.benefits.map((benefit, index) => (
                <Reveal
                  key={benefit}
                  variant="slide"
                  delay={index * 0.04}
                >
                  <li className="border-t border-border py-5 font-display text-xl font-medium tracking-tight text-ink last:border-b last:pb-5 sm:py-6 sm:text-2xl sm:last:pb-6">
                    {benefit}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* 07 Erfahrung & echte Projekte */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={ueberMichProjectsSection.eyebrow}
                title={ueberMichProjectsSection.headline}
                lead={ueberMichProjectsSection.lead}
              />
            </Reveal>

            <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-24">
              {projects.map((project, index) => (
                <Reveal
                  key={project.href}
                  variant="slide"
                  delay={index * 0.05}
                >
                  <ProjectCard
                    title={project.title}
                    industry={project.industry}
                    service={project.service}
                    result={project.result}
                    href={project.href}
                    image={project.image.src}
                    imageWidth={project.image.width}
                    imageHeight={project.image.height}
                    reverse={index % 2 === 1}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={0.08}>
              <div className="mt-16 flex justify-center sm:mt-20">
                <Button
                  href={ueberMichProjectsSection.ctaHref}
                  variant="secondary"
                  size="lg"
                >
                  {ueberMichProjectsSection.ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 08 Für wen 319Webdesign gut passt */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={ueberMichAudience.eyebrow}
                title={ueberMichAudience.headline}
              />
            </Reveal>

            <ul className="mt-14 sm:mt-16">
              {ueberMichAudience.conditions.map((condition, index) => (
                <Reveal
                  key={condition}
                  variant="slide"
                  delay={index * 0.03}
                >
                  <li className="border-t border-border py-5 font-display text-lg font-medium tracking-tight text-ink last:border-b last:pb-5 sm:py-6 sm:text-2xl sm:last:pb-6 lg:text-[1.75rem]">
                    {condition}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal variant="slide" delay={0.1}>
              <p className="mt-14 text-base font-medium text-ink sm:mt-16 sm:text-lg">
                {ueberMichAudience.focusLabel}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-10">
                {ueberMichAudience.focus.map((item) => (
                  <li
                    key={item}
                    className="font-display text-xl font-medium tracking-tight text-brand sm:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 09 Arbeitsweise / Qualitätsanspruch */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={ueberMichQuality.eyebrow}
                title={ueberMichQuality.headline}
                lead={ueberMichQuality.lead}
              />
            </Reveal>

            <div className="mt-14 sm:mt-16">
              {ueberMichQuality.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  variant="slide"
                  delay={index * 0.03}
                >
                  <div className="grid gap-3 border-t border-border py-7 sm:grid-cols-12 sm:gap-8 sm:py-8">
                    <h3 className="font-display text-lg font-medium tracking-tight text-ink sm:col-span-4 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-muted sm:col-span-8 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-border" aria-hidden />
            </div>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-10 text-base text-ink-muted">
                Mehr dazu unter{" "}
                {ueberMichQuality.relatedLinks.map((link, index) => (
                  <span key={link.href}>
                    {index > 0
                      ? index === ueberMichQuality.relatedLinks.length - 1
                        ? " und "
                        : ", "
                      : null}
                    <Link
                      href={link.href}
                      className="font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* 10 Persönliche Note */}
        <section className="border-b border-border bg-brand">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal variant="slide">
                  <header className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      {ueberMichPersonalNote.eyebrow}
                    </p>
                    <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {ueberMichPersonalNote.headline}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
                      {ueberMichPersonalNote.text}
                    </p>
                  </header>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal variant="slide" delay={0.08}>
                  <p className="mb-6 text-sm font-medium uppercase tracking-[0.12em] text-white/55">
                    {ueberMichPersonalNote.valuesLabel}
                  </p>
                  <ul>
                    {ueberMichPersonalNote.values.map((value) => (
                      <li
                        key={value}
                        className="border-t border-white/15 py-4 font-display text-xl font-medium tracking-tight text-white last:border-b sm:text-2xl"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 11 FAQ */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Häufige Fragen"
                title="Fragen zur Zusammenarbeit."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...ueberMichFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 12 Abschluss-CTA */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {ueberMichClosing.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {ueberMichClosing.headline}
              </h2>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {ueberMichClosing.lead}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.14}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={ueberMichClosing.primaryHref}
                  variant="primary"
                  size="lg"
                >
                  {ueberMichClosing.primaryCta}
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
                  href={ueberMichClosing.secondaryHref}
                  className="group inline-flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition-motion hover:text-white"
                >
                  {ueberMichClosing.secondaryCta}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="mt-8 text-sm text-white/60">
                {ueberMichClosing.trust}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
