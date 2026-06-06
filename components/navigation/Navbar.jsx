"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/10
      bg-[#07152f]/90
      backdrop-blur-lg
    "
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link
            href="/"
            className="text-xl md:text-2xl font-extrabold text-white"
          >
            MAXX Waste Removals
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden md:flex items-center gap-8 text-gray-300">

            <Link href="/">Home</Link>

            <Link href="/leicester">Leicester</Link>

            <Link href="/coventry">Coventry</Link>

            <Link href="/birmingham">Birmingham</Link>

          </nav>

          <div className="hidden md:block">
            <PrimaryButton href="/contact">
              Free Quote
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            className="
            md:hidden
            border-t
            border-white/10
            py-6
          "
          >
            <div className="flex flex-col gap-5">

              <Link href="/">Home</Link>

              <Link href="/leicester">Leicester</Link>

              <Link href="/coventry">Coventry</Link>

              <Link href="/birmingham">Birmingham</Link>

              <PrimaryButton href="/contact">
                Free Quote
              </PrimaryButton>

            </div>
          </div>
        )}
      </Container>
    </header>
  );
}