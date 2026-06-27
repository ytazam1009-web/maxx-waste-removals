"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Phone, Calendar } from "lucide-react";

export default function CTASection({ phoneNumber = "02475102901" }) {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <Section>
      <Container>
        <div className="
          relative
          overflow-hidden
          rounded-[2.5rem]
          bg-[#f6be00]
          px-8
          py-20
          text-center
          md:px-16
          shadow-[0_20px_50px_rgba(246,190,0,0.2)]
        ">
          {/* Decorative Circles */}
          <div className="
            absolute
            -top-20
            -right-20
            h-64
            w-64
            rounded-full
            bg-white/20
            blur-3xl
          " />
          <div className="
            absolute
            -bottom-20
            -left-20
            h-64
            w-64
            rounded-full
            bg-black/5
            blur-2xl
          " />

          <div className="relative z-10">
            <h2 className="
              text-4xl
              font-black
              leading-tight
              text-[#07152f]
              md:text-6xl
              tracking-tight
            ">
              Ready to Clear the <span className="underline decoration-white/40">Clutter?</span>
            </h2>

            <p className="
              mx-auto
              mt-8
              max-w-2xl
              text-xl
              font-bold
              leading-relaxed
              text-[#07152f]/80
            ">
              Join hundreds of happy customers across the Midlands. 
              Get your free, no-obligation quote today and enjoy a cleaner space by tonight!
            </p>

            <div className="
              mt-12
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-6
            ">
              <a
                href="#contact"
                className="
  w-full sm:w-auto
  flex items-center justify-center gap-3
  bg-[#07152f]
  text-white
  px-10
  py-5
  rounded-full
  font-black
  text-[0.675rem]
  sm:text-lg
  uppercase
  tracking-wider
  shadow-2xl
  hover:scale-105
  transition-all
  duration-300
"
              >
                <Calendar size={20} />
                Get Free Quote
              </a>

              <a
                href={telLink}
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-3
                  bg-white/20
                  border-2
                  border-[#07152f]/10
                  text-[#07152f]
                  px-10
                  py-5
                  rounded-full
                  font-black
                  text-[0.675rem]
                  sm:text-lg
                  uppercase
                  tracking-wider
                  hover:bg-white
                  transition-all
                  duration-300
                "
              >
                <Phone size={20} fill="currentColor" />
                {phoneNumber}
              </a>
            </div>

            <p className="mt-8 text-[#07152f]/60 text-sm font-bold uppercase tracking-tighter">
              ★ Fully Licensed & Insured Waste Carriers ★
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
