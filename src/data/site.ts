export const siteConfig = {
  name: "319Webdesign",
  tagline: "Premium Webdesign für Handwerk & regionale Unternehmen",
  region: "Darmstadt & Rhein-Main",
  phone: "+49 177 3236454",
  phoneHref: "tel:+491773236454",
  whatsappHref: "https://wa.me/491773236454",
  email: "Maik.Schmidt@319Webdesign.de",
  googleRating: "5,0",
  projectCount: "15+",
  social: {
    instagram: "https://instagram.com/319webdesign",
    whatsapp: "https://wa.me/491773236454",
    facebook: "https://www.facebook.com/319webdesign",
  },
};

export const navLinks = [
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
      { label: "SEO Darmstadt", href: "/leistungen/seo-darmstadt" },
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
      { label: "Homepage für Handwerker", href: "/leistungen/homepage-handwerker" },
      { label: "Website-Wartung", href: "/leistungen/website-wartung" },
      { label: "Google Unternehmensprofil", href: "/leistungen/google-unternehmensprofil" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const processSteps = [
  {
    title: "Kennenlernen",
    description:
      "Ziele, Zielgruppe und Ist-Zustand — unverbindlich und auf Augenhöhe.",
  },
  {
    title: "Konzept & Design",
    description:
      "Struktur, SEO-Grundlage und individuelles Layout, das zu Ihnen passt.",
  },
  {
    title: "Entwicklung",
    description:
      "Schnell, sauber und modern umgesetzt — ohne Baukasten-Kompromisse.",
  },
  {
    title: "Livegang & Betreuung",
    description:
      "Online gehen mit gutem Gefühl — und danach ein fester Ansprechpartner.",
  },
];

export const services = [
  {
    title: "Webdesign Darmstadt",
    description:
      "Individuelle Websites, die Vertrauen aufbauen und Anfragen generieren — lokal und premium.",
    href: "/leistungen/webdesign-darmstadt",
    icon: "globe" as const,
  },
  {
    title: "SEO Darmstadt",
    description:
      "Lokale Sichtbarkeit von Anfang an: Struktur, Inhalte und technische Grundlage.",
    href: "/leistungen/seo-darmstadt",
    icon: "search" as const,
  },
  {
    title: "Website Relaunch",
    description:
      "Von veraltet zu überzeugend — Design, Technik und Conversion neu gedacht.",
    href: "/leistungen/website-relaunch",
    icon: "refresh" as const,
  },
  {
    title: "Homepage für Handwerker",
    description:
      "Websites, die Handwerksbetriebe als Auftraggeber ernst nehmen — klar und regional.",
    href: "/leistungen/homepage-handwerker",
    icon: "wrench" as const,
  },
  {
    title: "Website-Wartung",
    description:
      "Sicherheit, Updates und ruhiger Betrieb — damit du dich um dein Handwerk kümmern kannst.",
    href: "/leistungen/website-wartung",
    icon: "shield" as const,
  },
  {
    title: "Google Unternehmensprofil",
    description:
      "Mehr lokale Anfragen über Google — Profil, Fotos und Bewertungen sauber aufgestellt.",
    href: "/leistungen/google-unternehmensprofil",
    icon: "map" as const,
  },
];

export const digitalSolutions = [
  {
    id: "websites",
    title: "Ihre Website",
    description:
      "Individuelle Unternehmenswebsites, Landingpages und Redesigns, die Vertrauen schaffen und neue Kunden gewinnen.",
    items: [
      "Unternehmenswebsite",
      "Landingpages",
      "Onepager",
      "Website-Redesign",
    ],
    href: "/leistungen/webdesign-darmstadt",
  },
  {
    id: "branding",
    title: "Ihr Markenauftritt",
    description:
      "Ein einheitlicher Markenauftritt sorgt für Wiedererkennung und Professionalität – online und darüber hinaus.",
    items: [
      "Corporate Design",
      "Farbwelt",
      "Logo",
      "E-Mail-Signaturen",
      "Social-Media-Grafiken",
    ],
    href: "/leistungen",
  },
  {
    id: "visibility",
    title: "Ihre Sichtbarkeit",
    description:
      "Damit Kunden Ihr Unternehmen dort finden, wo sie nach Ihren Leistungen suchen.",
    items: [
      "Lokale SEO",
      "Google Unternehmensprofil",
      "Keyword-Recherche",
      "Landingpages",
    ],
    href: "/leistungen/seo-darmstadt",
  },
  {
    id: "tools",
    title: "Ihre digitalen Prozesse",
    description:
      "Digitale Lösungen, die Ihren Arbeitsalltag vereinfachen und Anfragen effizienter machen.",
    items: [
      "Kontaktformulare",
      "Terminbuchung",
      "CRM",
      "Automatisierungen",
      "Newsletter",
    ],
    href: "/leistungen",
  },
  {
    id: "care",
    title: "Ihre Betreuung",
    description:
      "Auch nach dem Livegang bleibe ich Ihr Ansprechpartner und entwickle Ihre Website gemeinsam mit Ihrem Unternehmen weiter.",
    items: ["Wartung", "Updates", "Backups", "Hosting", "Support"],
    href: "/leistungen/website-wartung",
  },
];

/** @deprecated Import aus `@/data/projects` bevorzugen — bleibt für Home/Related kompatibel */
export { projects } from "./projects";

export const testimonials = [
  {
    quote:
      "Endlich eine Website, die unser Handwerk ernst nimmt — persönlich betreut und messbar besser auffindbar.",
    name: "Thomas M.",
    company: "Elektrotechnik Mager GmbH",
  },
  {
    quote:
      "Kein Agentur-Gerede, sondern klare Schritte. Das Erstgespräch allein hat schon mehr gebracht als Monate Baukasten.",
    name: "Sandra K.",
    company: "Regionales Dienstleistungsunternehmen",
  },
];

export const faqItems = [
  {
    question: "Was kostet eine professionelle Website?",
    answer:
      "Jedes Projekt ist individuell, daher gibt es keinen festen Pauschalpreis. Der Umfang, die gewünschten Funktionen und Ihre Anforderungen entscheiden über den Preis. Nach einem unverbindlichen Erstgespräch erhalten Sie ein transparentes Angebot, das genau zu Ihrem Projekt passt.",
  },
  {
    question: "Wie läuft ein Website-Projekt bei 319Webdesign ab?",
    answer:
      "Zu Beginn lernen wir Ihr Unternehmen und Ihre Ziele kennen. Anschließend entwickeln wir ein individuelles Konzept, gestalten das Design und setzen Ihre Website technisch um. Selbstverständlich sind Korrekturen möglich – wir arbeiten so lange gemeinsam daran, bis das Ergebnis Ihren Vorstellungen entspricht.",
  },
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer:
      "Die meisten Projekte werden innerhalb von 3 bis 8 Wochen umgesetzt. Kleinere Websites sind häufig bereits nach 3 bis 5 Wochen online, größere Projekte benötigen je nach Umfang etwa 5 bis 8 Wochen.",
  },
  {
    question: "Benötige ich bereits Texte und Bilder?",
    answer:
      "Nein. Falls Sie noch keine passenden Inhalte haben, unterstütze ich Sie dabei. Gemeinsam finden wir passende Bilder und erstellen professionelle Texte, damit Ihre Website von Anfang an einen hochwertigen Eindruck hinterlässt.",
  },
  {
    question: "Kann ich meine Website später selbst bearbeiten?",
    answer:
      "Ja. WordPress-Websites lassen sich auf Wunsch einfach selbst pflegen. Gerne zeige ich Ihnen in einer persönlichen Einweisung, wie Sie Texte oder Bilder später eigenständig ändern können.",
  },
  {
    question: "Übernimmst du auch Wartung und Betreuung?",
    answer:
      "Ja. Auf Wunsch übernehme ich die technische Betreuung Ihrer Website. Das Wartungspaket beinhaltet Updates, Backups sowie bis zu zwei Arbeitsstunden pro Monat für kleinere Änderungen oder Anpassungen. Eine Wartung ist nicht verpflichtend, wird jedoch empfohlen, damit Ihre Website langfristig sicher und aktuell bleibt.",
  },
  {
    question: "Kannst du auch bestehende Websites überarbeiten?",
    answer:
      "Ja. Ich überarbeite bestehende Websites, modernisiere das Design und übernehme auf Wunsch vorhandene Inhalte. Auch der Umzug auf ein neues System oder die technische Migration gehören dazu.",
  },
  {
    question: "Ist Suchmaschinenoptimierung (SEO) bereits enthalten?",
    answer:
      "Ja. Jede Website wird technisch für Suchmaschinen optimiert und mit den wichtigsten SEO-Grundlagen erstellt. Dazu gehören unter anderem eine saubere Seitenstruktur, schnelle Ladezeiten und eine suchmaschinenfreundliche Umsetzung. Umfangreichere SEO-Maßnahmen, wie lokale Suchmaschinenoptimierung oder langfristige Strategien, können zusätzlich umgesetzt werden.",
  },
];

export const problems = [
  {
    title: "Der erste Eindruck",
    text: "Eine veraltete Website kostet Vertrauen – noch bevor ein Besucher Kontakt aufnimmt.",
  },
  {
    title: "Die Sichtbarkeit",
    text: "Wer bei Google kaum gefunden wird, verliert potenzielle Kunden an die Konkurrenz.",
  },
  {
    title: "Das Ergebnis",
    text: "Eine gute Website überzeugt nicht nur optisch, sondern unterstützt Ihr Unternehmen dabei, neue Anfragen zu gewinnen.",
  },
];

export const whyPoints = [
  {
    title: "Persönliche Betreuung",
    text: "Sie sprechen während des gesamten Projekts direkt mit mir – von der ersten Idee bis zum Livegang. Keine wechselnden Ansprechpartner und keine anonymen Prozesse.",
  },
  {
    title: "SEO von Anfang an",
    text: "Eine gute Website muss nicht nur gut aussehen. Inhalte, Struktur und Technik werden von Beginn an so aufgebaut, dass Google sie optimal verstehen kann.",
  },
  {
    title: "Individuelles Design",
    text: "Keine Baukastensysteme. Keine fertigen Templates. Jede Website wird individuell für Ihr Unternehmen entwickelt.",
  },
  {
    title: "Performance",
    text: "Kurze Ladezeiten, moderne Technologien und saubere Entwicklung sorgen für eine Website, die langfristig überzeugt.",
  },
  {
    title: "Langfristige Betreuung",
    text: "Auch nach dem Livegang bleibe ich Ihr Ansprechpartner für Weiterentwicklungen, Wartung und Fragen rund um Ihre Website.",
  },
];
