"use client";

import { cn } from "@/lib/cn";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "fade" | "slide" | "scale" | "subtle";

export type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
};

const variants: Record<
  RevealVariant,
  {
    hidden: { opacity: number; y?: number; scale?: number };
    visible: { opacity: number; y?: number; scale?: number };
  }
> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  subtle: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
};

export function Reveal({
  children,
  variant = "slide",
  delay = 0,
  className,
}: RevealProps) {
  const prefersReducedMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? "visible" : undefined}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
