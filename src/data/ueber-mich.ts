import { getProjectBySlug } from "@/data/projects";

export const ueberMichMeta = {
  title: {
    absolute: "Über 319Webdesign | Persönliches Webdesign mit Maik Schmidt",
  },
  description:
    "Lernen Sie Maik Schmidt und 319Webdesign kennen: persönliche Betreuung, direkte Kommunikation und individuelles Webdesign für Unternehmen und Handwerksbetriebe.",
  ogTitle: "Über 319Webdesign | Persönliches Webdesign mit Maik Schmidt",
  ogDescription:
    "Lernen Sie Maik Schmidt und 319Webdesign kennen: persönliche Betreuung, direkte Kommunikation und individuelles Webdesign für Unternehmen und Handwerksbetriebe.",
  canonical: "/ueber-mich",
} as const;

export const ueberMichHero = {
  eyebrow: "Über 319Webdesign",
  headline: "Persönliches Webdesign. Direkte Zusammenarbeit. Klare Ergebnisse.",
  lead: "Ich bin Maik Schmidt und begleite Unternehmen persönlich bei der Entwicklung ihres digitalen Auftritts – von der ersten Idee bis zum Livegang und auf Wunsch auch darüber hinaus.",
  primaryCta: "Projekt unverbindlich besprechen",
  primaryHref: "/kontakt",
  secondaryCta: "Projekte ansehen",
  secondaryHref: "/portfolio",
  image: {
    src: "/maik.webp",
    alt: "Maik Schmidt an seinem Arbeitsplatz – Webdesigner und Inhaber von 319Webdesign",
  },
} as const;

export const ueberMichIntro = {
  eyebrow: "Wer hinter 319Webdesign steht",
  headline: "Hallo, ich bin Maik.",
  paragraphs: [
    "Ich entwickle Websites und digitale Lösungen für Unternehmen, die online professionell auftreten und einen direkten Ansprechpartner an ihrer Seite haben möchten.",
    "Jedes Projekt beginne ich mit dem Zuhören: Was braucht Ihr Unternehmen wirklich? Welche Ziele soll die Website erfüllen? Daraus entsteht eine klare Struktur, ein individuelles Design und eine technische Umsetzung, die im Alltag funktioniert.",
    "Ich mag klare Lösungen, direkte Kommunikation und Websites, die nicht nur gut aussehen, sondern im Alltag eines Unternehmens wirklich funktionieren.",
  ],
} as const;

export const ueberMichWhy = {
  eyebrow: "Warum es 319Webdesign gibt",
  headline: "Webdesign ohne Agentur-Umwege.",
  lead: "Viele Unternehmen möchten einen professionellen Webauftritt, aber keine komplizierten Agenturprozesse, wechselnde Ansprechpartner oder unnötige Abstimmungsschleifen.",
  statements: [
    {
      reject: "Keine wechselnden Ansprechpartner.",
      affirm: "Direkter Kontakt.",
    },
    {
      reject: "Keine Standardlösung.",
      affirm: "Individuelle Umsetzung.",
    },
    {
      reject: "Keine unnötigen Prozesse.",
      affirm: "Klare Abstimmung.",
    },
  ],
} as const;

export const ueberMichPrinciples = {
  eyebrow: "Mein Anspruch",
  headline: "Eine Website muss mehr können als gut aussehen.",
  items: [
    {
      number: "01",
      title: "Verständlichkeit",
      text: "Besucher sollen schnell verstehen, was ein Unternehmen anbietet.",
    },
    {
      number: "02",
      title: "Vertrauen",
      text: "Ein professioneller Auftritt muss Kompetenz und Seriosität vermitteln.",
    },
    {
      number: "03",
      title: "Nutzerfreundlichkeit",
      text: "Die Website muss einfach bedienbar sein – auf Desktop und Smartphone.",
    },
    {
      number: "04",
      title: "Nachhaltigkeit",
      text: "Die Website soll nicht nach sechs Monaten veraltet sein, sondern langfristig weiterentwickelt werden können.",
    },
  ],
} as const;

