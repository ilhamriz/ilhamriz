"use client";

import { useState } from "react";
// import { Check, Copy, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from "./shared/section-label";
import { FadeUp } from "./motion";
import SectionTitle from "./shared/section-title";

const EMAIL = "milhamrizky7@gmail.com";
const PHONE = "+62 822 7464 9029";
const LINKEDIN = "https://www.linkedin.com/in/muhammad-ilham-rizky";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="px-6 pt-30 pb-15">
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="05" title="Contact" />
        <SectionTitle>
          Let&apos;s build{" "}
          <span className="font-serif-italic">something together.</span>
        </SectionTitle>

        <div className="grid grid-cols-2 gap-6">
          <FadeUp delay={1} className="max-w-[430px] flex flex-col gap-4">
            <p className="text-xl">
              Open to frontend roles, freelance projects, and collaborations.
            </p>
            <p className="text-sm text-text-dim">
              Based in Pekanbaru — available remotely.
            </p>
          </FadeUp>

          <FadeUp delay={2} className="">
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-3 border-t border-border pt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Email
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-lg text-text underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:decoration-accent-hover"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email to clipboard"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-text"
                >
                  Copy
                </button>
              </div>

              <div className="flex items-center gap-3 border-t border-border pt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  LinkedIn
                </span>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-text"
                >
                  Muhammad Ilham Rizky
                  {/* <ArrowUpRight className="h-4 w-4" /> */}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
