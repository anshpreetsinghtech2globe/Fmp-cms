"use strict";

const { posts: postsMeta } = require("./blog-posts-meta");
const { importWpBlogPosts } = require("./import-wp-blog");

const v = (value) => ({ value });

const blogPageSeed = {
  title: "Blog",
  heroEyebrow: "Latest Insights",
  heroTitle: "Flooring Guides, Tips & Design Trends",
  heroDescription:
    "Expert advice from FMP Flooring — compare materials, explore LVP trends, and learn how to care for floors that last.",
  listingEyebrow: "Our Blog",
  listingTitle: "Educational Resources",
  listingDescription:
    "Browse articles sourced from our latest flooring insights — practical guides for homeowners, remodelers, and commercial decision-makers.",
  seoTitle: "Flooring Blog | Guides, Tips & Trends | FMP Flooring",
  seoDescription:
    "Explore flooring guides, LVP tips, design trends, and expert advice from FMP Flooring — helping you choose smarter for homes and commercial spaces.",
};

/** Same Gravatar as fmpflooring.com WP author (admin). Used until a photo is uploaded in Media Library. */
const DEFAULT_AUTHOR_AVATAR_URL =
  "https://secure.gravatar.com/avatar/9e0fbe554829536ce765a0b8b9598145bc245e25a2aa9f2ee6f366490942ab7c?s=192&d=mp&r=g";

const authorSeed = {
  name: "Pavneet Singh",
  slug: "pavneet-singh",
  bio: "Our expert author brings years of experience in the flooring industry, sharing valuable insights into flooring types, maintenance tips, and interior design ideas to help you choose the perfect flooring for every room in your home.",
  legacyPhotoUrl: DEFAULT_AUTHOR_AVATAR_URL,
};

/** Full article body for the reference post (sound-resistant LVP). */
const soundResistantBlocks = [
  {
    paragraphs: [
      v(
        "Vinyl plank flooring has gained popularity among homeowners because of its water resistance, durability, and visual appeal. But there is more to it than aesthetics alone. Sound control matters — especially in multi-story homes, apartments, and open living areas where foot traffic and daily life create noise.",
      ),
      v(
        "This guide explains what sound resistance means for luxury vinyl plank (LVP), how sound travels through floors, and what to look for when you want quieter, more comfortable spaces.",
      ),
    ],
  },
  {
    heading: "Understanding Sound Resistance in Vinyl Plank Flooring",
    headingLevel: "h2",
    imageUrl: "/images/blog/find-sound-resistant-vinyl-plank-flooring.png",
    imageAlt: "Modern living room with vinyl plank flooring",
    imageCaption: "Understanding Sound Resistance in Vinyl Plank Flooring",
  },
  {
    heading: "What is Sound Resistance in Flooring?",
    headingLevel: "h3",
    paragraphs: [
      v(
        "Sound resistance refers to how well a floor assembly limits impact noise (footsteps, dropped items) and airborne sound passing between rooms or levels. Ratings such as STC (Sound Transmission Class) and IIC (Impact Insulation Class) help compare products and systems.",
      ),
    ],
    bullets: [
      v("STC Rating (Sound Transmission Class): Measures airborne sound blocking between spaces."),
      v("IIC Rating (Impact Insulation Class): Measures how well a floor reduces impact noise such as footsteps."),
    ],
  },
  {
    heading: "How Sound Travels Through Flooring",
    headingLevel: "h2",
    paragraphs: [
      v(
        "Impact energy from footsteps travels through the wear layer, core, underlayment, and subfloor. A rigid core may transfer more impact unless paired with the right underlayment and installation method.",
      ),
    ],
  },
  {
    heading: "Key Factors That Affect Sound Resistance in Vinyl Plank Flooring",
    headingLevel: "h2",
    imageUrl: "/images/blog/find-sound-resistant-vinyl-plank-flooring.png",
    imageCaption: "Key Factors That Affect Sound Resistance in Vinyl Plank Flooring",
  },
  {
    heading: "Core Construction and Its Impact on Noise Reduction",
    headingLevel: "h3",
    paragraphs: [
      v("The core material influences density, stability, and how vibrations move through the plank."),
    ],
    bullets: [
      v("SPC (Stone Polymer Core): Very stable and ideal for high-traffic areas; pair with quality underlayment for best sound performance."),
      v("WPC (Wood Polymer Core): Often softer underfoot and can feel quieter without extra padding."),
    ],
  },
  {
    heading: "The Importance of Underlayment in Noise Reduction",
    headingLevel: "h3",
    paragraphs: [v("Underlayment is often the biggest upgrade you can make for sound control.")],
    bullets: [
      v("Foam Padding: Budget-friendly option that adds basic cushioning and impact absorption."),
      v("Cork Underlay: Natural material that helps reduce sound transmission."),
      v("Rubber Underlay: Excellent for impact noise reduction in condos and multi-level homes."),
    ],
  },
  {
    heading: "How to Choose the Best Sound-Resistant Vinyl Plank Flooring",
    headingLevel: "h2",
    bullets: [
      v("Check acoustic ratings before buying when available."),
      v("Choose a high-quality core suited to your traffic level."),
      v("Select underlayment matched to your subfloor and building type."),
      v("Consider room usage — bedrooms and upper levels benefit most from enhanced sound control."),
    ],
  },
  {
    heading: "Conclusion",
    headingLevel: "h2",
    paragraphs: [
      v(
        "Sound-resistant vinyl plank flooring combines the look you want with quieter, more comfortable living. Focus on core type, thickness, underlayment, and installation quality — and consult a flooring professional for product lines rated for your project.",
      ),
    ],
  },
  {
    heading: "What is the best vinyl floor type for sound dampening?",
    headingLevel: "h3",
    paragraphs: [
      v(
        "WPC often feels softer underfoot, while SPC with premium rubber or cork underlayment performs very well in apartments and upper levels. The best choice depends on traffic, subfloor, and building requirements.",
      ),
    ],
  },
  {
    heading: "Does thicker vinyl flooring reduce noise?",
    headingLevel: "h3",
    paragraphs: [
      v(
        "Thicker planks can help slightly, but underlayment and the full assembly (including installation method) usually matter more than thickness alone.",
      ),
    ],
  },
];

