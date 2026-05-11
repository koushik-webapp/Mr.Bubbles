import Image from "next/image";

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
    <div className="relative overflow-hidden border-y border-[#B0C4D8] py-5" style={{ background: "#C9D8E8" }}>
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #C9D8E8, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, #C9D8E8, transparent)" }}
      />

      <div
        className="flex w-max animate-marquee"
        style={{ willChange: "transform" }}
      >
        {TRACK.map((brand, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center px-10">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={100}
              height={44}
              className="object-contain w-[100px] h-[44px]"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
