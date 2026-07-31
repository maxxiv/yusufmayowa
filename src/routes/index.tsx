import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, EASE } from "@/components/Reveal";
import { WorksGrid } from "@/components/WorksGrid";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { ProcessSection } from "@/components/ProcessSection";
import portrait from "@/assets/portrait.jpg";

const title = "Yusuf Mayowa | Brand Identity & Web Designer";
const description =
  "Yusuf Mayowa is a brand identity and web designer in Lagos, using design to connect brands with their audience. Selected branding case studies and website work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Hero() {
  const reduced = useReducedMotion();
  const line = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: reduced ? 0 : 0.9, delay: reduced ? 0 : delay, ease: EASE },
  });

  return (
    <section
      aria-labelledby="hero-heading"
      className="container-site flex min-h-[88svh] flex-col justify-center pt-32 pb-16 text-center md:min-h-screen md:pt-40"
    >
      <motion.div {...line(0.05)} className="mx-auto">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm tracking-[-0.01em] text-ink-soft md:text-base">
          <span className="relative grid size-2 shrink-0 place-items-center" aria-hidden>
            <motion.span
              className="size-2 rounded-full bg-accent"
              animate={reduced ? undefined : { opacity: [1, 0.4, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Brand & Website Designer
        </span>
      </motion.div>

      <h1
        id="hero-heading"
        className="mx-auto mt-6 max-w-[15ch] font-display text-[clamp(2.75rem,8vw,6rem)] leading-[1.05] font-bold sm:max-w-5xl"
      >
        <motion.span {...line(0.16)} className="block">
          Using <span className="text-accent">Design</span> to connect
        </motion.span>
        <motion.span {...line(0.28)} className="block">
          <span className="text-accent">Brands</span> with their Audience
        </motion.span>
      </h1>
    </section>
  );
}

function About() {
  return (
    <section aria-labelledby="about-heading" className="container-site section-y">
      <Reveal>
        <p className="text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink-faint">
          About
        </p>
        <h2
          id="about-heading"
          className="mt-4 text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]"
        >
          About me
        </h2>
      </Reveal>

      <div className="mt-14 grid items-center gap-8 md:mt-20 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-14">
        <Reveal>
          <figure className="overflow-hidden rounded-[2rem] bg-muted">
            <img
              src={portrait}
              alt="Portrait of Yusuf Mayowa, brand identity and web designer"
              width={1000}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[5/6] w-full object-cover grayscale contrast-125"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-ink-soft">
            <p>
              I'm Yusuf, a brand identity and website designer helping businesses look as credible
              as the work they already do.
            </p>
            <p>
              I design visual identities and websites that make brands easier to trust, easier to
              remember, and easier to choose. Whether it's building a new identity from scratch or
              redesigning an existing one, every decision is made with the people you're trying to
              reach in mind.
            </p>
            <p>
              I believe good design isn't decoration. It's clarity. When people immediately
              understand who you are and why they should trust you, design has done its job.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { k: "Years of experience", v: "5+" },
              { k: "Projects delivered", v: "50+" },
              { k: "Countries served", v: "5+" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs text-ink-faint">{s.k}</dt>
                <dd className="mt-1 font-display text-2xl tracking-[-0.03em]">{s.v}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            className="mt-8 inline-flex min-h-11 items-center rounded-full border border-ink/12 px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink/5"
          >
            More about me
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      <section
        aria-labelledby="works-heading"
        className="section-y bg-ink text-paper"
        style={{ colorScheme: "dark" }}
      >
        <div className="container-site">
          <Reveal>
            <p className="text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-paper/45">
              Portfolio
            </p>
            <h2
              id="works-heading"
              className="mt-4 mb-12 text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] md:mb-16"
            >
              Selected works
            </h2>
          </Reveal>
          <WorksGrid variant="spotlight" />
          <div className="mt-12 flex justify-center">
            <Link
              to="/works"
              className="inline-flex min-h-11 items-center rounded-full border border-paper/20 px-6 text-sm font-medium text-paper transition-colors duration-200 hover:bg-paper/10"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <About />
      <ProcessSection title="Design Process" />
      <Testimonials />

      <section aria-labelledby="faq-heading" className="container-site section-y">
        <Reveal>
          <h2
            id="faq-heading"
            className="mb-12 text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] md:mb-16"
          >
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <FaqAccordion />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
