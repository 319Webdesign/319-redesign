"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function BeforeAfterCompare() {
  const [position, setPosition] = useState(52);

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-bg-soft select-none"
        style={{ touchAction: "none" }}
      >
        <Image
          src="/tierhotel-vorher.png"
          alt="Website vorher"
          fill
          sizes="(max-width: 672px) 100vw, 672px"
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
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover object-top"
          />
        </div>

        <div className="pointer-events-none absolute top-3 left-3 z-10 rounded-sm bg-bg/85 px-2 py-1 text-[11px] font-medium tracking-wide text-ink-muted">
          Vorher
        </div>
        <div
          className="pointer-events-none absolute top-3 right-3 z-10 rounded-sm bg-brand/85 px-2 py-1 text-[11px] font-medium tracking-wide text-white"
          style={{
            opacity: position < 88 ? 1 : 0,
            transition: "opacity 150ms ease",
          }}
        >
          Danach
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-bg"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          <span className="absolute top-1/2 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg shadow-[0_2px_10px_rgba(15,23,42,0.1)]">
            <span className="h-2.5 w-px bg-ink-muted" />
            <span className="mx-0.5 h-px w-2.5 bg-ink-muted" />
            <span className="h-2.5 w-px bg-ink-muted" />
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
      <p className="mt-3 text-center text-sm text-ink-subtle">
        Ziehen, um Alt und Neu zu vergleichen.
      </p>
    </div>
  );
}
