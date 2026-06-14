"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Container from "@/components/layout/Container";

export default function Navbar({ phoneNumber = "02475102901" }) {
  const [isOpen, setIsOpen] = useState(false);
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#07152f]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
        <Container>
          <div className="flex items-center justify-between py-1 md:py-2">
            
            {/* UPDATED TO WEBP LOGO */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-[70px] md:w-[100px] h-[70px] md:h-[100px] transition-transform duration-300 group-hover:scale-105">
                <Image src="/logos/logo.webp" alt="MAXX Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">MAXX</span>
                <span className="text-[10px] md:text-xs font-bold text-[#f6be00] uppercase tracking-[3px]">Waste Removals</span>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-8 text-white font-bold text-xs uppercase tracking-[2px]">
              <Link href="/" className="hover:text-[#f6be00] transition-colors">Home</Link>
              <a href="#services" className="hover:text-[#f6be00] transition-colors">Services</a>
              <a href="#areas" className="hover:text-[#f6be00] transition-colors">Areas</a>
              <a href="#reviews" className="hover:text-[#f6be00] transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-[#f6be00] transition-colors">Contact</a>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="bg-white text-[#07152f] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#f6be00] transition-all shadow-lg">
                Free Quote
              </a>
              <a href={telLink} className="bg-[#f6be00] text-[#07152f] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                <Phone size={14} fill="currentColor" /> {phoneNumber}
              </a>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white p-2 bg-white/5 rounded-lg border border-white/10">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </Container>
      </header>
    </>
  );
}
