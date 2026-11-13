const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const componentsDir = path.join(root, "src", "components");

function writeComponent(category, name, attributes, displayName = name) {
  const dir = path.join(componentsDir, category);
  fs.mkdirSync(dir, { recursive: true });
  const schema = {
    collectionName: `components_${category}_${name.replace(/-/g, "_")}s`,
    info: {
      displayName,
      icon: "bulletList",
    },
    options: {},
    attributes,
    config: {},
  };
  fs.writeFileSync(path.join(dir, `${name}.json`), JSON.stringify(schema, null, 2));
}

const link = {
  label: { type: "string", required: true },
  href: { type: "string", required: true },
};

writeComponent("shared", "link", link, "Link");
writeComponent("shared", "nav-link", {
  ...link,
  square: { type: "enumeration", enum: ["teal", "blue", "yellow"], default: "teal" },
}, "Nav Link");

writeComponent("shared", "text-part", {
  text: { type: "text", required: true },
  highlight: { type: "boolean", default: false },
}, "Text Part");

writeComponent("shared", "cta-link", {
  label: { type: "string", required: true },
  href: { type: "string", required: true },
  variant: { type: "enumeration", enum: ["primary", "secondary", "highlight"], default: "primary" },
}, "CTA Link");

writeComponent("shared", "stat-item", {
  value: { type: "string" },
  text: { type: "string" },
  label: { type: "string" },
  variant: { type: "enumeration", enum: ["default", "highlight"], default: "default" },
}, "Stat Item");

writeComponent("shared", "string-item", {
  value: { type: "string", required: true },
}, "String Item");

writeComponent("shared", "service-card", {
  title: { type: "string", required: true },
  description: { type: "text" },
  image: { type: "string" },
  href: { type: "string" },
  badge: { type: "string" },
}, "Service Card");

writeComponent("shared", "icon-card", {
  icon: { type: "string" },
  title: { type: "string", required: true },
  description: { type: "text" },
  image: { type: "string" },
}, "Icon Card");

writeComponent("shared", "step-item", {
  step: { type: "string" },
  title: { type: "string", required: true },
  description: { type: "text" },
  image: { type: "string" },
  imageAlt: { type: "string" },
  icon: { type: "string" },
}, "Step Item");

writeComponent("shared", "team-member", {
  name: { type: "string", required: true },
  role: { type: "string" },
  image: { type: "string" },
}, "Team Member");

writeComponent("shared", "brand-logo", {
  name: { type: "string", required: true },
  logo: { type: "string" },
}, "Brand Logo");

writeComponent("shared", "faq-item", {
  question: { type: "string", required: true },
  answer: { type: "text", required: true },
}, "FAQ Item");

writeComponent("shared", "testimonial-item", {
  quote: { type: "text", required: true },
  name: { type: "string" },
  role: { type: "string" },
  image: { type: "string" },
}, "Testimonial");

writeComponent("shared", "offer-item", {
  theme: { type: "enumeration", enum: ["blue", "yellow", "teal"], default: "blue" },
  highlight: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  image: { type: "string" },
  imageAlt: { type: "string" },
}, "Offer Item");

writeComponent("shared", "before-after-item", {
  label: { type: "string" },
  beforeImage: { type: "string" },
  afterImage: { type: "string" },
}, "Before After Item");

writeComponent("shared", "resource-card", {
  title: { type: "string", required: true },
  description: { type: "text" },
  image: { type: "string" },
  href: { type: "string" },
  date: { type: "string" },
  category: { type: "string" },
}, "Resource Card");

writeComponent("shared", "video-clip", {
  title: { type: "string" },
  src: { type: "string" },
  poster: { type: "string" },
  duration: { type: "string" },
  youtubeId: { type: "string" },
}, "Video Clip");

writeComponent("shared", "video-tab", {
  tabId: { type: "string" },
  label: { type: "string", required: true },
  icon: { type: "string" },
  videos: {
    type: "component",
    repeatable: true,
    component: "shared.video-clip",
  },
}, "Video Tab");

writeComponent("shared", "cert-item", {
  src: { type: "string", required: true },
  alt: { type: "string" },
}, "Certification");

writeComponent("shared", "image-path", {
  url: { type: "string", required: true },
}, "Image Path");

// Section components
writeComponent("home", "hero", {
  badge: { type: "string" },
  title: { type: "string" },
  titleHighlight: { type: "string" },
  backgroundImage: { type: "string" },
  backgroundImages: {
    type: "component",
    repeatable: true,
    component: "shared.image-path",
  },
  description: {
    type: "component",
    repeatable: true,
    component: "shared.text-part",
  },
  ctas: {
    type: "component",
    repeatable: true,
    component: "shared.cta-link",
  },
  formTitle: { type: "string" },
  formDescription: { type: "text" },
  formButtonText: { type: "string" },
  formServices: {
    type: "component",
    repeatable: true,
    component: "shared.string-item",
  },
  stats: {
    type: "component",
    repeatable: true,
    component: "shared.stat-item",
  },
}, "Hero");

writeComponent("home", "federal", {
  marqueeItems: {
    type: "component",
    repeatable: true,
    component: "shared.string-item",
  },
  headlineBlue: { type: "string" },
  headlineTeal: { type: "string" },
  description: { type: "text" },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  sectors: {
    type: "component",
    repeatable: true,
    component: "shared.icon-card",
  },
}, "Federal");

