export const legalContact = {
  company: "319Webdesign",
  legalForm: "Einzelunternehmer",
  owner: "Maik Schmidt",
  profession: "Webdesigner",
  street: "Weserstrasse 4",
  zipCity: "65468 Trebur",
  country: "Deutschland",
  taxNumber: "007 866 03257",
  email: "kontakt@319webdesign.com",
  phoneDisplay: "+49 177 323 64 54",
  phoneHref: "tel:+491773236454",
  odrUrl: "https://ec.europa.eu/consumers/odr/",
} as const;

export type LegalMeta = {
  title: { absolute: string };
  description: string;
  ogTitle: string;
  ogDescription: string;
  canonical: string;
};

export type LegalRow = {
  label: string;
  value?: string;
  lines?: readonly string[];
  href?: string;
};

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "card"; rows: readonly LegalRow[] }
  | { type: "link"; href: string; label: string; external?: boolean };

export type LegalSection = {
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalPageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  breadcrumbLabel: string;
  path: string;
  sections: readonly LegalSection[];
};

export const impressumMeta: LegalMeta = {
  title: {
    absolute: "Impressum – Rechtliche Angaben | 319Webdesign",
  },
  description:
    "Impressum 319Webdesign (Maik Schmidt), Weserstrasse 4, 65468 Trebur – Angaben gemäß § 5 DDG.",
  ogTitle: "Impressum – Rechtliche Angaben | 319Webdesign",
  ogDescription:
    "Impressum 319Webdesign (Maik Schmidt), Weserstrasse 4, 65468 Trebur – Angaben gemäß § 5 DDG.",
  canonical: "/impressum",
};

export const datenschutzMeta: LegalMeta = {
  title: {
    absolute: "Datenschutz – DSGVO-konform | 319Webdesign",
  },
  description:
    "Datenschutzerklärung von 319Webdesign: Informationen zu DSGVO, Cookies, Server-Logs und Kontaktformular.",
  ogTitle: "Datenschutz – DSGVO-konform | 319Webdesign",
  ogDescription:
    "Datenschutzerklärung von 319Webdesign: Informationen zu DSGVO, Cookies, Server-Logs und Kontaktformular.",
  canonical: "/datenschutz",
};

