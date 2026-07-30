import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { EASE } from "./Reveal";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

/** Confirmation shown before leaving the site for an externally hosted project. */
export function ExternalLinkDialog({ project, onClose }: Props) {
  const reduced = useReducedMotion();
  const confirmRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement as HTMLElement | null;
    const timer = window.setTimeout(() => confirmRef.current?.focus(), 60);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25, ease: EASE }}
        >
          <div
            className="absolute inset-0 bg-ink/25 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="ext-title"
            aria-describedby="ext-desc"
            className="relative w-full max-w-md rounded-[1.75rem] border border-white/60 bg-white/85 p-7 shadow-lift backdrop-blur-2xl md:p-8"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.94, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduced ? 1 : 0.97, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
          >
            <p className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-ink-faint">
              External link
            </p>
            <h2 id="ext-title" className="mt-3 font-display text-2xl">
              {project.name}
            </h2>
            <p id="ext-desc" className="mt-2.5 text-sm leading-relaxed text-ink-soft">
              This project is hosted externally and will open in a new tab.
            </p>

            <div className="mt-7 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 rounded-full border border-ink/12 px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink/5"
              >
                Cancel
              </button>
              <a
                ref={confirmRef}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                Continue
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
