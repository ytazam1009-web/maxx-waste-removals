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
    city: city, // Automatically uses the city from the page
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
      // FIXED PATH: Matches your file location
      const res = await fetch("/api/contacts/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", city: city, message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <Section id="contact">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400 uppercase tracking-widest">
                Free Quote
              </div>
              <h2 className="text-4xl font-extrabold text-white md:text-5xl uppercase tracking-tighter">
                Request A Free Quote
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Get a fast, no-obligation quote for waste removal in <span className="text-yellow-400 font-bold">{city}</span>.
              </p>
            </div>

            {status === "success" && (
              <div className="mt-6 rounded-2xl bg-green-500/10 border border-green-500/30 p-4 text-green-300 text-center font-bold">
                ✅ Message sent successfully! We’ll contact you within minutes.
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-red-300 text-center font-bold">
                ❌ Something went wrong. Please check your internet or try again.
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
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-yellow-400 outline-none transition-colors"
                />
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-yellow-400 outline-none transition-colors"
                />
              </div>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-yellow-400 outline-none transition-colors"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your waste removal requirements..."
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-yellow-400 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black text-[#07152f] uppercase tracking-wider transition hover:scale-[1.02] disabled:opacity-60 shadow-xl shadow-yellow-400/20"
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
