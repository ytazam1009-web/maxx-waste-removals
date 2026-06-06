import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import PrimaryButton from "@/components/ui/PrimaryButton";
import FadeUp from "@/components/ui/FadeUp";

import {
  ShieldCheck,
  Truck,
  Clock3,
  Recycle,
} from "lucide-react";

export default function HeroSection({
  city = "UK",
  heroImage = "/images/hero/waste-removal-truck.webp",
}) {
  return (
    <Section>
      <Container>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <FadeUp>
            <div>

              <div className="mb-6 inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
                Same Day Waste Collection Available
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Waste Removal {city}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
                Professional waste removal, house clearance, garden waste disposal, and rubbish collection services with fast response times and eco-friendly disposal.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <PrimaryButton href="/contact">
                  Get Free Quote
                </PrimaryButton>

                <a
                  href="tel:+441234567890"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Call Now
                </a>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ShieldCheck size={18} />
                  Fully Insured
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Truck size={18} />
                  Same Day Service
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Recycle size={18} />
                  Eco Friendly
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock3 size={18} />
                  Fast Response
                </div>

              </div>

            </div>
          </FadeUp>

          {/* RIGHT IMAGE */}
          <FadeUp>
            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-yellow-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">

                <Image
                  src={heroImage}
                  alt={`Waste removal service in ${city}`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />

              </div>

            </div>
          </FadeUp>

        </div>

      </Container>
    </Section>
  );
}