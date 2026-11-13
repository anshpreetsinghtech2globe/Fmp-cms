"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { aboutPopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::about.about", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::about.about").findFirst({
      status: "published",
      populate: aboutPopulate,
    });

    if (!entity) {
      return ctx.notFound("About page not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
