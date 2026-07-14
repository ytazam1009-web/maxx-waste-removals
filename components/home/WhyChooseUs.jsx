import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import FadeUp from "@/components/ui/FadeUp";

import {
  BadgeCheck,
  Clock3,
  PoundSterling,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock3 size={34} />,
      title: "Same Day Waste Removal",
description:
  "Fast same-day waste removal, rubbish clearance and house clearance across Coventry, Leicester, Birmingham and the Midlands.",
    },

    {
      icon: <PoundSterling size={34} />,
      title: "Affordable Fixed Pricing",
description:
  "Competitive, transparent pricing with free quotes, no hidden charges and no upfront payment.",
    },

    {
      icon: <BadgeCheck size={34} />,
      title: "Licensed & Insured Waste Carrier",
description:
  "Fully licensed and insured waste carrier providing responsible disposal and recycling in line with UK environmental regulations.",
    },

    {
      icon: <Users size={34} />,
      title: "Trusted Local Team",
description:
  "Experienced, friendly professionals delivering reliable house clearance, garden clearance, office clearance and rubbish removal services.",
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

              Why Choose Maxx Waste Removals

            </div>

            <h2 className="
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
            ">

              Trusted Waste Removal & House Clearance Experts

            </h2>

            <p className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-300
            ">

              Maxx Waste Removals provides professional waste removal, rubbish clearance, house clearance, garden clearance and office clearance across Coventry, Leicester, Birmingham and the Midlands. We are committed to reliable service, responsible recycling, transparent pricing and outstanding customer satisfaction.

            </p>

          </div>

        </FadeUp>

        <div className="
          mt-16
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
        ">

          {features.map((feature, index) => (

            <FadeUp key={index}>

              <div className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-sm
                transition
                hover:-translate-y-2
              ">

                <div className="
                  mb-6
                  inline-flex
                  rounded-2xl
                  bg-yellow-400/10
                  p-4
                  text-yellow-400
                ">

                  {feature.icon}

                </div>

                <h3 className="text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="
                  mt-4
                  leading-relaxed
                  text-gray-300
                ">

                  {feature.description}

                </p>

              </div>

            </FadeUp>

          ))}

        </div>

      </Container>

    </Section>
  );
}