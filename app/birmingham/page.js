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
    "Waste Removal & House Clearance Birmingham | Same-Day Rubbish Collection | Maxx Waste Removals",

  description:
    "Professional waste removal and house clearance in Birmingham. Same-day rubbish collection, garden waste disposal & office clearance. Licensed waste carrier, no upfront payment. Cheaper than skip hire!",

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
  ],

  openGraph: {
    title: "Waste Removal & House Clearance Birmingham | Maxx Waste Removals",
    description:
      "Affordable same-day waste removal in Birmingham including house clearance, furniture removal and garden waste clearance services. No upfront payment.",
    url: "https://www.maxxwasteremovals.co.uk/birmingham",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/birmingham",
  },
};

export default function BirminghamPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.maxxwasteremovals.co.uk/birmingham#service",
      "name": "Waste Removal in Birmingham",
      "serviceType": "Waste Removal",
      "provider": {
        "@id": "https://www.maxxwasteremovals.co.uk/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Birmingham"
      },
      "url": "https://www.maxxwasteremovals.co.uk/birmingham",
      "description": "Professional waste removal, rubbish clearance, house clearance, garden waste removal and office clearance in Birmingham."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.maxxwasteremovals.co.uk/birmingham#webpage",
      "url": "https://www.maxxwasteremovals.co.uk/birmingham",
      "name": "Waste Removal Birmingham",
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
          "name": "Birmingham",
          "item": "https://www.maxxwasteremovals.co.uk/birmingham"
        }
      ]
    }
  ];
  return (
    <main className="min-h-screen">
      {/* Passing the local Birmingham number to all components */}
      <>
  <Script
    id="birmingham-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />

  <Navbar phoneNumber="01218126425" />

      <HeroSection
        city="Birmingham"
        phoneNumber="01218126425"
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

      <CTASection phoneNumber="01218126425" />

      <InternalLinks />

      <FAQSchema city="Birmingham" />

      <LocalBusinessSchema />

      <Footer />
</>
    </main>
  );
}