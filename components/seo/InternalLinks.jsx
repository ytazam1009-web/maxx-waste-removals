import Link from "next/link";

export default function InternalLinks() {
  return (
    <section className="py-16 border-t border-white/10 bg-[#07152f]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
          Licensed Waste Removal & House Clearance Midlands
        </h2>

        <p className="text-gray-400 mb-10 max-w-3xl font-medium">
          Professional, same-day rubbish clearance and house clearance services
          across Leicester, Coventry, Birmingham and the surrounding Midlands areas. 
          Cheaper than skip hire and fully licensed for your peace of mind.
        </p>

        <div className="grid gap-10 md:grid-cols-3">

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold text-[#f6be00] uppercase tracking-wider mb-4">
              Our Specialist Services
            </h3>

            <ul className="space-y-2 text-gray-300 font-medium">
              <li><Link href="/services/house-clearance" className="hover:text-white transition-colors">Professional House Clearance</Link></li>
              <li><Link href="/services/sofa-removal" className="hover:text-white transition-colors">Sofa & Furniture Disposal</Link></li>
              <li><Link href="/services/garden-waste" className="hover:text-white transition-colors">Garden Waste & Green Clearance</Link></li>
              <li><Link href="/services/office-clearance" className="hover:text-white transition-colors">Commercial Office Clearance</Link></li>
              <li><Link href="/services/builders-waste" className="hover:text-white transition-colors">Builders Waste & Site Clearance</Link></li>
              <li><Link href="/services/mattress-removal" className="hover:text-white transition-colors">Mattress & Bed Removal</Link></li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="text-lg font-bold text-[#f6be00] uppercase tracking-wider mb-4">
              Local Areas We Cover
            </h3>

            <ul className="space-y-2 text-gray-300 font-medium">
              <li><Link href="/leicester" className="hover:text-white transition-colors">Rubbish Removal Leicester</Link></li>
              <li><Link href="/coventry" className="hover:text-white transition-colors">House Clearance Coventry</Link></li>
              <li><Link href="/birmingham" className="hover:text-white transition-colors">Waste Collection Birmingham</Link></li>
            </ul>
          </div>

          {/* QUICK NAV */}
          <div>
            <h3 className="text-lg font-bold text-[#f6be00] uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>

            <ul className="space-y-2 text-gray-300 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get a Free Quote</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">All Waste Services</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-sm text-gray-500 font-medium">
          <p>
            Maxx Waste Removals is a leading licensed, insured, and eco-friendly waste disposal
            provider. We specialize in rapid-response rubbish clearance across the Midlands, 
            including Leicester, Coventry, and Birmingham. No upfront payment required.
          </p>
        </div>

      </div>
    </section>
  );
}
