'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const INSTAGRAM_URL = "https://www.instagram.com/e4t_bubbles/";
const WHATSAPP_URL  = "https://wa.me/18622202266";
const PHONE_DISPLAY = "+1 (862) 220-2266";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0D1B4A 0%, #0A1535 50%, #071028 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)" }} />
      </div>

      {/* Top divider */}
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(26,86,219,0.6), rgba(59,130,246,0.4), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center gap-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl opacity-40"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6), transparent)" }} />
              <Image
                src="/images/mrbubbles_logo.jpg"
                alt="MR. BUBBLES"
                width={110}
                height={110}
                className="relative rounded-full object-contain ring-2 ring-white/10"
              />
            </div>
            <div className="text-center">
              <p className="font-display text-white text-2xl tracking-[0.2em]">MR. BUBBLES</p>
              <p className="text-[#5A7ABB] text-xs tracking-widest uppercase mt-1">Premium Cleaning Solutions</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)" }} />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-[#7A96CC] text-center text-sm leading-relaxed max-w-sm"
          >
            Clean smarter. Buy bigger. Save more.<br />
            Wholesale detergent delivered to your door.
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 hover:border-[#E1306C]/50 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </div>
              <span className="text-sm text-[#7A96CC] group-hover:text-white transition-colors duration-300">@e4t_bubbles</span>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 hover:border-[#25D366]/50 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "#25D366" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-sm text-[#7A96CC] group-hover:text-white transition-colors duration-300">{PHONE_DISPLAY}</span>
            </a>
          </motion.div>

          {/* Bottom divider */}
          <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="text-[#3A5080] text-xs tracking-wider text-center"
          >
            © {new Date().getFullYear()} MR. BUBBLES. All rights reserved.
          </motion.p>

        </div>
      </div>
    </footer>
  );
}
