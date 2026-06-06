export default function FAQSchema({ city = "the Midlands" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `We provide waste removal services across ${city} and surrounding areas.`,
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day waste collection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, same-day rubbish removal is available depending on availability.",
        },
      },
      {
        "@type": "Question",
        name: "What types of waste do you remove?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We remove household waste, garden waste, builders waste, furniture, mattresses, office waste and more.",
        },
      },
      {
        "@type": "Question",
        name: "Are you a licensed waste carrier?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MAXX Waste Removals operates as a fully licensed waste carrier.",
        },
      },
      {
        "@type": "Question",
        name: "Do you recycle waste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we recycle as much waste as possible and dispose of waste responsibly.",
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