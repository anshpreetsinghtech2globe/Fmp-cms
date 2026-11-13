"use strict";

const cheerio = require("cheerio");
const { posts: postsMeta } = require("./blog-posts-meta");

const WP_API = "https://fmpflooring.com/wp-json/wp/v2/posts";
const v = (value) => ({ value });

const metaCategoryBySlug = Object.fromEntries(
  postsMeta.map((post) => [post.slug, post.category]),
);

function stripHtml(html) {
  if (!html) return "";
  return cheerio.load(html).text().replace(/\s+/g, " ").trim();
}

function inferCategory(slug, title, metaCategory) {
  if (metaCategory) return metaCategory;
  const haystack = `${slug} ${title}`.toLowerCase();
  if (haystack.includes("trend") || haystack.includes("color")) return "Trends";
  if (
    haystack.includes("tip") ||
    haystack.includes("mistake") ||
    haystack.includes("maintain") ||
    haystack.includes("clean")
  ) {
    return "Tips";
  }
  if (
    haystack.includes("-vs-") ||
    haystack.includes("compare") ||
    haystack.includes("comparison") ||
    haystack.includes("difference-between")
  ) {
    return "Comparisons";
  }
  return "Guides";
}

function htmlToBlocks(html) {
  const $ = cheerio.load(`<div id="wp-root">${html || ""}</div>`);
  const blocks = [];
  let current = null;

  function flush() {
    if (!current) return;
    const hasContent =
      current.heading ||
      current.paragraphs.length ||
      current.bullets.length ||
      current.imageUrl;
    if (hasContent) {
      blocks.push(current);
    }
    current = null;
  }

  function ensureCurrent() {
    if (!current) {
      current = { paragraphs: [], bullets: [], headingLevel: "h2" };
    }
  }

  $("#wp-root")
    .children()
    .each((_, el) => {
      const tag = el.tagName?.toLowerCase();
      const $el = $(el);

      if (tag === "h2" || tag === "h3") {
        flush();
        current = {
          heading: stripHtml($el.html()),
          headingLevel: tag,
          paragraphs: [],
          bullets: [],
        };
        return;
      }

      if (tag === "ul" || tag === "ol") {
        ensureCurrent();
        $el.find("li").each((__, li) => {
          const text = stripHtml($(li).html());
          if (text) current.bullets.push(v(text));
        });
        return;
      }

      if (tag === "p") {
        const img = $el.find("img").first();
        if (img.length) {
          ensureCurrent();
          current.imageUrl = img.attr("src") || "";
          current.imageAlt = img.attr("alt") || "";
          current.imageCaption = img.attr("alt") || current.heading || "";
          const text = stripHtml($el.html().replace(/<img[\s\S]*?>/gi, ""));
          if (text) current.paragraphs.push(v(text));
          return;
        }

        const text = stripHtml($el.html());
        if (text) {
          ensureCurrent();
          current.paragraphs.push(v(text));
        }
        return;
      }

      if (tag === "figure") {
        const img = $el.find("img").first();
        if (img.length) {
          ensureCurrent();
          current.imageUrl = img.attr("src") || "";
          current.imageAlt = img.attr("alt") || "";
          current.imageCaption =
            stripHtml($el.find("figcaption").html()) || img.attr("alt") || "";
        }
        return;
      }

      const text = stripHtml($el.html());
      if (text) {
        ensureCurrent();
        current.paragraphs.push(v(text));
      }
    });

  flush();
  return blocks;
}

async function fetchAllWpPosts() {
  const all = [];
  let page = 1;

  while (page <= 20) {
    const url = `${WP_API}?per_page=100&page=${page}&_embed=1`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`WP API failed: ${res.status} ${url}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    all.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return all;
}

function featuredImageUrl(wpPost) {
  const media = wpPost._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url || media?.media_details?.sizes?.large?.source_url || "";
}

function buildPostPayload(wpPost, authorDocumentId) {
  const slug = wpPost.slug;
  const title = stripHtml(wpPost.title?.rendered || "");
  const excerpt = stripHtml(wpPost.excerpt?.rendered || "");
  const blocks = htmlToBlocks(wpPost.content?.rendered || "");
  const publishedOn = (wpPost.date || "").split("T")[0] || new Date().toISOString().split("T")[0];
  const category = inferCategory(slug, title, metaCategoryBySlug[slug]);

  return {
    title,
    slug,
    excerpt: excerpt || title,
    category,
    publishedOn,
    legacyImageUrl: featuredImageUrl(wpPost),
    seoTitle: `${title} | FMP Flooring Blog`,
    seoDescription: excerpt || title,
    author: authorDocumentId,
    blocks: blocks.length ? blocks : [{ paragraphs: [v(excerpt || title)] }],
  };
}

async function importWpBlogPosts(strapi, authorDocumentId) {
  const force = process.env.FORCE_WP_BLOG_IMPORT === "true";

  if (!force) {
    const existingCount = await strapi.db.query("api::blog-post.blog-post").count();
    if (existingCount >= 70) {
      strapi.log.info(
        `[seed] Skipped WordPress blog import (${existingCount} posts in CMS; set FORCE_WP_BLOG_IMPORT=true to refresh)`,
      );
      return;
    }
  }

  const wpPosts = await fetchAllWpPosts();
  strapi.log.info(`[seed] WordPress returned ${wpPosts.length} posts`);

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const wpPost of wpPosts) {
    const slug = wpPost.slug;
    const existing = await strapi.documents("api::blog-post.blog-post").findFirst({
      filters: { slug },
      populate: { blocks: { populate: { paragraphs: true, bullets: true } } },
    });

    const data = buildPostPayload(wpPost, authorDocumentId);
    const existingBlockCount = existing?.blocks?.length || 0;

    if (existing?.documentId) {
      if (!force && existingBlockCount >= 3) {
        skipped += 1;
        continue;
      }
      await strapi.documents("api::blog-post.blog-post").update({
        documentId: existing.documentId,
        data,
        status: "published",
      });
      updated += 1;
      continue;
    }

    await strapi.documents("api::blog-post.blog-post").create({
      data,
      status: "published",
    });
    created += 1;
  }

  strapi.log.info(
    `[seed] WordPress blog import: created ${created}, updated ${updated}, skipped ${skipped}`,
  );
}

module.exports = {
  importWpBlogPosts,
  htmlToBlocks,
  fetchAllWpPosts,
};
