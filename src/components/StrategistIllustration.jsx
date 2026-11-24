import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { ARCH_SERVICES } from "../data/siteData";

export default function StrategistIllustration() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  const angleDeg = useMotionValue(0);
  const rotatingGroupRef = useRef(null);

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000;
    const vel = smoothVelocity.get();

    // Degrees per second clockwise; scroll velocity smoothly counter-rotates
    const baseClockwiseDegPerSec = 15;
    const scrollCounterInfluence = vel * 0.065;
    const effectiveSpeed = baseClockwiseDegPerSec - scrollCounterInfluence;

    let next = (angleDeg.get() + effectiveSpeed * dt) % 360;
    if (next < 0) next += 360;
    angleDeg.set(next);

    if (rotatingGroupRef.current) {
      rotatingGroupRef.current.setAttribute(
        "transform",
        `rotate(${next.toFixed(2)} 270 255)`
      );
    }
  });

  // 2 repetitions fit cleanly around the full 360° circle (r = 168, circumference ≈ 1055px)
  const fullCircleTicker = `${ARCH_SERVICES}${ARCH_SERVICES}`;

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[540px] mx-auto select-none px-2 sm:px-0">
      <svg
        viewBox="0 0 540 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Illustrated strategist with rotating service arch and chemistry molecular bonds"
      >
        <defs>
          {/* Full closed 360° circle centered at (270, 255) with radius 168 */}
          <path
            id="serviceCircleRing"
            d="M 270,87 A 168,168 0 1,1 269.9,87"
          />
          {/* Stationary clip window showing only the upper arch */}
          <clipPath id="upperArchClip">
            <rect x="45" y="25" width="450" height="238" />
          </clipPath>
          <linearGradient
            id="screenGlowGrad"
            x1="270"
            y1="330"
            x2="270"
            y2="235"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Background floating organic shapes */}
        <motion.ellipse
          cx="155"
          cy="132"
          rx="54"
          ry="28"
          transform="rotate(-34 155 132)"
          fill="#F08A5D"
          opacity="0.88"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M195 182 C110 185, 80 265, 118 328 C145 370, 215 362, 245 315 Z"
          fill="#F08A5D"
          opacity="0.85"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="316"
          cy="188"
          r="116"
          fill="#9EC59E"
          opacity="0.82"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="382"
          cy="288"
          r="66"
          fill="#F6E2A5"
          opacity="0.88"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Chemistry molecular bonds */}
        <g
          opacity="0.8"
          stroke="var(--ink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g transform="translate(56, 62)">
            <polygon
              points="26,0 52,15 52,45 26,60 0,45 0,15"
              strokeWidth="2"
              fill="none"
            />
            <line x1="26" y1="7" x2="45" y2="18" strokeWidth="1.8" stroke="var(--ac)" />
            <line x1="45" y1="42" x2="26" y2="53" strokeWidth="1.8" stroke="var(--ac)" />
            <line x1="7" y1="42" x2="7" y2="18" strokeWidth="1.8" stroke="var(--ac)" />
            <line x1="52" y1="15" x2="74" y2="4" strokeWidth="2" />
            <line x1="26" y1="60" x2="26" y2="82" strokeWidth="2" />
            <circle cx="77" cy="2" r="4.5" fill="var(--ac)" stroke="none" />
            <circle cx="26" cy="86" r="4" fill="var(--ac2)" stroke="none" />
            <text
              x="76"
              y="-5"
              fill="var(--ink)"
              stroke="none"
              fontSize="10"
              fontWeight="700"
              fontFamily="Space Grotesk, sans-serif"
            >
              CH₃
            </text>
          </g>

          <g transform="translate(414, 54)">
            <line x1="0" y1="36" x2="28" y2="18" strokeWidth="2" />
            <line x1="28" y1="18" x2="58" y2="32" strokeWidth="2" />
            <line x1="58" y1="32" x2="82" y2="12" strokeWidth="2" />
            <line x1="62" y1="37" x2="86" y2="17" strokeWidth="1.8" stroke="var(--ac)" />
            <line x1="58" y1="32" x2="64" y2="62" strokeWidth="2" />
            <circle cx="28" cy="18" r="4.5" fill="var(--ac)" stroke="none" />
            <circle cx="85" cy="13" r="4.5" fill="var(--ac2)" stroke="none" />
            <circle cx="64" cy="65" r="4" fill="var(--ink)" stroke="none" />
            <text
              x="92"
              y="15"
              fill="var(--ink)"
              stroke="none"
              fontSize="10"
              fontWeight="700"
              fontFamily="Space Grotesk, sans-serif"
            >
              Yk₂
            </text>
          </g>

          <g transform="translate(44, 342)">
            <line x1="0" y1="22" x2="30" y2="8" strokeWidth="2" />
            <line x1="30" y1="8" x2="56" y2="26" strokeWidth="2" />
            <line x1="30" y1="8" x2="30" y2="-16" strokeWidth="2" stroke="var(--ac)" />
            <circle cx="0" cy="22" r="4" fill="var(--ac2)" stroke="none" />
            <circle cx="30" cy="8" r="5" fill="var(--ac)" stroke="none" />
            <circle cx="30" cy="-19" r="3.5" fill="var(--ink)" stroke="none" />
          </g>

          <g transform="translate(432, 338)">
            <polyline points="0,18 24,4 48,18 48,46 24,60" strokeWidth="2" fill="none" />
            <line x1="48" y1="18" x2="70" y2="6" strokeWidth="2" stroke="var(--ac)" />
            <circle cx="24" cy="4" r="4.5" fill="var(--ac)" stroke="none" />
            <circle cx="72" cy="5" r="4" fill="var(--ac2)" stroke="none" />
          </g>
        </g>

        {/* Stationary upper-arch clip housing a full 360° rotating text ring */}
        <g clipPath="url(#upperArchClip)">
          <g ref={rotatingGroupRef}>
            <text
              fill="var(--ink)"
              fontSize="11.2"
              fontWeight="700"
              letterSpacing="1.6"
              fontFamily="Space Grotesk, system-ui, sans-serif"
            >
              <textPath href="#serviceCircleRing" startOffset="0%">
                {fullCircleTicker}
              </textPath>
            </text>
          </g>
        </g>

        {/* Strategist Character & Floating App Badges */}
        <g>
          <path d="M252 214 H288 V248 H252 Z" fill="#F2A98A" />
          <path d="M252 214 Q270 226 288 214 V224 Q270 234 252 224 Z" fill="#DF8E6F" />
          <path d="M172 346 C174 282, 210 246, 252 242 H288 C330 246, 366 282, 368 346 L378 425 H162 Z" fill="#7D8693" />
          <path d="M225 238 C236 220, 304 220, 315 238 C322 252, 304 275, 270 278 C236 275, 218 252, 225 238 Z" fill="#66707D" />
          <path d="M236 234 C248 223, 292 223, 304 234 C298 258, 242 258, 236 234 Z" fill="#3B424C" />
          <line x1="255" y1="264" x2="255" y2="306" stroke="#C8E1F5" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="285" y1="264" x2="285" y2="306" stroke="#C8E1F5" strokeWidth="3.2" strokeLinecap="round" />
          <polygon points="248,332 292,332 308,266 232,266" fill="url(#screenGlowGrad)" />
          <circle cx="226" cy="176" r="10" fill="#F2A98A" />
          <circle cx="314" cy="176" r="10" fill="#F2A98A" />
          <path d="M228 152 C228 122, 312 122, 312 152 V182 C312 208, 292 222, 270 222 C248 222, 228 208, 228 182 Z" fill="#F7B89C" />
          <path d="M225 166 C220 135, 236 108, 270 108 C304 108, 322 132, 315 166 C312 152, 305 144, 298 142 C292 148, 282 144, 276 136 C264 146, 246 146, 238 142 C232 148, 228 156, 225 166 Z" fill="#232B38" />
          <path d="M244 159 Q252 156 259 159" stroke="#232B38" strokeWidth="3" strokeLinecap="round" />
          <path d="M281 159 Q288 156 296 159" stroke="#232B38" strokeWidth="3" strokeLinecap="round" />
          <circle cx="252" cy="171" r="3.4" fill="#232B38" />
          <circle cx="288" cy="171" r="3.4" fill="#232B38" />
          <path d="M270 171 V185 H264" stroke="#D98B6C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M261 196 Q270 202 279 196" stroke="#B86B52" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M174 328 C154 368, 158 402, 198 402 H242 V374 H204 L214 335" fill="#7D8693" />
          <path d="M366 328 C386 368, 382 402, 342 402 H298 V374 H336 L326 335" fill="#7D8693" />
          <path d="M196 398 L244 374" stroke="#3B424C" strokeWidth="3" strokeLinecap="round" />
          <path d="M344 398 L296 374" stroke="#3B424C" strokeWidth="3" strokeLinecap="round" />
          <rect x="251" y="328" width="38" height="68" rx="7" fill="#2B323D" />
          <circle cx="261" cy="336" r="2.2" fill="#7D8693" />
          <rect x="231" y="366" width="28" height="34" rx="12" fill="#F7B89C" />
          <rect x="281" y="366" width="28" height="34" rx="12" fill="#F7B89C" />
          <line x1="236" y1="376" x2="255" y2="376" stroke="#DF8E6F" strokeWidth="2" strokeLinecap="round" />
          <line x1="236" y1="384" x2="255" y2="384" stroke="#DF8E6F" strokeWidth="2" strokeLinecap="round" />
          <line x1="285" y1="376" x2="304" y2="376" stroke="#DF8E6F" strokeWidth="2" strokeLinecap="round" />
          <line x1="285" y1="384" x2="304" y2="384" stroke="#DF8E6F" strokeWidth="2" strokeLinecap="round" />

          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="192" y="274" width="42" height="42" rx="11" fill="#F7F8F5" />
            <path d="M213 284 L201 294 H205 V304 H211 V298 H215 V304 H221 V294 H225 Z" fill="#6395C9" />
          </motion.g>
          <motion.g animate={{ y: [0, 5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="176" y="334" width="42" height="42" rx="11" fill="#6395C9" />
            <path d="M187 346 H207 V360 H195 L189 365 V360 H187 Z" fill="#F7F8F5" />
            <line x1="191" y1="351" x2="203" y2="351" stroke="#6395C9" strokeWidth="2" strokeLinecap="round" />
            <line x1="191" y1="355" x2="199" y2="355" stroke="#6395C9" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4.0, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="306" y="276" width="42" height="42" rx="11" fill="#6395C9" />
            <circle cx="327" cy="297" r="7" stroke="#F7F8F5" strokeWidth="3.5" fill="none" />
            <path d="M327 286 V289 M327 305 V308 M316 297 H319 M335 297 H338 M319 289 L321 291 M333 303 L335 305 M335 289 L333 291 M321 303 L319 305" stroke="#F7F8F5" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
          <motion.g animate={{ y: [0, 5, 0] }} transition={{ duration: 3.6, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="322" y="336" width="42" height="42" rx="11" fill="#F08A5D" />
            <path d="M343 366 C343 366 332 359 332 352 C332 348.5 334.8 346 338 346 C340.2 346 342 347.2 343 349 C344 347.2 345.8 346 348 346 C351.2 346 354 348.5 354 352 C354 359 343 366 343 366 Z" fill="#F7F8F5" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}