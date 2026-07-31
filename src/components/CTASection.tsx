import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="container-site pb-24 md:pb-32">
      <Reveal>
        <div className="rounded-[2.5rem] bg-ink px-6 py-20 text-center text-paper md:rounded-[3rem] md:px-16 md:py-28">
          <h2
            id="cta-heading"
            className="mx-auto max-w-2xl font-display text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.05]"
          >
            Let's use design to connect your brand with your audience.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex min-h-12 items-center rounded-full bg-paper px-8 text-sm font-medium text-ink transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.97]"
          >
            Work with me
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
