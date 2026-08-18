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
import WebPageSchema from "@/components/seo/WebPageSchema";
import WasteCarrierTrust from "@/components/seo/WasteCarrierTrust";
import BackToTop from "@/components/common/BackToTop";
import RecentWork from "@/components/home/RecentWork";

const baseUrl = "https://www.maxxwasteremovals.co.uk";

export const metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Maxx Waste Removals | Waste Removal, Rubbish Clearance & House Clearance Midlands",

  description:
    "Maxx Waste Removals provides professional waste removal, rubbish clearance, house clearance, garden waste, furniture and office clearance across Birmingham, Coventry, Leicester and surrounding Midlands areas. Same-day collection available.",

  keywords: [
    "waste removal Midlands",
    "rubbish removal Midlands",
    "rubbish clearance Midlands",
    "waste removal Birmingham",
    "rubbish removal Birmingham",
    "house clearance Birmingham",
    "waste removal Coventry",
    "rubbish removal Coventry",
    "house clearance Coventry",
    "waste removal Leicester",
    "rubbish removal Leicester",
    "house clearance Leicester",
    "same day waste removal",
    "same day rubbish removal",
    "house clearance",
    "garden waste removal",
    "garden clearance",
    "furniture removal",
    "sofa removal",
    "mattress removal",
    "office clearance",
    "commercial waste removal",
    "builders waste removal",
    "site clearance",
    "appliance removal",
    "junk removal",
    "man and van waste removal",
    "licensed waste carrier",
    "Environment Agency waste carrier",
    "waste collection Midlands",
  ],

  authors: [
    {
      name: "Maxx Waste Removals",
    },
  ],

  creator: "Maxx Waste Removals",
  publisher: "Maxx Waste Removals",

  alternates: {
    canonical: baseUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Maxx Waste Removals | Waste Removal & House Clearance Midlands",

    description:
      "Professional waste removal, rubbish clearance, house clearance, garden waste, furniture and office clearance across Birmingham, Coventry, Leicester and surrounding Midlands areas.",

    url: baseUrl,

    siteName: "Maxx Waste Removals",

    type: "website",

    locale: "en_GB",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maxx Waste Removals waste removal services across the Midlands",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Maxx Waste Removals | Waste Removal & House Clearance Midlands",

    description:
      "Professional waste removal, rubbish clearance and house clearance across Birmingham, Coventry, Leicester and surrounding Midlands areas.",

    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  const mainPhone = "+44 7718 090183";

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        city="Midlands"
        phoneNumber={mainPhone}
        heroImage="/images/hero/waste-removal-truck.webp"
      />

      <TrustBar />

      {/* Main Services */}
      <section id="services">
        <ServicesGrid />
      </section>

{/* Areas */}
<section id="areas">
  <AreasSection />
</section>

{/* Midlands Areas We Cover */}
<section id="areas" className="py-12 md:py-16">
  <div className="mx-auto max-w-6xl px-4">
    <div className="mx-auto max-w-5xl">

      {/* Main Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#f6be00] md:text-4xl">
          Areas We Cover Across the Midlands
        </h2>

        <p className="mt-5 leading-7 text-white">
          Maxx Waste Removals provides professional waste removal and rubbish
          clearance across Birmingham, Coventry, Leicester and surrounding
          Midlands areas. Our team covers a wide range of cities,
          neighbourhoods and surrounding locations.
        </p>
      </div>

      {/* Birmingham */}
      <div className="mt-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Birmingham
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Birmingham City Centre",
            "Edgbaston",
            "Harborne",
            "Selly Oak",
            "Erdington",
            "Sutton Coldfield",
            "Kings Heath",
            "Kings Norton",
            "Moseley",
            "Yardley",
            "Acocks Green",
            "Quinton",
            "Halesowen",
            "Smethwick",
            "West Bromwich",
            "Great Barr",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Coventry */}
      <div className="mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Coventry
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Coventry City Centre",
            "Earlsdon",
            "Canley",
            "Tile Hill",
            "Allesley",
            "Coundon",
            "Foleshill",
            "Radford",
            "Stoke",
            "Wyken",
            "Binley",
            "Cheylesmore",
            "Whitley",
            "Walsgrave",
            "Hillfields",
            "Green Lane",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Leicester */}
      <div className="mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Leicester
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Leicester City Centre",
            "Clarendon Park",
            "Stoneygate",
            "Knighton",
            "Evington",
            "Highfields",
            "Belgrave",
            "Spinney Hills",
            "Braunstone",
            "Aylestone",
            "Eyres Monsell",
            "Humberstone",
            "Thurnby",
            "West End",
            "Wigston",
            "Oadby",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Wolverhampton */}
      <div className="mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Wolverhampton
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Wolverhampton City Centre",
            "Tettenhall",
            "Penn",
            "Wednesfield",
            "Bilston",
            "Bushbury",
            "Whitmore Reans",
            "Blakenhall",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Solihull */}
      <div className="mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Solihull
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Solihull Town Centre",
            "Shirley",
            "Knowle",
            "Dorridge",
            "Olton",
            "Lyndon",
            "Castle Bromwich",
            "Balsall Common",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Dudley & Sandwell */}
      <div className="mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Dudley &amp; Sandwell
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Dudley",
            "Dudley Town Centre",
            "Brierley Hill",
            "Kingswinford",
            "Sedgley",
            "Stourbridge",
            "Halesowen",
            "Oldbury",
            "Smethwick",
            "West Bromwich",
            "Rowley Regis",
            "Tipton",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Walsall */}
      <div className="mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#f6be00] md:text-3xl">
            Walsall
          </h3>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#f6be00]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
          {[
            "Walsall Town Centre",
            "Aldridge",
            "Bloxwich",
            "Willenhall",
            "Pelsall",
            "Streetly",
            "Brownhills",
            "Rushall",
          ].map((area) => (
            <div
              key={area}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-[#f6be00]/50 hover:bg-[#f6be00]/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <p className="mt-10 text-center leading-7 text-white">
        If your area isn't listed above, contact Maxx Waste Removals anyway.
        We cover many surrounding Midlands locations and can confirm whether
        we can collect from your postcode.
      </p>

    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Reviews */}
      <section id="reviews">
        <Testimonials />
      </section>

      {/* Recent Work */}
      <section id="recent-work">
        <RecentWork />
      </section>

      {/* Contact / Quote */}
      <section id="contact">
        <QuoteForm />
      </section>

      {/* Waste Carrier Trust */}
      <WasteCarrierTrust city="the Midlands" />

      {/* Midlands Waste Removal Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Professional Waste Removal Across the Midlands
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Maxx Waste Removals provides professional waste removal and
              rubbish clearance services across Birmingham, Coventry, Leicester
              and surrounding Midlands areas. We help homeowners, landlords,
              tenants, businesses and property managers remove unwanted waste
              quickly and conveniently.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our services include house clearance, garden waste removal,
              furniture and bulky item removal, office clearance, builders
              waste and commercial waste removal. Same-day collection is
              available where possible, subject to availability and location.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Waste Removal Services We Provide
            </h2>

            <p className="mt-5 text-center leading-7 text-gray-600">
              From small household collections to larger property and
              commercial clearances, we provide practical waste removal
              solutions across the Midlands.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  House Clearance
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We help clear unwanted furniture, household items and
                  general rubbish from houses, flats and other residential
                  properties.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Rubbish Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We collect unwanted rubbish from homes, gardens, garages,
                  offices and other properties across Birmingham, Coventry,
                  Leicester and surrounding areas.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Garden Waste Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can collect garden waste, unwanted outdoor items and
                  clearance loads from gardens, sheds and other outdoor spaces.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Furniture & Bulky Item Removal
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can remove unwanted sofas, mattresses, beds, wardrobes,
                  tables and other bulky household furniture.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Office & Commercial Clearance
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Businesses, offices, landlords and commercial property
                  managers can contact us about office clearance and commercial
                  waste removal.
                </p>
              </div>

              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold">
                  Builders Waste & Site Clearance
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We can assist with removal of suitable builders waste and
                  clearance from properties, renovation projects and sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Waste Removal */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Same-Day Waste Removal Across the Midlands
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Need unwanted rubbish removed quickly? Maxx Waste Removals
              provides same-day waste collection where availability allows.
              Whether you need a few bulky items removed or a larger clearance
              completed, contact us with details of your waste and collection
              requirements.
            </p>

            <div className="mt-8">
              <a
                href={`tel:${mainPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold shadow-sm transition hover:shadow-md"
              >
                Call 07718 090183
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold shadow-sm transition hover:shadow-md"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>


      <CTASection phoneNumber={mainPhone} />

      {/* Existing Internal Links */}
      <InternalLinks />

      {/* Existing Homepage WebPage Schema */}
      <WebPageSchema />

      {/* Homepage FAQ Schema */}
      <FAQSchema city="the Midlands" />

      {/* Business / Website Schema */}
      <LocalBusinessSchema />

      <Footer />

      <BackToTop />
    </main>
  );
}