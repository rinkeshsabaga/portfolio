import fs from "fs";

const raw = fs.readFileSync(
  "/Users/rinkeshsingh/portfolio/scratchpad/accounts.csv",
  "utf8"
);

// --- CSV parser (handles quoted fields with commas) ---
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
      else if (c === "\r") { /* skip */ }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const rows = parseCSV(raw).filter((r) => r.length >= 1 && r[0].trim());
rows.shift(); // header

const clean = (s) => (s || "").replace(/\s+/g, " ").trim();

function domainOf(url) {
  let u = clean(url);
  if (!u) return "";
  u = u.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
  u = u.split("/")[0].split("?")[0].trim().toLowerCase();
  if (!u || !u.includes(".")) return "";
  // fix a couple of obvious typos in the source
  u = u.replace(/\.con$/, ".com").replace(/\.cpm$/, ".com");
  return u;
}

function firstRegion(r) {
  const v = clean(r);
  if (!v) return "";
  return v.split(",")[0].trim();
}

// Normalize region into a filterable bucket, inferring from domain TLD when blank.
function regionBucket(r, domain) {
  const v = firstRegion(r);
  const map = {
    India: "India",
    UAE: "UAE",
    Dubai: "UAE",
    "Saudi Arabia": "Saudi Arabia",
    USA: "USA",
    Australia: "Australia",
    "United Kingdom": "UK",
    UK: "UK",
    Ireland: "Ireland",
    Italy: "Europe",
    Spain: "Europe",
    Japan: "Japan",
    HongKong: "Hong Kong",
    Malaysia: "Malaysia",
    "New Zealand": "International",
  };
  if (v) return map[v] || "International";
  // infer from domain TLD
  const d = domain || "";
  if (/\.co\.in$|\.in$|\.org\.in$/.test(d)) return "India";
  if (/\.ae$/.test(d)) return "UAE";
  if (/\.sa$/.test(d)) return "Saudi Arabia";
  if (/\.co\.uk$|\.uk$/.test(d)) return "UK";
  if (/\.com\.hk$/.test(d)) return "Hong Kong";
  if (/\.com\.mx$|\.mx$|\.ma$|\.pe$/.test(d)) return "International";
  return "";
}

// Classify text (category first, else company name) into a high-level vertical.
function classify(text) {
  const c = (text || "").toLowerCase();
  if (!c) return "";
  const has = (...k) => k.some((x) => c.includes(x));

  if (has("gaming", "sports", "sport", "fishing", "golf", "athleti", "fitness", "yoga", "toys", "playart", "bowler"))
    return "Sports & Entertainment";
  if (has("travel", "tourism", "hospitality", "holiday", "trips"))
    return "Sports & Entertainment";
  if (has("healthcare", "hospital", "clinic", "diagnostic", "dental", "medical", "pharma", "healthtech", "surgical", "hearing", "ayurved", " med ", "dermato", "nutraceutical"))
    return "Healthcare & Ayurveda";
  if (has("education", "school", "academy", "university", "institute", "college", "learning", "gurukul", "edu", "tutor", "scholars", "minds"))
    return "Education";
  if (has("real estate", "infrastructure", "construction", "estate", "estates", "realty", "properties", "propert", "heights", "builders"))
    return "Real Estate & Infrastructure";
  if (has("jewell", "jewel", "jewels", "gems", "gold", "diamond", "silver", "ornament", "charms"))
    return "Jewellery, Astrology & Spiritual";
  if (has("spirit", "astro", "pooja", "puja", "japam", "darshan", "sanjeevani", "dharma", "healing"))
    return "Jewellery, Astrology & Spiritual";
  if (has("financial", "finance", "insurance", "advertising", "logistics", "consulting", "technolog", "software", "industries", "enterprise", "enterprises", "overseas", "impex", "engineering", "chemicals", "polymers", "machinery", "packaging", "steel", "metal", "telecom", "networks", "ventures", "capital", "hr ", "recruit", "media", "digital"))
    return "Technology, Finance & B2B";
  if (has("automobile", "mobility", "motors", "auto", "hyundai", "honda", "mahindra", "vehicle", "bicycle", "helmet", " cars", "car care", "detailers"))
    return "Auto, Mobility & Services";
  if (has("food", "beverage", "dairy", "nutrition", "fmcg", "coffee", "tea", "spice", "spicery", "sweets", "masala", "chips", "chocolate", "cocoa", "bakery", "baked", "gummies", "meat", "farm", "cows", "organics", "creamery", "nutra", "drinks", "beverages"))
    return "Food, FMCG & Nutrition";
  if (has("beauty", "cosmetic", "cosmetix", "cosmetics", "wellness", "hair care", "haircare", "hair ", "skincare", "skin", "perfume", "fragrance", "aroma", "scent", "attar", "oud", "personal care", "spa", "salon", "glow", "derma", "herbal", "naturals", "wellbeing", "aesthetics"))
    return "Beauty, Personal Care & Wellness";
  if (has("fashion", "apparel", "home decor", "decor", "homeware", "furniture", "interior", "kitchen", "electronics", "daily essentials", "utensil", "utentils", "sanitary", "gifting", "clothing", "wear", "textile", "saree", "boutique", "attire", "label", "closet", "jeans", "sneakers", "footwear", "shoes", "bags", "watches", "eyewear", "pet", "kids", "baby", "living", "lifestyle", "home"))
    return "D2C, Lifestyle & E-commerce";
  return "";
}

