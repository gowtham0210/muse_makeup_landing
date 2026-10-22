import type { Metadata } from "next";
import { Suspense } from "react";
import { PageVideoHero } from "@/components/layout/PageVideoHero";
import { BookingForm } from "@/components/booking/BookingForm";
import { VIDEOS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book Now | MUSE",
  description: "Send a booking enquiry to MUSE makeup artistry.",
};

export default function BookingPage() {
  return (
    <main className="flex-1">
      <PageVideoHero
        videoSrc={VIDEOS.booking}
        eyebrow="Book Now"
        title="Let's Plan Your Look"
        subtitle="Share a few details and the artist will follow up to confirm availability."
      />
      <section className="bg-ink px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <Suspense fallback={null}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
