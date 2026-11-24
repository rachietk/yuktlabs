import React from "react";
import { ArrowUpRight } from "lucide-react";
import { WORKS_LIST } from "../data/siteData";

export default function WorksSection() {
  return (
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
  );
}