export const ueberMichCollaboration = {
  eyebrow: "Direkt & transparent",
  headline: "Sie wissen immer, mit wem Sie sprechen.",
  lead: "Vom ersten Gespräch bis zur Umsetzung bleibt die Kommunikation direkt. Fragen gehen nicht durch mehrere Abteilungen und Entscheidungen müssen nicht über verschiedene Ansprechpartner laufen.",
  steps: [
    "Erstgespräch",
    "Konzept",
    "Design",
    "Entwicklung",
    "Abstimmung",
    "Livegang",
    "Betreuung",
  ],
  closing: "Ein Ansprechpartner über das gesamte Projekt hinweg.",
} as const;

export const ueberMichPersonalAdvantage = {
  eyebrow: "Persönlich statt anonym",
  headline: "Keine Hotline. Kein Ticketsystem. Kein Weiterreichen.",
  lead: "Gerade bei kleineren und mittelständischen Unternehmen ist es hilfreich, wenn der Ansprechpartner das Unternehmen und das Projekt wirklich kennt.",
  benefits: [
    "weniger Missverständnisse",
    "schnellere Abstimmungen",
    "persönlicher Kontext bleibt erhalten",
    "direkter Austausch",
    "Entscheidungen werden einfacher",
  ],
} as const;

export const ueberMichProjectsSection = {
  eyebrow: "Aus der Praxis",
  headline: "Nicht nur Theorie – echte Projekte für echte Unternehmen.",
  lead: "Ausgewählte Arbeiten, die zeigen, wie 319Webdesign Unternehmen online aufstellt.",
  ctaLabel: "Alle Projekte ansehen",
  ctaHref: "/portfolio",
} as const;

const projectSlugs = [
  "he-immologis",
  "elektrotechnik-betrieb",
  "heinerfilm",
] as const;

const projectResults: Record<(typeof projectSlugs)[number], string> = {
  "he-immologis":
    "Moderner Immobilienauftritt mit direkter onOffice-Anbindung für die Objektverwaltung.",
  "elektrotechnik-betrieb":
    "Professioneller Unternehmensauftritt mit klarer Leistungsstruktur und einfacher Kontaktaufnahme.",
  heinerfilm:
    "Klarer Webauftritt zur Präsentation von Videoprojekten und unkomplizierter Anfrage.",
};

export function getUeberMichProjects() {
  return projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => ({
      title: project.shortTitle,
      industry: project.industry,
      result:
        projectResults[project.slug as (typeof projectSlugs)[number]] ??
        project.teaserResult,
      href: project.href,
      image: project.image,
      service: project.service,
    }));
}

export const ueberMichAudience = {
  eyebrow: "Passende Zusammenarbeit",
  headline: "Am besten funktioniert die Zusammenarbeit, wenn …",
  conditions: [
    "… Sie einen direkten Ansprechpartner möchten.",
    "… Ihr Unternehmen professioneller auftreten soll.",
    "… Ihre aktuelle Website nicht mehr zu Ihrem Unternehmen passt.",
    "… Sie Wert auf individuelle Lösungen legen.",
    "… Sie keine komplizierte Agenturstruktur möchten.",
    "… Sie langfristig jemanden für Website und digitalen Auftritt suchen.",
  ],
  focusLabel: "319Webdesign arbeitet vor allem mit:",
  focus: [
    "Handwerksbetrieben",
    "regionalen Unternehmen",
    "Dienstleistern",
    "kleinen und mittelständischen Unternehmen",
  ],
} as const;

