import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "./Reveal";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduced ? 0 : 2400);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[0.75rem] font-semibold tracking-[0.18em] text-paper uppercase">
              Yusuf Mayowa.
            </span>
            <motion.span
              className="h-[2px] w-8 rounded-full bg-paper/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduced ? 0 : 0.6, ease: EASE, delay: 0.1 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
