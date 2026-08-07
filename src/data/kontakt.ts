export const kontaktMeta = {
  title: {
    absolute: "Kontakt & Projektanfrage | 319Webdesign",
  },
  description:
    "Sie planen eine neue Website oder möchten Ihren digitalen Auftritt verbessern? Kontaktieren Sie 319Webdesign und besprechen Sie Ihr Projekt unverbindlich mit Maik Schmidt.",
  ogTitle: "Kontakt & Projektanfrage | 319Webdesign",
  ogDescription:
    "Sie planen eine neue Website oder möchten Ihren digitalen Auftritt verbessern? Kontaktieren Sie 319Webdesign und besprechen Sie Ihr Projekt unverbindlich mit Maik Schmidt.",
  canonical: "/kontakt",
} as const;

export const kontaktHero = {
  eyebrow: "Kontakt",
  headline: "Lassen Sie uns über Ihr Projekt sprechen.",
  lead: "Sie planen eine neue Website, möchten Ihren bestehenden Auftritt verbessern oder haben eine andere digitale Idee? Erzählen Sie mir kurz, worum es geht – gemeinsam schauen wir, welche Lösung sinnvoll ist.",
  trust: ["Unverbindlich", "Persönlich", "Direkter Ansprechpartner"],
} as const;

export const kontaktPerson = {
  eyebrow: "Ihr Ansprechpartner",
  name: "Maik Schmidt",
  company: "319Webdesign",
  text: "Ihre Anfrage landet direkt bei mir. Ich schaue mir Ihr Vorhaben persönlich an und melde mich anschließend bei Ihnen.",
  image: {
    src: "/maik.webp",
    alt: "Maik Schmidt – persönlicher Ansprechpartner bei 319Webdesign",
  },
  phoneDisplay: "+49 (0) 177 3236 454",
  trustItems: [
    "Unverbindliche Anfrage",
    "Persönlicher Ansprechpartner",
    "Individuelles Angebot",
    "Keine Standardpakete",
  ],
} as const;

export const kontaktFormContent = {
  headline: "Erzählen Sie mir kurz von Ihrem Vorhaben.",
  lead: "Sie müssen noch kein fertiges Konzept haben. Ein paar Informationen reichen für den ersten Austausch völlig aus.",
  submitLabel: "Projekt unverbindlich anfragen",
  submitNote: "Unverbindlich und ohne Verpflichtung.",
  privacyNote: "Mit dem Absenden nehmen Sie die Datenschutzerklärung zur Kenntnis.",
  privacyHref: "/datenschutz",
  successTitle: "Danke für Ihre Anfrage.",
  successText:
    "Ich habe Ihre Nachricht erhalten und schaue mir Ihr Vorhaben persönlich an. Ich melde mich anschließend bei Ihnen.",
  successLinks: [
    { label: "Zur Startseite", href: "/" },
    { label: "Projekte ansehen", href: "/portfolio" },
  ],
} as const;

export const kontaktTopics = [
  { id: "neue-website", label: "Neue Website" },
  { id: "redesign", label: "Bestehende Website / Redesign" },
  { id: "lokale-seo", label: "Lokale SEO" },
  { id: "corporate-design", label: "Corporate Design" },
  { id: "digitale-loesung", label: "Digitale Lösung" },
  { id: "betreuung", label: "Betreuung & Wartung" },
  { id: "unsicher", label: "Noch nicht sicher" },
] as const;

export type KontaktTopicId = (typeof kontaktTopics)[number]["id"];

export const kontaktUnsure = {
  eyebrow: "Noch nicht sicher?",
  headline: "Sie müssen noch nicht wissen, welche Lösung Sie brauchen.",
  lead: "Beschreiben Sie einfach, was aktuell nicht funktioniert oder was Sie gerne verbessern möchten. Im ersten Gespräch schauen wir gemeinsam, welche Lösung für Ihr Unternehmen sinnvoll ist.",
  examples: [
    "Unsere Website ist veraltet.",
    "Wir werden bei Google kaum gefunden.",
    "Unsere Website bringt keine Anfragen.",
    "Unser Unternehmensauftritt wirkt uneinheitlich.",
    "Wir möchten einen Prozess digitalisieren.",
    "Wir brauchen jemanden, der unsere Website betreut.",
  ],
  closing: "Genau dafür ist das Erstgespräch da.",
  links: [
    { label: "Leistungen ansehen", href: "/leistungen" },
    { label: "Webdesign", href: "/webdesign" },
  ],
} as const;

export const kontaktNextSteps = {
  eyebrow: "So geht es weiter",
  headline: "Von Ihrer Nachricht zum ersten Gespräch.",
  steps: [
    {
      number: "01",
      title: "Anfrage senden",
      text: "Sie erzählen mir kurz von Ihrem Vorhaben.",
    },
    {
      number: "02",
      title: "Ich schaue mir Ihr Projekt an",
      text: "Wenn bereits eine Website vorhanden ist, kann ich mir diese vor dem Gespräch ansehen.",
    },
    {
      number: "03",
      title: "Persönlicher Austausch",
      text: "Wir sprechen über Ihre Situation, Ziele und Anforderungen.",
    },
    {
      number: "04",
      title: "Nächste Schritte",
      text: "Wenn die Zusammenarbeit passt, erhalten Sie einen konkreten Vorschlag bzw. ein individuelles Angebot.",
    },
  ],
} as const;

export const kontaktFaq = [
  {
    question: "Ist das Erstgespräch kostenlos?",
    answer:
      "Ja. Das erste Gespräch ist kostenlos und unverbindlich. Dabei geht es zunächst darum, Ihr Unternehmen, Ihr Vorhaben und die Anforderungen kennenzulernen.",
  },
  {
    question: "Muss ich bereits genau wissen, was ich brauche?",
    answer:
      "Nein. Eine grobe Vorstellung oder Beschreibung des aktuellen Problems reicht völlig aus. Gemeinsam können wir anschließend klären, welche Lösung sinnvoll ist.",
  },
  {
    question: "Brauche ich bereits Texte und Bilder?",
    answer:
      "Nein. Falls für ein Website-Projekt noch keine fertigen Inhalte vorhanden sind, kann 319Webdesign bei Struktur, Texten und der Auswahl geeigneter Bilder unterstützen.",
  },
  {
    question: "Kann ich auch mit einer bestehenden Website anfragen?",
    answer:
      "Ja. Bestehende Websites können analysiert, überarbeitet, erweitert oder vollständig neu aufgebaut werden.",
  },
  {
    question: "Was kostet eine Website?",
    answer:
      "Der Preis hängt vom Umfang, den Funktionen und den Anforderungen des jeweiligen Projekts ab. Nach dem ersten Austausch erhalten Sie ein individuelles und transparentes Angebot.",
  },
  {
    question: "Arbeitest du nur mit Unternehmen aus der Region?",
    answer:
      "Der Schwerpunkt liegt auf regionalen Unternehmen und persönlichen Projekten im Rhein-Main-Gebiet. Eine Zusammenarbeit ist je nach Projekt jedoch auch vollständig digital möglich.",
  },
] as const;

export const kontaktClosing = {
  headline: "Lieber direkt sprechen?",
  lead: "Sie möchten Ihr Anliegen lieber persönlich besprechen? Dann können Sie mich auch direkt telefonisch oder per E-Mail erreichen.",
  callCta: "Jetzt anrufen",
  emailCta: "E-Mail schreiben",
} as const;
