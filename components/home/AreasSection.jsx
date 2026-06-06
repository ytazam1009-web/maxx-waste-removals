import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function AreasSection() {
  const areas = [
    "Leicester",
    "Coventry",
    "Birmingham",
  ];

  return (
    <Section>
      <Container>

        <div className="text-center">

          <div className="
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
            Areas We Cover
          </div>

          <h2 className="
            mt-6
            text-4xl
            font-extrabold
            md:text-5xl
          ">
            Local Waste Removal Across The Midlands
          </h2>

          <p className="
            mt-6
            text-lg
            text-gray-300
            max-w-3xl
            mx-auto
          ">
            Professional waste collection services covering
            Leicester, Coventry, and Birmingham.
          </p>

        </div>

        <div className="
          mt-12
          grid
          gap-8
          md:grid-cols-3
        ">

          {areas.map((area) => (
            <div
              key={area}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-10
                text-center
                backdrop-blur-sm
                transition
                hover:-translate-y-2
              "
            >
              <h3 className="text-2xl font-bold">
                {area}
              </h3>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}