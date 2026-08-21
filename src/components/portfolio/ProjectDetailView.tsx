import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { BeforeAfterCompare } from "@/components/home/BeforeAfterCompare";
import { Button, Reveal } from "@/components/ui";
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import { ProjectLivePreview } from "@/components/portfolio/ProjectLivePreview";
import {
  getNextPortfolioProject,
  type PortfolioProject,
  type ProjectImage,
  type ProjectMetaItem,
} from "@/data/projects";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const shell = "mx-auto max-w-6xl px-6 sm:px-8";
const screenshotShadow =
  "shadow-[0_12px_36px_rgba(15,23,42,0.07),0_2px_8px_rgba(15,23,42,0.04)]";

function Eyebrow({
  children,
  as: Tag = "p",
}: {
  children: ReactNode;
  as?: "p" | "h2";
}) {
  return (
    <Tag className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
      {children}
    </Tag>
  );
}

function Screenshot({
  image,
  priority,
  sizes,
  className,
  imageClassName,
}: {
  image: ProjectImage;
  priority?: boolean;
  sizes: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md bg-bg-soft ring-1 ring-black/[0.04]",
        screenshotShadow,
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className={cn(
          "h-auto w-full origin-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.012]",
          imageClassName,
        )}
      />
    </div>
  );
}

