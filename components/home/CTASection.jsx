import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTASection() {
  return (
    <Section>

      <Container>

        <div className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-yellow-400
          px-8
          py-16
          text-center
          md:px-16
        ">

          <div className="
            absolute
            -top-10
            -right-10
            h-40
            w-40
            rounded-full
            bg-white/10
          " />

          <div className="
            absolute
            -bottom-10
            -left-10
            h-40
            w-40
            rounded-full
            bg-white/10
          " />

          <div className="relative z-10">

            <h2 className="
              text-4xl
              font-extrabold
              leading-tight
              text-black
              md:text-5xl
            ">

              Need Fast Waste Removal Services?

            </h2>

            <p className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-black/80
            ">

              Contact Maxx Waste Removals today for fast,
              affordable, and professional rubbish collection
              services across Leicester, Coventry, and Birmingham.

            </p>

            <div className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            ">

              <PrimaryButton href="/contact">
                Get Free Quote
              </PrimaryButton>

              <a
                href="tel:+441234567890"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-black/20
                  px-8
                  py-4
                  font-bold
                  text-black
                  transition
                  hover:bg-black/5
                "
              >

                Call Now

              </a>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}