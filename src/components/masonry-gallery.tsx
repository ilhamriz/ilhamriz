"use client";

import { useState } from "react";
// import { X } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion";

const designs = ["01", "02", "03", "04", "05", "06"];

export function MasonryGallery() {
  const [active, setActive] = useState<string | null>(null);

  // Varied heights for masonry feel
  const heights = ["h-72", "h-96", "h-64", "h-80", "h-96", "h-72"];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {designs.map((d, i) => (
          <button
            key={d}
            type="button"
            onClick={() => setActive(d)}
            className={`group mb-4 flex w-full ${heights[i]} items-center justify-center break-inside-avoid border border-border bg-surface transition-colors hover:border-accent`}
          >
            <span className="font-mono text-sm uppercase tracking-widest text-muted transition-colors group-hover:text-text">
              Design {d}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/95 p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Design ${active} preview`}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-text"
            >
              X{/* <X className="h-5 w-5" /> */}
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="flex aspect-[4/3] w-full max-w-4xl items-center justify-center border border-border bg-surface"
            >
              <span className="font-mono text-base uppercase tracking-widest text-muted">
                Design {active}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
