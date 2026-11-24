import React from "react";
import { ArrowUpRight } from "lucide-react";
import StrategistIllustration from "../components/StrategistIllustration";

export default function HeroSection() {
  return (
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
  );
}
