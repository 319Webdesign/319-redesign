import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  ProjectCard,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  getWebdesignProjects,
  webdesignAudience,
  webdesignCare,
  webdesignClosing,
  webdesignCorporateDesign,
  webdesignFaq,
  webdesignHero,
  webdesignIncludes,
  webdesignIndividual,
  webdesignOffer,
  webdesignProcess,
  webdesignProjectsSection,
  webdesignResponsive,
  webdesignSeo,
  webdesignVisualProject,
  webdesignWhy,
} from "@/data/webdesign";
import { cn } from "@/lib/cn";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";

function BrowserFrame({
  children,
  url = "he-immologis.de",
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border-strong bg-bg shadow-[0_20px_50px_rgba(15,23,42,0.12),0_8px_20px_rgba(15,23,42,0.08)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-soft px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-border-strong" aria-hidden />
        <span className="size-2.5 rounded-full bg-border-strong" aria-hidden />
        <span className="size-2.5 rounded-full bg-border-strong" aria-hidden />
        <span className="ml-3 flex-1 truncate rounded-sm bg-bg px-2 py-1 text-[10px] text-ink-subtle">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.25rem] border-[3px] border-ink/80 bg-ink shadow-[0_16px_40px_rgba(15,23,42,0.2)]",
        className,
      )}
    >
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/20" aria-hidden />
      <div className="overflow-hidden bg-bg">{children}</div>
    </div>
  );
}

function TabletFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border-[3px] border-ink/70 bg-ink shadow-[0_16px_40px_rgba(15,23,42,0.16)]",
        className,
      )}
    >
      <div className="overflow-hidden bg-bg">{children}</div>
    </div>
  );
}

