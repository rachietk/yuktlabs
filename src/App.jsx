import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import WorksSection from "./sections/WorksSection";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import CtaSection from "./sections/CtaSection";
import Footer from "./sections/Footer";

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

      <Navbar
        dark={dark}
        setDark={setDark}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <main>
        <HeroSection />
        <WorksSection />
        <ServicesSection />
        <ProcessSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
