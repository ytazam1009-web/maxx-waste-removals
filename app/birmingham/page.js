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
    "Waste Removal Birmingham | House Clearance & Rubbish Removal Birmingham | Maxx Waste Removals",

  description:
    "Professional waste removal services in Birmingham. House clearance, rubbish removal, garden clearance, junk removal, furniture disposal, office clearance, and same-day waste collection services across Birmingham and surrounding areas.",

  keywords: [
    "waste removal Birmingham",
    "rubbish clearance Birmingham",
    "house clearance Birmingham",
    "garden clearance Birmingham",
    "junk removal Birmingham",
    "same day waste removal Birmingham",
    "cheap waste removal Birmingham",
    "same day rubbish removal Birmingham",
    "licensed waste carrier Birmingham",
    "affordable rubbish clearance Birmingham",
    "professional waste removal services Birmingham",
    "waste collection Birmingham",
    "waste disposal Birmingham",
    "house clearance Birmingham",
    "sofa removal Birmingham",
    "mattress removal Birmingham"
  ],

  openGraph: {
    title: "Waste Removal Birmingham | Maxx Waste Removals",
    description:
      "Fast and affordable waste removal, rubbish clearance, and house clearance services in Birmingham.",
    url: "https://maxxwasteremovals.co.uk/birmingham",
    siteName: "Maxx Waste Removals",
    type: "website",
    locale: "en_GB",
  },

  alternates: {
    canonical: "/birmingham",
  },
};

export default function BirminghamPage() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <HeroSection
        city="Birmingham"
        heroImage="/images/birmingham.webp"
      />

      <TrustBar />
      <ServicesGrid />
      <AreasSection />
      <WhyChooseUs />
      <Testimonials />
      <QuoteForm />
      <CTASection />
      <InternalLinks />

      <FAQSchema city="Birmingham" />

      <Footer />

    </main>
  );
}