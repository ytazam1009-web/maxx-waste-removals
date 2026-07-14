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

export const metadata = {
  title:
    "Waste Removal & House Clearance Leicester | Same-Day Rubbish Collection | Maxx Waste Removals",

  description:
    "Expert waste removal and house clearance in Leicester. Same-day rubbish collection, garden waste disposal & office clearance. Licensed waste carrier, no upfront payment. Cheaper than skip hire!",

  keywords: [
    "waste removal Leicester",
    "rubbish clearance Leicester",
    "house clearance Leicester",
    "garden waste removal Leicester",
    "sofa removal Leicester",
    "mattress removal Leicester",
    "office clearance Leicester",
    "junk removal Leicester",
    "same day waste removal Leicester",
    "licensed waste carrier Leicester",
    "affordable rubbish clearance Leicester",
    "waste collection Leicester",
    "waste disposal Leicester",
    "man and van clearance Leicester",
    "professional waste removal Leicester",
    "responsible disposal Leicester",
    "bereavement clearance Leicester",
    "site clearance Leicester",
    "unwanted items removal Leicester",
  ],

  openGraph: {
    title: "Waste Removal & House Clearance Leicester | Maxx Waste Removals",
    description:
      "Fast, affordable and licensed waste removal in Leicester including house clearance, sofa removal and garden waste clearance. No upfront payment.",
    url: "https://www.maxxwasteremovals.co.uk/leicester",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/leicester",
  },
};

export default function LeicesterPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.maxxwasteremovals.co.uk/leicester#service",
      "name": "Waste Removal in Leicester",
      "serviceType": "Waste Removal",
      "provider": {
        "@id": "https://www.maxxwasteremovals.co.uk/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Leicester"
      },
      "url": "https://www.maxxwasteremovals.co.uk/leicester",
      "description": "Professional waste removal, rubbish clearance, house clearance, garden waste removal and office clearance in Leicester."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.maxxwasteremovals.co.uk/leicester#webpage",
      "url": "https://www.maxxwasteremovals.co.uk/leicester",
      "name": "Waste Removal Leicester",
      "isPartOf": {
        "@id": "https://www.maxxwasteremovals.co.uk/#website"
      },
      "about": {
        "@id": "https://www.maxxwasteremovals.co.uk/#business"
      },
      "inLanguage": "en-GB"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.maxxwasteremovals.co.uk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Leicester",
          "item": "https://www.maxxwasteremovals.co.uk/leicester"
        }
      ]
    }
  ];
  return (
    <main className="min-h-screen">
      {/* Passing the local Leicester number to all components */}
      <>
  <Script
    id="leicester-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />

  <Navbar phoneNumber="01163600853" />

      <HeroSection
        city="Leicester"
        phoneNumber="01163600853"
        heroImage="/images/leicester-waste-removal.webp"
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

      <CTASection phoneNumber="01163600853" />

      <InternalLinks />

      <FAQSchema city="Leicester" />

      <LocalBusinessSchema />

      <Footer />
</>
    </main>
  );
}