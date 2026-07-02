import {
  SiAirtable,
  SiAsana,
  SiCalendly,
  SiGoogleanalytics,
  SiGooglesheets,
  SiGooglecalendar,
  SiHubspot,
  SiInstagram,
  SiMeta,
  SiNotion,
  SiOdoo,
  SiRazorpay,
  SiShopify,
  SiTypeform,
  SiWhatsapp,
  SiWoocommerce,
  SiZapier,
  SiZoho,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const profile = {
  name: "Rinkesh Kumar Singh",
  headline: "Senior Implementation Specialist & Integration Engineer",
  roles: [
    "Senior Implementation Specialist",
    "Customer Success Manager",
    "Integration & Automation Engineer",
  ],
  location: "Gurgaon, India",
  email: "rinkeshsingh0110@gmail.com",
  phone: "+91 94526 98676",
  linkedin: "https://linkedin.com/in/rinkeshsingh0110",
  github: "https://github.com/",
  photo: "/profile.jpg",
  available: true,
  summary:
    "Senior Implementation Specialist & CSM with 4+ years in B2B SaaS / MarTech, owning a portfolio of 200 active accounts worth ~$50K USD in monthly recurring revenue with under 2% churn. I engineer pre-built integrations across checkouts, payment gateways, CRMs, and ERPs — turning bespoke setups into repeatable plug-ins that cut onboarding and go-live time. Delivered measurable outcomes for 600+ brands across EdTech, Healthcare, E-commerce, and Sports. Beyond delivery, I work closely with company CXOs as a trusted advisor — contributing directly to the product feature roadmap and company growth strategy.",
} as const;

// A standout differentiator, surfaced as an attention-catching banner.
export const highlight = {
  badge: "Beyond the support queue",
  title: "Trusted advisor to the CXO team",
  body: "I work closely with the company's CXOs in frequent strategy sessions — turning frontline customer insight into advisory input that directly shapes the product feature roadmap and company growth plan.",
  points: ["Product feature roadmap", "Company growth strategy", "Frontline customer insight"],
};

export type Stat = { value: string; label: string; sub?: string };

export const headlineStats: Stat[] = [
  { value: "200", label: "Active accounts", sub: "managed concurrently" },
  { value: "$50K", label: "Monthly recurring revenue", sub: "portfolio owned" },
  { value: "<2%", label: "Churn rate", sub: "held through QBRs" },
  { value: "900+", label: "Brands delivered", sub: "across 10+ verticals" },
];

export const impactStats: Stat[] = [
  { value: "200+", label: "Integration flows shipped", sub: "Node.js, Apps Script, Webhooks" },
  { value: "60%", label: "Less manual operational load", sub: "via custom internal tooling" },
  { value: "40%", label: "Faster integration delivery", sub: "through process redesign" },
];

export type Integration = { name: string; icon?: IconType; domain?: string };

// Full QuickReply.ai integration catalog that Rinkesh implements & supports.
// Real logos where the open-source icon set has them; the rest render name-forward.
export const integrations: Integration[] = [
  { name: "Airtable", icon: SiAirtable, domain: "airtable.com" },
  { name: "Amoga CRM", domain: "amoga.io" },
  { name: "Asana", icon: SiAsana, domain: "asana.com" },
  { name: "Calendly", icon: SiCalendly, domain: "calendly.com" },
  { name: "Cashfree", domain: "cashfree.com" },
  { name: "CleverTap", domain: "clevertap.com" },
  { name: "ClickPost", domain: "clickpost.ai" },
  { name: "Delhivery", domain: "delhivery.com" },
  { name: "Easebuzz", domain: "easebuzz.in" },
  { name: "Ecom 360", domain: "cashfree.com" },
  { name: "Exotel", domain: "exotel.com" },
  { name: "Fastrr", domain: "fastrr.com" },
  { name: "Freshworks", domain: "freshworks.com" },
  { name: "Go High Level", domain: "gohighlevel.com" },
  { name: "GoKwik", domain: "gokwik.co" },
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "Google Apps Script", icon: SiGooglesheets },
  { name: "Google Calendar", icon: SiGooglecalendar },
  { name: "Gorgias", domain: "gorgias.com" },
  { name: "HubSpot", icon: SiHubspot, domain: "hubspot.com" },
  { name: "Instagram", icon: SiInstagram, domain: "instagram.com" },
  { name: "Jibble", domain: "jibble.io" },
  { name: "Jotform", domain: "jotform.com" },
  { name: "Judge.me", domain: "judge.me" },
  { name: "Klaviyo", domain: "klaviyo.com" },
  { name: "Kylas", domain: "kylas.io" },
  { name: "LeadSquared", domain: "leadsquared.com" },
  { name: "Loop Subscription", domain: "loopwork.co" },
  { name: "Loox", domain: "loox.io" },
  { name: "Magento", domain: "magento.com" },
  { name: "Meta", icon: SiMeta, domain: "meta.com" },
  { name: "Meta Pixel", icon: SiMeta, domain: "meta.com" },
  { name: "MoEngage", domain: "moengage.com" },
  { name: "Msg91", domain: "msg91.com" },
  { name: "Nector", domain: "nector.io" },
  { name: "Nimbus Post", domain: "nimbuspost.com" },
  { name: "Nitro" },
  { name: "NoPaperForms", domain: "nopaperforms.com" },
  { name: "Notion", icon: SiNotion, domain: "notion.so" },
  { name: "Odoo", icon: SiOdoo, domain: "odoo.com" },
  { name: "PayU", domain: "payu.in" },
  { name: "Periskope", domain: "periskope.app" },
  { name: "Pipedream", domain: "pipedream.com" },
  { name: "Proviews" },
  { name: "QuickReply.ai", domain: "quickreply.ai" },
  { name: "Razorpay", icon: SiRazorpay, domain: "razorpay.com" },
  { name: "Razorpay Magic Checkout", icon: SiRazorpay, domain: "razorpay.com" },
  { name: "Razorpay SSO", icon: SiRazorpay, domain: "razorpay.com" },
  { name: "RazorpayX Payroll", icon: SiRazorpay, domain: "razorpay.com" },
  { name: "Recharge Subscriptions", domain: "rechargepayments.com" },
  { name: "Return Prime", domain: "returnprime.com" },
  { name: "Ringg AI", domain: "ringg.ai" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Salesmate CRM", domain: "salesmate.io" },
  { name: "Seal Subscriptions", domain: "sealsubscriptions.com" },
  { name: "Shipio" },
  { name: "Shiprocket", domain: "shiprocket.in" },
  { name: "Shopflo", domain: "shopflo.com" },
  { name: "Shopify", icon: SiShopify, domain: "shopify.com" },
  { name: "ShopPass" },
  { name: "Simpl", domain: "getsimpl.com" },
  { name: "Swift" },
  { name: "TeleCRM", domain: "telecrm.in" },
  { name: "Teleforce" },
  { name: "Twilio", domain: "twilio.com" },
  { name: "Typeform", icon: SiTypeform, domain: "typeform.com" },
  { name: "Vinculum", domain: "vinculumgroup.com" },
  { name: "WareIQ", domain: "wareiq.com" },
  { name: "WebEngage", domain: "webengage.com" },
  { name: "WhatsApp API", icon: SiWhatsapp, domain: "whatsapp.com" },
  { name: "WooCommerce", icon: SiWoocommerce, domain: "woocommerce.com" },
  { name: "Zapier", icon: SiZapier, domain: "zapier.com" },
  { name: "Zenoti", domain: "zenoti.com" },
  { name: "Zoho Analytics", icon: SiZoho, domain: "zoho.com" },
  { name: "Zoho Bigin", icon: SiZoho, domain: "zoho.com" },
  { name: "Zoho Books", icon: SiZoho, domain: "zoho.com" },
  { name: "Zoho CRM", icon: SiZoho, domain: "zoho.com" },
  { name: "Zoho Desk", icon: SiZoho, domain: "zoho.com" },
  { name: "Zoho Flow", icon: SiZoho, domain: "zoho.com" },
];

// Home marquee shows only real brand logos, deduped so no logo repeats.
export const marqueeLogos: Integration[] = (() => {
  const seen = new Set<IconType>();
  const out: Integration[] = [];
  for (const it of integrations) {
    if (it.icon && !seen.has(it.icon)) {
      seen.add(it.icon);
      out.push({ name: it.name.replace(/ (Analytics|Magic Checkout|SSO|Pixel)$/, ""), icon: it.icon });
    }
  }
  return out;
})();

// "Trusted by" brand names — no official logos, rendered as styled chips.
export const brands: string[] = [
  "Gujarat Titans (IPL)",
  "IDP Education",
  "Christ University",
  "Renee Cosmetics",
  "Regrip",
  "Suwasthi",
  "Hair Originals",
  "Mama Nourish",
  "Japam",
  "Kyari",
  "AAFT",
  "Manav Rachna University",
  "Auric",
  "Rage Coffee",
];

export type Role = {
  title: string;
  period: string;
  points: string[];
};

export const company = "QuickReply.ai";
export const companyLocation = "Gurgaon";
export const companyPeriod = "Jul 2022 – Present";

export const experience: Role[] = [
  {
    title: "Senior Implementation Specialist & Customer Success Manager",
    period: "Oct 2025 – Present",
    points: [
      "Executive collaboration: work closely with company CXOs in frequent strategy meetings — providing frontline customer insight and advisory input that shapes the product feature roadmap and company growth plan.",
      "Lead technical architecture and success for 200 active accounts (~$50K USD/month), holding churn below 2% through proactive health checks and value-driven QBRs.",
      "Built and standardized integrations across checkout platforms, payment gateways, CRMs (Zoho, HubSpot, LeadSquared, in-house CRM), and ERPs — turning bespoke setups into repeatable plug-ins.",
      "Gujarat Titans (IPL): Strategic Implementation Partner — architected a high-concurrency WhatsApp fan-engagement workflow handling peak match-day traffic for millions of fans with zero downtime.",
      "Led enrollment and inquiry automation for IDP Education, Christ University, AAFT, and Manav Rachna University.",
      "Built an AI Resume Screener and Mail Merge tools (Node.js / Apps Script), cutting manual recruitment and outreach effort by 60%.",
    ],
  },
  {
    title: "Implementation & Customer Success Manager",
    period: "Mar 2024 – Oct 2025",
    points: [
      "Meta-featured case study: built Hair Originals' automated WhatsApp appointment-booking flow, selected by Meta as a global benchmark use case for the beauty industry.",
      "Deployed 200+ integration flows (Apps Script / JavaScript) while managing a 600+ brand portfolio across Healthcare, E-commerce, and Travel.",
      "Healthcare: patient reminder and report-delivery systems for hospitals — reducing no-shows while maintaining data compliance.",
      "Auric: end-to-end WhatsApp-to-Order flow bridging telesales and digital order logging.",
    ],
  },
  {
    title: "Head of Operations (Dual Role)",
    period: "Mar 2023 – Mar 2024",
    points: [
      "Redesigned delivery processes to cut integration delivery time by 40%.",
      "Automated subscription / top-up payment alerts and webhook-triggered Slack alerting.",
    ],
  },
  {
    title: "Onboarding Specialist & Support Manager",
    period: "Jul 2022 – Mar 2023",
    points: [
      "Led API-based onboarding and training for new customers.",
      "Wrote custom JavaScript webhook handlers extending WooCommerce and WhatsApp API integrations.",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Gujarat Titans (IPL)",
    category: "Fan Engagement",
    blurb:
      "High-volume WhatsApp workflow for live match updates and ticketing queries, engineered to survive peak match-day API traffic serving millions of fans.",
    metric: "0",
    metricLabel: "downtime at peak traffic",
    tags: ["WhatsApp API", "High concurrency", "Webhooks"],
    featured: true,
  },
  {
    name: "Hair Originals",
    category: "Appointment Booking · Meta Featured",
    blurb:
      "Fully automated WhatsApp booking and rescheduling chatbot. Selected by Meta as a global benchmark use case for the beauty industry.",
    metric: "Meta",
    metricLabel: "global benchmark case",
    tags: ["Chatbot", "Beauty", "Automation"],
    featured: true,
  },
  {
    name: "Suwasthi",
    category: "Healthcare · Payment Recovery",
    blurb:
      "Payment-gateway webhooks + CRM triggers driving automated WhatsApp invoices and reminders to recover stalled payments.",
    metric: "70%",
    metricLabel: "lift in payment completion (24h)",
    tags: ["Payments", "Webhooks", "CRM"],
  },
  {
    name: "Regrip",
    category: "Manufacturing · Supply Chain",
    blurb:
      "Custom ERP-lite layer (Apps Script + Webhooks) syncing stock, delivery, and invoice alerts across teams.",
    metric: "80%",
    metricLabel: "less inter-team comms lag",
    tags: ["Apps Script", "ERP-lite", "Ops"],
  },
  {
    name: "Barkens & Rage Coffee",
    category: "Subscription Retention",
    blurb:
      "WhatsApp renewal engine with automated dunning to catch failed and missed subscription renewals before churn.",
    metric: "80%",
    metricLabel: "fewer missed renewals",
    tags: ["Retention", "Dunning", "CLTV"],
  },
];

export type CaseStudy = {
  brand: string;
  metric: string;
  tactic: string;
  summary: string;
  url: string;
  domain?: string;
};

// Case studies authored & published on quickreply.ai — ordered by headline impact.
export const caseStudies: CaseStudy[] = [
  { brand: "Drzya", metric: "1140x ROI", tactic: "Abandoned cart recovery", summary: "Turned ₹652 into ₹7,42,859 through four spaced WhatsApp campaigns with celebrity associations.", url: "https://www.quickreply.ai/case-study/drzya-abandoned-cart-recovery" },
  { brand: "The Wellness Shop", metric: "607x ROI", tactic: "Add-to-cart recovery", summary: "A ₹497 test budget recovered orders worth over ₹3 lakh.", url: "https://www.quickreply.ai/case-study/the-wellness-shop-add-to-cart", domain: "thewellnessshop.in" },
  { brand: "Dermawear", metric: "244x ROI", tactic: "WhatsApp popup lead capture", summary: "Converted 3,800 website leads into 713 orders — ₹7.44L revenue on ₹3,041 spend.", url: "https://www.quickreply.ai/case-study/dermawear-whatsapp-popup", domain: "dermawear.com" },
  { brand: "HairOriginals", metric: "461x ROI", tactic: "Product-browse retargeting", summary: "₹1,11,651 from a ₹242 campaign targeting 15s+ browsers who didn't add to cart.", url: "https://www.quickreply.ai/case-study/hair-originals-whatsapp-product-retargeting", domain: "hairoriginals.com" },
  { brand: "Root & Soil", metric: "182x ROI", tactic: "Abandoned cart recovery", summary: "A two-tier drip converted 2,797 abandoned carts worth ₹32.6 lakh.", url: "https://www.quickreply.ai/case-study/root-and-soil-abandoned-cart-recovery" },
  { brand: "Oralia", metric: "178x ROI", tactic: "Website popup retargeting", summary: "277,100 pop-up opt-ins generated 7,123 new orders.", url: "https://www.quickreply.ai/case-study/oralia-roi-website-popup" },
  { brand: "Vestirio", metric: "175x ROI", tactic: "WhatsApp popup", summary: "1,117 new orders via a 10% discount popup shown after 5 seconds.", url: "https://www.quickreply.ai/case-study/vestirio-roi-whatsapp-popup" },
  { brand: "Renee Cosmetics", metric: "171x ROI", tactic: "Abandoned cart recovery", summary: "Recovered 5,703 abandoned carts through personalized WhatsApp journeys.", url: "https://www.quickreply.ai/case-study/renee-cosmetics-roi-abandon-cart-recovery", domain: "reneecosmetics.in" },
  { brand: "K9 Vitality", metric: "116x ROI", tactic: "RCS re-engagement", summary: "21 orders from ₹568 by adding RCS to the re-engagement playbook.", url: "https://www.quickreply.ai/case-study/how-k9-vitality-achieved-116x-roi-by-adding-rcs-to-their-re-engagement-playbook" },
  { brand: "Namyaa Skincare", metric: "105x ROI", tactic: "Abandoned cart recovery", summary: "Hesitation-addressing recovery messages recovered 333 orders (₹3.45L).", url: "https://www.quickreply.ai/case-study/how-namyaa-skincare-earned-105x-roi-on-whatsapp-without-overcomplicating-personalization", domain: "namyaa.com" },
  { brand: "Auli Lifestyle", metric: "96x ROI", tactic: "WhatsApp popup opt-ins", summary: "Captured 63,403 leads and drove 3,898 new orders via timed pop-ups.", url: "https://www.quickreply.ai/case-study/auli-lifestyles-roi-whatsapp-popup" },
  { brand: "The Wellness Shop", metric: "13,993% ROI", tactic: "Browse abandonment", summary: "₹11 lakh across 1,792 orders at minimal messaging cost.", url: "https://www.quickreply.ai/case-study/whatsapp-browse-abandonment", domain: "thewellnessshop.in" },
  { brand: "Noorson", metric: "6,487% ROI", tactic: "WhatsApp opt-in popup", summary: "Discount-incentivized popup captured numbers, converted via automated welcome flows.", url: "https://www.quickreply.ai/case-study/noorson-roi-whatsapp-opt-ins", domain: "noorson.com" },
  { brand: "K9 Vitality", metric: "5,065% ROI", tactic: "Cross-sell broadcast", summary: "One broadcast to existing customers hit 50% conversion — with no discounts.", url: "https://www.quickreply.ai/case-study/how-one-cross-sell-message-earned-k9-vitality-a-5065-roi" },
  { brand: "Menoveda", metric: "4,253% ROI", tactic: "Repeat-purchase broadcasts", summary: "Monthly restock campaign generated ₹46,477 from ₹1,092 spend.", url: "https://www.quickreply.ai/case-study/menoveda-repeat-purchase", domain: "menoveda.com" },
  { brand: "Dermazone", metric: "$916K revenue", tactic: "Abandoned cart recovery", summary: "Converted 6,937 abandoned carts at just $1,587 messaging cost.", url: "https://www.quickreply.ai/case-study/dermazone-abandoned-cart" },
  { brand: "Auric", metric: "74.8% recovery", tactic: "Abandoned cart recovery", summary: "Multi-stage automated sequences across WhatsApp, SMS & email.", url: "https://www.quickreply.ai/case-study/auric-customer-communication" },
  { brand: "Attic Salt", metric: "+57% recovery", tactic: "Abandoned cart recovery", summary: "Psychology-based WhatsApp reminder sequences doubled conversions.", url: "https://www.quickreply.ai/case-study/attic-salt-abandon-cart-recovery", domain: "atticsalt.in" },
  { brand: "Isaac Luxe", metric: "50.6% recovered", tactic: "Broadcast auto-retry", summary: "Recovered 1,432 failed WhatsApp messages via automated retry intervals.", url: "https://www.quickreply.ai/case-study/isaac-luxe-broadcasts-retry", domain: "isaacluxe.co" },
  { brand: "TechnoSport", metric: "+23% conversions", tactic: "Browse abandonment flows", summary: "₹530,450 revenue across 852 recovered orders.", url: "https://www.quickreply.ai/case-study/techno-sport-browse-abandonment" },
  { brand: "Renee Cosmetics", metric: "+230% on step 2", tactic: "2-step cart recovery", summary: "The 2nd reminder converts 230% more than the 1st.", url: "https://www.quickreply.ai/case-study/renee-cosmetics-2-step-abandoned-cart-recovery", domain: "reneecosmetics.in" },
  { brand: "Auric", metric: "27% COD→prepaid", tactic: "COD-to-prepaid conversion", summary: "A three-step incentive turned 27% of COD orders into prepaid.", url: "https://www.quickreply.ai/case-study/auric-cod-into-prepaid" },
  { brand: "Manav Rachna University", metric: "713 hrs saved", tactic: "WhatsApp support chatbot", summary: "Bots autonomously handled 89% of inquiries while engaging 4,000 leads.", url: "https://www.quickreply.ai/case-study/whatsapp-chatbots", domain: "manavrachna.edu.in" },
  { brand: "Hero Homes", metric: "2x qualification", tactic: "WhatsApp → ERP lead journey", summary: "Automated WhatsApp-to-ERP capture cut lead leakage for a real-estate developer.", url: "https://www.quickreply.ai/case-study/how-hero-homes-built-a-complete-whatsapp-to-erp-lead-journey", domain: "herohomes.in" },
  { brand: "Sanctity Ferme", metric: "60% faster follow-up", tactic: "Real-estate WhatsApp automation", summary: "Streamlined vacation bookings and investment inquiries, lifting conversions.", url: "https://www.quickreply.ai/case-study/how-sanctity-ferme-reduced-follow-up-time-by-60-using-whatsapp", domain: "sanctityferme.in" },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Development",
    items: ["Node.js (Express)", "JavaScript (ES6+)", "Google Apps Script", "Python (fundamentals)", "HTML / CSS"],
  },
  {
    title: "APIs & Integrations",
    items: ["REST APIs", "Webhooks", "OAuth 2.0", "JSON", "Postman", "Payment gateways"],
  },
  {
    title: "Automation",
    items: ["Zapier", "Make", "n8n", "Pipedream", "Pabbly Connect", "Slack Bots"],
  },
  {
    title: "E-commerce & CRM",
    items: ["Shopify (Liquid/API)", "WooCommerce", "Zoho", "HubSpot", "LeadSquared", "Salesforce", "In-house CRM"],
  },
  {
    title: "Messaging & Tools",
    items: ["WhatsApp Business API", "SMS gateways", "SendGrid / SMTP", "Git / GitHub", "Jira", "Meta Pixel", "Freshdesk"],
  },
];

export type ReviewSource = "G2" | "Shopify";

export type Testimonial = {
  name: string;
  role: string; // subtitle line 1 (job title, or country for Shopify)
  segment: string; // subtitle line 2 (company size, or usage duration)
  date: string;
  title?: string; // review headline (G2)
  quote: string;
  rating: number; // displayed stars
  source: ReviewSource;
  featured?: boolean;
};

// Aggregate social proof — Rinkesh is named personally across G2 & Shopify reviews.
export const reviewProof = {
  rating: "5.0",
  namedReviews: "50+",
  totalReviews: "214",
};

// Verified reviews (displayed at 5★). Names cleaned, longest quotes trimmed.
export const testimonials: Testimonial[] = [
  {
    name: "Yanchi",
    role: "India",
    segment: "Shopify store · ~1 month",
    date: "May 2024",
    source: "Shopify",
    title: "Perfectly configured for our Shopify store",
    quote:
      "I strongly recommend this WhatsApp API service for anyone using a Shopify store! It seamlessly integrates with our operations to send order alerts, collect reviews, manage NDRs, confirm COD orders, and handle customer service. What truly sets it apart is the exceptional support — particularly Mr. Rinkesh, who has been incredibly proactive and attentive, ensuring the WhatsApp API is perfectly configured to our needs. Look no further!",
    rating: 5,
    featured: true,
  },
  {
    name: "GiftingStudio.in",
    role: "India",
    segment: "Shopify store · ~1 month",
    date: "Jan 2025",
    source: "Shopify",
    title: "A game-changer after trying multiple WhatsApp API tools",
    quote:
      "After trying multiple WhatsApp API solutions — Pragma, Bitespeed, Interakt, AI Sensy — we've finally settled with QuickReply, and it's been a game-changer. A special shoutout for their exceptional customization capabilities. Over my 4-year journey with various providers, I haven't seen anyone match this level of tailored support. I'd personally thank Deepash, Rahul, Rinkesh, and the technical team for their dedication.",
    rating: 5,
    featured: true,
  },
  {
    name: "Diptii T.",
    role: "MyHues",
    segment: "Small-Business",
    date: "Aug 2025",
    source: "G2",
    title: "Exceptional customer service, easy to use UI, recommended for startups",
    quote:
      "Their customer support team, especially Rochan and Rinkesh, has been consistently responsive and supportive. Every query, big or small, has been addressed quickly, which made a huge difference during our growth phase. Results of our abandoned-cart campaigns have been far more effective than traditional email retention. Highly recommended for bootstrapped startups.",
    rating: 5,
    featured: true,
  },
  {
    name: "Dapperfeet",
    role: "India",
    segment: "Shopify store · 12 months",
    date: "Feb 2024",
    source: "Shopify",
    quote:
      "They are really prompt in helping out in any way possible. My POC Mr. Rinkesh did a fabulous job explaining all campaign procedures and solved all queries without any delays.",
    rating: 5,
    featured: true,
  },
  {
    name: "Performance M.",
    role: "Performance Marketing",
    segment: "Small-Business",
    date: "Jun 2026",
    source: "G2",
    title: "Outstanding Support, Fast Responses",
    quote:
      "I appreciate the great job Rinkesh and his team have done with QuickReply.ai — especially their outstanding customer support and technical expertise. If you're looking for a reliable WhatsApp automation partner with stellar support, I highly recommend them for a truly 5-star experience. Features like drip campaigns and custom flows have significantly improved our ROAS.",
    rating: 5,
    featured: true,
  },
  {
    name: "Twinkle G.",
    role: "Growth Marketer",
    segment: "Mid-Market",
    date: "Sep 2024",
    source: "G2",
    title: "One of the best Sales & Lead-Gen focused Chatbots ever seen",
    quote:
      "I like the CSM support and the focus on the lead-nurture aspect of the bot, plus the ease of implementation. Nurtured leads and an easy-to-use canvas for building the chatbot.",
    rating: 5,
    featured: true,
  },
  {
    name: "Mama Nourish",
    role: "India",
    segment: "Shopify store · 4 months",
    date: "Nov 2024",
    source: "Shopify",
    quote:
      "We've been using QuickReply for over 4 months and it has proven to be an effective tool for us. Its WhatsApp features have optimised our communication and made campaign management much more efficient. Saloni and Rinkesh have been helpful in assisting us with campaign setup and providing timely support whenever needed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ayushoveda",
    role: "India",
    segment: "Shopify store · 4 months",
    date: "Jul 2024",
    source: "Shopify",
    quote:
      "Customer service is extremely prompt — that's the best part. Since we are non-technical, response from the technical and customer-service team was an important factor in choosing QuickReply. The team is ever ready to get things going, response is very quick, and our concerns are addressed promptly. Keep up the good work!",
    rating: 5,
  },
  {
    name: "Kritika A.",
    role: "Content Strategist Head",
    segment: "Mid-Market",
    date: "Jun 2026",
    source: "G2",
    title: "Exceptional Support Team That Always Delivers",
    quote:
      "The style of resolving our issues has always been admired from our side. Khushbu and Rinkesh have been actively helping us.",
    rating: 5,
  },
  {
    name: "Sareewave",
    role: "India",
    segment: "Shopify store · 6 months",
    date: "Jul 2024",
    source: "Shopify",
    quote:
      "So good — very supportive staff, especially Rinkesh Singh sir. Great service.",
    rating: 5,
  },
  {
    name: "Solar For Nature",
    role: "India",
    segment: "Shopify store · 7 days",
    date: "Jul 2024",
    source: "Shopify",
    quote:
      "Awesome people. These guys are really brilliant and understand every query with ease. Approachable. 10/10 for actionable — looking to have a long-term business with them.",
    rating: 5,
  },
  {
    name: "Amit K.",
    role: "Head — BPR & Sales Automation",
    segment: "Small-Business",
    date: "Apr 2025",
    source: "G2",
    title: "Happy with the service of QuickReply.ai",
    quote:
      "The platform is easy to use and the support from the QuickReply.ai team is awesome. With just an hour's session, even a non-technical person can design and configure the chatbot flow. It helps me run a 24x7 sales-lead mechanism with easy-to-configure conversations, notifications and analytics.",
    rating: 5,
  },
];

export type Recommendation = {
  name: string;
  title: string;
  relationship: string;
  date: string;
  quote: string;
};

// LinkedIn recommendations.
export const recommendations: Recommendation[] = [
  {
    name: "Rochan Tripathi",
    title: "Software Engineer · Customer Success · Solutions · SaaS · CRM",
    relationship: "Worked with Rinkesh on the same team",
    date: "Jun 2026",
    quote:
      "I've worked alongside Rinkesh for a couple of years on the customer success team at QuickReply.ai, and he's genuinely one of the sharpest people I've collaborated with. He has a rare ability to spot client risks before they escalate — more than once, his early flags saved accounts that could've churned. He's also just easy to work with: no ego, always willing to jump in when things get messy. Any team would be better for having him.",
  },
  {
    name: "Anirudh Moza",
    title: "Growth + Automations @ QuickReply.ai",
    relationship: "Worked with Rinkesh on different teams",
    date: "Jun 2026",
    quote:
      "Worked with Rinkesh for quite some time, and whenever anyone had a question around implementations, integrations, or whether something was actually possible, he was usually the person we'd go to. What I appreciated was how quickly he'd get to an answer. A lot of the questions from prospects or customers weren't straightforward, but he'd cut through the complexity, explain things clearly, and help us move conversations forward.",
  },
  {
    name: "Neha Arora",
    title: "B2B SaaS Customer Success Manager · NRR, Retention & Growth",
    relationship: "Worked with Rinkesh on the same team",
    date: "Aug 2025",
    quote:
      "Rinkesh has been a very hardworking and smart-working person. He has been a good customer success manager along with being a very good implementations manager. His ideas for workarounds have helped QuickReply scale up many clients. Overall, he is a multitasker and is highly recommended.",
  },
  {
    name: "Raja Ganesan",
    title: "Founder @ CSHUBB · Customer Success · PLG Strategy & Ops",
    relationship: "Worked with Rinkesh on the same team",
    date: "Jun 2026",
    quote:
      "Rinky is one of the most interesting people I've worked with. I've seen him handle his tasks effectively — even at stressful times, he maintains his smile throughout and makes sure he gets the job done. Knowing him personally and professionally, I can confidently say he will shine wherever he goes. If you're a recruiter looking for a great selection, you're on the right profile!",
  },
];

export const education = [
  {
    title: "B.Tech, Electronics & Communication Engineering",
    org: "H.N.B. Garhwal University, Uttarakhand",
    year: "2022",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  domain?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Meta Certified: WhatsApp for Business Technical Implementation",
    issuer: "Meta",
    issued: "Jun 2026",
    expires: "Jun 2036",
    domain: "meta.com",
  },
  {
    name: "HubSpot Reporting",
    issuer: "HubSpot Academy",
    issued: "Mar 2026",
    expires: "Apr 2036",
    credentialId: "ea1831050135404089df402fc65538e6",
    domain: "hubspot.com",
  },
];

export const recognition = [
  {
    title: "“The Explorer” Award",
    org: "QuickReply.ai — for initiative applying AI/Node.js to business problems",
    year: "2025",
  },
  {
    title: "Python Fundamentals",
    org: "Great Learning",
    year: "",
  },
  {
    title: "4 Years NSS Volunteering",
    org: "3 certificates + PRE-RDC",
    year: "",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "SaaS Toolkit", href: "/toolkit" },
  { label: "Customers", href: "/customers" },
  { label: "Journey", href: "/journey" },
  { label: "Why Me?", href: "/why-me" },
];

export const ctaLink = { label: "Let's Connect", href: "/connect" };
