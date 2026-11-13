"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { siteSettingPopulate } = require("../../../utils/populate");

module.exports = createCoreController("api::site-setting.site-setting", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.documents("api::site-setting.site-setting").findFirst({
      status: "published",
      populate: siteSettingPopulate,
    });

    if (!entity) {
      return ctx.notFound("Site settings not found");
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
