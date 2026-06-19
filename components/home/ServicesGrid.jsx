"use client";
import Link from "next/link";
import { ArrowRight, Sofa, Home, TreePine, Briefcase, Construction, Refrigerator } from "lucide-react";
import Container from "@/components/layout/Container";

export default function ServicesGrid() {
  const services = [
    {
      title: "House Clearance",
      description: "Complete house clearance services for probate, moving, or decluttering. We handle everything from furniture to carpets.",
      icon: <Home size={32} />,
      href: "/services/house-clearance",
    },
    {
      title: "Furniture Removals", // CHANGED FROM "Sofa & Furniture Removal"
      description: "Fast collection and eco-friendly disposal of sofas, armchairs, and all types of household furniture.",
      icon: <Sofa size={32} />,
      href: "/services/sofa-removal",
    },
    {
      title: "Garden Waste",
      description: "Professional garden clearance including green waste, old sheds, fencing, and general garden rubbish.",
      icon: <TreePine size={32} />,
      href: "/services/garden-waste",
    },
    {
      title: "Office Clearance",
      description: "Efficient commercial clearance for offices, warehouses, and retail spaces. Secure WEEE disposal included.",
      icon: <Briefcase size={32} />,
      href: "/services/office-clearance",
    },
    {
      title: "Builders Waste",
      description: "Removal of renovation debris, bricks, soil, and construction waste. A faster alternative to skip hire.",
      icon: <Construction size={32} />,
      href: "/services/builders-waste",
    },
    {
      title: "Appliance Removal",
      description: "Safe disposal of fridges, freezers, washing machines, and other large electrical appliances.",
      icon: <Refrigerator size={32} />,
      href: "/services/appliance-removal",
    },
  ];

  return (
    <section className="bg-[#07152f] py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f6be00]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#f6be00]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <Container>
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6be00]/10 border border-[#f6be00]/20 text-[#f6be00] text-xs font-bold uppercase tracking-widest">
            What We Do
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Our Professional <span className="text-[#f6be00]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            We provide a comprehensive range of waste removal solutions across the Midlands, 
            ensuring your space is cleared quickly, professionally, and responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#f6be00]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Card Hover Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6be00]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-[#f6be00] rounded-2xl flex items-center justify-center text-[#07152f] shadow-xl shadow-[#f6be00]/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#f6be00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-[#f6be00] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  View Details
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
