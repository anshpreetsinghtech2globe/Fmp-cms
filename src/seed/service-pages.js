"use strict";

const { servicePagesSeed } = require("./service-pages-data");

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

function mapHero(hero) {
  if (!hero) return null;
  return compact({
    breadcrumbs: (hero.breadcrumbs || []).map((item) =>
      compact({ label: item.label, href: item.href || undefined }),
    ),
    slides: (hero.slides || []).map((slide) =>
      compact({
        slideId: slide.slideId,
        backgroundImage: slide.backgroundImage,
        eyebrow: slide.eyebrow,
        title: slide.title,
        titleBefore: slide.titleBefore,
        titleHighlightValue: slide.titleHighlightValue,
        titleAfter: slide.titleAfter,
        description: slide.description,
        buttonText: slide.buttonText,
        buttonHref: slide.buttonHref,
        footnote: slide.footnote,
        benefits: (slide.benefits || []).map((b) =>
          compact({ icon: b.icon, title: b.title, description: b.description }),
        ),
      }),
    ),
    formTitle: hero.formTitle,
    formDescription: hero.formDescription,
    formButtonText: hero.formButtonText,
    defaultService: hero.defaultService,
    formServices: (hero.formServices || []).map(v),
  });
}

function mapIntro(intro) {
  if (!intro) return null;
  return compact({
    eyebrow: intro.eyebrow,
    title: intro.title,
    paragraphs: (intro.paragraphs || []).map(v),
    images: (intro.images || []).map((img) => compact({ src: img.src, alt: img.alt })),
    buttonText: intro.buttonText,
    buttonHref: intro.buttonHref,
  });
}

function mapBenefits(benefits) {
  if (!benefits) return null;
  return compact({
    eyebrow: benefits.eyebrow,
    title: benefits.title,
    backgroundImage: benefits.backgroundImage,
    items: (benefits.items || []).map((item) =>
      compact({ icon: item.icon, title: item.title, description: item.description }),
    ),
  });
}

function mapHighlights(highlights) {
  if (!highlights) return null;
  return {
    items: (highlights.items || []).map((item) =>
      compact({ icon: item.icon, line1: item.line1, line2: item.line2 }),
    ),
  };
}

function mapTips(tips) {
  if (!tips) return null;
  return compact({
    eyebrow: tips.eyebrow,
    title: tips.title,
    description: tips.description,
    backgroundImage: tips.backgroundImage,
    tips: (tips.tips || []).map(v),
  });
}

function mapApplications(applications) {
  if (!applications) return null;
  return compact({
    eyebrow: applications.eyebrow,
    title: applications.title,
    description: applications.description,
    items: (applications.items || []).map(v),
  });
}

function mapCompare(compare) {
  if (!compare) return null;
  return compact({
    eyebrow: compare.eyebrow,
    title: compare.title,
    featureLabel: compare.featureLabel,
    columns: (compare.columns || []).map(v),
    rows: (compare.rows || []).map((row) => ({
      feature: row.feature,
      values: (row.values || []).map((val) => v(String(val))),
    })),
  });
}

function mapInstall(install) {
  if (!install) return null;
  return compact({
    eyebrow: install.eyebrow,
    title: install.title,
    description: install.description,
    servicesTitle: install.servicesTitle,
    services: (install.services || []).map(v),
    image: install.image,
    imageAlt: install.imageAlt,
  });
}

function mapFaq(faq) {
  if (!faq) return null;
  return compact({
    title: faq.title,
    items: (faq.items || []).map((item) =>
      compact({ question: item.question, answer: item.answer }),
    ),
  });
}

function mapOffers(offers) {
  if (!offers) return null;
  return compact({
    eyebrow: offers.eyebrow,
    title: offers.title,
    offers: (offers.offers || []).map((item) =>
      compact({
        theme: item.theme || "blue",
        highlight: item.highlight,
        title: item.title,
        description: item.description,
        buttonText: item.buttonText,
        buttonHref: item.buttonHref,
        image: item.image,
        imageAlt: item.imageAlt,
      }),
    ),
  });
}

