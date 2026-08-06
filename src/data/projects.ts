export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectTestimonial = {
  quote: string;
  name: string;
  company: string;
  rating?: number;
  logoSrc?: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  shortTitle: string;
  industry: string;
  /** z. B. Immobilienmakler – Unterzeile im Editorial-Block */
  role?: string;
  location?: string;
  duration?: string;
  service: string;
  href: string;
  liveUrl?: string;
  logoSrc?: string;
  /** Kurzbeschreibung für Case-Study-Blöcke */
  summary: string;
  /** Ein Satz für „Weitere Projekte“ */
  teaserResult: string;
  /** Ergebnis-Satz (auch Home / Related) */
  result: string;
  /** Große Ergebnis-Headline in der Case Study */
  resultHeadline?: string;
  services: string[];
  /** Kurze Leistungszeile für die Meta-Spalte */
  metaServices?: string[];
  situation: string;
  goal: string;
  implementation: string;
  features: string[];
  outcome: string;
  image: ProjectImage;
  gallery?: ProjectImage[];
  testimonial?: ProjectTestimonial;
  /** Featured = große Case Studies auf /portfolio */
  featured: boolean;
  /** Reihenfolge Featured (1 = zuerst) */
  featuredOrder?: number;
  /** Reihenfolge „Weitere Projekte“ */
  moreOrder?: number;
  relatedServices?: { label: string; href: string }[];
  seo: {
    title: string;
    description: string;
  };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "he-immologis",
    title: "HE Immologis UG",
    shortTitle: "HE Immologis",
    industry: "Immobilien",
    role: "Immobilienmakler",
    location: "Weinheim",
    duration: "4 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/he-immologis",
    liveUrl: "https://www.he-immologis.de",
    logoSrc: "/kunden-logo/immologis.png",
    summary:
      "Kompletter Neuaufbau einer modernen Immobilienwebsite inklusive onOffice-Anbindung.",
    teaserResult:
      "Moderner Immobilienauftritt mit direkter onOffice-Anbindung für die Objektverwaltung.",
    result:
      "Kompletter Website-Relaunch inklusive nahtloser onOffice-Integration für eine effiziente Objektverwaltung.",
    resultHeadline:
      "Automatisierte Objektverwaltung durch direkte onOffice-Anbindung.",
    services: [
      "Konzeption",
      "Webdesign",
      "Entwicklung",
      "onOffice",
      "SEO",
      "Responsive",
    ],
    metaServices: ["Webdesign", "Entwicklung", "onOffice"],
    situation:
      "Der bisherige Webauftritt wirkte nicht mehr zeitgemäß und band Objekte nicht effizient an. Interessenten fanden Angebote und Kontaktwege nicht schnell genug.",
    goal:
      "Ein professioneller Immobilienauftritt, der Vertrauen schafft, Objekte automatisch aus onOffice darstellt und Anfragen erleichtert.",
    implementation:
      "Struktur, Design und Technik wurden neu aufgebaut. Die Website verbindet klare Nutzerführung mit einer direkten Anbindung an onOffice – damit Objekte aktuell bleiben, ohne doppelte Pflege.",
    features: [
      "onOffice-Anbindung",
      "Automatische Objektverwaltung",
      "Kontaktformulare",
      "Mobile Optimierung",
      "SEO-Grundlagen",
    ],
    outcome:
      "Objekte werden automatisch aus onOffice übernommen. Der Auftritt wirkt modern, vertrauenswürdig und führt Interessenten klar zur Anfrage.",
    image: {
      src: "/case-he.png",
      alt: "Website-Screenshot von HE Immologis UG",
      width: 1898,
      height: 861,
    },
    featured: true,
    featuredOrder: 1,
    relatedServices: [
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
    ],
    seo: {
      title: "HE Immologis · Immobilienwebsite mit onOffice",
      description:
        "Case Study: Website-Relaunch für HE Immologis UG inklusive onOffice-Anbindung, modernem Design und klarer Nutzerführung.",
    },
  },
  {
    slug: "heinerfilm",
    title: "Heinerfilm",
    shortTitle: "Heinerfilm",
    industry: "Videoproduktion",
    role: "Videograf",
    location: "Rhein-Main",
    duration: "3 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/heinerfilm",
    liveUrl: "https://www.heinerfilm.de",
    logoSrc: "/kunden-logo/heinerfilm.png",
    summary:
      "Kompletter Neuaufbau einer modernen Website zur Präsentation von Filmprojekten und zur einfachen Kontaktaufnahme.",
    teaserResult:
      "Moderner Webauftritt zur professionellen Präsentation von Videoprojekten.",
    result:
      "Moderner Webauftritt zur professionellen Präsentation seiner Videoprojekte und einfachen Kontaktaufnahme.",
    resultHeadline:
      "Starke Projektpräsentation mit klarer Aufforderung zur Kontaktaufnahme.",
    services: [
      "Webdesign",
      "Referenzen",
      "Kontakt",
      "Responsive",
      "SEO",
    ],
    metaServices: ["Webdesign", "Referenzen", "Kontakt"],
    situation:
      "Filmprojekte und die eigene Arbeit sollten professioneller sichtbar werden – mit einem Auftritt, der zur kreativen Arbeit passt und Kontakt unkompliziert macht.",
    goal:
      "Eine Website, die Projekte stark präsentiert, Vertrauen aufbaut und Interessenten schnell zur Anfrage führt.",
    implementation:
      "Der neue Auftritt setzt auf ruhige Typografie, großzügige Bildflächen und eine klare Struktur für Referenzen und Kontakt – ohne Ablenkung vom eigentlichen Filmwerk.",
    features: [
      "Referenzdarstellung",
      "Kontaktformulare",
      "Responsive Design",
      "SEO-Grundlagen",
    ],
    outcome:
      "Die Arbeit steht im Vordergrund. Interessenten erfassen das Angebot schnell und finden den Weg zur Anfrage ohne Umwege.",
    image: {
      src: "/case-heinerfilm.png",
      alt: "Website-Screenshot von Heinerfilm",
      width: 1892,
      height: 870,
    },
    featured: true,
    featuredOrder: 2,
    relatedServices: [
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
    ],
    seo: {
      title: "Heinerfilm · Website für Videoproduktion",
      description:
        "Case Study: Moderner Webauftritt für Heinerfilm – Referenzdarstellung, klare Kontaktwege und individuelles Design.",
    },
  },
  {
    slug: "elektrotechnik-betrieb",
    title: "Elektrotechnik Mager GmbH",
    shortTitle: "Elektrotechnik Mager",
    industry: "Elektrotechnik",
    role: "Handwerksbetrieb",
    location: "Groß-Gerau",
    duration: "5 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/elektrotechnik-betrieb",
    liveUrl: "https://www.etm-gg.de",
    logoSrc: "/kunden-logo/etm-logo.png",
    summary:
      "Neuer moderner Unternehmensauftritt mit klarer Leistungsstruktur, Karrierebereich und Kontaktmöglichkeiten.",
    teaserResult:
      "Professioneller Unternehmensauftritt mit klarer Leistungsdarstellung und moderner Nutzerführung.",
    result:
      "Moderner und professioneller Unternehmensauftritt mit klarem Fokus auf Industrie- und Gewerbekunden. Die neue Website stärkt das Vertrauen potenzieller Kunden und erleichtert die Kontaktaufnahme.",
    resultHeadline:
      "Klarer Unternehmensauftritt für Industrie- und Gewerbekunden.",
    services: [
      "Relaunch",
      "Leistungsseiten",
      "Karriere",
      "SEO",
      "Kontakt",
      "Responsive",
    ],
    metaServices: ["Webdesign", "Leistungsseiten", "SEO"],
    situation:
      "Als Handwerks- und Industriebetrieb brauchte Elektrotechnik Mager einen Auftritt, der Kompetenz ausstrahlt und Leistungen für Gewerbekunden verständlich macht.",
    goal:
      "Ein seriöser Unternehmensauftritt mit klarer Leistungsstruktur, Karrieremöglichkeiten und einfachen Kontaktwegen.",
    implementation:
      "Leistungen, Karriere und Kontakt wurden neu strukturiert. Design und Technik unterstützen Vertrauen, Auffindbarkeit und eine ruhige, professionelle Nutzerführung.",
    features: [
      "Leistungsseiten",
      "Karrierebereich",
      "Kontaktformulare",
      "SEO-Grundlagen",
      "Mobile Optimierung",
    ],
    outcome:
      "Gewerbekunden finden Leistungen schneller. Der Auftritt wirkt seriös, modern und erleichtert sowohl Anfragen als auch Bewerbungen.",
    image: {
      src: "/case-etm.png",
      alt: "Website-Screenshot von Elektrotechnik Mager GmbH",
      width: 1897,
      height: 867,
    },
    testimonial: {
      quote:
        "Endlich eine Website, die unser Handwerk ernst nimmt — persönlich betreut und messbar besser auffindbar.",
      name: "Thomas M.",
      company: "Elektrotechnik Mager GmbH",
      rating: 5,
      logoSrc: "/kunden-logo/etm-logo.png",
    },
    featured: true,
    featuredOrder: 3,
    relatedServices: [
      {
        label: "Homepage für Handwerker",
        href: "/leistungen/homepage-handwerker",
      },
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
      { label: "SEO Darmstadt", href: "/leistungen/seo-darmstadt" },
    ],
    seo: {
      title: "Elektrotechnik Mager · Website-Relaunch",
      description:
        "Case Study: Website-Relaunch für Elektrotechnik Mager GmbH – Leistungsseiten, Karrierebereich und SEO-Grundlagen.",
    },
  },
  {
    slug: "baudienstleistungen-hofmann",
    title: "Baudienstleistungen Hofmann",
    shortTitle: "Baudienstleistungen Hofmann",
    industry: "Baudienstleistungen",
    service: "Website Relaunch",
    href: "/portfolio/baudienstleistungen-hofmann",
    liveUrl: "https://www.baudienstleistungen-hofmann.de/",
    logoSrc: "/kunden-logo/baudienstleistungen-hofmann.png",
    summary:
      "Moderner Internetauftritt für ein regionales Bauunternehmen mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    teaserResult:
      "Moderner Internetauftritt mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    result:
      "Moderner Internetauftritt mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    services: [
      "Webdesign",
      "Leistungsseiten",
      "Kontaktformulare",
      "Mobile Optimierung",
    ],
    situation:
      "Das Unternehmen brauchte einen zeitgemäßen Webauftritt, der Leistungen verständlich darstellt und regionale Auftraggeber zur Kontaktaufnahme bewegt.",
    goal:
      "Eine klare, vertrauenswürdige Website, die Baudienstleistungen strukturiert präsentiert und Anfragen erleichtert.",
    implementation:
      "Leistungen, Vertrauen und Kontakt stehen im Fokus. Der Auftritt wirkt ruhig und professionell – passend zu einem regionalen Bauunternehmen.",
    features: [
      "Leistungsseiten",
      "Kontaktformulare",
      "Responsive Design",
      "SEO-Grundlagen",
    ],
    outcome:
      "Moderner Internetauftritt mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    image: {
      src: "/case-hofmann.png",
      alt: "Website-Screenshot von Baudienstleistungen Hofmann",
      width: 1440,
      height: 900,
    },
    featured: false,
    moreOrder: 1,
    relatedServices: [
      {
        label: "Homepage für Handwerker",
        href: "/leistungen/homepage-handwerker",
      },
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
    ],
    seo: {
      title: "Baudienstleistungen Hofmann · Website",
      description:
        "Case Study: Moderner Webauftritt für Baudienstleistungen Hofmann mit klarer Leistungsstruktur und Kontaktwegen.",
    },
  },
  {
    slug: "1klang-massage",
    title: "1klang Massage",
    shortTitle: "1klang Massage",
    industry: "Wellness & Massage",
    service: "Website Relaunch",
    href: "/portfolio/1klang-massage",
    liveUrl: "https://1klang-massage.de",
    logoSrc: "/kunden-logo/1klang.png",
    summary:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung für ein Massageangebot.",
    teaserResult:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung.",
    result:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung.",
    services: [
      "Webdesign",
      "Leistungsdarstellung",
      "Kontakt & Terminorientierung",
      "Mobile Optimierung",
    ],
    situation:
      "Das Angebot sollte online ruhig, persönlich und einladend wirken – ohne unruhige Agentur-Optik oder überladene Buchungssysteme.",
    goal:
      "Eine Website, die Vertrauen schafft, Leistungen klar erklärt und Interessenten einfach zur Kontaktaufnahme führt.",
    implementation:
      "Ruhige Farbwelt, klare Texte und eine übersichtliche Struktur machen das Angebot verständlich. Kontakt und Terminorientierung stehen im Vordergrund.",
    features: [
      "Ruhiges, individuelles Design",
      "Leistungsdarstellung",
      "Kontaktmöglichkeiten",
      "Mobile Optimierung",
    ],
    outcome:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung.",
    image: {
      src: "/case-1klang.png",
      alt: "Website-Screenshot von 1klang Massage",
      width: 1440,
      height: 900,
    },
    featured: false,
    moreOrder: 2,
    relatedServices: [
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
    ],
    seo: {
      title: "1klang Massage · Website für Wellness",
      description:
        "Case Study: Persönlicher Webauftritt für 1klang Massage – ruhiges Design und klare Terminorientierung.",
    },
  },
  {
    slug: "tierhotel-rhein-main",
    title: "Tierhotel Rhein-Main",
    shortTitle: "Tierhotel Rhein-Main",
    industry: "Tierbetreuung",
    service: "Website Relaunch",
    href: "/portfolio/tierhotel-rhein-main",
    liveUrl: "https://tierhotel-rhein-main.de",
    logoSrc: "/kunden-logo/tierhotel.png",
    summary:
      "Relaunch eines regionalen Tierhotels – von veraltetem Auftritt zu klarer, vertrauenswürdiger Online-Präsenz.",
    teaserResult:
      "Moderner Relaunch mit klarer Struktur und deutlich professionellerem ersten Eindruck.",
    result:
      "Von veraltet und austauschbar zu klar, schnell und anfrageorientiert – der Unterschied ist sichtbar.",
    services: [
      "Website-Relaunch",
      "Webdesign",
      "Inhaltsstruktur",
      "Mobile Optimierung",
    ],
    situation:
      "Der bisherige Auftritt wirkte veraltet und vermittelte zu wenig Vertrauen – obwohl das Angebot regional stark nachgefragt wird.",
    goal:
      "Ein zeitgemäßer Webauftritt, der Seriosität ausstrahlt, Leistungen klar zeigt und Anfragen erleichtert.",
    implementation:
      "Design, Struktur und Inhalte wurden neu aufgebaut. Der Fokus liegt auf Vertrauen, Übersichtlichkeit und einem starken ersten Eindruck – sichtbar im Vorher/Nachher-Vergleich.",
    features: [
      "Website-Relaunch",
      "Klare Leistungsstruktur",
      "Responsive Design",
      "SEO-Grundlagen",
    ],
    outcome:
      "Moderner, vertrauenswürdiger Auftritt mit klarer Struktur – der Unterschied zum vorherigen Internetauftritt ist deutlich sichtbar.",
    image: {
      src: "/case-tierhotel.png",
      alt: "Website-Screenshot von Tierhotel Rhein-Main",
      width: 1440,
      height: 900,
    },
    gallery: [
      {
        src: "/tierhotel-vorher.png",
        alt: "Vorher: älterer Webauftritt von Tierhotel Rhein-Main",
        width: 1600,
        height: 1000,
      },
      {
        src: "/tierhotel-header.png",
        alt: "Nachher: neuer Header von Tierhotel Rhein-Main",
        width: 1600,
        height: 1000,
      },
    ],
    featured: false,
    moreOrder: 3,
    relatedServices: [
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
    ],
    seo: {
      title: "Tierhotel Rhein-Main · Website-Relaunch",
      description:
        "Case Study: Website-Relaunch für Tierhotel Rhein-Main – von veraltet zu klar, modern und anfrageorientiert.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return portfolioProjects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getMoreProjects() {
  return portfolioProjects
    .filter((p) => !p.featured)
    .sort((a, b) => (a.moreOrder ?? 99) - (b.moreOrder ?? 99));
}

export function getRelatedPortfolioProjects(currentSlug: string, limit = 2) {
  const others = portfolioProjects.filter((p) => p.slug !== currentSlug);
  const featured = others.filter((p) => p.featured);
  const rest = others.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, limit);
}

