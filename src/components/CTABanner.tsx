'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F0EDE8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-0 inset-x-0 h-px divider-gold" />
      <div className="absolute bottom-0 inset-x-0 h-px divider-gold" />

      {/* Gold grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse-gold" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C9A84C] uppercase">
              Exclusive Offer
            </span>
          </div>

          <h2
            className="font-display font-black text-[#1C1C1A] mb-4 leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Get{" "}
            <span className="shimmer-gold">20% Off</span>
            <br />
            <span className="italic">Your First Order</span>
          </h2>

          <p className="text-[#6B6B62] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Subscribe to our newsletter and receive exclusive deals, early access to new products,
            and expert cleaning tips delivered straight to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl px-8 py-5 max-w-sm mx-auto"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#9A7A2E] flex items-center justify-center">
                <Check className="w-4 h-4 text-[#1A1612]" />
              </div>
              <div className="text-left">
                <p className="text-[#1C1C1A] font-semibold text-sm">You&apos;re in!</p>
                <p className="text-[#6B6B62] text-xs">Check your inbox for your discount code.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white border border-[#D8D4CE] focus:border-[#C9A84C]/50 text-[#1C1C1A] placeholder-[#A8A8A0] text-sm px-5 py-4 rounded-full outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-gold group flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-[#9A9A92] text-xs mt-5">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
