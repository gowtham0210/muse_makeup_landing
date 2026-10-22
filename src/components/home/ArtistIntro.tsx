import { Reveal } from "@/components/common/Reveal";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function ArtistIntro() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 sm:px-10 lg:px-16 lg:py-48">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Warm champagne glow, upper right */}
        <div className="absolute -top-1/4 -right-1/4 h-[90%] w-[75%] rounded-full bg-[radial-gradient(closest-side,rgba(201,168,106,0.16),transparent)]" />
        {/* Deep burgundy glow, lower left */}
        <div className="absolute -bottom-1/3 -left-1/4 h-[90%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(110,36,48,0.28),transparent)]" />
        {/* Fine gold rules */}
        <div className="absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-champagne/25 to-transparent sm:left-10 lg:left-16" />
        <div className="absolute inset-y-0 right-6 hidden w-px bg-gradient-to-b from-transparent via-champagne/15 to-transparent sm:right-10 sm:block lg:right-16" />
        {/* Monogram watermark */}
        <span className="absolute -right-[4%] top-1/2 -translate-y-1/2 select-none font-serif text-[38vw] leading-none text-transparent [-webkit-text-stroke:1px_rgba(201,168,106,0.12)] lg:text-[30vw]">
          M
        </span>
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />
        {/* Soft edge fade into neighbouring sections */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            The Concept
          </p>
          <h2 className="mt-8 max-w-5xl font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-7xl">
            Makeup is more than a finish &mdash; it&apos;s a form of{" "}
            <em className="text-champagne-light">storytelling.</em>
          </h2>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12"
        >
          <span
            aria-hidden="true"
            className="hidden h-px w-full self-start bg-champagne/40 lg:col-span-4 lg:mt-3 lg:block"
          />
          <p className="text-base leading-relaxed text-cream/70 sm:text-lg lg:col-span-6 lg:col-start-6">
            At MUSE, beauty is never one-size-fits-all. Every look begins with
            your individuality, your vision, and the details that make you
            unique. From soft, natural elegance to captivating glamour, the goal
            is to create makeup that feels authentic, enhances your features,
            and brings your confidence to life.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
