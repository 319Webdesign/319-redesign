# Tracking (GA4 & Google Ads)

Kurze technische Dokumentation der Conversion- und Analytics-Integration auf 319webdesign.de.

## 1. Geänderte Dateien

Neu:

- `src/lib/analytics.ts` – zentrale Tracking-Utility (`trackEvent`, Lead- und Click-Events, Consent Mode, gtag-Ladung)
- `src/lib/consent.ts` – Cookie-Consent-Speicher und Events
- `src/components/analytics/Analytics.tsx` – Pageviews bei App-Router-Navigation, Klick-Tracking für `tel:`, `mailto:` und WhatsApp
- `TRACKING.md` – diese Datei

Angepasst:

- `src/app/layout.tsx` – Consent-Mode-v2-Default (denied) plus Analytics-Komponente
- `src/components/legal/CookieConsent.tsx` – bestehendes Banner, ohne zweites Consent-UI
- `src/components/kontakt/ContactForm.tsx` – `request_quote` nur nach bestätigtem Erfolg
- `src/app/api/kontakt/route.ts` – Honeypot-Antwort ohne Conversion (`ignored: true`)
- `src/lib/seo.ts` – keine fest kodierte GA-Measurement-ID mehr
- `src/data/legal.ts` – Hinweis zu Google Analytics / Google Ads in der Datenschutzerklärung
- `.env.example` – benötigte Umgebungsvariablen

Kein Google Tag Manager. Es gibt nur ein Google-Tag (`gtag.js` / GA4).

## 2. Environment Variables

Pflicht in Vercel Production:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Die ID darf nicht im Code stehen. Die bisherige Live-Property war `G-2F2YJSZXG5` – diese in Vercel setzen, sofern sie weiterverwendet werden soll.

Optional:

```bash
NEXT_PUBLIC_PIRSCH_CODE=          # bestehendes Pirsch-Tracking, nach Consent
NEXT_PUBLIC_GA_DEBUG=true         # lädt GA auch lokal / außerhalb von Vercel Production
```

Ohne `NEXT_PUBLIC_GA_DEBUG=true` wird Google nur geladen, wenn `VERCEL_ENV=production` und der Nutzer zugestimmt hat.

## 3. GA4 Events

| Event | Bedeutung | Primäre Ads-Conversion? |
| --- | --- | --- |
| `page_view` | Seitenaufruf inkl. Client-Side-Navigation | Nein |
| `request_quote` | Erfolgreiche Projektanfrage (GA4-Empfehlung) | Optional, nicht parallel zu unten |
| `conversion_event_request_quote` | Dieselbe Anfrage, Name aus dem Google-Ads-Tag-Snippet | **Ja** (bestehende Ads-Aktion) |
| `generate_lead` | Hilfsfunktion vorhanden, aktuell kein Formular | Ja, sobald ein allgemeines Kontaktformular existiert |
| `click_phone` | Klick auf `tel:`-Link | Nein, nur sekundär |
| `click_email` | Klick auf `mailto:`-Link | Nein, nur sekundär |
| `click_whatsapp` | Klick auf WhatsApp-Link | Nein, nur sekundär |

Lead-Parameter:

- `form_name`
- `lead_type`
- `page_path`
- optional `topic` (gewähltes Formular-Thema)

Es gibt **keine** extra Danke-Seite. Nach dem Versand erscheint der Success-State im Formular. Deshalb wird Googles `gtagSendEvent(url)`-Helper (delayed navigation) **nicht** verwendet: es gibt keinen Seitenwechsel, auf den gewartet werden müsste.

Pageview und Submit werden nicht als zwei Lead-Conversions gezählt. Pro erfolgreichem Versand feuert `trackRequestQuote()` einmal `request_quote` und einmal `conversion_event_request_quote`. In Google Ads darf nur **eines** der beiden als primäre Conversion aktiv sein.

## 4. Formulare → Events

Aktuell existiert **ein** Formular: `ContactForm` auf `/kontakt` (`POST /api/kontakt`).

Funktion: Projektanfrage („Projekt unverbindlich anfragen“), inkl. Themen wie neue Website, Redesign, SEO, Corporate Design, Betreuung. Es gibt kein separates Website-Check- oder Angebotsformular.

Zuordnung:

- Erfolgreicher Versand → **`request_quote`** und **`conversion_event_request_quote`**
  - `form_name`: `contact_form`
  - `lead_type`: `quote`
