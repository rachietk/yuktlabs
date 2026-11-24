import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BrandLogo({ onClick }) {
  const [hovered, setHovered] = useState(false);
  const [autoMorph, setAutoMorph] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setAutoMorph(true);
      setTimeout(() => setAutoMorph(false), 2600);
    }, 900);

    const interval = setInterval(() => {
      setAutoMorph(true);
      setTimeout(() => setAutoMorph(false), 2600);
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearInterval(interval);
    };
  }, []);

  const isFlask = hovered || autoMorph;
  const spring = { duration: 0.72, ease: [0.22, 1, 0.36, 1] };

  return (
    <a
      href="#home"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Yukt Labs home"
      className="relative z-[120] inline-flex items-center gap-2.5 select-none"
    >
      <motion.svg
        viewBox="0 0 40 40"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 overflow-visible"
        animate={{ rotate: isFlask ? 360 : 0 }}
        transition={spring}
      >
        <motion.path
          d="M10 10L20 22"
          stroke="var(--ink)"
          strokeWidth="5"
          style={{ transformOrigin: "20px 20px" }}
          animate={{ opacity: isFlask ? 0 : 1, rotate: isFlask ? 90 : 0, scale: isFlask ? 0.65 : 1 }}
          transition={spring}
        />
        <motion.path
          d="M30 10L20 22V32"
          stroke="var(--ac)"
          strokeWidth="5"
          style={{ transformOrigin: "20px 20px" }}
          animate={{ opacity: isFlask ? 0 : 1, rotate: isFlask ? 90 : 0, scale: isFlask ? 0.65 : 1 }}
          transition={spring}
        />

        <motion.g
          style={{ transformOrigin: "20px 20px" }}
          animate={{ opacity: isFlask ? 1 : 0, rotate: isFlask ? 0 : -90, scale: isFlask ? 1 : 0.72 }}
          transition={spring}
        >
          <path
            d="M16 8H24M17.5 8V14.5L9.5 29.5A2 2 0 0 0 11.2 32.5H28.8A2 2 0 0 0 30.5 29.5L22.5 14.5V8"
            stroke="var(--ink)"
            strokeWidth="2.6"
          />
          <path
            d="M12.2 25.5C15.5 24 18.5 27 21.8 25.5C24.2 24.4 26.2 25 27.8 25.8L29.2 29.6A1.2 1.2 0 0 1 28.1 31.2H11.9A1.2 1.2 0 0 1 10.8 29.6Z"
            fill="var(--ac)"
            opacity="0.88"
          />
          {isFlask && (
            <>
              <motion.circle
                cx="17"
                cy="22"
                r="1.4"
                fill="var(--ac)"
                animate={{ y: [2, -11], opacity: [0, 0.95, 0], scale: [0.6, 1.1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <motion.circle
                cx="22.5"
                cy="20"
                r="1.7"
                fill="var(--ac2)"
                animate={{ y: [2, -11], opacity: [0, 0.95, 0], scale: [0.6, 1.1] }}
                transition={{ duration: 1.9, delay: 0.4, repeat: Infinity }}
              />
              <motion.circle
                cx="19.5"
                cy="17"
                r="1.2"
                fill="var(--ac)"
                animate={{ y: [2, -11], opacity: [0, 0.95, 0], scale: [0.6, 1.1] }}
                transition={{ duration: 1.5, delay: 0.8, repeat: Infinity }}
              />
            </>
          )}
        </motion.g>

        <motion.circle
          cx="29"
          cy="29"
          r="2.8"
          fill="var(--ac2)"
          animate={{ x: isFlask ? -9 : 0, y: isFlask ? -22 : 0, scale: isFlask ? 0.88 : 1 }}
          transition={spring}
        />
      </motion.svg>

      <b className="font-display text-[23px] font-bold tracking-tight">
        yukt<span className="font-medium text-mut"> labs</span>
      </b>
    </a>
  );
}
