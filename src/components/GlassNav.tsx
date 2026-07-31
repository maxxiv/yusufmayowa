import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "./Reveal";
import { site } from "@/data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "Works", to: "/works" },
  { label: "About", to: "/about" },
] as const;

export function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-7"
        style={{ transition: "padding 400ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <nav
          aria-label="Primary"
          className="glass pointer-events-auto flex w-full max-w-3xl items-center justify-between rounded-full"
          style={{
            padding: scrolled ? "0.5rem 0.5rem 0.5rem 1.1rem" : "0.7rem 0.7rem 0.7rem 1.4rem",
            transform: scrolled ? "scale(0.965)" : "scale(1)",
            backgroundColor: scrolled ? "oklch(1 0 0 / 0.74)" : "oklch(1 0 0 / 0.58)",
            transition: "all 450ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Link
            to="/"
            className="shrink-0 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-ink transition-opacity hover:opacity-60"
          >
            {site.name}.
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-4 py-2 text-sm text-ink-soft transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
                activeProps={{ className: "text-ink font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.97] md:inline-flex"
            >
              Work with me
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full bg-ink text-paper transition-transform duration-200 active:scale-95 md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="relative grid size-4 place-items-center">
                <span
                  className={`absolute h-px w-4 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "rotate-45" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`absolute h-px w-4 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "-rotate-45" : "translate-y-[3px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] md:hidden">
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-ink/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.2, ease: EASE }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="glass absolute top-[5.25rem] inset-x-4 flex flex-col rounded-[1.75rem] p-7 sm:top-[5.75rem] sm:inset-x-6"
              style={{ transformOrigin: "top right" }}
              initial={{ scale: reduced ? 1 : 0.94, opacity: 0, y: reduced ? 0 : -8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: reduced ? 1 : 0.96, opacity: 0, y: reduced ? 0 : -6 }}
              transition={{ duration: reduced ? 0 : 0.24, ease: EASE }}
            >
              <motion.ul
                className="flex flex-col gap-1"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.03 } } }}
              >
                {links.map((l) => (
                  <motion.li
                    key={l.to}
                    variants={{
                      hidden: { opacity: 0, y: reduced ? 0 : 8 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
                    }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-2 py-4 font-display text-2xl tracking-[-0.02em] text-ink transition-colors hover:bg-ink/5"
                      activeProps={{ className: "text-accent" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: reduced ? 0 : 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
                }}
                initial="hidden"
                animate="show"
                className="mt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 w-full items-center justify-center rounded-full bg-ink text-base font-medium text-paper transition-transform duration-200 active:scale-[0.97]"
                >
                  Work with me
                </Link>
              </motion.div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-4">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet py-1 text-xs text-ink-soft"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
