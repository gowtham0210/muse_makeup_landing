import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { TestimonialFan } from "@/components/testimonials/TestimonialFan";
import { TESTIMONIALS } from "@/lib/testimonials";

// All four reviews (Bridal, Editorial, Glam, Party); photos are never repeated.
const PREVIEW = TESTIMONIALS;

export function TestimonialsPreview() {
  return (
    <section className="overflow-hidden bg-ink px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
          Testimonials
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
          Loved by <span className="italic text-champagne-light">clients</span>{" "}
          every step of the way
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/65 sm:text-base">
          Sample stories from the MUSE chair &mdash; placeholder reviews until real
          client feedback is verified.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-6xl">
        <TestimonialFan items={PREVIEW} />
      </Reveal>

      <Reveal delay={0.2} className="mt-12 text-center">
        <Link
          href="/testimonials"
          className="inline-block rounded-full border border-champagne/70 px-8 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:border-champagne hover:bg-champagne/10"
        >
          Read More Testimonials
        </Link>
      </Reveal>
    </section>
  );
}
