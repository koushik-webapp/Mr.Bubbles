
const BRANDS = [
  { src: "/images/logo-tide.jpg",     alt: "Tide"     },
  { src: "/images/logo-gain.jpg",     alt: "Gain"     },
  { src: "/images/logo-downy.jpg",    alt: "Downy"    },
  { src: "/images/logo-dawn.jpg",     alt: "Dawn"     },
  { src: "/images/logo-fabuloso.jpg", alt: "Fabuloso" },
];

const TRACK = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function BrandStrip() {
  return (
    <div
      className="relative overflow-hidden py-8"
      style={{
        background: "linear-gradient(160deg, #04102A 0%, #0D1B4A 35%, #11256B 55%, #0D1B4A 75%, #04102A 100%)",
        borderTop: "1px solid rgba(26,86,219,0.22)",
        borderBottom: "1px solid rgba(26,86,219,0.22)",
      }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 5%, rgba(120,175,255,0.75) 50%, transparent 95%)" }}
      />
      {/* Bottom shimmer line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 5%, rgba(80,140,255,0.4) 50%, transparent 95%)" }}
      />

      {/* Central ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 160% at 50% 50%, rgba(26,86,219,0.14) 0%, transparent 68%)" }}
      />

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #04102A 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, #04102A 0%, transparent 100%)" }}
      />

      {/* Scrolling track */}
      <div className="flex w-max animate-marquee" style={{ willChange: "transform" }}>
        {TRACK.map((brand, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center px-6">
            <div
              className="group flex items-center justify-center px-6 py-3 rounded-2xl transition-all duration-500 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 4px 28px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.src}
                alt={brand.alt}
                width={100}
                height={44}
                className="object-contain w-[96px] h-[42px] transition-all duration-500 group-hover:scale-110"
                style={{
                  mixBlendMode: "screen",
                  filter: "brightness(1.08) saturate(1.15) contrast(1.05)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
