"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/" || pathname === "";

  const getPhoneNumber = () => {
    if (isHome) return "+44 7718 090183";
    if (pathname.includes("coventry")) return "02475102901";
    if (pathname.includes("birmingham")) return "01218126425";
    return "+44 7718 090183";
  };

  const phone = getPhoneNumber();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // UPDATED: Changed hrefs to /#id so they work from any page
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Areas", href: "/#areas" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact Us", href: "#footer-contact" },
  ];

  const handleLinkClick = (e, link) => {
    const isHashLink = link.href.includes("#");
    
    if (isHashLink) {
      const targetId = link.href.split("#")[1];
      
      if (isHome) {
        // If on home, prevent reload and smooth scroll
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else if (link.name === "Home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      // If not on home, let the default Link behavior take us to "/#id"
    } else if (isHome && link.name === "Home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 group ${
        scrolled || isOpen ? "bg-[#07152f]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10" : "bg-transparent py-5"
      } ${
        isScrollingUp || isOpen ? "opacity-100 translate-y-0" : "opacity-20 -translate-y-2 hover:opacity-100 hover:translate-y-0"
      }`}>
        <div className="w-full max-w-[1550px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              {!isHome && (
                <button 
                  onClick={() => router.push('/')}
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-[#f6be00] hover:text-[#07152f] transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <div className="flex items-center gap-4 flex-shrink-0">
                <Link href="/" onClick={(e) => handleLinkClick(e, {name: "Home", href: "/"})} className="relative w-[144px] h-[48px] md:w-[216px] md:h-[60px] cursor-pointer">
                  <Image src="/logos/logo.webp" alt="MAXX" fill sizes="216px" className="object-contain" priority />
                </Link>
                <div className="hidden sm:flex flex-col leading-none border-l border-white/20 pl-4 cursor-default">
                  <span className="text-sm md:text-lg font-black text-white tracking-tight uppercase leading-tight">House & Office</span>
                  <span className="text-[8px] md:text-[10px] font-bold text-[#f6be00] uppercase tracking-widest">Clearance Specialists</span>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10 text-white font-bold text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link)} className="hover:text-[#f6be00] transition">
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button onClick={() => isHome ? document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) : router.push('/#contact')} className="hidden lg:flex items-center bg-white text-[#07152f] font-bold px-6 py-2.5 rounded-full hover:scale-105 transition">
                Free Quote
              </button>
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hidden lg:flex items-center gap-2 bg-[#f6be00] text-[#07152f] font-black px-6 py-2.5 rounded-full hover:scale-105 transition shadow-lg shadow-[#f6be00]/20">
                <Phone size={18} fill="currentColor" />
                {phone}
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#07152f] z-40 lg:hidden flex flex-col pt-24 px-8 gap-8 overflow-y-auto">
          <div className="flex flex-col items-center mb-4">
            <span className="text-2xl font-black text-white tracking-tight uppercase">House & Office</span>
            <span className="text-[#f6be00] uppercase tracking-[4px] text-[10px] font-bold mt-1">Clearance Specialists</span>
          </div>
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link)} className="text-3xl font-black text-white hover:text-[#f6be00] transition">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-12 flex flex-col gap-4">
            <a href={`tel:${phone.replace(/\s+/g, "")}`} onClick={() => setIsOpen(false)} className="bg-[#f6be00] text-[#07152f] font-black py-5 px-5 rounded-2xl text-center text-xl shadow-xl shadow-[#f6be00]/20">
              Call {phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
