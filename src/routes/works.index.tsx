import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { WorksGrid } from "@/components/WorksGrid";
import { CTASection } from "@/components/CTASection";

const title = "Works — Yusuf Mayowa";
const description =
  "Fifteen selected projects: brand identity systems, packaging and websites for founders across Nigeria, the UK and the US.";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/works" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <>
      <section aria-labelledby="works-heading" className="container-site pt-36 pb-4 md:pt-48">
        <Reveal>
          <p className="text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink-faint">
            Portfolio
          </p>
          <h1
            id="works-heading"
            className="mx-auto mt-4 mb-6 max-w-[14ch] text-center font-display text-[clamp(2.4rem,6.5vw,4.25rem)] leading-[1.05] font-bold"
          >
            Selected works
          </h1>
          <p className="mx-auto mb-12 max-w-md text-center text-[0.95rem] leading-relaxed text-ink-soft md:mb-16">
            Branding projects open as full case studies. Website projects open live, in a new
            tab.
          </p>
        </Reveal>
        <WorksGrid />
      </section>

      <div className="section-y pb-0" />
      <CTASection />
    </>
  );
}
