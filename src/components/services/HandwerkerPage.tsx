import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  CtaBlock,
  FaqAccordion,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  handwerkerCosts,
  handwerkerCostsId,
  handwerkerCta,
  handwerkerFaq,
  handwerkerFaqTitle,
  handwerkerHero,
  handwerkerOffers,
  handwerkerProcess,
  handwerkerReference,
  handwerkerReferenceId,
  handwerkerScope,
  handwerkerSecondReference,
  handwerkerTitle,
  type HandwerkerScopeGroup,
} from "@/data/handwerker";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

const textLink =
  "font-medium text-brand underline underline-offset-4 transition-motion hover:text-brand-dark";

const frameShadow =
  "shadow-[0_20px_50px_rgba(15,23,42,0.12),0_8px_20px_rgba(15,23,42,0.08)]";

function ScopeGroup({
  group,
  tone,
}: {
  group: HandwerkerScopeGroup;
  tone: "included" | "optional";
}) {
  return (
    <div
      className={cn(
        tone === "optional" &&
          "mt-14 rounded-lg border border-border bg-bg-soft px-6 pb-2 pt-8 sm:px-8",
        tone === "included" && "mt-14",
      )}
    >
      <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
        {group.label}
      </p>
      <div className="mt-6">
        {group.items.map((item, index) => (
          <Reveal key={item.title} variant="slide" delay={index * 0.04}>
            <div className="grid gap-3 border-t border-border py-8 lg:grid-cols-12 lg:gap-10">
              <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl lg:col-span-4">
                {item.title}
              </h3>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {item.text}
                </p>
                {item.link ? (
                  <p className="mt-3 text-base">
                    <Link href={item.link.href} className={textLink}>
                      {item.link.label}
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function HandwerkerPage() {
  const mager = getProjectBySlug(handwerkerReference.projectSlug);
  const hofmann = getProjectBySlug(handwerkerSecondReference.projectSlug);

  return (
    <SiteShell>
      <main>
        <HeroSection
          headline={handwerkerHero.headline}
          lead={handwerkerHero.lead}
          primaryCta={handwerkerHero.primaryCta}
          primaryHref={handwerkerHero.primaryHref}
          secondaryCta={handwerkerHero.secondaryCta}
          secondaryHref={handwerkerHero.secondaryHref}
          showTrust={false}
          equalButtons
          breadcrumbs={[
            { label: "Start", href: "/" },
            { label: "Leistungen", href: "/leistungen" },
            { label: handwerkerTitle },
          ]}
        />

        {/* Zwei Angebote */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader title={handwerkerOffers.title} />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {handwerkerOffers.items.map((offer, index) => (
                <Reveal key={offer.id} variant="slide" delay={index * 0.06}>
                  <article className="flex h-full flex-col rounded-lg border border-border bg-bg-soft p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                      {offer.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                      {offer.text}
                      {offer.textBeforeLink}
                      {offer.link ? (
                        <Link href={offer.link.href} className={textLink}>
                          {offer.link.label}
                        </Link>
                      ) : null}
                      {offer.textAfterLink}
                    </p>
                    {offer.note ? (
                      <p className="mt-4 text-sm leading-relaxed text-ink-subtle sm:text-base">
                        {offer.note}
                      </p>
                    ) : null}
                    <div className="mt-auto pt-8">
                      <Button
                        href={offer.href}
                        variant="secondary"
                        size="md"
                        className="w-full sm:w-auto"
                      >
                        {offer.cta}
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Hauptreferenz */}
        <section
          id={handwerkerReferenceId}
          tabIndex={-1}
          className="scroll-mt-24 border-b border-border bg-bg-soft outline-none"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader title={handwerkerReference.title} />
            </Reveal>

            <Reveal variant="slide" delay={0.06}>
              <div
                className={cn(
                  "mt-12 overflow-hidden rounded-lg border border-border-strong bg-bg",
                  frameShadow,
                )}
              >
                <Image
                  src={handwerkerReference.image.src}
                  alt={handwerkerReference.image.alt}
                  width={handwerkerReference.image.width}
                  height={handwerkerReference.image.height}
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>

            <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
              {handwerkerReference.parts.map((part, index) => (
                <Reveal key={part.title} variant="slide" delay={index * 0.05}>
                  <div className="border-t border-border-strong pt-6">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                      {part.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
                      {part.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade" delay={0.1}>
              <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <dl className="flex flex-wrap gap-x-10 gap-y-4">
                  {handwerkerReference.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-sm text-ink-subtle">{fact.label}</dt>
                      <dd className="mt-1 font-display text-base font-medium tracking-tight text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Button
                  href={mager?.href ?? "/portfolio"}
                  variant="secondary"
                  size="md"
                  className="w-full shrink-0 sm:w-auto"
                >
                  {handwerkerReference.linkLabel}
                </Button>
              </div>
            </Reveal>

            {hofmann ? (
              <Reveal variant="slide" delay={0.06}>
                <div className="mt-16 grid items-center gap-8 border-t border-border-strong pt-12 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-5">
                    <div
                      className={cn(
                        "overflow-hidden rounded-lg border border-border-strong bg-bg",
                        frameShadow,
                      )}
                    >
                      <Image
                        src={hofmann.image.src}
                        alt={hofmann.image.alt}
                        width={hofmann.image.width}
                        height={hofmann.image.height}
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                      {handwerkerSecondReference.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                      {handwerkerSecondReference.text}
                    </p>
                    <p className="mt-4 text-base">
                      <Link href={hofmann.href} className={textLink}>
                        {handwerkerSecondReference.linkLabel}
                      </Link>
                    </p>
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                title={handwerkerScope.title}
                lead={handwerkerScope.lead}
              />
            </Reveal>
            <ScopeGroup group={handwerkerScope.included} tone="included" />
            <ScopeGroup group={handwerkerScope.optional} tone="optional" />
          </div>
        </section>

        {/* Kosten */}
        <section
          id={handwerkerCostsId}
          tabIndex={-1}
          className="scroll-mt-24 border-b border-border bg-bg-soft outline-none"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal variant="slide">
                  <SectionHeader title={handwerkerCosts.title} />
                </Reveal>
                <Reveal variant="slide" delay={0.06}>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                    <p>{handwerkerCosts.text}</p>
                    <p>{handwerkerCosts.existingText}</p>
                  </div>
                </Reveal>
              </div>
              <div className="space-y-6 lg:col-span-5 lg:col-start-8">
                {handwerkerCosts.blocks.map((block, index) => (
                  <Reveal key={block.title} variant="slide" delay={index * 0.06}>
                    <div className="rounded-lg border border-border bg-bg p-6 sm:p-8">
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                        {block.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-ink-muted">
                        {block.text}
                      </p>
                      {block.link ? (
                        <p className="mt-4 text-base">
                          <Link href={block.link.href} className={textLink}>
                            {block.link.label}
                          </Link>
                        </p>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <ProcessSection
          eyebrow={false}
          title={handwerkerProcess.title}
          lead={handwerkerProcess.lead}
          steps={handwerkerProcess.steps}
          showCta={false}
        />

        {/* FAQ */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader title={handwerkerFaqTitle} />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={handwerkerFaq} />
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBlock
          title={handwerkerCta.title}
          lead={handwerkerCta.lead}
          primaryLabel={handwerkerCta.primaryLabel}
          whatsappHref={siteConfig.whatsappHref}
          phoneHref={siteConfig.phoneHref}
          phoneLabel={siteConfig.phone}
        />
      </main>
    </SiteShell>
  );
}