function MetaList({ items }: { items: ProjectMetaItem[] }) {
  if (items.length === 0) return null;

  return (
    <dl className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[8.5rem_1fr] sm:items-baseline sm:gap-6"
        >
          <dt className="text-sm text-ink-subtle">{item.label}</dt>
          <dd className="text-base font-medium tracking-tight text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function getHeroMeta(project: PortfolioProject): ProjectMetaItem[] {
  if (project.heroMeta?.length) return project.heroMeta;

  return [
    {
      label: "Leistung",
      value: project.serviceLabel ?? project.service,
    },
    { label: "Branche", value: project.industry },
    project.projectType
      ? { label: "Projektart", value: project.projectType }
      : null,
    project.specialty
      ? { label: "Besonderheit", value: project.specialty }
      : null,
  ].filter((item): item is ProjectMetaItem => Boolean(item));
}

function getFacts(project: PortfolioProject): ProjectMetaItem[] {
  if (project.facts?.length) return project.facts;

  return [
    { label: "Kunde", value: project.shortTitle },
    { label: "Branche", value: project.industry },
    {
      label: "Leistungen",
      value: project.serviceLabel ?? project.service,
    },
    project.specialty
      ? { label: "Besonderheit", value: project.specialty }
      : null,
    project.liveUrl ? { label: "Status", value: "Live" } : null,
  ].filter((item): item is ProjectMetaItem => Boolean(item));
}

export function ProjectDetailView({ project }: { project: PortfolioProject }) {
  const nextProject = getNextPortfolioProject(project.slug);
  const heroMeta = getHeroMeta(project);
  const facts = getFacts(project);
  const steps = project.steps ?? [];
  const hasBeforeAfter = Boolean(project.beforeImage && project.afterImage);

  return (
    <main>
      <section className="bg-bg">
        <div className={cn(shell, "pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20")}>
          <nav aria-label="Brotkrumen" className="mb-10 text-sm text-ink-subtle sm:mb-12">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Startseite
                </Link>
              </li>
              <li aria-hidden className="text-border-strong">
                ›
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-brand"
                >
                  Portfolio
                </Link>
              </li>
              <li aria-hidden className="text-border-strong">
                ›
              </li>
              <li className="text-ink-muted">{project.shortTitle}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className="relative z-10 min-w-0 lg:col-span-5">
              <Reveal variant="fade">
                <Eyebrow>Ausgewähltes Projekt</Eyebrow>
              </Reveal>
              <Reveal variant="subtle" delay={0.04}>
                <h1 className="mt-4 text-balance font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {project.shortTitle}
                </h1>
              </Reveal>
              <Reveal variant="fade" delay={0.08}>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-brand">
                  {project.heroLine ??
                    [project.industry, project.serviceLabel ?? project.service]
                      .filter(Boolean)
                      .join(" · ")}
                </p>
              </Reveal>
              <Reveal variant="subtle" delay={0.1}>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
                  {project.summary}
                </p>
              </Reveal>
              {project.liveUrl ? (
                <Reveal variant="fade" delay={0.12}>
                  <div className="relative z-10 mt-6">
                    <Button
                      href={project.liveUrl}
                      variant="secondary"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink className="size-4" aria-hidden />}
                      className="whitespace-nowrap"
                    >
                      Live-Website ansehen
                    </Button>
                  </div>
                </Reveal>
              ) : null}
              <Reveal variant="subtle" delay={0.14}>
                <div className="mt-10 max-w-md">
                  <MetaList items={heroMeta} />
                </div>
              </Reveal>
            </div>

            <Reveal
              variant="subtle"
              delay={0.08}
              className="hidden min-w-0 overflow-hidden lg:col-span-7 lg:block"
            >
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Live-Website von ${project.shortTitle} öffnen`}
                >
                  <Screenshot
                    image={project.image}
                    sizes="58vw"
                    imageClassName="aspect-[4/3] object-cover object-top"
                    priority
                  />
                </a>
              ) : (
                <Screenshot
                  image={project.image}
                  sizes="58vw"
                  imageClassName="aspect-[4/3] object-cover object-top"
                />
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FF]">
        <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal variant="subtle">
            {project.liveUrl ? (
              <ProjectLivePreview
                url={project.liveUrl}
                title={project.shortTitle}
                image={project.image}
                eager
                priority
              />
            ) : (
              <Screenshot
                image={project.image}
                priority
                sizes="(max-width: 1024px) 100vw, 1440px"
              />
            )}
          </Reveal>
        </div>
      </section>

      {project.situation ? (
        <section className="bg-bg">
          <div className={cn(shell, "py-20 sm:py-28 lg:py-32")}>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <Reveal variant="fade" className="hidden lg:col-span-2 lg:block">
                <p
                  className="font-display text-6xl font-medium tabular-nums tracking-tight text-brand/25"
                  aria-hidden
                >
                  01
                </p>
              </Reveal>
              <Reveal variant="subtle" className="max-w-3xl lg:col-span-9">
                <Eyebrow>Ausgangssituation</Eyebrow>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {project.situationHeadline ?? "Was sollte sich verändern?"}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl sm:leading-[1.65]">
                  {project.situation}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {project.goal ? (
        <section className="bg-bg">
          <div className={cn(shell, "pb-20 sm:pb-28 lg:pb-32")}>
            <Reveal variant="subtle">
              <div className="max-w-2xl">
                <Eyebrow>Das Ziel</Eyebrow>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {project.goalHeadline ?? "Was das Projekt erreichen sollte."}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl sm:leading-[1.65]">
                  {project.goal}
                </p>
              </div>
            </Reveal>
            {project.goalStatement ? (
              <Reveal variant="subtle" delay={0.08}>
                <p className="mt-12 max-w-4xl text-balance font-display text-3xl font-medium tracking-tight text-brand sm:mt-16 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                  {project.goalStatement}
                </p>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {steps.length > 0 || project.implementation ? (
        <section className="bg-bg-soft">
          <div className={cn(shell, "py-20 sm:py-28")}>
            <Reveal variant="subtle">
              <div className="max-w-2xl">
                <Eyebrow>Die Umsetzung</Eyebrow>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {project.implementationHeadline ??
                    "So wurde aus der Idee die neue Website."}
                </h2>
                {project.implementation ? (
                  <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
                    {project.implementation}
                  </p>
                ) : null}
              </div>
            </Reveal>

            {steps.length > 0 ? (
              <ol className="mt-14 sm:mt-16">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="border-t border-border last:border-b"
                  >
                    <Reveal variant="subtle" delay={index * 0.04}>
                      <div className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10">
                        <p className="font-display text-sm tabular-nums tracking-[0.08em] text-brand/50 sm:col-span-2">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <div className="sm:col-span-10 lg:col-span-9">
                          <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </section>
      ) : null}

      {project.features.length > 0 ? (
        <section className="bg-bg">
          <div className={cn(shell, "py-20 sm:py-28")}>
            <Reveal variant="subtle">
              <div className="max-w-2xl">
                <Eyebrow>Besondere Funktionen</Eyebrow>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {project.featuresHeadline ?? "Mehr als nur gutes Design."}
                </h2>
              </div>
            </Reveal>
            <div className="mt-14 sm:mt-16">
              {project.features.map((feature, index) => (
                <Reveal key={feature.title} variant="subtle" delay={index * 0.03}>
                  <article className="border-t border-border py-8 sm:grid sm:grid-cols-12 sm:items-baseline sm:gap-10 sm:py-10">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:col-span-5 sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted sm:col-span-7 sm:mt-0 sm:text-lg">
                      {feature.text}
                    </p>
                  </article>
                </Reveal>
              ))}
              <div className="border-t border-border" aria-hidden />
            </div>
          </div>
        </section>
      ) : null}

      {project.resultHeadline || project.outcome ? (
        <section className="bg-bg">
          <div className={cn(shell, "py-20 sm:py-28 lg:py-32")}>
            <Reveal variant="subtle">
              <div className="max-w-3xl">
                <Eyebrow>Das Ergebnis</Eyebrow>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  {project.resultSectionHeadline ??
                    "Ein professioneller Auftritt, der im Alltag funktioniert."}
                </h2>
              </div>
            </Reveal>
            {project.resultHeadline ? (
              <Reveal variant="subtle" delay={0.06}>
                <p className="mt-12 max-w-4xl text-balance font-display text-3xl font-medium tracking-tight text-brand sm:mt-16 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                  {project.resultHeadline}
                </p>
              </Reveal>
            ) : null}
            {project.outcome ? (
              <Reveal variant="fade" delay={0.1}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                  {project.outcome}
                </p>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {project.services.length > 0 ? (
        <section className="bg-bg">
          <div className={cn(shell, "pb-20 sm:pb-28")}>
            <Reveal variant="fade">
              <Eyebrow as="h2">Umgesetzte Leistungen</Eyebrow>
              <ul className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-3 border-t border-border pt-8">
                {project.services.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center text-base text-ink-muted sm:text-lg"
                  >
                    {index > 0 ? (
                      <span className="mx-3 text-border-strong" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    {item}
                  </li>
                ))}
              </ul>
              {project.relatedServices && project.relatedServices.length > 0 ? (
                <p className="mt-8 text-base text-ink-muted">
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
              ) : null}
            </Reveal>
          </div>
        </section>
      ) : null}

      {hasBeforeAfter && project.beforeImage && project.afterImage ? (
        <section className="bg-bg-soft">
          <div className={cn(shell, "py-20 sm:py-28")}>
            <Reveal variant="subtle">
              <div className="max-w-2xl">
                <Eyebrow>Vorher & Nachher</Eyebrow>
                <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  Der Unterschied im direkten Vergleich.
                </h2>
              </div>
            </Reveal>
            <Reveal variant="subtle" delay={0.08}>
              <div className="mt-12 sm:mt-16">
                <BeforeAfterCompare
                  before={{
                    src: project.beforeImage.src,
                    alt: project.beforeImage.alt,
                  }}
                  after={{
                    src: project.afterImage.src,
                    alt: project.afterImage.alt,
                  }}
                  className="max-w-4xl"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {project.testimonial ? (
        <section className="bg-bg">
          <div className={cn(shell, "py-20 sm:py-28")}>
            <Reveal variant="subtle">
              <figure className="max-w-3xl">
                <Eyebrow as="h2">Kundenstimme</Eyebrow>
                <blockquote className="mt-8 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl lg:leading-[1.2]">
                  „{project.testimonial.quote}“
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center gap-4">
                  {project.testimonial.logoSrc ? (
                    <Image
                      src={project.testimonial.logoSrc}
                      alt=""
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
                  {project.testimonial.rating ? (
                    <div className="flex items-center gap-2 sm:ml-2">
                      <GoogleIcon className="size-4" />
                      <div
                        className="flex gap-0.5 text-cta"
                        aria-label={`${project.testimonial.rating} von 5 Sternen auf Google`}
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={cn(
                              "size-3.5",
                              starIndex < (project.testimonial?.rating ?? 0)
                                ? "fill-current"
                                : "fill-none text-border-strong",
                            )}
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}

      {facts.length > 0 ? (
        <section className="bg-bg">
          <div className={cn(shell, "py-16 sm:py-20")}>
            <Reveal variant="fade">
              <Eyebrow as="h2">Projekt</Eyebrow>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-5">
                {facts.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-ink-subtle">{item.label}</dt>
                    <dd className="mt-2 font-display text-base font-medium tracking-tight text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="bg-brand">
        <div className={cn(shell, "py-20 text-center sm:py-28 lg:py-32")}>
          <Reveal variant="subtle">
            <div className="mx-auto max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                Ihr Projekt
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Möchten Sie Ihr Unternehmen genauso professionell präsentieren?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Erzählen Sie mir von Ihrem Projekt. Gemeinsam schauen wir, wie
                ein moderner digitaler Auftritt für Ihr Unternehmen aussehen
                kann.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button href="/kontakt" variant="primary" size="lg">
                  Projekt unverbindlich besprechen
                </Button>
                <Button
                  href="/portfolio"
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Alle Projekte ansehen
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {nextProject ? (
        <section className="border-t border-border bg-bg-soft">
          <div className={cn(shell, "py-16 sm:py-20 lg:py-24")}>
            <Reveal variant="subtle">
              <Link
                href={nextProject.href}
                className="group grid items-center gap-8 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus lg:grid-cols-12 lg:gap-14"
                aria-label={`Nächstes Projekt: ${nextProject.shortTitle}`}
              >
                <div className="lg:col-span-4">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                    Nächstes Projekt
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    {nextProject.shortTitle}
                  </h2>
                  <p className="mt-3 text-base text-ink-muted">
                    {nextProject.industry}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark">
                    Projekt ansehen
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
                <div
                  className={cn(
                    "overflow-hidden rounded-md ring-1 ring-black/[0.04] lg:col-span-8",
                    screenshotShadow,
                  )}
                >
                  <Image
                    src={nextProject.image.src}
                    alt={nextProject.image.alt}
                    width={nextProject.image.width}
                    height={nextProject.image.height}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="aspect-[16/9] h-auto w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.012]"
                  />
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}
    </main>
  );
}
