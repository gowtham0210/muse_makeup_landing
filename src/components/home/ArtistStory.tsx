import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { InViewVideo } from "@/components/common/InViewVideo";
import { VIDEOS } from "@/lib/site-config";

// Headings and opening lines from the About page, condensed to a preview.
const PILLARS = [
  {
    label: "Introduction",
    title: "Artistry That Feels Like You",
    line: "At MUSE, every makeup look begins with individuality.",
  },
  {
    label: "Philosophy",
    title: "Beauty as Self-Expression",
    line: "We believe makeup should enhance, never hide.",
  },
  {
    label: "Approach",
    title: "A Collaborative Process",
    line: "Every beautiful look begins with understanding you.",
  },
];

export function ArtistStory() {
  return (
    <section className="grid bg-ink lg:min-h-[92vh] lg:grid-cols-2">
      <div className="relative min-h-[70vh] overflow-hidden lg:min-h-full">
        <InViewVideo
          src={VIDEOS.about}
          className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink" />
        <p className="absolute bottom-8 left-6 font-serif text-sm italic text-cream/80 sm:left-10 lg:bottom-12 lg:left-16">
          A makeup artist focused on bringing out what&apos;s already there.
        </p>
      </div>

      <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal className="w-full max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            The Artist
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
            The Face Behind MUSE
          </h2>

          <ol className="mt-12 border-t border-cream/10">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.label}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-cream/10 py-7"
              >
                <span className="font-serif text-sm text-champagne/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-cream/45">
                    {pillar.label}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-cream">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65 sm:text-base">
                    {pillar.line}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/about"
            className="mt-12 inline-block rounded-full border border-champagne/70 px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:border-champagne hover:bg-champagne/10"
          >
            More About Me
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
