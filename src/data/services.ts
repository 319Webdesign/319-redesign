import { processSteps, projects } from "@/data/site";

export type ServiceSlug =
  | "webdesign-darmstadt"
  | "seo-darmstadt"
  | "website-relaunch"
  | "homepage-handwerker"
  | "website-wartung"
  | "google-unternehmensprofil";

export type ServiceLanding = {
  slug: ServiceSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  solution: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  relatedProjectHrefs: string[];
  processNote?: string;
  faq: { question: string; answer: string }[];
  cta: {
    title: string;
    lead: string;
  };
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "webdesign-darmstadt",
    title: "Webdesign Darmstadt",
    metaTitle: "Webdesign Darmstadt · Premium Websites für Betriebe",
    metaDescription:
      "Webdesign in Darmstadt für Handwerk und regionale Unternehmen. Individuell, schnell, SEO-stark — persönliche Betreuung statt Agentur-Anonymität.",
    hero: {
      eyebrow: "Webdesign Darmstadt",
      headline: "Websites, die lokal Vertrauen aufbauen und Anfragen bringen",
      lead: "Premium Webdesign für Handwerksbetriebe und regionale Unternehmen im Raum Darmstadt — persönlich betreut, ohne Baukasten.",
      primaryCta: "Kostenloses Erstgespräch",
      secondaryCta: "Referenzen ansehen",
      secondaryHref: "/portfolio",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Eine Website ohne Wirkung kostet dich Aufträge",
      lead: "Viele Betriebe haben „eine Homepage“ — aber keine Seite, die überzeugt, gefunden wird und zum Anruf führt.",
      items: [
        {
          title: "Austauschbares Design",
          text: "Baukasten-Look signalisiert Durchschnitt. Genau das Vertrauen, das Auftraggeber brauchen, fehlt.",
        },
        {
          title: "Keine lokale Klarheit",
          text: "Wer du bist, wo du arbeitest und warum man dich wählen soll, steht nirgends greifbar.",
        },
        {
          title: "Schwache Conversion",
          text: "Besucher scrollen — und gehen. Ohne klare nächste Schritte bleiben Anfragen aus.",
        },
      ],
    },
    solution: {
      eyebrow: "Die Lösung",
      title: "Individuelles Webdesign mit einem Ziel: qualifizierte Anfragen",
      lead: "Ich baue keine Visitenkarte online — sondern eine Website, die deinen Betrieb premium und greifbar macht.",
      paragraphs: [
        "Von der Struktur über Texte und Design bis zur technischen Umsetzung: alles aus einer Hand, direkt mit mir.",
        "SEO, Ladezeiten und mobile Nutzung sind von Anfang an Teil des Konzepts — nicht ein Nachgedanke.",
      ],
    },
    benefits: {
      eyebrow: "Vorteile",
      title: "Was du konkret bekommst",
      lead: "Ergebnisorientiert — nicht Feature-Listen.",
      items: [
        {
          title: "Design, das zu deinem Betrieb passt",
          text: "Keine Templates. Eine klare visuelle Sprache, die Handwerk und Regionalität ernst nimmt.",
        },
        {
          title: "Struktur für Google und Menschen",
          text: "Seitenaufbau, Headings und Inhalte so, dass Besucher und Suchmaschinen dich verstehen.",
        },
        {
          title: "Schnelle, moderne Technik",
          text: "Kurze Ladezeiten, saubere Umsetzung, ohne Page-Builder-Ballast.",
        },
        {
          title: "Persönliche Betreuung",
          text: "Kurze Wege, ehrliches Feedback, Entscheidungen ohne Agentur-Umwege.",
        },
      ],
    },
    relatedProjectHrefs: [
      "/portfolio/elektrotechnik-betrieb",
      "/portfolio/he-immologis",
    ],
    faq: [
      {
        question: "Was kostet Webdesign in Darmstadt bei dir?",
        answer:
          "Das hängt vom Umfang ab. Im Erstgespräch klären wir Ziele und Seitenumfang — danach bekommst du ein klares Angebot.",
      },
      {
        question: "Wie lange dauert ein neues Webdesign-Projekt?",
        answer:
          "Typisch wenige Wochen bis etwa zwei Monate — abhängig von Feedback und Content-Lieferung.",
      },
      {
        question: "Erstelle ich auch die Texte?",
        answer:
          "Ja, auf Wunsch. Wir können Inhalte gemeinsam erarbeiten oder vorhandene Texte professionell schärfen.",
      },
      {
        question: "Für wen ist das Angebot gedacht?",
        answer:
          "Für Handwerksbetriebe und regionale Unternehmen im Raum Darmstadt / Rhein-Main, die Anfragen wollen — nicht nur Online-Präsenz.",
      },
    ],
    cta: {
      title: "Bereit für Webdesign, das wirkt?",
      lead: "Lass uns in einem kostenlosen Erstgespräch klären, was deine Website wirklich leisten soll.",
    },
  },
  {
    slug: "seo-darmstadt",
    title: "SEO Darmstadt",
    metaTitle: "SEO Darmstadt · Lokale Sichtbarkeit für Betriebe",
    metaDescription:
      "SEO in Darmstadt für Handwerk und regionale Unternehmen. Lokale Suchmaschinenoptimierung, die Anfragen bringt — persönlich und nachhaltig.",
    hero: {
      eyebrow: "SEO Darmstadt",
      headline: "Lokal gefunden werden — wenn Kunden nach dir suchen",
      lead: "Suchmaschinenoptimierung für Betriebe im Raum Darmstadt: Struktur, Inhalte und Technik, die Sichtbarkeit aufbauen.",
      primaryCta: "Kostenloses Erstgespräch",
      secondaryCta: "Leistungen ansehen",
      secondaryHref: "/leistungen",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Ohne lokale SEO bleibst du unsichtbar",
      lead: "Die beste Website hilft wenig, wenn niemand dich bei Google findet — genau dann, wenn der Bedarf da ist.",
      items: [
        {
          title: "Falsche Keywords",
          text: "Seiten ranken für Begriffe, die keine Aufträge bringen — oder gar nicht.",
        },
        {
          title: "Schwache Seitenstruktur",
          text: "Wichtige Leistungen und Orte sind versteckt oder fehlen komplett.",
        },
        {
          title: "Technik bremst Ranking",
          text: "Langsame Ladezeiten, unklare Headings und fehlende Basis-SEO kosten Positionen.",
        },
      ],
    },
    solution: {
      eyebrow: "Die Lösung",
      title: "Lokales SEO, das zu deinem Betrieb passt",
      lead: "Ich optimiere nicht „irgendwas“ — sondern die Themen und Orte, mit denen deine Kunden wirklich suchen.",
      paragraphs: [
        "Analyse, Keyword-Strategie, On-Page-Optimierung und technische Grundlage gehören zusammen.",
        "Wenn nötig, bauen wir fehlende Leistungs- und Ortsseiten so, dass sie Conversion und SEO gleichzeitig bedienen.",
      ],
    },
    benefits: {
      eyebrow: "Vorteile",
      title: "Was SEO bei 319Webdesign bedeutet",
      lead: "Nachhaltig und nachvollziehbar — kein Versprechen von Platz 1 über Nacht.",
      items: [
        {
          title: "Lokaler Fokus",
          text: "Darmstadt, Umgebung und deine echten Einsatzgebiete — nicht generische Rankings.",
        },
        {
          title: "Inhalte mit Kaufintention",
          text: "Seiten und Texte, die Suchende zu Anfragen führen.",
        },
        {
          title: "Technische Basis",
          text: "Schnelle Seiten, saubere Struktur, sinnvolle interne Verlinkung.",
        },
        {
          title: "Messbar und ehrlich",
          text: "Klare Prioritäten und realistische Erwartungen statt SEO-Märchen.",
        },
      ],
    },
    relatedProjectHrefs: ["/portfolio/he-immologis"],
    faq: [
      {
        question: "Wie schnell sehe ich SEO-Ergebnisse?",
        answer:
          "Erste Impulse oft innerhalb Wochen, stabile Rankings brauchen meist Monate. Wir priorisieren Quick Wins und Fundament parallel.",
      },
      {
        question: "Macht SEO ohne neue Website Sinn?",
        answer:
          "Manchmal ja. Oft lohnt sich aber eine strukturelle Verbesserung der Seite — sonst bleibt Optimierung Kosmetik.",
      },
      {
        question: "Arbeitest du mit Black-Hat-Methoden?",
        answer:
          "Nein. Saubere, nachhaltige Maßnahmen — riskante Tricks kommen nicht infrage.",
      },
    ],
    cta: {
      title: "Mehr lokale Anfragen über Google?",
      lead: "Im Erstgespräch schauen wir, wo du stehst und welche Hebel am schnellsten wirken.",
    },
  },
  {
    slug: "website-relaunch",
    title: "Website Relaunch",
    metaTitle: "Website Relaunch · Von veraltet zu anfrageorientiert",
    metaDescription:
      "Website Relaunch für Handwerk und regionale Unternehmen: neues Design, moderne Technik, bessere Conversion und SEO — persönlich betreut.",
    hero: {
      eyebrow: "Website Relaunch",
      headline: "Deine alte Website verdient einen echten Neustart",
      lead: "Relaunch heißt: Design, Technik und Conversion neu denken — nicht nur Farben tauschen.",
      primaryCta: "Kostenloses Erstgespräch",
      secondaryCta: "Vorher/Nachher-Idee",
      secondaryHref: "/#vorher-nachher",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Ein Redesign allein rettet selten Anfragen",
      lead: "Viele „Relaunches“ ändern nur die Optik. Struktur, Inhalte und Technik bleiben das eigentliche Problem.",
      items: [
        {
          title: "Veraltete Technik",
          text: "Langsam, unsicher, schwer erweiterbar — und schlecht für Google.",
        },
        {
          title: "Unklare Botschaft",
          text: "Besucher verstehen in Sekunden nicht, warum sie dich wählen sollen.",
        },
        {
          title: "SEO geht verloren",
          text: "Schlechte Migration vernichtet Rankings, die jahrelang aufgebaut wurden.",
        },
      ],
    },
    solution: {
      eyebrow: "Die Lösung",
      title: "Relaunch mit Plan: Design, SEO und Conversion",
      lead: "Wir erhalten, was funktioniert — und ersetzen, was Anfragen verhindert.",
      paragraphs: [
        "Konzept vor Pixeln: Zielgruppe, Leistungen, lokale Signale und klare Call-to-Actions.",
        "Technischer Neustart ohne Baukasten-Limitierungen, inkl. sauberer Weiterleitungen wo nötig.",
      ],
    },
    benefits: {
      eyebrow: "Vorteile",
      title: "Warum ein Relaunch bei mir anders läuft",
      lead: "Transformation statt Facelift.",
      items: [
        {
          title: "Modern und premium",
          text: "Zeitgemäßes Design mit Weißraum und Klarheit — kein Agentur-Klischee 2018.",
        },
        {
          title: "SEO-sichere Migration",
          text: "URLs, Redirects und Struktur mitgedacht, damit Rankings nicht unnötig sterben.",
        },
        {
          title: "Mehr Anfragen im Fokus",
          text: "Jeder Bereich hat eine Aufgabe — bis zum Erstgespräch.",
        },
        {
          title: "Persönlicher Prozess",
          text: "Du arbeitest direkt mit mir, nicht mit drei Zwischenstellen.",
        },
      ],
    },
    relatedProjectHrefs: ["/portfolio/elektrotechnik-betrieb"],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Redesign und Relaunch?",
        answer:
          "Ein Redesign ändert vor allem die Optik. Ein Relaunch überarbeitet auch Struktur, Technik und Conversion — oft inkl. Plattformwechsel.",
      },
      {
        question: "Muss die Domain gleich bleiben?",
        answer:
          "In der Regel ja. Domain und wichtige URLs behalten wir möglichst — inklusive Redirects bei Änderungen.",
      },
      {
        question: "Wie lange dauert ein Relaunch?",
        answer:
          "Abhängig vom Umfang meist einige Wochen bis ca. zwei Monate.",
      },
    ],
    cta: {
      title: "Zeit für den Neustart?",
      lead: "Wir schauen uns deine aktuelle Seite an und skizzieren den sinnvollsten Relaunch-Weg.",
    },
  },
  {
    slug: "homepage-handwerker",
    title: "Homepage für Handwerker",
    metaTitle: "Homepage für Handwerker · Webdesign das Aufträge bringt",
    metaDescription:
      "Homepage für Handwerker: Webdesign speziell für Handwerksbetriebe — klar, lokal, anfrageorientiert. Persönliche Betreuung aus dem Raum Darmstadt.",
    hero: {
      eyebrow: "Homepage für Handwerker",
      headline: "Websites, die Handwerk als Auftraggeber ernst nehmen",
      lead: "Keine austauschbare Firmenhomepage — sondern eine Seite, die Vertrauen schafft und Anrufe generiert.",
      primaryCta: "Kostenloses Erstgespräch",
      secondaryCta: "Referenzen Handwerk",
      secondaryHref: "/portfolio",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Handwerk braucht andere Websites als Startups",
      lead: "Viele Baukästen und Agentur-Templates sprechen die falsche Sprache — zu generisch, zu soft, zu unklar.",
      items: [
        {
          title: "Leistungen versinken",
          text: "Was du kannst und wo du tätig bist, steht nicht klar genug.",
        },
        {
          title: "Kein Vertrauensbeweis",
          text: "Projekte, Bewertungen und Persönlichkeit fehlen oder wirken nachrangig.",
        },
        {
          title: "Anfrage zu kompliziert",
          text: "Kunden wollen anrufen oder kurz schreiben — nicht Formular-Hindernisse überwinden.",
        },
      ],
    },
    solution: {
      eyebrow: "Die Lösung",
      title: "Eine Homepage, die zu Betrieben und Bauherren passt",
      lead: "Ich kenne die Anforderungen regionaler Handwerksbetriebe — und baue danach.",
      paragraphs: [
        "Klare Leistungsseiten, starke Projektfotos, lokale Signale und CTAs, die zum Telefon passen.",
        "Persönliche Betreuung statt Agentur-Prozess: du sprichst mit dem, der die Seite umsetzt.",
      ],
    },
    benefits: {
      eyebrow: "Vorteile",
      title: "Was Handwerksbetriebe davon haben",
      lead: "Mehr Klarheit. Mehr Vertrauen. Mehr Anfragen.",
      items: [
        {
          title: "Branchengerecht",
          text: "Sprache, Struktur und Design für echte Aufträge — nicht für Design-Awards.",
        },
        {
          title: "Lokal stark",
          text: "Region, Einsatzgebiet und Auffindbarkeit von Anfang an mitgedacht.",
        },
        {
          title: "Mobil zuerst",
          text: "Die meisten suchen unterwegs — deine Seite muss dort überzeugen.",
        },
        {
          title: "Direkt erreichbar",
          text: "Anruf, WhatsApp, Formular — niedrige Hemmschwelle.",
        },
      ],
    },
    relatedProjectHrefs: [
      "/portfolio/elektrotechnik-betrieb",
      "/portfolio/he-immologis",
    ],
    faq: [
      {
        question: "Für welche Gewerke eignet sich das?",
        answer:
          "Für die meisten regionalen Handwerksbetriebe — von Elektro über SHK bis Garten- und Ausbaugewerke.",
      },
      {
        question: "Brauch ich Fotos von Baustellen?",
        answer:
          "Echte Projektbilder helfen enorm. Fehlen sie, planen wir Alternativen und eine spätere Bildstrecke mit.",
      },
      {
        question: "Kann ich Angebote online verkaufen?",
        answer:
          "Fokus ist Anfragen und Vertrauen. Shop-Funktionen nur, wenn sie wirklich zu deinem Modell passen.",
      },
    ],
    cta: {
      title: "Homepage, die zu deinem Handwerk passt?",
      lead: "Erzähl mir kurz von deinem Betrieb — im Erstgespräch wird klar, was sinnvoll ist.",
    },
  },
  {
    slug: "website-wartung",
    title: "Website-Wartung",
    metaTitle: "Website-Wartung · Updates, Sicherheit, ruhiger Betrieb",
    metaDescription:
      "Website-Wartung für Betriebe: Updates, Sicherheit, Backups und Support — damit deine Seite läuft, während du arbeitest.",
    hero: {
      eyebrow: "Website-Wartung",
      headline: "Deine Website soll laufen — nicht dich beschäftigen",
      lead: "Updates, Sicherheit und Support aus einer Hand. Persönlich, zuverlässig, ohne Ticketsystem-Chaos.",
      primaryCta: "Wartung anfragen",
      secondaryCta: "Alle Leistungen",
      secondaryHref: "/leistungen",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Ungepflegte Websites werden zum Risiko",
      lead: "Veraltete Plugins, fehlende Backups und niemand, der sich kümmert — bis etwas kaputtgeht.",
      items: [
        {
          title: "Sicherheitslücken",
          text: "Nicht aktualisierte Systeme sind ein Einfallstor für Angriffe.",
        },
        {
          title: "Ausfälle ohne Plan",
          text: "Wenn die Seite down ist, fehlt oft der Ansprechpartner mit Kontext.",
        },
        {
          title: "Kleine Änderungen dauern ewig",
          text: "Text ändern, Nummer updaten, Banner entfernen — und niemand reagiert.",
        },
      ],
    },
    solution: {
      eyebrow: "Die Lösung",
      title: "Wartung mit klarem Ansprechpartner",
      lead: "Ich halte deine Website aktuell, sicher und erreichbar — und setze kleine Änderungen unkompliziert um.",
      paragraphs: [
        "Regelmäßige Updates, Monitoring und Backups gehören zum Paket.",
        "Du schreibst mir direkt, wenn etwas geändert werden soll. Kurze Wege statt Agentur-Schlange.",
      ],
    },
    benefits: {
      eyebrow: "Vorteile",
      title: "Was im Wartungspaket steckt",
      lead: "Ruhe im Hintergrund — Fokus auf dein Geschäft.",
      items: [
        {
          title: "Updates & Sicherheit",
          text: "Systeme und Komponenten aktuell halten, bevor Probleme entstehen.",
        },
        {
          title: "Backups",
          text: "Wiederherstellbarkeit, falls etwas schiefläuft.",
        },
        {
          title: "Kleine Content-Änderungen",
          text: "Texte, Kontaktdaten, Hinweise — ohne großes Projekt.",
        },
        {
          title: "Persönlicher Support",
          text: "Du weißt, wer antwortet.",
        },
      ],
    },
    relatedProjectHrefs: [
      "/portfolio/elektrotechnik-betrieb",
      "/portfolio/he-immologis",
    ],
    processNote:
      "Wartung startet nach kurzem Check der bestehenden Seite — unabhängig davon, ob ich sie gebaut habe.",
    faq: [
      {
        question: "Wartest du auch Seiten, die du nicht gebaut hast?",
        answer:
          "Oft ja — nach einem kurzen Technik-Check. Manche Baukästen sind nur eingeschränkt sinnvoll wartbar.",
      },
      {
        question: "Was ist nicht in der Wartung enthalten?",
        answer:
          "Große Redesigns, neue Leistungsseiten oder umfangreiche Features sind eigene Projekte — wir trennen das klar.",
      },
      {
        question: "Wie läuft die Abrechnung?",
        answer:
          "Typischerweise als monatliches Paket. Details klären wir transparent im Gespräch.",
      },
    ],
    cta: {
      title: "Website in ruhige Hände geben?",
      lead: "Schreib mir kurz, welches System du nutzt — ich sage dir ehrlich, ob Wartung Sinn ergibt.",
    },
  },
  {
    slug: "google-unternehmensprofil",
    title: "Google Unternehmensprofil",
    metaTitle: "Google Unternehmensprofil optimieren · Darmstadt",
    metaDescription:
      "Google Unternehmensprofil optimieren für mehr lokale Anfragen: Profil, Fotos, Kategorien, Bewertungen — klar und wirksam für Betriebe.",
    hero: {
      eyebrow: "Google Unternehmensprofil",
      headline: "Mehr Anfragen über Google Maps & die lokale Suche",
      lead: "Dein Unternehmensprofil ist oft der erste Eindruck — wir machen ihn vollständig, glaubwürdig und anfragebereit.",
      primaryCta: "Kostenloses Erstgespräch",
      secondaryCta: "SEO Darmstadt",
      secondaryHref: "/leistungen/seo-darmstadt",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Ein halb leeres Profil kostet lokale Aufträge",
      lead: "Falsche Kategorien, schwache Fotos, unklare Öffnungszeiten — und Wettbewerber wirken professioneller.",
      items: [
        {
          title: "Unvollständige Daten",
          text: "Leistungen, Gebiete und Kontakte sind lückenhaft oder veraltet.",
        },
        {
          title: "Schwache Bilder",
          text: "Stock-Look oder gar keine Fotos — Vertrauen entsteht nicht.",
        },
        {
          title: "Bewertungen ungenutzt",
          text: "Keine Strategie für Reviews und Antworten — Potenzial liegt brach.",
        },
      ],
    },
    solution: {
      eyebrow: "Die Lösung",
      title: "Profil-Setup und Optimierung mit lokalem Fokus",
      lead: "Ich richte dein Google Unternehmensprofil so ein, dass es zu Website und Betrieb passt.",
      paragraphs: [
        "Kategorien, Beschreibung, Leistungen, Fotos und Call-to-Actions werden sauber aufgestellt.",
        "Optional verknüpfen wir das mit Local-SEO auf der Website — für ein stimmiges Gesamtbild.",
      ],
    },
    benefits: {
      eyebrow: "Vorteile",
      title: "Was du davon hast",
      lead: "Besserer erster Eindruck. Mehr Klicks. Mehr Anrufe.",
      items: [
        {
          title: "Vollständiges Profil",
          text: "Alle relevanten Felder klar und konsistent ausgefüllt.",
        },
        {
          title: "Stärkere lokale Präsenz",
          text: "Bessere Chancen in Maps und der lokalen Pack.",
        },
        {
          title: "Bewertungs-Impulse",
          text: "Einfache Prozesse, damit zufriedene Kunden bewerten.",
        },
        {
          title: "Passend zur Website",
          text: "NAP, Leistungen und Botschaft stimmen überein.",
        },
      ],
    },
    relatedProjectHrefs: ["/portfolio/he-immologis"],
    processNote:
      "Ablauf kompakt: Zugang klären → Ist-Analyse → Optimierung → Foto- und Bewertungsplan.",
    faq: [
      {
        question: "Brauch ich dafür eine neue Website?",
        answer:
          "Nicht zwingend. Ein starkes Profil hilft sofort — kombiniert mit einer guten Website wirkt es deutlich stärker.",
      },
      {
        question: "Kannst du bestehende Einträge übernehmen?",
        answer:
          "Ja. Wir prüfen Ownership, Dubletten und Datenqualität und räumen auf.",
      },
      {
        question: "Wie lange dauert die Optimierung?",
        answer:
          "Das Grundsetup oft innerhalb weniger Tage. Fotos und Bewertungen sind ein laufender Prozess.",
      },
    ],
    cta: {
      title: "Google-Profil auf ein neues Level?",
      lead: "Kurz checken, was fehlt — und gezielt nachziehen.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceLanding | undefined {
  return serviceLandings.find((s) => s.slug === slug);
}

export function getRelatedProjects(hrefs: string[]) {
  return projects.filter((p) => hrefs.includes(p.href));
}

export const serviceProcessSteps = processSteps;