writeComponent("home", "process", {
  title: { type: "string" },
  subtitle: { type: "string" },
  backgroundImage: { type: "string" },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  steps: {
    type: "component",
    repeatable: true,
    component: "shared.step-item",
  },
}, "Process");

writeComponent("home", "services", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  services: {
    type: "component",
    repeatable: true,
    component: "shared.service-card",
  },
}, "Services");

writeComponent("home", "quote-cta", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
}, "Quote CTA");

writeComponent("home", "founder", {
  eyebrow: { type: "string" },
  headline: { type: "string" },
  headlineAccent: { type: "string" },
  description: { type: "text" },
  values: {
    type: "component",
    repeatable: true,
    component: "shared.icon-card",
  },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  videoSrc: { type: "string" },
  videoPoster: { type: "string" },
  videoAspectRatio: { type: "string" },
}, "Founder");

writeComponent("home", "features", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  backgroundImage: { type: "string" },
  cards: {
    type: "component",
    repeatable: true,
    component: "shared.icon-card",
  },
}, "Features");

writeComponent("home", "how-we-manage", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  steps: {
    type: "component",
    repeatable: true,
    component: "shared.step-item",
  },
}, "How We Manage");

writeComponent("home", "videos", {
  title: { type: "string" },
  tabs: {
    type: "component",
    repeatable: true,
    component: "shared.video-tab",
  },
}, "Explore Videos");

writeComponent("home", "brands", {
  eyebrow: { type: "string" },
  headline: { type: "string" },
  headlineAccent: { type: "string" },
  description: { type: "text" },
  logos: {
    type: "component",
    repeatable: true,
    component: "shared.brand-logo",
  },
}, "Brands");

writeComponent("home", "before-after", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  tagline: { type: "string" },
  paragraphs: {
    type: "component",
    repeatable: true,
    component: "shared.string-item",
  },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  projects: {
    type: "component",
    repeatable: true,
    component: "shared.before-after-item",
  },
}, "Before After");

writeComponent("home", "team", {
  eyebrow: { type: "string" },
  headline: { type: "string" },
  headlineAccent: { type: "string" },
  description: { type: "text" },
  members: {
    type: "component",
    repeatable: true,
    component: "shared.team-member",
  },
}, "Team");

writeComponent("home", "offers", {
  title: { type: "string" },
  offers: {
    type: "component",
    repeatable: true,
    component: "shared.offer-item",
  },
}, "Offers");

writeComponent("home", "why-choose", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  items: {
    type: "component",
    repeatable: true,
    component: "shared.icon-card",
  },
}, "Why Choose");

writeComponent("home", "latest-projects", {
  title: { type: "string" },
  embedUrl: { type: "string" },
}, "Latest Projects");

writeComponent("home", "educational-resources", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  posts: {
    type: "component",
    repeatable: true,
    component: "shared.resource-card",
  },
}, "Educational Resources");

writeComponent("home", "educational-videos", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  description: { type: "text" },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  videos: {
    type: "component",
    repeatable: true,
    component: "shared.video-clip",
  },
}, "Educational Videos");

writeComponent("home", "testimonials", {
  eyebrow: { type: "string" },
  title: { type: "string" },
  items: {
    type: "component",
    repeatable: true,
    component: "shared.testimonial-item",
  },
}, "Testimonials");

writeComponent("home", "faq", {
  title: { type: "string" },
  items: {
    type: "component",
    repeatable: true,
    component: "shared.faq-item",
  },
}, "FAQ");

writeComponent("home", "cta", {
  headlineWhite: { type: "string" },
  headlineTeal: { type: "string" },
  description: { type: "text" },
  phone: { type: "string" },
  phoneHref: { type: "string" },
  buttonText: { type: "string" },
  buttonHref: { type: "string" },
  backgroundImage: { type: "string" },
}, "Bottom CTA");

writeComponent("site", "header", {
  logo: { type: "string" },
  primaryLinks: {
    type: "component",
    repeatable: true,
    component: "shared.nav-link",
  },
  resourceLinks: {
    type: "component",
    repeatable: true,
    component: "shared.link",
  },
  ctaLabel: { type: "string" },
  ctaHref: { type: "string" },
}, "Header");

writeComponent("site", "footer", {
  logo: { type: "string" },
  blurb: { type: "text" },
  facebookUrl: { type: "string" },
  instagramUrl: { type: "string" },
  youtubeUrl: { type: "string" },
  address: { type: "text" },
  phone: { type: "string" },
  phoneHref: { type: "string" },
  email: { type: "email" },
  proSolutionsLinks: {
    type: "component",
    repeatable: true,
    component: "shared.link",
  },
  serviceLinks: {
    type: "component",
    repeatable: true,
    component: "shared.link",
  },
  usefulLinks: {
    type: "component",
    repeatable: true,
    component: "shared.link",
  },
  certifications: {
    type: "component",
    repeatable: true,
    component: "shared.cert-item",
  },
  copyrightName: { type: "string" },
  developerName: { type: "string" },
  developerHref: { type: "string" },
}, "Footer");

writeComponent("site", "areas-we-serve", {
  title: { type: "string" },
  backgroundImage: { type: "string" },
  areas: {
    type: "component",
    repeatable: true,
    component: "shared.string-item",
  },
}, "Areas We Serve");

console.log("Components written");
