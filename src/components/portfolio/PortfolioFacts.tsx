import { Reveal } from "@/components/ui";
import { portfolioFacts } from "@/data/projects";

export function PortfolioFacts() {
  return (
    <section className="border-b border-border bg-bg" aria-label="Projektübersicht">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12">
        <Reveal variant="fade">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {portfolioFacts.map((fact, index) => (
              <li
                key={fact.label}
                className="border-border sm:border-l sm:pl-6 lg:px-6 first:sm:border-l-0 first:sm:pl-0 first:lg:pl-0"
              >
                <p className="font-display text-base font-medium tracking-tight text-ink sm:text-lg">
                  {fact.label}
                </p>
                {index < portfolioFacts.length - 1 ? (
                  <span className="mt-6 block h-px bg-border sm:hidden" aria-hidden />
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
