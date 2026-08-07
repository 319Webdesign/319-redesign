"use client";

import { Button } from "@/components/ui/Button";
import {
  kontaktFormContent,
  kontaktTopics,
  type KontaktTopicId,
} from "@/data/kontakt";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useId, useState, type FormEvent } from "react";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message" | "topic" | "websiteUrl", string>
>;

type HasWebsite = "" | "ja" | "nein";

const fieldClass =
  "h-12 w-full rounded-md border border-white/25 bg-white/10 px-4 text-white outline-none transition-motion placeholder:text-white/40 focus:border-white/60 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

const textareaClass =
  "min-h-[140px] w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-white outline-none transition-motion placeholder:text-white/40 focus:border-white/60 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

const labelClass = "mb-2 block text-sm font-medium text-white";

const chipBase =
  "min-h-11 rounded-md border px-4 py-2.5 text-left text-sm font-medium transition-motion focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

export function ContactForm() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState<KontaktTopicId | "">("");
  const [hasWebsite, setHasWebsite] = useState<HasWebsite>("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  function validateClient(): FieldErrors {
    const errors: FieldErrors = {};
    if (name.trim().length < 2) {
      errors.name = "Bitte geben Sie Ihren Namen an.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    }
    if (message.trim().length < 10) {
      errors.message =
        "Bitte beschreiben Sie Ihr Vorhaben mit mindestens ein paar Worten.";
    }
    return errors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const errors = validateClient();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          topic,
          hasWebsite,
          websiteUrl: websiteUrl.trim(),
          company: honeypot,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setFormError(
          data.error ||
            "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
        return;
      }

      setSuccess(true);
    } catch {
      setFormError(
        "Die Anfrage konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung oder kontaktieren Sie mich direkt.",
      );
    } finally {
      setPending(false);
    }
  }

  if (success) {
    return (
      <div
        className="rounded-lg border border-white/15 bg-brand px-6 py-10 sm:px-8 sm:py-12"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
          {kontaktFormContent.successTitle}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {kontaktFormContent.successText}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {kontaktFormContent.successLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              variant={link.href === "/" ? "primary" : "secondary"}
              size="md"
              className={
                link.href === "/"
                  ? undefined
                  : "border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white"
              }
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form
      id={`${formId}-form`}
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-lg border border-white/15 bg-brand px-5 py-8 sm:px-8 sm:py-10"
    >
      <header className="max-w-xl">
        <h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
          {kontaktFormContent.headline}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
          {kontaktFormContent.lead}
        </p>
      </header>

      {/* Honeypot – hidden from users */}
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden
      >
        <label htmlFor={`${formId}-company`}>Firma</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor={`${formId}-name`} className={labelClass}>
            Name <span className="text-cta">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={
              fieldErrors.name ? `${formId}-name-error` : undefined
            }
            className={cn(fieldClass, fieldErrors.name && "border-red-300")}
          />
          {fieldErrors.name ? (
            <p
              id={`${formId}-name-error`}
              className="mt-2 text-sm text-red-200"
              role="alert"
            >
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className={labelClass}>
            E-Mail <span className="text-cta">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? `${formId}-email-error` : undefined
            }
            className={cn(fieldClass, fieldErrors.email && "border-red-300")}
          />
          {fieldErrors.email ? (
            <p
              id={`${formId}-email-error`}
              className="mt-2 text-sm text-red-200"
              role="alert"
            >
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className={labelClass}>
            Telefon{" "}
            <span className="font-normal text-white/50">(optional)</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
          />
        </div>

        <fieldset>
          <legend className={labelClass}>Worum geht es?</legend>
          <div className="flex flex-wrap gap-2">
            {kontaktTopics.map((item) => {
              const selected = topic === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    setTopic((current) =>
                      current === item.id ? "" : item.id,
                    )
                  }
                  className={cn(
                    chipBase,
                    selected
                      ? "border-white bg-white text-brand"
                      : "border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className={labelClass}>
            Gibt es bereits eine Website?{" "}
            <span className="font-normal text-white/50">(optional)</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: "ja", label: "Ja" },
                { id: "nein", label: "Nein" },
              ] as const
            ).map((option) => {
              const selected = hasWebsite === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    setHasWebsite((current) =>
                      current === option.id ? "" : option.id,
                    )
                  }
                  className={cn(
                    chipBase,
                    "min-w-[5.5rem]",
                    selected
                      ? "border-white bg-white text-brand"
                      : "border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        {hasWebsite === "ja" ? (
          <div>
            <label htmlFor={`${formId}-website`} className={labelClass}>
              Website-Adresse{" "}
              <span className="font-normal text-white/50">(optional)</span>
            </label>
            <input
              id={`${formId}-website`}
              name="websiteUrl"
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder="www.beispiel.de"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              aria-invalid={Boolean(fieldErrors.websiteUrl)}
              aria-describedby={
                fieldErrors.websiteUrl
                  ? `${formId}-website-error`
                  : undefined
              }
              className={cn(
                fieldClass,
                fieldErrors.websiteUrl && "border-red-300",
              )}
            />
            {fieldErrors.websiteUrl ? (
              <p
                id={`${formId}-website-error`}
                className="mt-2 text-sm text-red-200"
                role="alert"
              >
                {fieldErrors.websiteUrl}
              </p>
            ) : null}
          </div>
        ) : null}

        <div>
          <label htmlFor={`${formId}-message`} className={labelClass}>
            Erzählen Sie mir kurz von Ihrem Vorhaben{" "}
            <span className="text-cta">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            placeholder="Was möchten Sie umsetzen oder verbessern? Ein paar Stichpunkte reichen völlig aus."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message ? `${formId}-message-error` : undefined
            }
            className={cn(
              textareaClass,
              fieldErrors.message && "border-red-300",
            )}
          />
          {fieldErrors.message ? (
            <p
              id={`${formId}-message-error`}
              className="mt-2 text-sm text-red-200"
              role="alert"
            >
              {fieldErrors.message}
            </p>
          ) : null}
        </div>
      </div>

      {formError ? (
        <p className="mt-5 text-sm text-red-200" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="mt-8">
        <Button type="submit" variant="primary" size="lg" disabled={pending}>
          {pending ? "Wird gesendet…" : kontaktFormContent.submitLabel}
        </Button>
        <p className="mt-3 text-sm text-white/70">
          {kontaktFormContent.submitNote}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/55">
          Mit dem Absenden nehmen Sie die{" "}
          <Link
            href={kontaktFormContent.privacyHref}
            className="font-medium text-white underline-offset-2 transition-colors hover:text-cta hover:underline"
          >
            Datenschutzerklärung
          </Link>{" "}
          zur Kenntnis.
        </p>
      </div>
    </form>
  );
}
