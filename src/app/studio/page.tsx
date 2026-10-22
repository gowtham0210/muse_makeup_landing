import type { Metadata } from "next";
import Link from "next/link";
import { PageVideoHero } from "@/components/layout/PageVideoHero";
import { Reveal } from "@/components/common/Reveal";
import { InViewVideo } from "@/components/common/InViewVideo";
import { BOOKING_PATH, VIDEOS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Beauty Studio | MUSE",
  description:
    "Beyond makeup — the MUSE beauty studio, a space for personal care, expression and confidence.",
};

export default function StudioPage() {
  return (
    <main className="flex-1">
      <PageVideoHero
        videoSrc={VIDEOS.studio}
        eyebrow="Beyond Makeup — The MUSE Beauty Studio"
        title="Your Beauty. Your Ritual. Your MUSE."
        subtitle="MUSE is more than makeup artistry. Step inside the beauty studio — a space made for personal care, expression and the confidence that comes with feeling like yourself."
      />

      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
              The Studio
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-cream sm:text-4xl lg:text-5xl">
              A space made for{" "}
              <span className="italic text-champagne-light">you</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
              Alongside the makeup artistry, MUSE is also a beauty studio. To
              learn about what&apos;s available and plan a visit, send an
              enquiry and the studio will follow up.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={BOOKING_PATH}
                className="rounded-full bg-champagne px-8 py-3 text-center text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
              >
                Book Your Appointment
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-champagne/70 px-8 py-3 text-center text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:border-champagne hover:bg-champagne/10"
              >
                View Makeup Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
              <InViewVideo
                src={VIDEOS.studio}
                startAt={5}
                className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
