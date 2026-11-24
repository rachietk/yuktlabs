export const ARCH_SERVICES =
  "CONTENT WRITING • WEBSITE PROMOTION • CAMPAIGN MARKETING • SOCIAL MEDIA MANAGING • INFLUENCER MARKETING • BRAND STRATEGY • ";

export const SERVICES_LIST = [
  {
    id: "brand-campaigns",
    title: "Brand campaigns",
    desc: "Ideas and creative that make a brand memorable across print, social, and retail.",
  },
  {
    id: "influencer-marketing",
    title: "Influencer marketing",
    desc: "The right creators, briefed and managed for authentic audience trust.",
  },
  {
    id: "shop-retail-promotion",
    title: "Shop & retail promotion",
    desc: "Local offers and store-level campaigns that bring footfall through the door.",
  },
  {
    id: "paid-media",
    title: "Paid media",
    desc: "Meta, Google, and YouTube ads tuned weekly around real conversion data.",
  },
  {
    id: "video-content",
    title: "Video & content",
    desc: "High-retention reels, product shoots, and short films ready for the feed.",
  },
  {
    id: "analytics-reports",
    title: "Analytics & reports",
    desc: "Plain-language performance reports so you know what to repeat and scale.",
  },
];

export const WORKS_LIST = [
  {
    id: "saffron-co",
    title: "Saffron & Co.",
    category: "Restaurant launch",
    metric: "+180% Footfall",
    grad: "linear-gradient(135deg,#ff7a45,#ffb86b)",
  },
  {
    id: "nova-fit",
    title: "Nova Fit",
    category: "Influencer campaign",
    metric: "60k Installs",
    grad: "linear-gradient(135deg,#00927d,#6fe0c8)",
  },
  {
    id: "bazaar-street",
    title: "Bazaar Street",
    category: "Retail promotion",
    metric: "+62% Sales",
    grad: "linear-gradient(135deg,#4b2eff,#9a7bff)",
  },
];

export const PROCESS_STEPS = [
  ["01", "Brief", "Goal, audience & budget alignment"],
  ["02", "Strategy", "Channel & creative test hypothesis"],
  ["03", "Create", "Copy, reels, posters & landing pages"],
  ["04", "Launch", "Creators & local/paid ads go live"],
  ["05", "Grow", "Weekly optimization & plain reports"],
];

export const NAV_MENU = [
  {
    label: "Works",
    href: "#works",
    info: "Campaigns we have launched.",
    items: [
      ...WORKS_LIST.map((w) => ({
        title: w.title,
        desc: w.category,
        href: "#works",
      })),
      { title: "All work", desc: "Explore all case studies", href: "#works" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    info: "What we do.",
    items: SERVICES_LIST.map((s) => ({
      title: s.title,
      desc: s.desc,
      href: "#services",
    })),
  },
  {
    label: "About",
    href: "#process",
    info: "Who we are.",
    items: [
      { title: "Our process", desc: "How a campaign moves", href: "#process" },
      { title: "Lab 2.0", desc: "Launching Jan 1, 2027", href: "#home" },
      { title: "Start a brief", desc: "Reply within 24 hours", href: "#contact" },
    ],
  },
  {
    label: "Pricing",
    href: "#contact",
    info: "Simple monthly plans & custom growth sprints.",
  },
  {
    label: "Contact",
    href: "#contact",
    info: "Tell us your goal. We reply within one working day.",
  },
];
