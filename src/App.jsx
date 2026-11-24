import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Sun,
  Moon,
  FlaskConical,
  ArrowUpRight,
  Compass,
  Menu,
  X,
  Check,
  Sparkles,
} from "lucide-react";

const ARCH_SERVICES =
  "CONTENT WRITING • WEBSITE PROMOTION • CAMPAIGN MARKETING • SOCIAL MEDIA MANAGING • INFLUENCER MARKETING • BRAND STRATEGY • ";

const SERVICES_LIST = [
  {
    id: "brand-campaigns",
    title: "Brand campaigns",
    desc: "Ideas and creative that make a brand memorable across print, social, and retail.",
  },
  {
    id: "influencer-marketing",
    title: "Influencer marketing",
    desc: "The right creators, briefed and managed for authentic audience trust.",
  },
  {
    id: "shop-retail-promotion",
    title: "Shop & retail promotion",
    desc: "Local offers and store-level campaigns that bring footfall through the door.",
  },
  {
    id: "paid-media",
    title: "Paid media",
    desc: "Meta, Google, and YouTube ads tuned weekly around real conversion data.",
  },
  {
    id: "video-content",
    title: "Video & content",
    desc: "High-retention reels, product shoots, and short films ready for the feed.",
  },
  {
    id: "analytics-reports",
    title: "Analytics & reports",
    desc: "Plain-language performance reports so you know what to repeat and scale.",
  },
];

const WORKS_LIST = [
  {
    id: "saffron-co",
    title: "Saffron & Co.",
    category: "Restaurant launch",
    metric: "+180% Footfall",
    grad: "linear-gradient(135deg,#ff7a45,#ffb86b)",
  },
  {
    id: "nova-fit",
    title: "Nova Fit",
    category: "Influencer campaign",
    metric: "60k Installs",
    grad: "linear-gradient(135deg,#00927d,#6fe0c8)",
  },
  {
    id: "bazaar-street",
    title: "Bazaar Street",
    category: "Retail promotion",
    metric: "+62% Sales",
    grad: "linear-gradient(135deg,#4b2eff,#9a7bff)",
  },
];

