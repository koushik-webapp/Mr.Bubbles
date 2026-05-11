'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Star, Tag } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Bubble = {
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  blur: number;
  opacity: number;
  cls: string;
  delay: string;
};

const BUBBLES: Bubble[] = [
  { size: 90,  top: "6%",    left: "3%",   blur: 2, opacity: 0.35, cls: "animate-float",   delay: "0s"   },
  { size: 36,  top: "22%",   left: "22%",  blur: 0, opacity: 0.45, cls: "animate-float-b", delay: "0.5s" },
  { size: 130, top: "50%",   left: "0%",   blur: 3, opacity: 0.20, cls: "animate-float-c", delay: "1s"   },
  { size: 24,  top: "72%",   left: "18%",  blur: 0, opacity: 0.50, cls: "animate-float-d", delay: "0.8s" },
  { size: 52,  bottom: "9%", left: "11%",  blur: 1, opacity: 0.30, cls: "animate-float",   delay: "1.9s" },
  { size: 22,  top: "30%",   right: "13%", blur: 0, opacity: 0.40, cls: "animate-float-b", delay: "0.3s" },
  { size: 104, top: "7%",    right: "5%",  blur: 2, opacity: 0.18, cls: "animate-float-c", delay: "1.4s" },
  { size: 38,  top: "64%",   right: "17%", blur: 0, opacity: 0.35, cls: "animate-float-d", delay: "0.6s" },
  { size: 58,  top: "44%",   left: "44%",  blur: 1, opacity: 0.22, cls: "animate-float",   delay: "1.6s" },
  { size: 18,  top: "78%",   right: "36%", blur: 0, opacity: 0.55, cls: "animate-float-b", delay: "2.1s" },
  { size: 42,  top: "34%",   left: "36%",  blur: 0, opacity: 0.25, cls: "animate-float-c", delay: "2.5s" },
  { size: 16,  bottom: "5%", right: "24%", blur: 0, opacity: 0.45, cls: "animate-float-d", delay: "1.2s" },
];

const TRUST = [
  { icon: Truck, text: "Same Day Shipping" },
  { icon: Star,  text: "Top Brands"        },
  { icon: Tag,   text: "Wholesale Deals"   },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 50%, #EDF1FA 100%)" }}
    >

      {/* ── Image — right 62% of screen, fully contained, zoomed out ── */}
      <div className="absolute top-0 right-0 bottom-0 w-[62%] pointer-events-none z-[1]">
        <Image
          src="/images/hero-products.png"
          alt="Mr. Bubbles Premium Cleaning Products"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Left fade — stops cleanly before the image starts */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "linear-gradient(to right, #F5F8FF 0%, #F5F8FF 30%, rgba(245,248,255,0.4) 37%, transparent 43%)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 inset-x-0 h-36 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(to bottom, rgba(245,248,255,0.80), transparent)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(to top, rgba(245,248,255,0.90), transparent)" }}
      />

      {/* ── Floating bubbles ── */}
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full pointer-events-none ${b.cls}`}
          style={{
            width:  b.size,
            height: b.size,
            top:    b.top,
            bottom: b.bottom,
            left:   b.left,
            right:  b.right,
            opacity: b.opacity,
            animationDelay: b.delay,
            filter: b.blur ? `blur(${b.blur}px)` : undefined,
            background:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.75) 0%, rgba(59,130,246,0.08) 55%, transparent 100%)",
            border: "1.5px solid rgba(59,130,246,0.22)",
            zIndex: 3,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 min-h-screen flex flex-col">

        {/* Text block — left-anchored */}
        <div className="flex-1 flex flex-col justify-center pt-28 pb-8">
          <div className="w-full max-w-[580px]">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-display font-black leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.8vw, 5rem)" }}
            >
              <span className="block text-[#0D1B4A]">Clean Smarter.</span>
              <span className="block text-[#1A56DB]">Buy Bigger.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.19, ease: EASE }}
              className="text-[#4A5280] text-[1rem] leading-relaxed mb-8 max-w-[420px]"
            >
              Premium detergents, wholesale prices, fast delivery.
              <br />Your business, our priority.
            </motion.p>

            {/* Trust icons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: EASE }}
              className="flex flex-wrap gap-5 mb-10"
            >
              {TRUST.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#EEF3FF]/90 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#1A56DB]" />
                  </div>
                  <span className="text-[12px] font-medium text-[#3A3E60] tracking-wide">{text}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>

      {/* Bottom-right location tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        className="absolute bottom-7 right-8 z-10 flex items-center gap-2"
      >
        <div className="h-px w-6 bg-[#1A56DB]/40" />
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#4A5280] uppercase">
          Est. · East Orange, New Jersey
        </span>
      </motion.div>
    </section>
  );
}
