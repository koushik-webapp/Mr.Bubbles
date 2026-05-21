'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import NavHeader from "@/components/ui/nav-header";

const EASE = [0.22, 1, 0.36, 1] as const;

const INSTAGRAM_URL = "https://www.instagram.com/e4t_bubbles/";
const WHATSAPP_URL  = "https://wa.me/18622202266";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.127 1.533 5.862L.057 24l6.305-1.654A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.031-1.378l-.36-.214-3.742.981.999-3.648-.235-.374A9.863 9.863 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z" />
    </svg>
  );
}

const NAV_LINKS = ["Home", "Products", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-2xl border-b border-[#C9A84C]/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <Image
              src="/images/mrbubbles_logo.jpg"
              alt="Mr. Bubbles Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            <NavHeader
              links={NAV_LINKS}
              onLinkClick={(link) => {
                const el = document.getElementById(link.toLowerCase());
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden md:flex text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden md:flex text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
            </a>

            <button
              aria-label="Search"
              className="hidden md:flex text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300 p-1"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#FAFAF8] flex flex-col items-center justify-center gap-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="font-display italic text-5xl text-[#1C1C1A] hover:text-[#C9A84C] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08 + 0.1, duration: 0.4 }}
              className="flex items-center gap-7 mt-4"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
