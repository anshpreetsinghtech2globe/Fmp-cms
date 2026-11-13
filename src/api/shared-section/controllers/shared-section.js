"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { sharedSectionPopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::shared-section.shared-section", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::shared-section.shared-section").findFirst({
      status: "published",
      populate: sharedSectionPopulate,
    });

    if (!entity) {
      return ctx.notFound("Shared sections not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
