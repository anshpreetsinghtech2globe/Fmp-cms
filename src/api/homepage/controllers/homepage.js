"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { homepagePopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::homepage.homepage", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::homepage.homepage").findFirst({
      status: "published",
      populate: homepagePopulate,
    });

    if (!entity) {
      return ctx.notFound("Homepage not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
