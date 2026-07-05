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
import BackToTop from "@/components/common/BackToTop";
import RecentWork from "@/components/home/RecentWork";

export const metadata = {
  title:
    "Maxx Waste Removals | Licensed Waste Removal & House Clearance Leicester, Coventry & Birmingham",

  description:
    "Professional, same-day rubbish clearance across Leicester, Coventry, and Birmingham. Licensed waste carrier for house, garden, and office clearance. No upfront payment—cheaper than skip hire!",

  keywords: [
    "waste removal Midlands",
    "rubbish clearance Leicester",
    "house clearance Coventry",
    "waste removal Birmingham",
    "licensed waste carrier",
    "same day rubbish collection",
    "man and van waste removal",
    "garden waste clearance",
    "office clearance Midlands",
    "affordable waste disposal",
    "bereavement house clearance",
    "commercial site clearance",
    "furniture disposal",
    "mattress removal",
    "cheaper than skip hire",
  ],

  openGraph: {
    title:
      "Maxx Waste Removals | Licensed Waste Removal & House Clearance Leicester, Coventry & Birmingham",
    description:
      "Professional, same-day rubbish clearance across Leicester, Coventry, and Birmingham. Licensed waste carrier for house, garden, and office clearance.",
    url: "https://www.maxxwasteremovals.co.uk",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk",
  },
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

<section id="recent-work">
  <RecentWork />
</section>

<section id="contact">
  <QuoteForm />
</section>

      <CTASection phoneNumber={mainPhone} />

      <InternalLinks />
      <FAQSchema city="Midlands" />
      <LocalBusinessSchema />
      <Footer />

      <BackToTop />
    </main>
  );
}