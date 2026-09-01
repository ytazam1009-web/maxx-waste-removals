"use client";
import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { Phone, Send } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeroSection({
  city = "Midlands",
  heroImage = "/images/hero/waste-removal-truck.webp",
  phoneNumber = "02475 522292" // Default mobile
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  
  // LOGIC: Use mobile for home, preserve local numbers for city pages
  const displayPhone = (pathname === "/" || pathname === "") ? "02475 522292" : phoneNumber;
  const telLink = `tel:${displayPhone.replace(/\s+/g, "")}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07152f]">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full lg:w-[68%] h-[94%] top-[3%] right-[3%]">
          <Image
            src={heroImage}
            alt={`Professional waste removal and house clearance in ${city}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 68vw"
            className="object-cover opacity-100 rounded-[2.5rem] md:rounded-[4rem]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152f] via-[#07152f] to-transparent lg:via-[#07152f]/30 rounded-[2.5rem] md:rounded-[4rem]" />
        </div>
      </div>

      {/* THE RELAX BADGE - INTERACTIVE ZOOM */}
      <div className="absolute top-16 right-4 md:top-32 md:right-16 z-30">
        <FadeUp delay={0.8}>
          <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`relative transition-all duration-500 ease-out cursor-pointer
              ${isExpanded ? 'scale-[1.8] md:scale-[1.5] z-50' : 'scale-100'}
              lg:hover:scale-[1.8] active:scale-95
            `}
          >
            <div className={`absolute inset-0 bg-[#f6be00]/30 rounded-full scale-125 transition-opacity duration-500
              ${isExpanded ? 'opacity-80 blur-[40px]' : 'opacity-40 blur-[30px] md:blur-[60px]'}
            `} />
            
            <div className="relative w-24 h-24 md:w-56 md:h-56 rounded-full border-2 md:border-8 border-white/20 shadow-2xl overflow-hidden ring-4 ring-white/10">
              <Image 
                src="/images/relax.webp" 
                alt="Relax" 
                fill 
                sizes="(max-width: 768px) 150px, 400px"
                className="object-cover" 
              />
            </div>
          </div>
        </FadeUp>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full pt-44 md:pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <FadeUp>
            <div className="mb-6 md:mb-8 inline-flex items-center rounded-full border-2 border-[#f6be00] bg-[#f6be00]/10 px-6 py-2 text-[10px] md:text-sm font-black text-[#f6be00] uppercase tracking-widest shadow-lg">
              Same Day Waste Collection Available
            </div>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl lg:text-[5.5rem] uppercase tracking-tighter mb-2 md:mb-4">
              Professional Waste Removal <br className="md:hidden" />
              <span className="text-[#f6be00]">{city}</span>
            </h1>

            {/* BRANDING SUBHEADING */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white/90 uppercase tracking-tight mb-8 md:mb-10">
              House Clearance & Licensed Waste Carrier
            </h2>

            <p className="mt-4 md:mt-8 max-w-2xl text-lg md:text-2xl lg:text-3xl leading-tight text-white font-bold drop-shadow-lg">
              The Midlands' trusted choice for fast, affordable, <br className="hidden md:block" />
              and eco-friendly rubbish clearance. Cheaper than skip hire!
            </p>

            <div className="mt-10 md:mt-16 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 md:px-12 py-4 md:py-6 font-black text-[#07152f] text-lg md:text-xl transition hover:scale-105 shadow-2xl border-2 border-white cursor-pointer">
                <Send size={24} className="text-[#f6be00]" /> Free Quote
              </a>

              <a href={telLink} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#f6be00] px-8 md:px-12 py-4 md:py-6 font-black text-[#07152f] text-lg md:text-xl transition hover:scale-105 shadow-2xl border-2 border-[#f6be00]">
                <Phone size={24} fill="currentColor" /> {displayPhone}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
