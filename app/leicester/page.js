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

export const metadata = {
  title:
    "Waste Removal Leicester | House Clearance & Rubbish Removal Leicester | Maxx Waste Removals",

  description:
    "Professional waste removal services in Leicester. House clearance, rubbish removal, garden clearance, junk removal, mattress removal, sofa disposal, office clearance and same-day waste collection.",

  keywords: [
    "waste removal Leicester",
    "rubbish clearance Leicester",
    "house clearance Leicester",
    "garden clearance Leicester",
    "junk removal Leicester",
    "same day waste removal Leicester",
    "licensed waste carrier Leicester",
    "affordable rubbish clearance Leicester",
    "waste collection Leicester",
    "waste disposal Leicester",
    "house clearance Leicester",
    "sofa removal Leicester",
    "mattress removal Leicester"
  ],

  openGraph: {
    title: "Waste Removal Leicester | Maxx Waste Removals",
    description:
      "Fast and affordable waste removal, rubbish clearance, and house clearance services in Leicester.",
    url: "https://maxxwasteremovals.co.uk/leicester",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "/leicester",
  },
};

export default function LeicesterPage() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <HeroSection
        city="Leicester"
        heroImage="/images/leicester-waste-removal.webp"
      />

      <TrustBar />
      <ServicesGrid />
      <AreasSection />
      <WhyChooseUs />
      <Testimonials />
      <QuoteForm />
      <CTASection />
      <InternalLinks />

      <FAQSchema city="Leicester" />

      <Footer />

    </main>
  );
}