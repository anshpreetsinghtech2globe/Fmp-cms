"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { privacyPolicyPopulate } = require("../../../utils/populate");

module.exports = createCoreController(
  "api::privacy-policy.privacy-policy",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi
        .documents("api::privacy-policy.privacy-policy")
        .findFirst({
          status: "published",
          populate: privacyPolicyPopulate,
        });

      if (!entity) {
        return ctx.notFound("Privacy Policy not found");
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  }),
);
