import type { Schema, Struct } from '@strapi/strapi';

export interface AboutBottomCta extends Struct.ComponentSchema {
  collectionName: 'components_about_bottom_ctas';
  info: {
    displayName: 'About Bottom CTA';
    icon: 'cursor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryHref: Schema.Attribute.String;
    primaryLabel: Schema.Attribute.String;
    secondaryHref: Schema.Attribute.String;
    secondaryLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heros';
  info: {
    displayName: 'About Hero';
    icon: 'picture';
  };
  attributes: {
    breadcrumbLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutHighlights extends Struct.ComponentSchema {
  collectionName: 'components_about_highlights';
  info: {
    displayName: 'About Highlights';
    icon: 'bulletList';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.icon-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutIntro extends Struct.ComponentSchema {
  collectionName: 'components_about_intros';
  info: {
    displayName: 'About Intro';
    icon: 'file';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.text-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_blocks';
  info: {
    description: 'Add headings, paragraphs, bullet lists, or one or more images with optional teal caption bar.';
    displayName: 'Content Block';
    icon: 'file';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.text-item', true>;
    heading: Schema.Attribute.String;
    headingLevel: Schema.Attribute.Enumeration<['h2', 'h3']> &
      Schema.Attribute.DefaultTo<'h2'>;
    image: Schema.Attribute.Media<'images', true>;
    imageAlt: Schema.Attribute.String;
    imageCaption: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface ContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_contact_details';
  info: {
    displayName: 'Contact Details';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    phoneHref: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'envelop';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'shared.string-item', true>;
    smsConsentText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContactHero extends Struct.ComponentSchema {
  collectionName: 'components_contact_heros';
  info: {
    displayName: 'Contact Hero';
    icon: 'picture';
  };
  attributes: {
    breadcrumbLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeBeforeAfter extends Struct.ComponentSchema {
  collectionName: 'components_home_before_afters';
  info: {
    displayName: 'Before After';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.string-item', true>;
    projects: Schema.Attribute.Component<'shared.before-after-item', true>;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeBrands extends Struct.ComponentSchema {
  collectionName: 'components_home_brandss';
  info: {
    displayName: 'Brands';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    headlineAccent: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'shared.brand-logo', true>;
  };
}

export interface HomeCta extends Struct.ComponentSchema {
  collectionName: 'components_home_ctas';
  info: {
    displayName: 'Bottom CTA';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headlineTeal: Schema.Attribute.String;
    headlineWhite: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phoneHref: Schema.Attribute.String;
  };
}

export interface HomeEducationalResources extends Struct.ComponentSchema {
  collectionName: 'components_home_educational_resourcess';
  info: {
    displayName: 'Educational Resources';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    posts: Schema.Attribute.Component<'shared.resource-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeEducationalVideos extends Struct.ComponentSchema {
  collectionName: 'components_home_educational_videoss';
  info: {
    displayName: 'Educational Videos';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'shared.video-clip', true>;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeFeatures extends Struct.ComponentSchema {
  collectionName: 'components_home_featuress';
  info: {
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'shared.icon-card', true>;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeFederal extends Struct.ComponentSchema {
  collectionName: 'components_home_federals';
  info: {
    displayName: 'Federal';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headlineBlue: Schema.Attribute.String;
    headlineTeal: Schema.Attribute.String;
    marqueeItems: Schema.Attribute.Component<'shared.string-item', true>;
    sectors: Schema.Attribute.Component<'shared.icon-card', true>;
  };
}

export interface HomeFounder extends Struct.ComponentSchema {
  collectionName: 'components_home_founders';
  info: {
    displayName: 'Founder';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    headlineAccent: Schema.Attribute.String;
    values: Schema.Attribute.Component<'shared.icon-card', true>;
    videoAspectRatio: Schema.Attribute.String;
    videoPoster: Schema.Attribute.String;
    videoSrc: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heros';
  info: {
    displayName: 'Hero';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    backgroundImages: Schema.Attribute.Component<'shared.image-path', true>;
    badge: Schema.Attribute.String;
    ctas: Schema.Attribute.Component<'shared.cta-link', true>;
    description: Schema.Attribute.Component<'shared.text-part', true>;
    formButtonText: Schema.Attribute.String;
    formDescription: Schema.Attribute.Text;
    formServices: Schema.Attribute.Component<'shared.string-item', true>;
    formTitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    title: Schema.Attribute.String;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface HomeHowWeManage extends Struct.ComponentSchema {
  collectionName: 'components_home_how_we_manages';
  info: {
    displayName: 'How We Manage';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.step-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeLatestProjects extends Struct.ComponentSchema {
  collectionName: 'components_home_latest_projectss';
  info: {
    displayName: 'Latest Projects';
    icon: 'bulletList';
  };
  attributes: {
    embedUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeOffers extends Struct.ComponentSchema {
  collectionName: 'components_home_offerss';
  info: {
    displayName: 'Offers';
    icon: 'bulletList';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    offers: Schema.Attribute.Component<'shared.offer-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_processs';
  info: {
    displayName: 'Process';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.step-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeQuoteCta extends Struct.ComponentSchema {
  collectionName: 'components_home_quote_ctas';
  info: {
    displayName: 'Quote CTA';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_servicess';
  info: {
    displayName: 'Services';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeTeam extends Struct.ComponentSchema {
  collectionName: 'components_home_teams';
  info: {
    displayName: 'Team';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    headlineAccent: Schema.Attribute.String;
    members: Schema.Attribute.Component<'shared.team-member', true>;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonialss';
  info: {
    displayName: 'Testimonials';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.testimonial-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeVideos extends Struct.ComponentSchema {
  collectionName: 'components_home_videoss';
  info: {
    displayName: 'Explore Videos';
    icon: 'bulletList';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'shared.video-tab', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_home_why_chooses';
  info: {
    displayName: 'Why Choose';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.icon-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyBlock extends Struct.ComponentSchema {
  collectionName: 'components_privacy_blocks';
  info: {
    displayName: 'Privacy Block';
    icon: 'file';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.text-item', true>;
    heading: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.text-item', true>;
  };
}

export interface PrivacyHero extends Struct.ComponentSchema {
  collectionName: 'components_privacy_heros';
  info: {
    displayName: 'Privacy Hero';
    icon: 'picture';
  };
  attributes: {
    breadcrumbLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProjectDetailItem extends Struct.ComponentSchema {
  collectionName: 'components_project_detail_items';
  info: {
    displayName: 'Project Detail Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProjectGalleryIntro extends Struct.ComponentSchema {
  collectionName: 'components_project_gallery_intros';
  info: {
    displayName: 'Project Gallery Intro';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProjectListingHero extends Struct.ComponentSchema {
  collectionName: 'components_project_listing_heros';
  info: {
    displayName: 'Project Listing Hero';
    icon: 'picture';
  };
  attributes: {
    breadcrumbLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProjectQuoteCta extends Struct.ComponentSchema {
  collectionName: 'components_project_quote_ctas';
  info: {
    displayName: 'Project Quote CTA';
    icon: 'cursor';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServiceApplications extends Struct.ComponentSchema {
  collectionName: 'components_service_applications';
  info: {
    displayName: 'Service Applications';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.string-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_service_breadcrumbs';
  info: {
    displayName: 'Service Breadcrumb';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceCommercialProjects extends Struct.ComponentSchema {
  collectionName: 'components_service_commercial_projects';
  info: {
    displayName: 'Service Commercial Projects';
    icon: 'picture';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'service.project-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceCompare extends Struct.ComponentSchema {
  collectionName: 'components_service_compares';
  info: {
    displayName: 'Service Compare';
    icon: 'bulletList';
  };
  attributes: {
    columns: Schema.Attribute.Component<'shared.string-item', true>;
    eyebrow: Schema.Attribute.String;
    featureLabel: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'service.compare-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceCompareRow extends Struct.ComponentSchema {
  collectionName: 'components_service_compare_rows';
  info: {
    displayName: 'Service Compare Row';
    icon: 'bulletList';
  };
  attributes: {
    feature: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'shared.string-item', true>;
  };
}

export interface ServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_service_heros';
  info: {
    displayName: 'Service Hero';
    icon: 'picture';
  };
  attributes: {
    breadcrumbs: Schema.Attribute.Component<'service.breadcrumb', true>;
    defaultService: Schema.Attribute.String;
    formButtonText: Schema.Attribute.String;
    formDescription: Schema.Attribute.Text;
    formServices: Schema.Attribute.Component<'shared.string-item', true>;
    formTitle: Schema.Attribute.String;
    slides: Schema.Attribute.Component<'service.hero-slide', true>;
  };
}

export interface ServiceHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_service_hero_slides';
  info: {
    displayName: 'Service Hero Slide';
    icon: 'picture';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    benefits: Schema.Attribute.Component<'shared.icon-card', true>;
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    footnote: Schema.Attribute.Text;
    slideId: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleAfter: Schema.Attribute.String;
    titleBefore: Schema.Attribute.String;
    titleHighlightValue: Schema.Attribute.String;
  };
}

export interface ServiceHighlightItem extends Struct.ComponentSchema {
  collectionName: 'components_service_highlight_items';
  info: {
    displayName: 'Service Highlight Item';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    line1: Schema.Attribute.String;
    line2: Schema.Attribute.String;
  };
}

export interface ServiceHighlights extends Struct.ComponentSchema {
  collectionName: 'components_service_highlights';
  info: {
    displayName: 'Service Highlights';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'service.highlight-item', true>;
  };
}

export interface ServiceImageItem extends Struct.ComponentSchema {
  collectionName: 'components_service_image_items';
  info: {
    displayName: 'Service Image';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceInstall extends Struct.ComponentSchema {
  collectionName: 'components_service_installs';
  info: {
    displayName: 'Service Install';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.string-item', true>;
    servicesTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServiceIntro extends Struct.ComponentSchema {
  collectionName: 'components_service_intros';
  info: {
    displayName: 'Service Intro';
    icon: 'file';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    images: Schema.Attribute.Component<'service.image-item', true>;
    paragraphs: Schema.Attribute.Component<'shared.text-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_service_project_cards';
  info: {
    displayName: 'Service Project Card';
    icon: 'picture';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceTips extends Struct.ComponentSchema {
  collectionName: 'components_service_tips';
  info: {
    displayName: 'Service Tips';
    icon: 'file';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    tips: Schema.Attribute.Component<'shared.text-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBeforeAfterItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_before_after_items';
  info: {
    displayName: 'Before After Item';
    icon: 'bulletList';
  };
  attributes: {
    afterImage: Schema.Attribute.String;
    beforeImage: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedBenefitsBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits_blocks';
  info: {
    displayName: 'Benefits Block';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.icon-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand_logos';
  info: {
    displayName: 'Brand Logo';
    icon: 'bulletList';
  };
  attributes: {
    logo: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCertItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_cert_items';
  info: {
    displayName: 'Certification';
    icon: 'bulletList';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_links';
  info: {
    displayName: 'CTA Link';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'highlight']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFinanceBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_finance_banners';
  info: {
    displayName: 'Finance Banner';
    icon: 'bulletList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    footnote: Schema.Attribute.String;
    footnoteHref: Schema.Attribute.String;
    footnoteLinkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_cards';
  info: {
    displayName: 'Icon Card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImagePath extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_paths';
  info: {
    displayName: 'Image Path';
    icon: 'bulletList';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Nav Link';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    square: Schema.Attribute.Enumeration<['teal', 'blue', 'yellow']> &
      Schema.Attribute.DefaultTo<'teal'>;
  };
}

export interface SharedOfferItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_offer_items';
  info: {
    displayName: 'Offer Item';
    icon: 'bulletList';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['blue', 'yellow', 'teal']> &
      Schema.Attribute.DefaultTo<'blue'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedProcessBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_blocks';
  info: {
    displayName: 'Shared Process';
    icon: 'bulletList';
  };
  attributes: {
    defaultDescription: Schema.Attribute.Text;
    defaultTitle: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.step-item', true>;
  };
}

export interface SharedResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_cards';
  info: {
    displayName: 'Resource Card';
    icon: 'bulletList';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    dateLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    excerpt: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'Service Card';
    icon: 'bulletList';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'youtube', 'linkedin', 'x', 'tiktok', 'other']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'facebook'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
    value: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['default', 'highlight']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedStepItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_step_items';
  info: {
    displayName: 'Step Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    step: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStringItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_string_items';
  info: {
    displayName: 'String Item';
    icon: 'bulletList';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    displayName: 'Testimonial';
    icon: 'bulletList';
  };
  attributes: {
    author: Schema.Attribute.String;
    image: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    displayName: 'Text Item';
    icon: 'file';
  };
  attributes: {
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedTextPart extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_parts';
  info: {
    displayName: 'Text Part';
    icon: 'bulletList';
  };
  attributes: {
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedVideoClip extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_clips';
  info: {
    displayName: 'Video Clip';
    icon: 'bulletList';
  };
  attributes: {
    duration: Schema.Attribute.String;
    poster: Schema.Attribute.String;
    src: Schema.Attribute.String;
    title: Schema.Attribute.String;
    youtubeId: Schema.Attribute.String;
  };
}

export interface SharedVideoTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_tabs';
  info: {
    displayName: 'Video Tab';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    tabId: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'shared.video-clip', true>;
  };
}

export interface SiteAreasWeServe extends Struct.ComponentSchema {
  collectionName: 'components_site_areas_we_serves';
  info: {
    displayName: 'Areas We Serve';
    icon: 'bulletList';
  };
  attributes: {
    areas: Schema.Attribute.Component<'shared.string-item', true>;
    backgroundImage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SiteFooter extends Struct.ComponentSchema {
  collectionName: 'components_site_footers';
  info: {
    displayName: 'Footer';
    icon: 'bulletList';
  };
  attributes: {
    address: Schema.Attribute.Text;
    blurb: Schema.Attribute.Text;
    certifications: Schema.Attribute.Component<'shared.cert-item', true>;
    copyrightName: Schema.Attribute.String;
    developerHref: Schema.Attribute.String;
    developerName: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    facebookUrl: Schema.Attribute.String;
    instagramUrl: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phoneHref: Schema.Attribute.String;
    proSolutionsLinks: Schema.Attribute.Component<'shared.link', true>;
    serviceLinks: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.social-link', true>;
    usefulLinks: Schema.Attribute.Component<'shared.link', true>;
    youtubeUrl: Schema.Attribute.String;
  };
}

export interface SiteHeader extends Struct.ComponentSchema {
  collectionName: 'components_site_headers';
  info: {
    displayName: 'Header';
    icon: 'bulletList';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    primaryLinks: Schema.Attribute.Component<'shared.nav-link', true>;
    resourceLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.bottom-cta': AboutBottomCta;
      'about.hero': AboutHero;
      'about.highlights': AboutHighlights;
      'about.intro': AboutIntro;
      'blog.block': BlogBlock;
      'contact.details': ContactDetails;
      'contact.form': ContactForm;
      'contact.hero': ContactHero;
      'home.before-after': HomeBeforeAfter;
      'home.brands': HomeBrands;
      'home.cta': HomeCta;
      'home.educational-resources': HomeEducationalResources;
      'home.educational-videos': HomeEducationalVideos;
      'home.faq': HomeFaq;
      'home.features': HomeFeatures;
      'home.federal': HomeFederal;
      'home.founder': HomeFounder;
      'home.hero': HomeHero;
      'home.how-we-manage': HomeHowWeManage;
      'home.latest-projects': HomeLatestProjects;
      'home.offers': HomeOffers;
      'home.process': HomeProcess;
      'home.quote-cta': HomeQuoteCta;
      'home.services': HomeServices;
      'home.team': HomeTeam;
      'home.testimonials': HomeTestimonials;
      'home.videos': HomeVideos;
      'home.why-choose': HomeWhyChoose;
      'privacy.block': PrivacyBlock;
      'privacy.hero': PrivacyHero;
      'project.detail-item': ProjectDetailItem;
      'project.gallery-intro': ProjectGalleryIntro;
      'project.listing-hero': ProjectListingHero;
      'project.quote-cta': ProjectQuoteCta;
      'service.applications': ServiceApplications;
      'service.breadcrumb': ServiceBreadcrumb;
      'service.commercial-projects': ServiceCommercialProjects;
      'service.compare': ServiceCompare;
      'service.compare-row': ServiceCompareRow;
      'service.hero': ServiceHero;
      'service.hero-slide': ServiceHeroSlide;
      'service.highlight-item': ServiceHighlightItem;
      'service.highlights': ServiceHighlights;
      'service.image-item': ServiceImageItem;
      'service.install': ServiceInstall;
      'service.intro': ServiceIntro;
      'service.project-card': ServiceProjectCard;
      'service.tips': ServiceTips;
      'shared.before-after-item': SharedBeforeAfterItem;
      'shared.benefits-block': SharedBenefitsBlock;
      'shared.brand-logo': SharedBrandLogo;
      'shared.cert-item': SharedCertItem;
      'shared.cta-link': SharedCtaLink;
      'shared.faq-item': SharedFaqItem;
      'shared.finance-banner': SharedFinanceBanner;
      'shared.icon-card': SharedIconCard;
      'shared.image-path': SharedImagePath;
      'shared.link': SharedLink;
      'shared.nav-link': SharedNavLink;
      'shared.offer-item': SharedOfferItem;
      'shared.process-block': SharedProcessBlock;
      'shared.resource-card': SharedResourceCard;
      'shared.service-card': SharedServiceCard;
      'shared.social-link': SharedSocialLink;
      'shared.stat-item': SharedStatItem;
      'shared.step-item': SharedStepItem;
      'shared.string-item': SharedStringItem;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial-item': SharedTestimonialItem;
      'shared.text-item': SharedTextItem;
      'shared.text-part': SharedTextPart;
      'shared.video-clip': SharedVideoClip;
      'shared.video-tab': SharedVideoTab;
      'site.areas-we-serve': SiteAreasWeServe;
      'site.footer': SiteFooter;
      'site.header': SiteHeader;
    }
  }
}
