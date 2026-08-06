import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button, Reveal, SectionHeader } from "@/components/ui";
import {
  getRelatedPortfolioProjects,
  type PortfolioProject,
} from "@/data/projects";
import { PortfolioCta } from "./PortfolioCta";

export function ProjectDetailView({ project }: { project: PortfolioProject }) {
  const related = getRelatedPortfolioProjects(project.slug, 2);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)]">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
          <nav aria-label="Brotkrumen" className="mb-8 text-sm text-ink-subtle">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-motion hover:text-brand">
                  Start
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-motion hover:text-brand"
                >
                  Portfolio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink-muted">{project.shortTitle}</li>
            </ol>
          </nav>

          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
              {project.industry}
            </p>
          </Reveal>
          <Reveal variant="slide" delay={0.05}>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {project.title}
            </h1>
          </Reveal>
          <Reveal variant="slide" delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {project.summary}
            </p>
          </Reveal>
          <Reveal variant="slide" delay={0.14}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/kontakt" variant="primary" size="lg">
                Ähnliches Projekt besprechen
              </Button>
              {project.liveUrl ? (
                <Button
                  href={project.liveUrl}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink className="size-4" aria-hidden />}
                >
                  Live-Website
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Großer Screenshot */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
          <Reveal variant="slide">
            <div className="overflow-hidden rounded-sm bg-bg-soft shadow-[0_16px_40px_rgba(15,23,42,0.1),0_4px_12px_rgba(15,23,42,0.06)] ring-1 ring-border">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(max-width: 1024px) 100vw, 1120px"
                className="h-auto w-full object-cover object-top"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ausgangssituation & Ziel */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="slide">
              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  Ausgangssituation
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                  {project.situation}
                </p>
              </div>
            </Reveal>
            <Reveal variant="slide" delay={0.06}>
              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  Ziel des Projekts
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                  {project.goal}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Umsetzung */}
      <section className="border-b border-border bg-bg-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <Reveal variant="slide">
            <SectionHeader
              eyebrow="Umsetzung"
              title="Was wir gemeinsam erarbeitet haben"
              lead={project.implementation}
            />
          </Reveal>

          <Reveal variant="fade" delay={0.08}>
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                Leistungen
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-border pt-6">
                {project.services.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-base text-ink"
                  >
                    {index > 0 ? (
                      <span className="text-border-strong" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {project.relatedServices && project.relatedServices.length > 0 ? (
            <Reveal variant="fade" delay={0.1}>
              <p className="mt-10 text-base text-ink-muted">
                Verwandte Leistungen:{" "}
                {project.relatedServices.map((service, index) => (
                  <span key={service.href}>
                    {index > 0 ? ", " : null}
                    <Link
                      href={service.href}
                      className="font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      {service.label}
                    </Link>
                  </span>
                ))}
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Besondere Funktionen */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <Reveal variant="slide">
            <SectionHeader
              eyebrow="Besonderheiten"
              title="Funktionen, die den Unterschied machen"
            />
          </Reveal>
          <div className="mt-12">
            {project.features.map((feature, index) => (
              <Reveal key={feature} variant="slide" delay={index * 0.03}>
                <div className="grid gap-2 border-t border-border py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                  <p className="font-display text-sm tabular-nums text-brand/45 sm:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-display text-lg font-medium tracking-tight text-ink sm:col-span-10 sm:text-xl">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" aria-hidden />
          </div>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="border-b border-border bg-bg-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <Reveal variant="slide">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                Ergebnis
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Was das Projekt bewirkt
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl">
                {project.outcome}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Weitere Screenshots / Gallery */}
      {project.gallery && project.gallery.length > 0 ? (
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Einblicke"
                title="Weitere Ansichten"
                lead="Zusätzliche Screenshots und Vergleiche aus dem Projekt."
              />
            </Reveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {project.gallery.map((image, index) => (
                <Reveal key={image.src} variant="slide" delay={index * 0.05}>
                  <figure>
                    <div className="overflow-hidden rounded-sm bg-bg-soft ring-1 ring-border shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-ink-subtle">
                      {image.alt}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Kundenstimme */}
      {project.testimonial ? (
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <figure className="max-w-3xl border-t border-border pt-10">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                  Kundenstimme
                </p>
                <blockquote className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                  „{project.testimonial.quote}“
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {project.testimonial.logoSrc ? (
                    <Image
                      src={project.testimonial.logoSrc}
                      alt={`Logo ${project.testimonial.company}`}
                      width={120}
                      height={40}
                      className="h-8 w-auto max-w-[6rem] object-contain object-left"
                    />
                  ) : null}
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {project.testimonial.name}
                    </p>
                    <p className="text-sm text-ink-muted">
                      {project.testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Weitere Projekte */}
      <section className="border-b border-border bg-bg-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <Reveal variant="slide">
            <SectionHeader
              eyebrow="Weiterlesen"
              title="Weitere Projekte"
              lead="Weitere Einblicke in individuelle Websites für regionale Unternehmen."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {related.map((item, index) => (
              <Reveal key={item.slug} variant="slide" delay={index * 0.05}>
                <article>
                  <Link
                    href={item.href}
                    className="group block overflow-hidden rounded-sm bg-bg ring-1 ring-border shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="aspect-[16/10] h-auto w-full object-cover object-top"
                    />
                  </Link>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.1em] text-brand">
                    {item.industry}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-brand"
                    >
                      {item.shortTitle}
                    </Link>
                  </h3>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Projekt ansehen
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" delay={0.1}>
            <div className="mt-12">
              <Button href="/portfolio" variant="secondary" size="md">
                Alle Projekte
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <PortfolioCta />
    </main>
  );
}
