"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type VideoBackgroundProps = {
  /** Path under /public, e.g. "/videos/home-hero.mp4" */
  src?: string;
  className?: string;
};

export function VideoBackground({
  src,
  className = "absolute inset-0 h-full w-full object-cover",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay can be blocked by the browser; the static poster/overlay still reads fine.
      });
    }
  }, [prefersReducedMotion]);

  if (!src || failed) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-champagne-dark/40"
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      muted
      loop
      playsInline
      autoPlay={!prefersReducedMotion}
      preload="auto"
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      Your browser does not support HTML video.
    </video>
  );
}
