import { Button, Reveal } from "@/components/ui";

export function PortfolioCta() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl border-t border-border pt-14 sm:pt-16">
          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">
              Ihr Projekt
            </p>
          </Reveal>
          <Reveal variant="slide" delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Möchten Sie Ihr Unternehmen ebenfalls professionell präsentieren?
            </h2>
          </Reveal>
          <Reveal variant="slide" delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Erzählen Sie mir von Ihrem Projekt. Gemeinsam schauen wir, welche
              Lösung zu Ihrem Unternehmen passt.
            </p>
          </Reveal>
          <Reveal variant="slide" delay={0.16}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/kontakt" variant="primary" size="lg">
                Kostenloses Erstgespräch vereinbaren
              </Button>
              <Button href="/kontakt" variant="secondary" size="lg">
                Kontakt aufnehmen
              </Button>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={0.2}>
            <p className="mt-8 text-sm text-ink-subtle">
              Persönlich · Unverbindlich · Direkt mit Maik Schmidt
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
