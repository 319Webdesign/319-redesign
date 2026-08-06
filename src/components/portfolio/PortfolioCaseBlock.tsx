import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Reveal } from "@/components/ui";
import type { PortfolioProject } from "@/data/projects";
import { cn } from "@/lib/cn";

type Props = {
  project: PortfolioProject;
  priority?: boolean;
  reverse?: boolean;
  nextProject?: PortfolioProject | null;
};

export function PortfolioCaseBlock({
  project,
  priority,
  reverse = false,
  nextProject,
}: Props) {
  const metaItems = [
    { label: "Projekt", value: project.shortTitle },
    { label: "Branche", value: project.industry },
    {
      label: "Leistung",
      value: (project.metaServices ?? project.services.slice(0, 3)).join(" · "),
    },
    project.duration
      ? { label: "Projektzeit", value: project.duration }
      : null,
    project.location
      ? { label: "Standort", value: project.location }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="border-b border-border py-16 last:border-b-0 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade">
          <dl className="mb-10 grid grid-cols-2 gap-x-6 gap-y-6 border-b border-border pb-8 sm:mb-12 sm:grid-cols-3 sm:pb-10 lg:grid-cols-5 lg:gap-x-8">
            {metaItems.map((item) => (
              <div key={item.label}>
                <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-subtle">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-base font-medium tracking-tight text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <Reveal
            variant="scale"
            delay={0.06}
            className={cn("lg:col-span-7", reverse && "lg:order-2")}
          >
            <Link
              href={project.href}
              className="group block overflow-hidden rounded-md shadow-[0_16px_40px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] ring-1 ring-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
              aria-label={`${project.shortTitle} – Projekt im Detail ansehen`}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
                priority={priority}
              />
            </Link>
          </Reveal>

          <Reveal
            variant="slide"
            delay={0.12}
            className={cn(
              "flex flex-col justify-center lg:col-span-5",
              reverse ? "lg:order-1 lg:pr-2" : "lg:pl-2",
            )}
          >
            <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {project.shortTitle}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium uppercase tracking-[0.12em] text-brand">
              {project.role ? <span>{project.role}</span> : null}
              {project.role && project.location ? (
                <span className="text-border-strong" aria-hidden>
                  ·
                </span>
              ) : null}
              {project.location ? <span>{project.location}</span> : null}
              {!project.role && !project.location ? (
                <span>{project.industry}</span>
              ) : null}
            </div>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-[1.65]">
              {project.summary}
            </p>
            <div className="mt-8">
              <Button
                href={project.href}
                variant="primary"
                size="md"
                className="group/btn"
              >
                Projekt im Detail ansehen
                <ArrowRight
                  className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
                  aria-hidden
                />
              </Button>
            </div>
            {nextProject ? (
              <Link
                href={`#projekt-${nextProject.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-brand"
              >
                Nächstes Projekt
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            ) : null}
          </Reveal>
        </div>
      </div>
    </article>
  );
}
