"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./shared/section-label";
import { FadeUp } from "./motion";
import SectionTitle from "./shared/section-title";
import { ArrowUpRight } from "./icons";

const EMAIL = "milhamrizky7@gmail.com";
const PHONE = "+62 822 7464 9029";
const PHONE_HREF = "tel:+6282274649029";
const GITHUB = "https://github.com/ilhamriz";

type ContactItem =
  | { id: string; label: string; value: string; action: "copy" }
  | {
      id: string;
      label: string;
      value: string;
      action: "call" | "visit";
      href: string;
      actionLabel: string;
    };

const contactList: ContactItem[] = [
  { id: "email", label: "Email", value: EMAIL, action: "copy" },
  {
    id: "phone",
    label: "Phone",
    value: PHONE,
    action: "call",
    href: PHONE_HREF,
    actionLabel: "Call",
  },
  {
    id: "github",
    label: "Github",
    value: "github.com/ilhamriz",
    action: "visit",
    href: GITHUB,
    actionLabel: "Visit",
  },
];

const rowClassName =
  "group w-full px-5 py-5 sm:px-6 grid min-[470px]:grid-cols-[88px_1fr_auto] items-center gap-2 sm:gap-4 font-mono transition-colors hover:bg-bg-3";

function ContactRow({
  item,
  copied,
  onCopy,
}: {
  item: ContactItem;
  copied: boolean;
  onCopy: () => void;
}) {
  const content = (
    <>
      <span className="text-xs uppercase tracking-widest text-text-muted">
        {item.label}
      </span>
      <span className="truncate text-sm text-text">{item.value}</span>
      <span
        className={cn(
          "text-xs uppercase tracking-wider text-muted transition-colors group-hover:text-accent-hover",
          item.action !== "copy" && "flex items-center gap-0.5",
        )}
      >
        {item.action === "copy"
          ? copied
            ? "Copied"
            : "Copy"
          : item.actionLabel}
        {item.action !== "copy" ? (
          <ArrowUpRight
            size={14}
            className="fill-muted transition-colors group-hover:fill-accent-hover"
          />
        ) : null}
      </span>
    </>
  );

  if (item.action === "copy") {
    return (
      <button
        type="button"
        onClick={onCopy}
        className={cn(rowClassName, "text-left cursor-pointer")}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={item.href}
      {...(item.action === "visit" && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={rowClassName}
    >
      {content}
    </a>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="max-w-container mx-auto px-6 pt-30 pb-15">
      <SectionLabel number="05" title="Contact" />
      <SectionTitle>
        Let&apos;s build{" "}
        <span className="font-serif-italic font-normal">
          something together.
        </span>
      </SectionTitle>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeUp delay={1} className="flex max-w-[430px] flex-col gap-4">
          <p className="text-xl text-text-dim">
            Open to frontend roles, freelance projects, and collaborations.
          </p>
          <p className="text-sm text-text-muted">
            Based in Pekanbaru — available remotely.
          </p>
        </FadeUp>

        <FadeUp delay={2}>
          <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-bg-2">
            {contactList.map((item) => (
              <ContactRow
                key={item.id}
                item={item}
                copied={copied}
                onCopy={copyEmail}
              />
            ))}
          </div>
        </FadeUp>
      </div>

      <div className="mt-20 pb-5 pt-15 text-center border-t border-border">
        <p className="text-balance text-[clamp(48px,8vw,110px)] font-medium leading-[0.95] tracking-tight text-text">
          <span className="font-serif-italic text-accent">Let&apos;s</span>{" "}
          build
        </p>
      </div>
    </section>
  );
}
