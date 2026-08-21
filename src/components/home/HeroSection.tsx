import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function HeroSection() {
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
      <div className="relative mx-auto flex min-h-[min(85vh,52rem)] max-w-6xl items-center px-6 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          <Reveal variant="slide">
            <h1 className="text-balance font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Websites, die Vertrauen schaffen und Kunden gewinnen.
            </h1>
          </Reveal>
          <Reveal variant="slide" delay={0.06}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Für Handwerksbetriebe und regionale Unternehmen entwickeln wir
              moderne Websites, die professionell wirken, bei Google gefunden
              werden und planbar neue Anfragen bringen.
            </p>
          </Reveal>
          <Reveal variant="slide" delay={0.12}>
            <div className="mt-8 flex flex-row flex-wrap gap-3">
              <Button href="/kontakt" variant="primary" size="md">
                Kostenloses Erstgespräch
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="md"
                className="border-white/70 text-white hover:bg-white/10 hover:text-white"
              >
                Referenzen ansehen
              </Button>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={0.22}>
            <p className="mt-8 text-sm text-white/60">
              {siteConfig.googleRating} Google · {siteConfig.projectCount}{" "}
              Projekte · {siteConfig.region}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
