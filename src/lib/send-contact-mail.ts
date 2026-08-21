import { siteConfig } from "@/data/site";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export type ContactMailPayload = {
  name: string;
  email: string;
  subject: string;
  text: string;
  html: string;
};

function env(name: string): string {
  return process.env[name]?.trim() ?? "";
}

function recipientAddress(): string {
  return (
    env("CONTACT_TO_EMAIL") ||
    env("SMTP_FROM") ||
    env("SMTP_USER") ||
    siteConfig.email
  );
}

function smtpConfigured(): boolean {
  return Boolean(env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASSWORD"));
}

function resendConfigured(): boolean {
  return Boolean(env("RESEND_API_KEY") && (env("CONTACT_FROM_EMAIL") || env("SMTP_FROM")));
}

export function isMailConfigured(): boolean {
  return smtpConfigured() || resendConfigured();
}

async function sendWithSmtp(payload: ContactMailPayload): Promise<void> {
  const port = Number(env("SMTP_PORT") || "587");
  const from = env("SMTP_FROM") || env("SMTP_USER");
  const to = recipientAddress();

  const transporter = nodemailer.createTransport({
    host: env("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: {
      user: env("SMTP_USER"),
      pass: env("SMTP_PASSWORD"),
    },
    connectionTimeout: 12_000,
    greetingTimeout: 12_000,
    socketTimeout: 12_000,
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });
}

async function sendWithResend(payload: ContactMailPayload): Promise<void> {
  const resend = new Resend(env("RESEND_API_KEY"));
  const from = env("CONTACT_FROM_EMAIL") || env("SMTP_FROM");
  const { data, error } = await resend.emails.send({
    from,
    to: [recipientAddress()],
    replyTo: payload.email,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });

  if (error) {
    throw new Error(error.message || "Resend konnte die E-Mail nicht senden.");
  }
  if (!data?.id) {
    throw new Error("Resend hat keine Versand-ID zurückgegeben.");
  }
}

export async function sendContactMail(payload: ContactMailPayload): Promise<void> {
  if (smtpConfigured()) {
    await sendWithSmtp(payload);
    return;
  }
  if (resendConfigured()) {
    await sendWithResend(payload);
    return;
  }
  throw new Error("Kein E-Mail-Versand konfiguriert.");
}
