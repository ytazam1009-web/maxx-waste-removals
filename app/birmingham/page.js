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
import Script from "next/script";

const baseUrl = "https://www.maxxwasteremovals.co.uk";
const pageUrl = `${baseUrl}/birmingham`;

export const metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Waste Removal & House Clearance Birmingham | Same-Day Rubbish Collection | Maxx Waste Removals",

  description:
    "Professional waste removal and house clearance in Birmingham. Same-day rubbish collection, garden waste disposal, furniture removal and office clearance. Licensed waste carrier with no upfront payment.",

  keywords: [
    "waste removal Birmingham",
    "rubbish clearance Birmingham",
    "house clearance Birmingham",
    "garden waste removal Birmingham",
    "sofa removal Birmingham",
    "mattress removal Birmingham",
    "office clearance Birmingham",
    "junk removal Birmingham",
    "same day waste removal Birmingham",
    "licensed waste carrier Birmingham",
    "affordable rubbish clearance Birmingham",
    "waste collection Birmingham",
    "waste disposal Birmingham",
    "man and van clearance Birmingham",
    "professional waste removal Birmingham",
    "responsible disposal Birmingham",
    "bereavement clearance Birmingham",
    "site clearance Birmingham",
    "unwanted items removal Birmingham",
    "furniture removal Birmingham",
    "same day rubbish removal Birmingham",
    "waste clearance Birmingham",
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
      "Waste Removal & House Clearance Birmingham | Maxx Waste Removals",

    description:
      "Affordable same-day waste removal in Birmingham including house clearance, furniture removal, garden waste clearance and office clearance services.",

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
      "Waste Removal & House Clearance Birmingham | Maxx Waste Removals",

    description:
      "Professional same-day waste removal, rubbish clearance and house clearance services in Birmingham.",

    images: ["/og-image.jpg"],
  },
};

export default function BirminghamPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name: "Waste Removal in Birmingham",

      serviceType: [
        "Waste Removal",
        "Rubbish Clearance",
        "House Clearance",
        "Garden Waste Removal",
        "Furniture Removal",
        "Office Clearance",
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
        "Professional waste removal, rubbish clearance, house clearance, garden waste removal, furniture removal and office clearance services in Birmingham.",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,

      url: pageUrl,

      name:
        "Waste Removal & House Clearance Birmingham | Maxx Waste Removals",

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
        "Professional waste removal, rubbish clearance and house clearance services in Birmingham from Maxx Waste Removals.",
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

      <section id="services">
        <ServicesGrid />
      </section>

      <section id="areas">
        <AreasSection />
      </section>

      <WhyChooseUs />

      <section id="reviews">
        <Testimonials />
      </section>

      <section id="contact">
        <QuoteForm />
      </section>

      <CTASection phoneNumber="01218384430" />

      <InternalLinks />

      <FAQSchema city="Birmingham" />

      <LocalBusinessSchema />

      <Footer />
    </main>
  );
}