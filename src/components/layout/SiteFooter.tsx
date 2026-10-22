import Link from "next/link";
import { NAV_LINKS, BOOKING_PATH, SOCIAL_LINKS } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-ink px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <span className="font-serif text-2xl tracking-[0.2em] text-cream">
            MUSE
          </span>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Makeup artistry. Personal expression. Unforgettable
            transformations.
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-champagne-light/80">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-champagne-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-champagne-light/80">
              Booking
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>
                <Link
                  href={BOOKING_PATH}
                  className="transition-colors duration-200 hover:text-champagne-light"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-champagne-light/80">
              Follow
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-champagne-light"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs text-cream/40">
        &copy; MUSE. All rights reserved.
      </p>
    </footer>
  );
}
