export const siteConfig = {
  name: "319Webdesign",
  tagline: "Premium Webdesign für Handwerk & regionale Unternehmen",
  region: "Darmstadt & Rhein-Main",
  phone: "+49 6151 000000",
  phoneHref: "tel:+496151000000",
  whatsappHref: "https://wa.me/496151000000",
  email: "hallo@319webdesign.de",
  googleRating: "5,0",
  projectCount: "15+",
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
    description: "Ziele, Zielgruppe und Ist-Zustand — ehrlich und auf Augenhöhe.",
  },
  {
    title: "Konzept",
    description: "Struktur, Inhalte und SEO-Grundlage, bevor Pixel gesetzt werden.",
  },
  {
    title: "Design",
    description: "Individuelles Layout, das zu deiner Marke und deinen Kunden passt.",
  },
  {
    title: "Entwicklung",
    description: "Schnell, sauber und zugänglich — ohne Baukasten-Kompromisse.",
  },
  {
    title: "Livegang",
    description: "Launch, Tracking und Feinschliff, bis alles sitzt.",
  },
  {
    title: "Betreuung",
    description: "Updates, Support und Weiterentwicklung — wenn du willst.",
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

export const projects = [
  {
    title: "Elektrotechnik Betrieb",
    industry: "Handwerk",
    service: "Website Relaunch",
    result:
      "Klarere Positionierung und spürbar mehr qualifizierte Anfragen aus der Region.",
    href: "/portfolio/elektrotechnik-betrieb",
  },
  {
    title: "Garten- & Landschaftsbau",
    industry: "Handwerk",
    service: "Webdesign + SEO",
    result:
      "Stärkere lokale Auffindbarkeit und eine Website, die Projekte statt Visitenkarten zeigt.",
    href: "/portfolio/garten-landschaftsbau",
  },
];

export const testimonials = [
  {
    quote:
      "Endlich eine Website, die unser Handwerk ernst nimmt — persönlich betreut und messbar besser auffindbar.",
    name: "Thomas M.",
    company: "Elektrotechnik Betrieb, Darmstadt",
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
    question: "Was kostet eine Website bei 319Webdesign?",
    answer:
      "Das hängt vom Umfang ab. Im kostenlosen Erstgespräch klären wir Ziele und Rahmen — danach erhältst du ein klares Angebot ohne Überraschungen.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Die meisten Relaunches und neuen Websites liegen zwischen wenigen Wochen und etwa zwei Monaten — abhängig von Feedback-Zyklen und Content.",
  },
  {
    question: "Arbeitest du mit Baukastensystemen?",
    answer:
      "Nein. Individuelles Design und moderne Technik statt vorgefertigter Templates — damit deine Website wirklich zu deinem Betrieb passt.",
  },
  {
    question: "Bin ich der richtige Ansprechpartner — oder eine Agentur?",
    answer:
      "Du arbeitest direkt mit mir. Kurze Wege, persönliche Betreuung und Entscheidungen ohne Umwege über Account-Manager.",
  },
  {
    question: "Für wen ist 319Webdesign besonders geeignet?",
    answer:
      "Für Handwerksbetriebe und regionale Unternehmen im Raum Darmstadt / Rhein-Main, die eine Website als Auftraggeber brauchen — nicht als digitale Visitenkarte.",
  },
];

export const problems = [
  {
    title: "Sieht aus wie 2014",
    text: "Veraltetes Design wirkt unglaubwürdig — und Besucher gehen, bevor sie anrufen.",
  },
  {
    title: "Niemand findet dich",
    text: "Ohne lokale SEO und klare Struktur bleibst du hinter Wettbewerbern unsichtbar.",
  },
  {
    title: "Keine klare nächste Aktion",
    text: "Besucher wissen nicht, was sie tun sollen — Anfragen bleiben aus.",
  },
  {
    title: "Baukasten ohne Persönlichkeit",
    text: "Standard-Templates sehen austauschbar aus. Genau das Vertrauen, das Handwerk braucht, fehlt.",
  },
];

export const whyPoints = [
  {
    title: "Persönliche Betreuung",
    text: "Du sprichst mit dem Webdesigner, der dein Projekt auch umsetzt — nicht mit einer Ticketsystem-Agentur.",
  },
  {
    title: "SEO von Anfang an",
    text: "Struktur, Inhalte und Technik werden so gebaut, dass Google und Kunden dich finden können.",
  },
  {
    title: "Individuelles Design",
    text: "Kein Template-Look. Eine Website, die zu deinem Betrieb passt und Premium-Anspruch zeigt.",
  },
  {
    title: "Schnelle Ladezeiten",
    text: "Performance ist kein Extra — sie entscheidet mit über Absprung und Ranking.",
  },
  {
    title: "Keine Baukastensysteme",
    text: "Moderne, wartbare Technik statt Limitierungen und aufgeblähter Page-Builder.",
  },
];
