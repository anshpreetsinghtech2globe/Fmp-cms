"use strict";

const {
  commercialPageSeed,
  residentialPageSeed,
  projectsSeed,
} = require("./projects-data");

const v = (value) => ({ value });

function compact(obj) {
  if (obj == null || typeof obj !== "object" || Array.isArray(obj)) return obj;
  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      out[key] = value.map((item) => (typeof item === "object" ? compact(item) : item));
    } else if (typeof value === "object") {
      out[key] = compact(value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

function toStrapiProject(entry) {
  return compact({
    title: entry.title,
    slug: entry.slug,
    type: entry.type,
    listTitle: entry.listTitle || entry.title,
    description: entry.description || "",
    badge: entry.badge,
    image: entry.image,
    listImage: entry.listImage,
    images: (entry.images || []).map(v),
    details: (entry.details || []).map((item) =>
      compact({ label: item.label, value: String(item.value) }),
    ),
    seoTitle: entry.seoTitle,
    seoDescription: entry.seoDescription,
  });
}

async function seedSingleTypeIfEmpty(strapi, uid, data, label) {
  const existing = await strapi.documents(uid).findFirst({});
  if (existing?.documentId) {
    strapi.log.info(`[seed] Skipped ${label} (already exists)`);
    return;
  }

  await strapi.documents(uid).create({
    data,
    status: "published",
  });
  strapi.log.info(`[seed] Created and published ${label}`);
}

async function seedProjects(strapi) {
  await seedSingleTypeIfEmpty(
    strapi,
    "api::commercial-page.commercial-page",
    commercialPageSeed,
    "Commercial Page",
  );
  await seedSingleTypeIfEmpty(
    strapi,
    "api::residential-page.residential-page",
    residentialPageSeed,
    "Residential Page",
  );

  let created = 0;
  let skipped = 0;

  for (const entry of projectsSeed) {
    const existing = await strapi.documents("api::project.project").findFirst({
      filters: { slug: entry.slug },
    });

    if (existing?.documentId) {
      skipped += 1;
      continue;
    }

    try {
      await strapi.documents("api::project.project").create({
        data: toStrapiProject(entry),
        status: "published",
      });
      created += 1;
    } catch (error) {
      strapi.log.error(`[seed] Project "${entry.slug}" failed: ${error.message}`);
      if (error.details) {
        strapi.log.error(`[seed] Details: ${JSON.stringify(error.details)}`);
      }
      throw error;
    }
  }

  strapi.log.info(`[seed] Projects created=${created} skipped=${skipped}`);
}

module.exports = {
  commercialPageSeed,
  residentialPageSeed,
  projectsSeed,
  toStrapiProject,
  seedProjects,
};
