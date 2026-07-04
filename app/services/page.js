import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrustBar from "@/components/home/TrustBar";
import Container from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Waste Removal Services | Maxx Waste Removals",

  description:
    "Explore our full range of professional waste removal services across the Midlands, including house, office, garden, and builders waste clearance.",

  openGraph: {
    title: "Our Waste Removal Services | Maxx Waste Removals",
    description:
      "Explore our full range of professional waste removal services across the Midlands, including house, office, garden, and builders waste clearance.",
    url: "https://www.maxxwasteremovals.co.uk/services",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#07152f]">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/5">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6be00]/10 border border-[#f6be00]/20 text-[#f6be00] text-xs font-bold uppercase tracking-widest mb-6">
              Expert Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
              Our <span className="text-[#f6be00]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
              We provide comprehensive waste management solutions for residential and commercial clients across Leicester, Coventry, and Birmingham.
            </p>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* THE SERVICES GRID (Main Content) */}
      <ServicesGrid />

      {/* SEO CONTENT SECTION */}
      <section className="py-24 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                Why Choose Our <span className="text-[#f6be00]">Waste Solutions?</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                At Maxx Waste Removals, we pride ourselves on delivering a service that is not only fast and affordable but also environmentally responsible. We aim to recycle or repurpose up to 90% of the waste we collect.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully Licensed Waste Carriers",
                  "Environment Agency Approved",
                  "Public Liability Insurance up to £5m",
                  "Transparent, No-Obligation Pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-bold">
                    <CheckCircle2 className="text-[#f6be00]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f6be00] p-12 rounded-[3rem] text-[#07152f]">
              <h3 className="text-3xl font-black uppercase mb-4">
                Ready to clear your space?
              </h3>
              <p className="font-bold mb-8 opacity-80">
                Get an instant quote for any of our services today.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#07152f] text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-xl"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}