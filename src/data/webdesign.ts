import { getProjectBySlug } from "@/data/projects";

export const webdesignMeta = {
  title: "Professionelles Webdesign für Unternehmen",
  description:
    "Individuelle Websites für Unternehmen: modernes Webdesign, SEO-Grundlagen, schnelle Ladezeiten und persönliche Betreuung. Jetzt Projekt unverbindlich besprechen.",
  ogTitle: "Professionelles Webdesign für Unternehmen | 319Webdesign",
  ogDescription:
    "Individuelle Websites für Unternehmen: modernes Webdesign, SEO-Grundlagen, schnelle Ladezeiten und persönliche Betreuung.",
  canonical: "/webdesign",
} as const;

export const webdesignHero = {
  eyebrow: "Professionelles Webdesign",
  headline: "Websites, die Vertrauen schaffen und Kunden gewinnen.",
  lead: "319Webdesign entwickelt individuelle Websites für Unternehmen, die online professionell auftreten, besser gefunden werden und aus Besuchern echte Interessenten machen möchten.",
  primaryCta: "Kostenloses Erstgespräch vereinbaren",
  primaryHref: "/kontakt",
  secondaryCta: "Webdesign-Projekte ansehen",
  secondaryHref: "/portfolio",
  trust: [
    "Individuelles Design",
    "SEO-Grundlagen inklusive",
    "Mobile optimiert",
    "Persönliche Betreuung",
  ],
} as const;

export const webdesignWhy = {
  eyebrow: "Der erste Eindruck zählt",
  headline: "Ihre Website arbeitet für Ihr Unternehmen – rund um die Uhr.",
  lead: "Potenzielle Kunden informieren sich häufig online, bevor sie Kontakt aufnehmen. Eine professionelle Website entscheidet deshalb mit darüber, wie kompetent, vertrauenswürdig und modern Ihr Unternehmen wahrgenommen wird.",
  items: [
    {
      number: "01",
      title: "Vertrauen schaffen",
      text: "Ihre Website ist häufig der erste Kontakt mit Ihrem Unternehmen. Ein professioneller Auftritt vermittelt Qualität und schafft Vertrauen.",
    },
    {
      number: "02",
      title: "Gefunden werden",
      text: "Eine technisch und strukturell sauber aufgebaute Website schafft die Grundlage dafür, über Google neue Interessenten zu erreichen.",
    },
    {
      number: "03",
      title: "Anfragen erleichtern",
      text: "Klare Inhalte, verständliche Leistungen und gezielte Kontaktmöglichkeiten führen Besucher zum nächsten Schritt.",
    },
  ],
} as const;

export const webdesignOffer = {
  eyebrow: "Webdesign von 319Webdesign",
  headline: "Nicht einfach eine schöne Website.",
  lead: "Eine gute Unternehmenswebsite verbindet Gestaltung, Nutzerführung, Technik und Sichtbarkeit. Deshalb betrachten wir Ihr Projekt nicht nur aus Design-Sicht.",
  aspects: [
    "Individuelles Design",
    "SEO",
    "Responsive Design",
    "Performance",
    "Nutzerführung",
    "Kontaktmöglichkeiten",
    "Sicherheit",
    "Technische Umsetzung",
  ],
} as const;

export const webdesignIncludes = {
  eyebrow: "Leistungsumfang",
  headline: "Alles, was Ihre neue Website braucht.",
  lead: "Professionelles Webdesign bedeutet mehr als ein neues Layout. Diese Bausteine gehören bei 319Webdesign zur Unternehmenswebsite dazu.",
  items: [
    {
      title: "Individuelles Webdesign",
      text: "Keine fertigen Baukästen oder austauschbaren Vorlagen. Das Design wird auf Unternehmen, Zielgruppe und Leistungen abgestimmt.",
    },
    {
      title: "Responsive Design",
      text: "Optimale Darstellung auf Smartphone, Tablet und Desktop – damit Ihre Website auf jedem Gerät professionell wirkt.",
    },
    {
      title: "Nutzerführung",
      text: "Besucher sollen schnell verstehen, was Ihr Unternehmen bietet, warum sie Ihnen vertrauen können und wie sie Kontakt aufnehmen.",
    },
    {
      title: "Suchmaschinenoptimierung",
      text: "Grundlegende SEO-Maßnahmen werden bereits bei der Erstellung berücksichtigt – etwa saubere Seitenstruktur, Überschriften, Meta-Daten, interne Verlinkung, Performance und mobile Optimierung. Keine Ranking-Versprechen, sondern eine solide technische und inhaltliche Grundlage.",
    },
    {
      title: "Performance",
      text: "Kurze Ladezeiten und technisch saubere Umsetzung – damit Besucher bleiben und Suchmaschinen Ihre Seite gut bewerten können.",
    },
    {
      title: "Kontaktmöglichkeiten",
      text: "Kontaktformulare, Telefonnummer, E-Mail, Terminbuchung oder andere Wege, die zu Ihrem Unternehmen passen.",
    },
    {
      title: "Inhalte",
      text: "Unterstützung bei Struktur, Texten und passenden Bildern, falls noch keine fertigen Inhalte vorhanden sind.",
    },
    {
      title: "Datenschutz & technische Grundlagen",
      text: "Datenschutzfreundliche technische Umsetzung wird mitgedacht. Das ersetzt keine Rechtsberatung – schafft aber eine saubere Basis.",
    },
  ],
} as const;

