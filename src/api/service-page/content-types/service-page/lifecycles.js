"use strict";

const EXAMPLE_SLUG = "example-service-page";

module.exports = {
  async beforeCreate(event) {
    const data = event.params?.data;
    if (!data) return;

    // Duplicates of the EXAMPLE template must become real pages, not hidden templates.
    if (data.slug && data.slug !== EXAMPLE_SLUG) {
      data.isExampleTemplate = false;
    }
  },

  async beforeUpdate(event) {
    const data = event.params?.data;
    if (!data) return;

    if (data.slug && data.slug !== EXAMPLE_SLUG) {
      data.isExampleTemplate = false;
    }
  },
};
