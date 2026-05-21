'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;


const FEATURES = [
  {
    title: "EASY TO USE",
    desc: "Smooth pumping every time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 11V6a2 2 0 0 1 4 0v5" />
        <path d="M13 11V8a2 2 0 0 1 4 0v6a6 6 0 0 1-6 6H9a5 5 0 0 1-5-5v-3a2 2 0 0 1 4 0" />
      </svg>
    ),
  },
  {
    title: "HYGIENIC",
    desc: "Keeps your hands clean",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "MESS-FREE",
    desc: "Controlled pouring with no spills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
];

export default function FreePump() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: "linear-gradient(160deg, #04102A 0%, #0D1B4A 40%, #11256B 58%, #0D1B4A 78%, #04102A 100%)",
        borderTop: "1px solid rgba(26,86,219,0.18)",
        borderBottom: "1px solid rgba(26,86,219,0.18)",
      }}
    >
      {/* Ambient top shimmer */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 10%, rgba(100,160,255,0.6) 50%, transparent 90%)" }}
      />
      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 35% 50%, rgba(26,86,219,0.18) 0%, transparent 65%)" }}
      />
      {/* Right-side pump glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 45% 70% at 80% 50%, rgba(59,130,246,0.12) 0%, transparent 65%)" }}
      />
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center lg:min-h-[700px]">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "linear-gradient(135deg, #1A56DB 0%, #2563EB 100%)",
                boxShadow: "0 0 24px rgba(26,86,219,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white shrink-0">
                <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-white">
                Included with Every Bucket
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="font-display leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              <span className="text-white">FREE </span>
              <span style={{ color: "#3B82F6" }}>PUMP</span>
            </motion.h2>

            {/* Divider with heart */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-3 mb-5 w-full max-w-xs mx-auto lg:mx-0"
            >
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.5))" }} />
              <svg viewBox="0 0 24 24" fill="#3B82F6" className="w-4 h-4 shrink-0">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(59,130,246,0.5))" }} />
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22, ease: EASE }}
              className="text-xl md:text-2xl font-light text-white/80 mb-8 tracking-wide"
            >
              Easy.{" "}
              <span className="text-[#3B82F6] font-semibold">Clean.</span>{" "}
              Convenient.
            </motion.p>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="grid grid-cols-3 gap-2 md:gap-3 w-full mb-8"
            >
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.32 + i * 0.08, ease: EASE }}
                  className="flex flex-col items-center text-center gap-2 py-4 px-2 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-[#3B82F6]"
                    style={{
                      border: "1.5px solid rgba(59,130,246,0.5)",
                      background: "rgba(59,130,246,0.08)",
                      boxShadow: "0 0 14px rgba(59,130,246,0.2)",
                    }}
                  >
                    {f.icon}
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-4 self-center" style={{ background: "rgba(59,130,246,0.3)" }} />

                  <div>
                    <p className="text-[#3B82F6] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">
                      {f.title}
                    </p>
                    <p className="text-white/55 text-[9px] md:text-[10px] leading-tight">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quality badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.52, ease: EASE }}
              className="flex items-center gap-4 px-5 py-3.5 rounded-2xl w-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(59,130,246,0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Pump icon circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
                  boxShadow: "0 0 20px rgba(26,86,219,0.5)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M7 3h10M9 3v3a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V3" />
                  <path d="M12 9v12" />
                  <circle cx="12" cy="19" r="2" fill="white" stroke="none" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-[0.1em] uppercase">
                  Premium Quality Pump
                </p>
                <p className="text-[#3B82F6] text-[10px] tracking-[0.2em] uppercase mt-0.5">
                  Durable&nbsp;•&nbsp;Reliable&nbsp;•&nbsp;Built to Last
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Pump image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="relative flex items-center justify-center lg:justify-end animate-float lg:self-stretch"
          >
            {/* Subtle blue glow behind pump */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{ background: "radial-gradient(ellipse 70% 70% at 60% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[600px]">
              <Image
                src="/images/pump-standalone.png"
                alt="Free dispenser pump included with every bucket"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom shimmer */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 10%, rgba(59,130,246,0.4) 50%, transparent 90%)" }}
      />
    </section>
  );
}
