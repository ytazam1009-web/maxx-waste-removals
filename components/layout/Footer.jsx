"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import Container from "./Container";
import WasteCarrierBadge from "../common/WasteCarrierBadge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: 'MAXX Waste Removals',
        text: 'Professional waste removal and rubbish collection services.',
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <footer id="footer-contact" className="bg-[#07152f] text-white pt-20 pb-10 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRANDING SECTION */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-[200px] h-[60px]">
                <Image
                  src="/logos/logo.webp"
                  alt="MAXX Waste Removals"
                  fill
                  sizes="200px"
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted local partner for professional waste removal and clearance services across the Midlands. Fully licensed, insured, and eco-friendly.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Share our website:</p>
              <button 
                onClick={handleShare}
                className="flex items-center gap-3 w-fit p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-[#f6be00] hover:border-[#f6be00] transition-all group"
              >
                <div className="w-8 h-8 bg-[#f6be00]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f6be00]/20 transition-colors">
                  <Share2 size={16} className="text-[#f6be00]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Send to a Friend</span>
              </button>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block text-[#f6be00]">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#f6be00] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="/services/house-clearance" className="hover:text-white transition-colors">House Clearance</Link></li>
              <li><Link href="/services/garden-waste" className="hover:text-white transition-colors">Garden Waste Removal</Link></li>
              <li><Link href="/services/office-clearance" className="hover:text-white transition-colors">Office Clearance</Link></li>
              <li><Link href="/services/sofa-removal" className="hover:text-white transition-colors">Sofa & Furniture Removal</Link></li>
              <li><Link href="/services/builders-waste" className="hover:text-white transition-colors">Builders Waste Removal</Link></li>
            </ul>
          </div>

          {/* AREAS SECTION */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block text-[#f6be00]">
              Service Areas
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#f6be00] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="/leicester" className="hover:text-white transition-colors">Waste Removal Leicester</Link></li>
              <li><Link href="/coventry" className="hover:text-white transition-colors">Waste Removal Coventry</Link></li>
              <li><Link href="/birmingham" className="hover:text-white transition-colors">Waste Removal Birmingham</Link></li>
              <li className="flex items-center gap-2 italic opacity-60">
                <MapPin size={14} />
                Surrounding Midlands Areas
              </li>
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block text-[#f6be00]">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#f6be00] rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Local Branch Numbers:</p>
                <a href="tel:+447718090183" className="flex items-center gap-3 text-white hover:text-[#f6be00] transition-colors font-bold">
                  <div className="w-8 h-8 bg-[#f6be00] rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-[#07152f]" fill="currentColor" />
                  </div>
                  <span>Direct Mobile: +44 7718 090183</span>
                </a>
                <a href="tel:02475522290" className="flex items-center gap-3 text-white hover:text-[#f6be00] transition-colors font-bold">
                  <div className="w-8 h-8 bg-[#f6be00]/10 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-[#f6be00]" />
                  </div>
                  <span>Coventry: 02475 522290</span>
                </a>
                <a href="tel:01165044009" className="flex items-center gap-3 text-white hover:text-[#f6be00] transition-colors font-bold">
                  <div className="w-8 h-8 bg-[#f6be00]/10 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-[#f6be00]" />
                  </div>
                  <span>Leicester: 01165 044009</span>
                </a>
                <a href="tel:01218384430" className="flex items-center gap-3 text-white hover:text-[#f6be00] transition-colors font-bold">
                  <div className="w-8 h-8 bg-[#f6be00]/10 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-[#f6be00]" />
                  </div>
                  <span>Birmingham: 01218 384430</span>
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 pt-2 border-t border-white/5">
                <Mail size={16} className="text-[#f6be00]" />
                <span className="text-sm">info@maxxwasteremovals.co.uk</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-[#f6be00]" />
                <span className="text-sm font-bold text-white">Open 24/7 for Bookings</span>
              </div>
            </div>
          </div>
        </div>

        {/* WASTE CARRIER BADGE */}
        <div className="col-span-full flex justify-center mb-12">
          <WasteCarrierBadge />
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} MAXX Waste Removals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