- Fehlgeschlagener Versand, Validierungsfehler, Abbruch → **kein Event**
- Honeypot (Bots) → API antwortet `ok: true, ignored: true` → **kein Event**
- `generate_lead` wird für dieses Formular **nicht** zusätzlich gesendet.

`conversion_event_request_quote` ist der Eventname aus dem Google-Ads-gtag-Snippet der bestehenden Conversion. Es wird **nicht** per `event_callback` / `window.location` weitergeleitet.

`trackGenerateLead()` in `src/lib/analytics.ts` ist für ein späteres allgemeines Kontaktformular vorgesehen.

## 5. Consent / DSGVO

Es bleibt das bestehende Banner (`Cookies & Analyse`), Speicherkey `319-consent`.

Ablauf:

1. Im Root-Layout setzt ein Inline-Skript in `<head>` Google Consent Mode v2 auf **denied**:
   - `analytics_storage`
   - `ad_storage`
   - `ad_user_data`
   - `ad_personalization`
2. `gtag.js` und Pirsch werden **erst nach „Akzeptieren“** geladen.
3. Danach: `consent update` auf **granted** für die vier Werte (ein Consent-Schalter im bestehenden Banner).
4. „Ablehnen“ bzw. Widerruf über „Cookie-Einstellungen“ setzt Consent Mode wieder auf denied. Es werden keine Events mehr gesendet.
5. Ohne Consent: Tracking-Funktionen sind No-Ops und erzeugen keine Frontend-Fehler.

## 6. Tracking testen

### Lokal

1. In `.env.local` setzen:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GA_DEBUG=true
   ```
2. `npm run dev`
3. Cookie-Banner akzeptieren.
4. In Chrome die [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)-Erweiterung oder die Browser-Konsole nutzen. Alternativ GA4 DebugView (siehe unten).
5. Netzwerk: Vor Consent keine Requests an `googletagmanager.com/gtag/js`. Nach Consent genau ein gtag-Skript.

### GA4 DebugView

1. [Google Analytics](https://analytics.google.com) → Verwaltung → Datenanzeige → DebugView.
2. Am einfachsten: Chrome-Erweiterung „Google Analytics Debugger“ aktivieren oder in der URL `?debug_mode=true` (GA4 erkennt Debug-Hits, wenn der Debugger an ist).
3. Seite laden, Consent geben, zwischen Seiten navigieren → `page_view`.
4. Kontaktformular **erfolgreich** absenden → `request_quote` und `conversion_event_request_quote` (je einmal).
5. Formular absichtlich fehlschlagen lassen (z. B. kurze Nachricht oder SMTP-Fehler) → **kein** Lead-Event.
6. Telefon / E-Mail / WhatsApp anklicken → `click_phone` / `click_email` / `click_whatsapp`.

### Google Ads

1. Zuerst Events in GA4 prüfen (Echtzeit / DebugView), bis sie zuverlässig ankommen.
2. Die bestehende Google-Ads-Conversion **`conversion_event_request_quote`** (Google-Tag-Event) als **primäre** Conversion nutzen – das ist das Event aus dem gtag-Snippet.
3. `request_quote` **nicht** zusätzlich als zweite primäre Conversion importieren. Sonst zählt jede Anfrage doppelt.
4. `click_phone`, `click_email`, `click_whatsapp` höchstens als **sekundäre** Messwerte.
5. `generate_lead` erst importieren, wenn dieses Event wirklich ausgelöst wird.

Kampagnen für Leadgenerierung auf **`conversion_event_request_quote`** optimieren. Nicht auf Seitenaufrufe der Kontaktseite, CTA-Klicks oder das Öffnen des Formulars.

## 7. Empfehlung für Google Ads

Primär:

- `conversion_event_request_quote` – echte, serverseitig bestätigte Projektanfrage (bestehende Google-Ads-Aktion)

Nicht parallel primär:

- `request_quote` – dasselbe Lead in GA4; nur als Import nutzen, wenn die Tag-Conversion `conversion_event_request_quote` deaktiviert wird

Später, falls ein zweites allgemeines Kontaktformular kommt:

- `generate_lead`

Sekundär / Beobachtung:

- `click_phone`
- `click_email`
- `click_whatsapp`

Nicht als Lead-Conversion verwenden:

- `page_view`
- Besuch von `/kontakt`
- Klick auf „Kostenloses Erstgespräch“ oder andere CTAs ohne Formularerfolg
