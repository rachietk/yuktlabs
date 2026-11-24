export const GRADIENTS = [
  "linear-gradient(135deg,#ff7a45,#ffb86b)",
  "linear-gradient(135deg,#00927d,#6fe0c8)",
  "linear-gradient(135deg,#4b2eff,#9a7bff)",
  "linear-gradient(135deg,#ff6b9f,#ffc2d6)",
  "linear-gradient(135deg,#1a2420,#4f6b62)",
  "linear-gradient(135deg,#d99a2b,#f4d58a)",
];

export const SERVICES = [
  {
    id: "brand-campaigns",
    n: "Brand campaigns",
    i: "a",
    s: "Ideas and creative that make a brand memorable.",
    l: "We build the idea, the look and the message, then run it across the channels your audience actually uses.",
    d: ["Brand strategy and naming", "Launch and festival campaigns", "Posters, packaging and identity", "Press and PR outreach"],
  },
  {
    id: "influencer-marketing",
    n: "Influencer marketing",
    i: "b",
    s: "The right creators, briefed and managed for you.",
    l: "We find creators your audience already trusts, write the brief, manage content approvals and report on results.",
    d: ["Creator discovery and matching", "Briefs, contracts and payouts", "Content approvals", "Campaign reporting"],
  },
  {
    id: "shop-retail-promotion",
    n: "Shop and retail promotion",
    i: "c",
    s: "Offers and local promotion that bring people in.",
    l: "From a single shop opening to six-store festival sales, we plan offers and promote them locally and online.",
    d: ["Opening and festival offers", "Local Instagram and Google ads", "In-store displays and print", "Store-wise sales reports"],
  },
  {
    id: "paid-media",
    n: "Paid media",
    i: "d",
    s: "Ads on Instagram, Google and YouTube, tuned weekly.",
    l: "We set up tracking, test creative and move budget to what works, so every rupee is accounted for.",
    d: ["Instagram and Facebook ads", "Google Search and YouTube", "Tracking and landing pages", "Weekly optimisation"],
  },
  {
    id: "video-content",
    n: "Video and content",
    i: "e",
    s: "Reels, product shoots and short films for the feed.",
    l: "A small crew and quick edits. We shoot at your shop, studio or location and deliver ready to post.",
    d: ["Reels and short films", "Product and catalogue shoots", "Scripting and editing", "Social content calendars"],
  },
  {
    id: "analytics-reports",
    n: "Analytics and reports",
    i: "f",
    s: "Plain-language reports on what worked.",
    l: "Every campaign ends with clear numbers and a short call, so you know what to repeat and what to drop.",
    d: ["Monthly performance report", "Dashboard setup", "Audience insight", "Next-step plan"],
  },
];

export const WORKS = [
  {
    id: "saffron-co",
    t: "Saffron & Co.",
    c: "Restaurant launch",
    k: "launch",
    b: true,
    d: "A 30-day opening campaign with local food creators.",
    ch: "A new restaurant needed a full house in its first week, with no existing audience.",
    do: ["Teaser reels before opening", "12 local food creators invited", "First-week offer promoted with local ads"],
    st: [["2.4M", "Reach"], ["+180%", "Footfall"], ["35", "Creator posts"]],
    sv: ["influencer-marketing", "paid-media"],
  },
  {
    id: "nova-fit",
    t: "Nova Fit",
    c: "Influencer campaign",
    k: "influencer",
    d: "Fitness creators showed real 30-day routines with the app.",
    ch: "A fitness app needed installs from people who would keep using it.",
    do: ["18 fitness creators briefed", "30-day routine series", "Tracked install links"],
    st: [["60k", "Installs"], ["4.1%", "Engagement"], ["18", "Creators"]],
    sv: ["influencer-marketing", "analytics-reports"],
  },
  {
    id: "bazaar-street",
    t: "Bazaar Street",
    c: "Retail promotion",
    k: "retail",
    d: "Festival offers across 6 stores.",
    ch: "Six stores wanted a strong festival season without a big budget.",
    do: ["One offer, six local ad sets", "In-store displays and print", "Store-wise reporting"],
    st: [["+62%", "Sales"], ["6", "Stores"], ["21 days", "Duration"]],
    sv: ["shop-retail-promotion", "paid-media"],
  },
  {
    id: "kora-skin",
    t: "Kora Skin",
    c: "Product launch",
    k: "launch",
    d: "Launch film, creator sampling and an ad funnel.",
    ch: "A skincare brand launching online with a small awareness base.",
    do: ["Launch film and product shoot", "Creator sampling kits", "Instagram and Google ad funnel"],
    st: [["3.2x", "Return on ad spend"], ["90k", "Visitors"], ["12k", "Orders"]],
    sv: ["video-content", "paid-media"],
  },
  {
    id: "lucknow-lit-fest",
    t: "Lucknow Lit Fest",
    c: "Organization event",
    k: "event",
    b: true,
    d: "City-wide awareness for a cultural event.",
    ch: "A festival needed attendance from across the city in four weeks.",
    do: ["Posters and short videos", "Press and media partners", "Social countdown series"],
    st: [["15k", "Attendees"], ["1.1M", "Views"], ["8", "Media partners"]],
    sv: ["brand-campaigns", "video-content"],
  },
  {
    id: "chai-theory",
    t: "Chai Theory",
    c: "Brand identity",
    k: "brand",
    d: "New identity, packaging and launch series.",
    ch: "A tea brand wanted to look premium and travel beyond its first city.",
    do: ["Identity and packaging", "Launch social series", "Retail shelf displays"],
    st: [["+90%", "Followers"], ["5", "Cities"], ["2x", "Repeat buyers"]],
    sv: ["brand-campaigns", "shop-retail-promotion"],
  },
];

