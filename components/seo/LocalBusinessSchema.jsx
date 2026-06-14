export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WasteManagementBusiness",
    "name": "Maxx Waste Removals",
    "image": "https://maxxwasteremovals.co.uk/logos/logo.png",
    "@id": "https://maxxwasteremovals.co.uk",
    "url": "https://maxxwasteremovals.co.uk",
    "telephone": "02475102901",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Midlands Area",
      "addressLocality": "Coventry",
      "addressRegion": "West Midlands",
      "postalCode": "CV1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4068,
      "longitude": -1.5197
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Coventry",
        "telephone": "02475102901"
      },
      {
        "@type": "City",
        "name": "Leicester",
        "telephone": "01163600853"
      },
      {
        "@type": "City",
        "name": "Birmingham",
        "telephone": "01218126425"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/maxxwasteremovals",
      "https://www.instagram.com/maxxwasteremovals"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema ) }}
    />
  );
}
