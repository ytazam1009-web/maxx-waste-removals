// THIS IS THE MAIN HOME PAGE (app/page.js)
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
import FAQSchema from "@/components/seo/FAQSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import BackToTop from "@/components/common/BackToTop"; // ADDED THIS

export const metadata = {
  title: "Maxx Waste Removals | Waste Removal Leicester, Coventry & Birmingham",
  description: "Professional waste removal services across Leicester, Coventry, and Birmingham. Same-day collection for house, garden, and office clearance.",
};

export default function HomePage() {
  const mainPhone = "+44 7718 090183";

  return (
    <main>
      <Navbar />

      <HeroSection
        city="Midlands"
        phoneNumber={mainPhone}
        heroImage="/images/hero/waste-removal-truck.webp"
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

      <CTASection phoneNumber={mainPhone} />

      <InternalLinks />
      <FAQSchema city="Midlands" />
      <LocalBusinessSchema />
      <Footer />
      
      {/* ADDED THE BUTTON HERE */}
      <BackToTop />
    </main>
  );
}
