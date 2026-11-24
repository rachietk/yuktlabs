import React from "react";

export default function Footer() {
  return (
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
  );
}
