import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2027-01-01T00:00:00+05:30").getTime();

const CD_INFO = {
  days: "Milestone: Creator Portal & Retail Ad Packs unlock on January 1, 2027.",
  hours: "Beta Onboarding: Early-access brands receive campaign setups 72 hours early.",
  mins: "Live Tracking: Real-time footfall & ROAS dashboards go live at midnight IST.",
  secs: "Ticking down live to January 1, 2027 · Tap any countdown card to inspect.",
};

export default function LaunchBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: "38", hours: "05", mins: "21", secs: "00" });
  const [activeUnit, setActiveUnit] = useState("days");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState("");

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(`✓ Added ${email} to the Jan 1, 2027 launch list! Stay tuned.`);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-11 rounded-[26px] border border-line bg-bg2 p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-7 items-center"
    >
      <div>
        <div className="flex items-center gap-2.5 flex-wrap mb-2">
          <span className="w-[26px] h-[26px] inline-flex items-center justify-center rounded-full bg-ac/15 border border-ac/35">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2.2">
              <path d="M9 3h6M10 3v5.5L4.5 19A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2L14 8.5V3" />
            </svg>
          </span>
          <span className="text-[13px] font-bold text-ac tracking-wider uppercase">
            Stay Tuned · January 1, 2027 Launch
          </span>
        </div>

        <h3 className="text-[24px] sm:text-[32px] font-bold my-1.5">
          Our self-serve Campaign Lab opens January 1, 2027.
        </h3>
        <p className="text-mut text-[15.5px]">
          Live campaign dashboards, instant creator matching, and local retail ad packs—currently in private beta while
          we run bespoke client campaigns.
        </p>

        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mt-4 max-w-[410px]">
          {[
            ["days", "Days"],
            ["hours", "Hours"],
            ["mins", "Mins"],
            ["secs", "Secs"],
          ].map(([key, label]) => {
            const active = activeUnit === key;
            return (
              <motion.button
                key={key}
                type="button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setActiveUnit(key)}
                className={`rounded-2xl py-2.5 px-1.5 text-center border-[1.5px] transition-colors cursor-pointer ${
                  active ? "border-ac2 bg-ac2/10" : "border-line bg-bg hover:border-ac"
                }`}
              >
                <b className={`font-display text-[21px] sm:text-[26px] block ${active ? "text-ac2" : "text-ac"}`}>
                  {timeLeft[key]}
                </b>
                <span className="text-[10px] sm:text-[11.5px] uppercase tracking-wider text-mut">{label}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-3 py-2.5 px-3.5 rounded-xl bg-bg border border-dashed border-line text-[13.5px] flex items-center gap-2">
          <span className="text-ac2 font-bold">✦</span>
          <span>{CD_INFO[activeUnit]}</span>
        </div>
      </div>

      <div>
        <h4 className="text-[19px] font-bold mb-2">Get notified on launch day</h4>
        <p className="text-mut text-[14.5px] mb-3.5">
          Drop your email to receive early access and a free campaign audit when Lab 2.0 goes live on Jan 1, 2027.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@brand.com"
            aria-label="Email for launch notification"
            className="flex-1 min-w-0 px-4 py-3 rounded-full border-[1.5px] border-line bg-bg text-ink focus:outline-none focus:border-ac"
          />
          <button type="submit" className="btn-tactile btn-primary whitespace-nowrap">
            Notify me at launch
          </button>
        </form>
        {submitted && <p className="mt-2.5 text-sm font-semibold text-ac">{submitted}</p>}
      </div>
    </motion.div>
  );
}
