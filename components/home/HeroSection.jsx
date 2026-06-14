"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FadeUp from "@/components/ui/FadeUp";
import { ShieldCheck, Truck, Clock3, Recycle } from "lucide-react";

export default function HeroSection({
  city = "UK",
  heroImage = "/images/hero/waste-removal-truck.webp",
  phoneNumber = "02475102901"
}) {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#07152f]">
      {/* BACKGROUND MERGE: The truck image is now the full background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`Waste removal services in ${city}`}
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152f] via-[#07152f]/90 to-[#07152f]/40" />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <FadeUp>
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#f6be00]/30 bg-[#f6be00]/10 px-4 py-2 text-sm font-black text-[#f6be00] uppercase tracking-wider animate-pulse">
                Same Day Waste Collection Available
              </div>

              <h1 className="text-5xl font-black leading-tight text-white md:text-7xl uppercase tracking-tighter">
                Waste Removal   

                <span className="text-[#f6be00]">{city}</span>
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-relaxed text-gray-200 font-medium">
                The Midlands' trusted choice for fast, affordable, and eco-friendly rubbish clearance.
              </p>

              {/* RELAX MESSAGE WITH YOUR NEW IMAGE */}
              <div className="mt-10 p-2 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-6 max-w-2xl shadow-2xl overflow-hidden">
                <div className="relative w-full md:w-48 h-40 flex-shrink-0">
                  <Image
                    src="/images/relax.webp"
                    alt="Sit back and relax"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-[#f6be00] font-black text-xl uppercase tracking-tight mb-2">Sit Back & Relax</h3>
                  <p className="text-white text-base leading-snug font-bold">
                    No lifting, no loading, no stress.   

                    <span className="text-gray-400 font-medium text-sm">Just tell us what needs to go, and we'll do the rest.</span>
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <PrimaryButton href="/contact" className="px-10 py-5 text-lg shadow-[0_10px_30px_rgba(246,190,0,0.3)]">
                  Get Free Quote
                </PrimaryButton>

                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-5 font-black text-[#07152f] transition hover:scale-105 shadow-xl"
                >
                  Call Now: {phoneNumber}
                </a>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT SIDE (Trust Badges) */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck size={30} />, text: "Fully Licensed" },
              { icon: <Truck size={30} />, text: "Same Day" },
              { icon: <Recycle size={30} />, text: "Eco Friendly" },
              { icon: <Clock3 size={30} />, text: "Fast Response" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-[#f6be00]/10 transition-colors">
                <div className="text-[#f6be00]">{item.icon}</div>
                <span className="text-white font-bold uppercase text-xs tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
