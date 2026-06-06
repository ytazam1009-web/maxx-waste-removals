"use client";

import LocalSEOSection from "@/components/seo/LocalSEOSection";
import FAQSchema from "@/components/seo/FAQSchema";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaArrowRight,
  FaRecycle,
  FaShieldAlt,
  FaBars,
FaFacebookF,
FaInstagram,
FaTiktok,
FaLinkedinIn,
FaTwitter
} from "react-icons/fa";

export default function Home({
   city = "Leicester • Coventry • Birmingham",
  heroImage = "/images/heroimage.jpg",
}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);
  return (

    
    <main className="overflow-hidden">

      {/* NAVBAR */}

<header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#07152f] shadow-2xl py-1 "
      : "bg-[#07152f]/90 backdrop-blur-md border-b border-white/10"
  }`}
>

       <div className="container-custom flex items-center justify-between py-2">

  {/* LOGO */}

<div className="flex items-center gap-5 flex-shrink-0 -ml-6 lg:-ml-10">

  {/* IMAGE LOGO */}

  <img
    src="/logos/logo.png"
    alt="MAXX Waste Removals"
    className="w-[120px] md:w-[170px] h-auto object-contain"
  />

  {/* TEXT LOGO */}

<div className="flex flex-col leading-none">

  <span className="text-3xl md:text-4xl font-black tracking-tight text-white">
    MAXX
  </span>

  <span className="text-[#f6be00] uppercase tracking-[3px] text-sm md:text-base font-bold mt-1">
    Waste Removals
  </span>

  <span className="text-gray-300 text-xs md:text-sm mt-2 tracking-wide">
    {city}
  </span>

</div>
</div>

  {/* DESKTOP MENU */}

  <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

    <a href="#home" className="hover:text-[#f6be00] transition">
      Home
    </a>

    <a href="#services" className="hover:text-[#f6be00] transition">
      Services
    </a>

    <a href="#areas" className="hover:text-[#f6be00] transition">
      Areas
    </a>

    <a href="#reviews" className="hover:text-[#f6be00] transition">
      Reviews
    </a>

    <a href="#contact" className="hover:text-[#f6be00] transition">
      Contact
    </a>

  </nav>

  {/* RIGHT SIDE */}

  <div className="hidden lg:flex items-center gap-8 ml-12">

    <button className="hidden md:flex items-center gap-2 bg-[#f6be00] text-black font-bold px-5 py-3 rounded-full hover:scale-105 transition whitespace-nowrap">

  <FaPhoneAlt />

  Call Now

</button>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-white text-2xl lg:hidden"
    >
      <FaBars />
    </button>

  </div>

</div>

      </header>
{/* MOBILE MENU */}

<AnimatePresence>

  {menuOpen && (

    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[88px] left-0 w-full bg-[#07152f] z-40 lg:hidden border-t border-white/10"
    >

      <div className="flex flex-col p-8 gap-6 text-white text-lg font-medium">

        <a href="#home" onClick={() => setMenuOpen(false)}>
  Home
</a>

<a href="#services" onClick={() => setMenuOpen(false)}>
  Services
</a>

<a href="#areas" onClick={() => setMenuOpen(false)}>
  Areas
</a>

<a href="#reviews" onClick={() => setMenuOpen(false)}>
  Reviews
</a>

<a href="#contact" onClick={() => setMenuOpen(false)}>
  Contact
</a>

      </div>

    </motion.div>

  )}

</AnimatePresence>

     {/* HERO SECTION */}

{/* HERO SECTION */}

<section
  id="home"
  className="relative bg-[#07152f] overflow-hidden"
>

  <div className="flex flex-col lg:flex-row min-h-screen">

    {/* LEFT SIDE CONTENT */}

    <div className="w-full lg:w-1/2 flex items-center relative z-10 px-6 lg:px-16 pt-52 lg:pt-40 pb-20">

      <div className="max-w-2xl">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[4px] text-[#f6be00] font-semibold mb-6">
             Waste Removal Services
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">

            Fast &
            <span className="text-[#f6be00]"> Reliable</span>
            <br />
            Waste Removals

          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">

            Professional rubbish removal, house clearance,
            garden waste, office clearance and same-day
            waste collection services across the Midlands.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row gap-5">

            <button className="btn-primary flex items-center justify-center gap-2">
              Get Free Quote
              <FaArrowRight />
            </button>

            <button className="btn-secondary">
              Our Services
            </button>

          </div>

          {/* TRUST ITEMS */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

            <div className="flex items-center gap-3 text-white">

              <div className="w-12 h-12 rounded-full bg-[#f6be00] flex items-center justify-center text-black">
                <FaShieldAlt />
              </div>

              <span className="font-medium">
                Fully Licensed
              </span>

            </div>

            <div className="flex items-center gap-3 text-white">

              <div className="w-12 h-12 rounded-full bg-[#f6be00] flex items-center justify-center text-black">
                <FaRecycle />
              </div>

              <span className="font-medium">
                Eco Disposal
              </span>

            </div>

            <div className="flex items-center gap-3 text-white">

              <div className="w-12 h-12 rounded-full bg-[#f6be00] flex items-center justify-center text-black">
                <FaPhoneAlt />
              </div>

              <span className="font-medium">
                Same Day Service
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}

    {/* RIGHT SIDE IMAGE */}

<div className="w-full lg:w-1/2 h-[350px] lg:h-screen relative overflow-hidden">

  <img
    src={heroImage}
    alt="MAXX Waste Removals"
    className="w-full h-full object-cover object-center lg:object-right opacity-50"
  />

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#07152f]/20 to-[#07152f]"></div>

</div>
  </div>

</section>
{/* STATS SECTION */}

<section className="bg-[#f6be00] py-16">

  <div className="container-custom">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      <div>
        <h3 className="text-5xl font-black text-[#07152f] mb-2">
          1000+
        </h3>

        <p className="font-semibold text-lg">
          Jobs Completed
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-[#07152f] mb-2">
          3
        </h3>

        <p className="font-semibold text-lg">
          Cities Covered
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-[#07152f] mb-2">
          100%
        </h3>

        <p className="font-semibold text-lg">
          Eco Disposal
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-[#07152f] mb-2">
          24/7
        </h3>

        <p className="font-semibold text-lg">
          Fast Response
        </p>
      </div>

    </div>

  </div>

</section>
<LocalSEOSection />
      {/* SERVICES */}

      <section
  id="services"
  className="section-padding bg-white"
>

        <div className="container-custom">

          <div className="text-center mb-20">

            <p className="text-[#f6be00] uppercase font-bold mb-4">
              What We Offer
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#07152f]">
              Our Services
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "House Clearance",
              "Mattress Removal",
              "Garden Waste",
              "Builders Waste",
              "Garage Clearance",
              "Office Clearance",
              "Bin Collection",
              "Sofa Disposal",
            ].map((service, index) => (

              <motion.div
  key={index}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -10 }}
  >

                <div className="h-52 overflow-hidden">

                  <img
                    src={`https://picsum.photos/500/400?random=${index}`}
                    alt={service}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-[#07152f] mb-4">
                    {service}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Reliable and affordable waste removal service tailored for homes and businesses.
                  </p>

                  <button className="flex items-center gap-2 font-bold text-[#07152f]">
                    Learn More
                    <FaArrowRight />
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
{/* REVIEWS */}

<section
  id="reviews"
  className="section-padding bg-[#07152f] text-white"
>

  <div className="container-custom">

    <div className="text-center mb-20">

      <p className="text-[#f6be00] uppercase font-bold mb-4">
        Customer Reviews
      </p>

      <h2 className="text-5xl font-black">
        Trusted Across The Midlands
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          name: "James R.",
          review:
            "Excellent service. Cleared all our garden waste quickly and professionally.",
        },

        {
          name: "Sarah T.",
          review:
            "Very reliable company. Fast response and affordable pricing.",
        },

        {
          name: "Michael A.",
          review:
            "Highly recommended for house clearance in Birmingham.",
        },
      ].map((item, index) => (

        <motion.div
  key={index}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.15 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10"
        >

          <div className="text-[#f6be00] text-3xl mb-6">
            ★★★★★
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            {item.review}
          </p>

          <h4 className="font-bold text-xl">
            {item.name}
          </h4>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* MOBILE CALL BUTTON */}

<div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden">

  <button className="bg-[#f6be00] text-black px-8 py-4 rounded-full font-black shadow-2xl flex items-center gap-3">

    <FaPhoneAlt />

    Call Now

  </button>

</div>

{/* WHY CHOOSE US */}

<section className="section-padding bg-[#07152f] text-white overflow-hidden">

  <div className="container-custom">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}

      <div>

        <p className="text-[#f6be00] uppercase font-bold mb-4">
          Why Choose MAXX
        </p>

        <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

          Waste Removal
          <br />
          You Can Trust

        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">

          We provide fast, affordable and eco-friendly waste removal services
          across Leicester, Coventry and Birmingham with a strong focus on
          customer satisfaction and responsible disposal.

        </p>

        <div className="space-y-8">

          <div className="flex gap-5">

            <div className="min-w-[70px] h-[70px] rounded-full bg-[#f6be00] text-black flex items-center justify-center text-3xl font-black">
              ✓
            </div>

            <div>

              <h4 className="text-2xl font-bold mb-2">
                Fully Licensed & Insured
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Professional and legally compliant waste disposal services.
              </p>

            </div>

          </div>

          <div className="flex gap-5">

            <div className="min-w-[70px] h-[70px] rounded-full bg-[#f6be00] text-black flex items-center justify-center text-3xl font-black">
              ⚡
            </div>

            <div>

              <h4 className="text-2xl font-bold mb-2">
                Same Day Collections
              </h4>

              <p className="text-gray-400 leading-relaxed">
                Fast response times for urgent rubbish removal jobs.
              </p>

            </div>

          </div>

          <div className="flex gap-5">

            <div className="min-w-[70px] h-[70px] rounded-full bg-[#f6be00] text-black flex items-center justify-center text-3xl font-black">
              ♻
            </div>

            <div>

              <h4 className="text-2xl font-bold mb-2">
                Eco-Friendly Disposal
              </h4>

              <p className="text-gray-400 leading-relaxed">
                We recycle as much waste as possible to reduce landfill impact.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="relative">

        <div className="absolute inset-0 bg-[#f6be00] blur-[120px] opacity-20 rounded-full"></div>

        <div className="relative z-10 bg-white/10 border border-white/10 backdrop-blur-md rounded-[40px] p-12">

          <div className="grid grid-cols-2 gap-8">

            <div className="bg-black/20 rounded-3xl p-8 text-center">

              <h3 className="text-5xl font-black text-[#f6be00] mb-3">
                5K+
              </h3>

              <p className="text-gray-300">
                Collections Completed
              </p>

            </div>

            <div className="bg-black/20 rounded-3xl p-8 text-center">

              <h3 className="text-5xl font-black text-[#f6be00] mb-3">
                100%
              </h3>

              <p className="text-gray-300">
                Customer Satisfaction
              </p>

            </div>

            <div className="bg-black/20 rounded-3xl p-8 text-center">

              <h3 className="text-5xl font-black text-[#f6be00] mb-3">
                24/7
              </h3>

              <p className="text-gray-300">
                Fast Response
              </p>

            </div>

            <div className="bg-black/20 rounded-3xl p-8 text-center">

              <h3 className="text-5xl font-black text-[#f6be00] mb-3">
                3
              </h3>

              <p className="text-gray-300">
                Cities Covered
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* AREAS WE COVER */}
/* AREAS WE COVER */

