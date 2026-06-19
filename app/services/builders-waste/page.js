"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export default function BuildersWastePage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const title = "Builders Waste Removal";
  const description = "Professional construction and builders waste clearance for homes and sites across the Midlands. We handle rubble, timber, plasterboard, and general site debris efficiently.";
  const phone = "+44 7718 090183";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#07152f] text-white pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16">
            {/* LEFT SIDE: TEXT CONTENT */}
            <div className="space-y-8 flex-1 relative z-10">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6be00]/10 border border-[#f6be00]/20 text-[#f6be00] text-xs font-bold uppercase tracking-widest">
                  Site Clearance Service
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mt-6">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mt-8">
                  {description}
                </p>
              </FadeUp>
            </div>

            {/* RIGHT SIDE: MASSIVE RELAX BADGE (400PX) */}
            <div className="relative flex justify-center items-center lg:pr-12">
              <FadeUp delay={0.4}>
                <div 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`relative transition-all duration-500 ease-out cursor-pointer
                    ${isExpanded ? 'scale-[1.2] z-50' : 'scale-100'}
                    lg:hover:scale-[1.2] active:scale-95
                  `}
                >
                  <div className={`absolute inset-0 bg-[#f6be00]/30 rounded-full scale-125 transition-opacity duration-500
                    ${isExpanded ? 'opacity-80 blur-[80px]' : 'opacity-40 blur-[60px] md:blur-[100px]'}
                  `} />
                  
                  <div className="relative w-56 h-56 md:w-[400px] md:h-[400px] rounded-full border-4 md:border-[16px] border-white/20 shadow-2xl overflow-hidden ring-8 ring-white/10">
                    <Image 
                      src="/images/relax.webp" 
                      alt="Relax" 
                      fill 
                      priority
                      sizes="(max-width: 768px) 400px, 800px"
                      className="object-cover" 
                    />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* FEATURES BOX */}
          <div className="mt-24 grid md:grid-cols-2 gap-6">
            {[
              "Rubble & Debris Removal",
              "Site Clearance Specialists",
              "Fully Licensed & Insured",
              "Same Day Collection Available"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-4 bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-[#f6be00]/30 transition-colors">
                <CheckCircle2 className="text-[#f6be00]" size={28} />
                <span className="font-bold text-xl">{feature}</span>
              </div>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="mt-16 p-8 md:p-12 bg-[#f6be00] rounded-[2.5rem] text-[#07152f] text-center shadow-2xl shadow-[#f6be00]/20">
            <h2 className="text-3xl font-black uppercase mb-4 text-[#07152f]">Need it gone today?</h2>
            <p className="font-bold mb-8 opacity-80 text-[#07152f]">Call us now for a free, no-obligation quote.</p>
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-3 bg-[#07152f] text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-xl">
              <Phone size={24} fill="currentColor" />
              {phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
