import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { problems } from "@/data/site";

export function ProblemSection() {
  return (
    <section className="border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Das Problem"
            title="Warum viele Unternehmenswebsites keine Kunden bringen"
            lead="Nicht weil „eine Homepage reicht“ — sondern weil Design, Auffindbarkeit und nächste Schritte fehlen."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {problems.map((item, index) => (
            <Reveal key={item.title} variant="slide" delay={index * 0.05}>
              <div className="border-t border-border pt-6">
                <p className="font-display text-sm tabular-nums text-brand/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={0.15}>
          <p className="mt-16 font-display text-2xl font-medium tracking-tight text-brand sm:text-3xl">
            So lösen wir das.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
