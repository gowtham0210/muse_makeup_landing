import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { InViewVideo } from "@/components/common/InViewVideo";
import { BOOKING_PATH, VIDEOS } from "@/lib/site-config";

export function FinalBookingCTA() {
  return (
    <section className="overflow-hidden bg-cream px-6 py-24 text-ink sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-dark">
            Book Now
          </p>
          <h2 className="mt-6 font-serif text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-6xl xl:text-7xl">
            Ready for Your{" "}
            <span className="italic text-burgundy">Transformation?</span>
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-ink/75 sm:text-lg">
            Send an enquiry and let&apos;s plan a look that feels like you &mdash;
            only more.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={BOOKING_PATH}
              className="rounded-full bg-ink px-10 py-3.5 text-center text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:bg-burgundy"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/services"
              className="px-2 py-3 text-center text-sm uppercase tracking-[0.15em] text-ink/70 underline-offset-8 transition-colors duration-200 hover:text-ink hover:underline"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>

        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
          <InViewVideo
            src={VIDEOS.booking}
            className="absolute inset-0 h-full w-full object-cover object-[40%_center]"
          />
        </div>
      </div>
    </section>
  );
}
