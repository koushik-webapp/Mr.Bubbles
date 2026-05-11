'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    number: "01",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Formulated in certified labs with the finest ingredients. Every batch tested for safety and efficacy before reaching your home.",
  },
  {
    number: "02",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same Day Delivery",
    desc: "Order before 8 PM and receive your premium cleaning essentials at your doorstep the same day. No waiting, no hassle.",
  },
  {
    number: "03",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Reusable Buckets",
    desc: "Our 5-gallon buckets don't stop at laundry — reuse them to grow plants, store water, organise your garage, or carry supplies. Built to last, made to repurpose.",
  },
  {
    number: "04",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trusted by Hundreds",
    desc: "Over 500 happy customers across India trust MR. BUBBLES for their home cleaning needs. Join the family today.",
  },
];

export default function Features() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/features-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#1A56DB]" />
            <span className="text-[11px] font-semibold tracking-[0.35em] text-[#1A56DB] uppercase">
              The MR. BUBBLES Difference
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#1A56DB]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: EASE }}
            className="font-display font-bold text-[#0D1B4A]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
          >
            Why Choose{" "}
            <span className="italic text-[#1A56DB]">MR. BUBBLES</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-px max-w-xs mx-auto mt-6"
            style={{ background: "linear-gradient(to right, transparent, #1A56DB, transparent)" }}
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="relative rounded-3xl p-8 overflow-hidden group bg-white border border-[#1A56DB]/10 hover:border-[#1A56DB]/30 hover:shadow-lg transition-all duration-[400ms]"
              style={{ boxShadow: "0 2px 20px rgba(26,86,219,0.04)" }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(26,86,219,0.04) 0%, transparent 70%)" }} />

              {/* Top border glow on hover */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to right, transparent, #1A56DB, transparent)" }} />

              {/* Number watermark */}
              <span className="absolute -bottom-2 -right-1 font-display font-black text-[6rem] leading-none select-none text-[#1A56DB]/4 group-hover:text-[#1A56DB]/8 transition-colors duration-500">
                {f.number}
              </span>

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#1A56DB] transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(26,86,219,0.08)",
                  border: "1px solid rgba(26,86,219,0.2)",
                  boxShadow: "0 0 16px rgba(26,86,219,0.1)",
                }}>
                {f.icon}
              </div>

              <h3 className="font-display font-bold text-[#0D1B4A] text-xl mb-3 relative">{f.title}</h3>
              <p className="text-[#4A5280] text-sm leading-relaxed relative">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
