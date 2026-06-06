export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Maxx Waste Removals",
    url: "https://maxxwasteremovals.co.uk",
    image: "https://maxxwasteremovals.co.uk/logo.png",
    description:
      "Professional waste removal services across Leicester, Coventry, Birmingham and the Midlands.",
    areaServed: ["Leicester", "Coventry", "Birmingham", "Midlands"],
    serviceType: [
      "Waste Removal",
      "Rubbish Clearance",
      "House Clearance",
      "Garden Waste Removal",
      "Office Clearance",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}