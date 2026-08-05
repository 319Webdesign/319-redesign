import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const tones = {
  neutral: "bg-bg-soft text-ink-muted border-border",
  brand: "bg-brand-soft text-brand-dark border-transparent",
  muted: "bg-transparent text-ink-subtle border-border",
} as const;

export type BadgeProps = {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
