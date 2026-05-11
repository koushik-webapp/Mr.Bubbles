"use client";

import Image from "next/image";

export default function ValueComparison() {
  return (
    <section
      className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#C9D8E8" }}
    >
      <Image
        src="/images/value-comparison.png"
        alt="Get More. Save More. See the difference 640oz (5 GAL) makes."
        fill
        className="object-contain"
        priority
      />
    </section>
  );
}
