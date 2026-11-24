import { SERVICES, WORKS } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-line pt-11 sm:pt-14 pb-7 mt-10">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 sm:gap-7">
          <div className="col-span-2 md:col-span-1 pb-3.5 md:pb-0 border-b md:border-b-0 border-line">
            <b className="font-display text-[23px] font-bold">yukt labs</b>
            <p className="text-mut text-[15px] mt-2.5 max-w-[30ch]">
              Promotion for brands, creators, organizations and shops, tested until it works.
            </p>
          </div>

          <div>
            <h4 className="text-[15px] font-bold mb-2.5">Services</h4>
            {SERVICES.map((s) => (
              <a key={s.id} href={`#svc-${s.id}`} className="block text-mut text-sm sm:text-[15px] py-0.5 hover:text-ac">
                {s.n}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-[15px] font-bold mb-2.5">Company</h4>
            {[
              ["About", "about"],
              ["Team", "team"],
              ["Careers", "careers"],
              ["Blog & Insights", "blog"],
              ["Pricing", "pricing"],
            ].map(([label, slug]) => (
              <a key={slug} href={`#${slug}`} className="block text-mut text-sm sm:text-[15px] py-0.5 hover:text-ac">
                {label}
              </a>
            ))}
          </div>

          <div className="col-span-2 md:col-span-1 pt-3.5 md:pt-0 border-t md:border-t-0 border-line grid grid-cols-2 md:block gap-x-4">
            <h4 className="col-span-2 text-[15px] font-bold mb-2.5">Work</h4>
            {WORKS.slice(0, 4).map((w) => (
              <a key={w.id} href={`#work-${w.id}`} className="block text-mut text-sm sm:text-[15px] py-0.5 hover:text-ac">
                {w.t}
              </a>
            ))}
            <a href="#contact" className="block text-mut text-sm sm:text-[15px] py-0.5 hover:text-ac">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 mt-7 sm:mt-9 pt-4 sm:pt-5 border-t border-line text-mut text-[13px] sm:text-sm">
          <span>© 2026 Yukt Labs. All rights reserved.</span>
          <span>Lucknow, India · Lab 2.0 Launching Jan 1, 2027</span>
        </div>
      </div>
    </footer>
  );
}
