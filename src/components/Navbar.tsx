'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import NavHeader from "@/components/ui/nav-header";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = ["Home", "Products", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <button
              aria-label="Search"
              className="hidden md:flex text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <button
              aria-label="Toggle menu"
              className="md:hidden text-[#6B6B62] hover:text-[#C9A84C] transition-colors duration-300"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
