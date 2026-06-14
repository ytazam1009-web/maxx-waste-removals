"use client";

import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FadeUp from "@/components/ui/FadeUp";
import { Phone, Send } from "lucide-react";

export default function HeroSection({
  city = "Midlands",
  heroImage = "/images/hero/waste-removal-truck.webp",
  phoneNumber = "02475102901"
}) {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07152f]">
      
      {/* BACKGROUND IMAGE - Balanced Alignment (3% gap from top and right) */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full lg:w-[68%] h-[94%] top-[3%] right-[3%]">
          <Image
            src={heroImage}
            alt={`Waste removal in ${city}`}
            fill
            priority
            className="object-cover opacity-100 rounded-[2.5rem] md:rounded-[4rem]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152f] via-[#07152f] to-transparent lg:via-[#07152f]/30 rounded-[2.5rem] md:rounded-[4rem]" />
        </div>
      </div>

      {/* THE RELAX BADGE - Higher Placement (Top Corner) */}
      <div className="absolute top-28 right-8 md:right-16 z-20 hidden lg:block">
        <FadeUp delay={0.8}>
          <div className="relative w-40 h-40 md:w-56 md:h-56 group">
            <div className="absolute inset-0 bg-[#f6be00]/30 blur-[60px] rounded-full scale-125 opacity-50" />
            <div className="relative w-full h-full rounded-full border-4 md:border-8 border-white/20 shadow-2xl overflow-hidden transition-all duration-700 group-hover:scale-110">
              <Image src="/images/relax.webp" alt="Relax" fill className="object-cover" />
            </div>
          </div>
        </FadeUp>
      </div>

      {/* CONTENT - Professional Left Alignment */}
      <div className="relative z-10 w-full pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <FadeUp>
            <div className="mb-6 md:mb-10 inline-flex items-center rounded-full border-2 border-[#f6be00] bg-[#f6be00]/10 px-6 py-2 text-xs md:text-sm font-black text-[#f6be00] uppercase tracking-widest shadow-lg">
              Same Day Waste Collection Available
            </div>

            <h1 className="text-5xl font-black leading-[0.85] text-white md:text-8xl lg:text-[9rem] uppercase tracking-tighter mb-8 md:mb-12">
              Waste Removal   

              <span className="text-[#f6be00]">{city}</span>
            </h1>

            <p className="mt-6 md:mt-10 max-w-2xl text-xl md:text-3xl leading-tight text-white font-bold drop-shadow-lg">
              The Midlands' trusted choice for fast, affordable, <br className="hidden md:block" />
              and eco-friendly rubbish clearance.
            </p>

            {/* IDENTICAL BUTTONS */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-5 md:gap-8">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-10 md:px-14 py-5 md:py-7 font-black text-[#07152f] text-lg md:text-2xl transition hover:scale-105 shadow-2xl border-2 border-white">
                <Send size={28} className="text-[#f6be00]" /> Free Quote
              </a>

              <a href={telLink} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#f6be00] px-10 md:px-14 py-5 md:py-7 font-black text-[#07152f] text-lg md:text-2xl transition hover:scale-105 shadow-2xl border-2 border-[#f6be00]">
                <Phone size={28} fill="currentColor" /> {phoneNumber}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
