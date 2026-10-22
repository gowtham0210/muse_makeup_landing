import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { VideoBackground } from "@/components/common/VideoBackground";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { BOOKING_PATH, VIDEOS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Testimonials | MUSE",
  description: "Client testimonials for MUSE makeup artistry.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink px-4 pt-32 pb-20 sm:px-8">
        <VideoBackground src={VIDEOS.testimonials} />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />

        <div className="relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
              Testimonials
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
              What Our <span className="italic text-champagne-light">Clients</span> Say
            </h1>
            <span aria-hidden="true" className="mx-auto mt-6 block h-px w-24 bg-champagne" />
            <p className="mx-auto mt-6 max-w-lg text-xs uppercase leading-relaxed tracking-[0.2em] text-cream/55">
              Sample reviews shown as placeholders until real client feedback is verified.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 lg:mt-16">
            <TestimonialCarousel />
          </Reveal>

          <Reveal delay={0.25} className="mt-14 text-center">
            <Link
              href={BOOKING_PATH}
              className="inline-block rounded-full bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
            >
              Book Your Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
