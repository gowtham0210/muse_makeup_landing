import { HeroContent } from "./HeroContent";
import { VideoBackground } from "@/components/common/VideoBackground";
import { VIDEOS } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <VideoBackground src={VIDEOS.home} />
      {/* Weighted toward the lower left, where the type sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
}
