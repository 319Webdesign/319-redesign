import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type TrustBadgeProps = {
  icon?: ReactNode;
  label: string;
  value?: string;
  className?: string;
};

export function TrustBadge({ icon, label, value, className }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 py-2",
        className,
      )}
    >
      {icon ? (
        <span
          className="flex size-10 shrink-0 items-center justify-center text-brand [&_img]:size-6"
          aria-hidden
        >
          {icon}
        </span>
      ) : null}
      <div className="min-w-0">
        {value ? (
          <p className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
            {value}
          </p>
        ) : null}
        <p
          className={cn(
            "text-sm text-ink-muted",
            !value && "text-base font-medium text-ink",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