export const ueberMichQuality = {
  eyebrow: "So arbeite ich",
  headline: "Lieber sauber durchdacht als schnell zusammengesteckt.",
  lead: "Jedes Projekt wird individuell aufgebaut und an Unternehmen, Zielgruppe und Anforderungen angepasst.",
  items: [
    {
      title: "Klare Seitenstruktur",
      text: "Inhalte werden so geordnet, dass Besucher schnell finden, was sie suchen.",
    },
    {
      title: "Individuelles Design",
      text: "Das Erscheinungsbild orientiert sich an Ihrem Unternehmen – nicht an Vorlagen.",
    },
    {
      title: "Saubere technische Umsetzung",
      text: "Stabil, wartbar und so gebaut, dass die Website im Alltag zuverlässig läuft.",
    },
    {
      title: "Mobile Optimierung",
      text: "Die Website funktioniert auf Smartphone und Desktop gleichermaßen gut.",
    },
    {
      title: "SEO-Grundlagen",
      text: "Technische und inhaltliche Grundlagen, damit Suchmaschinen die Seite verstehen können.",
    },
    {
      title: "Performance",
      text: "Schnelle Ladezeiten und eine ruhige Nutzerführung ohne unnötigen Ballast.",
    },
    {
      title: "Sinnvolle Funktionen",
      text: "Nur das, was Ihrem Unternehmen wirklich weiterhilft – keine Feature-Sammlung.",
    },
    {
      title: "Persönliche Abstimmung",
      text: "Entscheidungen entstehen im direkten Austausch, nicht über Umwege.",
    },
  ],
  relatedLinks: [
    { label: "Webdesign", href: "/webdesign" },
    { label: "Betreuung", href: "/betreuung" },
    { label: "Portfolio", href: "/portfolio" },
  ],
} as const;

export const ueberMichPersonalNote = {
  eyebrow: "Noch ein paar Worte zu mir",
  headline: "Technik interessiert mich. Gute Zusammenarbeit noch mehr.",
  text: "Mich begeistert an Webdesign die Kombination aus Gestaltung, Technik und dem direkten Austausch mit Unternehmen. Besonders spannend finde ich Projekte, bei denen aus einer ersten Idee Schritt für Schritt ein professioneller Auftritt entsteht, mit dem sich der Kunde wirklich identifizieren kann.",
  valuesLabel: "Was mir wichtig ist:",
  values: [
    "Zuverlässigkeit",
    "direkte Kommunikation",
    "ehrliche Einschätzung",
    "saubere Arbeit",
    "langfristige Zusammenarbeit",
  ],
} as const;

export const ueberMichFaq = [
  {
    question: "Arbeite ich direkt mit dir zusammen?",
    answer:
      "Ja. Während des gesamten Projekts ist Maik Schmidt der direkte Ansprechpartner – von der ersten Abstimmung bis zum Livegang.",
  },
  {
    question: "Arbeitest du alleine oder als Agentur?",
    answer:
      "319Webdesign wird persönlich geführt. Je nach Projekt können externe Leistungen oder Partner sinnvoll sein – die zentrale Kommunikation und Projektbetreuung bleibt jedoch bei 319Webdesign.",
  },
  {
    question: "Mit welchen Unternehmen arbeitest du?",
    answer:
      "Der Schwerpunkt liegt auf Handwerksbetrieben, regionalen Unternehmen, Dienstleistern und kleinen bis mittelständischen Unternehmen.",
  },
  {
    question: "Kannst du auch bestehende Websites übernehmen?",
    answer:
      "Ja. Bestehende Websites können analysiert, überarbeitet oder vollständig neu aufgebaut werden.",
  },
  {
    question: "Begleitest du Projekte auch nach dem Livegang?",
    answer:
      "Ja. Auf Wunsch übernimmt 319Webdesign Wartung, Updates, Backups und kleinere Änderungen im Rahmen einer laufenden Betreuung.",
  },
  {
    question: "Arbeitest du nur regional?",
    answer:
      "Die persönliche Ausrichtung hat einen starken regionalen Fokus rund um Darmstadt und das Rhein-Main-Gebiet. Projekte können je nach Umfang aber auch unabhängig vom Standort umgesetzt werden.",
  },
] as const;

export const ueberMichClosing = {
  eyebrow: "Lassen Sie uns sprechen",
  headline:
    "Sie suchen keinen großen Agenturapparat, sondern einen direkten Ansprechpartner?",
  lead: "Erzählen Sie mir von Ihrem Unternehmen und Ihrem Projekt. In einem unverbindlichen Gespräch schauen wir gemeinsam, welche Lösung sinnvoll ist.",
  primaryCta: "Kostenloses Erstgespräch vereinbaren",
  primaryHref: "/kontakt",
  secondaryCta: "Projekte ansehen",
  secondaryHref: "/portfolio",
  trust: "Persönlich · Unverbindlich · Direkter Ansprechpartner",
} as const;