function defaultBlocksForPost(post) {
  return [
    {
      paragraphs: [v(post.excerpt)],
      bullets: [
        v("Need help choosing sound-resistant LVP or underlayment? FMP Flooring offers free in-home estimates across North and South Carolina."),
      ],
    },
  ];
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

function authorNeedsPhotoBackfill(author) {
  if (!author) return false;
  if (author.photo) return false;
  const legacy = author.legacyPhotoUrl || "";
  if (!legacy) return true;
  if (legacy.includes("team-placeholder")) return true;
  if (legacy.startsWith("/images/")) return true;
  return false;
}

async function ensureAuthor(strapi) {
  let author = await strapi.documents("api::author.author").findFirst({
    filters: { slug: authorSeed.slug },
    populate: { photo: true },
  });

  if (!author?.documentId) {
    author = await strapi.documents("api::author.author").create({
      data: authorSeed,
      status: "published",
    });
    strapi.log.info("[seed] Created blog author");
    return author;
  }

  if (authorNeedsPhotoBackfill(author)) {
    author = await strapi.documents("api::author.author").update({
      documentId: author.documentId,
      data: { legacyPhotoUrl: authorSeed.legacyPhotoUrl },
      status: "published",
    });
    strapi.log.info("[seed] Updated blog author avatar URL");
  }

  return author;
}

async function seedBlogPosts(strapi, authorDocumentId) {
  let created = 0;
  let skipped = 0;

  for (const post of postsMeta) {
    const existing = await strapi.documents("api::blog-post.blog-post").findFirst({
      filters: { slug: post.slug },
    });

    if (existing?.documentId) {
      skipped += 1;
      continue;
    }

    const blocks =
      post.slug === "find-sound-resistant-vinyl-plank-flooring"
        ? soundResistantBlocks
        : defaultBlocksForPost(post);

    await strapi.documents("api::blog-post.blog-post").create({
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        category: post.category,
        publishedOn: post.date,
        legacyImageUrl: post.image,
        seoTitle: `${post.title} | FMP Flooring Blog`,
        seoDescription: post.excerpt,
        author: authorDocumentId,
        blocks,
      },
      status: "published",
    });
    created += 1;
  }

  strapi.log.info(`[seed] Blog posts: created ${created}, skipped ${skipped}`);
}

async function seedBlog(strapi) {
  await seedSingleTypeIfEmpty(strapi, "api::blog-page.blog-page", blogPageSeed, "Blog Page");
  const author = await ensureAuthor(strapi);
  const authorId = author.documentId || author.id;

  try {
    await importWpBlogPosts(strapi, authorId);
  } catch (error) {
    strapi.log.error(`[seed] WordPress blog import failed: ${error.message}`);
    strapi.log.warn("[seed] Falling back to local blog-posts-meta.js");
    await seedBlogPosts(strapi, authorId);
  }
}

module.exports = {
  seedBlog,
  blogPageSeed,
  authorSeed,
  soundResistantBlocks,
};
