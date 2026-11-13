"use strict";

const homepagePopulate = {
  hero: {
    populate: {
      backgroundImages: true,
      description: true,
      ctas: true,
      formServices: true,
      stats: true,
    },
  },
  federal: {
    populate: {
      marqueeItems: true,
      sectors: true,
    },
  },
  process: {
    populate: {
      steps: true,
    },
  },
  services: {
    populate: {
      services: true,
    },
  },
  quoteCta: true,
  founder: {
    populate: {
      values: true,
    },
  },
  features: {
    populate: {
      cards: true,
    },
  },
  howWeManageProjects: {
    populate: {
      steps: true,
    },
  },
  videos: {
    populate: {
      tabs: {
        populate: {
          videos: true,
        },
      },
    },
  },
  brands: {
    populate: {
      logos: true,
    },
  },
  beforeAfter: {
    populate: {
      paragraphs: true,
      projects: true,
    },
  },
  team: {
    populate: {
      members: true,
    },
  },
  offers: {
    populate: {
      offers: true,
    },
  },
  whyChoose: {
    populate: {
      items: true,
    },
  },
  latestProjects: true,
  educationalResources: {
    populate: {
      posts: true,
    },
  },
  educationalVideos: {
    populate: {
      videos: true,
    },
  },
  testimonials: {
    populate: {
      items: true,
    },
  },
  faq: {
    populate: {
      items: true,
    },
  },
  cta: true,
};

const siteSettingPopulate = {
  header: {
    populate: {
      primaryLinks: true,
      resourceLinks: true,
    },
  },
  footer: {
    populate: {
      socialLinks: true,
      proSolutionsLinks: true,
      serviceLinks: true,
      usefulLinks: true,
      certifications: true,
    },
  },
  areasWeServe: {
    populate: {
      areas: true,
    },
  },
};

const sharedSectionPopulate = {
  marqueeItems: true,
  process: {
    populate: {
      steps: true,
    },
  },
  benefits: {
    populate: {
      items: true,
    },
  },
  testimonials: {
    populate: {
      items: true,
    },
  },
  cta: true,
  financeBanner: true,
};

const aboutPopulate = {
  hero: true,
  intro: {
    populate: {
      paragraphs: true,
    },
  },
  stats: true,
  highlights: {
    populate: {
      items: true,
    },
  },
  brands: {
    populate: {
      logos: true,
    },
  },
  team: {
    populate: {
      members: true,
    },
  },
  bottomCta: true,
};

const contactPopulate = {
  hero: true,
  details: true,
  form: {
    populate: {
      services: true,
    },
  },
};

const privacyPolicyPopulate = {
  hero: true,
  blocks: {
    populate: {
      paragraphs: true,
      bullets: true,
    },
  },
};

const termsOfUsePopulate = {
  hero: true,
  blocks: {
    populate: {
      paragraphs: true,
      bullets: true,
    },
  },
};

const servicePagePopulate = {
  hero: {
    populate: {
      breadcrumbs: true,
      slides: {
        populate: {
          benefits: true,
        },
      },
      formServices: true,
    },
  },
  intro: {
    populate: {
      paragraphs: true,
      images: true,
    },
  },
  benefits: {
    populate: {
      items: true,
    },
  },
  highlights: {
    populate: {
      items: true,
    },
  },
  tips: {
    populate: {
      tips: true,
    },
  },
  applications: {
    populate: {
      items: true,
    },
  },
  compare: {
    populate: {
      columns: true,
      rows: {
        populate: {
          values: true,
        },
      },
    },
  },
  install: {
    populate: {
      services: true,
    },
  },
  faq: {
    populate: {
      items: true,
    },
  },
  offers: {
    populate: {
      offers: true,
    },
  },
  commercialProjects: {
    populate: {
      items: true,
    },
  },
  cta: true,
};

const projectPopulate = {
  cover: true,
  cardImage: true,
  gallery: true,
  images: true,
  details: true,
};

const listingPagePopulate = {
  hero: true,
  gallery: true,
  quoteCta: true,
};

const blogPostPopulate = {
  featuredImage: true,
  author: {
    populate: {
      photo: true,
    },
  },
  blocks: {
    populate: {
      paragraphs: true,
      bullets: true,
      image: true,
    },
  },
};

module.exports = {
  homepagePopulate,
  siteSettingPopulate,
  sharedSectionPopulate,
  aboutPopulate,
  contactPopulate,
  privacyPolicyPopulate,
  termsOfUsePopulate,
  servicePagePopulate,
  projectPopulate,
  listingPagePopulate,
  blogPostPopulate,
};
