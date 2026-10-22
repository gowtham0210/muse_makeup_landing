import type { Metadata } from "next";
import Link from "next/link";
import { PageVideoHero } from "@/components/layout/PageVideoHero";
import { Reveal } from "@/components/common/Reveal";
import { VIDEOS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About | MUSE",
  description: "The philosophy and approach behind MUSE makeup artistry.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageVideoHero
        videoSrc={VIDEOS.about}
        eyebrow="About"
        title="The Face Behind MUSE"
        subtitle="A makeup artist focused on bringing out what's already there."
      />

      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
              Introduction
            </p>
            <h2 className="mt-4 font-serif text-3xl text-cream">
              Artistry That Feels Like You
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70">
              At MUSE, every makeup look begins with individuality. Through thoughtful techniques, carefully chosen tones, and an eye for detail, each look is designed to complement your features and reflect your personal style.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
              Philosophy
            </p>
            <h2 className="mt-4 font-serif text-3xl text-cream">
              Beauty as Self-Expression
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70">
              We believe makeup should enhance, never hide. Every shade and every stroke is an opportunity to celebrate individuality, express creativity, and bring out the beauty that makes you uniquely you.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
              Approach
            </p>
            <h2 className="mt-4 font-serif text-3xl text-cream">
              A Collaborative Process
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70">
             Every beautiful look begins with understanding you. From discussing your vision and occasion to refining the smallest details, the process is personal, considered, and tailored to help you feel confident in your own skin.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="text-center">
            <h2 className="font-serif text-2xl text-cream sm:text-3xl">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <Link
              href="/booking"
              className="mt-6 inline-block rounded-full bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
            >
              Book Your Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
