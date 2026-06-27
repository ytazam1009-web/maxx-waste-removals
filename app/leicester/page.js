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
    "unwanted items removal Leicester"
  ],

  openGraph: {
    title: "Waste Removal & House Clearance Leicester | Maxx Waste Removals",
    description:
      "Fast, affordable and licensed waste removal in Leicester including house clearance, sofa removal and garden waste clearance. No upfront payment.",
    url: "https://maxxwasteremovals.co.uk/leicester",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "/leicester",
  },
};

export default function LeicesterPage( ) {
  return (
    <main className="min-h-screen">
      {/* Passing the local Leicester number to all components */}
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
    </main>
  );
}
