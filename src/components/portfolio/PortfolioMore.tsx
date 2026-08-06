import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";
import { getMoreProjects } from "@/data/projects";

export function PortfolioMore() {
  const more = getMoreProjects();

  return (
    <section
      id="weitere-projekte"
      className="scroll-mt-24 border-b border-border bg-bg-soft"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Weitere Projekte"
            title="Weitere Branchen. Dieselbe Sorgfalt."
            lead="Ausgewählte Auftritte für Handwerk, Dienstleistung und regionale Unternehmen."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {more.map((project, index) => (
            <Reveal key={project.slug} variant="slide" delay={index * 0.05}>
              <article>
                <Link
                  href={project.href}
                  className="group block overflow-hidden rounded-sm bg-bg shadow-[0_12px_32px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.05)] ring-1 ring-border transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1),0_4px_12px_rgba(15,23,42,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
                  />
                </Link>
                <div className="mt-5">
                  <p className="text-sm font-medium uppercase tracking-[0.1em] text-brand">
                    {project.industry}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">
                    <Link
                      href={project.href}
                      className="transition-colors hover:text-brand"
                    >
                      {project.shortTitle}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {project.teaserResult}
                  </p>
                  <Link
                    href={project.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Projekt ansehen
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
