"use strict";

const { seedContent } = require("./seed/content");

async function setPublicPermissions(strapi, roleType, newPermissions) {
  const role = await strapi.db.query("plugin::users-permissions.role").findOne({
    where: { type: roleType },
  });

  if (!role) {
    strapi.log.warn(`Role "${roleType}" not found; skipped permission bootstrap`);
    return;
  }

  for (const [controller, actions] of Object.entries(newPermissions)) {
    for (const action of actions) {
      const actionId = `api::${controller}.${controller}.${action}`;
      const existing = await strapi.db.query("plugin::users-permissions.permission").findOne({
        where: {
          role: role.id,
          action: actionId,
        },
      });

      if (!existing) {
        await strapi.db.query("plugin::users-permissions.permission").create({
          data: {
            action: actionId,
            role: role.id,
          },
        });
      }
    }
  }
}

module.exports = {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    await setPublicPermissions(strapi, "public", {
      homepage: ["find"],
      about: ["find"],
      contact: ["find"],
      "privacy-policy": ["find"],
      "terms-of-use": ["find"],
      "service-page": ["find", "findOne"],
      project: ["find", "findOne"],
      "commercial-page": ["find"],
      "residential-page": ["find"],
      "site-setting": ["find"],
      "shared-section": ["find"],
      "blog-page": ["find"],
      "blog-post": ["find", "findOne"],
      author: ["find", "findOne"],
      lead: ["create"],
    });

    try {
      await seedContent(strapi);
    } catch (error) {
      strapi.log.error(`[seed] Failed: ${error.message}`);
      if (error.details) {
        strapi.log.error(`[seed] Details: ${JSON.stringify(error.details)}`);
      }
      if (error.stack) {
        strapi.log.error(error.stack);
      }
    }
  },
};
