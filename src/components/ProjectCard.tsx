import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onExternal: (project: Project) => void;
  priority?: boolean;
}

function CardBody({ project, priority }: { project: Project; priority?: boolean }) {
  const hoverLabel = project.comingSoon
    ? "Coming soon"
    : project.category === "branding"
      ? "View project"
      : "Visit site";

  return (
    <>
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <img
          src={project.image}
          alt={project.alt}
          width={1400}
          height={1050}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="size-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.055] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        />
      </div>

      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="glass-chip relative inline-flex items-center justify-center overflow-hidden rounded-md px-2 py-0.5 text-[0.58rem] font-medium tracking-[0.06em] uppercase text-white [perspective:500px] group-hover:bg-white/28">
            <span className="invisible whitespace-nowrap">
              {hoverLabel}
              <span aria-hidden> →</span>
            </span>
            <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap [backface-visibility:hidden] [transform-origin:center_bottom] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateX(-110deg)] motion-reduce:transition-none motion-reduce:group-hover:[transform:none]">
              {project.category === "branding" ? "Branding" : "Website"}
            </span>
            <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap [backface-visibility:hidden] [transform-origin:center_top] [transform:rotateX(110deg)] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateX(0deg)] motion-reduce:transition-none motion-reduce:[transform:none]">
              {hoverLabel}
              <span aria-hidden> →</span>
            </span>
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl text-white md:text-[1.75rem]">{project.name}</h3>
      </div>
    </>
  );
}

export function ProjectCard({ project, onExternal, priority }: ProjectCardProps) {
  const shell =
    "group relative block aspect-[5/4] overflow-hidden rounded-[2rem] bg-ink shadow-soft transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lift md:rounded-[2rem]";

  if (project.category === "website") {
    return (
      <button
        type="button"
        onClick={() => onExternal(project)}
        className={`${shell} w-full text-left`}
        aria-label={`${project.name}: opens an external website after confirmation`}
      >
        <CardBody project={project} priority={priority} />
      </button>
    );
  }

  return (
    <Link to="/works/$slug" params={{ slug: project.slug }} className={shell}>
      <CardBody project={project} priority={priority} />
    </Link>
  );
}
