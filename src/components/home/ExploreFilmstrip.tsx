import { Reveal } from "@/components/common/Reveal";
import { FilmstripCard } from "./FilmstripCard";
import { BOOKING_PATH, VIDEOS } from "@/lib/site-config";

// Titles mirror each page's own hero so the preview matches the destination.
const CHAPTERS = [
  {
    href: "/portfolio",
    label: "Portfolio",
    title: "A Portfolio of Transformations",
    videoSrc: VIDEOS.portfolio,
    startAt: 8.5,
  },
  {
    href: "/services",
    label: "Services",
    title: "Makeup Artistry, Tailored to You",
    videoSrc: VIDEOS.services,
    startAt: 4,
  },
  {
    href: "/about",
    label: "About",
    title: "The Face Behind MUSE",
    videoSrc: VIDEOS.about,
    startAt: 1,
  },
  {
    href: BOOKING_PATH,
    label: "Book Now",
    title: "Let's Plan Your Look",
    videoSrc: VIDEOS.booking,
    startAt: 2,
  },
];

const PERFORATIONS =
  "h-2 bg-[repeating-linear-gradient(90deg,var(--color-champagne)_0_10px,transparent_10px_24px)] opacity-15";

export function ExploreFilmstrip() {
  return (
    <section className="overflow-hidden bg-ink py-24 lg:py-28">
      <Reveal className="flex flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between sm:px-10 lg:px-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            In Motion
          </p>
          <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
            Explore MUSE
          </h2>
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-cream/45 lg:hidden">
          Swipe to explore &rarr;
        </p>
      </Reveal>

      <div className="mt-12">
        <div aria-hidden="true" className={PERFORATIONS} />
        <ul className="scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-3 sm:px-10 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-16">
          {CHAPTERS.map((chapter, index) => (
            <li
              key={chapter.href}
              className="w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-auto"
            >
              <FilmstripCard index={index} {...chapter} />
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className={PERFORATIONS} />
      </div>
    </section>
  );
}
