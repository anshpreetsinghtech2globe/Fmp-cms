"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { projectPopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async find(ctx) {
    const filters = ctx.query?.filters || {};
    const pageSize = Math.min(Number(ctx.query?.pagination?.pageSize) || 200, 500);
    const page = Math.max(Number(ctx.query?.pagination?.page) || 1, 1);

    const entities = await strapi.documents("api::project.project").findMany({
      status: "published",
      filters,
      populate: projectPopulate,
      sort: "title:asc",
      limit: pageSize,
      start: (page - 1) * pageSize,
    });

    const sanitized = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitized);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.documents("api::project.project").findFirst({
      status: "published",
      filters: {
        $or: [{ documentId: id }, { slug: id }],
      },
      populate: projectPopulate,
    });

    if (!entity) {
      return ctx.notFound("Project not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
