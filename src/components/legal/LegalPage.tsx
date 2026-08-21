import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/ui";
import type { LegalBlock, LegalPageContent, LegalRow } from "@/data/legal";
import Link from "next/link";

function LegalLink({
  href,
  children,
  external,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  const className =
    "font-medium text-brand underline-offset-4 transition-colors hover:underline";

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function CardRows({ rows }: { rows: readonly LegalRow[] }) {
  return (
    <dl className="space-y-4 rounded-lg border border-border bg-bg-soft p-5 sm:p-6">
      {rows.map((row) => (
        <div key={row.label}>
          <dt className="text-sm font-semibold text-ink">{row.label}</dt>
          <dd className="mt-1 text-base leading-relaxed text-ink-muted">
            {row.lines ? (
              row.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))
            ) : row.href && row.value ? (
              <LegalLink href={row.href}>{row.value}</LegalLink>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3 className="pt-2 font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "card":
      return <CardRows rows={block.rows} />;
    case "link":
      return (
        <p>
          <LegalLink href={block.href} external={block.external}>
            {block.label}
          </LegalLink>
        </p>
      );
  }
}

export function LegalPage({ content }: { content: LegalPageContent }) {
  const otherPage =
    content.path === "/impressum"
      ? { href: "/datenschutz", label: "Zur Datenschutzerklärung" }
      : { href: "/impressum", label: "Zum Impressum" };

  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-brand">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,#123a6b_0%,#1b4f8c_48%,#1f5a9e_100%)]"
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
                <li className="text-white/80">{content.breadcrumbLabel}</li>
              </ol>
            </nav>

            <Reveal variant="fade">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">
                {content.eyebrow}
              </p>
            </Reveal>
            <Reveal variant="slide" delay={0.05}>
              <h1 className="mt-4 max-w-3xl text-balance font-display text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {content.title}
              </h1>
            </Reveal>
            <Reveal variant="slide" delay={0.1}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {content.lead}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-bg">
          <div className="mx-auto max-w-3xl px-6 py-14 sm:px-8 sm:py-20">
            <div className="space-y-12 sm:space-y-16">
              {content.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.blocks.map((block, index) => (
                      <Block
                        key={`${section.title}-${block.type}-${index}`}
                        block={block}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-14 border-t border-border pt-8 text-sm text-ink-muted">
              <Link
                href={otherPage.href}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {otherPage.label}
              </Link>
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
