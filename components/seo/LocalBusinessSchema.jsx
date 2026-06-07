export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Maxx Waste Removals",
    url: "https://maxxwasteremovals.co.uk",
    image: "https://maxxwasteremovals.co.uk/logo.png",
    description:
      "Professional waste removal, rubbish clearance, and house clearance services across Leicester, Coventry, Birmingham, and the Midlands.",
    
    telephone: "+44 7348 481092",

    areaServed: [
      {
        "@type": "City",
        name: "Leicester",
      },
      {
        "@type": "City",
        name: "Coventry",
      },
      {
        "@type": "City",
        name: "Birmingham",
      },
      {
        "@type": "AdministrativeArea",
        name: "Midlands",
      },
    ],

    serviceType: [
      "Waste Removal",
      "Rubbish Clearance",
      "House Clearance",
      "Garden Waste Removal",
      "Office Clearance",
      "Furniture Disposal",
      "Same Day Waste Collection",
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },

    priceRange: "££",
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