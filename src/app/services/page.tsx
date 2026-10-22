import type { Metadata } from "next";
import { PageVideoHero } from "@/components/layout/PageVideoHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES, VIDEOS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services | MUSE",
  description:
    "Bridal, party, editorial, and personal makeup sessions by MUSE.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageVideoHero
        videoSrc={VIDEOS.services}
        eyebrow="Services"
        title="Makeup Artistry, Tailored to You"
        subtitle="Every session starts with a conversation about your features, your event, and the look you want to walk away with."
      />
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
