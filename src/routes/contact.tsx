import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const title = "Contact | Yusuf Mayowa";
const description =
  "Start a brand identity or website project with Yusuf Mayowa. Tell me what you're building and when it needs to be live.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-site flex min-h-[80svh] flex-col justify-center pt-36 pb-24 md:pt-44">
      <Reveal>
        <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink-faint">
          Contact
        </p>
        <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.04] font-bold">
          Let's talk about your next project.
        </h1>
        <p className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
          Whether you're building a new brand or improving an existing one, I'd love to hear what
          you're working on.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 sm:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group bg-background p-8 transition-colors duration-300 hover:bg-ink/[0.03] md:p-10"
          >
            <p className="text-xs text-ink-faint">Email</p>
            <p className="mt-2 font-display text-xl tracking-[-0.02em] md:text-2xl">
              {site.email}
            </p>
            <span className="mt-4 inline-block text-sm text-ink-soft transition-transform duration-300 group-hover:translate-x-1">
              Write to me →
            </span>
          </a>
          <a
            href={`https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Yusuf, coming from your website, I need a design for my brand.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background p-8 transition-colors duration-300 hover:bg-ink/[0.03] md:p-10"
          >
            <p className="text-xs text-ink-faint">WhatsApp</p>
            <p className="mt-2 font-display text-xl tracking-[-0.02em] md:text-2xl">
              {site.phone}
            </p>
            <span className="mt-4 inline-block text-sm text-ink-soft transition-transform duration-300 group-hover:translate-x-1">
              Message on WhatsApp →
            </span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet py-1 text-sm text-ink-soft hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
