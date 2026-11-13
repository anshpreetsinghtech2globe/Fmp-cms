"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { contactPopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::contact.contact").findFirst({
      status: "published",
      populate: contactPopulate,
    });

    if (!entity) {
      return ctx.notFound("Contact page not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
