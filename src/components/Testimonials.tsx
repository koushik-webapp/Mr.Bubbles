'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import VideoSlider from "@/components/VideoSlider";

const EASE = [0.22, 1, 0.36, 1] as const;

const REVIEWS = [
  {
    name: "Tasha M.",
    location: "East Orange",
    initials: "TM",
    rating: 5,
    review: "I switched because of the price, but stayed because of how long it lasts. One bucket goes way further than the store bottles.",
  },
  {
    name: "Luis R.",
    location: "Newark",
    initials: "LR",
    rating: 5,
    review: "I do a lot of laundry for work — this saves me money every month. Strong clean and I use way less each load.",
  },
  {
    name: "María G.",
    location: "Bloomfield",
    initials: "MG",
    rating: 5,
    review: "For the size you get, it's honestly a steal. Good quality and I don't have to keep buying detergent every week.",
  },
  {
    name: "Darnell J.",
    location: "Newark",
    initials: "DJ",
    rating: 5,
    review: "I used to buy small bottles all the time. This right here lasts way longer and still cleans just as good, if not better.",
  },
  {
    name: "Keisha B.",
    location: "East Orange",
    initials: "KB",
    rating: 5,
    review: "With a big family, I needed something that stretches. This lasts me weeks and still gets tough stains out.",
  },
  {
    name: "Sofía L.",
    location: "Bloomfield",
    initials: "SL",
    rating: 5,
    review: "Good quality and you don't need a lot per wash. That's where the savings really add up.",
  },
  {
    name: "Andre W.",
    location: "Newark",
    initials: "AW",
    rating: 5,
    review: "I hit the gym every day — a lot of laundry. This big size plus the cleaning power? Definitely worth it.",
  },
  {
    name: "Yolanda C.",
    location: "East Orange",
    initials: "YC",
    rating: 5,
    review: "I like that I'm saving money without losing quality. My kids' clothes come out clean every time.",
  },
  {
    name: "Carlos P.",
    location: "Bloomfield",
    initials: "CP",
    rating: 5,
    review: "The quantity is what got me, but the performance is what kept me. Way better value than regular store brands.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#C9D8E8" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,86,219,0.05) 0%, transparent 65%)" }} />
      </div>

      <VideoSlider />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#1A56DB]" />
            <span className="text-[11px] font-semibold tracking-[0.35em] text-[#1A56DB] uppercase">
              Real Stories
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
            What Our Customers{" "}
            <span className="italic text-[#1A56DB]">Say</span>
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

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.11, ease: EASE }}
              className="relative rounded-3xl p-8 overflow-hidden group bg-white border border-[#1A56DB]/10 hover:border-[#1A56DB]/30 hover:shadow-lg transition-all duration-400"
              style={{ boxShadow: "0 2px 20px rgba(26,86,219,0.04)" }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(26,86,219,0.04) 0%, transparent 70%)" }} />

              {/* Top border glow on hover */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to right, transparent, #1A56DB, transparent)" }} />

              {/* Quote icon */}
              <div className="absolute top-7 right-8 text-[#1A56DB]/10 group-hover:text-[#1A56DB]/20 transition-colors duration-400">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#1A56DB] text-[#1A56DB]" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#4A5280] text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{r.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
                    boxShadow: "0 0 16px rgba(26,86,219,0.3)",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-[#0D1B4A] font-semibold text-sm">{r.name}</p>
                  <p className="text-[#4A5280] text-xs">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#1A56DB] text-[#1A56DB]" />
            ))}
          </div>
          <div>
            <span className="font-display font-black text-4xl text-[#1A56DB]">4.9</span>
            <span className="text-[#4A5280] text-sm ml-2">/ 5.0 average rating</span>
          </div>
          <div className="h-8 w-px bg-[#1A56DB]/20 hidden sm:block" />
          <p className="text-[#4A5280] text-sm">Based on <span className="text-[#0D1B4A] font-semibold">500+</span> verified reviews</p>
        </motion.div>
      </div>
    </section>
  );
}
