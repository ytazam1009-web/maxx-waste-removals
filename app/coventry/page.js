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
    "Waste Removal Coventry | House Clearance & Rubbish Removal Coventry | Maxx Waste Removals",

  description:
    "Professional waste removal services in Coventry. House clearance, rubbish removal, garden clearance, junk removal, furniture disposal, office clearance, and same-day waste collection services across Coventry and nearby areas.",

  keywords: [
    "waste removal Coventry",
    "rubbish clearance Coventry",
    "house clearance Coventry",
    "garden clearance Coventry",
    "junk removal Coventry",
    "same day waste removal Coventry",
    "cheap waste removal Coventry",
    "same day rubbish removal Coventry",
    "licensed waste carrier Coventry",
    "affordable rubbish clearance Coventry",
    "professional waste removal services Coventry",
    "waste collection Coventry",
    "waste disposal Coventry",
    "house clearance Coventry",
    "sofa removal Coventry",
    "mattress removal Coventry"
  ],

  openGraph: {
    title: "Waste Removal Coventry | Maxx Waste Removals",
    description:
      "Fast and affordable waste removal, rubbish clearance, and house clearance services in Coventry.",
    url: "https://maxxwasteremovals.co.uk/coventry",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "/coventry",
  },
};

export default function CoventryPage() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <HeroSection
        city="Coventry"
        heroImage="/images/coventry.webp"
      />

      <TrustBar />
      <ServicesGrid />
      <AreasSection />
      <WhyChooseUs />
      <Testimonials />
      <QuoteForm />
      <CTASection />
      <InternalLinks />

      <FAQSchema city="Coventry" />

      <Footer />

    </main>
  );
}