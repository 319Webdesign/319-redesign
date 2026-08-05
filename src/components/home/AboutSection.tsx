import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section className="border-b border-border bg-bg-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <Reveal variant="scale" className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-brand">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_#2a6bb5_0%,_transparent_50%),radial-gradient(ellipse_at_80%_80%,_#0f2d54_0%,_transparent_45%)]"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="font-display text-3xl font-medium text-white">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm text-white/70">
                Webdesigner · {siteConfig.region}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal variant="slide">
            <SectionHeader
              eyebrow="Über mich"
              title="Kein Agentur-Logo. Ein Ansprechpartner."
              lead="Ich habe 319Webdesign gegründet, weil regionale Betriebe jemanden brauchen, der zuhört, mitdenkt und liefert — ohne Umwege."
            />
          </Reveal>
          <Reveal variant="slide" delay={0.08}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                Viele Websites entstehen in Agentur-Prozessen: Briefing, Pingpong,
                fertig. Was fehlt, ist die direkte Linie zwischen deinem Betrieb und
                dem Menschen, der die Seite baut.
              </p>
              <p>
                Bei mir arbeitest du persönlich mit mir. Das bedeutet kurze Wege,
                ehrliches Feedback und ein Qualitätsanspruch, den ich mit meinem
                Namen verbinde.
              </p>
              <p>
                Premium heißt hier nicht „teuer um der Optik willen“ — sondern:
                klar, schnell, lokal sichtbar und so gebaut, dass Anfragen
                entstehen.
              </p>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={0.14}>
            <div className="mt-10">
              <Button href="/ueber-mich" variant="secondary" size="lg">
                Mehr über mich
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
