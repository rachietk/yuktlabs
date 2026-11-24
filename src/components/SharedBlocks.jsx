import { useState } from "react";
import { motion } from "framer-motion";
import { GRADIENTS, WORKS } from "../data/siteData";

const ICON_PATHS = {
  a: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  b: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.7-4 3.2-6 6.5-6s5.8 2 6.5 6M17 5.5a3 3 0 0 1 0 5.5M19.5 14c1.2.8 2 2.6 2.5 5" />
    </>
  ),
  c: <path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M3 9h18M9 20v-6h6v6" />,
  d: <path d="M3 17l5-5 4 4 8-9M15 7h5v5" />,
  e: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M10 9.5v5l4.5-2.5z" />
    </>
  ),
  f: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
};

export function WorkCard({ work, forceNormal = false }) {
  const idx = WORKS.findIndex((x) => x.id === work.id);
  const isBig = !forceNormal && work.b;

  return (
    <motion.a
      href={`#work-${work.id}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-[24px] overflow-hidden min-h-[280px] sm:min-h-[320px] col-span-12 ${
        isBig ? "lg:col-span-8" : "md:col-span-6 lg:col-span-4"
      } isolate text-white block`}
    >
      <div
        className="absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ background: GRADIENTS[idx >= 0 ? idx : 0] }}
      >
        <i className="absolute rounded-full bg-white/20 w-[240px] h-[240px] -right-[50px] -top-[60px]" />
        <i className="absolute rounded-full bg-white/15 w-[120px] h-[120px] left-[30px] top-[70px]" />
        <i className="absolute rounded-full bg-white/20 w-[70px] h-[70px] right-[34%] bottom-[30%]" />
      </div>

      <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#0f1210] grid place-items-center font-bold transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
        ↗
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/75 to-transparent">
        <small className="opacity-90 text-sm">{work.c}</small>
        <h3 className="text-[26px] font-bold mt-0.5">{work.t}</h3>
        <div className="max-h-24 opacity-100 mt-2 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100 lg:group-hover:mt-2 overflow-hidden text-[14.5px] transition-all duration-300">
          {work.d}
        </div>
      </div>
    </motion.a>
  );
}

export function ServiceCard({ service }) {
  return (
    <motion.a
      href={`#svc-${service.id}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group p-7 rounded-[22px] bg-bg2 border border-line block hover:bg-ink hover:text-bg hover:border-ink transition-colors duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[34px] h-[34px] stroke-ac fill-none stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICON_PATHS[service.i]}
      </svg>
      <h3 className="text-[23px] font-bold mt-6 mb-2">{service.n}</h3>
      <p className="text-mut text-[15.5px] group-hover:text-bg/80">{service.s}</p>
      <em className="not-italic text-sm font-semibold block mt-3.5 text-ac">Learn more ↗</em>
    </motion.a>
  );
}

export function PageHeader({ crumbs, title, lead }) {
  return (
    <div className="pt-[102px] lg:pt-[120px] pb-5">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[14.5px] text-mut mb-4">
            <a href="#home" className="border-b border-line hover:text-ac">
              Home
            </a>
            {crumbs.map(([label, slug], i) => (
              <span key={i}>
                {" / "}
                {slug ? (
                  <a href={`#${slug}`} className="border-b border-line hover:text-ac">
                    {label}
                  </a>
                ) : (
                  label
                )}
              </span>
            ))}
          </div>
          <h1 className="text-[clamp(38px,6vw,78px)] font-bold max-w-[17ch]">{title}</h1>
          {lead && <p className="text-mut max-w-[56ch] mt-4">{lead}</p>}
        </motion.div>
      </div>
    </div>
  );
}

export function CTABanner({ title, desc }) {
  return (
    <section className="pt-5 pb-16 lg:pb-24">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink text-bg rounded-[28px] py-12 px-5 sm:py-16 sm:px-8 text-center"
        >
          <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold max-w-[18ch] mx-auto">
            {title || "Ready to run the experiment?"}
          </h2>
          <p className="opacity-75 my-4 mx-auto max-w-[48ch]">
            {desc || "Tell us what you are promoting and by when. We reply within one working day with a plan."}
          </p>
          <a
            href="#contact"
            className="btn-tactile !bg-bg !text-ink !border-bg hover:!bg-ac hover:!text-white hover:!border-ac mt-2"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function FaqList({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="max-w-[820px] mt-7">
      {items.map(([q, a], idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full flex justify-between items-center gap-5 py-5 font-display font-bold text-[19px] text-left cursor-pointer"
            >
              <span>{q}</span>
              <b className={`text-2xl text-ac transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</b>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 text-mut ${
                isOpen ? "max-h-48 pb-5" : "max-h-0"
              }`}
            >
              <p className="max-w-[62ch]">{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
