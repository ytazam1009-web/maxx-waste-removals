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
const pageUrl = `${baseUrl}/birmingham`;

export const metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Waste Removal Birmingham | Same-Day Rubbish & House Clearance | Maxx Waste Removals",

  description:
    "Need waste removal in Birmingham? Maxx Waste Removals provides same-day rubbish clearance, house clearance, garden waste, furniture and commercial waste removal across Birmingham.",

  keywords: [
    "waste removal Birmingham",
    "rubbish removal Birmingham",
    "rubbish clearance Birmingham",
    "house clearance Birmingham",
    "garden waste removal Birmingham",
    "furniture removal Birmingham",
    "sofa removal Birmingham",
    "mattress removal Birmingham",
    "office clearance Birmingham",
    "commercial waste removal Birmingham",
    "junk removal Birmingham",
    "same day waste removal Birmingham",
    "waste collection Birmingham",
    "waste disposal Birmingham",
    "licensed waste carrier Birmingham",
  ],

  authors: [
    {
      name: "Maxx Waste Removals",
    },
  ],

  creator: "Maxx Waste Removals",
  publisher: "Maxx Waste Removals",

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

  openGraph: {
    title:
      "Waste Removal Birmingham | Same-Day Rubbish & House Clearance",

    description:
      "Professional waste removal, rubbish clearance, house clearance, garden waste and furniture removal across Birmingham.",

    url: pageUrl,

    siteName: "Maxx Waste Removals",

    type: "website",

    locale: "en_GB",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxx Waste Removals Birmingham waste removal services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Waste Removal Birmingham | Maxx Waste Removals",

    description:
      "Same-day waste removal, rubbish clearance and house clearance services across Birmingham.",

    images: ["/og-image.jpg"],
  },
};

const birminghamFAQs = [
  {
    question: "Do you provide same-day waste removal in Birmingham?",
    answer:
      "Yes. Maxx Waste Removals provides waste and rubbish removal services across Birmingham, with same-day collection available subject to availability and location.",
  },
  {
    question: "What types of waste do you remove in Birmingham?",
    answer:
      "We can help with many types of household and commercial waste, including furniture, garden waste, unwanted items, rubbish, office clearance and house-clearance loads. Waste is handled and disposed of responsibly.",
  },
  {
    question: "Do you provide house clearance in Birmingham?",
    answer:
      "Yes. We provide house clearance services throughout Birmingham for homes, landlords, tenants, property managers and other customers who need unwanted furniture, rubbish and household items removed.",
  },
  {
    question: "Do you remove garden waste in Birmingham?",
    answer:
      "Yes. We can collect garden waste and other unwanted outdoor items from properties across Birmingham, subject to the type and volume of waste.",
  },
  {
    question: "Do you remove furniture in Birmingham?",
    answer:
      "Yes. We can remove unwanted furniture such as sofas, mattresses, beds, wardrobes, tables and other bulky household items as part of our waste removal service.",
  },
  {
    question: "Do you provide commercial waste removal in Birmingham?",
    answer:
      "Yes. Maxx Waste Removals can assist businesses, offices, landlords and commercial properties with waste removal and clearance requirements in Birmingham.",
  },
  {
    question: "Which areas of Birmingham do you cover?",
    answer:
      "We cover Birmingham and surrounding neighbourhoods, including areas such as Edgbaston, Harborne, Selly Oak, Moseley, Kings Heath, Bournville, Erdington, Sutton Coldfield, Handsworth, Great Barr, Yardley and Sheldon.",
  },
  {
    question: "Are you a licensed waste carrier?",
    answer:
      "Maxx Waste Removals is registered as a waste carrier, allowing us to legally transport waste for collection and disposal in accordance with applicable requirements.",
  },
];

