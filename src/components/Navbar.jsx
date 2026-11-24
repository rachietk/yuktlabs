import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { SERVICES, WORKS } from "../data/siteData";

const NAV_ITEMS = [
  {
    label: "Works",
    slug: "works",
    info: "Campaigns we have launched.",
    items: [
      ...WORKS.map((w) => ({ title: w.t, desc: w.c, href: `#work-${w.id}` })),
      { title: "All work", desc: "Filter by type", href: "#works" },
    ],
  },
  {
    label: "Services",
    slug: "services",
    info: "What we do.",
    items: SERVICES.map((s) => ({ title: s.n, desc: s.s, href: `#svc-${s.id}` })),
  },
  {
    label: "About",
    slug: "about",
    info: "Who we are.",
    items: [
      { title: "Our story", desc: "Why we are called Yukt", href: "#about" },
      { title: "Team", desc: "The people behind the work", href: "#team" },
      { title: "Careers", desc: "Join the lab", href: "#careers" },
      { title: "Blog & Insights", desc: "Playbooks and lab notes", href: "#blog" },
    ],
  },
  { label: "Pricing", slug: "pricing", info: "Simple monthly plans." },
  { label: "Contact", slug: "contact", info: "Tell us your goal." },
];

export default function Navbar({ route, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onEsc = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [menuOpen]);

  const topGroup =
    { work: "works", svc: "services", team: "about", careers: "about", blog: "about", post: "about" }[
      route.split("-")[0]
    ] || route;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-bg/90 border-b border-line transition-colors duration-500">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-[72px] relative z-[115]">
          <BrandLogo onClick={() => setMenuOpen(false)} />

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((nav) => (
              <div key={nav.slug} className="relative h-[72px] flex items-center group">
                <a
                  href={`#${nav.slug}`}
                  className={`px-3.5 py-2 rounded-full font-medium text-[15px] transition-colors hover:bg-bg2 ${
                    topGroup === nav.slug ? "bg-bg2" : ""
                  }`}
                >
                  {nav.label}
                  {nav.items && <span className="text-[10px] ml-1.5 opacity-65">▾</span>}
                </a>

                <div className="absolute top-full left-0 pt-1.5 opacity-0 translate-y-2.5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  {nav.items ? (
                    <div className="w-[300px] p-2.5 rounded-[20px] bg-bg border border-line shadow-2xl">
                      {nav.items.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-2.5 rounded-xl hover:bg-bg2 hover:translate-x-1 transition-all"
                        >
                          <b className="block font-display text-[15px]">{sub.title}</b>
                          <span className="block text-[13px] text-mut leading-snug">{sub.desc}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="w-[240px] px-4 py-3.5 rounded-[20px] bg-bg border border-line shadow-2xl text-sm text-mut">
                      {nav.info}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5 relative z-[120]">
            <a href="#contact" className="hidden lg:inline-flex btn-tactile btn-primary !py-2.5 !px-5 !text-[14.5px]">
              Start a project
            </a>

            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle light and dark theme"
              className="w-10 h-10 rounded-full border border-line bg-bg text-ink inline-flex items-center justify-center hover:border-ac transition-colors"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {theme === "dark" ? (
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </motion.span>
            </motion.button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="lg:hidden w-10 h-10 rounded-full border border-line bg-bg text-ink inline-flex items-center justify-center hover:border-ac"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 h-[100dvh] bg-bg z-[110] pt-[88px] px-6 pb-11 overflow-y-auto flex flex-col"
          >
            {NAV_ITEMS.map((nav) => (
              <div key={nav.slug} className="py-2.5 border-b border-line last:border-b-0">
                <a
                  href={`#${nav.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[26px] font-bold py-1.5 flex justify-between items-center"
                >
                  {nav.label}
                </a>
                {nav.items && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-1.5 pb-2">
                    {nav.items.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-1.5 font-display font-bold text-[15px] text-mut hover:text-ac"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-tactile btn-primary w-full">
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