export const impressumContent: LegalPageContent = {
  eyebrow: "Rechtliches",
  title: "Impressum",
  lead: "Angaben gemäß § 5 DDG und weitere rechtliche Hinweise zu 319Webdesign.",
  breadcrumbLabel: "Impressum",
  path: "/impressum",
  sections: [
    {
      title: "Angaben gemäß § 5 DDG",
      blocks: [
        {
          type: "card",
          rows: [
            {
              label: "Unternehmen",
              lines: [legalContact.company, legalContact.legalForm],
            },
            {
              label: "Name des Inhabers",
              value: legalContact.owner,
            },
            {
              label: "Berufsbezeichnung",
              value: legalContact.profession,
            },
            {
              label: "Anschrift",
              lines: [
                legalContact.street,
                legalContact.zipCity,
                legalContact.country,
              ],
            },
            {
              label: "Steuernummer",
              value: legalContact.taxNumber,
            },
          ],
        },
      ],
    },
    {
      title: "Kontakt",
      blocks: [
        {
          type: "card",
          rows: [
            {
              label: "E-Mail",
              value: legalContact.email,
              href: `mailto:${legalContact.email}`,
            },
            {
              label: "Telefon",
              value: legalContact.phoneDisplay,
              href: legalContact.phoneHref,
            },
          ],
        },
      ],
    },
    {
      title: "Haftung für Inhalte",
      blocks: [
        {
          type: "p",
          text: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        },
        {
          type: "p",
          text: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
        },
      ],
    },
    {
      title: "Haftung für Links",
      blocks: [
        {
          type: "p",
          text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        },
        {
          type: "p",
          text: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        },
      ],
    },
    {
      title: "Urheberrecht",
      blocks: [
        {
          type: "p",
          text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        },
        {
          type: "p",
          text: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        },
      ],
    },
    {
      title: "Online-Streitbeilegung",
      blocks: [
        {
          type: "p",
          text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
        },
        {
          type: "link",
          href: legalContact.odrUrl,
          label: legalContact.odrUrl,
          external: true,
        },
        {
          type: "p",
          text: "Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        },
      ],
    },
  ],
};

export const datenschutzContent: LegalPageContent = {
  eyebrow: "Rechtliches",
  title: "Datenschutzerklärung",
  lead: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  breadcrumbLabel: "Datenschutz",
  path: "/datenschutz",
  sections: [
    {
      title: "1. Datenschutz auf einen Blick",
      blocks: [
        { type: "h3", text: "Allgemeine Hinweise" },
        {
          type: "p",
          text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        },
      ],
    },
    {
      title: "2. Verantwortliche Stelle",
      blocks: [
        {
          type: "p",
          text: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
        },
        {
          type: "card",
          rows: [
            {
              label: "Unternehmen",
              lines: [legalContact.company, legalContact.legalForm],
            },
            {
              label: "Name des Inhabers",
              value: legalContact.owner,
            },
            {
              label: "Anschrift",
              lines: [
                legalContact.street,
                legalContact.zipCity,
                legalContact.country,
              ],
            },
            {
              label: "E-Mail",
              value: legalContact.email,
              href: `mailto:${legalContact.email}`,
            },
            {
              label: "Telefon",
              value: legalContact.phoneDisplay,
              href: legalContact.phoneHref,
            },
            {
              label: "Steuernummer",
              value: legalContact.taxNumber,
            },
          ],
        },
        {
          type: "p",
          text: "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.",
        },
      ],
    },
    {
      title: "3. Datenerfassung auf dieser Website",
      blocks: [
        { type: "h3", text: "Cookies" },
        {
          type: "p",
          text: "Diese Website nutzt Cookies. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Einige Cookies sind für den Betrieb der Website erforderlich (notwendige Cookies), während andere uns helfen, die Nutzung der Website zu analysieren und zu verbessern (Analytics-Cookies).",
        },
        {
          type: "p",
          text: "Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner anpassen oder Ihre Browser-Einstellungen ändern, um Cookies zu blockieren. Bitte beachten Sie, dass die Funktionalität der Website dadurch eingeschränkt sein kann.",
        },
        { type: "h3", text: "Server-Log-Dateien" },
        {
          type: "p",
          text: "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:",
        },
        {
          type: "ul",
          items: [
            "Browsertyp und Browserversion",
            "verwendetes Betriebssystem",
            "Referrer URL",
            "Hostname des zugreifenden Rechners",
            "Uhrzeit der Serveranfrage",
            "IP-Adresse",
          ],
        },
        {
          type: "p",
          text: "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
        },
      ],
    },
    {
      title: "4. Kontaktformular",
      blocks: [
        {
          type: "p",
          text: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
        },
        {
          type: "p",
          text: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.",
        },
        {
          type: "p",
          text: "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
        },
      ],
    },
    {
      title: "5. Ihre Rechte",
      blocks: [
        { type: "p", text: "Sie haben jederzeit das Recht:" },
        {
          type: "ul",
          items: [
            "Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)",
            "Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)",
            "Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)",
            "Einschränkung der Datenverarbeitung zu verlangen, soweit wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)",
            "Widerspruch gegen die Verarbeitung Ihrer Daten bei uns zu erheben (Art. 21 DSGVO)",
            "Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)",
          ],
        },
        {
          type: "p",
          text: "Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.",
        },
        {
          type: "p",
          text: "Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.",
        },
      ],
    },
    {
      title: "6. Stand dieser Datenschutzerklärung",
      blocks: [
        {
          type: "p",
          text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.",
        },
        {
          type: "p",
          text: "Stand: August 2026",
        },
      ],
    },
  ],
};
