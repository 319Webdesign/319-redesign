/**
 * Inhalte der Leistungsseite /webdesign-handwerker.
 * Alle Texte in Du-Ansprache aus Maiks Ich-Perspektive.
 */

export const handwerkerPath = "/webdesign-handwerker";

export const handwerkerTitle = "Webdesign für Handwerker";

export const handwerkerMeta = {
  /** Wird mit `title.absolute` ausgegeben, damit die Marke nur einmal vorkommt. */
  title: "Webdesign für Handwerker | 319Webdesign",
  description:
    "Neue Website oder bestehende Handwerker-Homepage verbessern? Mit klaren Leistungsseiten, echten Projektbeispielen und einem einfachen Weg zur Anfrage.",
} as const;

export const handwerkerHero = {
  headline: handwerkerTitle,
  lead: "Ich erstelle und überarbeite Websites für Handwerksbetriebe rund um Trebur, Groß-Gerau und im Rhein-Main-Gebiet. Deine Kunden sehen schnell, welche Arbeiten du übernimmst, wo du im Einsatz bist und wie sie dich erreichen.",
  primaryCta: "Kostenloses Erstgespräch",
  primaryHref: "/kontakt",
  secondaryCta: "Handwerker-Projekt ansehen",
  secondaryHref: "#referenz-mager",
} as const;

export type HandwerkerOffer = {
  id: string;
  title: string;
  text?: string;
  textBeforeLink?: string;
  link?: { label: string; href: string };
  textAfterLink?: string;
  note?: string;
  cta: string;
  href: string;
};

export const handwerkerOffers: { title: string; items: HandwerkerOffer[] } = {
  title: "Neue Website oder bestehende Seite verbessern?",
  items: [
    {
      id: "neue-website",
      title: "Neue Website für deinen Handwerksbetrieb",
      text: "Wenn du eine neue Homepage für deinen Betrieb brauchst, entwickle ich eine Website mit klaren Leistungsseiten, echten Projektbeispielen und einem einfachen Kontaktweg. Bei Bedarf kommen eine Karriereseite und ein Bewerbungsformular dazu.",
      cta: "Neue Website anfragen",
      href: "/kontakt",
    },
    {
      id: "bestehende-website",
      title: "Bestehende Handwerker-Website verbessern",
      textBeforeLink:
        "Wenn deine Website bereits online ist, schaue ich mir an, ob Kunden deine Leistungen, dein Einsatzgebiet und den Kontakt schnell finden. Danach bekommst du eine Einschätzung, welche Änderungen sich in deinem aktuellen System umsetzen lassen und wann ein ",
      link: { label: "Website-Relaunch", href: "/website-relaunch" },
      textAfterLink: " sinnvoll ist.",
      note: "Bei WordPress-, Baukasten- und KI-erstellten Seiten hängen Änderungen vom System und den vorhandenen Zugängen ab.",
      cta: "Bestehende Website besprechen",
      href: "/kontakt",
    },
  ],
};

export const handwerkerReferenceId = "referenz-mager";

export const handwerkerReference = {
  title: "Website-Relaunch für Elektrotechnik Mager aus Groß-Gerau",
  projectSlug: "elektrotechnik-betrieb",
  image: {
    src: "/case-etm.png",
    alt: "Startseite der Website von Elektrotechnik Mager aus Groß-Gerau",
    width: 1897,
    height: 867,
  },
  parts: [
    {
      title: "Ausgangslage",
      text: "Der Elektrotechnikbetrieb wollte seine Leistungen für Industrie- und Gewerbekunden verständlicher darstellen.",
    },
    {
      title: "Umsetzung",
      text: "Die Leistungsstruktur wurde neu aufgebaut, damit Auftraggeber schnell das Passende finden. Dazu kamen ein Karrierebereich und eigene Kontaktwege.",
    },
    {
      title: "Ergebnis",
      text: "Anfragen und Bewerbungen haben eigene Kontaktwege. Der Karrierebereich zeigt offene Stellen und führt zum Bewerbungsformular.",
    },
  ],
  facts: [
    { label: "Gewerk", value: "Elektrotechnik" },
    { label: "Projektart", value: "Website-Relaunch" },
    { label: "Projektlaufzeit", value: "5 Wochen" },
  ],
  linkLabel: "Projekt Elektrotechnik Mager ansehen",
} as const;

export const handwerkerSecondReference = {
  projectSlug: "baudienstleistungen-hofmann",
  title: "Baudienstleistungen Hofmann",
  text: "Auch für dieses regionale Bauunternehmen habe ich die Website neu aufgebaut: Die Leistungen sind klar gegliedert und der Weg zur Anfrage ist kurz.",
  linkLabel: "Projekt Baudienstleistungen Hofmann ansehen",
} as const;

export type HandwerkerScopeLink = { label: string; href: string };

export type HandwerkerScopeItem = {
  title: string;
  text: string;
  link?: HandwerkerScopeLink;
};