<section
  id="areas"
  className="section-padding bg-white"
>

  <div className="container-custom">

    <div className="text-center mb-20">

      <p className="text-[#f6be00] uppercase font-bold mb-4">
        Areas We Cover
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-[#07152f] mb-6">
        Local Waste Removal Services
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">

        MAXX Waste Removals provides professional rubbish removal,
        house clearance and waste collection services across the Midlands.

      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* LEICESTER */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[35px] overflow-hidden group min-h-[450px]"
      >

        <img
          src="https://picsum.photos/700/900?random=31"
          alt="Waste Removal Leicester"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">

          <p className="text-[#f6be00] uppercase font-bold mb-4">
            Leicester
          </p>

          <h3 className="text-4xl font-black mb-5">
            Waste Removal Leicester
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">

            Same-day rubbish removal, house clearance and eco-friendly waste collection across Leicester.

          </p>

          <button className="btn-primary w-fit">
            Learn More
          </button>

        </div>

      </motion.div>

      {/* COVENTRY */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative rounded-[35px] overflow-hidden group min-h-[450px]"
      >

        <img
          src="https://picsum.photos/700/900?random=32"
          alt="Waste Removal Coventry"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">

          <p className="text-[#f6be00] uppercase font-bold mb-4">
            Coventry
          </p>

          <h3 className="text-4xl font-black mb-5">
            Waste Removal Coventry
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">

            Fast and affordable waste clearance services for homes and businesses in Coventry.

          </p>

          <button className="btn-primary w-fit">
            Learn More
          </button>

        </div>

      </motion.div>

      {/* BIRMINGHAM */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative rounded-[35px] overflow-hidden group min-h-[450px]"
      >

        <img
          src="https://picsum.photos/700/900?random=33"
          alt="Waste Removal Birmingham"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">

          <p className="text-[#f6be00] uppercase font-bold mb-4">
            Birmingham
          </p>

          <h3 className="text-4xl font-black mb-5">
            Waste Removal Birmingham
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">

            Reliable rubbish removal and house clearance services across Birmingham and nearby areas.

          </p>

          <button className="btn-primary w-fit">
            Learn More
          </button>

        </div>

      </motion.div>

    </div>

  </div>

</section>
/* FAQ SECTION */

<section className="section-padding bg-white">

  <div className="container-custom">

    <div className="text-center mb-20">

      <p className="text-[#f6be00] uppercase font-bold mb-4">
        Frequently Asked Questions
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-[#07152f] mb-6">
        Common Questions
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">

        Answers to common questions about our waste removal,
        house clearance and rubbish collection services.

      </p>

    </div>

    <div className="max-w-5xl mx-auto space-y-6">

      {[
        {
          question: "What areas do you cover?",
          answer:
            "We provide waste removal services across Leicester, Coventry and Birmingham.",
        },

        {
          question: "Do you offer same-day waste collection?",
          answer:
            "Yes, same-day rubbish removal is available depending on availability.",
        },

        {
          question: "What types of waste do you remove?",
          answer:
            "We remove household waste, garden waste, builders waste, furniture, mattresses, office waste and more.",
        },

        {
          question: "Are you a licensed waste carrier?",
          answer:
            "Yes, MAXX Waste Removals operates as a fully licensed waste carrier.",
        },

        {
          question: "Do you recycle waste?",
          answer:
            "Yes, we aim to recycle as much waste as possible and dispose of waste responsibly at licensed commercial recycling stations to reduce landfill impact.",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-gray-200 rounded-[30px] p-8 hover:shadow-xl transition"
        >

          <h3 className="text-2xl font-black text-[#07152f] mb-4">
            {item.question}
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            {item.answer}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* QUOTE SECTION */}

<section
  id="contact"
  className="section-padding bg-[#f5f5f5]"
>

  <div className="container-custom">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <p className="text-[#f6be00] uppercase font-bold mb-4">
          Free Quote
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-[#07152f] leading-tight mb-8">

          Need Waste Removal?

        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">

          Get a fast free quote for rubbish removal, house clearance,
          garden waste, office clearance and more across Leicester,
          Coventry and Birmingham.

        </p>

        <div className="space-y-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-[#f6be00] flex items-center justify-center text-black font-black">
              1
            </div>

            <div>

              <h4 className="font-bold text-xl text-[#07152f]">
                Request Quote
              </h4>

              <p className="text-gray-500">
                Send us your waste details.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-[#f6be00] flex items-center justify-center text-black font-black">
              2
            </div>

            <div>

              <h4 className="font-bold text-xl text-[#07152f]">
                Fast Response
              </h4>

              <p className="text-gray-500">
                We’ll contact you quickly.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-[#f6be00] flex items-center justify-center text-black font-black">
              3
            </div>

            <div>

              <h4 className="font-bold text-xl text-[#07152f]">
                Waste Collected
              </h4>

              <p className="text-gray-500">
                Same-day service available.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FORM */}

      <div className="bg-white rounded-[40px] p-10 shadow-2xl">

        <h3 className="text-4xl font-black text-[#07152f] mb-10">
          Get Your Free Quote
        </h3>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#f6be00]"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#f6be00]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#f6be00]"
          />

          <select
            className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#f6be00]"
          >

            <option>Select City</option>
            <option>Leicester</option>
            <option>Coventry</option>
            <option>Birmingham</option>

          </select>

          <textarea
            rows="5"
            placeholder="Describe Your Waste Removal Requirement"
            className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#f6be00]"
          ></textarea>

          <button className="btn-primary w-full text-lg">
            Request Free Quote
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

{/* FOOTER */}

<footer className="bg-black text-white pt-24 pb-10">

  <div className="container-custom">

    <div className="grid md:grid-cols-4 gap-14 mb-20">

      {/* BRAND */}

      <div>

        <div className="flex flex-col leading-none mb-6">

  <span className="text-4xl font-black tracking-tight text-white">
    MAXX
  </span>

  <span className="text-[#f6be00] uppercase tracking-[3px] text-sm font-bold mt-2">
    WASTE REMOVALS
  </span>

</div>

        <p className="text-gray-400 leading-relaxed mb-8">
          Professional waste removal and house clearance services across Leicester, Coventry and Birmingham.
        </p>

        {/* SOCIALS */}

        <div className="flex gap-4">

          {[
            FaFacebookF,
            FaInstagram,
            FaTiktok,
            FaLinkedinIn,
            FaTwitter,
          ].map((Icon, index) => (

            <div
              key={index}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#f6be00] hover:text-black transition flex items-center justify-center cursor-pointer"
            >

              <Icon />

            </div>

          ))}

        </div>

      </div>

      {/* SERVICES */}

      <div>

        <h4 className="text-2xl font-bold mb-6">
          Services
        </h4>

        <div className="flex flex-col gap-4 text-gray-400">

          <a href="#">House Clearance</a>
          <a href="#">Garden Waste</a>
          <a href="#">Mattress Removal</a>
          <a href="#">Garage Clearance</a>
          <a href="#">Office Clearance</a>

        </div>

      </div>

      {/* AREAS */}

      <div>

        <h4 className="text-2xl font-bold mb-6">
          Areas We Cover
        </h4>

        <div className="flex flex-col gap-4 text-gray-400">

          <a href="#">Leicester</a>
          <a href="#">Coventry</a>
          <a href="#">Birmingham</a>

        </div>

      </div>

      {/* CONTACT */}

      <div>

        <h4 className="text-2xl font-bold mb-6">
          Contact
        </h4>

        <div className="flex flex-col gap-4 text-gray-400">

          <p>info@maxxwasteremovals.co.uk</p>

          <p>Phone Number Coming Soon</p>

          <button className="btn-primary mt-4 w-fit">
            Get Free Quote
          </button>

        </div>

      </div>

    </div>

    {/* BOTTOM */}

    <div className="border-t border-white/10 pt-8 text-center text-gray-500">

      © 2026 MAXX Waste Removals. All Rights Reserved.

    </div>

  </div>
             
</footer>
<FAQSchema />
    </main>
  );
}
