import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, EASE } from "@/components/Reveal";
import { WorksGrid } from "@/components/WorksGrid";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import portrait from "@/assets/portrait.jpg";

const title = "Yusuf Mayowa — Brand Identity & Web Designer";
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
      <motion.p
        {...line(0.05)}
        className="text-sm tracking-[-0.01em] text-ink-soft md:text-base"
      >
        Hi, I'm Yusuf.
      </motion.p>

      <h1
        id="hero-heading"
        className="mx-auto mt-6 max-w-[15ch] font-display text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.05] font-bold sm:max-w-5xl"
      >
        <motion.span {...line(0.16)} className="block">
          Using <span className="text-accent">Design</span> to connect
        </motion.span>
        <motion.span {...line(0.28)} className="block">
          Brands with their <span className="text-accent">Audience</span>
        </motion.span>
      </h1>

      <motion.p
        {...line(0.42)}
        className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-ink-soft md:mt-10"
      >
        Brand identity systems and websites for founders who care how their work is
        understood. Based in Lagos, working everywhere.
      </motion.p>
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
              className="aspect-[5/6] w-full object-cover grayscale"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-ink-soft">
            <p>
              I didn't get into design because I liked making things look good. I got into it
              because I kept meeting good businesses that couldn't explain themselves. The
              product was solid, the price was fair, and the person across the table still
              didn't get it. Design turned out to be the bridge.
            </p>
            <p>
              So I start with questions, not sketches. Who buys this, what do they say about it
              in their own words, and what do they compare it to? Most of my strongest work has
              come from a sentence a customer said in a support call, not from a mood board.
            </p>
            <p>
              What you can expect: one direction presented in context rather than three logos on
              a slide, honest timelines, and a system your team can run without me. I take a
              small number of projects at a time, which is the only way I know to do this
              properly.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { k: "Years designing", v: "6+" },
              { k: "Brands shipped", v: "40+" },
              { k: "Based in", v: "Lagos" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs text-ink-faint">{s.k}</dt>
                <dd className="mt-1 font-display text-2xl tracking-[-0.03em]">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      <section aria-labelledby="works-heading" className="container-site section-y pt-0">
        <Reveal>
          <p className="text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink-faint">
            Portfolio
          </p>
          <h2
            id="works-heading"
            className="mt-4 mb-12 text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] md:mb-16"
          >
            Selected works
          </h2>
        </Reveal>
        <WorksGrid limit={6} />
        <div className="mt-12 flex justify-center">
          <Link
            to="/works"
            className="inline-flex min-h-11 items-center rounded-full border border-ink/12 px-6 text-sm font-medium transition-colors duration-200 hover:bg-ink/5"
          >
            View all projects
          </Link>
        </div>
      </section>

      <About />
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
