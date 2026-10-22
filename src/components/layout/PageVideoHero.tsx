import type { ReactNode } from "react";
import { VideoBackground } from "@/components/common/VideoBackground";

type PageVideoHeroProps = {
  videoSrc?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageVideoHero({
  videoSrc,
  eyebrow,
  title,
  subtitle,
  children,
}: PageVideoHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-start justify-center overflow-hidden bg-ink px-6 pt-32 pb-16 sm:px-10 lg:px-16">
      <VideoBackground src={videoSrc} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />

      <div className="relative z-10 max-w-2xl">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
