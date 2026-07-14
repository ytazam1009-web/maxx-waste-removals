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
    "Waste Removal & House Clearance Coventry | Same-Day Rubbish Collection | Maxx Waste Removals",

  description:
    "Expert waste removal and house clearance in Coventry. Same-day rubbish collection, garden waste disposal & office clearance. Licensed waste carrier, no upfront payment. Cheaper than a skip hire!",

  keywords: [
    "waste removal Coventry",
    "rubbish clearance Coventry",
    "house clearance Coventry",
    "garden waste removal Coventry",
    "sofa removal Coventry",
    "mattress removal Coventry",
    "office clearance Coventry",
    "junk removal Coventry",
    "same day waste removal Coventry",
    "licensed waste carrier Coventry",
    "affordable rubbish clearance Coventry",
    "waste collection Coventry",
    "waste disposal Coventry",
    "man and van clearance Coventry",
    "professional waste removal Coventry",
    "responsible disposal Coventry",
    "bereavement clearance Coventry",
    "site clearance Coventry",
    "unwanted items removal Coventry",
  ],

  openGraph: {
    title: "Waste Removal & House Clearance Coventry | Maxx Waste Removals",
    description:
      "Fast and affordable waste removal in Coventry including house clearance, sofa removal, and garden waste clearance services. Same-day collection available.",
    url: "https://www.maxxwasteremovals.co.uk/coventry",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/coventry",
  },
};

export default function CoventryPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.maxxwasteremovals.co.uk/coventry#service",
      "name": "Waste Removal in Coventry",
      "serviceType": "Waste Removal",
      "provider": {
        "@id": "https://www.maxxwasteremovals.co.uk/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coventry"
      },
      "url": "https://www.maxxwasteremovals.co.uk/coventry",
      "description": "Professional waste removal, rubbish clearance, house clearance, garden waste removal and office clearance in Coventry."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.maxxwasteremovals.co.uk/coventry#webpage",
      "url": "https://www.maxxwasteremovals.co.uk/coventry",
      "name": "Waste Removal Coventry",
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
          "name": "Coventry",
          "item": "https://www.maxxwasteremovals.co.uk/coventry"
        }
      ]
    }
  ];
  return (
    <main className="min-h-screen">
      {/* Passing the local Coventry number to all components */}
      <>
  <Script
    id="coventry-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />

  <Navbar phoneNumber="02475102901" />

      <HeroSection
        city="Coventry"
        phoneNumber="02475102901"
        heroImage="/images/coventry.webp"
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

      <CTASection phoneNumber="02475102901" />

      <InternalLinks />

      <FAQSchema city="Coventry" />

      <LocalBusinessSchema />

      <Footer />
</>
    </main>
  );
}