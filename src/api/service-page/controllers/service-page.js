"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { servicePagePopulate } = require("../../../utils/populate");

const EXAMPLE_SLUG = "example-service-page";

function excludeExampleFilters(filters = {}) {
  const notExample = {
    $and: [
      { slug: { $ne: EXAMPLE_SLUG } },
      { isExampleTemplate: { $ne: true } },
    ],
  };

  if (!filters || Object.keys(filters).length === 0) {
    return notExample;
  }

  return {
    $and: [filters, notExample],
  };
}

module.exports = createCoreController("api::service-page.service-page", ({ strapi }) => ({
  async find(ctx) {
    const filters = excludeExampleFilters(ctx.query?.filters || {});
    const entities = await strapi.documents("api::service-page.service-page").findMany({
      status: "published",
      filters,
      populate: servicePagePopulate,
      sort: "title:asc",
    });

    const sanitized = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitized);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    if (id === EXAMPLE_SLUG) {
      return ctx.notFound("Service page not found");
    }

    const entity = await strapi.documents("api::service-page.service-page").findFirst({
      status: "published",
      filters: {
        $and: [
          { $or: [{ documentId: id }, { slug: id }] },
          { slug: { $ne: EXAMPLE_SLUG } },
          { isExampleTemplate: { $ne: true } },
        ],
      },
      populate: servicePagePopulate,
    });

    if (!entity) {
      return ctx.notFound("Service page not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