export type HandwerkerScopeGroup = {
  label: string;
  items: HandwerkerScopeItem[];
};

export const handwerkerScope: {
  title: string;
  lead: string;
  included: HandwerkerScopeGroup;
  optional: HandwerkerScopeGroup;
} = {
  title: "Das gehört zu deiner Handwerker-Website",
  lead: "Du siehst direkt, was im Projekt steckt und was du zusätzlich dazubuchen kannst.",
  included: {
    label: "Gehört zum Projekt",
    items: [
      {
        title: "Leistungen und Einsatzgebiet",
        text: "Du bekommst Seiten, auf denen deine Arbeiten und dein Einsatzgebiet klar stehen. Besucher erkennen sofort, was du übernimmst und ob du in ihrer Nähe arbeitest.",
      },
      {
        title: "Referenzen und Projektfotos",
        text: "Deine echten Projekte erscheinen mit Gewerk, Aufgabe und, wenn sinnvoll, Ort. So sehen Kunden, wie deine Arbeit aussieht. Vorher-nachher-Bilder setze ich nur ein, wenn du passendes Material hast.",
      },
      {
        title: "Anruf und Anfrage am Handy",
        text: "Deine Telefonnummer ist am Smartphone mit einem Tipp erreichbar. Ein kurzes Formular fragt Vorhaben, Ort und Rückrufmöglichkeit ab. WhatsApp ergänze ich bei Bedarf.",
      },
      {
        title: "Lokale SEO-Grundlagen",
        text: "Klare Seitentitel, gegliederte Leistungsseiten, verständliche Standortangaben und interne Links helfen Besuchern und Google, deine Seiten zu verstehen. Das ist die Grundlage und keine Ranking-Zusage.",
        link: { label: "Mehr zu lokaler SEO", href: "/lokale-seo" },
      },
    ],
  },
  optional: {
    label: "Optional oder separat",
    items: [
      {
        title: "Karriere und Bewerbung",
        text: "Suchst du Mitarbeiter oder Azubis, bekommst du eine Seite für Stellen oder Ausbildung. Bewerber melden sich kurz am Smartphone.",
      },
      {
        title: "Google-Unternehmensprofil",
        text: "Das Profil gehört nicht automatisch zur Website. Es ist eine eigene Leistung, die du zusätzlich buchen kannst, damit Betrieb, Leistungen und Fotos bei Google zur Website passen.",
        link: {
          label: "Google-Unternehmensprofil ansehen",
          href: "/leistungen/google-unternehmensprofil",
        },
      },
      {
        title: "Eigene Pflege und Betreuung",
        text: "Vereinbaren wir ein CMS wie WordPress, änderst du Texte und Bilder selbst. Zugänge und eine persönliche Einweisung übergebe ich dir, soweit das vereinbarte System sie vorsieht. Laufende Betreuung vereinbare ich bei Bedarf separat.",
        link: { label: "Website-Betreuung ansehen", href: "/betreuung" },
      },
    ],
  },
};

export const handwerkerCostsId = "kosten";

export const handwerkerCosts: {
  title: string;
  text: string;
  existingText: string;
  blocks: { title: string; text: string; link?: HandwerkerScopeLink }[];
} = {
  title: "Was kostet eine Website für Handwerker?",
  text: "Eine kompakte Website mit Leistungen, Projekten und Kontakt hat einen anderen Umfang als ein mehrseitiger Auftritt mit einzelnen Leistungsseiten und Karrierebereich. Im Erstgespräch klären wir, welche Seiten und Funktionen dein Betrieb braucht. Danach bekommst du ein Festpreisangebot für den vereinbarten Umfang.",
  existingText:
    "Bei einer bestehenden Website richtet sich der Aufwand nach dem System und den gewünschten Änderungen.",
  blocks: [
    {
      title: "Einmalig: das Projekt",
      text: "Konzept, Entwurf und Umsetzung deiner Website. Du zahlst den Festpreis für den Umfang, den wir vorher festlegen.",
    },
    {
      title: "Laufend: Hosting und Wartung",
      text: "Für Hosting und Domain fallen laufende Kosten an. Welche Lösung zu deiner Website passt, klären wir im Erstgespräch. Die Wartung ist optional: 79 € im Monat für Updates, Backups und bis zu zwei Arbeitsstunden für kleine Änderungen.",
      link: { label: "Website-Betreuung ansehen", href: "/betreuung" },
    },
  ],
};

