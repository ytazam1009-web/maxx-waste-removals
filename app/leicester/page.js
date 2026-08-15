import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AreasSection from "@/components/home/AreasSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import QuoteForm from "@/components/home/QuoteForm";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import InternalLinks from "@/components/seo/InternalLinks";
import FAQSchema from "@/components/seo/FAQSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import WasteCarrierTrust from "@/components/seo/WasteCarrierTrust";
import Script from "next/script";


const baseUrl = "https://www.maxxwasteremovals.co.uk";
const pageUrl = `${baseUrl}/leicester`;

const leicesterFAQs = [
  {
    question: "Do you provide same-day waste removal in Leicester?",
    answer:
      "Yes. Maxx Waste Removals provides same-day waste removal and rubbish clearance in Leicester, subject to availability and location.",
  },
  {
    question: "What waste removal services do you offer in Leicester?",
    answer:
      "We provide waste removal, rubbish clearance, house clearance, garden waste removal, furniture removal, office clearance and commercial waste removal throughout Leicester.",
  },
  {
    question: "Do you provide house clearance in Leicester?",
    answer:
      "Yes. We provide house clearance in Leicester for homeowners, landlords, tenants, property managers and other customers who need unwanted furniture, household items and rubbish removed.",
  },
  {
    question: "Do you remove garden waste in Leicester?",
    answer:
      "Yes. We collect garden waste and unwanted outdoor items from properties across Leicester, subject to the type and volume of waste.",
  },
  {
    question: "Do you remove sofas and furniture in Leicester?",
    answer:
      "Yes. We can remove sofas, mattresses, beds, wardrobes, tables and other bulky furniture and unwanted household items.",
  },
  {
    question: "Do you provide commercial waste removal in Leicester?",
    answer:
      "Yes. Maxx Waste Removals provides waste removal and clearance services for businesses, offices, landlords and commercial properties in Leicester.",
  },
  {
    question: "Which areas of Leicester do you cover?",
    answer:
      "We cover Leicester and surrounding neighbourhoods, including Leicester City Centre, Clarendon Park, Stoneygate, Knighton, Evington, Highfields, Belgrave, Spinney Hills, Braunstone, Aylestone, Eyres Monsell, Humberstone, Thurnby and West End.",
  },
  {
    question: "Are you a licensed waste carrier in Leicester?",
    answer:
      "Yes. Maxx Waste Removals is a registered waste carrier and provides legal waste collection and transportation services in Leicester and surrounding areas.",
  },
];

