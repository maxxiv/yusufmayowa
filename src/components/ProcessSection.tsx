import { Reveal } from "./Reveal";

export const process = [
  {
    step: "01",
    name: "Discover",
    body: "Every project starts with understanding your business, your audience, and what success looks like. Before any design work begins, we define the problem we're solving.",
  },
  {
    step: "02",
    name: "Design",
    body: "I explore visual directions, refine the strongest ideas, and build a brand or website that's clear, memorable, and built around your goals.",
  },
  {
    step: "03",
    name: "Refine",
    body: "We review everything together, make improvements where needed, and ensure every detail feels right before launch.",
  },
  {
    step: "04",
    name: "Deliver",
    body: "You'll receive everything you need to confidently use your new brand or website, including organised files and clear guidance for the future.",
  },
];

export function ProcessSection({ title = "How We Work" }: { title?: string }) {
  return (
    <section aria-labelledby="process-heading" className="container-site section-y">
      <Reveal>
        <h2 id="process-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
          {title}
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
  );
}
