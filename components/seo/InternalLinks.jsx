import Link from "next/link";

export default function InternalLinks() {
  return (
    <section className="py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-6">
          Waste Removal Services Across the Midlands
        </h2>

        <p className="text-gray-400 mb-10 max-w-3xl">
          Professional waste removal, rubbish clearance, and house clearance services
          across Leicester, Coventry, Birmingham and surrounding areas.
        </p>

        <div className="grid gap-10 md:grid-cols-3">

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Core Services
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/house-clearance">House Clearance Leicester</Link></li>
              <li><Link href="/services/sofa-removal">Sofa Removal Services</Link></li>
              <li><Link href="/services/garden-waste">Garden Waste Removal</Link></li>
              <li><Link href="/services/office-clearance">Office Clearance</Link></li>
              <li><Link href="/services/builders-waste">Builders Waste Removal</Link></li>
              <li><Link href="/services/mattress-removal">Mattress Removal</Link></li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Local Areas We Cover
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li><Link href="/leicester">Waste Removal Leicester</Link></li>
              <li><Link href="/coventry">Waste Removal Coventry</Link></li>
              <li><Link href="/birmingham">Waste Removal Birmingham</Link></li>
            </ul>
          </div>

          {/* QUICK NAV */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Navigation
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/services">All Services</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            Maxx Waste Removals provides licensed, insured, and eco-friendly waste disposal
            services across the Midlands including Leicester, Coventry, and Birmingham.
          </p>
        </div>

      </div>
    </section>
  );
}