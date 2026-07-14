export default function WebPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.maxxwasteremovals.co.uk/#webpage",
    url: "https://www.maxxwasteremovals.co.uk",
    name: "Maxx Waste Removals | Licensed Waste Removal & House Clearance Leicester, Coventry & Birmingham",
    description:
      "Professional same-day rubbish clearance, house clearance, garden clearance and office clearance across Coventry, Leicester, Birmingham and the Midlands.",
    inLanguage: "en-GB",
    isPartOf: {
      "@id": "https://www.maxxwasteremovals.co.uk/#website"
    },
    about: {
      "@id": "https://www.maxxwasteremovals.co.uk/#business"
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "url": "https://www.maxxwasteremovals.co.uk/og-image.jpg"
    }
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