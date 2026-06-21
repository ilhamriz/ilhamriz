"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, MenuIcon, Close } from "./icons";
import { cn } from "@/lib/utils";
import {
  consumePendingSectionScroll,
  navigateToSection,
} from "@/lib/scroll-to-section";
import { Button } from "./ui/button";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const sectionIds = links.map((l) => l.id);

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const goToSection = (id: string) => {
    navigateToSection(id, pathname, router);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    consumePendingSectionScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50")}>
      <nav
        className={cn(
          "mx-auto flex max-w-container items-center justify-between px-6 py-4 transition-colors duration-300 border-b",
          scrolled
            ? "border-border bg-bg/80 backdrop-blur-md"
            : "border-transparent",
        )}
      >
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-text"
        >
          MIR
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === "/" && active === link.id;
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => goToSection(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent py-1 text-sm transition-colors"
                >
                  {/* Reserved space so the label doesn't shift when the dot
                      appears — same accent-dot vocabulary as the bullet
                      markers on the project pages. */}
                  <span
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "transition-colors",
                      isActive
                        ? "text-text"
                        : "text-text-dim group-hover:text-text",
                    )}
                  >
                    {link.label}
                  </span>
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-3.5 h-px bg-accent transition-all duration-300 group-hover:right-0",
                      isActive ? "right-0" : "right-full",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <Button
          size="sm"
          className="hidden md:inline-flex cursor-pointer"
          onClick={() => goToSection("contact")}
        >
          <span className="whitespace-nowrap">Get in touch</span>
          <div className="min-w-4">
            <ArrowUpRight size={16} className="fill-bg" />
          </div>
        </Button>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="w-10 h-10 flex justify-center items-center md:hidden text-text-dim transition-colors hover:text-text"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* ── Full-screen mobile menu ─────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-mono text-lg font-bold tracking-tight text-text"
              >
                MIR
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex justify-center items-center text-text-dim transition-colors hover:text-text"
              >
                <Close size={18} />
              </button>
            </div>

            <div className="border-t border-border" />

            <ul className="flex flex-1 flex-col justify-center gap-1 px-6">
              {links.map((link, i) => {
                const isActive = pathname === "/" && active === link.id;
                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 + i * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        goToSection(link.id);
                        setOpen(false);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex w-full cursor-pointer items-baseline gap-4 border-0 border-b border-border bg-transparent py-4 text-left"
                    >
                      <span className="font-mono text-xs text-text-muted">
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "text-3xl font-medium tracking-tight transition-colors",
                          isActive
                            ? "text-text"
                            : "text-text-dim group-active:text-text",
                        )}
                      >
                        {link.label}
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            <div className="px-6 pb-10">
              <Button
                onClick={() => {
                  goToSection("contact");
                  setOpen(false);
                }}
                className="w-full justify-center"
              >
                <span className="whitespace-nowrap">Get in touch</span>
                <div className="min-w-4">
                  <ArrowUpRight size={16} className="fill-bg" />
                </div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
