"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Calendar } from "lucide-react";

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
          <div className="flex items-center justify-between py-3">
            {/* LOGO SECTION */}
            <Link
              href="/"
              className="flex items-center gap-3 transition hover:opacity-90"
            >
              <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                <Image
                  src="/logos/logo.png"
                  alt="MAXX Waste Removals"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-black text-white tracking-tight">
                  MAXX
                </span>
                <span className="text-[#f6be00] uppercase tracking-[2px] text-[10px] md:text-xs font-bold">
                  Waste Removals
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-8 text-white/90 font-semibold text-sm uppercase tracking-wide">
              <a href="/" className="hover:text-[#f6be00] transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-[#f6be00] transition-colors">
                Services
              </a>
              <a href="#areas" className="hover:text-[#f6be00] transition-colors">
                Areas
              </a>
              <a href="#reviews" className="hover:text-[#f6be00] transition-colors">
                Reviews
              </a>
              <a href="#contact" className="hover:text-[#f6be00] transition-colors">
                Contact
              </a>
            </nav>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  bg-[#f6be00]
                  text-[#07152f]
                  font-extrabold
                  px-6
                  py-2.5
                  rounded-full
                  text-sm
                  uppercase
                  shadow-[0_4px_20px_rgba(246,190,0,0.3)]
                  hover:bg-white
                  hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]
                  transition-all
                  duration-300
                "
              >
                <Calendar size={16} />
                Free Quote
              </a>

              <a
                href={telLink}
                className="
                  flex
                  items-center
                  gap-2
                  bg-[#f6be00]
                  text-[#07152f]
                  font-extrabold
                  px-6
                  py-2.5
                  rounded-full
                  text-sm
                  uppercase
                  shadow-[0_4px_20px_rgba(246,190,0,0.3)]
                  hover:bg-white
                  hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]
                  transition-all
                  duration-300
                "
              >
                <Phone size={16} fill="currentColor" />
                <span className="hidden md:inline">{phoneNumber}</span>
                <span className="md:hidden text-xs">Call</span>
              </a>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            top-[84px]
            w-full
            h-screen
            bg-[#07152f]
            z-40
            lg:hidden
            animate-in fade-in slide-in-from-top-4
          "
        >
          <nav className="flex flex-col p-6 gap-4 text-white">
            <div className="grid grid-cols-1 gap-3 mb-6">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="p-4 bg-white/5 rounded-xl hover:bg-[#f6be00] hover:text-[#07152f] transition-all font-bold uppercase tracking-widest text-center"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="p-4 bg-white/5 rounded-xl hover:bg-[#f6be00] hover:text-[#07152f] transition-all font-bold uppercase tracking-widest text-center"
              >
                Services
              </a>
              <a
                href="#areas"
                onClick={() => setIsOpen(false)}
                className="p-4 bg-white/5 rounded-xl hover:bg-[#f6be00] hover:text-[#07152f] transition-all font-bold uppercase tracking-widest text-center"
              >
                Areas
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="p-4 bg-[#f6be00] text-[#07152f] rounded-xl font-black uppercase tracking-widest text-center shadow-lg"
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
