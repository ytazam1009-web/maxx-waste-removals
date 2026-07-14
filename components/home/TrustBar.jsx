import Container from "@/components/layout/Container";

import {
  ShieldCheck,
  Truck,
  Recycle,
  Clock3,
} from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: <ShieldCheck size={24} />,
      text: "Licensed Waste Carrier",
    },

    {
      icon: <Truck size={24} />,
      text: "Same-Day Waste Removal",
    },

    {
      icon: <Recycle size={24} />,
      text: "Responsible Recycling",
    },

    {
      icon: <Clock3 size={24} />,
      text: "Free No-Obligation Quotes",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/5 py-6">

      <Container>

        <div className="
          grid
          grid-cols-2
          gap-6
          text-center
          md:grid-cols-4
        ">

          {items.map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                justify-center
                gap-3
                text-sm
                font-medium
                text-gray-200
              "
            >

              <div className="text-yellow-400">

                {item.icon}

              </div>

              {item.text}

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}