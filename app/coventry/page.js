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
    "Waste Removal Coventry | House Clearance, Rubbish Removal & Furniture Disposal | Maxx Waste Removals",

  description:
    "Reliable waste removal services in Coventry including house clearance, sofa removal, garden waste clearance, office clearance, mattress removal and same-day rubbish collection across Coventry and nearby areas.",

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
  ],

  openGraph: {
    title: "Waste Removal Coventry | Maxx Waste Removals",
    description:
      "Fast and affordable waste removal in Coventry including house clearance, sofa removal, and garden waste clearance services.",
    url: "https://maxxwasteremovals.co.uk/coventry",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "/coventry",
  },
};

export default function CoventryPage( ) {
  return (
    <main className="min-h-screen">
      {/* Passing the local Coventry number to all components */}
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
    </main>
  );
}
