import { SiteShell } from "@/components/layout/SiteShell";
import { Button, SectionHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 py-24 sm:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-brand">
          404
        </p>
        <SectionHeader
          title="Seite nicht gefunden"
          lead="Diese Adresse gibt es nicht oder sie wurde verschoben. Über die Startseite oder die Leistungen finden Sie den passenden Inhalt."
          as="h1"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" variant="primary" size="lg">
            Zur Startseite
          </Button>
          <Button href="/leistungen" variant="secondary" size="lg">
            Leistungen ansehen
          </Button>
          <Button href="/kontakt" variant="ghost" size="lg">
            Kontakt
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}
