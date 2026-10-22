import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { InViewVideo } from "@/components/common/InViewVideo";
import { VIDEOS } from "@/lib/site-config";
import { GalleryImage } from "@/components/portfolio/GalleryImage";
import { CATEGORIES, GALLERY_ITEMS } from "@/components/portfolio/galleryData";

// One representative look per category; each photo appears exactly once.
const FEATURED = CATEGORIES.map(
  (category) => GALLERY_ITEMS.find((item) => item.category === category)!
);

// Concave "gallery wall": outer frames are larger and angled toward the centre.
const ARC = [
  { width: "md:w-[24%]", tilt: "md:[transform:rotateY(26deg)]", origin: "md:origin-right" },
  { width: "md:w-[19%]", tilt: "md:[transform:rotateY(12deg)]", origin: "md:origin-right" },
  { width: "md:w-[19%]", tilt: "md:[transform:rotateY(-12deg)]", origin: "md:origin-left" },
  { width: "md:w-[24%]", tilt: "md:[transform:rotateY(-26deg)]", origin: "md:origin-left" },
];

export function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="relative overflow-hidden bg-ink px-4 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -top-16 left-[6%] h-40 w-[22%] rounded-3xl bg-ink-soft" />
        <span className="absolute -top-16 right-[6%] h-40 w-[26%] rounded-3xl bg-ink-soft" />
        <span className="absolute top-[22%] -left-10 hidden h-[40%] w-24 rounded-3xl bg-ink-soft lg:block" />
        <span className="absolute top-[30%] -right-10 hidden h-[44%] w-24 rounded-3xl bg-ink-soft lg:block" />
        <span className="absolute -bottom-16 left-[10%] h-40 w-[30%] rounded-3xl bg-ink-soft" />
        <span className="absolute -bottom-16 right-[12%] h-40 w-[24%] rounded-3xl bg-ink-soft" />
      </div>

      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-champagne/20 bg-[#1b1815] px-5 pt-14 pb-12 shadow-2xl shadow-black/60 sm:px-10 lg:pt-20 lg:pb-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[70%] [mask-image:linear-gradient(to_bottom,black_35%,transparent)] md:h-[64%]"
        >
          <InViewVideo
            src={VIDEOS.portfolio}
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            Featured Work
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            A Portfolio of{" "}
            <span className="italic text-champagne-light">Transformations</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/65 sm:text-base">
            {CATEGORIES.slice(0, -1).join(", ")} and {CATEGORIES[CATEGORIES.length - 1]} looks &mdash; a glimpse of the full portfolio.
          </p>
          <Link
            href="/portfolio"
            className="mt-8 inline-block rounded-full bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
          >
            View Full Portfolio
          </Link>
        </div>

        <ul className="relative mt-14 grid grid-cols-2 gap-4 md:mt-20 md:flex md:items-center md:justify-center md:gap-[2.5%] md:[perspective:1400px]">
          {FEATURED.map((item, index) => {
            const arc = ARC[index];
            const outer = index === 0 || index === FEATURED.length - 1;
            return (
              <li key={item.id} className={`${arc.width} md:shrink-0 ${arc.origin} ${arc.tilt}`}>
                <Link
                  href="/portfolio"
                  aria-label={`${item.category} — view in the portfolio`}
                  className={`group block transition-transform duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne md:hover:scale-[1.03]`}
                >
                  <GalleryImage
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 20vw, 45vw"
                    className={`rounded-2xl shadow-xl shadow-black/50 ${
                      outer ? "aspect-[3/4]" : "aspect-[3/4] md:aspect-[4/5]"
                    }`}
                  />
                  <p className="mt-3 text-center text-[11px] uppercase tracking-[0.25em] text-cream/55 transition-colors duration-200 group-hover:text-champagne-light">
                    {item.category}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
