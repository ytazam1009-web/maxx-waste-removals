import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/home/QuoteForm";
import BackToTop from "@/components/common/BackToTop";

import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Contact Maxx Waste Removals | Get Your Free Quote",

  description:
    "Contact Maxx Waste Removals for fast, affordable waste removal, house clearance, garden clearance and rubbish collection across Leicester, Coventry, Birmingham and surrounding Midlands.",

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/contact",
  },

  openGraph: {
    title: "Contact Maxx Waste Removals | Get Your Free Quote",
    description:
      "Need waste removed? Contact Maxx Waste Removals today for a free quote and same-day collections across the Midlands.",
    url: "https://www.maxxwasteremovals.co.uk/contact",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#07152f] text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <Section>
        <Container>
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">

              <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-yellow-400">
                Contact Maxx Waste Removals
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl font-black uppercase tracking-tight">
                Fast Waste Removal Across The Midlands
              </h1>

              <p className="mt-8 text-xl text-gray-300 leading-8">
                Looking for reliable waste removal, rubbish clearance,
                house clearance or garden waste collection?
                Contact our friendly team today for a fast,
                no-obligation quotation.
              </p>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* CONTACT CARDS */}

      <Section>
        <Container>

          <FadeUp>

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">

                  <Phone className="text-[#07152f]" size={30} />

                </div>

                <h2 className="text-2xl font-bold">
                  Call Us
                </h2>

                <p className="mt-4 text-gray-300">
                  Speak directly with our team for immediate assistance.
                </p>

                <a
                  href="tel:+447718090183"
                  className="mt-6 block text-xl font-black text-yellow-400 hover:text-yellow-300"
                >
                  +44 7718 090183
                </a>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">

                  <Mail className="text-[#07152f]" size={30} />

                </div>

                <h2 className="text-2xl font-bold">
                  Email Us
                </h2>

                <p className="mt-4 text-gray-300">
                  Send us photos or details and we'll provide a free quote.
                </p>

                <a
                  href="mailto:info@maxxwasteremovals.co.uk"
                  className="mt-6 block text-yellow-400 font-bold break-all"
                >
                  info@maxxwasteremovals.co.uk
                </a>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">

                  <Clock className="text-[#07152f]" size={30} />

                </div>

                <h2 className="text-2xl font-bold">
                  Opening Hours
                </h2>

                <p className="mt-4 text-gray-300">
                  We are available for bookings every day.
                </p>

                <p className="mt-6 text-yellow-400 font-black">
                  Open 24/7
                </p>

              </div>

            </div>

          </FadeUp>

        </Container>

      </Section>

            {/* QUOTE FORM */}

      <QuoteForm city="Midlands" />

      {/* AREAS COVERED */}

      <Section>
        <Container>
          <FadeUp>

            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-yellow-400">
                Areas We Cover
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-black uppercase">
                Waste Removal Across The Midlands
              </h2>

              <p className="mt-6 text-lg text-gray-300 leading-8">
                We provide fast, affordable waste removal and rubbish
                clearance services for domestic and commercial customers
                across Leicester, Coventry, Birmingham and surrounding
                Midlands areas.
              </p>

            </div>

            <div className="grid gap-6 mt-14 md:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

                <MapPin
                  className="mx-auto text-yellow-400 mb-5"
                  size={38}
                />

                <h3 className="text-2xl font-bold">
                  Leicester
                </h3>

                <p className="mt-3 text-gray-300">
                  House clearance, garden waste,
                  furniture removal and general rubbish collection.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

                <MapPin
                  className="mx-auto text-yellow-400 mb-5"
                  size={38}
                />

                <h3 className="text-2xl font-bold">
                  Coventry
                </h3>

                <p className="mt-3 text-gray-300">
                  Same-day waste collection,
                  office clearance and commercial waste removal.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

                <MapPin
                  className="mx-auto text-yellow-400 mb-5"
                  size={38}
                />

                <h3 className="text-2xl font-bold">
                  Birmingham
                </h3>

                <p className="mt-3 text-gray-300">
                  Fast rubbish clearance,
                  bulky waste collection and property clearances.
                </p>

              </div>

            </div>

          </FadeUp>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}

      <Section>
        <Container>

          <FadeUp>

            <div className="text-center">

              <h2 className="text-4xl md:text-5xl font-black uppercase">
                Why Choose Maxx Waste Removals
              </h2>

              <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                We pride ourselves on providing a reliable,
                professional and environmentally responsible
                waste removal service throughout the Midlands.
              </p>

            </div>

            <div className="grid gap-6 mt-14 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Licensed Waste Carrier",
                "Same-Day Collections Available",
                "Domestic & Commercial Waste",
                "Cheaper Than Skip Hire",
                "No Upfront Payment",
                "Responsible Waste Disposal"
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-4"
                >

                  <CheckCircle2
                    className="text-yellow-400 flex-shrink-0"
                    size={28}
                  />

                  <span className="font-bold text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </FadeUp>

        </Container>

      </Section>

            {/* LOCAL BRANCH NUMBERS */}

      <Section>
        <Container>
          <FadeUp>

            <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10">

              <div className="text-center">

                <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-yellow-400">
                  Local Branch Numbers
                </div>

                <h2 className="mt-6 text-4xl font-black uppercase">
                  Speak To Your Local Team
                </h2>

                <p className="mt-5 text-gray-300 text-lg">
                  Prefer to call your nearest branch? Use the numbers below and
                  we'll be happy to help.
                </p>

              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">

                <a
                  href="tel:01163600853"
                  className="rounded-2xl border border-white/10 bg-[#0b1f45] p-8 hover:border-yellow-400 transition"
                >
                  <Phone className="text-yellow-400 mb-5" size={32} />

                  <h3 className="text-2xl font-bold">
                    Leicester
                  </h3>

                  <p className="mt-4 text-2xl font-black text-yellow-400">
                    01163 600853
                  </p>
                </a>

                <a
                  href="tel:02475102901"
                  className="rounded-2xl border border-white/10 bg-[#0b1f45] p-8 hover:border-yellow-400 transition"
                >
                  <Phone className="text-yellow-400 mb-5" size={32} />

                  <h3 className="text-2xl font-bold">
                    Coventry
                  </h3>

                  <p className="mt-4 text-2xl font-black text-yellow-400">
                    02475 102901
                  </p>
                </a>

                <a
                  href="tel:01218126425"
                  className="rounded-2xl border border-white/10 bg-[#0b1f45] p-8 hover:border-yellow-400 transition"
                >
                  <Phone className="text-yellow-400 mb-5" size={32} />

                  <h3 className="text-2xl font-bold">
                    Birmingham
                  </h3>

                  <p className="mt-4 text-2xl font-black text-yellow-400">
                    01218 126425
                  </p>
                </a>

              </div>

            </div>

          </FadeUp>
        </Container>
      </Section>

      {/* FINAL CTA */}

      <Section>
        <Container>

          <FadeUp>

            <div className="rounded-3xl bg-yellow-400 text-[#07152f] p-12 text-center">

              <h2 className="text-4xl md:text-5xl font-black uppercase">
                Need Waste Removed Today?
              </h2>

              <p className="mt-6 text-lg font-medium max-w-3xl mx-auto">
                Whether it's a single item, a full house clearance,
                office clearance or garden waste removal,
                our friendly team is ready to help.
              </p>

              <a
                href="tel:+447718090183"
                className="inline-flex items-center justify-center mt-10 rounded-2xl bg-[#07152f] px-10 py-5 text-lg font-black uppercase tracking-wider text-white hover:scale-105 transition"
              >
                <Phone className="mr-3" size={22} />
                Call Now - +44 7718 090183
              </a>

            </div>

          </FadeUp>

        </Container>
      </Section>

      <Footer />
      <BackToTop />

    </main>
  );
}