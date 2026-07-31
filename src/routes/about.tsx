import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProcessSection } from "@/components/ProcessSection";
import portrait from "@/assets/portrait.jpg";

const title = "About | Yusuf Mayowa, Brand & Web Designer";
const description =
  "How I think about design, how I run a project, and what you can expect working with me on a brand identity or website.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-site pt-36 pb-12 md:pt-48">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink-faint">
            About
          </p>
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.4rem,6.5vw,4.25rem)] leading-[1.05] font-bold">
            I design brands that are easy to trust.
          </h1>
        </Reveal>
      </section>

      <section className="container-site grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-16">
        <Reveal>
          <figure className="overflow-hidden rounded-[2rem] bg-muted md:sticky md:top-32">
            <img
              src={portrait}
              alt="Portrait of Yusuf Mayowa, brand identity and web designer based in Lagos"
              width={1000}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[5/6] w-full object-cover grayscale contrast-125"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-ink-soft">
            <p>
              I didn't set out to become a designer. I started out just trying to make one small
              business look like it deserved to be taken seriously. What kept me in it wasn't the
              software or the aesthetics, it was watching how differently people treated the same
              business once it looked like it knew what it was doing.
            </p>
            <p>
              That's the thread that's run through everything since: good businesses that
              couldn't yet explain themselves. The product was solid, the price was fair, and the
              person across the table still didn't get it. Design became the bridge between what
              a business actually offered and how people experienced it.
            </p>
            <p>
              I've spent most of my career freelancing, which sounds less stable than it is. What
              it actually means is I've worked directly with founders instead of through the
              layers of a bigger studio, people close enough to their own business to answer hard
              questions on the spot, and small enough that a single brand decision still changes
              something next week. A lot of that early work was with founders figuring things out
              as they went, which taught me to design for decisions that hadn't been made yet, not
              just the ones already locked in.
            </p>
            <p>
              Somewhere in there, the work stopped staying local. I've since designed for clients
              in Nigeria, the UK, Australia, and Canada, over video calls and shared drives
              instead of studio meetings. Distance changes how you work, not what you deliver. If
              anything, it forces you to be clearer, because there's no hallway conversation to
              patch over a gap in the brief.
            </p>
          </div>

          <a
            href="https://docs.google.com/document/d/1Y7-_RWyotA2YYUj-YR0lt7QMBispkM9n/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-8 inline-flex min-h-11 items-center rounded-full border border-ink/12 px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink/5"
          >
            Download CV
          </a>
        </Reveal>
      </section>

      <section aria-labelledby="philosophy-heading" className="container-site section-y">
        <Reveal>
          <h2 id="philosophy-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            How I think about the work
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8 max-w-[64ch] space-y-6 text-[1.0625rem] leading-[1.75] text-ink-soft">
            <p>
              My bias is toward subtraction. Most brands I inherit are carrying three ideas where
              one would land harder. Before I add anything, I try to find the one thing your
              customer already believes and build everything around it, the mark, the palette,
              the way packaging feels in someone's hand.
            </p>
            <p>
              Websites get the same treatment. A lot of business sites try to say everything on
              the homepage and end up saying nothing clearly. I'd rather a page load fast, make
              one argument well, and get out of the way of the person trying to decide whether to
              trust you. The identity and the website should feel like the same decision made
              twice, not two separate projects that happen to share a logo.
            </p>
            <p>
              The industries change more than the process does. I've built identities for
              furniture and interior studios, construction and real estate firms, an activewear
              label, a food brand, a logistics company, a legal practice, and a fashion label, and
              built websites for a Pilates studio, an SEO platform, and a geotechnical
              consultancy. What stays the same is the question I start with: what does this
              business already do well that nobody can see yet?
            </p>
            <p>
              I'll disagree with you sometimes, in writing, with a reason. I'd rather have that
              conversation in week two than watch a launch underperform in month six. Beyond
              that: honest timelines, work shown at every stage, and files handed over in formats
              your printer, and your developer, won't question.
            </p>
          </div>
        </Reveal>
      </section>

      <ProcessSection />

      <section aria-labelledby="about-faq" className="container-site pb-24">
        <Reveal>
          <h2 id="about-faq" className="mb-12 font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            Common questions
          </h2>
        </Reveal>
        <FaqAccordion />
      </section>

      <CTASection />
    </>
  );
}
