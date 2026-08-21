import { kontaktTopics, type KontaktTopicId } from "@/data/kontakt";
import { isMailConfigured, sendContactMail } from "@/lib/send-contact-mail";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type RateEntry = { count: number; resetAt: number };

const rateLimitStore = new Map<string, RateEntry>();

const TOPIC_IDS = new Set(kontaktTopics.map((t) => t.id));

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  topic?: string;
  hasWebsite?: "ja" | "nein" | "";
  websiteUrl?: string;
  hp_field?: string; // honeypot
};

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown, max = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function topicLabel(topicId: string): string {
  return kontaktTopics.find((t) => t.id === topicId)?.label ?? topicId;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  // Honeypot: silently succeed for bots
  if (sanitize(body.hp_field, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 180).toLowerCase();
  const phone = sanitize(body.phone, 60);
  const message = sanitize(body.message, 5000);
  const topic = sanitize(body.topic, 60);
  const hasWebsite =
    body.hasWebsite === "ja" || body.hasWebsite === "nein"
      ? body.hasWebsite
      : "";
  const websiteUrl = sanitize(body.websiteUrl, 300);

  const fieldErrors: Record<string, string> = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Bitte geben Sie Ihren Namen an.";
  }
  if (!email || !isValidEmail(email)) {
    fieldErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message =
      "Bitte beschreiben Sie Ihr Vorhaben mit mindestens ein paar Worten.";
  }
  if (topic && !TOPIC_IDS.has(topic as KontaktTopicId)) {
    fieldErrors.topic = "Bitte wählen Sie ein gültiges Thema.";
  }
  if (hasWebsite === "ja" && websiteUrl) {
    try {
      // Allow domains without protocol
      const normalized = websiteUrl.startsWith("http")
        ? websiteUrl
        : `https://${websiteUrl}`;
      new URL(normalized);
    } catch {
      fieldErrors.websiteUrl = "Bitte geben Sie eine gültige Website-Adresse an.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Bitte prüfen Sie Ihre Angaben.", fieldErrors },
      { status: 400 },
    );
  }

  if (!isMailConfigured()) {
    console.error("[kontakt] SMTP oder Resend ist nicht konfiguriert.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "Das Formular ist momentan nicht erreichbar. Bitte schreiben Sie mir direkt eine E-Mail oder rufen Sie an.",
      },
      { status: 503 },
    );
  }

  const topicLine = topic ? topicLabel(topic) : "Nicht angegeben";
  const websiteLine =
    hasWebsite === "ja"
      ? websiteUrl || "Ja (keine URL angegeben)"
      : hasWebsite === "nein"
        ? "Nein"
        : "Nicht angegeben";

  const textBody = [
    `Neue Projektanfrage über 319webdesign.de`,
    ``,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "–"}`,
    `Thema: ${topicLine}`,
    `Bestehende Website: ${websiteLine}`,
    ``,
    `Vorhaben:`,
    message,
  ].join("\n");

  const htmlBody = `
    <h2>Neue Projektanfrage</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
    <strong>E-Mail:</strong> ${escapeHtml(email)}<br/>
    <strong>Telefon:</strong> ${escapeHtml(phone || "–")}<br/>
    <strong>Thema:</strong> ${escapeHtml(topicLine)}<br/>
    <strong>Bestehende Website:</strong> ${escapeHtml(websiteLine)}</p>
    <p><strong>Vorhaben:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
  `;

  try {
    await sendContactMail({
      name,
      email,
      subject: `Projektanfrage von ${name}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unbekannter Fehler";
    console.error("[kontakt] Versandfehler:", errorMessage);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.",
      },
      { status: 502 },
    );
  }
}
