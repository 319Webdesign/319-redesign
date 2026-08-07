import { processSteps } from "@/data/site";
import { projects } from "@/data/projects";

export type ServiceSlug =
  | "webdesign"
  | "lokale-seo"
  | "corporate-design"
  | "digitale-loesungen"
  | "webdesign-darmstadt"
  | "seo-darmstadt"
  | "website-relaunch"
  | "homepage-handwerker"
  | "website-wartung"
  | "google-unternehmensprofil";

export type ServiceLanding = {
  slug: ServiceSlug;
  title: string;
  /** Öffentlicher Pfad – Standard: `/leistungen/${slug}` */
  path?: string;
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
    slug: "webdesign",
    title: "Webdesign",
    path: "/webdesign",
    metaTitle: "Professionelles Webdesign für Unternehmen",
    metaDescription:
      "Individuelle Websites für Unternehmen: modernes Webdesign, SEO-Grundlagen, schnelle Ladezeiten und persönliche Betreuung. Jetzt Projekt unverbindlich besprechen.",
    hero: {
      eyebrow: "Professionelles Webdesign",
      headline: "Websites, die Vertrauen schaffen und Kunden gewinnen.",
      lead: "Individuelle Unternehmenswebsites, die professionell wirken, Vertrauen schaffen, bei Google gefunden werden können und Besucher zur Kontaktaufnahme führen.",
      primaryCta: "Kostenloses Erstgespräch vereinbaren",
      secondaryCta: "Webdesign-Projekte ansehen",
      secondaryHref: "/portfolio",
    },
    problem: {
      eyebrow: "Der erste Eindruck zählt",
      title: "Ihre Website arbeitet für Ihr Unternehmen – rund um die Uhr.",
      lead: "Potenzielle Kunden informieren sich häufig online, bevor sie Kontakt aufnehmen.",
      items: [
        {
          title: "Vertrauen schaffen",
          text: "Ein professioneller Auftritt vermittelt Qualität und schafft Vertrauen.",
        },
        {
          title: "Gefunden werden",
          text: "Saubere Struktur und Technik schaffen die Grundlage für Sichtbarkeit bei Google.",
        },
        {
          title: "Anfragen erleichtern",
          text: "Klare Inhalte und Kontaktwege führen Besucher zum nächsten Schritt.",
        },
      ],
    },
    solution: {
      eyebrow: "Webdesign von 319Webdesign",
      title: "Nicht einfach eine schöne Website.",
      lead: "Gestaltung, Nutzerführung, Technik und Sichtbarkeit greifen ineinander.",
      paragraphs: [
        "Jede Website wird individuell auf Unternehmen, Zielgruppe und Leistungen abgestimmt.",
        "SEO-Grundlagen, mobile Optimierung und klare Kontaktwege sind von Anfang an mitgedacht.",
      ],
    },
    benefits: {
      eyebrow: "Leistungsumfang",
      title: "Alles, was Ihre neue Website braucht.",
      lead: "Professionelles Webdesign aus Kundensicht.",
      items: [
        {
          title: "Individuelles Design",
          text: "Keine Baukästen – Gestaltung passend zu Ihrem Unternehmen.",
        },
        {
          title: "SEO-Grundlagen inklusive",
          text: "Struktur, Meta-Daten und technische Basis bereits bei der Erstellung.",
        },
        {
          title: "Mobile optimiert",
          text: "Gute Darstellung auf Smartphone, Tablet und Desktop.",
        },
        {
          title: "Persönliche Betreuung",
          text: "Direkter Ansprechpartner – auch nach dem Livegang optional möglich.",
        },
      ],
    },
    relatedProjectHrefs: [
      "/portfolio/he-immologis",
      "/portfolio/elektrotechnik-betrieb",
      "/portfolio/heinerfilm",
    ],
    faq: [
      {
        question: "Was kostet eine professionelle Website?",
        answer:
          "Jedes Projekt ist individuell, daher gibt es keinen festen Pauschalpreis. Nach einem unverbindlichen Erstgespräch erhalten Sie ein transparentes Angebot.",
      },
      {
        question: "Wie lange dauert die Erstellung einer Website?",
        answer:
          "Die meisten Projekte benötigen zwischen 3 und 8 Wochen – abhängig vom Umfang und der Bereitstellung der Inhalte.",
      },
      {
        question: "Ist SEO enthalten?",
        answer:
          "Grundlegende SEO-Maßnahmen sind enthalten. Weiterführende Suchmaschinenoptimierung ist separat buchbar.",
      },
      {
        question: "Für wen ist das Angebot gedacht?",
        answer:
          "Für Handwerksbetriebe, regionale Unternehmen und Dienstleister, die professionell auftreten und Anfragen gewinnen möchten.",
      },
    ],
    cta: {
      title: "Zeit für eine Website, die zu Ihrem Unternehmen passt?",
      lead: "In einem unverbindlichen Erstgespräch schauen wir gemeinsam, wie Ihre neue Website aufgebaut sein sollte.",
    },
  },
  {
    slug: "lokale-seo",
    title: "Lokale SEO",
    path: "/lokale-seo",
    metaTitle: "Lokale SEO für Unternehmen",
    metaDescription:
      "Mit lokaler SEO bei Google besser gefunden werden: Website, Google Unternehmensprofil, lokale Inhalte und technische Optimierung aus einer Hand.",
    hero: {
      eyebrow: "Lokale Suchmaschinenoptimierung",
      headline:
        "Lokale SEO für Unternehmen, die bei Google gefunden werden wollen.",
      lead: "Individuelle lokale SEO für Handwerksbetriebe und regionale Unternehmen – verständlich, transparent und ohne Ranking-Garantien.",
      primaryCta: "SEO-Potenzial besprechen",
      secondaryCta: "SEO Darmstadt",
      secondaryHref: "/leistungen/seo-darmstadt",
    },
    problem: {
      eyebrow: "Sichtbarkeit",
      title: "Eine gute Website bringt wenig, wenn sie niemand findet.",
      lead: "Viele Unternehmen besitzen bereits eine Website, werden bei relevanten regionalen Suchanfragen aber kaum gefunden.",
      items: [
        {
          title: "Kunden suchen bereits",
          text: "Nach Leistungen in Ihrer Region – bei Google.",
        },
        {
          title: "Website allein reicht nicht",
          text: "Ohne lokale Optimierung bleibt Sichtbarkeit oft aus.",
        },
        {
          title: "Mehrere Signale zählen",
          text: "Website, Unternehmensprofil und Inhalte greifen ineinander.",
        },
      ],
    },
    solution: {
      eyebrow: "Local SEO",
      title: "Was bedeutet lokale Suchmaschinenoptimierung?",
      lead: "Maßnahmen, mit denen Unternehmen bei Suchanfragen mit regionalem Bezug besser gefunden werden können.",
      paragraphs: [
        "Von der Keyword-Analyse über OnPage-SEO bis zum Google Unternehmensprofil.",
        "Weiterführende lokale SEO ist separat von den SEO-Grundlagen neuer Websites.",
      ],
    },
    benefits: {
      eyebrow: "Leistungen",
      title: "Was wir für Ihre lokale Sichtbarkeit tun.",
      lead: "Konkrete Maßnahmen statt Buzzwords.",
      items: [
        {
          title: "Keyword- & Suchintentionanalyse",
          text: "Wonach suchen Kunden in Ihrer Region wirklich?",
        },
        {
          title: "Website & OnPage",
          text: "Struktur, Inhalte und technische Grundlagen.",
        },
        {
          title: "Google Unternehmensprofil",
          text: "Abstimmung von Profil und Website.",
        },
        {
          title: "Weiterentwicklung",
          text: "Beobachtung und gezielte Verbesserungen über die Zeit.",
        },
      ],
    },
    relatedProjectHrefs: ["/portfolio/he-immologis"],
    faq: [
      {
        question: "Kann 319Webdesign Platz 1 bei Google garantieren?",
        answer:
          "Nein. Seriöse Suchmaschinenoptimierung kann keine bestimmte Position garantieren.",
      },
      {
        question: "Ist SEO bei einer neuen Website bereits enthalten?",
        answer:
          "SEO-Grundlagen ja – weiterführende lokale SEO wird separat angeboten.",
      },
    ],
    cta: {
      title: "Werden Sie dort sichtbar, wo Ihre Kunden suchen.",
      lead: "Lassen Sie uns prüfen, welche Maßnahmen für mehr lokale Sichtbarkeit sinnvoll sind.",
    },
  },
  {
    slug: "corporate-design",
    title: "Corporate Design",
    path: "/corporate-design",
    metaTitle: "Corporate Design für Unternehmen",
    metaDescription:
      "Einheitlicher Unternehmensauftritt mit Logo, Farben, Typografie, E-Mail-Signaturen und weiteren Gestaltungselementen. Corporate Design individuell von 319Webdesign.",
    hero: {
      eyebrow: "Corporate Design",
      headline: "Ein Auftritt, der überall nach Ihrem Unternehmen aussieht.",
      lead: "Professionelles Corporate Design für einen einheitlichen Unternehmensauftritt – von Logo und Farben bis zu E-Mail-Signatur und Geschäftsausstattung.",
      primaryCta: "Unternehmensauftritt besprechen",
      secondaryCta: "Mehr erfahren",
      secondaryHref: "/corporate-design",
    },
    problem: {
      eyebrow: "Der erste Eindruck",
      title: "Professionalität entsteht nicht erst auf Ihrer Website.",
      lead: "Wenn Website, E-Mail und Geschäftsmaterialien unterschiedlich aussehen, entsteht schnell ein uneinheitlicher Eindruck.",
      items: [
        {
          title: "Uneinheitlicher Auftritt",
          text: "Verschiedene Kontaktpunkte wirken wie von unterschiedlichen Unternehmen.",
        },
        {
          title: "Veraltetes Logo",
          text: "Das Logo passt nicht mehr – oder fehlt in digitalen Anwendungen.",
        },
        {
          title: "Keine klare Linie",
          text: "Farben und Schriften sind nicht definiert und werden beliebig eingesetzt.",
        },
      ],
    },
    solution: {
      eyebrow: "Corporate Design",
      title: "Ein konsistentes visuelles Erscheinungsbild.",
      lead: "Farben, Schriften, Logo und weitere Elemente werden so aufeinander abgestimmt, dass Ihr Unternehmen überall wiedererkennbar bleibt.",
      paragraphs: [
        "Der Umfang wird individuell auf Ihr Unternehmen abgestimmt.",
        "Bestehende Logos können häufig beibehalten und in ein Gestaltungssystem integriert werden.",
      ],
    },
    benefits: {
      eyebrow: "Leistungsumfang",
      title: "Was zum Unternehmensauftritt gehören kann.",
      lead: "Nicht alles ist automatisch Bestandteil – der Umfang wird gemeinsam festgelegt.",
      items: [
        {
          title: "Logo & Farbwelt",
          text: "Visueller Ausgangspunkt und klare Farbdefinition.",
        },
        {
          title: "Typografie & System",
          text: "Schriften und Gestaltungsregeln für einen einheitlichen Auftritt.",
        },
        {
          title: "E-Mail & Ausstattung",
          text: "HTML-Signaturen, Visitenkarten und digitale Vorlagen nach Bedarf.",
        },
        {
          title: "Website-Abstimmung",
          text: "Corporate Design und Webdesign greifen ineinander.",
        },
      ],
    },
    relatedProjectHrefs: [
      "/portfolio/he-immologis",
      "/portfolio/elektrotechnik-betrieb",
    ],
    faq: [
      {
        question: "Brauche ich ein komplett neues Logo?",
        answer:
          "Nein. Wenn ein bestehendes Logo weiterhin zum Unternehmen passt, kann es häufig beibehalten und in ein neues Gestaltungssystem integriert werden.",
      },
      {
        question: "Kann ich auch nur einzelne Elemente beauftragen?",
        answer:
          "Ja. Je nach Bedarf können auch einzelne Bestandteile wie eine E-Mail-Signatur umgesetzt werden.",
      },
    ],
    cta: {
      title: "Zeit für einen Auftritt, der wirklich zusammenpasst?",
      lead: "Lassen Sie uns gemeinsam schauen, welche Gestaltungselemente Ihr Unternehmen benötigt.",
    },
  },
  {
    slug: "digitale-loesungen",
    title: "Digitale Lösungen",
    path: "/digitale-loesungen",
    metaTitle: "Digitale Lösungen für Unternehmen",
    metaDescription:
      "Formulare, Terminbuchung, CRM-Anbindungen, Schnittstellen und praktische Automatisierungen für Unternehmen – individuell umgesetzt von 319Webdesign.",
    hero: {
      eyebrow: "Digitale Lösungen",
      headline:
        "Digitale Lösungen, die Ihren Unternehmensalltag einfacher machen.",
      lead: "Von Formularen über Terminbuchungen bis hin zu Schnittstellen und Automatisierungen – praktische Funktionen, die Prozesse vereinfachen.",
      primaryCta: "Digitale Lösung besprechen",
      secondaryCta: "Mehr erfahren",
      secondaryHref: "/digitale-loesungen",
    },
    problem: {
      eyebrow: "Wenn digital noch umständlich ist",
      title: "Viele kleine Prozesse kosten jeden Tag unnötig Zeit.",
      lead: "Oft reichen gezielte Funktionen, um wiederkehrende Abläufe deutlich einfacher zu machen.",
      items: [
        {
          title: "Unstrukturierte Anfragen",
          text: "Anfragen kommen unübersichtlich per E-Mail oder Telefon.",
        },
        {
          title: "Manuelle Abstimmung",
          text: "Termine und Daten müssen ständig manuell organisiert werden.",
        },
        {
          title: "Medienbrüche",
          text: "Informationen werden mehrfach eingetragen und gehen verloren.",
        },
      ],
    },
    solution: {
      eyebrow: "Praktisch statt kompliziert",
      title: "Digitale Lösungen müssen nicht kompliziert sein.",
      lead: "Gemeint sind praktische Funktionen, die Webauftritt und Abläufe sinnvoll ergänzen.",
      paragraphs: [
        "Ziel ist nicht mehr Technik, sondern weniger Aufwand.",
        "Der Umfang wird individuell geprüft – auch einzelne Funktionen sind möglich.",
      ],
    },
    benefits: {
      eyebrow: "Möglichkeiten",
      title: "Funktionen, die den Alltag vereinfachen.",
      lead: "Je nach Bedarf und technischen Voraussetzungen.",
      items: [
        {
          title: "Formulare & Anfragen",
          text: "Kontakt-, Anfrage- und Bewerbungsformulare mit klarer Weiterleitung.",
        },
        {
          title: "Terminbuchung",
          text: "Integration geeigneter Buchungs- oder Kalendersysteme.",
        },
        {
          title: "Schnittstellen",
          text: "Anbindung bestehender Systeme, wenn technisch möglich – z. B. onOffice.",
        },
        {
          title: "Einfache Automatisierungen",
          text: "Wiederkehrende Schritte sinnvoll automatisieren – ohne IT-Großprojekt.",
        },
      ],
    },
    relatedProjectHrefs: ["/portfolio/he-immologis"],
    faq: [
      {
        question: "Kann ich auch nur ein Formular erstellen lassen?",
        answer:
          "Ja. Auch einzelne digitale Funktionen können umgesetzt werden, sofern dies technisch sinnvoll ist.",
      },
      {
        question: "Können bestehende Systeme angebunden werden?",
        answer:
          "Ja, sofern das jeweilige System eine nutzbare Schnittstelle bereitstellt. Der Umfang wird vorab individuell geprüft.",
      },
    ],
    cta: {
      title: "Welcher Ablauf könnte in Ihrem Unternehmen einfacher sein?",
      lead: "Erzählen Sie mir, was heute unnötig Zeit kostet – wir prüfen gemeinsam die sinnvolle Lösung.",
    },
  },
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
    title: "Website-Betreuung",
    path: "/betreuung",
    metaTitle: "Website Wartung & Betreuung für Unternehmen",
    metaDescription:
      "Website-Wartung für 79 € monatlich: Updates, Backups, Support und bis zu 2 Arbeitsstunden für kleinere Änderungen. Persönliche Betreuung durch 319Webdesign.",
    hero: {
      eyebrow: "Website-Betreuung & Wartung",
      headline: "Ihre Website läuft. Wir kümmern uns um den Rest.",
      lead: "Mit der Website-Betreuung von 319Webdesign haben Sie auch nach dem Livegang einen festen Ansprechpartner für Wartung, Updates, Backups und kleinere Änderungen.",
      primaryCta: "Betreuung anfragen",
      secondaryCta: "Wartungspaket ansehen",
      secondaryHref: "/betreuung#wartungspaket",
    },
    problem: {
      eyebrow: "Nach dem Livegang",
      title: "Eine Website ist nach dem Livegang nicht einfach erledigt.",
      lead: "Inhalte ändern sich, Systeme werden aktualisiert und manchmal müssen kurzfristig kleinere Anpassungen vorgenommen werden.",
      items: [
        {
          title: "Regelmäßige Pflege",
          text: "Updates und technische Pflege gehören zum laufenden Betrieb.",
        },
        {
          title: "Kleine Änderungen",
          text: "Texte, Bilder oder Öffnungszeiten müssen oft kurzfristig angepasst werden.",
        },
        {
          title: "Fester Ansprechpartner",
          text: "Bei Fragen oder Problemen sollte klar sein, wer hilft.",
        },
      ],
    },
    solution: {
      eyebrow: "Persönliche Betreuung",
      title: "Ein Ansprechpartner für alles rund um Ihre Website.",
      lead: "Wartung, Aktualisierungen, Backups und kleinere Änderungen – optional und transparent.",
      paragraphs: [
        "Das Wartungspaket kostet 79 € pro Monat und enthält bis zu zwei Arbeitsstunden für kleinere Anpassungen.",
        "Die Betreuung ist nicht verpflichtend – sinnvoll, wenn Sie die technische Pflege nicht selbst übernehmen möchten.",
      ],
    },
    benefits: {
      eyebrow: "Im Paket",
      title: "Was für 79 € im Monat enthalten ist.",
      lead: "Klar und verständlich – ohne komplizierte Paketstufen.",
      items: [
        {
          title: "Wartung & Updates",
          text: "Regelmäßige technische Pflege und notwendige Aktualisierungen.",
        },
        {
          title: "Backups",
          text: "Regelmäßige Sicherungen als zusätzliche Absicherung.",
        },
        {
          title: "2 Arbeitsstunden",
          text: "Kleinere Änderungen ohne jedes Mal eine neue Rechnung.",
        },
        {
          title: "Persönlicher Support",
          text: "Direkter Ansprechpartner – kein anonymes Ticketsystem.",
        },
      ],
    },
    relatedProjectHrefs: [
      "/portfolio/elektrotechnik-betrieb",
      "/portfolio/he-immologis",
    ],
    processNote:
      "Auch bestehende Websites können nach technischer Prüfung in die Betreuung übernommen werden.",
    faq: [
      {
        question: "Ist das Wartungspaket verpflichtend?",
        answer:
          "Nein. Die laufende Betreuung ist optional. Kunden können ihre Website selbstverständlich auch selbst verwalten.",
      },
      {
        question: "Was kostet die Website-Betreuung?",
        answer:
          "Das Wartungspaket kostet 79 € pro Monat und beinhaltet Wartung, Aktualisierungen, Backups sowie bis zu zwei Arbeitsstunden für kleinere Änderungen.",
      },
      {
        question: "Kann auch eine bestehende Website betreut werden?",
        answer:
          "Grundsätzlich ja, sofern die Website nach einer technischen Prüfung für eine Übernahme geeignet ist.",
      },
    ],
    cta: {
      title: "Sie kümmern sich um Ihr Unternehmen. Ich kümmere mich um Ihre Website.",
      lead: "Lassen Sie uns unverbindlich prüfen, ob die laufende Betreuung zu Ihnen passt.",
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
      secondaryHref: "/lokale-seo",
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