export const handwerkerProcess = {
  title: "So entsteht deine Website",
  lead: "Umfang, vorhandene Inhalte und deine Freigaben bestimmen, wann die Seite online geht.",
  steps: [
    {
      title: "Betrieb und Ziel besprechen",
      description:
        "Welche Arbeiten möchtest du zeigen? Welche Kunden möchtest du erreichen? In welchen Orten bist du im Einsatz?",
    },
    {
      title: "Inhalte und Entwurf abstimmen",
      description:
        "Wir klären, wer die Texte vorbereitet und welche Fotos du liefern kannst. Ich plane die Seitenstruktur und gestalte den Entwurf. Du siehst beides, bevor ich die Seite technisch umsetze.",
    },
    {
      title: "Website umsetzen und testen",
      description:
        "Ich setze die Seite um und prüfe sie am Smartphone, den Anruflink, das Formular und die Zustellung der Anfragen an dein Postfach. Danach stimmen wir Korrekturen ab, bis das Ergebnis passt.",
    },
    {
      title: "Website veröffentlichen und übergeben",
      description:
        "Nach der finalen Prüfung geht die Seite online. Zugänge und Einweisung übergebe ich passend zur vereinbarten Lösung. Laufende Pflege und technische Betreuung kannst du optional dazubuchen.",
    },
  ],
} as const;

export type HandwerkerFaqItem = {
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

export const handwerkerFaqTitle = "Häufige Fragen zur Website für Handwerker";

export const handwerkerFaq: HandwerkerFaqItem[] = [
  {
    question: "Was kostet eine Handwerker-Website?",
    answer:
      "Das hängt vom Umfang ab. Eine kompakte Seite mit Leistungen, Projekten und Kontakt ist etwas anderes als ein mehrseitiger Auftritt mit Leistungsseiten und Karrierebereich. Nach dem Erstgespräch bekommst du ein Festpreisangebot für den vereinbarten Umfang.",
    links: [
      { label: "Kosten im Überblick", href: `#${handwerkerCostsId}` },
    ],
  },
  {
    question: "Kannst du meine bestehende WordPress- oder Baukasten-Website überarbeiten?",
    answer:
      "Oft ja. Ob sich Änderungen in deinem System umsetzen lassen, hängt vom System und den vorhandenen Zugängen ab. Ich schaue mir deine Seite an und sage dir, was möglich ist und wann ein Relaunch sinnvoller wäre.",
    links: [{ label: "Website-Relaunch", href: "/website-relaunch" }],
  },
  {
    question: "Wer schreibt die Texte und welche Fotos brauchst du vom Betrieb?",
    answer:
      "Du kennst deinen Betrieb am besten, ich unterstütze bei Struktur und Texten. Fotos brauche ich von dir, zum Beispiel vom Team, von deinen Fahrzeugen und von abgeschlossenen Projekten. Fehlen sie, planen wir Alternativen und eine spätere Bildstrecke.",
  },
  {
    question: "Wie lange dauert es, bis meine Website online ist?",
    answer:
      "Kleinere Websites sind oft nach 3 bis 5 Wochen online, größere Projekte brauchen etwa 5 bis 8 Wochen. Entscheidend sind Umfang, vorhandene Inhalte und wie schnell Freigaben kommen.",
  },
  {
    question: "Kann ich Projekte, Leistungen oder Stellenanzeigen später selbst ändern?",
    answer:
      "Das hängt vom vereinbarten System ab. Bei einem CMS wie WordPress änderst du Texte und Bilder selbst, und ich zeige dir das in einer persönlichen Einweisung. Welche weiteren Bereiche du selbst pflegst, etwa Projekte oder Stellenanzeigen, legen wir vorher fest.",
  },
  {
    question: "Welche laufenden Kosten gibt es für Hosting und Wartung?",
    answer:
      "Für Hosting und Domain fallen laufende Kosten an. Die Wartung ist optional und kostet 79 € im Monat. Sie enthält Updates, Backups und bis zu zwei Arbeitsstunden für kleine Änderungen.",
    links: [{ label: "Website-Betreuung", href: "/betreuung" }],
  },
  {
    question: "Hilfst du auch bei lokaler SEO und beim Google-Unternehmensprofil?",
    answer:
      "Die SEO-Grundlagen gehören zur Website: klare Seitentitel, gegliederte Leistungsseiten, Standortangaben und interne Links. Weiterführende lokale SEO und das Google-Unternehmensprofil sind eigene Leistungen, die du zusätzlich buchen kannst.",
    links: [
      { label: "Lokale SEO", href: "/lokale-seo" },
      {
        label: "Google-Unternehmensprofil",
        href: "/leistungen/google-unternehmensprofil",
      },
    ],
  },
  {
    question: "Für welche Handwerksbetriebe eignet sich das?",
    answer:
      "Für kleine und mittlere Handwerksbetriebe, zum Beispiel aus Elektro, SHK, Garten- und Ausbaugewerken. Wichtig ist, dass du deine Leistungen, dein Einsatzgebiet und echte Projekte zeigen möchtest.",
    links: [
      { label: "Projekt Elektrotechnik Mager", href: `#${handwerkerReferenceId}` },
    ],
  },
];

export const handwerkerCta = {
  title: "Neue Website geplant oder bestehende Seite verbessern?",
  lead: "Schick mir kurz dein Gewerk, deinen Standort und, falls vorhanden, den Link zu deiner Website. Dann schauen wir gemeinsam, welche Lösung für deinen Betrieb sinnvoll ist.",
  primaryLabel: "Kostenloses Erstgespräch",
} as const;
