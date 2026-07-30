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
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
        style={{ transition: "padding 400ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <nav
          aria-label="Primary"
          className="glass flex w-full max-w-3xl items-center justify-between rounded-full"
          style={{
            padding: scrolled ? "0.4rem 0.4rem 0.4rem 1.1rem" : "0.55rem 0.55rem 0.55rem 1.4rem",
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
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full bg-ink text-paper transition-transform duration-200 active:scale-95 md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-paper/40"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="glass absolute inset-3 flex flex-col rounded-[2rem] p-6"
              initial={{ scale: reduced ? 1 : 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: reduced ? 1 : 0.98, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.45, ease: EASE }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase">
                  {site.name}.
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 place-items-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10"
                >
                  <svg viewBox="0 0 16 16" className="size-4" aria-hidden fill="none">
                    <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </button>
              </div>

              <motion.ul
                className="mt-14 flex flex-col gap-2"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              >
                {[...links, { label: "Contact", to: "/contact" as const }].map((l) => (
                  <motion.li
                    key={l.to}
                    variants={{
                      hidden: { opacity: 0, y: reduced ? 0 : 14, filter: "blur(6px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: EASE },
                      },
                    }}
                  >
                    <Link
                      to={l.to}
                      className="block py-3 font-display text-4xl tracking-[-0.03em] text-ink"
                      activeProps={{ className: "text-accent" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet py-2 text-sm text-ink-soft"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
