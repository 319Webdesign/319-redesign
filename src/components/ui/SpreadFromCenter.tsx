"use client";

import { cn } from "@/lib/cn";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type SpreadFromCenterProps = {
  children: ReactNode;
  /** 1 = links (kommt aus der Mitte), 0 = Mitte, -1 = rechts */
  side: -1 | 0 | 1;
  delay?: number;
  distance?: number;
  className?: string;
};

export function SpreadFromCenter({
  children,
  side,
  delay = 0,
  distance = 110,
  className,
}: SpreadFromCenterProps) {
  const prefersReducedMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              x: side * distance,
              scale: side === 0 ? 0.96 : 0.98,
            }
      }
      animate={
        prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : undefined
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              x: 0,
              scale: 1,
            }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}
