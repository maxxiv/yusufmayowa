import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onExternal: (project: Project) => void;
  priority?: boolean;
}

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <img
          src={project.image}
          alt={project.alt}
          width={1400}
          height={1050}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.055] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        />
      </div>

      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-2">
          <span className="glass-chip rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-[0.08em] uppercase text-white group-hover:bg-white/28">
            {project.category === "branding" ? "Branding" : "Website"}
          </span>
          <span className="text-[0.7rem] tracking-[0.08em] text-white/70">{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-2xl text-white md:text-[1.75rem]">{project.name}</h3>
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/75">
          {project.description}
        </p>

        <span
          aria-hidden
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/0 transition-all duration-300 group-hover:text-white motion-reduce:transition-none"
        >
          {project.category === "branding" ? "Read case study" : "Visit site"}
          <svg viewBox="0 0 14 14" className="size-3.5" fill="none" aria-hidden>
            <path
              d="M3 11L11 3M11 3H5M11 3v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export function ProjectCard({ project, onExternal }: ProjectCardProps) {
  const shell =
    "group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink shadow-soft transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lift md:rounded-[2rem]";

  if (project.category === "website") {
    return (
      <button
        type="button"
        onClick={() => onExternal(project)}
        className={`${shell} w-full text-left`}
        aria-label={`${project.name} — opens an external website after confirmation`}
      >
        <CardBody project={project} />
      </button>
    );
  }

  return (
    <Link to="/works/$slug" params={{ slug: project.slug }} className={shell}>
      <CardBody project={project} />
    </Link>
  );
}