const featuredSlugs = [
  "he-immologis",
  "elektrotechnik-betrieb",
  "heinerfilm",
] as const;

export function getWebdesignProjects() {
  return featuredSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => ({
      title: project.shortTitle,
      industry: project.industry,
      result:
        project.slug === "he-immologis"
          ? "Moderner Immobilienauftritt mit direkter onOffice-Anbindung für eine automatische Objektverwaltung."
          : project.slug === "elektrotechnik-betrieb"
            ? "Moderner Unternehmensauftritt mit klarer Leistungsstruktur und einfacher Kontaktaufnahme."
            : "Moderner Webauftritt zur professionellen Präsentation seiner Videoprojekte und einfachen Kontaktaufnahme.",
      href: project.href,
      image: project.image,
      service: "Webdesign",
    }));
}

export const webdesignProjectsSection = {
  eyebrow: "Webdesign Referenzen",
  headline: "Webdesign aus der Praxis.",
  lead: "Keine Demo-Projekte – sondern Websites, die für echte Unternehmen entwickelt wurden.",
  ctaLabel: "Alle Projekte ansehen",
  ctaHref: "/portfolio",
} as const;

export const webdesignResponsive = {
  eyebrow: "Auf jedem Gerät",
  headline: "Ihre Kunden sind mobil. Ihre Website auch.",
  lead: "Ein großer Teil der Websitebesuche findet heute über Smartphones statt. Deshalb wird jede Website von Beginn an für unterschiedliche Bildschirmgrößen entwickelt.",
} as const;

export const webdesignSeo = {
  eyebrow: "Technische Grundlage",
  headline: "Schön aussehen reicht nicht.",
  lead: "Eine professionelle Website muss schnell laden, technisch sauber funktionieren und von Suchmaschinen verstanden werden können.",
  points: [
    "SEO-Grundlagen",
    "Performance",
    "Core Web Vitals",
    "Mobile Optimierung",
    "Saubere Struktur",
    "Interne Verlinkung",
  ],
  note: "SEO-Grundlagen sind bei der Website-Erstellung enthalten. Weiterführende Suchmaschinenoptimierung ist eine separate Leistung.",
  linkLabel: "Mehr über SEO erfahren",
  linkHref: "/lokale-seo",
} as const;

export const webdesignIndividual = {
  eyebrow: "Individuell entwickelt",
  headline: "Ihre Website sollte nicht aussehen wie jede andere.",
  lead: "Jedes Unternehmen hat andere Leistungen, Zielgruppen und Anforderungen. Deshalb entwickeln wir Websites individuell und passen Struktur, Gestaltung und Funktionen an das jeweilige Projekt an.",
  standard: {
    title: "Standardlösung",
    items: [
      "Starre Vorlage",
      "Austauschbares Design",
      "Unnötige Elemente",
      "Begrenzte Individualität",
    ],
  },
  custom: {
    title: "319Webdesign",
    items: [
      "Individuelle Struktur",
      "Passendes Design",
      "Gezielte Funktionen",
      "Auf Ihr Unternehmen abgestimmt",
    ],
  },
} as const;

export const webdesignProcess = {
  eyebrow: "So läuft Ihr Projekt",
  headline: "Von der ersten Idee bis zum Livegang.",
  lead: "Ein klarer Ablauf sorgt dafür, dass Sie jederzeit wissen, wo Ihr Projekt steht.",
  steps: [
    {
      title: "Kennenlernen",
      description:
        "Wir sprechen über Unternehmen, Ziele, Zielgruppe und Anforderungen.",
    },
    {
      title: "Konzept",
      description:
        "Seitenstruktur, Inhalte und Nutzerführung werden geplant.",
    },
    {
      title: "Design",
      description: "Entwicklung eines individuellen visuellen Auftritts.",
    },
    {
      title: "Entwicklung",
      description:
        "Technische Umsetzung und Optimierung für alle Geräte.",
    },
    {
      title: "Abstimmung",
      description:
        "Gemeinsame Korrekturen, bis das Ergebnis passt.",
    },
    {
      title: "Livegang",
      description: "Finale Prüfung und Veröffentlichung.",
    },
  ],
  durationNote:
    "Die meisten Projekte benötigen etwa 3–8 Wochen. Kleinere Projekte oft ca. 3–5 Wochen, umfangreichere Projekte ca. 5–8 Wochen. Die tatsächliche Dauer hängt vom Umfang und von der Bereitstellung der Inhalte ab.",
} as const;

