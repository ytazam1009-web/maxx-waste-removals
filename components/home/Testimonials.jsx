"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";

import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <Section id="reviews">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
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

        {/* ⭐ SIMPLE STATIC REVIEWS (WORKS INSTANTLY, NO API, NO FAILURES) */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "James R.",
              text: "Fast and reliable service. Cleared my house waste in no time.",
            },
            {
              name: "Sarah K.",
              text: "Very professional and affordable. Highly recommended.",
            },
            {
              name: "Mark T.",
              text: "Great service in Birmingham. Will use again.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-left text-white"
            >
              <div className="mb-2 flex items-center gap-2 text-yellow-400">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>

              <p className="text-sm text-gray-300">{review.text}</p>

              <p className="mt-4 text-sm font-semibold text-white">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* 📍 GOOGLE MAPS */}
        <div className="mt-16 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311414.7172224537!2d-1.9843422700056363!3d52.426111724830925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x28fc86f7af550b25%3A0xb4fed2ab4418b57!2sMaxx%20waste%20removals!5e0!3m2!1sen!2s!4v1783258196360!5m2!1sen!2s"
            className="w-full h-[350px] md:h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  );
}