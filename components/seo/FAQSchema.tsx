export default function FAQSchema({
  city = "Midlands",
  pagePath = "",
}) {
  const baseUrl = "https://www.maxxwasteremovals.co.uk";
  const pageUrl = `${baseUrl}${pagePath}`;
  const faqId = `${pageUrl}#faq`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": faqId,

    mainEntity: [
      {
        "@type": "Question",
        name: `What waste removal services do you offer in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We provide professional waste removal in ${city}, including house clearance, sofa removal, garden waste clearance, office clearance, mattress disposal, furniture removal and builders waste removal.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you offer same-day waste removal in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we offer same-day waste removal and rubbish clearance services in ${city}, depending on availability and location.`,
        },
      },
      {
        "@type": "Question",
        name: `Are you a licensed waste carrier in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Maxx Waste Removals is registered as a waste carrier and provides waste collection and transportation services in ${city} and surrounding areas.`,
        },
      },
      {
        "@type": "Question",
        name: `What types of waste do you collect in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We collect many types of household and commercial waste, including furniture, garden waste, electrical appliances, office waste, bulky items, builders waste and general rubbish, subject to applicable waste restrictions.`,
        },
      },
      {
        "@type": "Question",
        name: `Do I need a skip for waste removal in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Not necessarily. Our waste removal service can be a convenient alternative to hiring a skip because our team loads the waste and removes it from your property. The best option depends on the type and volume of waste.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I get a quote for waste removal in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Contact Maxx Waste Removals by phone or through our website to discuss your waste. You can provide details or photos of the items where appropriate, and we can provide a quote based on the waste and collection requirements.`,
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