export const POSTS = [
  {
    id: "small-budget-retail-tests",
    cat: "Retail",
    t: "How a ₹15k test beats a ₹1.5L guess for local shops",
    s: "Why testing three hyper-local offers over 7 days reveals what actually brings footfall.",
    b: "Before committing a full festive ad budget, we run three small creative hooks within a 3 km radius of each storefront. Within seven days, footfall coupons and map-direction clicks show which offer pulls customers through the door—letting retailers scale only the winner.",
  },
  {
    id: "creator-briefs-that-convert",
    cat: "Influencer",
    t: "Writing creator briefs that feel like stories, not scripts",
    s: "When creators speak in their own voice, watch-through rates double and audiences trust the recommendation.",
    b: "Audiences skip scripted ad reads in two seconds. At Yukt Labs, our briefs give creators three clear product truths, a real-life hook, and full freedom on framing—resulting in 4%+ engagement and genuine purchase intent.",
  },
  {
    id: "festival-launch-checklist",
    cat: "Strategy",
    t: "The 21-day festival promotion playbook for brands & stores",
    s: "A step-by-step timeline covering teaser reels, creator seeding, and retargeting ads.",
    b: "Successful festival campaigns start three weeks before the rush: Week 1 builds anticipation with teaser reels and creator previews; Week 2 drops the hero offer across local ads and WhatsApp broadcasts; Week 3 retargets engaged viewers with urgency.",
  },
  {
    id: "measuring-offline-footfall",
    cat: "Analytics",
    t: "Connecting Instagram reels to real-world store visits",
    s: "Simple QR codes, store-specific offer words, and geo-fenced reporting anyone can read.",
    b: "You do not need complex enterprise software to track offline walk-ins. Unique creator codes, dynamic QR tent-cards at the billing counter, and radius-targeted ad sets tell you exactly which reel drove yesterday's sales.",
  },
];

export const AUDIENCES = {
  Brands: {
    t: "Launch products and build category recall.",
    p: "We combine hero brand films, creator sampling, and performance funnels so new and growing brands stand out across digital feeds and retail shelves.",
    k: ["Hero launch films & visual identity", "Creator seeding & unboxing campaigns", "Full-funnel Meta & Google ad scaling"],
  },
  Influencers: {
    t: "Turn audience trust into brand partnerships & IP.",
    p: "We help creators package their media kits, negotiate fair brand deals, produce high-retention series, and launch their own merchandise or digital products.",
    k: ["Brand deal sourcing & negotiation", "High-retention reel & YouTube production", "Audience growth & monetization strategy"],
  },
  Organizations: {
    t: "Fill auditoriums, festivals, and public initiatives.",
    p: "From cultural festivals to non-profit drives, we build city-wide buzz through posters, press outreach, countdown videos, and community ambassadors.",
    k: ["Event identity, posters & countdown reels", "Local press, radio & media partnerships", "Ticket & registration conversion ads"],
  },
  Shops: {
    t: "Bring neighbours and new shoppers through your door.",
    p: "Built for cafes, boutiques, salons, and clinics—hyper-local ads and neighbourhood food/lifestyle creators that turn views into same-week walk-ins.",
    k: ["3 km radius Instagram & Google Map ads", "Local creator tasting & store visits", "Opening-week & weekend offer flyers"],
  },
  Retailers: {
    t: "Scale multi-store seasonal sales with unified campaigns.",
    p: "For multi-outlet chains and showrooms, we synchronize regional offers, in-store visual displays, and store-by-store performance tracking.",
    k: ["Multi-store festive & clearance campaigns", "In-store standees, shelf talkers & print", "Store-wise ROI & footfall reporting"],
  },
};

export const GOALS = {
  Awareness: ["Influencer reels", "Short video ads", "Brand campaign", "Typical result: reach in the millions"],
  Footfall: ["Local Instagram and Google ads", "Festival offer", "In-store displays", "Typical result: more store visits in 2 to 3 weeks"],
  Sales: ["Paid ads with tracking", "Creator sampling", "Landing page and offers", "Typical result: steady orders and clear return"],
  Followers: ["Reels series", "Creator collaborations", "Content calendar", "Typical result: steady monthly follower growth"],
};

export const TEAM = [
  { name: "Aarav Mehta", role: "Founder and strategy", grad: "#ff7a45,#ffb86b", bio: "10+ years building launch campaigns for consumer brands and retail chains." },
  { name: "Isha Verma", role: "Creative director", grad: "#00927d,#6fe0c8", bio: "Leads visual systems, packaging, and short-form video storytelling." },
  { name: "Rohan Das", role: "Head of paid media", grad: "#4b2eff,#9a7bff", bio: "Manages Meta, Google, and YouTube funnels with weekly testing." },
  { name: "Meera Nair", role: "Creator partnerships", grad: "#ff6b9f,#ffc2d6", bio: "Connects brands with 45+ vetted regional and national creators." },
];
