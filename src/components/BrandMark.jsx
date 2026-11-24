import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BrandMark({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#home"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative z-[120] inline-flex items-center gap-2 sm:gap-2.5 select-none shrink-0"
    >
      <motion.svg
        viewBox="0 0 40 40"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 sm:w-9 sm:h-9 overflow-visible"
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.path
          d="M10 10L20 22"
          stroke="var(--ink)"
          strokeWidth="5"
          animate={{ opacity: hovered ? 0 : 1 }}
        />
        <motion.path
          d="M30 10L20 22V32"
          stroke="var(--ac)"
          strokeWidth="5"
          animate={{ opacity: hovered ? 0 : 1 }}
        />
        <motion.g animate={{ opacity: hovered ? 1 : 0 }}>
          <path
            d="M16 8H24M17.5 8V14.5L9.5 29.5A2 2 0 0 0 11.2 32.5H28.8A2 2 0 0 0 30.5 29.5L22.5 14.5V8"
            stroke="var(--ink)"
            strokeWidth="2.6"
          />
          <path
            d="M12.2 25.5C15.5 24 18.5 27 21.8 25.5C24.2 24.4 26.2 25 27.8 25.8L29.2 29.6A1.2 1.2 0 0 1 28.1 31.2H11.9A1.2 1.2 0 0 1 10.8 29.6Z"
            fill="var(--ac)"
          />
        </motion.g>
        <circle cx="29" cy="29" r="2.8" fill="var(--ac2)" />
      </motion.svg>
      <span className="font-bold text-[20px] sm:text-[22px] tracking-tight">
        yukt<span className="font-medium opacity-60"> labs</span>
      </span>
    </a>
  );
}