export default function BirminghamPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name: "Waste Removal Birmingham",

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
        name: "Birmingham",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "West Midlands",
        },
      },

      url: pageUrl,

      description:
        "Professional waste removal, rubbish clearance, house clearance, garden waste removal, furniture removal and commercial waste removal services across Birmingham.",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,

      url: pageUrl,

      name:
        "Waste Removal Birmingham | Same-Day Rubbish & House Clearance | Maxx Waste Removals",

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
        "Birmingham waste removal, rubbish clearance, house clearance, garden waste and furniture removal services from Maxx Waste Removals.",
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
          name: "Birmingham",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Script
        id="birmingham-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Navbar phoneNumber="01218384430" />

      <HeroSection
        city="Birmingham"
        phoneNumber="01218384430"
        heroImage="/images/birmingham.webp"
      />

      <TrustBar />

      {/* Birmingham Introduction */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#f6be00] md:text-4xl">
              Waste Removal in Birmingham
            </h1>

            <p className="mt-5 text-lg leading-8  text-white">
              Maxx Waste Removals provides professional waste removal and
              rubbish clearance across Birmingham. Whether you need a few
              unwanted items collected, a house cleared, garden waste removed
              or a larger commercial clearance completed, our team can help.
            </p>

            <p className="mt-4 leading-7  text-white">
              We serve customers throughout Birmingham and surrounding areas,
              providing convenient waste collection for homeowners, landlords,
              tenants, businesses and property managers. Where available, we
              can arrange same-day collection so you can clear unwanted waste
              without unnecessary delays.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-4">
        <ServicesGrid />
      </section>

      {/* Birmingham Services */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl">
              Waste Removal Services Across Birmingham
            </h2>

            <p className="mt-5 text-center leading-7 text-gray-600">
              From household rubbish and bulky furniture to garden waste,
              property clearances and commercial waste, we provide practical
              collection solutions for different types of waste.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Rubbish Removal Birmingham
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Have unwanted rubbish taking up space at home or work? We
                  provide rubbish removal and collection across Birmingham,
                  helping customers clear unwanted items quickly and
                  conveniently.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  House Clearance Birmingham
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can help clear unwanted household contents, furniture and
                  general rubbish from houses, flats and other residential
                  properties across Birmingham.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Garden Waste Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Clearing a garden, shed, garage or outdoor area? We can
                  collect garden waste and unwanted outdoor items, helping you
                  reclaim useful space around your property.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Furniture & Bulky Item Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can collect unwanted sofas, mattresses, beds, wardrobes,
                  tables and other bulky household items as part of our waste
                  removal service.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Commercial Waste Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Businesses, offices, landlords and commercial property
                  managers can contact us about waste removal and clearance
                  requirements in Birmingham.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Office Clearance Birmingham
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can assist with clearing unwanted office furniture,
                  equipment and general waste when you're moving, renovating
                  or closing a commercial property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same Day */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Same-Day Waste Removal in Birmingham
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Need unwanted waste gone quickly? Maxx Waste Removals offers
              same-day waste collection in Birmingham where availability
              allows. Whether you've finished a house clearance, removed old
              furniture or simply need rubbish cleared from your property,
              contact us to discuss your collection.
            </p>

            <div className="mt-8">
              <a
                href="tel:01218384430"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold shadow-sm transition hover:shadow-md"
              >
                Call 0121 838 4430
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold shadow-sm transition hover:shadow-md"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas">
        <AreasSection />
      </section>

      {/* Birmingham Areas Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl">
              Areas We Cover in Birmingham
            </h2>

            <p className="mt-5 text-center leading-7 text-gray-600">
              Our Birmingham waste removal service covers a wide range of
              neighbourhoods and surrounding areas.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
              {[
                "Birmingham City Centre",
                "Edgbaston",
                "Harborne",
                "Selly Oak",
                "Moseley",
                "Kings Heath",
                "Bournville",
                "Erdington",
                "Sutton Coldfield",
                "Handsworth",
                "Great Barr",
                "Yardley",
                "Sheldon",
                "Acocks Green",
                "Quinton",
                "Selly Park",
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
              If your Birmingham area isn't listed above, contact us anyway.
              We cover many surrounding locations and can confirm whether we
              can collect from your postcode.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Trust / Licensing */}
<WasteCarrierTrust city="Birmingham" />

      {/* Quote */}
      <section id="contact">
        <QuoteForm />
      </section>

      <CTASection phoneNumber="01218384430" />

      

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Birmingham Waste Removal FAQs
          </h2>

          <div className="mt-10 space-y-6">
            {birminghamFAQs.map((faq) => (
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
        city="Birmingham"
        pagePath="/birmingham"
      />

      <LocalBusinessSchema />

      <Footer />
    </main>
  );
}