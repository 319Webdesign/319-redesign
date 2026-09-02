import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export type HeroBreadcrumb = {
  label: string;
  href?: string;
};

export type HeroSectionProps = {
  eyebrow?: string;
  headline?: string;
  lead?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  showTrust?: boolean;
  breadcrumbs?: readonly HeroBreadcrumb[];
  equalButtons?: boolean;
};

export function HeroSection({
  eyebrow,
  headline = "Websites, die Vertrauen schaffen und Kunden gewinnen.",
  lead = "Für Handwerksbetriebe und regionale Unternehmen entwickeln wir moderne Websites, die professionell wirken, bei Google gefunden werden und planbar neue Anfragen bringen.",
  primaryCta = "Kostenloses Erstgespräch",
  primaryHref = "/kontakt",
  secondaryCta = "Referenzen ansehen",
  secondaryHref = "/portfolio",
  showTrust = true,
  breadcrumbs,
  equalButtons = false,
}: HeroSectionProps = {}) {
  return (
    <section className="relative min-h-[min(85vh,52rem)] overflow-hidden border-b border-border">
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-[68%_85%]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,_rgba(18,58,107,0.94)_0%,_rgba(27,79,140,0.82)_38%,_rgba(27,79,140,0.4)_68%,_rgba(15,30,55,0.25)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[min(85vh,52rem)] max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 sm:py-28">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav
            aria-label="Brotkrumen"
            className="mb-8 text-sm text-white/55 sm:mb-10"
          >
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-motion hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left lg:max-w-2xl">
          {eyebrow ? (
            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                {eyebrow}
              </p>
            </Reveal>
          ) : null}
          <Reveal variant="slide">
            <h1
              className={cn(
                "text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]",
                eyebrow && "mt-4",
              )}
            >
              {headline}
            </h1>
          </Reveal>
          <Reveal variant="slide" delay={0.06}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {lead}
            </p>
          </Reveal>
          <Reveal variant="slide" delay={0.12}>
            <div
              className={cn(
                "mt-8 gap-3",
                equalButtons
                  ? "mx-auto grid w-full max-w-xl grid-cols-1 sm:grid-cols-2 md:mx-0"
                  : "flex flex-col md:flex-row md:flex-wrap",
              )}
            >
              <Button
                href={primaryHref}
                variant="primary"
                size="md"
                className={equalButtons ? "w-full" : "w-full md:w-auto"}
              >
                {primaryCta}
              </Button>
              <Button
                href={secondaryHref}
                variant="secondary"
                size="md"
                className={cn(
                  "border-white/70 text-white hover:bg-white/10 hover:text-white",
                  equalButtons ? "w-full" : "w-full md:w-auto",
                )}
              >
                {secondaryCta}
              </Button>
            </div>
          </Reveal>
          {showTrust ? (
            <Reveal variant="fade" delay={0.22}>
              <p className="mt-8 text-sm text-white/60">
                {siteConfig.googleRating} Google · {siteConfig.projectCount}{" "}
                Projekte · {siteConfig.region}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