function verticalOf(cat, name) {
  return classify(cat) || classify(name) || "Other";
}

// Normalized key for dedupe — merges variants like "X 2", "X - Backup",
// "X Store", "X (Pvt Ltd)", location/qualifier suffixes.
function dedupKey(name) {
  let s = name.toLowerCase().trim();
  s = s.split(" - ")[0]; // drop " - <qualifier>"
  s = s.replace(/\(.*?\)/g, " "); // drop parentheticals
  s = s.replace(/[®™’'".]/g, "");
  s = s.replace(/\b(pvt|private|ltd|limited|llp|inc|llc|corporation)\b/g, " ");
  s = s.replace(/\b(store|shop|online|official|india|new|backup|main|the|co)\b/g, " ");
  s = s.replace(/\d+/g, " ");
  s = s.replace(/[^a-z0-9]+/g, "");
  return s || name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

// Real (non-myshopify) domains are the best logo source.
const score = (e) =>
  (e.domain && !/myshopify\.com$/.test(e.domain) ? 3 : e.domain ? 1 : 0) +
  (e.vertical !== "Other" ? 2 : 0) +
  (e.region ? 1 : 0);

// Manual merges for variants the normalizer misses (branches, sub-brands).
const nameAliases = {
  "christ university wa lavasa": "Christ University",
  "christ university wa lavasa ": "Christ University",
};

const groups = new Map();
for (const r of rows) {
  let name = clean(r[0]);
  if (!name) continue;
  const canon = nameAliases[name.toLowerCase()];
  if (canon) name = canon;
  const domain = domainOf(r[2]);
  let vertical = verticalOf(r[1], name);
  if (vertical === "Other" && /myshopify\.com$/.test(domain))
    vertical = "D2C, Lifestyle & E-commerce";
  const entry = { name, domain, vertical, region: regionBucket(r[3], domain) };

  const key = dedupKey(name);
  const g = groups.get(key);
  if (!g) {
    groups.set(key, { best: entry, display: name });
  } else {
    if (score(entry) > score(g.best)) g.best = entry;
    // Keep the cleanest (shortest) display name for the merged brand.
    if (name.length < g.display.length) g.display = name;
  }
}

// Manual logo/domain overrides for accounts with no (or wrong) website in the book.
// Keyed by lower-cased display name. Add here as brands are provided.
const logoOverrides = {
  "bevzilla": "bevzilla.in",
  "medcare diagnostics": "medcareindia.in",
  "clever harvey": "cleverharvey.com",
  "idp education": "idp.com",
  "emygideus": "amadeus.com",
};

// Accounts to drop from the directory entirely.
const exclude = new Set(["poetry house party", "vinexpo interads"]);

const accounts = [...groups.values()]
  .map((g) => {
    const a = { ...g.best, name: g.display };
    const ov = logoOverrides[a.name.toLowerCase()];
    if (ov) a.domain = ov;
    return a;
  })
  .filter((a) => !exclude.has(a.name.toLowerCase()))
  .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));

// Canonical vertical order (matches the reference directory).
const verticalOrder = [
  "Beauty, Personal Care & Wellness",
  "D2C, Lifestyle & E-commerce",
  "Food, FMCG & Nutrition",
  "Healthcare & Ayurveda",
  "Education",
  "Jewellery, Astrology & Spiritual",
  "Auto, Mobility & Services",
  "Real Estate & Infrastructure",
  "Technology, Finance & B2B",
  "Sports & Entertainment",
  "Other",
];

const serialize = (a) => {
  const parts = [`name: ${JSON.stringify(a.name)}`, `vertical: ${JSON.stringify(a.vertical)}`];
  if (a.domain) parts.push(`domain: ${JSON.stringify(a.domain)}`);
  if (a.region) parts.push(`region: ${JSON.stringify(a.region)}`);
  return `  { ${parts.join(", ")} },`;
};

const out = `// AUTO-GENERATED from the account book. Edit scratchpad/accounts.csv + re-run parse.mjs.
export type Account = {
  name: string;
  vertical: string;
  domain?: string;
  region?: string;
};

export const accountVerticals = ${JSON.stringify(verticalOrder, null, 2)} as const;

export const accounts: Account[] = [
${accounts.map(serialize).join("\n")}
];
`;

fs.writeFileSync("/Users/rinkeshsingh/portfolio/src/lib/accounts.ts", out);

// --- report ---
const byV = {};
const byR = {};
let withDomain = 0;
for (const a of accounts) {
  byV[a.vertical] = (byV[a.vertical] || 0) + 1;
  if (a.region) byR[a.region] = (byR[a.region] || 0) + 1;
  if (a.domain) withDomain++;
}
console.log("total accounts:", accounts.length);
console.log("with domain (logo):", withDomain);
console.log("\nby vertical:");
for (const v of verticalOrder) if (byV[v]) console.log(`  ${byV[v].toString().padStart(4)}  ${v}`);
console.log("\nby region:");
for (const [k, v] of Object.entries(byR).sort((a, b) => b[1] - a[1])) console.log(`  ${v.toString().padStart(4)}  ${k}`);

const noLogo = accounts.filter((a) => !a.domain).map((a) => a.name);
console.log(`\nNO LOGO (no website in book) — ${noLogo.length}:`);
console.log(noLogo.join("\n"));
fs.writeFileSync(
  "/Users/rinkeshsingh/portfolio/scratchpad/no-logo.txt",
  noLogo.join("\n")
);
