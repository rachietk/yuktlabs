import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import BrandMark from "../components/BrandMark";
import { NAV_MENU } from "../data/siteData";

export default function Navbar({ dark, setDark, mobileMenu, setMobileMenu }) {
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
  }, [mobileMenu, setMobileMenu]);

  return (
    <>
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
    </>
  );
}
