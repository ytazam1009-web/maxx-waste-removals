import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07152f] text-white pt-20 pb-10 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRANDING SECTION */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/logos/logo.png"
                  alt="MAXX Waste Removals"
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-black tracking-tight">MAXX</span>
                <span className="text-[#f6be00] uppercase tracking-[2px] text-[10px] font-bold">
                  Waste Removals
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted local partner for professional waste removal and clearance services across the Midlands. Fully licensed, insured, and eco-friendly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#f6be00] hover:text-[#07152f] transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#f6be00] hover:text-[#07152f] transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#f6be00] hover:text-[#07152f] transition-all">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* SERVICES LINKS */}
          <div>
            <h4 className="text-[#f6be00] font-bold uppercase tracking-widest text-sm mb-8 border-b border-[#f6be00]/20 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="/services/house-clearance" className="hover:text-white transition-colors">House Clearance</Link></li>
              <li><Link href="/services/garden-waste" className="hover:text-white transition-colors">Garden Waste Removal</Link></li>
              <li><Link href="/services/office-clearance" className="hover:text-white transition-colors">Office Clearance</Link></li>
              <li><Link href="/services/sofa-removal" className="hover:text-white transition-colors">Sofa & Furniture Removal</Link></li>
              <li><Link href="/services/builders-waste" className="hover:text-white transition-colors">Builders Waste Removal</Link></li>
            </ul>
          </div>

          {/* AREAS COVERED */}
          <div>
            <h4 className="text-[#f6be00] font-bold uppercase tracking-widest text-sm mb-8 border-b border-[#f6be00]/20 pb-2 inline-block">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="/leicester" className="hover:text-white transition-colors">Waste Removal Leicester</Link></li>
              <li><Link href="/coventry" className="hover:text-white transition-colors">Waste Removal Coventry</Link></li>
              <li><Link href="/birmingham" className="hover:text-white transition-colors">Waste Removal Birmingham</Link></li>
              <li><span className="text-gray-500">Surrounding Midlands Areas</span></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-[#f6be00] font-bold uppercase tracking-widest text-sm mb-8 border-b border-[#f6be00]/20 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Local Branch Numbers:</p>
                <a href="tel:02475102901" className="flex items-center gap-3 hover:text-[#f6be00] transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#f6be00]/10">
                    <Phone size={16} className="text-[#f6be00]" />
                  </div>
                  <span>Coventry: 02475 102901</span>
                </a>
                <a href="tel:01163600853" className="flex items-center gap-3 hover:text-[#f6be00] transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#f6be00]/10">
                    <Phone size={16} className="text-[#f6be00]" />
                  </div>
                  <span>Leicester: 01163 600853</span>
                </a>
                <a href="tel:01218126425" className="flex items-center gap-3 hover:text-[#f6be00] transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#f6be00]/10">
                    <Phone size={16} className="text-[#f6be00]" />
                  </div>
                  <span>Birmingham: 01218 126425</span>
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 pt-2">
                <Mail size={16} className="text-[#f6be00]" />
                <span>info@maxxwasteremovals.co.uk</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-[#f6be00]" />
                <span>Open 24/7 for Bookings</span>
              </div>
            </div>
          </div>
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
  );y
}
