import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div id="inhalt" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