/** Kompakte Featured-Liste für Home & Related Projects */
export const projects = getFeaturedProjects().map((p) => ({
  title: p.title,
  industry: p.industry,
  service: p.service,
  result: p.result,
  href: p.href,
  image: p.image.src,
  imageWidth: p.image.width,
  imageHeight: p.image.height,
}));

export const portfolioFacts = [
  { label: "15+ umgesetzte Projekte" },
  { label: "verschiedene Branchen" },
  { label: "individuelle Entwicklung" },
  { label: "persönliche Betreuung" },
] as const;

export const portfolioApproach = [
  {
    number: "01",
    title: "Klare Nutzerführung",
    text: "Besucher sollen schnell verstehen, worum es geht und wie sie Kontakt aufnehmen können.",
  },
  {
    number: "02",
    title: "Individuelles Design",
    text: "Keine Baukästen und keine fertigen Templates.",
  },
  {
    number: "03",
    title: "Technische Qualität",
    text: "Schnelle Ladezeiten, mobile Optimierung und saubere Umsetzung.",
  },
  {
    number: "04",
    title: "Langfristige Nutzbarkeit",
    text: "Die Website soll mit dem Unternehmen wachsen können.",
  },
] as const;

export const portfolioTestimonials = [
  {
    quote:
      "Endlich eine Website, die unser Handwerk ernst nimmt — persönlich betreut und messbar besser auffindbar.",
    name: "Thomas M.",
    company: "Elektrotechnik Mager GmbH",
    rating: 5,
    logoSrc: "/kunden-logo/etm-logo.png",
  },
  {
    quote:
      "Kein Agentur-Gerede, sondern klare Schritte. Das Erstgespräch allein hat schon mehr gebracht als Monate Baukasten.",
    name: "Sandra K.",
    company: "Regionales Dienstleistungsunternehmen",
    rating: 5,
  },
] as const;
