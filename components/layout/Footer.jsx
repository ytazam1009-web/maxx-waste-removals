import Container from "@/components/layout/Container";
import { Globe, Phone, Mail } from "lucide-react";



export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">

      <Container>

        <div className="
          grid
          grid-cols-1
          gap-12
          md:grid-cols-4
        ">

          <div>

            <h3 className="text-2xl font-extrabold text-white">

              MAXX Waste Removals

            </h3>

            <p className="
              mt-4
              leading-relaxed
              text-gray-400
            ">

              Professional waste removal and rubbish
              collection services across Leicester,
              Coventry, and Birmingham.

            </p>

          </div>

          <div>

            <h4 className="mb-4 text-lg font-bold text-white">

              Services

            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>House Clearance</li>
              <li>Garden Waste</li>
              <li>Office Clearance</li>
              <li>Sofa Removal</li>

            </ul>

          </div>

          <div>

            <h4 className="mb-4 text-lg font-bold text-white">

              Areas

            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>Leicester</li>
              <li>Coventry</li>
              <li>Birmingham</li>

            </ul>

          </div>

          <div>

            <h4 className="mb-4 text-lg font-bold text-white">

              Follow Us

            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  text-gray-300
                  transition
                  hover:bg-white/10
                "
              >

                <Globe size={20} />

              </a>

              <a
                href="#"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  text-gray-300
                  transition
                  hover:bg-white/10
                "
              >

                <Phone size={20} />

              </a>

              <a
                href="#"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  text-gray-300
                  transition
                  hover:bg-white/10
                "
              >

                <Mail size={20} />

              </a>

            </div>

          </div>

        </div>

        <div className="
          mt-16
          border-t
          border-white/10
          pt-8
          text-center
          text-sm
          text-gray-500
        ">

          © 2026 MAXX Waste Removals. All rights reserved.

        </div>

      </Container>

    </footer>
  );
}