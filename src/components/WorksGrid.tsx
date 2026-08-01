import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { EASE } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { ExternalLinkDialog } from "./ExternalLinkDialog";
import {
  featuredBrandingProjects,
  featuredWebsiteProjects,
  spotlightBrandingProjects,
  spotlightWebsiteProjects,
  getFeaturedProjects,
  getSpotlightProjects,
  type Category,
  type Project,
} from "@/data/projects";

type Filter = "all" | Category;

export function WorksGrid({
  limit,
  variant = "published",
}: {
  limit?: number;
  variant?: "published" | "spotlight";
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [external, setExternal] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  const tabsRef = useRef<HTMLDivElement>(null);

  const pool =
    variant === "spotlight"
      ? { branding: spotlightBrandingProjects, website: spotlightWebsiteProjects }
      : { branding: featuredBrandingProjects, website: featuredWebsiteProjects };

  const tabs = useMemo(
    () =>
      [
        { id: "all" as const, label: "All", count: pool.branding.length + pool.website.length },
        { id: "branding" as const, label: "Branding", count: pool.branding.length },
        { id: "website" as const, label: "Websites", count: pool.website.length },
      ],
    [pool.branding.length, pool.website.length],
  );

  const visible = useMemo(() => {
    const all = variant === "spotlight" ? getSpotlightProjects() : getFeaturedProjects();
    const list = filter === "all" ? all : pool[filter];
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit, variant, pool]);

  const onKeyNav = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setFilter(tabs[next].id);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Filter projects by type"
          className="glass flex max-w-full gap-0.5 overflow-x-auto rounded-full p-1.5 sm:gap-1"
        >
          {tabs.map((tab, i) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                onKeyDown={(e) => onKeyNav(e, i)}
                onClick={() => setFilter(tab.id)}
                className="relative min-h-11 shrink-0 rounded-full px-3 text-xs transition-colors duration-200 sm:px-5 sm:text-sm"
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={
                      reduced ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }
                    }
                  />
                )}
                <span
                  className={`relative flex items-center gap-1 sm:gap-2 ${
                    active ? "font-medium text-paper" : "text-ink-soft"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`grid h-4 min-w-4 place-items-center rounded-full px-1 text-[0.62rem] sm:h-5 sm:min-w-5 sm:text-[0.68rem] ${
                      active ? "bg-paper/20 text-paper" : "bg-ink/8 text-ink-soft"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        layout={!reduced}
        className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout={!reduced}
              initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
              transition={{
                duration: reduced ? 0 : 0.5,
                delay: reduced ? 0 : Math.min(i * 0.04, 0.24),
                ease: EASE,
              }}
            >
              <ProjectCard project={project} onExternal={setExternal} priority={i < 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ExternalLinkDialog project={external} onClose={() => setExternal(null)} />
    </>
  );
}
