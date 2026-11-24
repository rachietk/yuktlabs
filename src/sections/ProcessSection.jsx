import React from "react";
import { PROCESS_STEPS } from "../data/siteData";

export default function ProcessSection() {
  return (
    <section id="process" style={{ backgroundColor: "var(--bg2)" }} className="py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(28px,5vw,52px)] font-bold">How a campaign moves.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {PROCESS_STEPS.map(([num, title, sub]) => (
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
  );
}
