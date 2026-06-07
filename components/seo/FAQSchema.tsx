export default function FAQSchema({ city = "Midlands" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: `What waste removal services do you offer in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We provide professional waste removal in ${city}, including house clearance, sofa removal, garden waste clearance, office clearance, mattress disposal, and builders waste removal.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you offer same-day waste removal in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we offer same-day waste removal and rubbish clearance services in ${city} depending on availability.`,
        },
      },
      {
        "@type": "Question",
        name: `Are you a licensed waste carrier in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Maxx Waste Removals is fully licensed and insured to carry and dispose of waste legally in ${city} and surrounding areas.`,
        },
      },
      {
        "@type": "Question",
        name: `What types of waste do you collect in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We collect household waste, furniture, garden waste, electrical appliances, office waste, and construction debris in ${city}.`,
        },
      },
    ],
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