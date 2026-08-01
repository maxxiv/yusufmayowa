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

const experience = [
  {
    role: "Contract Brand & Web Designer",
    company: "BR Reformer Studios",
    location: "London, UK",
    period: "Nov 2025 – May 2026",
    body: "Designed the logo and visual identity for a London-based reformer Pilates studio, then built and launched the site in WordPress and Elementor, including booking pages built for lead generation.",
  },
  {
    role: "Graphic Designer",
    company: "Iconic Resourcing",
    location: "Remote – Scotland, UK",
    period: "Feb 2025 – May 2026",
    body: "Designed brochures, presentations, and social assets for recruitment and employer-branding campaigns, working closely with the marketing team to keep the visual brand consistent under tight deadlines.",
  },
  {
    role: "Contract Brand Identity Designer",
    company: "Amala On The Go",
    location: "Toronto, Canada",
    period: "Apr 2025",
    body: "Built the logo and complete brand identity for a Nigerian food brand serving customers in Toronto, including guidelines covering typography, colour, and visual applications.",
  },
  {
    role: "Freelance Brand Identity Designer",
    company: "Self-Employed",
    location: "",
    period: "2021 – Present",
    body: "Built brand identity systems for 15+ businesses across food, technology, lifestyle, and corporate sectors, leading each project from discovery through final delivery.",
  },
  {
    role: "Contract Brand Identity Designer",
    company: "Reedah's Pot",
    location: "Abuja, Nigeria",
    period: "Dec 2024",
    body: "Designed the logo and visual identity for a food and catering business, working closely with the owner to establish a professional brand presence.",
  },
];

const skills = [
  "Brand Identity Design",
  "Logo Design",
  "Brand Guidelines",
  "Corporate Stationery",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "WordPress (Elementor)",
  "Social Media Design",
  "Typography & Layout",
  "Presentation Design",
  "Visual Strategy",
  "Figma",
  "Canva",
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
            I'm Yusuf Mayowa
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
              I'm Yusuf Mayowa, a Brand Identity and Website Designer who enjoys turning ideas
              into brands people remember.
            </p>
            <p>
              Over the last four years, I've worked with startups and growing businesses across
              Nigeria, Canada, Australia, and the United Kingdom, helping them build visual
              identities and websites that feel intentional, consistent, and built for growth.
              Whether I'm creating a logo from scratch, designing a complete identity system, or
              building a website in Figma and WordPress, my goal is always the same: create work
              that solves real business problems while looking timeless.
            </p>
            <p>
              I've had the opportunity to work with brands like Iconic Resourcing in Scotland, BR
              Reformer Studios in London, Amala On The Go in Toronto, alongside many ambitious
              founders who trusted me to bring their vision to life. Every project has taught me
              that good design isn't just about aesthetics. It's about clarity, strategy, and
              giving people confidence in the businesses they build.
            </p>
            <p>
              Outside of design, you'll probably find me reading books on self-development and
              business, watching travel documentaries and imagining my next destination, or
              catching a Manchester United match. Music is also a huge part of my creative
              process. A good playlist has become an essential part of almost every project I work
              on because it helps me focus and stay in the flow.
            </p>
            <p>
              I believe the best brands are built with intention, not trends, and that's the
              mindset I bring into every collaboration. Whether it's a startup finding its
              identity or an established business looking to evolve, I enjoy creating work that
              feels authentic, memorable, and built to last.
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

      <section aria-labelledby="experience-heading" className="container-site section-y">
        <Reveal>
          <h2 id="experience-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            Experience
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-10 border-t border-ink/10 pt-10 md:gap-12 md:pt-12">
          {experience.map((job, i) => (
            <Reveal
              key={job.role + job.company}
              delay={i * 0.05}
              className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <p className="text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">
                {job.period}
              </p>
              <div>
                <h3 className="font-display text-lg tracking-[-0.01em]">{job.role}</h3>
                <p className="mt-1 text-sm text-ink-faint">
                  {job.company}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <p className="mt-3 max-w-[60ch] text-[0.95rem] leading-[1.7] text-ink-soft">
                  {job.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading" className="container-site section-y pt-0">
        <Reveal>
          <h2 id="education-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            Education
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-10">
          <Reveal className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-10">
            <p className="text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">
              Graduated 2024
            </p>
            <div>
              <h3 className="font-display text-lg tracking-[-0.01em]">
                B.Sc. (Ed) in Economics Education
              </h3>
              <p className="mt-1 text-sm text-ink-faint">
                Adekunle Ajasin University, Akungba-Akoko
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-10">
            <p className="text-[0.7rem] tracking-[0.14em] uppercase text-ink-faint">
              2025 – 2026
            </p>
            <div>
              <h3 className="font-display text-lg tracking-[-0.01em]">
                National Youth Service Corps (NYSC)
              </h3>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="container-site section-y pt-0">
        <Reveal>
          <h2 id="skills-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            Skills & Expertise
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-10 flex flex-wrap gap-2.5 border-t border-ink/10 pt-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-ink/12 px-4 py-2 text-sm text-ink-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="philosophy-heading" className="container-site section-y">
        <Reveal>
          <h2 id="philosophy-heading" className="font-display text-[clamp(1.75rem,4vw,2.75rem)]">
            Design Philosophy
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
