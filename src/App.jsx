import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LaunchBanner from "./components/LaunchBanner";
import { WorkCard, ServiceCard, PageHeader, CTABanner, FaqList } from "./components/SharedBlocks";
import { GRADIENTS, SERVICES, WORKS, POSTS, AUDIENCES, GOALS, TEAM } from "./data/siteData";

const HERO_WORDS = ["Promotion,", "tested", "until", "it", "works."];

export default function App() {
  const [theme, setTheme] = useState("light");
  const [route, setRoute] = useState(() => (window.location.hash || "#home").slice(1));
  const [showTop, setShowTop] = useState(false);

  const [selectedGoal, setSelectedGoal] = useState("Awareness");
  const [selectedAud, setSelectedAud] = useState("Brands");
  const [workFilter, setWorkFilter] = useState("");
  const [blogCat, setBlogCat] = useState("All");
  const [blogQuery, setBlogQuery] = useState("");
  const [billing, setBilling] = useState("m");
  const [briefTags, setBriefTags] = useState([]);
  const [briefSent, setBriefSent] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onHash = () => {
      setRoute((window.location.hash || "#home").slice(1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const onScroll = () => setShowTop(window.scrollY > 650);

    window.addEventListener("hashchange", onHash);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith("svc-")) {
      const id = route.slice(4);
      const idx = SERVICES.findIndex((s) => s.id === id);
      const s = SERVICES[idx];
      if (!s) return renderHome();
      const rel = WORKS.filter((w) => w.sv.includes(id));
      const prev = SERVICES[(idx + SERVICES.length - 1) % SERVICES.length];
      const next = SERVICES[(idx + 1) % SERVICES.length];

      return (
        <>
          <PageHeader crumbs={[["Services", "services"], [s.n]]} title={`${s.n}.`} lead={s.s} />
          <section className="py-8">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-[34px] font-bold">What it is.</h2>
                <p className="text-mut mt-4">{s.l}</p>
              </div>
              <div>
                <h2 className="text-[34px] font-bold">What you get.</h2>
                <ul className="mt-4 space-y-3">
                  {s.d.map((item) => (
                    <li key={item} className="before:content-['✓'] before:text-ac before:font-bold before:mr-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {rel.length > 0 && (
            <section className="py-16 bg-bg2">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Where we used it.</h2>
                <div className="grid grid-cols-12 gap-5 mt-8">
                  {rel.map((w) => (
                    <WorkCard key={w.id} work={w} forceNormal />
                  ))}
                </div>
              </div>
            </section>
          )}
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <div className="flex justify-between flex-wrap gap-4 mt-12 pt-6 border-t border-line font-display font-bold text-xl">
              <a href={`#svc-${prev.id}`} className="hover:text-ac">
                ← {prev.n}
              </a>
              <a href={`#svc-${next.id}`} className="hover:text-ac">
                {next.n} →
              </a>
            </div>
          </div>
          <CTABanner />
        </>
      );
    }

    if (route.startsWith("work-")) {
      const id = route.slice(5);
      const idx = WORKS.findIndex((w) => w.id === id);
      const w = WORKS[idx];
      if (!w) return renderHome();
      const prev = WORKS[(idx + WORKS.length - 1) % WORKS.length];
      const next = WORKS[(idx + 1) % WORKS.length];

      return (
        <>
          <PageHeader crumbs={[["Works", "works"], [w.t]]} title={`${w.t}.`} lead={w.d} />
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <div className="h-[min(44vw,360px)] rounded-[26px] relative overflow-hidden mt-7" style={{ background: GRADIENTS[idx] }}>
              <i className="absolute rounded-full bg-white/20 w-[340px] h-[340px] -right-[60px] -top-[80px]" />
              <i className="absolute rounded-full bg-white/20 w-[140px] h-[140px] left-[8%] bottom-[14%]" />
            </div>
          </div>
          <section className="py-9">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-7">
                {w.st.map(([num, label]) => (
                  <div key={label} className="bg-bg2 border border-line rounded-[18px] p-5">
                    <b className="font-display text-[clamp(28px,4.2vw,46px)] font-bold block">{num}</b>
                    <span className="text-sm text-mut">{label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h2 className="text-[32px] font-bold">The challenge.</h2>
                  <p className="text-mut mt-4">{w.ch}</p>
                </div>
                <div>
                  <h2 className="text-[32px] font-bold">What we ran.</h2>
                  <ul className="mt-4 space-y-3">
                    {w.do.map((item) => (
                      <li key={item} className="before:content-['✓'] before:text-ac before:font-bold before:mr-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-mut text-[15px]">
                    Services used:{" "}
                    {w.sv.map((sid) => {
                      const srv = SERVICES.find((q) => q.id === sid);
                      return (
                        srv && (
                          <a key={sid} href={`#svc-${sid}`} className="border-b border-ac mr-2.5 text-ink hover:text-ac">
                            {srv.n}
                          </a>
                        )
                      );
                    })}
                  </p>
                </div>
              </div>
              <div className="flex justify-between flex-wrap gap-4 mt-12 pt-6 border-t border-line font-display font-bold text-xl">
                <a href={`#work-${prev.id}`} className="hover:text-ac">
                  ← {prev.t}
                </a>
                <a href={`#work-${next.id}`} className="hover:text-ac">
                  {next.t} →
                </a>
              </div>
            </div>
          </section>
          <CTABanner />
        </>
      );
    }

    if (route.startsWith("post-")) {
      const id = route.slice(5);
      const idx = POSTS.findIndex((p) => p.id === id);
      const post = POSTS[idx];
      if (!post) return renderHome();
      const prev = POSTS[(idx + POSTS.length - 1) % POSTS.length];
      const next = POSTS[(idx + 1) % POSTS.length];

      return (
        <>
          <PageHeader crumbs={[["Blog", "blog"], [post.cat]]} title={post.t} lead={post.s} />
          <section className="py-6">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
              <div className="max-w-[740px]">
                <p className="text-[19px] leading-relaxed">{post.b}</p>
                <div className="flex justify-between flex-wrap gap-4 mt-12 pt-6 border-t border-line font-display font-bold text-xl">
                  <a href={`#post-${prev.id}`} className="hover:text-ac">
                    ← {prev.t}
                  </a>
                  <a href={`#post-${next.id}`} className="hover:text-ac">
                    {next.t} →
                  </a>
                </div>
              </div>
            </div>
          </section>
          <CTABanner />
        </>
      );
    }

    switch (route) {
      case "works": {
        const filtered = workFilter ? WORKS.filter((w) => w.k === workFilter) : WORKS;
        return (
          <>
            <PageHeader
              crumbs={[["Works"]]}
              title="Our work."
              lead="Every project starts as a test and ends as a result. Filter by type or open a project for the full story."
            />
            <section className="py-9">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                  {[
                    ["", "All work"],
                    ["launch", "Launches"],
                    ["influencer", "Influencer"],
                    ["retail", "Retail"],
                    ["brand", "Branding"],
                    ["event", "Events"],
                  ].map(([val, label]) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setWorkFilter(val)}
                      className={`px-4 py-2 rounded-full border-[1.5px] text-[14.5px] font-medium whitespace-nowrap transition-colors ${
                        workFilter === val
                          ? "bg-ink text-bg border-ink"
                          : "bg-bg text-ink border-line hover:border-ac"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-5">
                  {filtered.map((w) => (
                    <WorkCard key={w.id} work={w} />
                  ))}
                </div>
              </div>
            </section>
            <CTABanner />
          </>
        );
      }

      case "services":
        return (
          <>
            <PageHeader
              crumbs={[["Services"]]}
              title="What we do."
              lead="Six services that work alone or together. Pick one, or let us build the mix."
            />
            <section className="py-9">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </div>
            </section>
            <CTABanner />
          </>
        );

      case "about":
        return (
          <>
            <PageHeader
              crumbs={[["About", "about"]]}
              title="Yukt means joined."
              lead="In Sanskrit, yukt means connected. That is the job: connecting brands with the people, creators and shops that matter to them."
            />
            <section className="py-9">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Why a lab?</h2>
                  <p className="text-mut mt-4">
                    Most promotion is guesswork. We test small ideas first, measure them, and put the budget behind what
                    works. Strategy, creative and ads sit in one team, so nothing gets lost between them.
                  </p>
                  <p className="text-mut mt-4">
                    We work with local retailers as happily as with national brands and independent creators.
                  </p>
                  <div className="flex gap-3 flex-wrap mt-6">
                    <a href="#team" className="btn-tactile btn-primary">
                      Meet the team
                    </a>
                    <a href="#blog" className="btn-tactile">
                      Read lab notes
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3.5 mt-4 lg:mt-0">
                  {[
                    ["120+", "Campaigns delivered"],
                    ["45", "Creators in our network"],
                    ["3x", "Average return"],
                    ["24h", "Reply time"],
                  ].map(([num, label]) => (
                    <div key={label} className="bg-bg2 border border-line rounded-[18px] p-5">
                      <b className="font-display text-[clamp(28px,4.2vw,46px)] font-bold block">{num}</b>
                      <span className="text-sm text-mut">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-16 bg-bg2">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">What we believe.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
                  {[
                    ["Test first", "Small experiments before big budgets."],
                    ["Say it plainly", "Clear plans, simple reports, no jargon."],
                    ["Stay joined", "One team across strategy, creative and ads."],
                  ].map(([t, d]) => (
                    <div key={t} className="border border-line rounded-[22px] p-6 bg-bg">
                      <p className="font-display font-bold text-xl">{t}</p>
                      <span className="block mt-3 text-mut text-sm">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <CTABanner />
          </>
        );

      case "team":
        return (
          <>
            <PageHeader
              crumbs={[["About", "about"], ["Team"]]}
              title="The people behind the work."
              lead="A tight-knit crew of strategists, filmmakers, media buyers, and creator managers."
            />
            <section className="py-8">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {TEAM.map((m) => (
                  <motion.div
                    key={m.name}
                    whileHover={{ y: -5 }}
                    className="rounded-[22px] bg-bg2 border border-line p-5"
                  >
                    <div
                      className="w-full aspect-[1.15] rounded-2xl grid place-items-center font-display font-bold text-[52px] text-white mb-4"
                      style={{ background: `linear-gradient(135deg,${m.grad})` }}
                    >
                      {m.name[0]}
                    </div>
                    <h3 className="text-[22px] font-bold">{m.name}</h3>
                    <span className="text-ac text-sm font-semibold block mb-1.5">{m.role}</span>
                    <p className="text-mut text-[14.5px]">{m.bio}</p>
                  </motion.div>
                ))}
              </div>
            </section>
            <CTABanner title="Want to join us?" desc="See open roles in the lab." />
          </>
        );

      case "careers":
        return (
          <>
            <PageHeader
              crumbs={[["About", "about"], ["Careers"]]}
              title="Join the lab."
              lead="Small team, real campaigns, fast learning. Open roles are samples; replace with yours."
            />
            <section className="py-8">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <FaqList
                  items={[
                    ["Social media manager", "Plan and run content calendars for retail and brand clients. 2+ years experience. Lucknow or remote."],
                    ["Video editor", "Cut reels and short films quickly with strong taste. Portfolio required."],
                    ["Creator partnerships executive", "Find, brief and manage creators for campaigns. Strong communication needed."],
                  ]}
                />
                <a href="mailto:careers@yuktlabs.com" className="btn-tactile btn-primary mt-7">
                  Apply by email
                </a>
              </div>
            </section>
          </>
        );

      case "blog": {
        const filteredPosts = POSTS.filter((p) => {
          const matchCat = blogCat === "All" || p.cat === blogCat;
          const matchQ =
            !blogQuery.trim() ||
            `${p.t} ${p.s} ${p.cat}`.toLowerCase().includes(blogQuery.toLowerCase().trim());
          return matchCat && matchQ;
        });

        return (
          <>
            <PageHeader
              crumbs={[["About", "about"], ["Blog & Insights"]]}
              title="Notes from the lab."
              lead="Practical playbooks on retail promotion, creator marketing, and small-budget testing."
            />
            <section className="py-8">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center gap-4 flex-wrap mb-6">
                  <div className="flex flex-wrap gap-2">
                    {["All", "Retail", "Influencer", "Strategy", "Analytics"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setBlogCat(c)}
                        className={`px-4 py-2 rounded-full border-[1.5px] text-sm font-medium transition-colors ${
                          blogCat === c ? "bg-ink text-bg border-ink" : "bg-bg text-ink border-line hover:border-ac"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <input
                    type="search"
                    value={blogQuery}
                    onChange={(e) => setBlogQuery(e.target.value)}
                    placeholder="Search playbooks..."
                    className="px-4 py-2.5 rounded-full border-[1.5px] border-line bg-bg text-ink min-w-[240px] focus:outline-none focus:border-ac"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPosts.map((p) => (
                    <a
                      key={p.id}
                      href={`#post-${p.id}`}
                      className="border border-line rounded-[22px] p-6 bg-bg flex flex-col gap-3 hover:-translate-y-1 hover:border-ac transition-all"
                    >
                      <small className="text-ac font-semibold text-[13px] uppercase tracking-wider">{p.cat}</small>
                      <h3 className="text-[23px] font-bold">{p.t}</h3>
                      <p className="text-mut text-[15px] flex-1">{p.s}</p>
                      <span className="font-semibold text-ac">Read article →</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
            <CTABanner />
          </>
        );
      }

      case "pricing":
        return (
          <>
            <PageHeader
              crumbs={[["Pricing"]]}
              title="Simple plans."
              lead="Monthly retainers. Ad spend and creator fees are paid by you directly. Sample prices; edit to suit."
            />
            <section className="py-4">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <div className="inline-flex mt-5 border border-line rounded-full p-1 bg-bg2">
                  {[
                    ["m", "Monthly"],
                    ["y", "Yearly · save 20%"],
                  ].map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setBilling(val)}
                      className={`px-5 py-2 rounded-full font-medium transition-colors ${
                        billing === val ? "bg-ink text-bg" : "text-ink"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
                  {[
                    ["Starter", 25, 20, ["Social media management", "12 designed posts", "Monthly report"], false],
                    ["Growth", 60, 48, ["Everything in Starter", "4 reels and 1 shoot", "Influencer campaign", "Paid ads management"], true],
                    ["Custom", 0, 0, ["Multi-city retail promotion", "Large creator campaigns", "Dedicated team"], false],
                  ].map(([name, mPrice, yPrice, feats, featured]) => (
                    <div
                      key={name}
                      className={`rounded-[24px] p-7 flex flex-col gap-4 border transition-transform hover:-translate-y-1.5 ${
                        featured ? "bg-ink text-bg border-ink" : "bg-bg text-ink border-line"
                      }`}
                    >
                      <h3 className="text-[25px] font-bold">{name}</h3>
                      <div className="font-display font-bold text-[42px]">
                        {mPrice ? (
                          <>
                            ₹{billing === "y" ? yPrice : mPrice}k
                            <small className="font-sans font-medium text-sm opacity-60"> /month</small>
                          </>
                        ) : (
                          "Let’s talk"
                        )}
                      </div>
                      <ul className="flex-1 space-y-2.5">
                        {feats.map((f) => (
                          <li key={f} className="before:content-['✓'] before:text-ac before:font-bold before:mr-3">
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className={`btn-tactile ${featured ? "!bg-bg !text-ink !border-bg" : ""}`}
                      >
                        {mPrice ? `Choose ${name}` : "Get a quote"}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-16">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
                <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Questions.</h2>
                <FaqList
                  items={[
                    ["How soon can a campaign start?", "Most go live within two weeks of the brief. Urgent festival offers can start in days."],
                    ["Do you work with small shops?", "Yes. Starter is built for local shops and retailers."],
                    ["Who pays for ads and creators?", "You pay them directly, so there is no markup."],
                    ["Can I change or stop my plan?", "Yes, with 30 days’ notice."],
                  ]}
                />
              </div>
            </section>
          </>
        );

      case "contact": {
        const toggleTag = (tag) =>
          setBriefTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));

        const submitBrief = (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setBriefSent(true);
          window.location.href = `mailto:hello@yuktlabs.com?subject=${encodeURIComponent(
            `New brief from ${fd.get("name")}`
          )}&body=${encodeURIComponent(
            `Name: ${fd.get("name")}
Email: ${fd.get("email")}
Interested in: ${briefTags.join(", ") || "-"}

${fd.get(
              "message"
            )}`
          )}`;
        };

        return (
          <>
            <PageHeader crumbs={[["Contact"]]} title="Tell us your goal." lead="We reply within one working day." />
            <section className="py-8">
              <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <form onSubmit={submitBrief} className="grid gap-3.5">
                  <div className="flex flex-wrap gap-2">
                    {["Brand campaign", "Influencers", "Shop promotion", "Paid ads", "Video"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2 rounded-full border-[1.5px] text-sm font-medium transition-colors ${
                          briefTags.includes(tag)
                            ? "bg-ink text-bg border-ink"
                            : "bg-bg text-ink border-line hover:border-ac"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-2xl border border-line bg-bg2 focus:outline-2 focus:outline-ac"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full px-4 py-3.5 rounded-2xl border border-line bg-bg2 focus:outline-2 focus:outline-ac"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What are you promoting, and by when?"
                    className="w-full px-4 py-3.5 rounded-2xl border border-line bg-bg2 focus:outline-2 focus:outline-ac"
                  />
                  <button type="submit" className="btn-tactile btn-primary">
                    Send my brief
                  </button>
                  {briefSent && <p className="font-semibold text-ac">Your email app is opening with your brief.</p>}
                </form>

                <div>
                  <h2 className="text-[32px] font-bold">Prefer to talk?</h2>
                  <ul className="mt-4 space-y-3">
                    {["hello@yuktlabs.com", "Lucknow, Uttar Pradesh, India", "Mon to Sat, 10am to 7pm"].map((line) => (
                      <li key={line} className="before:content-['✓'] before:text-ac before:font-bold before:mr-3">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </>
        );
      }

      default:
        return renderHome();
    }
  };

  function renderHome() {
    const aud = AUDIENCES[selectedAud];
    return (
      <>
        <div className="pt-[102px] lg:pt-[118px] pb-9">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <div className="launch-shimmer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg2 border border-line text-[10.5px] sm:text-[13px] tracking-wider font-semibold mb-5 relative overflow-hidden whitespace-nowrap max-w-full">
              <span className="pulse-dot w-2 h-2 flex-none rounded-full bg-ac2" />
              <span className="truncate">COMING SOON · LAUNCHING JAN 1, 2027 · STAY TUNED</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.32fr_1fr] gap-8 lg:gap-11 items-end">
              <div>
                <h1 className="text-[clamp(42px,7vw,96px)] font-bold">
                  {HERO_WORDS.map((word, i) => (
                    <span key={word} className="inline-block overflow-hidden align-top pb-[0.06em] mr-[0.22em]">
                      <motion.i
                        className="inline-block not-italic"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {word}
                      </motion.i>
                    </span>
                  ))}
                </h1>
                <p className="text-mut text-[18.5px] max-w-[54ch] my-6">
                  Yukt Labs plans and runs campaigns for brands, influencers, organizations, shops and retailers. We try
                  an idea small, keep what works and scale it.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="#works" className="btn-tactile btn-primary">
                    See our work
                  </a>
                  <a href="#services" className="btn-tactile">
                    Our services
                  </a>
                </div>
              </div>

              <div className="border border-line rounded-[24px] p-6 bg-bg2">
                <h4 className="text-[19px] font-bold mb-3">Try an experiment: what is your goal?</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(GOALS).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGoal(g)}
                      className={`px-4 py-2 rounded-full border-[1.5px] text-[14.5px] font-medium transition-colors ${
                        selectedGoal === g
                          ? "bg-ink text-bg border-ink"
                          : "bg-bg text-ink border-line hover:border-ac"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={selectedGoal}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 pt-4 border-t border-dashed border-line text-[15px] grid gap-2"
                  >
                    {GOALS[selectedGoal].map((item) => (
                      <li key={item} className="before:content-['+'] before:text-ac before:font-bold before:mr-2.5">
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
                <a href="#contact" className="btn-tactile btn-primary mt-4 w-full">
                  Plan this for me
                </a>
              </div>
            </div>

            <LaunchBanner />
          </div>

          <div className="overflow-hidden border-y border-line py-4 mt-12 whitespace-nowrap">
            <div className="inline-flex gap-12 animate-marquee font-display font-bold text-xl sm:text-2xl text-mut">
              {[
                "Brand campaigns",
                "Influencer collaborations",
                "Retail promotions",
                "Festival offers",
                "Product launches",
                "Social content",
                "Brand campaigns",
                "Influencer collaborations",
                "Retail promotions",
                "Festival offers",
                "Product launches",
                "Social content",
              ].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="py-10 border-b border-line">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <small className="block text-center text-mut text-[13.5px] tracking-wider uppercase mb-5">
              Trusted by growing brands, creators & retail stores
            </small>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              {["Saffron & Co.", "Nova Fit", "Bazaar Street", "Kora Skin", "Lucknow Lit Fest", "Chai Theory", "Loom & Co.", "Urban Kart"].map(
                (b) => (
                  <div
                    key={b}
                    className="py-3 px-3 rounded-full border border-line font-display font-bold text-[15px] text-mut hover:text-ink hover:border-ac hover:-translate-y-0.5 transition-all"
                  >
                    {b}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <section className="py-16 lg:py-22">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
              <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Selected work.</h2>
              <a href="#works" className="btn-tactile">
                All work ↗
              </a>
            </div>
            <div className="grid grid-cols-12 gap-5">
              {WORKS.map((w) => (
                <WorkCard key={w.id} work={w} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-22 bg-bg2">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
              <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Services.</h2>
              <a href="#services" className="btn-tactile">
                All services ↗
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-22">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Who we promote.</h2>
            <p className="text-mut max-w-[56ch] mt-4">Select your business type to see the exact promotion mix we run.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {Object.keys(AUDIENCES).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSelectedAud(k)}
                  className={`px-4 py-2 rounded-full border-[1.5px] text-[14.5px] font-medium transition-colors ${
                    selectedAud === k ? "bg-ink text-bg border-ink" : "bg-bg text-ink border-line hover:border-ac"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAud}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-8 border border-line rounded-[24px] p-6 sm:p-8 bg-bg grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-center"
              >
                <div>
                  <h3 className="text-[28px] font-bold mb-2.5">{aud.t}</h3>
                  <p className="text-mut">{aud.p}</p>
                  <a href="#contact" className="btn-tactile btn-primary mt-5">
                    Promote with us
                  </a>
                </div>
                <ul className="space-y-3">
                  {aud.k.map((item) => (
                    <li key={item} className="before:content-['✓'] before:text-ac before:font-bold before:mr-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="py-16 lg:py-22 bg-bg2">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">How a campaign moves.</h2>
            <p className="text-mut max-w-[56ch] mt-4">
              The same five steps every time, so you always know what comes next.
            </p>
            <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="hidden lg:block absolute top-[21px] inset-x-0 h-[2px] bg-line" />
              <div className="lg:hidden absolute top-5 bottom-5 left-[19px] w-[2px] bg-gradient-to-b from-ac to-line" />
              {[
                ["Brief", "We listen to your goal, audience and budget.", "Day 1–2"],
                ["Strategy", "A channel and content plan with clear targets.", "Day 3–5"],
                ["Create", "Design, video and copy, approved by you.", "Week 2"],
                ["Launch", "Posts, creators and ads go live on schedule.", "Week 3"],
                ["Grow", "We measure, report and improve every week.", "Weekly"],
              ].map(([title, desc, tag], i) => (
                <div key={title} className="relative grid grid-cols-[40px_1fr] lg:block gap-x-4 py-3 lg:py-0">
                  <div className="row-span-3 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-bg border-2 border-ac grid place-items-center font-display font-bold text-sm relative z-10 shadow-[0_0_0_4px_var(--bg2)] lg:shadow-none">
                    {i + 1}
                  </div>
                  <h3 className="text-[19px] lg:text-[21px] font-bold lg:mt-4 mb-1">{title}</h3>
                  <p className="text-[14.5px] lg:text-[15px] text-mut">{desc}</p>
                  <small className="inline-block mt-1.5 text-xs font-semibold text-ac">{tag}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-22">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
              <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Latest from the lab.</h2>
              <a href="#blog" className="btn-tactile">
                Read all insights ↗
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {POSTS.slice(0, 3).map((p) => (
                <a
                  key={p.id}
                  href={`#post-${p.id}`}
                  className="border border-line rounded-[22px] p-6 bg-bg flex flex-col gap-3 hover:-translate-y-1 hover:border-ac transition-all"
                >
                  <small className="text-ac font-semibold text-[13px] uppercase tracking-wider">{p.cat}</small>
                  <h3 className="text-[23px] font-bold">{p.t}</h3>
                  <p className="text-mut text-[15px] flex-1">{p.s}</p>
                  <span className="font-semibold text-ac">Read note →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-22 bg-bg2">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <h2 className="text-[clamp(32px,4.8vw,54px)] font-bold">Clients, in their words.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
              {[
                ["They turned our opening into a street-wide event.", "Owner, Saffron & Co."],
                ["Clear plans and honest reports. We always knew where our money went.", "Marketing lead, Kora Skin"],
                ["The creators felt real to our audience.", "Founder, Nova Fit"],
              ].map(([quote, author]) => (
                <div key={author} className="border border-line rounded-[22px] p-6 bg-bg">
                  <p className="font-display font-bold text-xl leading-snug">“{quote}”</p>
                  <span className="block mt-3.5 text-mut text-sm">{author} (sample review)</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </>
    );
  }

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 h-[3px] w-full bg-ac origin-left z-[130]"
      />

      <Navbar
        route={route}
        theme={theme}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      <main className="min-h-[80vh]">{renderPage()}</main>

      <Footer />

      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 20 }}
        className={`fixed right-5 bottom-5 w-[46px] h-[46px] rounded-full border border-line bg-ink text-bg text-lg z-[90] cursor-pointer ${
          showTop ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        ↑
      </motion.button>
    </>
  );
}
