"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

import Container from "@/components/layout/Container";

export default function Navbar({ phoneNumber = "02475102901" }) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to format phone for href
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          bg-[#07152f]/95
          backdrop-blur-md
          border-b
          border-white/10
          shadow-lg
        "
      >
        <Container>
          {/* Reduced padding from py-3 to py-2 to make it more compact */}
          <div className="flex items-center justify-between py-2">
            
            {/* LOGO SECTION - Resized for better fit */}
            <Link
              href="/"
              className="flex items-center gap-3 transition hover:opacity-90"
            >
              <div className="relative w-[180px] md:w-[220px] h-[60px] md:h-[75px]">
                <Image
                  src="/logos/logo.png"
                  alt="MAXX Waste Removals"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
                  MAXX
                </span>
                <span className="text-[#f6be00] uppercase tracking-[2px] text-[10px] md:text-xs font-bold">
                  Waste Removals
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 text-white text-sm font-bold uppercase tracking-widest">
              <a href="/" className="hover:text-[#f6be00] transition-colors">Home</a>
              <a href="#services" className="hover:text-[#f6be00] transition-colors">Services</a>
              <a href="#areas" className="hover:text-[#f6be00] transition-colors">Areas</a>
              <a href="#reviews" className="hover:text-[#f6be00] transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-[#f6be00] transition-colors">Contact</a>
            </nav>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              <a
                href={telLink}
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  bg-[#f6be00]
                  text-[#07152f]
                  font-black
                  px-5
                  py-2.5
                  rounded-xl
                  text-sm
                  uppercase
                  tracking-wider
                  hover:scale-105
                  transition-all
                  shadow-[0_4px_15px_rgba(246,190,0,0.3)]
                "
              >
                <Phone size={16} fill="currentColor" />
                {phoneNumber}
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-[#f6be00] transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU - Adjusted top position to match new header height */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <nav className="absolute top-[80px] left-0 w-full bg-[#07152f] border-t border-white/10 p-8 flex flex-col gap-6 text-white">
            <a href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold border-b border-white/5 pb-2">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-bold border-b border-white/5 pb-2">Services</a>
            <a href="#areas" onClick={() => setIsOpen(false)} className="text-xl font-bold border-b border-white/5 pb-2">Areas</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="text-xl font-bold border-b border-white/5 pb-2">Reviews</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-bold border-b border-white/5 pb-2">Contact</a>
            
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="p-4 bg-white text-[#07152f] rounded-xl font-black uppercase tracking-widest text-center shadow-lg"
              >
                Get A Free Quote
              </a>
              <a
                href={telLink}
                onClick={() => setIsOpen(false)}
                className="p-4 bg-[#f6be00] text-[#07152f] rounded-xl font-black uppercase tracking-widest text-center shadow-lg flex items-center justify-center gap-3"
              >
                <Phone size={20} fill="currentColor" />
                Call: {phoneNumber}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
