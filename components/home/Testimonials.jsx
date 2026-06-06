import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import FadeUp from "@/components/ui/FadeUp";

import { Star } from "lucide-react";

export default function Testimonials() {

  const testimonials = [
    {
      name: "James Walker",
      review:
        "Excellent service from start to finish. The team arrived on time and cleared everything quickly.",
    },

    {
      name: "Sarah Mitchell",
      review:
        "Very professional and affordable waste removal service. Highly recommended for house clearance.",
    },

    {
      name: "Daniel Roberts",
      review:
        "Fast same-day collection and friendly staff. Will definitely use again in the future.",
    },
  ];

  return (
    <Section>

      <Container>

        <FadeUp>

          <div className="mx-auto max-w-3xl text-center">

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

              Customer Reviews

            </div>

            <h2 className="
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
            ">

              Trusted By Local Customers

            </h2>

            <p className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-300
            ">

              Reliable waste removal services trusted by
              homeowners and businesses across Leicester,
              Coventry, and Birmingham.

            </p>

          </div>

        </FadeUp>

        <div className="
          mt-16
          grid
          grid-cols-1
          gap-8
          lg:grid-cols-3
        ">

          {testimonials.map((item, index) => (

            <FadeUp key={index}>

              <div className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-sm
              ">

                <div className="mb-6 flex gap-1 text-yellow-400">

                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />

                </div>

                <p className="
                  leading-relaxed
                  text-gray-300
                ">

                  "{item.review}"

                </p>

                <div className="
                  mt-6
                  text-lg
                  font-semibold
                  text-white
                ">

                  {item.name}

                </div>

              </div>

            </FadeUp>

          ))}

        </div>

      </Container>

    </Section>
  );
}