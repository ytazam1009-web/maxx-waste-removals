import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AreasSection from "@/components/home/AreasSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import QuoteForm from "@/components/home/QuoteForm";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/navigation/Navbar";
import InternalLinks from "@/components/seo/InternalLinks";

export const metadata = {
  title:
    "Maxx Waste Removals | Waste Removal Leicester, Coventry & Birmingham",

  description:
    "Professional waste removal services across Leicester, Coventry, and Birmingham. House clearance, rubbish removal, garden clearance, junk removal, furniture disposal, office clearance and same-day waste collection.",
};

export default function HomePage() {
  return (
    <main>

      <Navbar />

      {/* HERO (FIXED PROPS SO IT DOES NOT BREAK IMAGE SYSTEM) */}
      <HeroSection
        city="Midlands"
        heroImage="/images/hero/waste-removal-truck.webp"
      />

      <TrustBar />

      <ServicesGrid />

      <AreasSection />

      <WhyChooseUs />

      <Testimonials />

      <QuoteForm />

      <CTASection />

      <InternalLinks />

      <Footer />

    </main>
  );
} 