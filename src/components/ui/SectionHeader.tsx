import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
  children,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-display text-balance text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {lead}
        </p>
      ) : null}
      {children}
    </header>
  );
}
