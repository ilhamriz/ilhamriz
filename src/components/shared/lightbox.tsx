/* eslint-disable @next/next/no-img-element */
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectImage } from "@/lib/projects";

type LightboxState = {
  images: ProjectImage[];
  index: number;
} | null;

type LightboxContextValue = {
  open: (images: ProjectImage[], index: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>(null);

  const open = useCallback((images: ProjectImage[], index: number) => {
    setState({ images, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const step = useCallback((dir: 1 | -1) => {
    setState((s) =>
      s
        ? { ...s, index: (s.index + dir + s.images.length) % s.images.length }
        : s,
    );
  }, []);

  // Keyboard nav + body scroll lock while open
  useEffect(() => {
    if (!state) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [state, close, step]);

  const current = state?.images[state.index];

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {state && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 px-6 py-10 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={close}
              className="absolute right-5 top-5 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-text sm:right-8 sm:top-8"
            >
              Close ✕
            </button>

            {state.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 px-2 py-3 text-3xl text-text-muted transition-colors hover:text-text sm:left-6"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-3 text-3xl text-text-muted transition-colors hover:text-text sm:right-6"
                >
                  ›
                </button>
              </>
            )}

            <motion.div
              key={state.index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="flex max-h-[88vh] w-[min(94vw,1400px)] flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.file}
                alt={current.alt}
                className="max-h-[80vh] max-w-full rounded-md border border-border"
              />
              <p className="mt-4 max-w-md text-center text-sm text-text-dim">
                {current.alt}
              </p>
              {state.images.length > 1 && (
                <p className="mt-1 font-mono text-xs text-text-muted">
                  {state.index + 1} / {state.images.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

export function LightboxTrigger({
  image,
  images,
  index,
  width = 1440,
  height = 1024,
  priority,
  className,
  imgClassName,
}: {
  image: ProjectImage;
  images: ProjectImage[];
  index: number;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const ctx = useContext(LightboxContext);

  return (
    <button
      type="button"
      onClick={() => ctx?.open(images, index)}
      aria-label={`Preview: ${image.alt}`}
      className={
        className ??
        "block w-full overflow-hidden rounded-md border border-border transition-opacity hover:opacity-90"
      }
    >
      <Image
        src={image.file}
        alt={image.alt}
        width={width}
        height={height}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        className={imgClassName ?? "h-auto w-full"}
      />
    </button>
  );
}
