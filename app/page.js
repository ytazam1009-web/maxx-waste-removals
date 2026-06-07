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

      {/* HERO SEO HEADER */}
      <section className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-bold text-white">
          Waste Removal Leicester, Coventry & Birmingham
        </h1>

        <p className="mt-4 text-gray-300">
          Professional waste removal, house clearance, garden waste removal,
          sofa removal, and office clearance services across the Midlands with fast same-day collection.
        </p>
      </section>

      <HeroSection
        city="Midlands"
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

      <CTASection />

      <InternalLinks />

      {/* SEO SCHEMAS */}
      <FAQSchema city="Midlands" />
      <LocalBusinessSchema />

      <Footer />
    </main>
  );
}