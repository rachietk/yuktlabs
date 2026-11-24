import React from "react";
import { Check } from "lucide-react";
import { SERVICES_LIST } from "../data/siteData";

export default function ServicesSection() {
  return (
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
  );
}