const NAV_MENU = [
  {
    label: "Works",
    href: "#works",
    info: "Campaigns we have launched.",
    items: [
      ...WORKS_LIST.map((w) => ({
        title: w.title,
        desc: w.category,
        href: "#works",
      })),
      { title: "All work", desc: "Explore all case studies", href: "#works" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    info: "What we do.",
    items: SERVICES_LIST.map((s) => ({
      title: s.title,
      desc: s.desc,
      href: "#services",
    })),
  },
  {
    label: "About",
    href: "#process",
    info: "Who we are.",
    items: [
      { title: "Our process", desc: "How a campaign moves", href: "#process" },
      { title: "Lab 2.0", desc: "Launching Jan 1, 2027", href: "#home" },
      { title: "Start a brief", desc: "Reply within 24 hours", href: "#contact" },
    ],
  },
  {
    label: "Pricing",
    href: "#contact",
    info: "Simple monthly plans & custom growth sprints.",
  },
  {
    label: "Contact",
    href: "#contact",
    info: "Tell us your goal. We reply within one working day.",
  },
];

function BrandMark({ onClick }) {
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

function StrategistIllustration() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  const offsetPercent = useMotionValue(0);
  const textPathRef = useRef(null);

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000;
    const vel = smoothVelocity.get();

    const baseClockwiseSpeed = 4.2;
    const scrollCounterInfluence = vel * 0.018;
    const effectiveSpeed = baseClockwiseSpeed - scrollCounterInfluence;

    let next = (offsetPercent.get() + effectiveSpeed * dt) % 50;
    if (next < 0) next += 50;
    offsetPercent.set(next);

    if (textPathRef.current) {
      textPathRef.current.setAttribute("startOffset", `${next.toFixed(2)}%`);
    }
  });

  const repeatedTicker = ARCH_SERVICES.repeat(4);

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
          <path
            id="upperServiceArch"
            d="M 102,255 A 168,168 0 0,1 438,255 A 168,168 0 0,1 102,255"
          />
          <clipPath id="upperArchClip">
            <rect x="45" y="25" width="450" height="232" />
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

        <g clipPath="url(#upperArchClip)">
          <text
            fill="var(--ink)"
            fontSize="12.5"
            fontWeight="700"
            letterSpacing="2.4"
            fontFamily="Space Grotesk, system-ui, sans-serif"
          >
            <textPath ref={textPathRef} href="#upperServiceArch" startOffset="0%">
              {repeatedTicker}
            </textPath>
          </text>
        </g>

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

export default function App() {
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const themeVars = dark
    ? {
        "--bg": "#000000",
        "--bg2": "#0b0b0d",
        "--ink": "#f5f5f7",
        "--mut": "#9a9aa2",
        "--line": "#1f1f24",
        "--ac": "#2fd3b8",
        "--ac2": "#ff8a68",
      }
    : {
        "--bg": "#f6f7f5",
        "--bg2": "#eceeeb",
        "--ink": "#0f1210",
        "--mut": "#5d645f",
        "--line": "#dde1dd",
        "--ac": "#00927d",
        "--ac2": "#ff6b45",
      };

  useEffect(() => {
    const id = "yukt-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@400;500;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenu(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenu(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenu]);

  return (
    <div
      style={{
        ...themeVars,
        backgroundColor: "var(--bg)",
        color: "var(--ink)",
        fontFamily: '"DM Sans", system-ui, sans-serif',
      }}
      className="min-h-screen overflow-x-clip transition-colors duration-500 selection:bg-[#00927d] selection:text-white"
    >
      <style>{`
        h1, h2, h3, h4, .font-display {
          font-family: "Space Grotesk", system-ui, sans-serif;
          letter-spacing: -0.03em;
          line-height: 1.06;
        }
      `}</style>

      <header
        style={{
          borderColor: "var(--line)",
          backgroundColor: dark ? "rgba(0,0,0,0.92)" : "rgba(246,247,245,0.92)",
        }}
        className="fixed top-0 inset-x-0 z-[100] backdrop-blur-md border-b transition-colors duration-500"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-[68px] sm:h-[72px] flex items-center justify-between">
          <BrandMark onClick={() => setMobileMenu(false)} />

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-[15px] font-medium">
            {NAV_MENU.map((nav) => (
              <div key={nav.label} className="relative h-[72px] flex items-center group">
                <a
                  href={nav.href}
                  className="px-3.5 py-2 rounded-full transition-colors hover:bg-[var(--bg2)] inline-flex items-center gap-1.5"
                >
                  <span>{nav.label}</span>
                  {nav.items && (
                    <span className="text-[10px] opacity-65 transition-transform duration-200 group-hover:rotate-180">
                      ▾
                    </span>
                  )}
                </a>

                <div className="absolute top-full left-0 pt-1.5 opacity-0 translate-y-2.5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 ease-out z-50">
                  {nav.items ? (
                    <div
                      style={{ backgroundColor: "var(--bg)", borderColor: "var(--line)" }}
                      className="w-[310px] p-2.5 rounded-[20px] border shadow-[0_22px_44px_-20px_rgba(0,0,0,0.45)]"
                    >
                      {nav.items.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          className="block px-3 py-2.5 rounded-xl hover:bg-[var(--bg2)] hover:translate-x-1 transition-all"
                        >
                          <b className="block font-display text-[15px] font-bold">{sub.title}</b>
                          <span style={{ color: "var(--mut)" }} className="block text-[13px] leading-snug mt-0.5">
                            {sub.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "var(--bg)",
                        borderColor: "var(--line)",
                        color: "var(--mut)",
                      }}
                      className="w-[240px] px-4 py-3.5 rounded-[20px] border shadow-[0_22px_44px_-20px_rgba(0,0,0,0.45)] text-[14px]"
                    >
                      {nav.info}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          <div className="relative z-[120] flex items-center gap-2 sm:gap-2.5">
            <a
              href="#contact"
              style={{ backgroundColor: "var(--ink)", color: "var(--bg)" }}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle light and dark theme"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border inline-flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenu((m) => !m)}
              aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenu}
              style={{
                borderColor: mobileMenu ? "var(--ac)" : "var(--line)",
                backgroundColor: "var(--bg)",
              }}
              className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full border inline-flex items-center justify-center active:scale-95 transition-all cursor-pointer"
            >
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: "var(--bg)" }}
            className="md:hidden fixed inset-0 z-[95] pt-[88px] px-5 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col">
              {NAV_MENU.map((nav, idx) => (
                <motion.div
                  key={nav.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{ borderColor: "var(--line)" }}
                  className="py-3.5 border-b"
                >
                  <a
                    href={nav.href}
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-display font-bold text-[26px] block leading-tight">{nav.label}</span>
                      <span style={{ color: "var(--mut)" }} className="text-xs">{nav.info}</span>
                    </div>
                    <span
                      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg2)" }}
                      className="w-10 h-10 rounded-full border grid place-items-center shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>

                  {nav.items && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2.5 pl-1">
                      {nav.items.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenu(false)}
                          style={{ color: "var(--mut)" }}
                          className="text-sm font-medium py-1 hover:text-[var(--ac)] transition-colors"
                        >
                          • {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                style={{ backgroundColor: "var(--ink)", color: "var(--bg)" }}
                className="w-full py-4 px-6 rounded-full font-semibold text-base flex items-center justify-center gap-2"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p style={{ color: "var(--mut)" }} className="text-center text-xs">
                Lucknow, India · Lab 2.0 Launching Jan 1, 2027
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-8 sm:gap-10 lg:gap-8 items-center">
          <div className="order-1">
            <div
              style={{ backgroundColor: "var(--bg2)", borderColor: "var(--line)" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-5 sm:mb-6 max-w-full"
            >
              <span style={{ backgroundColor: "var(--ac2)" }} className="w-2 h-2 rounded-full animate-pulse shrink-0" />
              <span className="truncate">COMING SOON · LAUNCHING JAN 1, 2027 · STAY TUNED</span>
            </div>

            <h1 className="text-[clamp(36px,9.2vw,84px)] font-bold">
              Promotion, <span style={{ color: "var(--ac)" }}>tested</span> until it works.
            </h1>

            <p style={{ color: "var(--mut)" }} className="text-[16px] sm:text-[18px] max-w-[50ch] mt-4 sm:mt-5 mb-7 sm:mb-8 leading-relaxed">
              Yukt Labs plans and runs campaigns for brands, influencers, organizations, shops and retailers. We test
              small ideas first, measure the reaction, and scale what converts.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#works"
                style={{ backgroundColor: "var(--ink)", color: "var(--bg)" }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15.5px] hover:-translate-y-0.5 transition-transform"
              >
                See our work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                style={{ borderColor: "var(--ink)", backgroundColor: "var(--bg2)" }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-[1.5px] font-semibold text-[15.5px] hover:-translate-y-0.5 transition-transform"
              >
                Explore services
              </a>
            </div>

            <div style={{ borderColor: "var(--line)", color: "var(--mut)" }} className="mt-8 sm:mt-9 pt-4 sm:pt-5 border-t flex items-center gap-2.5 text-xs sm:text-sm">
            </div>
          </div>

          <div className="order-2 flex items-center justify-center pt-2 lg:pt-0">
            <StrategistIllustration />
          </div>
        </div>
      </section>

      <section id="works" style={{ backgroundColor: "var(--bg2)" }} className="py-16 sm:py-20 transition-colors duration-500">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-8 sm:mb-10">
            <div>
              <span style={{ color: "var(--ac)" }} className="text-xs font-bold uppercase tracking-widest">
                Selected Case Studies
              </span>
              <h2 className="text-[clamp(28px,5vw,52px)] font-bold mt-1">Experiments that scaled.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WORKS_LIST.map((w) => (
              <div
                key={w.id}
                className="group relative rounded-[24px] overflow-hidden min-h-[250px] sm:min-h-[280px] p-6 flex flex-col justify-between text-white"
                style={{ background: w.grad }}
              >
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm text-xs font-semibold">{w.metric}</span>
                  <span className="w-9 h-9 rounded-full bg-white text-[#0f1210] grid place-items-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <p className="text-sm opacity-90">{w.category}</p>
                  <h3 className="text-2xl font-bold mt-0.5">{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <h2 className="text-[clamp(28px,5vw,52px)] font-bold max-w-[16ch]">What we test and run.</h2>
          <p style={{ color: "var(--mut)" }} className="mt-3 max-w-[52ch] text-[15.5px] sm:text-base">
            Six core promotion disciplines joined under one roof—built to work together or independently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                style={{ backgroundColor: "var(--bg2)", borderColor: "var(--line)" }}
                className="p-6 sm:p-7 rounded-[22px] border hover:-translate-y-1 transition-transform"
              >
                <div
                  style={{ backgroundColor: "var(--bg)", borderColor: "var(--line)", color: "var(--ac)" }}
                  className="w-10 h-10 rounded-full border grid place-items-center mb-4 sm:mb-5"
                >
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold mb-2">{srv.title}</h3>
                <p style={{ color: "var(--mut)" }} className="text-[15px]">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ backgroundColor: "var(--bg2)" }} className="py-16 sm:py-20 transition-colors duration-500">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <h2 className="text-[clamp(28px,5vw,52px)] font-bold">How a campaign moves.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mt-8 sm:mt-10">
            {[
              ["01", "Brief", "Goal, audience & budget alignment"],
              ["02", "Strategy", "Channel & creative test hypothesis"],
              ["03", "Create", "Copy, reels, posters & landing pages"],
              ["04", "Launch", "Creators & local/paid ads go live"],
              ["05", "Grow", "Weekly optimization & plain reports"],
            ].map(([num, title, sub]) => (
              <div
                key={num}
                style={{ backgroundColor: "var(--bg)", borderColor: "var(--line)" }}
                className="p-5 sm:p-6 rounded-[20px] border"
              >
                <span style={{ color: "var(--ac)" }} className="font-display font-bold text-sm">{num}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{title}</h3>
                <p style={{ color: "var(--mut)" }} className="text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div style={{ backgroundColor: "var(--ink)", color: "var(--bg)" }} className="rounded-[24px] sm:rounded-[28px] px-5 py-10 sm:p-10 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest opacity-75 mb-3">
              <FlaskConical className="w-4 h-4 shrink-0" />
              <span>Ready to run your next growth experiment?</span>
            </div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-bold max-w-[16ch] mx-auto">Let’s test until it works.</h2>
            <p className="opacity-75 max-w-[46ch] mx-auto mt-3 mb-7 text-[15px] sm:text-base">
              Tell us what you are promoting—content, website, store, or brand campaign—and we will send a tailored plan within 24 hours.
            </p>
            <a
              href="mailto:hello@yuktlabs.com"
              style={{ backgroundColor: "var(--ac)", color: "#ffffff" }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold hover:opacity-95 transition-opacity"
            >
              hello@yuktlabs.com
              <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        style={{ backgroundColor: "var(--bg2)", borderColor: "var(--line)" }}
        className="border-t pt-[48px] sm:pt-[56px] pb-[28px] mt-[32px] sm:mt-[40px] transition-colors duration-500"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 sm:gap-7">
            <div style={{ borderColor: "var(--line)" }} className="col-span-2 md:col-span-1 pb-4 md:pb-0 border-b md:border-b-0">
              <a href="#home" className="inline-flex items-center gap-2.5">
                <b className="font-display text-[23px] font-bold">yukt labs</b>
              </a>
              <p style={{ color: "var(--mut)" }} className="text-[14.5px] sm:text-[15px] mt-2.5 max-w-[30ch]">
                Promotion for brands, creators, organizations and shops, tested until it works.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold mb-2.5 sm:mb-3">Services</h4>
              {[
                ["Brand campaigns", "services"],
                ["Influencer marketing", "services"],
                ["Shop and retail promotion", "services"],
                ["Paid media", "services"],
                ["Video and content", "services"],
                ["Analytics and reports", "services"],
              ].map(([label, slug]) => (
                <a key={label} href={`#${slug}`} style={{ color: "var(--mut)" }} className="block text-[14px] sm:text-[15px] py-[3px] hover:text-[var(--ac)] transition-colors">
                  {label}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold mb-2.5 sm:mb-3">Company</h4>
              {[
                ["About", "home"],
                ["Team", "process"],
                ["Careers", "contact"],
                ["Blog & Insights", "works"],
                ["Pricing", "contact"],
              ].map(([label, slug]) => (
                <a key={label} href={`#${slug}`} style={{ color: "var(--mut)" }} className="block text-[14px] sm:text-[15px] py-[3px] hover:text-[var(--ac)] transition-colors">
                  {label}
                </a>
              ))}
            </div>

            <div style={{ borderColor: "var(--line)" }} className="col-span-2 md:col-span-1 pt-4 md:pt-0 border-t md:border-t-0 grid grid-cols-2 md:block gap-x-4">
              <h4 className="col-span-2 text-[15px] sm:text-[16px] font-bold mb-2.5 sm:mb-3">Work</h4>
              {[
                ["Saffron & Co.", "works"],
                ["Nova Fit", "works"],
                ["Bazaar Street", "works"],
                ["Kora Skin", "works"],
                ["Contact", "contact"],
              ].map(([label, slug]) => (
                <a key={label} href={`#${slug}`} style={{ color: "var(--mut)" }} className="block text-[14px] sm:text-[15px] py-[3px] hover:text-[var(--ac)] transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderColor: "var(--line)", color: "var(--mut)" }} className="flex flex-wrap justify-between gap-2 sm:gap-3 mt-[32px] sm:mt-[36px] pt-[18px] sm:pt-[20px] border-t text-[13px] sm:text-[14px]">
            <span>© 2026 Yukt Labs. All rights reserved.</span>
            <span>Lucknow, India · Lab 2.0 Launching Jan 1, 2027</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
