import Image from "next/image";
import Link from "next/link";
import { Button, Reveal } from "@/components/ui";
import { getFeaturedProjects, type PortfolioProject } from "@/data/projects";
import { cn } from "@/lib/cn";

const frameClass =
  "overflow-hidden rounded-md bg-bg shadow-[0_18px_44px_rgba(0,0,0,0.22),0_4px_12px_rgba(0,0,0,0.12)] ring-1 ring-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]";

function ProjectFrame({
  project,
  sizes,
  priority,
  className,
}: {
  project: PortfolioProject;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={project.href}
      className={cn("group block", frameClass, className)}
      aria-label={`${project.shortTitle} – Projekt ansehen`}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        className="h-auto w-full"
        priority={priority}
      />
    </Link>
  );
}

export function PortfolioHero() {
  const featured = getFeaturedProjects();
  const primary = featured.find((p) => p.slug === "he-immologis") ?? featured[0];
  const leftSmall =
    featured.find((p) => p.slug === "elektrotechnik-betrieb") ?? featured[1];
  const rightSmall =
    featured.find((p) => p.slug === "heinerfilm") ?? featured[2];

  if (!primary || !leftSmall || !rightSmall) return null;

  return (
    <section className="relative overflow-hidden border-b border-brand-dark bg-brand">
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

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-6">
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                Ausgewählte Projekte
              </p>
            </Reveal>

            <Reveal variant="slide" delay={0.05}>
              <h1 className="mt-5 max-w-[850px] font-display text-[2.15rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.75rem] sm:leading-[1.08] lg:text-[3.05rem] lg:leading-[1.06]">
                <span className="block">Websites, die</span>
                <span className="block">Unternehmen professionell</span>
                <span className="block">sichtbar machen.</span>
              </h1>
            </Reveal>

            <Reveal variant="slide" delay={0.1}>
              <p className="mt-8 max-w-[34rem] text-lg leading-[1.7] text-white/80 sm:text-[1.125rem]">
                Von der Immobilienvermittlung bis zum Handwerksbetrieb – jede
                Website entsteht individuell und mit einem klaren Ziel:
                Unternehmen professionell präsentieren und neue Anfragen
                ermöglichen.
              </p>
            </Reveal>

            <Reveal variant="slide" delay={0.16}>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/kontakt" variant="primary" size="lg">
                  Projekt unverbindlich besprechen
                </Button>
                <Button
                  href="#projekte"
                  variant="secondary"
                  size="lg"
                  className="min-h-14 border-white/70 px-9 font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
                  Zu den Projekten
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <Reveal variant="slide" delay={0.12}>
              <div className="relative" aria-label="Projektvorschauen">
                <ProjectFrame
                  project={primary}
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  priority
                  className="relative z-10"
                />

                <div className="relative z-20 mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-3">
                  <ProjectFrame
                    project={leftSmall}
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    priority
                  />
                  <ProjectFrame
                    project={rightSmall}
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
