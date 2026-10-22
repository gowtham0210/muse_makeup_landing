"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type InViewVideoProps = {
  src: string;
  className?: string;
  /** Seconds into the clip used as the first visible frame. */
  startAt?: number;
  /** When set, overrides in-view playback (e.g. hover-to-play cards). */
  active?: boolean;
};

export function InViewVideo({
  src,
  className = "absolute inset-0 h-full w-full object-cover",
  startAt,
  active,
}: InViewVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [inView, setInView] = useState(false);
  const [failed, setFailed] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          nearObserver.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    const visibleObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    nearObserver.observe(video);
    visibleObserver.observe(video);
    return () => {
      nearObserver.disconnect();
      visibleObserver.disconnect();
    };
  }, []);

  const shouldPlay = nearViewport && !prefersReducedMotion && (active ?? inView);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !nearViewport) return;
    if (shouldPlay) {
      video.play().catch(() => {
        // Autoplay can be blocked; the first frame stays visible instead.
      });
    } else {
      video.pause();
    }
  }, [shouldPlay, nearViewport]);

  const resolvedSrc = startAt ? `${src}#t=${startAt}` : src;

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-ink-soft via-ink to-champagne-dark/30"
      />
      <video
        ref={videoRef}
        className={`${className} ${failed ? "hidden" : ""}`}
        src={nearViewport ? resolvedSrc : undefined}
        muted
        loop
        playsInline
        preload={nearViewport ? (active === undefined ? "auto" : "metadata") : "none"}
        aria-hidden="true"
        onError={() => setFailed(true)}
      >
        Your browser does not support HTML video.
      </video>
    </>
  );
}
