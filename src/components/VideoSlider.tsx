'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const VIDEOS = [
  {
    id: 1,
    src: "/videos/video-1.mp4",
    title: "5 Gallon Buckets",
    subtitle: "Detergent + Pump Included • $50",
  },
  {
    id: 2,
    src: "/videos/video-2.mp4",
    title: "E4T Supply",
    subtitle: "355 Main St, East Orange NJ",
  },
  {
    id: 3,
    src: "/videos/video-3.mp4",
    title: "East Orange NJ",
    subtitle: "Essentials Supply • $50",
  },
];

function VideoCard({ src, title, subtitle }: { src: string; title: string; subtitle: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const startPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.play();
    });
    setPlaying(true);
  };

  const stopPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  const handleClick = () => {
    playing ? stopPlay() : startPlay();
  };

  return (
    <div
      className="relative shrink-0 w-[200px] md:w-[220px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group bg-[#0D1B4A] select-none"
      onMouseEnter={startPlay}
      onMouseLeave={stopPlay}
      onClick={handleClick}
      style={{ boxShadow: "0 8px 32px rgba(13,27,74,0.25)" }}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
        playsInline
        loop
        muted
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Top gradient */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Play / Pause button */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center">
          {playing
            ? <Pause className="w-5 h-5 text-white fill-white" />
            : <Play  className="w-6 h-6 text-white fill-white ml-0.5" />
          }
        </div>
      </div>

      {/* Mobile tap hint */}
      <span className="absolute top-3 right-3 sm:hidden text-[10px] text-white/70 bg-black/40 rounded-full px-2 py-0.5 backdrop-blur-sm">
        tap
      </span>

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-white font-bold text-sm leading-tight">{title}</p>
        <p className="text-white/70 text-xs mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

export default function VideoSlider() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
      {/* Header row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-end justify-between mb-8"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#1A56DB]" />
            <span className="text-[11px] font-semibold tracking-[0.35em] text-[#1A56DB] uppercase">
              See It In Action
            </span>
          </div>
          <h2
            className="font-display font-bold text-[#0D1B4A]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            Watch the{" "}
            <span className="italic text-[#1A56DB]">Difference</span>
          </h2>
        </div>
        <span className="hidden sm:block text-[#4A5280] text-sm tracking-wide pb-1">
          Hover to watch →
        </span>
      </motion.div>

      {/* Video row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
        className="flex justify-center gap-4 overflow-x-auto pb-2 scrollbar-hide"
      >
        {VIDEOS.map((v) => (
          <VideoCard key={v.id} src={v.src} title={v.title} subtitle={v.subtitle} />
        ))}
      </motion.div>

      {/* Divider */}
      <div
        className="h-px max-w-xs mx-auto mt-16"
        style={{ background: "linear-gradient(to right, transparent, #1A56DB, transparent)" }}
      />
    </div>
  );
}
