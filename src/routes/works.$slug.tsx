import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { getCaseStudyNeighbours, getProject, galleryImages } from "@/data/projects";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project || project.category !== "branding" || !project.caseStudy) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable — Yusuf Mayowa" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Brand identity case study by Yusuf Mayowa`;
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
    <Reveal as="section" className="grid gap-4 border-t border-ink/10 pt-10 md:grid-cols-[10rem_1fr] md:gap-10 md:pt-14">
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
          <div className="flex flex-wrap items-center justify-center gap-3 text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">
            <span>Branding</span>
            <span aria-hidden>·</span>
            <span>{project.client}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-[14ch] text-center font-display text-[clamp(2.6rem,7.5vw,5rem)] leading-[1.04] font-bold">
            {project.name}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-[1.0625rem] leading-relaxed text-ink-soft">
            {project.description}
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
          <dl className="grid grid-cols-2 gap-8 border-t border-ink/10 pt-8 md:grid-cols-4">
            <div>
              <dt className="text-xs text-ink-faint">Client</dt>
              <dd className="mt-1.5 text-sm">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-faint">Year</dt>
              <dd className="mt-1.5 text-sm">{project.year}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs text-ink-faint">Scope</dt>
              <dd className="mt-1.5 text-sm">{project.services.join(", ")}</dd>
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
        <Chapter index="03" title="Discovery">
          <p>{cs.discovery}</p>
        </Chapter>
        <Chapter index="04" title="Strategy">
          <p>{cs.strategy}</p>
        </Chapter>
      </div>

      <Reveal as="figure" className="container-site my-16 md:my-24">
        <img
          src={galleryImages.process}
          alt={`Logo development sketches and construction grids from the ${project.name} project`}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full rounded-[2rem] object-cover md:rounded-[2.5rem]"
        />
        <figcaption className="mt-4 text-center text-xs text-ink-faint">
          Mark development — construction, weight tests, and small-size legibility checks.
        </figcaption>
      </Reveal>

      <div className="container-site flex flex-col gap-12 md:gap-16">
        <Chapter index="05" title="Logo development">
          <p>{cs.logo}</p>
        </Chapter>
        <Chapter index="06" title="Identity system">
          <p>{cs.identity}</p>
        </Chapter>
      </div>

      <Reveal as="figure" className="container-site my-16 md:my-24">
        <img
          src={galleryImages.system}
          alt={`Colour swatches and typography specimens from the ${project.name} identity system`}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full rounded-[2rem] object-cover md:rounded-[2.5rem]"
        />
      </Reveal>

      <div className="container-site flex flex-col gap-12 md:gap-16">
        <Chapter index="07" title="Applications">
          <p>{cs.applications}</p>
        </Chapter>
        <Chapter index="08" title="Final outcome">
          <p>{cs.outcome}</p>
        </Chapter>
      </div>

      <Reveal as="figure" className="container-site my-16 md:my-24">
        <img
          src={galleryImages.applications}
          alt={`Brand applications flat lay from the ${project.name} rollout`}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full rounded-[2rem] object-cover md:rounded-[2.5rem]"
        />
      </Reveal>

      <section aria-labelledby="results-heading" className="bg-ink py-20 text-paper md:py-28">
        <div className="container-site">
          <Reveal>
            <h2 id="results-heading" className="text-center font-display text-[clamp(1.75rem,4vw,2.5rem)]">
              Results
            </h2>
            <dl className="mt-12 grid gap-10 sm:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.label} className="text-center">
                  <dt className="order-2 mt-2 text-sm text-paper/50">{r.label}</dt>
                  <dd className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-none">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <div className="container-site my-16 md:my-24">
        <Chapter index="09" title="What I took from it">
          <p>{cs.lessons}</p>
        </Chapter>
      </div>

      <section aria-labelledby="related-heading" className="container-site pb-20 md:pb-28">
        <Reveal>
          <h2 id="related-heading" className="mb-10 font-display text-2xl md:text-3xl">
            Related projects
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/works/$slug"
                params={{ slug: p.slug }}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.055] motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 to-transparent"
                />
                <div className="absolute bottom-0 p-6 md:p-8">
                  <span className="glass-chip rounded-full px-3 py-1 text-[0.7rem] tracking-[0.08em] uppercase text-white">
                    Branding
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-white">{p.name}</h3>
                </div>
              </Link>
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
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
