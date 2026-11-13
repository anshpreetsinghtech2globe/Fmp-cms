"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { termsOfUsePopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::terms-of-use.terms-of-use", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::terms-of-use.terms-of-use").findFirst({
      status: "published",
      populate: termsOfUsePopulate,
    });

    if (!entity) {
      return ctx.notFound("Terms of Use not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
