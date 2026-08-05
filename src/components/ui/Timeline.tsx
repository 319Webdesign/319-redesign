"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type TimelineStep = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export type TimelineProps = {
  steps: TimelineStep[];
  className?: string;
  /** "brand" = hell auf Markenblau */
  tone?: "default" | "brand";
  /** "stagger" = versetzt links/rechts mit Scroll-Effekt */
  layout?: "stack" | "stagger";
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Timeline({
  steps,
  className,
  tone = "default",
  layout = "stack",
}: TimelineProps) {
  if (layout === "stagger") {
    return (
      <StaggerTimeline steps={steps} className={className} tone={tone} />
    );
  }

  return <StackTimeline steps={steps} className={className} tone={tone} />;
}

function StackTimeline({
  steps,
  className,
  tone,
}: {
  steps: TimelineStep[];
  className?: string;
  tone: "default" | "brand";
}) {
  const prefersReducedMotion = useReducedMotion();
  const onBrand = tone === "brand";

  return (
    <ol className={cn("relative", className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <motion.li
            key={step.title}
            className={cn(
              "relative flex gap-6 sm:gap-8",
              !isLast && "pb-12 sm:pb-16",
            )}
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 28, x: -12 }
            }
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: index * 0.06,
              ease,
            }}
          >
            <div className="relative flex w-10 shrink-0 flex-col items-center">
              <StepMarker onBrand={onBrand} icon={step.icon} index={index} />
              {!isLast ? (
                <div
                  className={cn(
                    "absolute top-10 bottom-0 w-px",
                    onBrand ? "bg-white/20" : "bg-border",
                  )}
                  aria-hidden
                />
              ) : null}
            </div>

            <StepCopy step={step} onBrand={onBrand} />
          </motion.li>
        );
      })}
    </ol>
  );
}

function StaggerTimeline({
  steps,
  className,
  tone,
}: {
  steps: TimelineStep[];
  className?: string;
  tone: "default" | "brand";
}) {
  const prefersReducedMotion = useReducedMotion();
  const onBrand = tone === "brand";

  return (
    <ol className={cn("relative", className)}>
      <motion.div
        className={cn(
          "pointer-events-none absolute top-5 bottom-5 left-5 w-px origin-top md:left-1/2 md:-translate-x-1/2",
          onBrand ? "bg-white/20" : "bg-border",
        )}
        aria-hidden
        initial={prefersReducedMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.4, ease }}
      />

      {steps.map((step, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.li
            key={step.title}
            className="relative pb-14 last:pb-0 sm:pb-16 md:pb-20 md:last:pb-0"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: isLeft ? -64 : 64, y: 28 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Mobile */}
            <div className="relative z-10 flex gap-5 md:hidden">
              <div className="shrink-0">
                <StepMarker onBrand={onBrand} icon={step.icon} index={index} />
              </div>
              <StepCopy step={step} onBrand={onBrand} />
            </div>

            {/* Desktop center marker */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-10 hidden -translate-x-1/2 md:block">
              <motion.div
                initial={
                  prefersReducedMotion ? false : { scale: 0.5, opacity: 0 }
                }
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.12, ease }}
              >
                <StepMarker onBrand={onBrand} icon={step.icon} index={index} />
              </motion.div>
            </div>

            {/* Desktop zigzag */}
            <div className="hidden md:grid md:grid-cols-2">
              <div className="pr-14 text-right">
                {isLeft ? (
                  <StepCopy step={step} onBrand={onBrand} align="right" />
                ) : null}
              </div>
              <div className="pl-14">
                {!isLeft ? <StepCopy step={step} onBrand={onBrand} /> : null}
              </div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

function StepMarker({
  onBrand,
  icon,
  index,
}: {
  onBrand: boolean;
  icon?: ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        "relative z-10 flex size-10 items-center justify-center rounded-full border",
        onBrand
          ? "border-white/30 bg-brand text-white shadow-[0_0_0_6px_rgba(27,79,140,1)]"
          : "border-border bg-bg text-brand",
      )}
    >
      {icon ? (
        icon
      ) : (
        <span className="font-display text-sm font-medium tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}

function StepCopy({
  step,
  onBrand,
  align = "left",
}: {
  step: TimelineStep;
  onBrand: boolean;
  align?: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "min-w-0",
        align === "right" ? "md:ml-auto md:max-w-md" : "md:max-w-md",
      )}
    >
      <h3
        className={cn(
          "font-display text-xl font-medium tracking-tight sm:text-[1.375rem]",
          onBrand ? "text-white" : "text-ink",
        )}
      >
        {step.title}
      </h3>
      {step.description ? (
        <p
          className={cn(
            "mt-2 text-lg leading-relaxed",
            onBrand ? "text-white/75" : "text-ink-muted",
          )}
        >
          {step.description}
        </p>
      ) : null}
    </div>
  );
}
