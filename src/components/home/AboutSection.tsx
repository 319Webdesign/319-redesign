import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section className="bg-brand">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <Reveal variant="scale" className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/maik.webp"
              alt="Maik Schmidt, Inhaber von 319Webdesign"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal variant="fade">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">
              Über mich
            </p>
          </Reveal>

          <Reveal variant="slide" delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Kein Agentur-Logo. Ein Ansprechpartner.
            </h2>
          </Reveal>

          <Reveal variant="slide" delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Ich habe {siteConfig.name} gegründet, weil regionale Betriebe
              jemanden brauchen, der zuhört, mitdenkt und liefert — ohne Umwege.
            </p>
          </Reveal>

          <Reveal variant="slide" delay={0.14}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                Viele Websites entstehen in Agentur-Prozessen: Briefing, Pingpong,
                fertig. Was fehlt, ist die direkte Linie zwischen deinem Betrieb
                und dem Menschen, der die Seite baut.
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

          <Reveal variant="fade" delay={0.18}>
            <div className="mt-10">
              <Button href="/uber-mich" variant="primary" size="lg">
                Mehr über mich
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
