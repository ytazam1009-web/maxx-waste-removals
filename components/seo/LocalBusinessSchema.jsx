export default function LocalBusinessSchema() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WasteManagementBusiness",
      "@id": "https://maxxwasteremovals.co.uk/#business",
      "name": "Maxx Waste Removals",
      "image": "https://maxxwasteremovals.co.uk/logos/logo.webp",
      "logo": "https://maxxwasteremovals.co.uk/logos/logo.webp",
      "url": "https://maxxwasteremovals.co.uk",
      "telephone": "+44 7718 090183",
      "email": "info@maxxwasteremovals.co.uk",
      "priceRange": "££",
      "description":
        "Maxx Waste Removals provides professional rubbish removal, house clearance, garden clearance, office clearance, furniture disposal and same-day waste removal services across Coventry, Leicester, Birmingham and the Midlands.",

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
          "telephone": "02475522290"
        },
        {
          "@type": "City",
          "name": "Leicester",
          "telephone": "01165044009"
        },
        {
          "@type": "City",
          "name": "Birmingham",
          "telephone": "01218384430"
        }
      ],

      "sameAs": [
        "https://www.facebook.com/maxxwasteremovals/",
        "https://www.instagram.com/maxxwasteremovals/",
        "https://x.com/Maxxwaster5p",
        "https://www.youtube.com/channel/UCzgRl1KOl6v0JsDvKLNphqQ",
        "https://www.tiktok.com/@maxx.waste.remova"
      ],

      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44 7718 090183",
        "contactType": "Customer Service",
        "availableLanguage": [
          "English"
        ]
      },

      "knowsAbout": [
        "Waste Removal",
        "Rubbish Removal",
        "House Clearance",
        "Garden Clearance",
        "Office Clearance",
        "Furniture Removal",
        "Garage Clearance",
        "Shed Removal",
        "Junk Removal",
        "Commercial Waste Removal",
        "Domestic Waste Removal",
        "Waste Collection"
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Waste Removal Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "House Clearance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garden Clearance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Clearance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rubbish Removal"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Furniture Disposal"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Same Day Waste Removal"
            }
          }
        ]
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://maxxwasteremovals.co.uk/#organization",
      "name": "Maxx Waste Removals",
      "url": "https://maxxwasteremovals.co.uk",
      "logo": "https://maxxwasteremovals.co.uk/logos/logo.webp",
      "email": "info@maxxwasteremovals.co.uk",
      "telephone": "+44 7718 090183",
      "sameAs": [
        "https://www.facebook.com/maxxwasteremovals/",
        "https://www.instagram.com/maxxwasteremovals/",
        "https://x.com/Maxxwaster5p",
        "https://www.youtube.com/channel/UCzgRl1KOl6v0JsDvKLNphqQ",
        "https://www.tiktok.com/@maxx.waste.remova"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://maxxwasteremovals.co.uk/#website",
      "url": "https://maxxwasteremovals.co.uk",
      "name": "Maxx Waste Removals",
      "publisher": {
        "@id": "https://maxxwasteremovals.co.uk/#organization"
      },
      "inLanguage": "en-GB"
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas),
      }}
    />
  );
}