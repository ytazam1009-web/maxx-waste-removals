"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FadeUp from "@/components/ui/FadeUp";
import { ShieldCheck, Truck, Clock3, Recycle, Phone } from "lucide-react";

export default function HeroSection({
  city = "Midlands",
  heroImage = "/images/hero/waste-removal-truck.webp",
  phoneNumber = "02475102901"
}) {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <Section className="pt-32 pb-16 bg-[#07152f]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <FadeUp>
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#f6be00]/30 bg-[#f6be00]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f6be00]">
                <span className="mr-2 h-2 w-2 rounded-full bg-[#f6be00] animate-pulse"></span>
                Same Day Waste Collection Available
              </div>

              <h1 className="text-4xl font-black leading-[1.1] text-white md:text-6xl mb-6">
                Professional <span className="text-[#f6be00]">Waste Removal</span> in {city}
              </h1>

              <p className="text-lg leading-relaxed text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
                The Midlands' trusted choice for fast, affordable, and eco-friendly rubbish clearance. 
                We handle house clearances, garden waste, and office removals with same-day service.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <PrimaryButton href="#contact" className="bg-[#f6be00] text-[#07152f] font-black px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all">
                  Get Free Quote
                </PrimaryButton>

                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/20 px-8 py-4 font-black text-white transition hover:bg-white/10 hover:border-[#f6be00]"
                >
                  <Phone size={20} className="text-[#f6be00]" />
                  {phoneNumber}
                </a>
              </div>

              {/* TRUST ICONS */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-300">
                  <ShieldCheck size={20} className="text-[#f6be00]" />
                  <span>Fully Licensed</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-300">
                  <Truck size={20} className="text-[#f6be00]" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-300">
                  <Recycle size={20} className="text-[#f6be00]" />
                  <span>Eco Friendly</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-300">
                  <Clock3 size={20} className="text-[#f6be00]" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT IMAGE */}
          <FadeUp>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[#f6be00]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                <Image
                  src={heroImage}
                  alt={`Professional waste removal services in ${city}`}
                  width={800}
                  height={600}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeUp>

        </div>
      </Container>
    </Section>
  );
}
