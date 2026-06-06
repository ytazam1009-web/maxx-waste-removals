"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import FadeUp from "@/components/ui/FadeUp";

export default function QuoteForm() {
  return (
    <Section>

      <Container>

        <FadeUp>

          <div className="
            mx-auto
            max-w-4xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-sm
            md:p-12
          ">

            <div className="text-center">

              <div className="
                mb-4
                inline-flex
                rounded-full
                border
                border-yellow-400/30
                bg-yellow-400/10
                px-4
                py-2
                text-sm
                font-medium
                text-yellow-400
              ">

                Free Quote

              </div>

              <h2 className="
                text-4xl
                font-extrabold
                text-white
                md:text-5xl
              ">

                Request A Free Waste Removal Quote

              </h2>

              <p className="
                mt-6
                text-lg
                leading-relaxed
                text-gray-300
              ">

                Fill out the form below and our team will
                contact you with a fast and affordable quote.

              </p>

            </div>

            <form className="mt-12 grid gap-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    text-white
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    text-white
                    outline-none
                    placeholder:text-gray-400
                  "
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-gray-400
                "
              />

              <textarea
                rows="5"
                placeholder="Tell us about your waste removal requirements..."
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-gray-400
                "
              ></textarea>

              <button
                type="submit"
                className="
                  rounded-2xl
                  bg-yellow-400
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-black
                  transition
                  hover:scale-[1.02]
                "
              >

                Get Free Quote

              </button>

            </form>

          </div>

        </FadeUp>

      </Container>

    </Section>
  );
}