/**
 * One-shot generator: builds src/seed/projects-data.js from fmp-flooring data files.
 * Run: node scripts/generate-projects-data.js
 */
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const FLOORING = path.resolve(__dirname, "../../fmp-flooring/data");
const OUT = path.resolve(__dirname, "../src/seed/projects-data.js");

function slugify(title) {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function uniqueSlug(base, used) {
  let slug = base || "project";
  if (!used.has(slug)) {
    used.add(slug);
    return slug;
  }
  let n = 2;
  while (used.has(`${slug}-${n}`)) n += 1;
  const next = `${slug}-${n}`;
  used.add(next);
  return next;
}

function slugFromHref(href) {
  if (!href) return null;
  const parts = String(href).replace(/\/+$/, "").split("/");
  return parts[parts.length - 1] || null;
}

function findMatchingCard(cards, project) {
  return (
    cards.find((card) => {
      if (!card.href) return false;
      if (project.href && card.href === project.href) return true;
      const cardSlug = slugFromHref(card.href);
      return cardSlug === project.slug;
    }) || null
  );
}

function mapDetail(project, type, cards, usedSlugs) {
  const card = findMatchingCard(cards, project);
  const slug = uniqueSlug(project.slug, usedSlugs);
  const entry = {
    title: project.title,
    slug,
    type,
    listTitle: project.listTitle || project.title,
    description: project.description || "",
    details: Array.isArray(project.details)
      ? project.details.map((d) => ({ label: d.label, value: d.value }))
      : [],
    image: project.image,
    images: Array.isArray(project.images) ? [...project.images] : [],
    badge: card && card.badge ? card.badge : null,
  };
  if (card && card.image && card.image !== project.image) {
    entry.listImage = card.image;
  }
  return entry;
}

function mapListOnly(card, type, detailSlugs, usedSlugs) {
  const hrefSlug = slugFromHref(card.href);
  if (hrefSlug && detailSlugs.has(hrefSlug)) return null;
  // Also skip if href matches a detail href slug set (already covered)
  if (card.href && detailSlugs.has(hrefSlug)) return null;

  const slug = uniqueSlug(slugify(card.title), usedSlugs);
  return {
    title: card.title,
    slug,
    type,
    listTitle: card.title,
    description: "",
    details: [],
    image: card.image,
    images: [],
    badge: card.badge || null,
    listImage: card.image,
    listOnly: true,
  };
}

async function loadEsModule(filePath) {
  const mod = await import(pathToFileURL(filePath).href);
  return mod;
}

async function main() {
  const commercialDetailsMod = await loadEsModule(
    path.join(FLOORING, "commercial-project-details.js")
  );
  const residentialDetailsMod = await loadEsModule(
    path.join(FLOORING, "residential-project-details.js")
  );
  const commercialProjectsMod = await loadEsModule(
    path.join(FLOORING, "commercial-projects.js")
  );
  const residentialProjectsMod = await loadEsModule(
    path.join(FLOORING, "residential-projects.js")
  );

  const commercialProjectDetails = commercialDetailsMod.commercialProjectDetails;
  const residentialProjectDetails = residentialDetailsMod.residentialProjectDetails;
  const commercialProjects = commercialProjectsMod.commercialProjects;
  const residentialProjects = residentialProjectsMod.residentialProjects;

  const usedSlugs = new Set();
  const projectsSeed = [];

  const commercialDetailSlugs = new Set(
    commercialProjectDetails.map((p) => p.slug)
  );
  const residentialDetailSlugs = new Set(
    residentialProjectDetails.map((p) => p.slug)
  );

  for (const project of commercialProjectDetails) {
    projectsSeed.push(
      mapDetail(project, "commercial", commercialProjects, usedSlugs)
    );
  }

  for (const project of residentialProjectDetails) {
    projectsSeed.push(
      mapDetail(project, "residential", residentialProjects, usedSlugs)
    );
  }

  for (const card of commercialProjects) {
    const entry = mapListOnly(
      card,
      "commercial",
      commercialDetailSlugs,
      usedSlugs
    );
    if (entry) projectsSeed.push(entry);
  }

  for (const card of residentialProjects) {
    const entry = mapListOnly(
      card,
      "residential",
      residentialDetailSlugs,
      usedSlugs
    );
    if (entry) projectsSeed.push(entry);
  }

  const commercialCount = projectsSeed.filter((p) => p.type === "commercial")
    .length;
  const residentialCount = projectsSeed.filter((p) => p.type === "residential")
    .length;
  const commercialDetailsCount = commercialProjectDetails.length;
  const residentialDetailsCount = residentialProjectDetails.length;
  const commercialListOnly = projectsSeed.filter(
    (p) => p.type === "commercial" && p.listOnly
  ).length;
  const residentialListOnly = projectsSeed.filter(
    (p) => p.type === "residential" && p.listOnly
  ).length;

  const commercialPageSeed = {
    title: "Commercial Projects",
    seoTitle: "Commercial Projects | FMP Flooring",
    seoDescription:
      "Explore FMP Flooring commercial projects across schools, hospitals, courthouses, military bases, and businesses throughout North and South Carolina.",
    hero: {
      eyebrow: "Commercial Projects",
      title: "Our Recent Commercial Flooring Projects",
      description:
        "Proven commercial flooring for high-traffic facilities across the Carolinas — installed with the precision large projects demand.",
      breadcrumbLabel: "Commercial Projects",
    },
    gallery: {
      eyebrow: "Project Gallery",
      title: "Our Recent Commercial Flooring Projects",
      description:
        "Schools, hospitals, courthouses, military bases, and commercial spaces — durable flooring installed to perform under real-world demand.",
    },
    quoteCta: {
      eyebrow: "Commercial Flooring",
      title: "Planning a Commercial Project?",
      description:
        "From schools to military bases, we deliver competitive pricing, reliable schedules, and floors built for heavy use.",
      buttonText: "Request a Commercial Quote",
      buttonHref: "/contact-us",
    },
  };

  const residentialPageSeed = {
    title: "Residential Projects",
    seoTitle: "Residential Projects | FMP Flooring",
    seoDescription:
      "Explore FMP Flooring residential projects across the Carolinas — beautiful flooring installed with craftsmanship and care.",
    hero: {
      eyebrow: "Residential Projects",
      title: "Our Residential Work",
      description:
        "We are the experts in good taste — see how homeowners across the Carolinas transformed their spaces with FMP Flooring.",
      breadcrumbLabel: "Residential Projects",
    },
    gallery: {
      eyebrow: "Project Gallery",
      title: "We are the experts in good taste!",
      description:
        "Browse our residential flooring projects — beautiful floors installed in homes across the Carolinas with craftsmanship and care.",
    },
    quoteCta: {
      eyebrow: "Residential Flooring",
      title: "Planning a Home Flooring Project?",
      description:
        "From LVP to hardwood and carpet, we bring samples, expert guidance, and professional installation to your home.",
      buttonText: "Request a Residential Quote",
      buttonHref: "/contact-us",
    },
  };

  const header = `/**
 * FMP Projects CMS seed data.
 *
 * Counts:
 * - commercial: ${commercialCount} (details: ${commercialDetailsCount}, list-only: ${commercialListOnly})
 * - residential: ${residentialCount} (details: ${residentialDetailsCount}, list-only: ${residentialListOnly})
 * - total projectsSeed: ${projectsSeed.length}
 *
 * Generated from fmp-flooring commercial/residential project data.
 */

`;

  const payload = {
    commercialPageSeed,
    residentialPageSeed,
    projectsSeed,
  };

  // Pretty-print as CommonJS with stable JSON-like formatting
  const body =
    "module.exports = " +
    JSON.stringify(payload, null, 2).replace(/^/gm, "") +
    ";\n";

  fs.writeFileSync(OUT, header + body, "utf8");

  // Verify require works
  const loaded = require(OUT);
  const slugs = loaded.projectsSeed.map((p) => p.slug);
  const unique = new Set(slugs);
  if (unique.size !== slugs.length) {
    throw new Error("Slug uniqueness check failed");
  }

  console.log(
    JSON.stringify(
      {
        out: OUT,
        commercial: commercialCount,
        residential: residentialCount,
        total: projectsSeed.length,
        commercialDetails: commercialDetailsCount,
        residentialDetails: residentialDetailsCount,
        commercialListOnly,
        residentialListOnly,
        uniqueSlugs: unique.size,
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
