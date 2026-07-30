import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/8">
      <div className="container-site py-14 md:py-20">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="link-quiet font-display text-2xl tracking-[-0.03em] md:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-3 text-sm text-ink-soft">
              {site.location} · Available for select projects
            </p>
          </div>

          <nav aria-label="Social" className="flex flex-wrap gap-x-7 gap-y-3">
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
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yusuf Mayowa</p>
          <div className="flex gap-6">
            <Link to="/works" className="link-quiet hover:text-ink-soft">
              Works
            </Link>
            <Link to="/about" className="link-quiet hover:text-ink-soft">
              About
            </Link>
            <Link to="/contact" className="link-quiet hover:text-ink-soft">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
