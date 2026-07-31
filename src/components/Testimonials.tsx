import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let best = Infinity;
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - track.offsetLeft + c.clientWidth / 2 - center);
        if (d < best) {
          best = d;
          closest = i;
        }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-y bg-ink text-paper"
      style={{ colorScheme: "dark" }}
    >
      <div className="container-site">
        <Reveal>
          <p className="text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-paper/45">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]"
          >
            What clients say
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <ul
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mt-20 md:px-[max(2.5rem,calc((100vw-76rem)/2+2.5rem))]"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t) => (
            <li
              key={t.name + t.role}
              className="glass-dark flex w-[min(85vw,26rem)] shrink-0 snap-center flex-col justify-between rounded-[2rem] p-8 md:w-[26rem] md:p-9"
            >
              <blockquote className="text-[1.0625rem] leading-[1.65] text-paper/85">
                “{t.quote}”
              </blockquote>
              <footer className="mt-10">
                <p className="font-display text-lg tracking-[-0.02em]">{t.name}</p>
                <p className="mt-1 text-sm text-paper/50">{t.role}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-paper/40">
                  <span aria-hidden>{t.flag}</span>
                  {t.country}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-8 flex justify-center gap-1">
        {testimonials.map((t, i) => (
          <button
            key={t.name + t.role}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
            aria-current={active === i}
            className="grid size-11 place-items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-paper" : "w-1.5 bg-paper/30"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
