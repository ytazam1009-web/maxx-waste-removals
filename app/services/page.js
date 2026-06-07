export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* H1 (ONLY ONE) */}
      <h1 className="text-4xl font-bold text-white">
        Waste Removal Services Across the Midlands
      </h1>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        Professional waste removal, house clearance, garden waste, office clearance,
        builders waste, and furniture disposal services across Leicester, Coventry,
        Birmingham and surrounding areas.
      </p>

      {/* H2 */}
      <h2 className="mt-12 text-2xl font-semibold text-white">
        Our Core Services
      </h2>

      <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
        <li>House Clearance – full property clearance services</li>
        <li>Sofa Removal – fast furniture and sofa disposal</li>
        <li>Garden Waste Removal – green waste and garden cleanup</li>
        <li>Office Clearance – commercial waste collection</li>
        <li>Builders Waste – construction and rubble removal</li>
        <li>Appliance Removal – fridge, washer, and appliance disposal</li>
      </ul>

      {/* H2 */}
      <h2 className="mt-12 text-2xl font-semibold text-white">
        Areas We Cover
      </h2>

      <p className="mt-6 text-gray-300">
        Leicester, Coventry, Birmingham, and surrounding Midlands areas.
      </p>

    </main>
  );
}