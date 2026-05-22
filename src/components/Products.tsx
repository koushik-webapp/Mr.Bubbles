'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Tide Ultra OXI",    category: "laundry",  subtitle: "Heavy Duty Laundry Detergent",   size: "5 GAL", price: 50, image: "/images/product-tide.png",  badge: "Best Seller", zoom: 1.75 },
  { id: 2, name: "Dawn Ultra",         category: "dishwash", subtitle: "Dishwash Gel Concentrate",        size: "5 GAL", price: 50, image: "/images/product-dawn.png",  badge: "New",         zoom: 1    },
  { id: 3, name: "Gain Original",      category: "laundry",  subtitle: "Fresh Scent Laundry Detergent",  size: "5 GAL", price: 50, image: "/images/product-gain.png",  badge: null,          zoom: 1.75 },
  { id: 4, name: "Downy April Fresh",  category: "laundry",  subtitle: "Fabric Softener & Conditioner",  size: "5 GAL", price: 50, image: "/images/product-downy.png", badge: null,          zoom: 1    },
  { id: 5, name: "Dawn Dishwash",      category: "dishwash", subtitle: "50% Less Scrubbing Formula",     size: "3 GAL", price: 50, image: "/images/product-dawn.png",  badge: null,          zoom: 1    },
  { id: 6, name: "Gain Ultra Clean",   category: "laundry",  subtitle: "Deep Clean Enzyme Formula",      size: "5 GAL", price: 50, image: "/images/product-gain.png",     badge: "Top Rated",   zoom: 1.75 },
  { id: 7, name: "Pine-Sol",           category: "cleaning", subtitle: "Multi-Surface Cleaner & Deodorizer", size: "5 GAL", price: 50, image: "/images/product-pinesol.png",  badge: null,          zoom: 1    },
  { id: 8, name: "Dreft",              category: "laundry",  subtitle: "Gentle Baby Laundry Detergent",  size: "5 GAL", price: 50, image: "/images/product-dreft.png",    badge: null,          zoom: 1    },
  { id: 9, name: "Free & Clear",       category: "laundry",  subtitle: "Sensitive Skin Laundry Detergent", size: "5 GAL", price: 50, image: "/images/product-freeclear.png", badge: null,         zoom: 1    },
  { id: 10, name: "Scented Beads",     category: "laundry",  subtitle: "Luxury Fragrance Booster Beads",   size: "24 OZ", price: 35, image: "/images/product-scented-beads.png", badge: "New",       zoom: 1    },
];

export default function Products() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setActiveIndex(Math.round(progress * (PRODUCTS.length - 1)));
  };

  return (
    <section
      id="products"
      className="relative py-12 md:py-28 overflow-hidden"
      style={{ background: "#C9D8E8" }}
    >
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#1A56DB]" />
            <span className="text-[11px] font-semibold tracking-[0.35em] text-[#1A56DB] uppercase">
              Handpicked For You
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#1A56DB]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[#0D1B4A] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Our Premium{" "}
            <span className="italic text-[#1A56DB]">Collection</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-px max-w-xs mx-auto"
            style={{ background: "linear-gradient(to right, transparent, #1A56DB, transparent)" }}
          />
        </div>


        {/* ── Mobile carousel (hidden sm+) ── */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="sm:hidden -mx-6 pl-5 pr-0 overflow-x-auto scrollbar-hide flex gap-3 snap-x snap-mandatory pb-3"
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-[72vw] rounded-2xl overflow-hidden bg-white border border-[#1A56DB]/10"
              style={{ boxShadow: "0 2px 16px rgba(26,86,219,0.06)" }}
            >
              {/* Product visual */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden bg-white">
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 z-10 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full ${
                      product.badge === "Best Seller"
                        ? "bg-[#1A56DB] text-white"
                        : product.badge === "New"
                        ? "bg-[#0D1B4A] text-white"
                        : "bg-[#1A56DB]/80 text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <div
                  className="relative w-32 h-40 shrink-0"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-bottom"
                    style={{ transform: `scale(${product.zoom})`, transformOrigin: "bottom center" }}
                    sizes="128px"
                  />
                </div>
                <div
                  className="absolute bottom-0 inset-x-0 h-8 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2.5">
                  <div>
                    <h3 className="font-display font-semibold text-[#0D1B4A] text-sm leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[#4A5280] text-[10px] mt-0.5 line-clamp-1">{product.subtitle}</p>
                  </div>
                  <span className="text-[9px] border border-[#1A56DB]/25 text-[#1A56DB] px-1.5 py-0.5 rounded-full shrink-0 ml-2">
                    {product.size}
                  </span>
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-[#1A56DB]">${product.price}</span>
                  <span className="text-[#A8A8A0] text-[10px] ml-1 line-through">
                    ${Math.round(product.price * 1.2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* Right breathing room */}
          <div className="shrink-0 w-4" aria-hidden="true" />
        </div>

        {/* Mobile counter */}
        <div className="sm:hidden flex justify-center mt-3">
          <span className="text-[11px] font-semibold text-[#1A56DB] tabular-nums tracking-widest">
            {activeIndex + 1} / {PRODUCTS.length}
          </span>
        </div>

        {/* ── Desktop grid (hidden on mobile) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-3xl overflow-hidden group bg-white border border-[#1A56DB]/10 hover:border-[#1A56DB]/30 hover:shadow-[0_20px_60px_rgba(26,86,219,0.1)] transition-all duration-[400ms]"
              style={{ boxShadow: "0 2px 20px rgba(26,86,219,0.04)" }}
            >
              {/* Product visual */}
              <div
                className="relative h-64 flex items-center justify-center overflow-hidden"
                style={{ background: "#FFFFFF" }}
              >
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 z-10 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                      product.badge === "Best Seller"
                        ? "bg-[#1A56DB] text-white"
                        : product.badge === "New"
                        ? "bg-[#0D1B4A] text-white"
                        : "bg-[#1A56DB]/80 text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="relative w-44 h-52 shrink-0 group-hover:scale-105 transition-transform duration-500" style={{ transformOrigin: "bottom center" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-bottom"
                    style={{ transform: `scale(${product.zoom})`, transformOrigin: "bottom center" }}
                    sizes="176px"
                  />
                </div>
                <div
                  className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-[#0D1B4A] text-lg leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[#4A5280] text-xs mt-0.5">{product.subtitle}</p>
                  </div>
                  <span className="text-[10px] border border-[#1A56DB]/25 text-[#1A56DB] px-2 py-1 rounded-full shrink-0 ml-2">
                    {product.size}
                  </span>
                </div>

                <div className="flex items-center">
                  <div>
                    <span className="font-display font-bold text-2xl text-[#1A56DB]">${product.price}</span>
                    <span className="text-[#A8A8A0] text-xs ml-1 line-through">
                      ${Math.round(product.price * 1.2)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