export const webdesignCare = {
  eyebrow: "Auch danach für Sie da",
  headline: "Eine Website ist nach dem Livegang nicht plötzlich fertig.",
  lead: "Auf Wunsch übernimmt 319Webdesign die langfristige technische Betreuung Ihrer Website.",
  priceLabel: "Wartungspaket",
  price: "79 €",
  priceSuffix: "/ Monat",
  optionalNote: "Das Wartungspaket ist optional – transparent und ohne Verpflichtung.",
  includes: [
    "Wartung",
    "Aktualisierungen",
    "Backups",
    "Bis zu 2 Arbeitsstunden pro Monat für kleinere Anpassungen",
  ],
  linkLabel: "Mehr über Wartung & Betreuung",
  linkHref: "/leistungen/website-wartung",
} as const;

export const webdesignAudience = {
  eyebrow: "Zielgruppen",
  headline: "Webdesign für Unternehmen, die professionell auftreten möchten.",
  lead: "319Webdesign arbeitet insbesondere mit Handwerksbetrieben, regionalen Unternehmen und Dienstleistern zusammen.",
  items: [
    "Handwerksbetriebe",
    "Immobilienunternehmen",
    "Elektrobetriebe",
    "Baudienstleister",
    "Gesundheit & Wellness",
    "Kreative Dienstleister",
    "Lokale Unternehmen",
    "KMU",
  ],
  localNote:
    "Für Unternehmen aus Darmstadt und dem Rhein-Main-Gebiet gibt es zusätzlich lokale Informationen zum Webdesign vor Ort.",
  localLinkLabel: "Webdesign Darmstadt",
  localLinkHref: "/leistungen/webdesign-darmstadt",
} as const;

export const webdesignFaq = [
  {
    question: "Was kostet eine professionelle Website?",
    answer:
      "Jedes Projekt ist individuell, daher gibt es keinen festen Pauschalpreis. Umfang, gewünschte Funktionen und Anforderungen beeinflussen den Preis. Nach einem unverbindlichen Erstgespräch erhalten Kunden ein transparentes individuelles Angebot.",
  },
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer:
      "Die meisten Projekte benötigen zwischen 3 und 8 Wochen. Kleinere Websites können häufig innerhalb von 3 bis 5 Wochen umgesetzt werden, größere Projekte benötigen je nach Umfang etwa 5 bis 8 Wochen.",
  },
  {
    question: "Benötige ich bereits Texte und Bilder?",
    answer:
      "Nein. Falls noch keine passenden Inhalte vorhanden sind, unterstützt 319Webdesign bei der Auswahl geeigneter Bilder und bei der Erstellung bzw. Strukturierung der Texte.",
  },
  {
    question: "Kann ich meine Website später selbst bearbeiten?",
    answer:
      "Bei WordPress-Websites können Inhalte auf Wunsch selbst gepflegt werden. Dafür kann eine persönliche Einweisung erfolgen.",
  },
  {
    question: "Ist SEO enthalten?",
    answer:
      "Grundlegende technische und OnPage-SEO-Maßnahmen werden bereits bei der Erstellung berücksichtigt. Weiterführende SEO-Maßnahmen können zusätzlich gebucht werden.",
  },
  {
    question: "Kann meine bestehende Website überarbeitet werden?",
    answer:
      "Ja. Bestehende Websites können vollständig redesigned, technisch modernisiert und bei Bedarf auf ein neues System migriert werden.",
  },
  {
    question: "Übernimmt 319Webdesign die Wartung?",
    answer:
      "Ja. Die langfristige Betreuung ist optional und kann über ein Wartungspaket übernommen werden.",
  },
] as const;

export const webdesignClosing = {
  eyebrow: "Ihr Webdesign-Projekt",
  headline: "Zeit für eine Website, die zu Ihrem Unternehmen passt?",
  lead: "Erzählen Sie mir von Ihrem Unternehmen und Ihren Zielen. In einem unverbindlichen Erstgespräch schauen wir gemeinsam, wie Ihre neue Website aufgebaut sein sollte.",
  primaryCta: "Kostenloses Erstgespräch vereinbaren",
  primaryHref: "/kontakt",
  secondaryCta: "Projekte ansehen",
  secondaryHref: "/portfolio",
  trust: "Unverbindlich · Persönlich · Direkter Ansprechpartner",
} as const;

/** Hero-/Responsive-Visual: HE Immologis als reales Kundenbeispiel */
export const webdesignVisualProject = {
  title: "HE Immologis",
  href: "/portfolio/he-immologis",
  image: {
    src: "/case-he.png",
    alt: "Desktop-Ansicht der HE Immologis Website – Webdesign-Projekt von 319Webdesign",
    width: 1898,
    height: 861,
  },
  mobileImage: {
    src: "/case-he-mobile.png",
    alt: "Mobile Ansicht der HE Immologis Website – Webdesign-Projekt von 319Webdesign",
    width: 351,
    height: 757,
  },
  tabletImage: {
    src: "/case-he-tablet.png",
    alt: "Tablet-Ansicht der HE Immologis Website – Webdesign-Projekt von 319Webdesign",
    width: 511,
    height: 737,
  },
} as const;