export function WebdesignPage() {
  const projects = getWebdesignProjects();

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
                  <Link
                    href="/"
                    className="transition-motion hover:text-white"
                  >
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
                <li className="text-white/80">Webdesign</li>
              </ol>
            </nav>

            <div className="max-w-4xl text-center md:text-left">
              <Reveal variant="fade">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 sm:text-base">
                  {webdesignHero.eyebrow}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.05}>
                <h1 className="mt-5 text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {webdesignHero.headline}
                </h1>
              </Reveal>
              <Reveal variant="slide" delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl md:mx-0 lg:text-[1.375rem]">
                  {webdesignHero.lead}
                </p>
              </Reveal>
              <Reveal variant="slide" delay={0.14}>
                <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
                  <Button
                    href={webdesignHero.primaryHref}
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {webdesignHero.primaryCta}
                  </Button>
                  <Button
                    href={webdesignHero.secondaryHref}
                    variant="secondary"
                    size="lg"
                    className="w-full border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white md:w-auto"
                  >
                    {webdesignHero.secondaryCta}
                  </Button>
                </div>
              </Reveal>
              <Reveal variant="fade" delay={0.18}>
                <ul className="mt-10 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:justify-start md:gap-x-6 md:gap-y-3">
                  {webdesignHero.trust.map((item) => (
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

        {/* 02 Warum */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignWhy.eyebrow}
                title={webdesignWhy.headline}
                lead={webdesignWhy.lead}
              />
            </Reveal>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {webdesignWhy.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  variant="slide"
                  delay={index * 0.05}
                >
                  <div className="grid gap-4 py-10 sm:grid-cols-12 sm:gap-8 sm:py-12">
                    <p className="font-display text-sm tabular-nums text-brand/45 sm:col-span-2">
                      {item.number}
                    </p>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:col-span-4 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-muted sm:col-span-6 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 03 Was Sie bekommen */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignOffer.eyebrow}
                title={webdesignOffer.headline}
                lead={webdesignOffer.lead}
              />
            </Reveal>

            <Reveal variant="scale" delay={0.08}>
              <div className="mt-14 lg:mt-16">
                {/* Desktop: Aspekte flankieren das Mockup */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                  <ul className="space-y-5 lg:col-span-3">
                    {webdesignOffer.aspects.slice(0, 4).map((aspect) => (
                      <li
                        key={aspect}
                        className="border-b border-border pb-4 font-display text-lg font-medium tracking-tight text-ink"
                      >
                        {aspect}
                      </li>
                    ))}
                  </ul>
                  <div className="lg:col-span-6">
                    <BrowserFrame url="ihre-website.de">
                      <Image
                        src={webdesignVisualProject.image.src}
                        alt="Beispiel einer individuell entwickelten Unternehmenswebsite"
                        width={webdesignVisualProject.image.width}
                        height={webdesignVisualProject.image.height}
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="h-auto w-full"
                      />
                    </BrowserFrame>
                  </div>
                  <ul className="space-y-5 text-right lg:col-span-3">
                    {webdesignOffer.aspects.slice(4).map((aspect) => (
                      <li
                        key={aspect}
                        className="border-b border-border pb-4 font-display text-lg font-medium tracking-tight text-ink"
                      >
                        {aspect}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile / Tablet */}
                <div className="lg:hidden">
                  <BrowserFrame url="ihre-website.de">
                    <Image
                      src={webdesignVisualProject.image.src}
                      alt="Beispiel einer individuell entwickelten Unternehmenswebsite"
                      width={webdesignVisualProject.image.width}
                      height={webdesignVisualProject.image.height}
                      sizes="100vw"
                      className="h-auto w-full"
                    />
                  </BrowserFrame>
                  <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
                    {webdesignOffer.aspects.map((aspect) => (
                      <li
                        key={aspect}
                        className="border-b border-border pb-3 text-sm font-medium text-ink"
                      >
                        {aspect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 Was gehört dazu */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignIncludes.eyebrow}
                title={webdesignIncludes.headline}
                lead={webdesignIncludes.lead}
              />
            </Reveal>
            <div className="mt-14 space-y-0">
              {webdesignIncludes.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  variant="slide"
                  delay={index * 0.03}
                >
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
            <Reveal variant="fade" delay={0.08}>
              <div className="mt-14 flex justify-center sm:mt-16">
                <Button href="/kontakt" variant="primary" size="md">
                  Individuelles Angebot anfordern
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 05 Projekte */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignProjectsSection.eyebrow}
                title={webdesignProjectsSection.headline}
                lead={webdesignProjectsSection.lead}
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
                  href={webdesignProjectsSection.ctaHref}
                  variant="secondary"
                  size="lg"
                >
                  {webdesignProjectsSection.ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 Responsive */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignResponsive.eyebrow}
                title={webdesignResponsive.headline}
                lead={webdesignResponsive.lead}
              />
            </Reveal>

            <Reveal variant="scale" delay={0.08}>
              <div className="mt-14 flex flex-col items-center gap-8 sm:mt-16 lg:flex-row lg:items-end lg:justify-center lg:gap-6">
                <div className="order-3 w-full max-w-xl lg:order-1 lg:max-w-none lg:flex-1">
                  <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle lg:text-left">
                    Desktop
                  </p>
                  <BrowserFrame>
                    <Image
                      src={webdesignVisualProject.image.src}
                      alt="Desktop-Darstellung einer responsiven Unternehmenswebsite"
                      width={webdesignVisualProject.image.width}
                      height={webdesignVisualProject.image.height}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="h-auto w-full"
                    />
                  </BrowserFrame>
                </div>

                <div className="order-2 w-[55%] max-w-[14rem] lg:w-[22%] lg:max-w-none">
                  <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                    Tablet
                  </p>
                  <TabletFrame>
                    <Image
                      src={webdesignVisualProject.tabletImage.src}
                      alt={webdesignVisualProject.tabletImage.alt}
                      width={webdesignVisualProject.tabletImage.width}
                      height={webdesignVisualProject.tabletImage.height}
                      sizes="(max-width: 1024px) 55vw, 18vw"
                      className="h-auto w-full"
                    />
                  </TabletFrame>
                </div>

                <div className="order-1 w-[38%] max-w-[9rem] lg:order-3 lg:w-[14%] lg:max-w-none">
                  <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                    Smartphone
                  </p>
                  <PhoneFrame>
                    <Image
                      src={webdesignVisualProject.mobileImage.src}
                      alt={webdesignVisualProject.mobileImage.alt}
                      width={webdesignVisualProject.mobileImage.width}
                      height={webdesignVisualProject.mobileImage.height}
                      sizes="(max-width: 1024px) 38vw, 12vw"
                      className="h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 SEO & Performance */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <SectionHeader
                    eyebrow={webdesignSeo.eyebrow}
                    title={webdesignSeo.headline}
                    lead={webdesignSeo.lead}
                  />
                </Reveal>
                <Reveal variant="slide" delay={0.08}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                    {webdesignSeo.note}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={0.12}>
                  <div className="mt-8">
                    <Link
                      href={webdesignSeo.linkHref}
                      className="group inline-flex items-center gap-2 text-base font-medium text-brand transition-motion hover:text-brand-dark"
                    >
                      {webdesignSeo.linkLabel}
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
                  <ul className="divide-y divide-border border-y border-border">
                    {webdesignSeo.points.map((point) => (
                      <li
                        key={point}
                        className="py-4 font-display text-lg font-medium tracking-tight text-ink sm:text-xl"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 07b Corporate Design */}
        <section className="bg-bg-soft">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignCorporateDesign.eyebrow}
                title={webdesignCorporateDesign.headline}
                lead={webdesignCorporateDesign.lead}
              />
            </Reveal>
            <Reveal variant="fade" delay={0.08}>
              <div className="mt-8">
                <Link
                  href={webdesignCorporateDesign.linkHref}
                  className="group inline-flex items-center gap-2 text-base font-medium text-brand transition-motion hover:text-brand-dark"
                >
                  {webdesignCorporateDesign.linkLabel}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 08 Individuell statt Baukasten */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignIndividual.eyebrow}
                title={webdesignIndividual.headline}
                lead={webdesignIndividual.lead}
              />
            </Reveal>

            <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-16">
              <Reveal variant="slide" delay={0.04}>
                <div>
                  <h3 className="font-display text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                    {webdesignIndividual.standard.title}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {webdesignIndividual.standard.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-border pb-4 text-base text-ink-muted last:border-0 sm:text-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal variant="slide" delay={0.08}>
                <div>
                  <h3 className="font-display text-sm font-medium uppercase tracking-[0.12em] text-brand">
                    {webdesignIndividual.custom.title}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {webdesignIndividual.custom.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-border pb-4 text-base font-medium text-ink last:border-0 sm:text-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 09 Projektablauf */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignProcess.eyebrow}
                title={webdesignProcess.headline}
                lead={webdesignProcess.lead}
              />
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
              {webdesignProcess.steps.map((step, index) => (
                <Reveal
                  key={step.title}
                  variant="slide"
                  delay={index * 0.04}
                >
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
            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {webdesignProcess.durationNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 10 Betreuung */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <SectionHeader
                    eyebrow={webdesignCare.eyebrow}
                    title={webdesignCare.headline}
                    lead={webdesignCare.lead}
                  />
                </Reveal>
                <Reveal variant="fade" delay={0.08}>
                  <p className="mt-6 text-base text-ink-muted sm:text-lg">
                    {webdesignCare.optionalNote}
                  </p>
                </Reveal>
                <Reveal variant="fade" delay={0.1}>
                  <div className="mt-8">
                    <Link
                      href={webdesignCare.linkHref}
                      className="group inline-flex items-center gap-2 text-base font-medium text-brand transition-motion hover:text-brand-dark"
                    >
                      {webdesignCare.linkLabel}
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
                  <div className="border-t border-border pt-8">
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                      {webdesignCare.priceLabel}
                    </p>
                    <p className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                      {webdesignCare.price}
                      <span className="ml-2 text-lg font-normal text-ink-muted sm:text-xl">
                        {webdesignCare.priceSuffix}
                      </span>
                    </p>
                    <ul className="mt-8 space-y-3">
                      {webdesignCare.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-base text-ink-muted"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-brand"
                            strokeWidth={2.25}
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 11 Zielgruppe */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={webdesignAudience.eyebrow}
                title={webdesignAudience.headline}
                lead={webdesignAudience.lead}
              />
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:mt-14 sm:gap-x-10 sm:gap-y-5">
                {webdesignAudience.items.map((item) => (
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
                {webdesignAudience.localNote}{" "}
                <Link
                  href={webdesignAudience.localLinkHref}
                  className="font-medium text-brand transition-motion hover:underline"
                >
                  {webdesignAudience.localLinkLabel}
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 12 FAQ */}
        <section className="bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Häufige Fragen"
                title="Fragen rund um Ihre neue Website."
                lead="Kurz und klar – damit Sie wissen, worauf Sie sich einlassen."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...webdesignFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 13 Abschluss-CTA */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {webdesignClosing.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {webdesignClosing.headline}
              </h2>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {webdesignClosing.lead}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.14}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={webdesignClosing.primaryHref}
                  variant="primary"
                  size="lg"
                >
                  {webdesignClosing.primaryCta}
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
                {webdesignClosing.trust}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
