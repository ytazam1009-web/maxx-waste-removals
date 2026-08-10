"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/ui/FadeUp";

export default function QuoteForm({ city = "General" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: city,
    postcode: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");

        setForm({
          name: "",
          phone: "",
          email: "",
          city: city,
          postcode: "",
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
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-yellow-400">
                Free Quote
              </div>

              <h2 className="text-4xl font-black text-white md:text-5xl">
                Request A Free Quote
              </h2>

              <p className="mt-4 text-lg text-gray-400">
                Get a fast, no-obligation quote for waste removal in {city}.
              </p>
            </div>

            {status === "success" && (
              <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center font-bold text-green-300">
                ✅ Message sent successfully! We’ll contact you within minutes.
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-center font-bold text-red-300">
                ❌ Something went wrong. Please check your internet or try
                again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-12 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  autoComplete="name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-colors focus:border-yellow-400"
                />

                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-colors focus:border-yellow-400"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-colors focus:border-yellow-400"
                />

                <input
                  required
                  type="text"
                  name="postcode"
                  value={form.postcode}
                  onChange={handleChange}
                  placeholder="Postcode"
                  autoComplete="postal-code"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-colors focus:border-yellow-400"
                />
              </div>

              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your waste removal requirements..."
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-colors focus:border-yellow-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black uppercase tracking-wider text-[#07152f] shadow-xl shadow-yellow-400/20 transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get Free Quote Now"}
              </button>
            </form>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}