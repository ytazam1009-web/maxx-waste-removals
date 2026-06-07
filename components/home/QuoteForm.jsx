"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 
  // null | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <Section>
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">

            {/* HEADER */}
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
                Free Quote
              </div>

              <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                Request A Free Waste Removal Quote
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Fill out the form and we’ll contact you within minutes.
              </p>
            </div>

            {/* STATUS MESSAGES */}
            {status === "success" && (
              <div className="mt-6 rounded-2xl bg-green-500/10 border border-green-500/30 p-4 text-green-300 text-center">
                ✅ Message sent successfully! We’ll contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-red-300 text-center">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-12 grid gap-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400"
                />
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your waste removal requirements..."
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get Free Quote"}
              </button>

            </form>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}