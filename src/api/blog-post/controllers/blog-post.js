"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { blogPostPopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::blog-post.blog-post", ({ strapi }) => ({
  async find(ctx) {
    const pageSize = Math.min(Number(ctx.query?.pagination?.pageSize) || 100, 200);
    const page = Math.max(Number(ctx.query?.pagination?.page) || 1, 1);
    const sort = ctx.query?.sort || "publishedOn:desc";

    const entities = await strapi.documents("api::blog-post.blog-post").findMany({
      status: "published",
      filters: ctx.query?.filters || {},
      populate: blogPostPopulate,
      sort,
      limit: pageSize,
      start: (page - 1) * pageSize,
    });

    const sanitized = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitized);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.documents("api::blog-post.blog-post").findFirst({
      status: "published",
      filters: {
        $or: [{ documentId: id }, { slug: id }],
      },
      populate: blogPostPopulate,
    });

    if (!entity) {
      return ctx.notFound("Blog post not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
