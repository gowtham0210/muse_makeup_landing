import Link from "next/link";
import { BOOKING_PATH } from "@/lib/site-config";

export function HeroContent() {
  return (
    <div className="px-6 pt-32 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
      <div>
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            Makeup Artist &middot; Beauty Studio
          </p>
          <h1 className="mt-6 font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-tight text-cream">
            <span className="block">BEAUTY IS AN</span>
            <span className="block italic text-champagne-light">art form.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
            Makeup artistry. Personal expression. Unforgettable transformations.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="rounded-full bg-champagne px-8 py-3 text-center text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
            >
              Explore My Work
            </Link>
            <Link
              href={BOOKING_PATH}
              className="rounded-full border border-champagne/70 px-8 py-3 text-center text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:border-champagne hover:bg-champagne/10"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>

      </div>

      <div aria-hidden="true" className="mt-12 hidden items-center gap-4 sm:flex">
        <span className="relative block h-10 w-px overflow-hidden bg-cream/15">
          <span className="absolute inset-0 bg-champagne motion-safe:animate-scroll-cue" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.35em] text-cream/50">
          Scroll
        </span>
      </div>
    </div>
  );
}
