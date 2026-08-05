"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { useId, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-border border-y border-border", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question} className="py-2">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-center justify-between gap-6 py-6 text-left",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
                )}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-brand transition-motion",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(!isOpen && "hidden")}
            >
              <p className="max-w-2xl pb-8 text-base leading-relaxed text-ink-muted sm:text-lg">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
