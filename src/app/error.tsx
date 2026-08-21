"use client";

import { Button } from "@/components/ui";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      id="inhalt"
      tabIndex={-1}
      className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24 outline-none sm:px-8"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-brand">
        Fehler
      </p>
      <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Das hat leider nicht geklappt.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
        Beim Laden dieser Seite ist ein Fehler aufgetreten. Bitte versuchen Sie
        es erneut oder wechseln Sie zur Startseite.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button type="button" variant="primary" size="lg" onClick={reset}>
          Erneut versuchen
        </Button>
        <Button href="/" variant="secondary" size="lg">
          Zur Startseite
        </Button>
      </div>
    </div>
  );
}
