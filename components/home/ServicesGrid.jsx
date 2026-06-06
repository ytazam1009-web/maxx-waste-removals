import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import FadeUp from "@/components/ui/FadeUp";
import ServiceCard from "@/components/ui/ServiceCard";

import {
  Trash2,
  Sofa,
  Trees,
  Building2,
  Hammer,
  Refrigerator,
} from "lucide-react";

export default function ServicesGrid() {

  const services = [
    {
      icon: <Trash2 size={32} />,
      title: "House Clearance",
      description:
        "Fast and affordable full house clearance services across Leicester, Coventry, and Birmingham.",
    },

    {
      icon: <Sofa size={32} />,
      title: "Sofa Removal",
      description:
        "Quick sofa and furniture removal with eco-friendly disposal and same day collection available.",
    },

    {
      icon: <Trees size={32} />,
      title: "Garden Waste",
      description:
        "Professional garden waste clearance including branches, soil, bags, and outdoor rubbish.",
    },

    {
      icon: <Building2 size={32} />,
      title: "Office Clearance",
      description:
        "Efficient office and commercial waste collection for businesses and workplaces.",
    },

    {
      icon: <Hammer size={32} />,
      title: "Builders Waste",
      description:
        "Safe builders waste disposal for renovation projects, construction debris, and rubble.",
    },

    {
      icon: <Refrigerator size={32} />,
      title: "Appliance Removal",
      description:
        "Fridge, washing machine, cooker, and appliance disposal with licensed collection.",
    },
  ];

  return (
    <Section>

      <Container>

        <FadeUp>

          {/* SECTION HEADER */}

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

              Our Services

            </div>

            <h2 className="
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
            ">

              Professional Waste Removal Services

            </h2>

            <p className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-300
            ">

              Reliable waste collection and rubbish removal
              solutions tailored for homes, gardens,
              offices, and construction projects.

            </p>

          </div>

        </FadeUp>

        {/* SERVICES GRID */}

        <div className="
          mt-16
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        ">

          {services.map((service, index) => (

            <FadeUp key={index}>

              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />

            </FadeUp>

          ))}

        </div>

      </Container>

    </Section>
  );
}