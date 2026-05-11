"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type Position = { left: number; width: number; opacity: number };

type NavHeaderProps = {
  links: string[];
  onLinkClick?: (link: string) => void;
};

function NavHeader({ links, onLinkClick }: NavHeaderProps) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-[#C9A84C]/30 bg-white/10 backdrop-blur-sm p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {links.map((link) => (
        <Tab key={link} setPosition={setPosition} onClick={() => onLinkClick?.(link)}>
          {link}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] uppercase text-[#6B6B62] hover:text-white transition-colors duration-200 mix-blend-normal md:px-5 md:py-2"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => (
  <motion.li
    animate={position}
    className="absolute z-0 h-7 rounded-full bg-[#0D1B4A] md:h-8"
  />
);

export default NavHeader;
