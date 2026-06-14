"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FadeUp from "@/components/ui/FadeUp";
import { ShieldCheck, Truck, Clock3, Recycle } from "lucide-react";

export default function HeroSection({
  city = "Midlands",
  heroImage = "/images/hero/waste-removal-truck.webp",
  phoneNumber = "02475102901"
}) {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07152f]">
      {/* BACKGROUND IMAGE - Full Screen Merge */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`Waste removal services in ${city}`}
          fill
          priority
          className="object-cover opacity-25"
        />
        {/* Dark Overlay for Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07152f] via-[#07152f]/80 to-[#07152f]" />
      </div>

      <Container className="relative z-10 pt-40 pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          
          {/* LEFT CONTENT (7 Columns) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <FadeUp>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#f6be00]/30 bg-[#f6be00]/10 px-4 py-2 text-xs font-black text-[#f6be00] uppercase tracking-widest">
                Same Day Waste Collection Available
              </div>

              <h1 className="text-5xl font-black leading-[0.9] text-white md:text-8xl uppercase tracking-tighter mb-6">
                Waste Removal   

                <span className="text-[#f6be00]">{city}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
                The Midlands' trusted choice for fast, affordable, and eco-friendly rubbish clearance.
              </p>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <PrimaryButton href="/contact" className="px-10 py-5 text-lg">
                  Get Free Quote
                </PrimaryButton>

                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-5 font-black text-[#07152f] transition hover:scale-105 shadow-xl"
                >
                  Call Now: {phoneNumber}
                </a>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT CONTENT (5 Columns) - The Relax Message */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.2}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#f6be00]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-1 bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                  <div className="relative h-64 w-full overflow-hidden rounded-[1.8rem]">
                    <Image
                      src="/images/relax.webp"
                      alt="Sit back and relax"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-[#f6be00] font-black text-2xl uppercase tracking-tight mb-3">Sit Back & Relax</h3>
                    <p className="text-white text-lg leading-tight font-bold">
                      No lifting, no loading, no stress.   

                      <span className="text-gray-400 font-medium text-sm uppercase tracking-widest mt-2 block">We handle everything for you.</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