function mapCommercialProjects(commercialProjects) {
  if (!commercialProjects) return null;
  return compact({
    eyebrow: commercialProjects.eyebrow,
    title: commercialProjects.title,
    items: (commercialProjects.items || []).map((item) =>
      compact({
        title: item.title,
        image: item.image,
        badge: item.badge,
        buttonText: item.buttonText,
        href: item.href,
      }),
    ),
  });
}

function mapCta(cta) {
  if (!cta) return null;
  return compact({
    headlineWhite: cta.headlineWhite,
    headlineTeal: cta.headlineTeal,
    description: cta.description,
    phone: cta.phone,
    phoneHref: cta.phoneHref,
    buttonText: cta.buttonText,
    buttonHref: cta.buttonHref,
    backgroundImage: cta.backgroundImage,
  });
}

function toStrapiServicePage(entry) {
  return compact({
    title: entry.title,
    slug: entry.slug,
    seoTitle: entry.seoTitle,
    seoDescription: entry.seoDescription,
    processTitle: entry.processTitle,
    processDescription: entry.processDescription,
    hero: mapHero(entry.hero),
    intro: mapIntro(entry.intro),
    benefits: mapBenefits(entry.benefits),
    highlights: mapHighlights(entry.highlights),
    tips: mapTips(entry.tips),
    applications: mapApplications(entry.applications),
    compare: mapCompare(entry.compare),
    install: mapInstall(entry.install),
    faq: mapFaq(entry.faq),
    offers: mapOffers(entry.offers),
    commercialProjects: mapCommercialProjects(entry.commercialProjects),
    cta: mapCta(entry.cta),
  });
}

async function seedServicePages(strapi) {
  for (const entry of servicePagesSeed) {
    const existing = await strapi.documents("api::service-page.service-page").findFirst({
      filters: { slug: entry.slug },
    });

    if (existing?.documentId) {
      strapi.log.info(`[seed] Skipped Service Page "${entry.slug}" (already exists)`);
      continue;
    }

    try {
      await strapi.documents("api::service-page.service-page").create({
        data: toStrapiServicePage(entry),
        status: "published",
      });
      strapi.log.info(`[seed] Created Service Page "${entry.slug}"`);
    } catch (error) {
      strapi.log.error(`[seed] Service Page "${entry.slug}" failed: ${error.message}`);
      if (error.details) {
        strapi.log.error(`[seed] Details: ${JSON.stringify(error.details)}`);
      }
      throw error;
    }
  }

  await seedExampleServicePage(strapi);
}

/** Full sample entry for non-tech editors to Duplicate (kept as draft, not on the public site). */
async function seedExampleServicePage(strapi) {
  const EXAMPLE_SLUG = "example-service-page";
  const existing = await strapi.documents("api::service-page.service-page").findFirst({
    filters: { slug: EXAMPLE_SLUG },
  });

  if (existing?.documentId) {
    strapi.log.info(`[seed] Skipped EXAMPLE Service Page (already exists)`);
    return;
  }

  const base = servicePagesSeed.find((page) => page.slug === "lvp") || servicePagesSeed[0];
  if (!base) {
    strapi.log.warn("[seed] No base service page found for EXAMPLE template");
    return;
  }

  const example = {
    ...base,
    title: "EXAMPLE — Duplicate me to create a new page",
    slug: EXAMPLE_SLUG,
    seoTitle: "EXAMPLE TEMPLATE — Do not publish",
    seoDescription:
      "This is a training template. Duplicate this entry, change the title and slug, then edit the content for your new flooring page.",
    processTitle: "EXAMPLE: Get Brand New Flooring in 4 Simple Steps",
    processDescription:
      "Replace this text after you duplicate. Keep the same section layout — only change the words and images for the new service.",
  };

  try {
    await strapi.documents("api::service-page.service-page").create({
      data: {
        ...toStrapiServicePage(example),
        isExampleTemplate: true,
      },
      status: "draft",
    });
    strapi.log.info(`[seed] Created EXAMPLE Service Page template (draft)`);
  } catch (error) {
    strapi.log.error(`[seed] EXAMPLE Service Page failed: ${error.message}`);
    if (error.details) {
      strapi.log.error(`[seed] Details: ${JSON.stringify(error.details)}`);
    }
    throw error;
  }
}

module.exports = {
  servicePagesSeed,
  toStrapiServicePage,
  seedServicePages,
  seedExampleServicePage,
};
