import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { getCaseStudyNeighbours, getProject } from "@/data/projects";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project || project.category !== "branding" || !project.caseStudy) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study unavailable | Yusuf Mayowa" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} | Brand identity case study by Yusuf Mayowa`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/works/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.description },
      ],
      links: [{ rel: "canonical", href: `/works/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: project.description,
            author: { "@type": "Person", name: "Yusuf Mayowa" },
            datePublished: project.year,
          }),
        },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: CaseStudyNotFound,
});

function CaseStudyNotFound() {
  return (
    <div className="container-site flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-3xl">Case study not found</h1>
      <p className="mt-3 text-sm text-ink-soft">
        This project may have moved, or it's a website project shown live instead.
      </p>
      <Link
        to="/works"
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper"
      >
        Back to works
      </Link>
    </div>
  );
}

function Chapter({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      as="section"
      className="grid gap-4 border-t border-ink/10 pt-10 md:grid-cols-[10rem_1fr] md:gap-10 md:pt-14"
    >
      <div>
        <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink-faint">
          {index}
        </p>
        <h2 className="mt-2 font-display text-lg tracking-[-0.02em] md:sticky md:top-32">
          {title}
        </h2>
      </div>
      <div className="max-w-[62ch] text-[1.0625rem] leading-[1.75] text-ink-soft">{children}</div>
    </Reveal>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const cs = project.caseStudy!;
  const { next, related } = getCaseStudyNeighbours(project.slug);

  return (
    <article>
      <header className="container-site pt-36 pb-10 md:pt-48">
        <Reveal>
          <h1 className="mx-auto max-w-[14ch] text-center font-display text-[clamp(2.6rem,7.5vw,5rem)] leading-[1.04] font-bold">
            {project.name}
          </h1>
          <p className="mt-4 text-center text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">
            Brand Identity Design
          </p>
        </Reveal>
      </header>

      <Reveal as="figure" className="container-site">
        <img
          src={project.image}
          alt={project.alt}
          width={1400}
          height={1050}
          className="aspect-[4/3] w-full rounded-[2rem] object-cover md:aspect-[16/9] md:rounded-[2.5rem]"
        />
      </Reveal>

      <div className="container-site mt-16 md:mt-24">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 border-t border-ink/10 pt-8">
            <div>
              <dt className="text-xs text-ink-faint">Industry</dt>
              <dd className="mt-1.5 text-sm">{cs.industry}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-faint">Service</dt>
              <dd className="mt-1.5 text-sm">Brand Identity Design</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <div className="container-site mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
        <Chapter index="01" title="Overview">
          <p>{cs.overview}</p>
        </Chapter>
        <Chapter index="02" title="The challenge">
          <p>{cs.challenge}</p>
        </Chapter>
        <Chapter index="03" title="The solution">
          <p>{cs.solution}</p>
        </Chapter>
      </div>

      {cs.designExploration && (
        <Reveal as="figure" className="container-site mt-16 md:mt-24">
          <img
            src={cs.designExploration}
            alt={`${project.name} design exploration sketches`}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-[1.75rem] md:rounded-[2rem]"
          />
        </Reveal>
      )}

      {cs.logoConcept && (
        <div className="container-site mt-16 grid gap-6 md:mt-24 md:grid-cols-[1fr_1fr] md:items-center md:gap-10">
          <Reveal as="figure">
            <img
              src={cs.logoConcept.image}
              alt={`${project.name} logo concept`}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-[1.75rem] md:rounded-[2rem]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">Logo concept</p>
            <p className="mt-3 max-w-[48ch] text-[1.0625rem] leading-[1.75] text-ink-soft">
              {cs.logoConcept.note}
            </p>
          </Reveal>
        </div>
      )}

      {cs.colorPalette && (
        <div className="container-site mt-16 md:mt-24">
          <Reveal as="figure">
            <img
              src={cs.colorPalette.image}
              alt={`${project.name} color palette`}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-[1.75rem] md:rounded-[2rem]"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-sm text-ink-soft">{cs.colorPalette.note}</p>
          </Reveal>
        </div>
      )}

      <section aria-labelledby="gallery-heading" className="container-site my-16 md:my-24">
        <Reveal>
          <h2 id="gallery-heading" className="mb-8 font-display text-2xl md:mb-10 md:text-3xl">
            Brand Applications
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {cs.gallery.map((img, i) => (
            <Reveal
              key={img}
              delay={i * 0.06}
              as="figure"
              className={i % 3 === 0 ? "sm:col-span-2" : undefined}
            >
              <img
                src={img}
                alt={`${project.name} brand application ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-[1.75rem] md:rounded-[2rem]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="related-heading" className="container-site pt-4 pb-20 md:pb-28">
        <Reveal>
          <h2 id="related-heading" className="mb-10 font-display text-2xl md:text-3xl">
            Related projects
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} onExternal={() => {}} />
            </Reveal>
          ))}
        </div>

        {next && (
          <Reveal>
            <Link
              to="/works/$slug"
              params={{ slug: next.slug }}
              className="group mt-8 flex items-center justify-between gap-6 rounded-[1.75rem] border border-ink/10 px-7 py-7 transition-colors duration-300 hover:bg-ink/[0.03]"
            >
              <span>
                <span className="text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">
                  Next project
                </span>
                <span className="mt-1.5 block font-display text-xl md:text-2xl">{next.name}</span>
              </span>
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:translate-x-1"
              >
                <svg viewBox="0 0 14 14" className="size-3.5" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </Reveal>
        )}
      </section>

      <CTASection />
    </article>
  );
}