export const metadata = {
  title:
    "Waste Removal Leicester | Same-Day Rubbish & House Clearance | Maxx Waste Removals",

  description:
    "Professional waste removal in Leicester including same-day rubbish clearance, house clearance, garden waste, furniture and office clearance. Licensed waste carrier with no upfront payment. Cheaper than skip hire.",

  keywords: [
    "waste removal Leicester",
    "rubbish removal Leicester",
    "rubbish clearance Leicester",
    "house clearance Leicester",
    "garden waste removal Leicester",
    "furniture removal Leicester",
    "sofa removal Leicester",
    "mattress removal Leicester",
    "office clearance Leicester",
    "commercial waste removal Leicester",
    "junk removal Leicester",
    "same day waste removal Leicester",
    "licensed waste carrier Leicester",
    "affordable rubbish clearance Leicester",
    "waste collection Leicester",
    "waste disposal Leicester",
    "man and van clearance Leicester",
    "professional waste removal Leicester",
    "responsible disposal Leicester",
    "site clearance Leicester",
    "unwanted items removal Leicester",
  ],

  openGraph: {
    title:
      "Waste Removal Leicester | Same-Day Rubbish & House Clearance | Maxx Waste Removals",

    description:
      "Fast, affordable and licensed waste removal in Leicester including house clearance, sofa removal, garden waste clearance and office clearance.",

    url: pageUrl,
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxx Waste Removals Leicester waste removal services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Waste Removal Leicester | Same-Day Rubbish & House Clearance",

    description:
      "Professional waste removal, rubbish clearance and house clearance services across Leicester.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function LeicesterPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name: "Waste Removal in Leicester",

      serviceType: [
        "Waste Removal",
        "Rubbish Removal",
        "Rubbish Clearance",
        "House Clearance",
        "Garden Waste Removal",
        "Furniture Removal",
        "Office Clearance",
        "Commercial Waste Removal",
      ],

      provider: {
        "@id": `${baseUrl}/#business`,
      },

      areaServed: {
        "@type": "City",
        name: "Leicester",
      },

      url: pageUrl,

      description:
        "Professional waste removal, rubbish clearance, house clearance, garden waste removal, furniture removal, office clearance and commercial waste removal in Leicester.",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,

      url: pageUrl,

      name:
        "Waste Removal Leicester | Same-Day Rubbish & House Clearance | Maxx Waste Removals",

      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },

      about: {
        "@id": `${baseUrl}/#business`,
      },

      mainEntity: {
        "@id": `${pageUrl}#service`,
      },

      inLanguage: "en-GB",

      description:
        "Professional waste removal, rubbish clearance and house clearance services in Leicester from Maxx Waste Removals.",
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Leicester",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Script
        id="leicester-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Navbar phoneNumber="01165044009" />

      <HeroSection
        city="Leicester"
        phoneNumber="01165044009"
        heroImage="/images/leicester-waste-removal.webp"
      />

      <TrustBar />

      {/* Leicester Introduction */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Waste Removal in Leicester
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Maxx Waste Removals provides professional waste removal and
              rubbish clearance across Leicester. Whether you need unwanted
              household items collected, a property cleared, garden waste
              removed or commercial rubbish taken away, our team can help.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We provide convenient waste collection for homeowners, landlords,
              tenants, businesses and property managers throughout Leicester.
              Same-day collection is available where possible, helping you
              clear unwanted waste quickly and conveniently.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-4">
        <ServicesGrid />
      </section>

      {/* Leicester Services */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Waste Removal Services Across Leicester
            </h2>

            <p className="mt-5 text-center leading-7 text-gray-600">
              From household rubbish and bulky furniture to garden waste,
              property clearances and commercial waste, we provide practical
              collection solutions across Leicester.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Rubbish Removal Leicester
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We collect unwanted rubbish from homes, gardens, garages,
                  offices and other properties across Leicester.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  House Clearance Leicester
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Our house clearance service helps remove unwanted furniture,
                  household items and general rubbish from residential
                  properties.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Garden Waste Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Clearing a garden, shed or outdoor space? We can collect
                  garden waste and unwanted outdoor items across Leicester.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Furniture & Bulky Item Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can remove sofas, mattresses, beds, wardrobes, tables and
                  other unwanted bulky furniture.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Commercial Waste Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We help Leicester businesses, landlords and commercial
                  property managers with waste removal and clearance.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Office Clearance Leicester
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can clear unwanted office furniture, equipment and general
                  waste when businesses move, renovate or close premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Waste Removal */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Same-Day Waste Removal in Leicester
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Need rubbish removed quickly? Maxx Waste Removals offers same-day
              waste collection in Leicester where availability allows. Contact
              us with details of your waste and collection requirements and
              we'll help arrange a convenient service.
            </p>

            <div className="mt-8">
              <a
                href="tel:01165044009"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold shadow-sm transition hover:shadow-md"
              >
                Call 0116 504 4009
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Component */}
      <section id="areas">
        <AreasSection />
      </section>

      {/* Leicester Areas We Cover */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Areas We Cover in Leicester
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our Leicester waste removal service covers many neighbourhoods
                across the city and surrounding areas.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
              {[
                "Leicester City Centre",
                "Clarendon Park",
                "Stoneygate",
                "Knighton",
                "Evington",
                "Highfields",
                "Belgrave",
                "Spinney Hills",
                "Braunstone",
                "Aylestone",
                "Eyres Monsell",
                "Humberstone",
                "Thurnby",
                "West End",
                "Wigston",
                "Oadby",
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-lg border px-3 py-3 text-sm font-medium transition hover:shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center leading-7 text-gray-600">
              If your Leicester area isn't listed above, contact us anyway.
              We cover many surrounding locations and can confirm whether we
              can collect from your postcode.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Trust / Licensing */}
<WasteCarrierTrust city="Leicester" />

      {/* Reviews */}
      <section id="reviews">
        <Testimonials />
      </section>

      {/* Contact / Quote */}
      <section id="contact">
        <QuoteForm />
      </section>

      {/* CTA */}
      <CTASection phoneNumber="01165044009" />

      {/* Internal City Links */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold">
              More Waste Removal Services
            </h2>

            <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3">
              <a
                href="/birmingham"
                className="rounded-lg border p-4 font-medium transition hover:shadow-md"
              >
                Waste Removal Birmingham
              </a>

              <a
                href="/coventry"
                className="rounded-lg border p-4 font-medium transition hover:shadow-md"
              >
                Waste Removal Coventry
              </a>

              <a
                href="/contact"
                className="rounded-lg border p-4 font-medium transition hover:shadow-md"
              >
                Contact Maxx Waste Removals
              </a>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks />

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Leicester Waste Removal FAQs
          </h2>

          <div className="mt-10 space-y-6">
            {leicesterFAQs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border p-6"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSchema
        city="Leicester"
        pagePath="/leicester"
      />

      <LocalBusinessSchema />

      <Footer />
    </main>
  );
}