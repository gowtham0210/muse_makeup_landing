import Link from "next/link";
import { InViewVideo } from "@/components/common/InViewVideo";
import { Reveal } from "@/components/common/Reveal";
import { VIDEOS } from "@/lib/site-config";

export function BeautyStudio() {
  return (
    <section
      id="beauty-studio"
      aria-labelledby="beauty-studio-heading"
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink px-6 py-24 sm:px-10 lg:min-h-[92vh] lg:items-center lg:px-16 lg:py-32"
    >
      <InViewVideo
        src={VIDEOS.studio}
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      {/* Footage is bright and cream-toned, so the overlay is deliberately heavy */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20 lg:bg-gradient-to-r lg:from-ink/95 lg:via-ink/55 lg:to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            Beyond Makeup &mdash; The MUSE Beauty Studio
          </p>
          <h2
            id="beauty-studio-heading"
            className="mt-6 font-serif text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            Your Beauty.
            <span className="block italic text-champagne-light">Your Ritual.</span>
            Your MUSE.
          </h2>
          <span aria-hidden="true" className="mt-8 block h-px w-24 bg-champagne" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
            MUSE is more than makeup artistry. Step inside the beauty studio
            &mdash; a space made for personal care, expression and the
            confidence that comes with feeling like yourself.
          </p>
          <Link
            href="/studio"
            className="mt-10 inline-block rounded-full bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
          >
            Explore Our Studio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
