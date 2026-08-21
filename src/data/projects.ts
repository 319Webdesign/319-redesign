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

export type ProjectFeature = {
  title: string;
  text: string;
};

export type ProjectStep = {
  title: string;
  text: string;
};

export type ProjectMetaItem = {
  label: string;
  value: string;
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
  /** Hero-Zeile unter dem Namen, z. B. Immobilien · Webdesign · onOffice */
  heroLine?: string;
  /** Kompakte Leistungsbezeichnung in den Projektdaten */
  serviceLabel?: string;
  projectType?: string;
  specialty?: string;
  /** Kurzbeschreibung für Case-Study-Blöcke und Hero */
  summary: string;
  /** Ein Satz für „Weitere Projekte“ */
  teaserResult: string;
  /** Ergebnis-Satz (auch Home / Related) */
  result: string;
  situationHeadline?: string;
  situation: string;
  goalHeadline?: string;
  goal: string;
  /** Große hervorgehobene Ziel-Aussage */
  goalStatement?: string;
  implementationHeadline?: string;
  implementation: string;
  steps?: ProjectStep[];
  featuresHeadline?: string;
  features: ProjectFeature[];
  resultSectionHeadline?: string;
  /** Große Ergebnis-Aussage in der Case Study */
  resultHeadline?: string;
  outcome: string;
  services: string[];
  /** Kurze Leistungszeile für die Meta-Spalte */
  metaServices?: string[];
  heroMeta?: ProjectMetaItem[];
  facts?: ProjectMetaItem[];
  image: ProjectImage;
  gallery?: ProjectImage[];
  mobileImages?: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  testimonial?: ProjectTestimonial;
  /** Featured = große Case Studies auf /portfolio */
  featured: boolean;
  /** Reihenfolge Featured (1 = zuerst) */
  featuredOrder?: number;
  /** Reihenfolge „Weitere Projekte“ */
  moreOrder?: number;
  /** Vorübergehend nicht öffentlich anzeigen */
  hidden?: boolean;
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
    heroLine: "Immobilien · Webdesign · onOffice Integration",
    serviceLabel: "Webdesign & Entwicklung",
    projectType: "Kompletter Neuaufbau",
    specialty: "onOffice-Anbindung",
    summary:
      "Kompletter Neuaufbau einer modernen Immobilienwebsite mit direkter Anbindung an onOffice.",
    teaserResult:
      "Moderner Immobilienauftritt mit direkter onOffice-Anbindung für die Objektverwaltung.",
    result:
      "Kompletter Website-Relaunch inklusive nahtloser onOffice-Integration für eine effiziente Objektverwaltung.",
    situationHeadline: "Was sollte sich verändern?",
    situation:
      "Die bisherige Online-Präsenz sollte vollständig modernisiert und klarer auf die Zielgruppe ausgerichtet werden. Gleichzeitig war eine direkte Verbindung zum bestehenden onOffice-System wichtig, damit Immobilienangebote ohne doppelte Pflege auf der Website erscheinen können.",
    goalHeadline: "Mehr Klarheit, weniger manueller Aufwand.",
    goal:
      "Ziel war ein moderner Immobilienauftritt, der Vertrauen schafft, Objekte übersichtlich präsentiert und die zentrale Pflege der Immobilien über onOffice ermöglicht.",
    goalStatement: "Ein moderner Auftritt + automatisierte Objektverwaltung.",
    implementationHeadline: "So wurde aus der Idee die neue Website.",
    implementation:
      "Struktur, Design und Technik wurden neu aufgebaut. Die Website verbindet klare Nutzerführung mit einer direkten Anbindung an onOffice – damit Objekte aktuell bleiben, ohne doppelte Pflege.",
    steps: [
      {
        title: "Struktur & Nutzerführung",
        text: "Klare Navigation und verständliche Seitenstruktur für Interessenten und Eigentümer.",
      },
      {
        title: "Individuelles Webdesign",
        text: "Modernes, ruhiges Design passend zur Immobilienbranche und zum bestehenden Markenauftritt.",
      },
      {
        title: "Technische Entwicklung",
        text: "Responsive Umsetzung mit Fokus auf Performance und sauberer Darstellung auf allen Geräten.",
      },
      {
        title: "onOffice Integration",
        text: "Automatische Übertragung und Darstellung der Immobilien aus dem bestehenden System.",
      },
    ],
    featuresHeadline: "Mehr als nur gutes Design.",
    features: [
      {
        title: "onOffice",
        text: "Immobilien werden zentral gepflegt und automatisch auf der Website dargestellt.",
      },
      {
        title: "Automatische Immobilienübernahme",
        text: "Neue oder geänderte Objekte erscheinen auf der Website, ohne sie ein zweites Mal einzupflegen.",
      },
      {
        title: "Objektdetailseiten",
        text: "Jedes Angebot erhält eine klare Detailseite mit den Informationen, die Interessenten für die nächste Anfrage brauchen.",
      },
      {
        title: "Responsive Darstellung",
        text: "Die Website bleibt auf Smartphone, Tablet und Desktop übersichtlich und bedienbar.",
      },
      {
        title: "Kontaktmöglichkeiten",
        text: "Telefon, Formular und klare nächste Schritte sind dort platziert, wo die Entscheidung zur Anfrage fällt.",
      },
      {
        title: "SEO-Grundlagen",
        text: "Saubere Seitenstruktur, verständliche Texte und technische Basis, damit die Website regional auffindbar ist.",
      },
    ],
    resultSectionHeadline:
      "Ein professioneller Auftritt, der im Alltag funktioniert.",
    resultHeadline:
      "Automatisierte Objektverwaltung durch direkte onOffice-Anbindung.",
    outcome:
      "Die Website präsentiert Immobilien professionell, hält Inhalte zentral aktuell und reduziert den manuellen Pflegeaufwand.",
    services: [
      "Konzeption",
      "Webdesign",
      "Entwicklung",
      "Responsive Design",
      "SEO-Grundlagen",
      "onOffice Integration",
      "Content-Struktur",
    ],
    metaServices: ["Webdesign", "Entwicklung", "onOffice"],
    heroMeta: [
      { label: "Leistung", value: "Webdesign & Entwicklung" },
      { label: "Branche", value: "Immobilien" },
      { label: "Projektart", value: "Kompletter Neuaufbau" },
      { label: "Besonderheit", value: "onOffice-Anbindung" },
    ],
    facts: [
      { label: "Kunde", value: "HE Immologis" },
      { label: "Branche", value: "Immobilien" },
      { label: "Leistungen", value: "Webdesign & Entwicklung" },
      { label: "System", value: "onOffice Integration" },
      { label: "Status", value: "Live" },
    ],
    image: {
      src: "/case-he.png",
      alt: "Startseite der Immobilienwebsite von HE Immologis",
      width: 1898,
      height: 861,
    },
    gallery: [
      {
        src: "/case-he-tablet.png",
        alt: "Tablet-Ansicht der HE-Immologis-Website mit Navigation und Hero-Bereich",
        width: 511,
        height: 737,
      },
    ],
    mobileImages: [
      {
        src: "/case-he-mobile.png",
        alt: "Mobile Startseite von HE Immologis mit Kauf-, Miet- und Suchfunktionen",
        width: 351,
        height: 757,
      },
    ],
    featured: true,
    featuredOrder: 1,
    relatedServices: [
      { label: "Website Relaunch", href: "/website-relaunch" },
      { label: "Webdesign Darmstadt", href: "/webdesign/darmstadt" },
    ],
    seo: {
      title: "HE Immologis · Immobilienwebsite mit onOffice",
      description:
        "Projekt: Neuaufbau der Website für HE Immologis – moderner Immobilienauftritt mit onOffice-Anbindung, klarer Objektpräsentation und weniger manuellem Pflegeaufwand.",
    },
  },
  {
    slug: "heinerfilm",
    title: "Heinerfilm",
    shortTitle: "Heinerfilm",
    industry: "Videoproduktion",
    role: "Videograf",
    location: "Darmstadt",
    duration: "3 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/heinerfilm",
    liveUrl: "https://www.heinerfilm.de",
    logoSrc: "/kunden-logo/heinerfilm.png",
    heroLine: "Videoproduktion · Webdesign · Referenzen",
    serviceLabel: "Webdesign & Entwicklung",
    projectType: "Kompletter Neuaufbau",
    specialty: "Projektpräsentation",
    summary:
      "Kompletter Neuaufbau einer modernen Website zur Präsentation von Filmprojekten und zur einfachen Kontaktaufnahme.",
    teaserResult:
      "Moderner Webauftritt zur professionellen Präsentation von Videoprojekten.",
    result:
      "Moderner Webauftritt zur professionellen Präsentation seiner Videoprojekte und einfachen Kontaktaufnahme.",
    situationHeadline: "Was sollte sich verändern?",
    situation:
      "Filmprojekte und die eigene Arbeit sollten professioneller sichtbar werden. Der Auftritt sollte zur kreativen Arbeit passen, Referenzen klar zeigen und den Weg zur Anfrage möglichst kurz halten.",
    goalHeadline: "Die Arbeit im Mittelpunkt, Kontakt ohne Umwege.",
    goal:
      "Eine Website, die Projekte stark präsentiert, Vertrauen aufbaut und Interessenten schnell zur Anfrage führt – ohne vom eigentlichen Filmwerk abzulenken.",
    goalStatement: "Starke Projektpräsentation mit klarer Kontaktaufnahme.",
    implementationHeadline: "So wurde aus der Idee die neue Website.",
    implementation:
      "Der neue Auftritt setzt auf ruhige Typografie, großzügige Bildflächen und eine klare Struktur für Referenzen und Kontakt.",
    steps: [
      {
        title: "Struktur & Fokus",
        text: "Eine übersichtliche Seitenführung, in der Arbeit, Angebot und Kontakt schnell erfassbar sind.",
      },
      {
        title: "Individuelles Webdesign",
        text: "Ruhiges, filmisches Layout mit viel Raum für Bilder – passend zur Videoproduktion, ohne unnötige Effekte.",
      },
      {
        title: "Referenzdarstellung",
        text: "Projekte werden so präsentiert, dass Qualität und Bandbreite der Arbeit unmittelbar sichtbar werden.",
      },
      {
        title: "Klare Kontaktwege",
        text: "Anfragen sind ohne Umwege erreichbar – für Kundinnen und Kunden, die konkret ein Videoprojekt planen.",
      },
    ],
    featuresHeadline: "Mehr als nur gutes Design.",
    features: [
      {
        title: "Referenzdarstellung",
        text: "Ausgewählte Filmprojekte stehen im Vordergrund und machen die Qualität der Arbeit direkt erfahrbar.",
      },
      {
        title: "Ruhiges Layout",
        text: "Großzügige Bildflächen und klare Typografie lassen die Videos wirken, statt mit der Website zu konkurrieren.",
      },
      {
        title: "Kontaktformulare",
        text: "Interessenten finden den Weg zur Anfrage, ohne lange suchen zu müssen.",
      },
      {
        title: "Responsive Design",
        text: "Projekte und Kontakt bleiben auf dem Smartphone ebenso klar wie am Desktop.",
      },
      {
        title: "SEO-Grundlagen",
        text: "Verständliche Seitenstruktur und technische Basis, damit die Website gefunden werden kann.",
      },
    ],
    resultSectionHeadline:
      "Ein professioneller Auftritt, der im Alltag funktioniert.",
    resultHeadline:
      "Starke Projektpräsentation mit klarer Aufforderung zur Kontaktaufnahme.",
    outcome:
      "Die Arbeit steht im Vordergrund. Interessenten erfassen das Angebot schnell und finden den Weg zur Anfrage ohne Umwege.",
    services: [
      "Konzeption",
      "Webdesign",
      "Entwicklung",
      "Referenzdarstellung",
      "Responsive Design",
      "SEO-Grundlagen",
      "Kontaktwege",
    ],
    metaServices: ["Webdesign", "Referenzen", "Kontakt"],
    heroMeta: [
      { label: "Leistung", value: "Webdesign & Entwicklung" },
      { label: "Branche", value: "Videoproduktion" },
      { label: "Projektart", value: "Kompletter Neuaufbau" },
      { label: "Besonderheit", value: "Projektpräsentation" },
    ],
    facts: [
      { label: "Kunde", value: "Heinerfilm" },
      { label: "Branche", value: "Videoproduktion" },
      { label: "Leistungen", value: "Webdesign & Entwicklung" },
      { label: "Fokus", value: "Referenzen & Kontakt" },
      { label: "Status", value: "Live" },
    ],
    image: {
      src: "/case-heinerfilm.png",
      alt: "Startseite der Website von Heinerfilm",
      width: 1892,
      height: 870,
    },
    featured: true,
    featuredOrder: 2,
    relatedServices: [
      { label: "Webdesign Darmstadt", href: "/webdesign/darmstadt" },
      { label: "Website Relaunch", href: "/website-relaunch" },
    ],
    seo: {
      title: "Heinerfilm · Website für Videoproduktion",
      description:
        "Projekt: Website-Neuaufbau für Heinerfilm – klare Projektpräsentation, ruhiges Design und direkte Kontaktwege für Kundinnen und Kunden aus der Videoproduktion.",
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
    heroLine: "Elektrotechnik · Webdesign · Relaunch",
    serviceLabel: "Webdesign & Entwicklung",
    projectType: "Website-Relaunch",
    specialty: "Leistungs- und Karrierestruktur",
    summary:
      "Neuer moderner Unternehmensauftritt mit klarer Leistungsstruktur, Karrierebereich und Kontaktmöglichkeiten.",
    teaserResult:
      "Professioneller Unternehmensauftritt mit klarer Leistungsdarstellung und moderner Nutzerführung.",
    result:
      "Moderner und professioneller Unternehmensauftritt mit klarem Fokus auf Industrie- und Gewerbekunden. Die neue Website stärkt das Vertrauen potenzieller Kunden und erleichtert die Kontaktaufnahme.",
    situationHeadline: "Was sollte sich verändern?",
    situation:
      "Als Handwerks- und Industriebetrieb brauchte Elektrotechnik Mager einen Auftritt, der Kompetenz ausstrahlt. Leistungen für Gewerbekunden sollten verständlich werden – inklusive eines klaren Weges für Anfragen und Bewerbungen.",
    goalHeadline: "Kompetenz zeigen, Leistungen sortieren, Kontakt erleichtern.",
    goal:
      "Ein seriöser Unternehmensauftritt mit klarer Leistungsstruktur, Karrieremöglichkeiten und einfachen Kontaktwegen – ausgerichtet auf Industrie- und Gewerbekunden.",
    goalStatement: "Klarer Unternehmensauftritt für Industrie und Gewerbe.",
    implementationHeadline: "So wurde aus der Idee die neue Website.",
    implementation:
      "Leistungen, Karriere und Kontakt wurden neu strukturiert. Design und Technik unterstützen Vertrauen, Auffindbarkeit und eine ruhige, professionelle Nutzerführung.",
    steps: [
      {
        title: "Leistungsstruktur",
        text: "Angebote für Industrie und Gewerbe wurden so gegliedert, dass Auftraggeber schnell das Richtige finden.",
      },
      {
        title: "Unternehmensdesign",
        text: "Ein seriöses, modernes Erscheinungsbild, das zur technischen Kompetenz des Betriebs passt.",
      },
      {
        title: "Karriere & Kontakt",
        text: "Bewerbungen und Anfragen erhalten eigene, klare Wege – ohne Umwege über unübersichtliche Seiten.",
      },
      {
        title: "Technische Grundlagen",
        text: "Responsive Umsetzung, SEO-Grundlagen und eine Struktur, die sich später erweitern lässt.",
      },
    ],
    featuresHeadline: "Mehr als nur gutes Design.",
    features: [
      {
        title: "Leistungsseiten",
        text: "Einzelne Angebote sind verständlich aufbereitet, damit Gewerbekunden den passenden Leistungsumfang erkennen.",
      },
      {
        title: "Karrierebereich",
        text: "Offene Stellen und der Weg zur Bewerbung sind fest in die Website integriert.",
      },
      {
        title: "Kontaktformulare",
        text: "Anfragen kommen dort an, wo sie im Betriebsalltag gebraucht werden.",
      },
      {
        title: "SEO-Grundlagen",
        text: "Regionale Auffindbarkeit wurde von Beginn an mitgedacht – ohne künstliche Versprechen.",
      },
      {
        title: "Mobile Optimierung",
        text: "Auch unterwegs bleiben Leistungen, Karriere und Kontakt gut bedienbar.",
      },
    ],
    resultSectionHeadline:
      "Ein professioneller Auftritt, der im Alltag funktioniert.",
    resultHeadline:
      "Klarer Unternehmensauftritt für Industrie- und Gewerbekunden.",
    outcome:
      "Gewerbekunden finden Leistungen schneller. Der Auftritt wirkt seriös, modern und erleichtert sowohl Anfragen als auch Bewerbungen.",
    services: [
      "Konzeption",
      "Webdesign",
      "Entwicklung",
      "Leistungsseiten",
      "Karrierebereich",
      "Responsive Design",
      "SEO-Grundlagen",
    ],
    metaServices: ["Webdesign", "Leistungsseiten", "SEO"],
    heroMeta: [
      { label: "Leistung", value: "Webdesign & Entwicklung" },
      { label: "Branche", value: "Elektrotechnik" },
      { label: "Projektart", value: "Website-Relaunch" },
      { label: "Besonderheit", value: "Leistungs- und Karrierestruktur" },
    ],
    facts: [
      { label: "Kunde", value: "Elektrotechnik Mager" },
      { label: "Branche", value: "Elektrotechnik" },
      { label: "Leistungen", value: "Webdesign & Entwicklung" },
      { label: "Fokus", value: "Leistungen & Karriere" },
      { label: "Status", value: "Live" },
    ],
    image: {
      src: "/case-etm.png",
      alt: "Startseite der Unternehmenswebsite von Elektrotechnik Mager",
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
        href: "/webdesign-handwerker",
      },
      { label: "Website Relaunch", href: "/website-relaunch" },
      { label: "SEO Darmstadt", href: "/seo-darmstadt" },
    ],
    seo: {
      title: "Elektrotechnik Mager · Website-Relaunch",
      description:
        "Projekt: Website-Relaunch für Elektrotechnik Mager – klare Leistungsseiten, Karrierebereich und ein seriöser Auftritt für Industrie- und Gewerbekunden.",
    },
  },
  {
    slug: "baudienstleistungen-hofmann",
    title: "Baudienstleistungen Hofmann",
    shortTitle: "Baudienstleistungen Hofmann",
    industry: "Baudienstleistungen",
    role: "Bauunternehmen",
    location: "Rhein-Main",
    duration: "4 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/baudienstleistungen-hofmann",
    liveUrl: "https://www.baudienstleistungen-hofmann.de/",
    logoSrc: "/kunden-logo/baudienstleistungen-hofmann.png",
    heroLine: "Bau · Webdesign · Leistungsseiten",
    serviceLabel: "Webdesign & Entwicklung",
    projectType: "Kompletter Neuaufbau",
    specialty: "Klare Leistungsstruktur",
    summary:
      "Moderner Internetauftritt für ein regionales Bauunternehmen mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    teaserResult:
      "Moderner Internetauftritt mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    result:
      "Moderner Internetauftritt mit klarer Leistungsstruktur und direkter Kontaktmöglichkeit.",
    situationHeadline: "Was sollte sich verändern?",
    situation:
      "Das Unternehmen brauchte einen zeitgemäßen Webauftritt, der Baudienstleistungen verständlich darstellt und regionale Auftraggeber zur Kontaktaufnahme bewegt – ohne überladenes Agentur-Layout.",
    goalHeadline: "Leistungen verständlich machen, Vertrauen aufbauen.",
    goal:
      "Eine klare, vertrauenswürdige Website, die Baudienstleistungen strukturiert präsentiert und Anfragen erleichtert.",
    goalStatement: "Klarer Leistungsauftritt mit direkter Kontaktmöglichkeit.",
    implementationHeadline: "So wurde aus der Idee die neue Website.",
    implementation:
      "Leistungen, Vertrauen und Kontakt stehen im Fokus. Der Auftritt wirkt ruhig und professionell – passend zu einem regionalen Bauunternehmen.",
    steps: [
      {
        title: "Leistungsstruktur",
        text: "Angebote sind so gegliedert, dass Auftraggeber den Umfang schnell einschätzen können.",
      },
      {
        title: "Vertrauenswürdiges Design",
        text: "Ein ruhiger, seriöser Auftritt, der zur Bau- und Handwerksbranche passt.",
      },
      {
        title: "Technische Umsetzung",
        text: "Responsive Website mit sauberer Darstellung auf allen Geräten.",
      },
      {
        title: "Direkte Kontaktwege",
        text: "Anfragen sind ohne Umwege erreichbar – per Formular oder Telefon.",
      },
    ],
    featuresHeadline: "Mehr als nur gutes Design.",
    features: [
      {
        title: "Leistungsseiten",
        text: "Baudienstleistungen sind klar beschrieben, statt in allgemeinen Floskeln zu verschwinden.",
      },
      {
        title: "Kontaktmöglichkeiten",
        text: "Auftraggeber gelangen direkt zur Anfrage, wenn sie das passende Angebot gefunden haben.",
      },
      {
        title: "Responsive Design",
        text: "Die Website bleibt auf dem Smartphone genauso verständlich wie am Schreibtisch.",
      },
      {
        title: "SEO-Grundlagen",
        text: "Regionale Auffindbarkeit wurde in Struktur und Texten mitgedacht.",
      },
    ],
    resultSectionHeadline:
      "Ein professioneller Auftritt, der im Alltag funktioniert.",
    resultHeadline: "Klarer Leistungsauftritt mit direkter Kontaktmöglichkeit.",
    outcome:
      "Auftraggeber finden Leistungen schneller und gelangen ohne Umwege zur Anfrage.",
    services: [
      "Konzeption",
      "Webdesign",
      "Entwicklung",
      "Leistungsseiten",
      "Responsive Design",
      "SEO-Grundlagen",
      "Kontaktwege",
    ],
    metaServices: ["Webdesign", "Leistungsseiten", "Kontakt"],
    heroMeta: [
      { label: "Leistung", value: "Webdesign & Entwicklung" },
      { label: "Branche", value: "Baudienstleistungen" },
      { label: "Projektart", value: "Kompletter Neuaufbau" },
      { label: "Besonderheit", value: "Klare Leistungsstruktur" },
    ],
    facts: [
      { label: "Kunde", value: "Baudienstleistungen Hofmann" },
      { label: "Branche", value: "Baudienstleistungen" },
      { label: "Leistungen", value: "Webdesign & Entwicklung" },
      { label: "Fokus", value: "Leistungsstruktur" },
      { label: "Status", value: "Live" },
    ],
    image: {
      src: "/case-hofmann.png",
      alt: "Startseite der Website von Baudienstleistungen Hofmann",
      width: 1440,
      height: 900,
    },
    featured: false,
    featuredOrder: 4,
    moreOrder: 1,
    relatedServices: [
      {
        label: "Homepage für Handwerker",
        href: "/webdesign-handwerker",
      },
      { label: "Webdesign Darmstadt", href: "/webdesign/darmstadt" },
    ],
    seo: {
      title: "Baudienstleistungen Hofmann · Website",
      description:
        "Projekt: Moderner Webauftritt für Baudienstleistungen Hofmann – klare Leistungsstruktur, seriöses Design und direkte Kontaktwege für regionale Auftraggeber.",
    },
  },
  {
    slug: "1klang-massage",
    title: "1klang Massage",
    shortTitle: "1klang Massage",
    industry: "Wellness & Massage",
    role: "Massagepraxis",
    location: "Rhein-Main",
    duration: "3 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/1klang-massage",
    liveUrl: "https://1klang-massage.de",
    logoSrc: "/kunden-logo/1klang.png",
    heroLine: "Wellness · Webdesign · Terminorientierung",
    serviceLabel: "Webdesign & Entwicklung",
    projectType: "Kompletter Neuaufbau",
    specialty: "Ruhiges, persönliches Design",
    summary:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung für ein Massageangebot.",
    teaserResult:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung.",
    result:
      "Persönlicher Webauftritt mit ruhigem Design und einfacher Terminorientierung.",
    situationHeadline: "Was sollte sich verändern?",
    situation:
      "Das Angebot sollte online ruhig, persönlich und einladend wirken – ohne unruhige Agentur-Optik oder überladene Buchungssysteme. Interessenten sollten Leistungen und den Weg zum Termin schnell verstehen.",
    goalHeadline: "Vertrauen schaffen, das Angebot klar erklären.",
    goal:
      "Eine Website, die Vertrauen schafft, Leistungen klar erklärt und Interessenten einfach zur Kontaktaufnahme führt.",
    goalStatement: "Ruhiger Auftritt mit klarer Terminorientierung.",
    implementationHeadline: "So wurde aus der Idee die neue Website.",
    implementation:
      "Ruhige Farbwelt, klare Texte und eine übersichtliche Struktur machen das Angebot verständlich. Kontakt und Terminorientierung stehen im Vordergrund.",
    steps: [
      {
        title: "Ruhige Nutzerführung",
        text: "Wenige, klare Schritte: Angebot verstehen, Vertrauen fassen, Termin anfragen.",
      },
      {
        title: "Persönliches Design",
        text: "Eine zurückhaltende Gestaltung, die zur Praxis passt und nicht nach Standard-Template aussieht.",
      },
      {
        title: "Leistungsdarstellung",
        text: "Massagen und Angebote sind so beschrieben, dass Interessenten den passenden Rahmen finden.",
      },
      {
        title: "Terminorientierung",
        text: "Kontakt und nächster Schritt sind jederzeit erreichbar – ohne komplizierte Buchungslogik.",
      },
    ],
    featuresHeadline: "Mehr als nur gutes Design.",
    features: [
      {
        title: "Ruhiges Design",
        text: "Zurückhaltende Farben und Typografie schaffen eine Atmosphäre, die zum Massageangebot passt.",
      },
      {
        title: "Leistungsdarstellung",
        text: "Angebote sind verständlich erklärt, ohne medizinische oder werbliche Übertreibung.",
      },
      {
        title: "Kontaktmöglichkeiten",
        text: "Der Weg zur Terminaufnahme bleibt kurz und persönlich.",
      },
      {
        title: "Mobile Optimierung",
        text: "Auch unterwegs bleibt die Website ruhig, lesbar und gut bedienbar.",
      },
    ],
    resultSectionHeadline:
      "Ein professioneller Auftritt, der im Alltag funktioniert.",
    resultHeadline: "Ruhiger Auftritt mit klarer Terminorientierung.",
    outcome:
      "Interessenten erfassen das Angebot schnell und finden den Weg zur Terminaufnahme ohne Ablenkung.",
    services: [
      "Konzeption",
      "Webdesign",
      "Entwicklung",
      "Leistungsdarstellung",
      "Responsive Design",
      "Kontaktwege",
    ],
    metaServices: ["Webdesign", "Leistungen", "Kontakt"],
    heroMeta: [
      { label: "Leistung", value: "Webdesign & Entwicklung" },
      { label: "Branche", value: "Wellness & Massage" },
      { label: "Projektart", value: "Kompletter Neuaufbau" },
      { label: "Besonderheit", value: "Ruhiges, persönliches Design" },
    ],
    facts: [
      { label: "Kunde", value: "1klang Massage" },
      { label: "Branche", value: "Wellness & Massage" },
      { label: "Leistungen", value: "Webdesign & Entwicklung" },
      { label: "Fokus", value: "Terminorientierung" },
      { label: "Status", value: "Live" },
    ],
    image: {
      src: "/case-1klang.png",
      alt: "Startseite der Website von 1klang Massage",
      width: 1440,
      height: 900,
    },
    featured: false,
    featuredOrder: 5,
    moreOrder: 2,
    hidden: true,
    relatedServices: [
      { label: "Webdesign Darmstadt", href: "/webdesign/darmstadt" },
    ],
    seo: {
      title: "1klang Massage · Website für Wellness",
      description:
        "Projekt: Persönlicher Webauftritt für 1klang Massage – ruhiges Design, klare Leistungsdarstellung und einfache Terminorientierung.",
    },
  },
  {
    slug: "tierhotel-rhein-main",
    title: "Tierhotel Rhein-Main",
    shortTitle: "Tierhotel Rhein-Main",
    industry: "Tierbetreuung",
    role: "Tierhotel",
    location: "Rhein-Main",
    duration: "4 Wochen",
    service: "Website Relaunch",
    href: "/portfolio/tierhotel-rhein-main",
    liveUrl: "https://tierhotel-rhein-main.de",
    logoSrc: "/kunden-logo/tierhotel.png",
    heroLine: "Tierbetreuung · Relaunch · Webdesign",
    serviceLabel: "Webdesign & Entwicklung",
    projectType: "Website-Relaunch",
    specialty: "Sichtbarer Neuauftritt",
    summary:
      "Relaunch eines regionalen Tierhotels – von veraltetem Auftritt zu klarer, vertrauenswürdiger Online-Präsenz.",
    teaserResult:
      "Moderner Relaunch mit klarer Struktur und deutlich professionellerem ersten Eindruck.",
    result:
      "Von veraltet und austauschbar zu klar, schnell und anfrageorientiert – der Unterschied ist sichtbar.",
    situationHeadline: "Was sollte sich verändern?",
    situation:
      "Der bisherige Auftritt wirkte veraltet und vermittelte zu wenig Vertrauen – obwohl das Angebot regional stark nachgefragt wird. Leistungen, Ablauf und Kontakt sollten endlich klar erkennbar sein.",
    goalHeadline: "Einen zeitgemäßen ersten Eindruck schaffen.",
    goal:
      "Ein zeitgemäßer Webauftritt, der Seriosität ausstrahlt, Leistungen klar zeigt und Anfragen erleichtert.",
    goalStatement: "Vom veralteten Auftritt zum klaren, vertrauenswürdigen Relaunch.",
    implementationHeadline: "So wurde aus der Idee die neue Website.",
    implementation:
      "Design, Struktur und Inhalte wurden neu aufgebaut. Der Fokus liegt auf Vertrauen, Übersichtlichkeit und einem starken ersten Eindruck – sichtbar im direkten Vorher/Nachher-Vergleich.",
    steps: [
      {
        title: "Neuaufbau der Struktur",
        text: "Leistungen, Ablauf und Kontakt sind so angeordnet, dass Besucher den Betrieb schnell verstehen.",
      },
      {
        title: "Vertrauenswürdiges Design",
        text: "Ein zeitgemäßer, ruhiger Auftritt, der Seriosität vermittelt – wichtig, wenn man sein Tier fremdbetreuen lässt.",
      },
      {
        title: "Technische Umsetzung",
        text: "Responsive Website mit klarem Fokus auf Übersichtlichkeit und einfache Bedienung.",
      },
      {
        title: "Anfragewege",
        text: "Der Weg zur Buchungsanfrage ist kürzer und klarer als im bisherigen Auftritt.",
      },
    ],
    featuresHeadline: "Mehr als nur gutes Design.",
    features: [
      {
        title: "Website-Relaunch",
        text: "Der komplette Auftritt wurde ersetzt – nicht nur farblich aufgefrischt.",
      },
      {
        title: "Klare Leistungsstruktur",
        text: "Angebot und Ablauf sind verständlich dargestellt, ohne unnötige Umwege.",
      },
      {
        title: "Responsive Design",
        text: "Die neue Website bleibt auf dem Smartphone genauso klar wie am Desktop.",
      },
      {
        title: "SEO-Grundlagen",
        text: "Eine saubere Basis für regionale Sichtbarkeit, ohne Ranking-Versprechen.",
      },
    ],
    resultSectionHeadline:
      "Ein professioneller Auftritt, der im Alltag funktioniert.",
    resultHeadline:
      "Vom veralteten Auftritt zum klaren, vertrauenswürdigen Relaunch.",
    outcome:
      "Der erste Eindruck wirkt professionell und vertrauenswürdig – Anfragen werden deutlich einfacher.",
    services: [
      "Konzeption",
      "Website-Relaunch",
      "Webdesign",
      "Entwicklung",
      "Content-Struktur",
      "Responsive Design",
      "SEO-Grundlagen",
    ],
    metaServices: ["Relaunch", "Webdesign", "SEO"],
    heroMeta: [
      { label: "Leistung", value: "Webdesign & Entwicklung" },
      { label: "Branche", value: "Tierbetreuung" },
      { label: "Projektart", value: "Website-Relaunch" },
      { label: "Besonderheit", value: "Sichtbarer Neuauftritt" },
    ],
    facts: [
      { label: "Kunde", value: "Tierhotel Rhein-Main" },
      { label: "Branche", value: "Tierbetreuung" },
      { label: "Leistungen", value: "Webdesign & Entwicklung" },
      { label: "Projektart", value: "Relaunch" },
      { label: "Status", value: "Live" },
    ],
    image: {
      src: "/case-tierhotel.png",
      alt: "Neue Startseite des Tierhotels Rhein-Main",
      width: 1440,
      height: 900,
    },
    beforeImage: {
      src: "/tierhotel-vorher.png",
      alt: "Vorher: älterer Webauftritt von Tierhotel Rhein-Main",
      width: 1906,
      height: 871,
    },
    afterImage: {
      src: "/tierhotel-header.png",
      alt: "Nachher: neuer Header der Website von Tierhotel Rhein-Main",
      width: 1897,
      height: 866,
    },
    featured: false,
    featuredOrder: 6,
    moreOrder: 3,
    relatedServices: [
      { label: "Website Relaunch", href: "/website-relaunch" },
      { label: "Webdesign Darmstadt", href: "/webdesign/darmstadt" },
    ],
    seo: {
      title: "Tierhotel Rhein-Main · Website-Relaunch",
      description:
        "Projekt: Website-Relaunch für Tierhotel Rhein-Main – vom veralteten Auftritt zu einer klaren, modernen und anfrageorientierten Website.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project || project.hidden) return undefined;
  return project;
}

export function getListedPortfolioProjects() {
  return portfolioProjects.filter((p) => !p.hidden);
}

export function getFeaturedProjects() {
  return getListedPortfolioProjects()
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

/** Alle Projekte für die Portfolio-Übersicht in Anzeigereihenfolge */
export function getAllPortfolioProjects() {
  return [...getListedPortfolioProjects()].sort((a, b) => {
    const aKey = a.featured
      ? (a.featuredOrder ?? 50)
      : 100 + (a.moreOrder ?? 50);
    const bKey = b.featured
      ? (b.featuredOrder ?? 50)
      : 100 + (b.moreOrder ?? 50);
    return aKey - bKey;
  });
}

export function getMoreProjects() {
  return getListedPortfolioProjects()
    .filter((p) => !p.featured)
    .sort((a, b) => (a.moreOrder ?? 99) - (b.moreOrder ?? 99));
}

export function getRelatedPortfolioProjects(currentSlug: string, limit = 2) {
  const others = getListedPortfolioProjects().filter(
    (p) => p.slug !== currentSlug,
  );
  const featured = others.filter((p) => p.featured);
  const rest = others.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getNextPortfolioProject(currentSlug: string) {
  const ordered = getAllPortfolioProjects();
  const index = ordered.findIndex((project) => project.slug === currentSlug);
  if (index === -1 || ordered.length < 2) return null;
  return ordered[(index + 1) % ordered.length];
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
