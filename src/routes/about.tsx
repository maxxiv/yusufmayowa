import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import portrait from "@/assets/portrait.jpg";

const title = "About — Yusuf Mayowa, Brand & Web Designer";
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

const process = [
  {
    step: "01",
    name: "Discovery",
    body: "Customer calls, competitor review, and a read of everything you already write to customers. I'm looking for the sentence you're not saying out loud yet.",
  },
  {
    step: "02",
    name: "Direction",
    body: "One route, presented in context — on packaging, on a screen, at 6mm and at 6 metres. Not three logos on a white slide for you to pick between.",
  },
  {
    step: "03",
    name: "Build",
    body: "The full system: type, colour, layout rules, and every application you actually need. This is the longest stage and the one that decides whether the brand survives contact with your team.",
  },
  {
    step: "04",
    name: "Handover",
    body: "Files, guidelines written for non-designers, and a recorded walkthrough. If your marketing hire can use it six months from now without calling me, it worked.",
  },
];

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
              className="aspect-[5/6] w-full object-cover grayscale"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-ink-soft">
            <p>
              I didn't get into design because I liked making things look good. I got into it
              because I kept meeting good businesses that couldn't explain themselves. The
              product was solid, the price was fair, and the person across the table still
              didn't get it. Design became the bridge between what they offered and how people
              experienced them.
            </p>
            <p>
              I work mostly with founders — people close enough to the business to answer hard
              questions, and small enough that a brand decision still changes something next
              week. Identity systems, packaging, and websites, usually in that order.
            </p>
            <p>
              My bias is towards subtraction. Most brands I inherit are carrying three ideas
              where one would land harder. Before I add anything, I try to find the one thing
              your customer already believes and build everything around it.
            </p>
            <p>
              I'll disagree with you sometimes, in writing, with a reason. I'd rather have that
              conversation in week two than watch a launch underperform in month six. Beyond
              that: honest timelines, work shown at every stage, and files handed over in
              formats your printer won't question.
            </p>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="process-heading" className="container-site section-y">
        <Reveal>
          <h2 id="process-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            How a project runs
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 sm:grid-cols-2">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="h-full bg-background p-8 md:p-10">
                <p className="text-[0.7rem] tracking-[0.16em] text-ink-faint">{p.step}</p>
                <h3 className="mt-3 font-display text-xl">{p.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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
