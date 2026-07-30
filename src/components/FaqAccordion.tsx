import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { EASE } from "./Reveal";
import { faqs } from "@/data/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const base = useId();

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="border-t border-ink/10 last:border-b">
            <h3>
              <button
                type="button"
                id={`${base}-t-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-p-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-6 text-left transition-opacity duration-200 hover:opacity-65"
              >
                <span className="font-display text-lg tracking-[-0.02em] md:text-xl">{faq.q}</span>
                <span aria-hidden className="relative grid size-6 shrink-0 place-items-center">
                  <span className="absolute h-px w-4 bg-ink" />
                  <span
                    className="absolute h-4 w-px bg-ink transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: isOpen ? "rotate(90deg) scaleX(0)" : "none" }}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${base}-p-${i}`}
                  role="region"
                  aria-labelledby={`${base}-t-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.42, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pr-8 pb-7 text-[0.95rem] leading-[1.7] text-ink-soft">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
