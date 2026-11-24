import React from "react";
import { FlaskConical, Compass } from "lucide-react";

export default function CtaSection() {
  return (
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
  );
}
