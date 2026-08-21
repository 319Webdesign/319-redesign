import {
  DeviceMockup,
  MobileMockup,
} from "@/components/home/DeviceMockup";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  CtaBlock,
  FaqAccordion,
  ProjectCard,
  Reveal,
  SectionHeader,
  Timeline,
} from "@/components/ui";
import {
  getRelatedProjects,
  serviceProcessSteps,
  type ServiceLanding,
} from "@/data/services";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function ServiceLandingPage({ service }: { service: ServiceLanding }) {
  const related = getRelatedProjects(service.relatedProjectHrefs);

  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,_#d6e4f5_0%,_transparent_55%),linear-gradient(180deg,_#ffffff_0%,_#f4f7fb_100%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
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
                    href="/leistungen"
                    className="transition-motion hover:text-brand"
                  >
                    Leistungen
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink-muted">{service.title}</li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="text-center lg:col-span-6 lg:text-left">
                <Reveal variant="fade">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
                    {service.hero.eyebrow}
                  </p>
                </Reveal>
                <Reveal variant="slide" delay={0.05}>
                  <h1 className="mt-4 text-balance font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                    {service.hero.headline}
                  </h1>
                </Reveal>
                <Reveal variant="slide" delay={0.1}>
                  <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl lg:mx-0">
                    {service.hero.lead}
                  </p>
                </Reveal>
                <Reveal variant="slide" delay={0.16}>
                  <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
                    <Button
                      href="/kontakt"
                      variant="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {service.hero.primaryCta}
                    </Button>
                    <Button
                      href={service.hero.secondaryHref}
                      variant="secondary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {service.hero.secondaryCta}
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-6">
                <Reveal variant="scale" delay={0.12}>
                  <DeviceMockup variant="brand" label={service.title} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-border bg-bg-soft">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={service.problem.eyebrow}
                title={service.problem.title}
                lead={service.problem.lead}
              />
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {service.problem.items.map((item, index) => (
                <Reveal key={item.title} variant="slide" delay={index * 0.05}>
                  <div className="border-t border-border pt-6">
                    <p className="font-display text-sm tabular-nums text-brand/40">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lösung */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal variant="slide">
                  <SectionHeader
                    eyebrow={service.solution.eyebrow}
                    title={service.solution.title}
                    lead={service.solution.lead}
                  />
                </Reveal>
              </div>
              <div className="space-y-5 lg:col-span-6 lg:col-start-7">
                {service.solution.paragraphs.map((p, index) => (
                  <Reveal key={p.slice(0, 24)} variant="slide" delay={index * 0.06}>
                    <p className="text-lg leading-relaxed text-ink-muted">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="border-b border-border bg-bg-soft">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow={service.benefits.eyebrow}
                title={service.benefits.title}
                lead={service.benefits.lead}
              />
            </Reveal>
            <div className="mt-14 space-y-0">
              {service.benefits.items.map((item, index) => (
                <Reveal key={item.title} variant="slide" delay={index * 0.04}>
                  <div className="grid gap-3 border-t border-border py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink lg:col-span-4">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-muted lg:col-span-7 lg:col-start-6 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        {related.length > 0 ? (
          <section className="border-b border-border bg-bg">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
              <Reveal variant="slide">
                <SectionHeader
                  eyebrow="Referenzen"
                  title="Passende Projekte"
                  lead="Beispiele, die zu dieser Leistung passen."
                />
              </Reveal>
              <div className="mt-14 space-y-20">
                {related.map((project, index) => (
                  <Reveal key={project.href} variant="slide" delay={index * 0.06}>
                    <ProjectCard
                      title={project.title}
                      industry={project.industry}
                      service={project.service}
                      result={project.result}
                      href={project.href}
                      image={project.image}
                      imageWidth={project.imageWidth}
                      imageHeight={project.imageHeight}
                      reverse={index % 2 === 1}
                      desktopMockup={
                        <DeviceMockup
                          variant={index % 2 === 0 ? "brand" : "light"}
                          label="Case Study"
                          className="rounded-none border-0"
                        />
                      }
                      mobileMockup={<MobileMockup />}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Projektablauf */}
        <section className="border-b border-border bg-bg-soft">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Projektablauf"
                title="So läuft die Zusammenarbeit"
                lead={
                  service.processNote ??
                  "Klarer Prozess — vorhersehbar und ohne Agentur-Theater."
                }
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-14">
                <Timeline steps={serviceProcessSteps} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="FAQ"
                title={`Häufige Fragen zu ${service.title}`}
                lead="Kurz und ehrlich — damit nichts im Weg steht."
              />
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="mt-12">
                <FaqAccordion items={service.faq} />
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBlock
          title={service.cta.title}
          lead={service.cta.lead}
          primaryLabel={service.hero.primaryCta}
          whatsappHref={siteConfig.whatsappHref}
          phoneHref={siteConfig.phoneHref}
          phoneLabel={siteConfig.phone}
        />
      </main>
    </SiteShell>
  );
}
