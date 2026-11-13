"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { listingPagePopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::residential-page.residential-page", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::residential-page.residential-page").findFirst({
      status: "published",
      populate: listingPagePopulate,
    });

    if (!entity) {
      return ctx.notFound("Residential page not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
