"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { TESTIMONIALS } from "@/lib/testimonials";

const SWIPE_THRESHOLD = 50;

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={direction === "prev" ? "M10 2 L4 8 L10 14" : "M6 2 L12 8 L6 14"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const ARROW_CLASSES =
  "absolute top-36 sm:top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/60 bg-ink/90 text-champagne-light transition-colors duration-200 hover:bg-champagne hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne disabled:pointer-events-none disabled:opacity-30";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const last = TESTIMONIALS.length - 1;

  const go = (next: number) => setIndex(Math.min(last, Math.max(0, next)));

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(index + (delta < 0 ? 1 : -1));
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials (placeholder reviews)"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-champagne"
      style={{ ["--w" as string]: "min(46rem, 84vw)", ["--g" as string]: "1.5rem" }}
    >
      <div
        className="overflow-hidden py-6"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <ul
          className="ml-[50%] flex gap-[var(--g)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{
            transform: `translateX(calc(-1 * (var(--w) / 2 + ${index} * (var(--w) + var(--g)))))`,
          }}
        >
          {TESTIMONIALS.map((item, i) => {
            const active = i === index;
            return (
              <li
                key={item.id}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
                aria-hidden={!active}
                inert={!active}
                className={`w-[var(--w)] shrink-0 transition-[opacity,transform] duration-700 motion-reduce:transition-none ${
                  active ? "scale-100 opacity-100" : "scale-90 opacity-35"
                }`}
              >
                <article className="grid overflow-hidden rounded-2xl border border-champagne/25 bg-ink-soft shadow-2xl shadow-black/60 md:grid-cols-[2fr_3fr]">
                  <div className="relative h-60 bg-champagne-dark/30 md:h-auto md:min-h-[22rem]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 280px, 84vw"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="relative flex flex-col justify-center p-7 sm:p-10">
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-6 font-serif text-8xl leading-none text-champagne/25"
                    >
                      &rdquo;
                    </span>
                    <p className="font-serif text-lg leading-relaxed text-cream sm:text-xl">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="mt-8 font-serif text-xl text-champagne-light">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/55">
                      {item.role}
                    </p>
                    <p className="mt-5 w-fit border border-champagne/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-champagne-light/80">
                      Placeholder review &middot; pending verification
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => go(index - 1)}
        disabled={index === 0}
        className={`${ARROW_CLASSES} left-1 sm:left-6 lg:left-[6%]`}
      >
        <Arrow direction="prev" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => go(index + 1)}
        disabled={index === last}
        className={`${ARROW_CLASSES} right-1 sm:right-6 lg:right-[6%]`}
      >
        <Arrow direction="next" />
      </button>

      <div className="mt-6 flex justify-center gap-3" role="group" aria-label="Choose testimonial">
        {TESTIMONIALS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-champagne" : "w-3 bg-cream/30 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
