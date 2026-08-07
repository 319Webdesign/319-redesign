import { ContactForm } from "@/components/kontakt/ContactForm";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  FaqAccordion,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  kontaktClosing,
  kontaktFaq,
  kontaktHero,
  kontaktNextSteps,
  kontaktPerson,
  kontaktUnsure,
} from "@/data/kontakt";
import { siteConfig } from "@/data/site";
import { Check, Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function KontaktPage() {
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
          <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-14">
            <nav
              aria-label="Brotkrumen"
              className="mb-8 text-sm text-white/55 sm:mb-10"
            >
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
                <li className="text-white/80">Kontakt</li>
              </ol>
            </nav>

            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">
                {kontaktHero.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h1 className="mt-4 max-w-3xl text-balance font-display text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {kontaktHero.headline}
              </h1>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {kontaktHero.lead}
              </p>
            </Reveal>
            <Reveal variant="fade" delay={0.14}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/70 sm:text-base">
                {kontaktHero.trust.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    {index > 0 ? (
                      <span className="text-white/35 select-none" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 02 + 03 Person + Formular */}
        <section className="border-b border-border bg-bg" id="anfrage">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
            {/* Formular zuerst auf Mobile */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Reveal variant="slide">
                <ContactForm />
              </Reveal>
            </div>

            {/* Ansprechpartner */}
            <aside className="order-2 lg:order-1 lg:col-span-5">
              <Reveal variant="slide" delay={0.05}>
                <div className="lg:sticky lg:top-28">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-lg sm:max-w-[260px] lg:mx-0 lg:max-w-[280px]">
                    <Image
                      src={kontaktPerson.image.src}
                      alt={kontaktPerson.image.alt}
                      fill
                      sizes="(max-width: 1024px) 260px, 280px"
                      className="object-cover object-top"
                    />
                  </div>

                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-brand">
                    {kontaktPerson.eyebrow}
                  </p>
                  <p className="mt-3 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {kontaktPerson.name}
                  </p>
                  <p className="mt-1 text-base text-ink-muted">
                    {kontaktPerson.company}
                  </p>
                  <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-muted">
                    {kontaktPerson.text}
                  </p>

                  <div className="mt-8 space-y-4 border-t border-border pt-8">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                        Telefon
                      </p>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-1.5 inline-flex min-h-11 items-center gap-2 text-lg font-medium text-ink transition-motion hover:text-brand"
                      >
                        <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                        {kontaktPerson.phoneDisplay}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                        E-Mail
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1.5 inline-flex min-h-11 items-center gap-2 break-all text-base font-medium text-ink transition-motion hover:text-brand sm:text-lg"
                      >
                        <Mail className="size-4 shrink-0 text-brand" aria-hidden />
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                        WhatsApp
                      </p>
                      <a
                        href={siteConfig.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex min-h-11 items-center gap-2 text-lg font-medium text-ink transition-motion hover:text-brand"
                      >
                        <MessageCircle
                          className="size-4 shrink-0 text-brand"
                          aria-hidden
                        />
                        Nachricht senden
                      </a>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {kontaktPerson.trustItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-ink-muted sm:text-base"
                      >
                        <Check
                          className="size-4 shrink-0 text-brand"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* 04 Noch nicht sicher */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={kontaktUnsure.eyebrow}
                title={kontaktUnsure.headline}
                lead={kontaktUnsure.lead}
              />
            </Reveal>

            <ul className="mt-14 sm:mt-16">
              {kontaktUnsure.examples.map((example, index) => (
                <Reveal
                  key={example}
                  variant="slide"
                  delay={index * 0.03}
                >
                  <li className="border-t border-border py-5 font-display text-lg font-medium tracking-tight text-ink last:border-b last:pb-5 sm:py-6 sm:text-2xl sm:last:pb-6">
                    {example}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal variant="fade" delay={0.1}>
              <p className="mt-12 max-w-xl font-display text-xl font-medium tracking-tight text-brand sm:text-2xl">
                → {kontaktUnsure.closing}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={0.12}>
              <p className="mt-8 text-base text-ink-muted">
                Noch unsicher?{" "}
                {kontaktUnsure.links.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? " · " : null}
                    <Link
                      href={link.href}
                      className="font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 05 Was passiert nach der Anfrage */}
        <section className="border-b border-border bg-bg-soft">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={kontaktNextSteps.eyebrow}
                title={kontaktNextSteps.headline}
              />
            </Reveal>

            <ol className="mt-14 sm:mt-16">
              {kontaktNextSteps.steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  variant="slide"
                  delay={index * 0.04}
                >
                  <li>
                    <div className="grid gap-3 border-t border-border py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
                      <p className="font-display text-sm tabular-nums text-brand/45 sm:col-span-2">
                        {step.number}
                      </p>
                      <div className="sm:col-span-4">
                        <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base leading-relaxed text-ink-muted sm:col-span-6 sm:text-lg">
                        {step.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
              <div className="border-t border-border" aria-hidden />
            </ol>
          </div>
        </section>

        {/* 06 FAQ */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Vor dem ersten Gespräch"
                title="Sie müssen nicht perfekt vorbereitet sein."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={[...kontaktFaq]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 Alternative Kontaktaufnahme */}
        <section className="bg-brand px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="slide">
              <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                {kontaktClosing.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {kontaktClosing.lead}
              </p>
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="font-display text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {kontaktPerson.name}
                </p>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm text-white/55">Telefon</dt>
                    <dd>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-1 inline-flex min-h-11 items-center justify-center text-lg font-medium text-white transition-motion hover:text-cta"
                      >
                        {kontaktPerson.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-white/55">E-Mail</dt>
                    <dd>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 inline-flex min-h-11 items-center justify-center break-all text-lg font-medium text-white transition-motion hover:text-cta"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal variant="slide" delay={0.1}>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  href={siteConfig.phoneHref}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="size-5" aria-hidden />}
                >
                  {kontaktClosing.callCta}
                </Button>
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="secondary"
                  size="lg"
                  icon={<Mail className="size-5" aria-hidden />}
                  className="border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
                  {kontaktClosing.emailCta}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
