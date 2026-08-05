"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function BeforeAfterCompare() {
  const [position, setPosition] = useState(52);

  return (
    <div>
      <div
        className="relative aspect-[1900/870] overflow-hidden rounded-lg border border-border bg-bg-soft select-none"
        style={{ touchAction: "none" }}
      >
        <Image
          src="/tierhotel-vorher.png"
          alt="Website vorher"
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover object-top"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <Image
            src="/tierhotel-header.png"
            alt="Website nachher"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover object-top"
          />
        </div>

        <div className="pointer-events-none absolute top-4 left-4 z-10 rounded-md bg-bg/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
          Vorher
        </div>
        <div
          className="pointer-events-none absolute top-4 right-4 z-10 rounded-md bg-brand/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
          style={{
            opacity: position < 88 ? 1 : 0,
            transition: "opacity 150ms ease",
          }}
        >
          Danach
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-bg"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg shadow-[0_4px_16px_rgba(15,23,42,0.15)]">
            <span className="h-3 w-0.5 bg-ink-muted" />
            <span className="mx-1 h-0.5 w-3 bg-ink-muted" />
            <span className="h-3 w-0.5 bg-ink-muted" />
          </span>
        </div>

        <input
          type="range"
          min={5}
          max={95}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className={cn(
            "absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0",
          )}
          aria-label="Vorher-Nachher-Vergleich verschieben"
        />
      </div>
      <p className="mt-4 text-sm text-ink-muted">
        Ziehen, um Alt und Neu zu vergleichen.
      </p>
    </div>
  );
}
