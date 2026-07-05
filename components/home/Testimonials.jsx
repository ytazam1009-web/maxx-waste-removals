"use client";
import { useEffect } from "react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";

import { Star } from "lucide-react";

export default function Testimonials() {
  useEffect(() => {
    const existingScript = document.querySelector(
      "script[src*='cdn.trustindex.io']"
    );

    // Create widget container BEFORE script runs
    const widget = document.getElementById("trustindex-widget");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.trustindex.io/loader.js?0c58fa775a5f865efd16eb517ac";
      script.defer = true;
      script.async = true;

      script.onload = () => {
        // Try forcing Trustindex refresh after load
        if (window.Trustindex && typeof window.Trustindex.init === "function") {
          window.Trustindex.init();
        }
      };

      document.body.appendChild(script);
    } else {
      // If script already exists, try re-init
      if (window.Trustindex && typeof window.Trustindex.init === "function") {
        window.Trustindex.init();
      }
    }
  }, []);

  return (
    <Section id="reviews">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
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
            "
            >
              Customer Reviews
            </div>

            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              Trusted By Local Customers
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Reliable waste removal services trusted by homeowners and
              businesses across Leicester, Coventry, and Birmingham.
            </p>
          </div>
        </FadeUp>

        {/* TRUSTINDEX REVIEWS */}
        <div className="mt-16">
          <div id="trustindex-widget"></div>
        </div>
      </Container>
    </Section>
  );
}