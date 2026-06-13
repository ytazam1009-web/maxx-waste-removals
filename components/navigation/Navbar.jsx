"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

import Container from "@/components/layout/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        "
      >
        <Container>
          <div className="flex items-center justify-between py-2">
            {/* LOGO */}
            <Link
  href="/"
  className="flex items-center gap-4 flex-shrink-0 -ml-8 md:-ml-12"
>
              <div className="relative w-[270px] md:w-[380px] h-[135px]">
                <Image
                  src="/logos/logo.png"
                  alt="MAXX Waste Removals"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black text-white">
                  MAXX
                </span>

                <span className="text-[#f6be00] uppercase tracking-[3px] text-xs md:text-sm font-bold mt-1">
                  Waste Removals
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-white font-medium">
              <a href="/" className="hover:text-[#f6be00] transition">
                Home
              </a>

              <a href="#services" className="hover:text-[#f6be00] transition">
                Services
              </a>

              <a href="#areas" className="hover:text-[#f6be00] transition">
                Areas
              </a>

              <a href="#reviews" className="hover:text-[#f6be00] transition">
                Reviews
              </a>

              <a href="#contact" className="hover:text-[#f6be00] transition">
                Contact
              </a>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="
                  hidden
                  lg:flex
                  items-center
                  bg-white
                  text-[#07152f]
                  font-bold
                  px-5
                  py-3
                  rounded-full
                  hover:scale-105
                  transition
                "
              >
                Free Quote
              </a>

              <a
                href="tel:+447348481092"
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-2
                  bg-[#f6be00]
                  text-black
                  font-bold
                  px-5
                  py-3
                  rounded-full
                  hover:scale-105
                  transition
                "
              >
                <Phone size={18} />
                Call Now
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            fixed
            top-[84px]
            left-0
            w-full
            bg-[#07152f]
            z-40
            border-t
            border-white/10
            lg:hidden
          "
        >
          <div className="flex flex-col p-8 gap-6 text-white text-lg font-medium">
            {/* MOBILE BRANDING */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-3xl font-black text-white">
                MAXX
              </span>

              <span className="text-[#f6be00] uppercase tracking-[3px] text-sm font-bold mt-1">
                Waste Removals
              </span>
            </div>

            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#f6be00] transition"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#f6be00] transition"
            >
              Services
            </a>

            <a
              href="#areas"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#f6be00] transition"
            >
              Areas
            </a>

            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#f6be00] transition"
            >
              Reviews
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#f6be00] transition"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                bg-[#f6be00]
                text-black
                font-bold
                py-3
                px-5
                rounded-full
                text-center
                hover:scale-105
                transition
              "
            >
              Free Quote
            </a>

            <a
              href="tel:+447348481092"
              onClick={() => setIsOpen(false)}
              className="
                bg-[#f6be00]
                text-black
                font-bold
                py-3
                px-5
                rounded-full
                text-center
                hover:scale-105
                transition
              "
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}