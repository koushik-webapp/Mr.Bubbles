'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CATEGORIES = [
  {
    id: "liquid",
    label: "Liquid Detergent",
    desc: "Advanced liquid formulas that dissolve tough stains and leave laundry brilliantly clean with every wash.",
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2 L6 8 L14 8 Z" fill="currentColor" />
        <ellipse cx="10" cy="14" rx="5" ry="5.5" fill="currentColor" fillOpacity="0.85" />
        <ellipse cx="8.5" cy="12.5" rx="1.2" ry="2" fill="white" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    id: "powder",
    label: "Washing Powder",
    desc: "Deep-cleaning powder with active enzymes that penetrate fibers for outstanding stain removal.",
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="8" width="14" height="10" rx="2" fill="currentColor" fillOpacity="0.85" />
        <rect x="6.5" y="5" width="7" height="4" rx="1" fill="currentColor" />
        <rect x="3" y="11" width="14" height="1.5" fill="white" fillOpacity="0.12" />
      </svg>
    ),
  },
  {
    id: "softener",
    label: "Fabric Softener",
    desc: "Gentle conditioning softeners that leave fabrics irresistibly soft, fresh-smelling, and static-free.",
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 18 C5 18 2 14 2 10 C2 6 5 2 10 2 C15 2 18 6 18 10 C18 14 15 18 10 18Z"
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10 Q10 6.5 13 10 Q10 13.5 7 10Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "cleaning",
    label: "Cleaning Essentials",
    desc: "All-purpose cleaners formulated for every surface — floors, counters, glass, and more.",
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 17 L9.5 7 L10.5 7 L15 17" stroke="currentColor" strokeWidth="1.6"
          fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="16" width="12" height="2.5" rx="1.25" fill="currentColor" fillOpacity="0.85" />
        <line x1="10" y1="3" x2="10" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="2.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "buckets",
    label: "Buckets & Containers",
    desc: "Heavy-duty containers and buckets built to last — available in multiple sizes for every cleaning task.",
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.5 8 L5.5 17 Q5.5 18 6.5 18 L13.5 18 Q14.5 18 14.5 17 L15.5 8Z"
          fill="currentColor" fillOpacity="0.85" />
        <rect x="3.5" y="6" width="13" height="2.5" rx="1.25" fill="currentColor" />
        <path d="M7.5 6 Q10 2 12.5 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <rect x="3.5" y="9.5" width="13" height="1" fill="white" fillOpacity="0.15" />
      </svg>
    ),
  },
];

export default function BetterProducts() {
  const [active, setActive] = useState("liquid");
  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <section className="relative bg-[#F5F2ED] py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[55%] h-full bg-[radial-gradient(ellipse_at_80%_40%,rgba(201,168,76,0.07)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gradient-to-r from-[#C9A84C] to-transparent" />
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
                Our Range
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="font-display font-black leading-[0.92] text-[#1C1C1A] mb-5"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
            >
              Better Products.<br />
              <span className="italic gold-text">Better Living.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="text-[#6B6B62] text-[0.9rem] leading-relaxed max-w-[380px] mb-10"
            >
              From daily cleaning to deep cleaning, we have the right solution to keep every corner of your home spotless and fresh.
            </motion.p>

            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              className="space-y-1.5 mb-10"
            >
              {CATEGORIES.map(({ id, label, Icon }) => {
                const isActive = id === active;
                return (
                  <button
                    key={id}
                    onClick={() => setActive(id)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? "bg-[#C9A84C]/10 border border-[#C9A84C]/35"
                        : "border border-transparent hover:bg-[#EAE6E0] hover:border-[#C9A84C]/15"
                    }`}
                  >
                    <span
                      className={`shrink-0 transition-colors duration-200 ${
                        isActive ? "text-[#C9A84C]" : "text-[#B0AEA8]"
                      }`}
                    >
                      <Icon />
                    </span>
                    <span
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                        isActive ? "text-[#1C1C1A]" : "text-[#8A8A82]"
                      }`}
                    >
                      {label}
                    </span>
                    {isActive && (
                      <ChevronRight className="ml-auto w-4 h-4 text-[#C9A84C] shrink-0" />
                    )}
                  </button>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              <button className="btn-gold group flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* ── Right — Product image ── */}
          <div className="relative flex items-center justify-center min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -16 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative w-full max-w-[500px] aspect-square"
              >
                <Image
                  src="/images/hero-products.png"
                  alt={current.label}
                  fill
                  className="object-contain drop-shadow-[0_24px_64px_rgba(201,168,76,0.2)]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating desc card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active + "-desc"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: 0.1, ease: EASE }}
                className="absolute bottom-[6%] left-[4%] max-w-[200px] bg-white border border-[#C9A84C]/25 rounded-2xl px-4 py-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                <p className="text-[10px] text-[#C9A84C] uppercase tracking-wider mb-1 font-semibold">
                  {current.label}
                </p>
                <p className="text-[11px] text-[#6B6B62] leading-snug">{current.desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Decorative ring */}
            <div className="absolute w-[460px] h-[460px] rounded-full border border-[#C9A84C]/12 animate-spin-slow pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
