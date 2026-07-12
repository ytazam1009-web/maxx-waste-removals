"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";
import { Star, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [reviewPageUrl, setReviewPageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        const data = await res.json();

        setReviews(data?.reviews || []);
        setReviewPageUrl(data?.reviewPageUrl || "");
      } catch (err) {
        console.error("Google reviews error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <Section id="reviews">
      <Container>
        {/* HEADER */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Google Reviews
            </div>

            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              Trusted By Local Customers
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Real feedback from our customers across the UK. We take pride in
              our 5-star waste removal service.
            </p>
          </div>
        </FadeUp>

        {/* REVIEWS */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {loading ? (
            <p className="w-full text-center text-gray-400">
              Loading reviews...
            </p>
          ) : reviews.length === 0 ? (
            <p className="w-full text-center text-gray-400">
              No reviews found. Check API setup.
            </p>
          ) : (
            reviews.map((r, i) => (
              <a
                key={i}
                href={r.reviewUrl || reviewPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full md:basis-[31%] flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-yellow-400/30"
              >
                {/* External Link Icon */}
                <div className="absolute right-4 top-4 text-gray-500 group-hover:text-yellow-400 transition-colors">
                  <ExternalLink size={14} />
                </div>

                {/* Stars */}
                <div className="mb-4 flex text-yellow-400">
                  {Array.from({ length: r.rating || 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Review */}
                <p className="flex-grow text-sm italic leading-relaxed text-gray-300">
                  "{r.text}"
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  {r.authorPhoto ? (
                    <img
                      src={r.authorPhoto}
                      alt={r.authorName}
                      className="h-10 w-10 rounded-full border border-white/20"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/20 text-xs font-bold text-yellow-400">
                      {r.authorName?.charAt(0) || "G"}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {r.authorName}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Verified Google Reviewer
                    </p>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* CTA */}
        {!loading && reviews.length > 0 && (
          <div className="mt-12 text-center">
            <a
              href={reviewPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 underline underline-offset-4 transition-colors hover:text-yellow-400"
            >
              View all reviews on Google Maps
            </a>
          </div>
        )}
      </Container>
    </Section>
  );
}