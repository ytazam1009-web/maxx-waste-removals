"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  const getPhoneNumber = () => {
    if (pathname.includes("coventry")) return "02475102901";
    if (pathname.includes("birmingham")) return "01218126425";
    return "01163600853";
  };

  const phone = getPhoneNumber();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: isHome ? "#services" : "/services" },
    { name: "Areas", href: isHome ? "#areas" : "/areas" },
    { name: "Reviews", href: isHome ? "#reviews" : "/reviews" },
    { name: "Contact", href: isHome ? "#contact" : "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-[#07152f]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10" : "bg-transparent py-5"
      }`}>
        <Container>
          <div className="flex items-center justify-between">
            {/* LOGO & BRANDING */}
            <div className="flex items-center gap-4">
              {!isHome && (
                <button 
                  onClick={() => router.back()}
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-[#f6be00] hover:text-[#07152f] transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                <div className="relative w-[120px] h-[40px] md:w-[180px] md:h-[50px]">
                  <Image
                    src="/logos/logo.webp"
                    alt="MAXX Waste Removals"
                    fill
                    sizes="(max-width: 768px) 120px, 180px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col leading-none lg:hidden">
                  <span className="text-xl font-black text-white tracking-tighter">MAXX</span>
                  <span className="text-[8px] font-bold text-[#f6be00] uppercase tracking-widest">Waste Removals</span>
                </div>
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-white font-bold text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-[#f6be00] transition">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden lg:flex items-center bg-white text-[#07152f] font-bold px-6 py-2.5 rounded-full hover:scale-105 transition"
              >
                Free Quote
              </button>

              <a href={`tel:${phone}`} className="hidden lg:flex items-center gap-2 bg-[#f6be00] text-[#07152f] font-black px-6 py-2.5 rounded-full hover:scale-105 transition shadow-lg shadow-[#f6be00]/20">
                <Phone size={18} fill="currentColor" />
                {phone}
              </a>

              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-[#07152f] z-40 border-t border-white/10 lg:hidden h-screen overflow-y-auto">
          <div className="flex flex-col p-8 gap-6 text-white text-lg font-medium">
            <div className="flex flex-col items-center mb-4">
              <span className="text-3xl font-black text-white">MAXX</span>
              <span className="text-[#f6be00] uppercase tracking-[3px] text-sm font-bold mt-1">Waste Removals</span>
            </div>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black hover:text-[#f6be00] transition"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#07152f] font-black py-4 px-5 rounded-2xl text-center text-xl"
            >
              Free Quote
            </button>

            <a
              href={`tel:${phone}`}
              onClick={() => setIsOpen(false)}
              className="bg-[#f6be00] text-[#07152f] font-black py-4 px-5 rounded-2xl text-center text-xl shadow-xl shadow-[#f6be00]/20"
            >
              Call {phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
