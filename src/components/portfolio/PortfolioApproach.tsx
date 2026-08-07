import { Reveal, SectionHeader } from "@/components/ui";
import { portfolioApproach } from "@/data/projects";
import Link from "next/link";

export function PortfolioApproach() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Mehr als nur Design"
            title="Jedes Projekt entsteht mit einem klaren Ziel."
            lead="Eine gute Website soll nicht nur gut aussehen. Sie muss verständlich, schnell, vertrauenswürdig und auf die Ziele des Unternehmens abgestimmt sein."
          />
        </Reveal>

        <div className="mt-14 sm:mt-16">
          {portfolioApproach.map((item, index) => (
            <Reveal key={item.number} variant="slide" delay={index * 0.04}>
              <div className="grid gap-4 border-t border-border py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
                <p className="font-display text-sm tabular-nums text-brand/45 sm:col-span-2">
                  {item.number}
                </p>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:col-span-4 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-muted sm:col-span-6 sm:text-lg">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" aria-hidden />
        </div>

        <Reveal variant="fade" delay={0.1}>
          <p className="mt-10 text-base text-ink-muted">
            Passend dazu:{" "}
            <Link
              href="/webdesign"
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              Webdesign
            </Link>
            ,{" "}
            <Link
              href="/leistungen/website-relaunch"
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              Website Relaunch
            </Link>{" "}
            und{" "}
            <Link
              href="/leistungen/homepage-handwerker"
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              Homepages für Handwerker
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
