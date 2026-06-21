"use client";

import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navigateToSection } from "@/lib/scroll-to-section";

type SectionNavLinkProps = {
  sectionId: string;
  className?: string;
  children: ReactNode;
};

export function SectionNavLink({
  sectionId,
  className,
  children,
}: SectionNavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => navigateToSection(sectionId, pathname, router)}
      className={className}
    >
      {children}
    </button>
  );
}
