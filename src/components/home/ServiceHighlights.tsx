import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";
import { InViewVideo } from "@/components/common/InViewVideo";
import { SERVICES, VIDEOS } from "@/lib/site-config";

export function ServiceHighlights() {
  return (
    <section className="bg-ink-soft px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-champagne-light/90">
              Services
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl">
              Tailored Makeup Artistry
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
              Every session starts with a conversation about your features,
              your event, and the look you want to walk away with.
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-champagne/15">
            {SERVICES.map((service, index) => (
              <li key={service.slug} className="border-b border-champagne/15">
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne sm:grid-cols-[3.5rem_1fr_auto]"
                >
                  <span className="font-serif text-sm text-champagne/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-serif text-2xl text-cream transition-colors duration-200 group-hover:text-champagne-light sm:text-3xl">
                      {service.title}
                    </span>
                    <span className="mt-3 block max-w-md text-sm leading-relaxed text-cream/60">
                      {service.description}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-champagne-light transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="mx-auto max-w-sm">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -translate-x-4 translate-y-4 border border-champagne/25"
                />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <InViewVideo
                    src={VIDEOS.services}
                    className="absolute inset-0 h-full w-full scale-110 object-cover object-[45%_center]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
                  <p className="absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.25em] text-cream/80">
                    Contact for pricing
                  </p>
                </div>
              </div>
              <Link
                href="/services"
                className="mt-10 inline-block rounded-full bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
              >
                View All Services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
