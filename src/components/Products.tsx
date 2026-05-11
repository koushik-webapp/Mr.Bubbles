'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  { id: 1, name: "Tide Ultra OXI",    category: "laundry",  subtitle: "Heavy Duty Laundry Detergent",   size: "5 GAL", price: 50, image: "/images/product-tide.png",  badge: "Best Seller", zoom: 1.75 },
  { id: 2, name: "Dawn Ultra",         category: "dishwash", subtitle: "Dishwash Gel Concentrate",        size: "5 GAL", price: 50, image: "/images/product-dawn.png",  badge: "New",         zoom: 1    },
  { id: 3, name: "Gain Original",      category: "laundry",  subtitle: "Fresh Scent Laundry Detergent",  size: "5 GAL", price: 50, image: "/images/product-gain.png",  badge: null,          zoom: 1.75 },
  { id: 4, name: "Downy April Fresh",  category: "laundry",  subtitle: "Fabric Softener & Conditioner",  size: "5 GAL", price: 50, image: "/images/product-downy.png", badge: null,          zoom: 1    },
  { id: 5, name: "Dawn Dishwash",      category: "dishwash", subtitle: "50% Less Scrubbing Formula",     size: "3 GAL", price: 50, image: "/images/product-dawn.png",  badge: null,          zoom: 1    },
  { id: 6, name: "Gain Ultra Clean",   category: "laundry",  subtitle: "Deep Clean Enzyme Formula",      size: "5 GAL", price: 50, image: "/images/product-gain.png",  badge: "Top Rated",   zoom: 1.75 },
];

export default function Products() {

  return (
    <section
      id="products"
      className="relative py-28 overflow-hidden"
      style={{ background: "#C9D8E8" }}
    >
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
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


        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {PRODUCTS.map((product, i) => {
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-3xl overflow-hidden group bg-white border border-[#1A56DB]/10 hover:border-[#1A56DB]/30 hover:shadow-[0_20px_60px_rgba(26,86,219,0.1)] transition-all duration-400"
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
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <button className="px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase border border-[#1A56DB]/30 text-[#1A56DB] hover:bg-[#1A56DB] hover:text-white hover:border-[#1A56DB] transition-all duration-300">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}

