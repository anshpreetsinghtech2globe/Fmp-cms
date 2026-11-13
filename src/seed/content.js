"use strict";

const { seedServicePages } = require("./service-pages");
const { seedProjects } = require("./projects");
const { seedBlog } = require("./blog");

const v = (value) => ({ value });
const img = (url) => ({ url });

const homepageSeed = {
  title: "Homepage",
  hero: {
    badge: "Family Owned & Operated Since 1995",
    title: "Commercial & Residential Flooring Contractor",
    titleHighlight: "in North Carolina & South Carolina",
    backgroundImage: "/images/mainhero.webp",
    backgroundImages: [
      img("/images/mainhero.webp"),
      img("/images/mainhero-2.webp"),
      img("/images/mainhero-3-0.webp"),
    ],
    description: [
      { text: "Explore top-quality flooring solutions tailored for both ", highlight: false },
      { text: "commercial and residential", highlight: true },
      { text: " contractors.", highlight: false },
    ],
    ctas: [
      { label: "Explore Commercial Projects", href: "/commercial", variant: "primary" },
      { label: "Explore Residential Projects", href: "/residential", variant: "secondary" },
      { label: "In-Stock Specials", href: "/in-stock-specials", variant: "highlight" },
    ],
    formTitle: "Free In-Home Estimate",
    formDescription: "Fill out the form below and we'll get back to you shortly.",
    formButtonText: "Get My Free Estimate",
    formServices: [
      "Luxury Vinyl Plank",
      "Broadloom Carpet",
      "Carpet Tile",
      "Ceramic Flooring",
      "Rubber",
      "Hardwood",
      "Laminate",
      "VCT",
    ].map(v),
    stats: [
      { value: "1,000+", label: "Happy Customer", variant: "default" },
      { value: "10+", label: "Years Experience", variant: "default" },
      { value: "1000+", label: "Projects Completed", variant: "default" },
      { text: "Federal & State", label: "Flooring Contractor", variant: "highlight" },
      { text: "No Middlemen", label: "Direct Importer & Distributor", variant: "highlight" },
    ],
  },
  federal: {
    marqueeItems: [
      "Federal & State Flooring Contractor",
      "Direct Importer & Distributor – No Middlemen",
      "Financing Available",
      "In-Home Free Estimate",
    ].map(v),
    headlineBlue: "Federal & State",
    headlineTeal: "Flooring Contractor",
    description:
      "We specialize in high-performance flooring solutions for federal, state, and public sector facilities. Our experience, compliance, and commitment to quality make us a trusted partner for projects that serve our communities.",
    buttonText: "Learn More About Our Services",
    buttonHref: "/services",
    sectors: [
      {
        title: "Schools",
        icon: "schools",
        description: "Durable, safe, and easy-to-maintain flooring for high-traffic educational environments.",
        image: "/images/School-Image-Federal.webp",
      },
      {
        title: "Hospitals",
        icon: "hospitals",
        description: "Hygienic, slip-resistant, and compliant flooring solutions for healthcare facilities.",
        image: "/images/Hostpital-Image-Federal.webp",
      },
      {
        title: "Government",
        icon: "government",
        description: "Reliable, specification-ready flooring for government buildings and public agencies.",
        image: "/images/Govt-Image-Federal.webp",
      },
      {
        title: "Offices",
        icon: "offices",
        description: "Professional, long-lasting flooring systems for municipal and administrative spaces.",
        image: "/images/Office-Image-Federal.webp",
      },
      {
        title: "Universities",
        icon: "schools",
        description: "High-performance flooring for campus buildings, lecture halls, and student facilities.",
        image: "/images/Universities-Flooring-Image.webp",
      },
      {
        title: "Courthouses",
        icon: "government",
        description: "Durable, professional, impact-resistant flooring solutions for courtrooms and judicial facilities.",
        image: "/images/CourtFlooring-Image.webp",
      },
      {
        title: "Military Bases",
        icon: "military",
        description: "Reliable flooring built for demanding military and defense facility environments.",
        image: "/images/military-Flooring-Image.webp",
      },
      {
        title: "Colleges",
        icon: "schools",
        description: "Stylish, durable, slip-resistant flooring for college campuses and academic buildings.",
        image: "/images/College-Flooring-Image.webp",
      },
      {
        title: "Social Service Offices",
        icon: "offices",
        description: "Welcoming, easy-care flooring for social service and community support offices.",
        image: "/images/Social-Flooring-Image.webp",
      },
    ],
  },
  process: {
    title: "How We Manage Every Project",
    subtitle: "A simple 5-step process:",
    backgroundImage: "/images/flooring-process-bg-remastered.webp",
    buttonText: "Start Your Project Today",
    buttonHref: "/estimate",
    steps: [
      { step: "01", title: "Consultation", icon: "consultation" },
      { step: "02", title: "Site Measurement", icon: "measurement" },
      { step: "03", title: "Material Selection", icon: "selection" },
      { step: "04", title: "Professional Installation", icon: "installation" },
      { step: "05", title: "Final Quality Inspection", icon: "inspection" },
    ],
  },
  services: {
    eyebrow: "What We Offer",
    title: "Our Flooring Services",
    description:
      "Explore durable, stylish flooring solutions for residential and commercial spaces — installed with care by our expert team.",
    services: [
      {
        title: "Carpet Tile",
        description:
          "Flexible, modular carpet tiles built for busy offices and high-traffic spaces with easy replacement and installation.",
        image: "/images/home-services/new/Carpet_Tile.webp",
        href: "/carpet-tile",
      },
      {
        title: "Broadloom Carpet",
        description:
          "Soft, wall-to-wall carpet that brings cozy elegance, warmth, and comfort to living spaces.",
        image: "/images/home-services/new/Broadloom_Carpet.webp",
        href: "/broadloom-carpet",
      },
      {
        title: "Hardwood",
        description:
          "Timeless natural beauty and lasting durability that elevates any room with classic hardwood craftsmanship.",
        image: "/images/home-services/new/Hardwood.webp",
        href: "/hardwood",
      },
      {
        title: "Laminate",
        description:
          "An elegant, budget-friendly alternative to hardwood with realistic wood looks and everyday durability.",
        image: "/images/home-services/new/Laminate.webp",
        href: "/laminate",
      },
      {
        title: "Rubber Flooring",
        description:
          "Slip-resistant rubber flooring ideal for gyms, play areas, and spaces that demand performance and safety.",
        image: "/images/home-services/new/Rubber_Flooring.webp",
        href: "/rubber",
      },
      {
        title: "Vinyl Composition Tiles (VCT)",
        description:
          "Durable VCT flooring designed for schools, hospitals, and commercial spaces that need robust, easy-care floors.",
        image: "/images/home-services/new/Vinyl_Composition_Tiles.webp",
        href: "/vct",
      },
      {
        title: "Luxury Vinyl Plank (LVP/LVT)",
        description:
          "High-end wood and tile looks with waterproof performance, comfort underfoot, and easy maintenance.",
        image: "/images/home-services/new/Service_Luxury_Vinyl_Plank.webp",
        href: "/lvp",
      },
      {
        title: "Ceramic Flooring",
        description:
          "Stylish ceramic tile flooring that delivers water resistance, long-term durability, and design versatility.",
        image: "/images/home-services/new/Ceramic_Flooring.webp",
        href: "/ceramic",
      },
    ],
  },
  quoteCta: {
    eyebrow: "Start Your Project",
    title: "Ready for Beautiful New Floors?",
    description:
      "Tell us about your space and get a free, no-obligation quote from our flooring experts.",
    buttonText: "Get a Quote",
    buttonHref: "/estimate",
  },
  founder: {
    eyebrow: "Meet the Founder",
    headline: "Built on Passion. Driven by Purpose",
    headlineAccent: ".",
    description:
      "FMP Flooring & Installation Services was founded with a simple belief — every space deserves quality floors and exceptional service. Our mission is to deliver unmatched craftsmanship, honest solutions, and lasting value in every project we take on.",
    values: [
      {
        icon: "quality",
        title: "Quality",
        description: "We never compromise on materials or craftsmanship.",
      },
      {
        icon: "integrity",
        title: "Integrity",
        description: "Honest communication and transparent processes.",
      },
      {
        icon: "commitment",
        title: "Commitment",
        description: "We treat every project like it's our own.",
      },
    ],
    buttonText: "Learn More About Our Story",
    buttonHref: "/about-us",
    videoSrc: "/images/MicrosoftTeams-video (1).webm",
    videoPoster: "/images/founder-portrait.png",
    videoAspectRatio: "576 / 1024",
  },
  features: {
    eyebrow: "Our Work USP",
    title: "Service Highlights",
    backgroundImage: "/images/294-Wood-Flooring.webp",
    cards: [
      {
        icon: "furniture",
        title: "Furniture carefully moved and protected before installation.",
      },
      {
        icon: "preparation",
        title: "Complete floor preparation before new flooring is installed.",
      },
      {
        icon: "removal",
        title: "Old flooring removed and properly disposed of.",
      },
      {
        icon: "challenges",
        title: "All preparation and installation challenges handled for you.",
      },
      {
        icon: "hassleFree",
        title: "A hassle-free installation from start to finish.",
      },
    ],
  },
  howWeManageProjects: {
    eyebrow: "Project Management",
    title: "How We Manage Every Project",
    description:
      "A clear, step-by-step process so every flooring project stays organized, efficient, and stress-free from start to finish.",
    steps: [
      {
        step: "01",
        title: "Old Flooring & Haul Away",
        description:
          "We remove your existing carpet, tile, or other flooring and haul it away so the space is clear and ready for installation.",
        image: "/images/process-feature/01-old-flooring-haul-away.jpg",
        imageAlt: "Crew removing old carpet and hauling flooring debris away",
      },
      {
        step: "02",
        title: "Subfloor Preparation",
        description:
          "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new flooring.",
        image: "/images/process-feature/02-subfloor-preparation.jpg",
        imageAlt: "Technician leveling and preparing the subfloor",
      },
      {
        step: "03",
        title: "Professional Flooring Installation",
        description:
          "Our experienced installers precisely lay your new flooring for a clean, seamless, and professional finish.",
        image: "/images/process-feature/03-flooring-installation.jpg",
        imageAlt: "Professional installing new wood-look flooring planks",
      },
      {
        step: "04",
        title: "Trim, Fixtures & Final Touches",
        description:
          "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
        image: "/images/process-feature/04-trim-final-touches.jpg",
        imageAlt: "Installer fitting baseboard trim on newly installed flooring",
      },
    ],
  },
  videos: {
    title: "Explore Our Work",
    tabs: [
      {
        tabId: "showroom",
        label: "Showroom",
        icon: "showroom",
        videos: [
          {
            title: "Showroom tour 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=450&fit=crop",
            duration: "1:24",
          },
          {
            title: "Showroom tour 2",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=450&fit=crop",
            duration: "1:18",
          },
        ],
      },
      {
        tabId: "warehouse",
        label: "Warehouse",
        icon: "warehouse",
        videos: [
          {
            title: "Warehouse overview 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=450&fit=crop",
            duration: "1:18",
          },
        ],
      },
      {
        tabId: "installations",
        label: "Installations",
        icon: "installations",
        videos: [
          {
            title: "Installation 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=450&fit=crop",
            duration: "1:35",
          },
        ],
      },
      {
        tabId: "testimonials",
        label: "Testimonials",
        icon: "testimonials",
        videos: [
          {
            title: "Customer story 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",
            duration: "0:58",
          },
        ],
      },
    ],
  },
  brands: {
    eyebrow: "Manufacturer / Brand Logos",
    headline: "Quality Brands. Trusted by Us",
    headlineAccent: ".",
    description:
      "We partner with the industry's leading manufacturers to bring you stylish, durable, and high-performance flooring you can trust.",
    logos: [
      { name: "Mohawk", logo: "/images/manufacturer/Mohawk-150x150.png" },
      { name: "Shaw Floors", logo: "/images/manufacturer/Shaw--150x150.png" },
      { name: "Mannington", logo: "/images/manufacturer/Mannington-150x150.png" },
      { name: "Armstrong Flooring", logo: "/images/manufacturer/Armstrong--150x150.png" },
      { name: "Tarkett", logo: "/images/manufacturer/Tarkett-150x150.png" },
      { name: "Interface", logo: "/images/manufacturer/Interface-150x150.png" },
      { name: "Patcraft", logo: "/images/manufacturer/Patcraft--150x150.png" },
      { name: "Bentley Mills", logo: "/images/manufacturer/Bentley-Mills--150x150.png" },
      { name: "JJ Flooring", logo: "/images/manufacturer/JJ-Flooring-150x150.png" },
      { name: "Roppe", logo: "/images/manufacturer/Roppe-150x150.png" },
      { name: "Chesapeake", logo: "/images/manufacturer/Chesapeake-150x150.png" },
      { name: "American Olean", logo: "/images/manufacturer/AMERICAN-OLEAN-150x150.png" },
      { name: "Crossville", logo: "/images/manufacturer/CROSSVILLE-150x150.png" },
      { name: "Daltile", logo: "/images/manufacturer/DALTILE--150x150.png" },
      { name: "EF Contract", logo: "/images/manufacturer/EF-Contract-150x150.png" },
      { name: "Johnsonite", logo: "/images/manufacturer/JOHNSONITE-150x150.png" },
      { name: "Louisville Tile", logo: "/images/manufacturer/Louisville-Tile-150x150.png" },
      { name: "Milliken", logo: "/images/manufacturer/Milliken-150x150.png" },
      { name: "Portobello", logo: "/images/manufacturer/Portobello-1-150x150.png" },
      { name: "Schluter", logo: "/images/manufacturer/SCHLUTER-150x150.png" },
    ],
  },
  beforeAfter: {
    eyebrow: "Our Transformations",
    title: "Before and After Transformations",
    tagline: "Same room. Same light. Completely new life.",
    paragraphs: [
      "New flooring changes how a space looks, feels, and functions. From worn carpet to refined hardwood or vinyl, every transformation elevates daily living.",
      "Drag the slider to compare each project, browse more transformations, and schedule a free in-home estimate to start your own before-and-after story.",
    ].map(v),
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    projects: [
      {
        label: "Project 54",
        beforeImage: "/images/before-after/54-Before.webp",
        afterImage: "/images/before-after/54-After.jpg",
      },
      {
        label: "Project 58",
        beforeImage: "/images/before-after/58-Before.webp",
        afterImage: "/images/before-after/58-After.jpg",
      },
      {
        label: "Project 78",
        beforeImage: "/images/before-after/78-Before.jpeg",
        afterImage: "/images/before-after/78-After.jpg",
      },
    ],
  },
  team: {
    eyebrow: "Meet Our Team",
    headline: "Dedicated Experts. Exceptional Results",
    headlineAccent: ".",
    description:
      "Our experienced team is committed to delivering top-quality flooring solutions with integrity, expertise, and care.",
    members: [
      {
        name: "Mike Thompson",
        role: "Founder & CEO",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Sarah Johnson",
        role: "Operations Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Chris Martinez",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Jessica Davis",
        role: "Design Consultant",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "David Chen",
        role: "Installation Lead",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=faces",
      },
    ],
  },
  offers: {
    eyebrow: "Special Offers",
    title: "Exclusive Savings",
    offers: [
      {
        theme: "blue",
        highlight: "Special Discount",
        title: "Military, Veterans & Senior Citizens",
        description: "Thank you for your service and loyalty.",
        buttonText: "Free In-Home Estimate",
        buttonHref: "/estimate",
        image: "/images/Offer-banner-image-remastered.webp",
        imageAlt: "Healthcare worker smiling outdoors",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why Choose Us",
    title: "Why Choose FMP?",
    description:
      "Family owned since 1995 — we bring warehouse pricing, expert installation, and honest guidance to every residential and commercial project.",
    items: [
      {
        icon: "professionals",
        title: "Experienced Professionals",
        description:
          "Skilled installers with years of industry experience, delivering careful, long-lasting results on every job.",
      },
      {
        icon: "selection",
        title: "Wide Range of Options",
        description:
          "Carpet, carpet tile, LVP, laminate, hardwood, ceramic, VCT, rubber, and more — all under one roof.",
      },
      {
        icon: "pricing",
        title: "Affordable & Transparent Pricing",
        description:
          "No hidden fees. No surprises. Clear estimates and cost-effective solutions without cutting quality.",
      },
      {
        icon: "expertise",
        title: "Residential & Commercial Expertise",
        description:
          "Homes, offices, retail, and large commercial spaces — we understand each project and deliver accordingly.",
      },
      {
        icon: "quality",
        title: "Quality Materials & Workmanship",
        description:
          "Trusted materials and proven installation techniques for durability, performance, and lasting appeal.",
      },
      {
        icon: "satisfaction",
        title: "Customer Satisfaction First",
        description:
          "Clear communication, on-time completion, and dependable service — your satisfaction is our priority.",
      },
    ],
  },
  latestProjects: {
    title: "Our Latest Project",
    embedUrl: "https://trusty.app/embed/project-map/37869d9b-531a-4f71-aaef-2a6d1006f3f3",
  },
  educationalResources: {
    eyebrow: "From Our Blog",
    title: "Educational Resources",
    description:
      "Guides and tips to help you choose smarter — from LVP trends and sound-resistant floors to care tips and buying advice.",
    buttonText: "View All Articles",
    buttonHref: "/blog",
    posts: [
      {
        title: "How to Find Sound-Resistant Vinyl Plank Flooring",
        excerpt:
          "Vinyl plank flooring has gained popularity among homeowners because of its water resistance, durability, and visual appeal.",
        category: "Guides",
        date: "2025-03-15",
        dateLabel: "March 15, 2025",
        image: "/images/blog/find-sound-resistant-vinyl-plank-flooring.png",
        href: "/blog/find-sound-resistant-vinyl-plank-flooring",
      },
      {
        title: "Is Luxury Vinyl Flooring Safe for My Home? 4 Fast Facts",
        excerpt:
          "Luxury vinyl flooring (LVF) has become incredibly popular due to its durability, affordability, and aesthetic appeal.",
        category: "Guides",
        date: "2025-03-08",
        dateLabel: "March 8, 2025",
        image: "/images/blog/luxury-vinyl-flooring-safe-for-my-home.png",
        href: "/blog/luxury-vinyl-flooring-safe-for-my-home",
      },
      {
        title: "What to Look for When Buying Luxury Vinyl Plank Flooring",
        excerpt:
          "Luxury Vinyl Plank (LVP) flooring is popular due to its durability, fashion-forward look, and water resistance.",
        category: "Guides",
        date: "2025-03-06",
        dateLabel: "March 6, 2025",
        image: "/images/blog/look-when-buying-luxury-vinyl-plank-flooring.png",
        href: "/blog/look-when-buying-luxury-vinyl-plank-flooring",
      },
    ],
  },
  educationalVideos: {
    eyebrow: "Watch & Learn",
    title: "Educational Videos",
    description:
      "Short videos covering flooring tips, product education, and installation insights to help you make confident decisions.",
    buttonText: "View Our Youtube Channel",
    buttonHref: "https://www.youtube.com/@furnishmyplace4954",
    videos: [
      {
        title: "Showroom tour 1",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=450&fit=crop",
        duration: "1:24",
      },
      {
        title: "Showroom tour 2",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=450&fit=crop",
        duration: "1:18",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Our Clients Say",
    backgroundImage: "/images/laminate-reviews.webp",
    items: [
      {
        quote:
          "FMP Flooring LLC transformed my living room with their stunning laminate flooring. The installation was quick, and the team was professional and courteous. I couldn't be happier with the results!",
        author: "Emily R",
      },
      {
        quote:
          "I was impressed with the selection of eco-friendly flooring options. The bamboo flooring we chose looks amazing and fits perfectly with our home's aesthetic. Highly recommend!",
        author: "Mark T.",
      },
      {
        quote:
          "The carpet tiles we installed in our office have not only improved the look of our space but are also incredibly easy to maintain. Their service was top-notch, and I appreciate the advice they provided!",
        author: "Jason P.",
      },
    ],
  },
  faq: {
    title: "People Also Ask",
    items: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes, we provide free, no-obligation estimates for all flooring projects. Contact us to schedule your consultation and get a detailed quote tailored to your needs.",
      },
      {
        question: "What flooring is best for homes with pets?",
        answer:
          "We recommend scratch-resistant options like Luxury Vinyl Plank (LVP), tile, or laminate with a durable wear layer. These materials handle paw traffic and are easy to clean.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We proudly serve residential and commercial customers throughout our region. Contact us to confirm service availability in your specific area.",
      },
      {
        question: "What is the most durable flooring for high-traffic areas?",
        answer:
          "For high-traffic areas like hallways, living rooms, and entryways, we recommend porcelain tile, Luxury Vinyl Plank (LVP), or engineered hardwood.",
      },
    ],
  },
  cta: {
    headlineWhite: "WE BRING OUR FLOORS AND YOU",
    headlineTeal: "NEVER PAY MORE.",
    description:
      "Experience the convenience of in-home shopping. Our professionally trained design consultants bring large flooring samples to your home for free at a time most convenient for you.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "FREE IN-HOME ESTIMATE",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
};

const siteSettingSeed = {
  title: "Site Settings",
  header: {
    logo: "/images/FMP-Flooring-fiNAL-lOGO-scaled.png",
    ctaLabel: "In Stock Specials",
    ctaHref: "/in-stock-specials",
    primaryLinks: [
      { label: "Luxury Vinyl Plank", href: "/lvp", square: "teal" },
      { label: "Broadloom Carpet", href: "/broadloom-carpet", square: "blue" },
      { label: "Carpet Tile", href: "/carpet-tile", square: "teal" },
      { label: "Ceramic Flooring", href: "/ceramic", square: "blue" },
      { label: "Rubber", href: "/rubber", square: "teal" },
      { label: "Hardwood", href: "/hardwood", square: "blue" },
      { label: "Laminate", href: "/laminate", square: "teal" },
      { label: "VCT", href: "/vct", square: "blue" },
    ],
    resourceLinks: [
      { label: "Product Care", href: "/product-care" },
      { label: "FAQ", href: "/faq" },
      { label: "Warranty", href: "/warranty" },
      { label: "Installation", href: "/installation" },
      { label: "Pricing", href: "/pricing" },
      { label: "Commercial", href: "/commercial" },
      { label: "Residential", href: "/residential" },
      { label: "Special Offers", href: "/special-offers" },
      { label: "In Stock Specials", href: "/in-stock-specials" },
      { label: "Financing", href: "/financing" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  footer: {
    logo: "/images/FMP-Flooring-fiNAL-lOGO-White-1-227x300.png",
    blurb:
      "We are a fully licensed, bonded, and insured flooring contractor trusted for a wide range of federal and state projects.",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/people/FMP-Flooring/100084480100386/",
        label: "Facebook",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/fmpflooring/",
        label: "Instagram",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/@furnishmyplace4954",
        label: "YouTube",
      },
    ],
    facebookUrl: "https://www.facebook.com/people/FMP-Flooring/100084480100386/",
    instagramUrl: "https://www.instagram.com/fmpflooring/",
    youtubeUrl: "https://www.youtube.com/@furnishmyplace4954",
    address: "4013 Dearborn Pl, Concord, NC 28027, United States",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    email: "flooring@furnishmyplace.com",
    proSolutionsLinks: [
      { label: "Residential Home Builders", href: "#" },
      { label: "Property Management", href: "#" },
      { label: "Real Estate Agents", href: "#" },
      { label: "Contractors & Trade Pros", href: "#" },
      { label: "Commercial Managers", href: "#" },
      { label: "Flooring & Carpet Outlets", href: "#" },
    ],
    serviceLinks: [
      { label: "Carpet Broadloom", href: "/broadloom-carpet" },
      { label: "Carpet Tile Services", href: "/carpet-tile" },
      { label: "Ceramic Flooring", href: "/ceramic" },
      { label: "Rubber Flooring", href: "/rubber" },
      { label: "Hardwood Flooring", href: "/hardwood" },
      { label: "Laminate Services", href: "/laminate" },
      { label: "Luxury Vinyl Plank", href: "/lvp" },
      { label: "Vinyl Composition Tile", href: "/vct" },
    ],
    usefulLinks: [
      { label: "About us", href: "/about-us" },
      { label: "Commercial Projects", href: "/commercial" },
      { label: "Residential Projects", href: "/residential" },
      { label: "Contact us", href: "/contact-us" },
      { label: "In Stock Specials", href: "/in-stock-specials" },
      { label: "Blogs", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    certifications: [
      { src: "/images/certifications/Made-USA-150x150.webp", alt: "Made in USA" },
      {
        src: "/images/certifications/Licensed-Bonded-Insured-150x150.webp",
        alt: "Licensed, Bonded & Insured",
      },
      { src: "/images/certifications/Locally-Owned-150x150.webp", alt: "Locally Owned" },
      { src: "/images/certifications/minority-owned.webp", alt: "Minority Owned Business" },
    ],
    copyrightName: "FMP Flooring LLC",
    developerName: "Tech2Globe",
    developerHref: "https://tech2globe.com/",
  },
  areasWeServe: {
    title: "Areas We Serve",
    backgroundImage: "",
    areas: [
      "Ahwatukee",
      "Anthem",
      "Apache Junction",
      "Arizona City",
      "Arrowhead",
      "Avondale",
      "Black Canyon City",
      "Buckeye",
      "Casa Grande",
      "Cave Creek",
      "Chandler",
      "Coolidge",
      "Florence",
      "Fountain Hills",
      "Gilbert",
      "Glendale",
      "Gold Canyon",
      "Goodyear",
      "Litchfield Park",
      "Maricopa County",
      "Mesa",
      "New River",
      "Paradise Valley",
      "Peoria",
      "Phoenix",
      "Queen Creek",
      "Rio Verde",
      "San Tan Valley",
      "Scottsdale",
      "Sun City",
      "Sun Lakes",
      "Surprise",
      "Tempe",
      "Tolleson",
      "Tonopah",
      "Waddell",
    ].map(v),
  },
};

const sharedSectionSeed = {
  title: "Shared Sections",
  marqueeItems: [
    "Federal & State Flooring Contractor",
    "Direct Importer & Distributor – No Middlemen",
    "Financing Available",
    "In-Home Free Estimate",
  ].map(v),
  process: {
    defaultTitle: "Get Brand New Floors in 4 Simple Steps",
    defaultDescription:
      "A clear, step-by-step process so your flooring project stays organized, efficient, and stress-free from start to finish.",
    steps: [
      {
        step: "01",
        title: "Old Flooring & Haul Away",
        description:
          "We remove your existing carpet, tile, or other flooring and haul it away so the space is clear and ready for installation.",
        image: "/images/process-feature/01-old-flooring-haul-away.jpg",
        imageAlt: "Crew removing old carpet and hauling flooring debris away",
      },
      {
        step: "02",
        title: "Subfloor Preparation",
        description:
          "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new flooring.",
        image: "/images/process-feature/02-subfloor-preparation.jpg",
        imageAlt: "Technician leveling and preparing the subfloor",
      },
      {
        step: "03",
        title: "Professional Flooring Installation",
        description:
          "Our experienced installers precisely lay your new flooring for a clean, seamless, and professional finish.",
        image: "/images/process-feature/03-flooring-installation.jpg",
        imageAlt: "Professional installing new wood-look flooring planks",
      },
      {
        step: "04",
        title: "Trim, Fixtures & Final Touches",
        description:
          "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
        image: "/images/process-feature/04-trim-final-touches.jpg",
        imageAlt: "Installer fitting baseboard trim on newly installed flooring",
      },
    ],
  },
  benefits: {
    eyebrow: "Why Choose Us",
    title: "Why Choose FMP Flooring?",
    backgroundImage: "/images/294-Wood-Flooring.webp",
    items: [
      {
        icon: "durable",
        title: "Durable Materials",
        description: "We install flooring built for real homes, traffic, pets, and everyday wear.",
      },
      {
        icon: "installation",
        title: "Professional Installation",
        description: "Experienced crews handle removal, prep, install, and finishing details.",
      },
      {
        icon: "affordable",
        title: "Fair Pricing",
        description: "Direct importer and distributor pricing with clear, honest quotes.",
      },
      {
        icon: "support",
        title: "Local Support",
        description: "Family-owned team serving North Carolina and South Carolina projects.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Our Customers Say",
    backgroundImage: "/images/laminate-reviews.webp",
    items: [
      {
        quote:
          "We're very happy with the work this team did for us! They replaced our flooring with beautiful LVP and completely redid our staircase — everything looks stunning and was done with great attention to detail. The crew was professional, respectful, and finished everything on time. Highly recommend them!",
        author: "Vitalika M",
      },
      {
        quote:
          "The best investment I've made! Furnish My Place Flooring's LVP flooring is high-quality, easy to install and completely transformed my space!! Their attention to detail and commitment to customer satisfaction are outstanding!!!",
        author: "Georgia Austin",
      },
      {
        quote:
          "I recently purchased LVP flooring from Furnish My Place. The quality is outstanding—durable, stylish, and exactly what I was looking for. The prices were incredibly affordable compared to other options I checked out. Highly recommend this company if you're looking for high-quality flooring at great prices!",
        author: "Philip Kylian",
      },
    ],
  },
  cta: {
    headlineWhite: "Get a Free",
    headlineTeal: "Flooring Quote",
    description:
      "Upgrade your space with beautiful, durable flooring. Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
  financeBanner: {
    title: "Financing Available",
    description: "Convenient monthly payments for your budget¹",
    buttonText: "View Financing Options",
    buttonHref: "/financing",
    backgroundImage: "/images/finance-banner-One.webp",
    footnote: "¹With approved credit.",
    footnoteLinkText: "Details",
    footnoteHref: "/financing",
  },
};

const aboutSeed = {
  title: "About Us",
  seoTitle: "About us | FMP Flooring",
  seoDescription:
    "Learn about FMP Flooring, our experience, service quality, and customer-first approach.",
  hero: {
    eyebrow: "About Us",
    title: "Trusted Flooring Partner for Homes, Business, and Large-Scale Projects",
    description:
      "We bring quality products, expert workmanship, and dependable service to every flooring project across the region.",
    breadcrumbLabel: "About us",
  },
  intro: {
    eyebrow: "Who We Are",
    title: "Inspire your space through decor",
    image: "/images/about-image.webp",
    imageAlt: "Modern office flooring showcase",
    paragraphs: [
      "We are a fully licensed, bonded, and insured flooring contractor trusted for a wide range of federal and state projects. Our experience includes successful installations for airports, schools, hospitals, courthouses, colleges, and military bases, as well as commercial offices, apartment complexes, hotels, and other large-scale facilities. With extensive expertise across diverse environments, we deliver exceptional craftsmanship, reliability, and long-lasting results.",
      "As a direct flooring wholesaler, we eliminate the middleman to offer the most competitive pricing on high-quality materials-saving you money by providing products directly from the manufacturer. We specialize in LVP/LVT, hardwood, carpet tile, broadloom carpet, rubber flooring, sheet vinyl, laminate, and VCT.",
      "Choose FurnishMyPlace Flooring LLC for a trusted, experienced, and value-driven partner dedicated to your satisfaction.",
    ].map(v),
  },
  stats: [
    { value: "1,000+", label: "Happy Customer" },
    { value: "5", label: "Company Rating", variant: "highlight" },
    { value: "10+", label: "Years Experience" },
  ],
  highlights: {
    eyebrow: "Why Clients Choose Us",
    title: "Built on Quality and Trust",
    items: [
      {
        title: "Licensed & Insured",
        description:
          "Fully licensed, bonded, and insured contractor for residential, commercial, and federal projects.",
      },
      {
        title: "Direct Flooring Wholesaler",
        description:
          "We remove middlemen and pass competitive pricing directly to homeowners and businesses.",
      },
      {
        title: "Wide Product Expertise",
        description:
          "Specialized in LVP/LVT, hardwood, carpet tile, broadloom carpet, rubber flooring, sheet vinyl, laminate, and VCT.",
      },
    ],
  },
  brands: {
    eyebrow: "Manufacturer / Brand Logos",
    headline: "Quality Brands. Trusted by Us",
    headlineAccent: ".",
    description:
      "We partner with leading manufacturers to bring stylish, durable, and high-performance flooring you can trust.",
    logos: [
      { name: "American Olean", logo: "/images/manufacturer/AMERICAN-OLEAN-150x150.png" },
      { name: "Crossville", logo: "/images/manufacturer/CROSSVILLE-150x150.png" },
      { name: "Daltile", logo: "/images/manufacturer/DALTILE--150x150.png" },
      { name: "EF Contract", logo: "/images/manufacturer/EF-Contract-150x150.png" },
      { name: "Johnsonite", logo: "/images/manufacturer/JOHNSONITE-150x150.png" },
      { name: "Louisville Tile", logo: "/images/manufacturer/Louisville-Tile-150x150.png" },
      { name: "Milliken", logo: "/images/manufacturer/Milliken-150x150.png" },
      { name: "Portobello", logo: "/images/manufacturer/Portobello-1-150x150.png" },
      { name: "Schluter", logo: "/images/manufacturer/SCHLUTER-150x150.png" },
    ],
  },
  team: {
    eyebrow: "Meet Our Team",
    headline: "Dedicated Experts. Exceptional Results",
    headlineAccent: ".",
    description:
      "Our experienced team is committed to delivering top-quality flooring solutions with integrity, expertise, and care.",
    members: [
      {
        name: "Mike Thompson",
        role: "Founder & CEO",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Sarah Johnson",
        role: "Operations Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Chris Martinez",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Jessica Davis",
        role: "Design Consultant",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
      },
    ],
  },
  bottomCta: {
    title: "Ready to Upgrade Your Flooring?",
    description: "Talk to our team for guidance on products, budget, and installation planning.",
    primaryLabel: "Contact Us",
    primaryHref: "/contact-us",
    secondaryLabel: "Free In-Home Estimate",
    secondaryHref: "/estimate",
  },
};

const contactSeed = {
  title: "Contact Us",
  seoTitle: "Contact us | FMP Flooring",
  seoDescription:
    "Get in touch with FMP Flooring for flooring services, estimates, and order support.",
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Talk About Your Flooring Project",
    description:
      "FMP Flooring LLC is available Monday to Friday from 9:00 AM to 5:00 PM. Call, email, or send us a message and our team will help you with product selection, estimates, and order support.",
    breadcrumbLabel: "Contact us",
  },
  details: {
    title: "Contact Details",
    address: "4013 Dearborn Pl, Concord, NC 28027, United States",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    email: "flooring@furnishmyplace.com",
  },
  form: {
    title: "Send us a message",
    description: "Fill out the form and our team will follow up shortly.",
    buttonText: "Submit",
    smsConsentText:
      "I agree to receive communications by text message regarding order updates, shipping notifications, promotional offers, and account notifications from FMP Flooring. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our Privacy Policy to learn how your data is used.",
    services: [
      "Luxury Vinyl Plank",
      "Broadloom Carpet",
      "Carpet Tile",
      "Rubber Flooring",
      "Hardwood Flooring",
      "Laminate Flooring",
      "VCT Flooring",
    ].map(v),
  },
};

const privacyPolicySeed = {
  title: "Privacy Policy",
  seoTitle: "Privacy Policy | FMP Flooring",
  seoDescription: "FMP Flooring privacy policy for customers and website visitors.",
  hero: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    breadcrumbLabel: "Privacy Policy",
  },
  blocks: [
    {
      paragraphs: [
        "We at FMP Flooring respect the privacy rights of our customers and visitors on our website. We are committed to serving a customer-oriented platform and draw serious attention to privacy matters. We have introduced policies and procedures that protect your rights from being violated during your time at the Furnish My Place Website. Here at Furnish My Place, each visitor and customer shall receive fair and equal treatment.",
      ].map(v),
      bullets: [],
    },
    {
      paragraphs: [
        "We have prepared user-friendly guidelines, policies, and procedures with simultaneously providing an unsurpassed online shopping experience. When you visit Furnish My Place, you are accepting the policies details that we follow.",
      ].map(v),
      bullets: [],
    },
    {
      paragraphs: [
        "All the policies and guidelines apply to the information that we receive from the following platforms:",
      ].map(v),
      bullets: [
        "Furnish My Place Website.",
        "Text, email, and other electronic messages are exchanged on the website.",
        "Electronic Communication with Furnish My Place",
      ].map(v),
    },
    {
      heading: "Electronic Communication with Furnish My Place",
      paragraphs: [
        "If you email us (Furnish My Place) at our registered email address and exchange messages through our automated chat assistant, you agree to continue communication with us. It also implies that you consent to share the information with us in writing, and we can use that information to continue the process/procedure you initiated. Furnish My Place can communicate with you via emails or by posting updates or notices on the website. We assume that you, as an attentive visitor – read and accept the updates that Furnish My Place posts or communicates through its website.",
        "Any electronic communication done on the website or email address – is the property of Furnish My Place.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "What Information Furnish My Place collects through its website?",
      paragraphs: [
        "To ensure that we offer you a better shopping experience, Furnish My Place collects and saves information that you post on our website willingly. It may include:",
      ].map(v),
      bullets: [
        "Information when you create an account.",
        "Information that you fill in to be notified for exclusive deals (offers and discounts).",
        "Information that you sign up for participating in a contest or a promotion on the website.",
        "Information that you enter for filling a return/refund on your purchase.",
      ].map(v),
    },
    {
      heading:
        "When is your account authorized and created on the Furnish My Place Website?",
      paragraphs: [
        "Creating an account is a very simple process on our website. Thus, we hereby clarify what activities you do when you create an account. It includes – Making a purchase, creating your wish list, registering for an account.",
        "We require some details from you when you register your account on our website – your first and last name, email address, a password, security question (if required), and other basic details and information. If you purchase any product on our website, we further ask you for additional information like billing address, shipping address, and payment-related information.",
        "We also observe your actions on our website to gather more information about you and your areas of interest. We may collect some details about the sections that you visit on our website and the IP address that you use to log in to our site.",
        "We extract this information for:",
      ].map(v),
      bullets: [
        "Making a personalized experience for you on Furnish My Place",
        "Restrict/prevent the fraudulent accounts",
      ].map(v),
    },
    {
      paragraphs: [
        "This data is not shared with any individual or outside company (apart from website development consultants and service providers of Furnish My Place – who are working with us as a unit to improving the website and customer experience). This information shall remain confidential. We have no access to where you go on the World Wide Web.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "We keep a close eye on keeping your details and information safe.",
      paragraphs: [
        "Furnish My Place is a customer-oriented website, and we have various security measures to keep the personal information of each customer and visitor safe. The personal data or information that we collected from the above-mentioned activities – is safely contained and stored within our secured networks. Only the senior employees, consultants, and analysts have access to this private information – using specially secured passwords. We put more emphasis on sensitive information like address details and credit/debit card information that you share. It is transmitted via secure technology to the Furnish My Place database.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "You can always update your personal information on the website.",
      paragraphs: [
        "Furnish My Place has a special section of “MY ACCOUNT”. The customers can visit the page and make changes like – adding/removing the personal information from that section. The page is easy to access with just a click on the “My Account” section (available on the top section of the website).",
      ].map(v),
      bullets: [],
    },
    {
      heading: "How does Furnish My Place use cookies?",
      paragraphs: [
        "A cookie refers to a small file placed on the hard drive of your system. You get to choose or refuse the browser cookies by simply activating the appropriate setting on your browser. The cookies shall always come to your system after you click on the ACCEPT BUTTON. If you accept the cookies, you will enjoy accessing all the parts of the websites. But, you may not be able to access certain parts on our website.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "We use the content that you upload.",
      paragraphs: [
        "Furnish My Place allows the customer to share feedbacks, pictures, recommendations, and queries. Furnish My Place uses this information that the customer(s) willingly share with us on our website or via email. You (the customers) are responsible for the user content posted on our website or any social media network. Also, the customer consent for using this user content for",
      ].map(v),
      bullets: [
        "Retaining and storing information to Furnish My Place Data Base.",
        "Using it to analyze the above-mentioned criteria.",
      ].map(v),
    },
    {
      heading: "SMS / Text Messaging Communications",
      paragraphs: [
        "By providing your mobile phone number to Furnish My Place, you consent to receive SMS messages from Furnish My Place related to order updates, shipping notifications, promotional offers, and account notifications.",
      ].map(v),
      bullets: [
        "Message Frequency: Message frequency may vary based on your interactions with us and the type of notifications you subscribe to.",
        "Message and Data Rates: Standard message and data rates may apply as per your mobile carrier’s plan. Furnish My Place is not responsible for any charges incurred from your carrier.",
        "Opting Out: You may opt out of receiving SMS messages at any time by replying with “STOP” to any SMS message you receive from us. After opting out, you will receive a confirmation message, and we will cease sending SMS messages to your number.",
        "Help and Support: If you need assistance or have questions about our SMS service, reply with “HELP” to any SMS message you receive, or contact our customer support team through the contact details provided on our website.",
        "Privacy of Your Mobile Information: Your phone number will be handled in accordance with this Privacy Policy. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.",
      ].map(v),
    },
    {
      heading: "Contact Information",
      paragraphs: [
        "For any questions or concerns about our privacy policy and the privacy practices and guidelines, please feel free to contact us at our website or contact us at our support service on WhatsApp and via call.",
      ].map(v),
      bullets: [],
    },
  ],
};

const termsOfUseSeed = {
  title: "Terms of Use",
  seoTitle: "Terms of Use | FMP Flooring",
  seoDescription:
    "Please read these Terms of Use carefully before using the FMP Flooring website.",
  hero: {
    eyebrow: "Legal",
    title: "Terms of Use",
    breadcrumbLabel: "Terms of Use",
  },
  blocks: [
    {
      paragraphs: [
        "Please read these Terms of Use carefully before using the FMP Flooring website. By accessing, browsing, or purchasing from our website, you agree to be bound by these terms and all applicable laws and regulations. If you do not agree with any part of these terms, please discontinue use of the website immediately.",
      ].map(v),
      bullets: [],
    },
    {
      paragraphs: [
        "By clicking “I Accept” or “Submit Order,” you confirm that you have read, understood, and accepted these Terms of Use.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "1. Eligibility",
      paragraphs: [
        "You must be at least 18 years of age and legally capable of entering into binding contracts to place an order on our website. By using this site, you represent that you meet these requirements and that all information you provide is accurate and complete.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "2. Trademark",
      paragraphs: [
        "All service marks, trademarks, trade names, logos, and brand identifiers displayed on the FMP Flooring website are owned by or licensed to FMP Flooring. Nothing on this website grants any license or right to use any trademark without our prior written permission.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "3. Copyright",
      paragraphs: [
        "All content on the FMP Flooring website — including text, product descriptions, images, graphics, design layouts, videos, and software — is protected by international copyright laws and is the exclusive property of FMP Flooring. No content may be copied, reproduced, republished, distributed, or used for commercial purposes in any form without written consent from the owner.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "4. Account Registration & Security",
      paragraphs: [
        "When creating an account, you are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized access or suspected breach. FMP Flooring reserves the right to suspend or terminate any account found to be in violation of these terms.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "5. Fraud Protection & Order Verification",
      paragraphs: [
        "To ensure a secure and user-friendly shopping experience, FMP Flooring follows several precautionary measures. We verify that every account and purchase belongs to an authorized individual with accurate details, which helps prevent consumer fraud.",
        "Our system cross-verifies your information during account creation or transactions through a verification email sent to your registered email address, or a One Time Password (OTP) sent to your registered mobile number. We also wait for valid authorization from the credit card issuer before processing your order. If any discrepancy is detected, you will be contacted and informed promptly.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "6. Pricing, Payment & Order Acceptance",
      paragraphs: [
        "All prices are listed in USD and are subject to change without prior notice. Placing an order constitutes an offer to purchase; acceptance occurs only when your order is confirmed and shipped.",
        "FMP Flooring reserves the right to cancel, limit, or refuse any order — including orders where a pricing or payment error has occurred due to a programming bug, system malfunction, or typographical error. In such cases, any amount charged will be refunded in full.",
        "NOTE: FMP Flooring holds no responsibility for typographic errors appearing on the website.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "7. Product Representation & Color Variance",
      paragraphs: [
        "We make every effort to display product colors, textures, patterns, and dimensions as accurately as possible. However, actual product appearance may vary due to monitor settings, screen calibration, lighting conditions, dye lots, and natural material variation. Minor variations in color, texture, size, or finish are not considered defects.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "8. Shipping, Delivery & Returns",
      paragraphs: [
        "Shipping timelines, delivery estimates, return eligibility, restocking fees, and cancellation windows are governed by our Shipping Policy and Return Policy, which are incorporated into these Terms by reference. Delivery dates are estimates only and are not guaranteed.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "9. Prohibited Use",
      paragraphs: ["You agree not to use the website to:"].map(v),
      bullets: [
        "Violate any applicable law or regulation",
        "Transmit malicious code, viruses, or harmful scripts",
        "Attempt unauthorized access to our systems, servers, or user data",
        "Scrape, data-mine, or extract content using automated tools",
        "Submit false, misleading, or fraudulent information",
        "Infringe upon the intellectual property rights of FMP Flooring or any third party",
      ].map(v),
    },
    {
      heading: "10. User-Submitted Content",
      paragraphs: [
        "By submitting reviews, photographs, comments, or other content to our website, you grant FMP Flooring a non-exclusive, royalty-free, worldwide license to use, display, reproduce, and distribute that content for marketing and operational purposes. You confirm that you own the rights to any content you submit.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "11. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites or services. These links are provided for convenience only. FMP Flooring does not control, endorse, or assume responsibility for the content, privacy practices, or reliability of any third-party site.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "12. Disclaimer of Warranties",
      paragraphs: [
        "The website and all products are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, FMP Flooring disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "13. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, FMP Flooring shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of the website or products purchased through it. Our total liability shall not exceed the amount paid by you for the specific product giving rise to the claim.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "14. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless FMP Flooring, its officers, employees, affiliates, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of your violation of these Terms or misuse of the website.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "15. Privacy",
      paragraphs: [
        "Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, store, and protect your personal information.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "16. Changes to These Terms",
      paragraphs: [
        "FMP Flooring reserves the right to modify, update, or replace these Terms of Use at any time without prior notice. Changes take effect upon posting to the website. Your continued use of the website after any update constitutes acceptance of the revised terms. We encourage you to review this page periodically.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "18. Severability",
      paragraphs: [
        "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
      ].map(v),
      bullets: [],
    },
    {
      heading: "19. Contact Us",
      paragraphs: ["For questions regarding these Terms of Use"].map(v),
      bullets: [],
    },
  ],
};

/** Seed only when empty — never overwrite editor changes. */
async function seedSingleTypeIfEmpty(strapi, uid, data, label) {
  const existing = await strapi.documents(uid).findFirst({});
  if (existing?.documentId) {
    strapi.log.info(`[seed] Skipped ${label} (already exists)`);
    return;
  }

  try {
    await strapi.documents(uid).create({
      data,
      status: "published",
    });
    strapi.log.info(`[seed] Created and published ${label}`);
  } catch (error) {
    strapi.log.error(`[seed] Create ${label} failed: ${error.message}`);
    if (error.details) {
      strapi.log.error(`[seed] ${label} details: ${JSON.stringify(error.details, null, 2)}`);
    }
    throw error;
  }
}

/** Fill header only if missing — does not overwrite footer/areas or existing header. */
async function ensureSiteSettingHeader(strapi) {
  const existing = await strapi.documents("api::site-setting.site-setting").findFirst({
    populate: { header: true },
  });
  if (!existing?.documentId) return;
  if (existing.header) {
    strapi.log.info("[seed] Skipped Site Settings header (already exists)");
    return;
  }

  await strapi.documents("api::site-setting.site-setting").update({
    documentId: existing.documentId,
    data: { header: siteSettingSeed.header },
    status: "published",
  });
  strapi.log.info("[seed] Added header to Site Settings");
}

/** Set admin display title once if missing. */
async function ensureSiteSettingTitle(strapi) {
  const existing = await strapi.documents("api::site-setting.site-setting").findFirst({});
  if (!existing?.documentId) return;
  if (existing.title) {
    strapi.log.info("[seed] Skipped Site Settings title (already set)");
    return;
  }

  await strapi.documents("api::site-setting.site-setting").update({
    documentId: existing.documentId,
    data: { title: siteSettingSeed.title || "Site Settings" },
    status: "published",
  });
  strapi.log.info("[seed] Set Site Settings title");
}

/** Fill footer.socialLinks once if missing — preserves other footer fields. */
async function ensureFooterSocialLinks(strapi) {
  const existing = await strapi.documents("api::site-setting.site-setting").findFirst({
    populate: {
      footer: {
        populate: {
          socialLinks: true,
          proSolutionsLinks: true,
          serviceLinks: true,
          usefulLinks: true,
          certifications: true,
        },
      },
    },
  });
  if (!existing?.documentId || !existing.footer) return;
  if (existing.footer.socialLinks?.length) {
    strapi.log.info("[seed] Skipped footer socialLinks (already set)");
    return;
  }

  const f = existing.footer;
  const socialLinks =
    siteSettingSeed.footer.socialLinks?.length > 0
      ? siteSettingSeed.footer.socialLinks
      : [
          f.facebookUrl && { platform: "facebook", url: f.facebookUrl, label: "Facebook" },
          f.instagramUrl && { platform: "instagram", url: f.instagramUrl, label: "Instagram" },
          f.youtubeUrl && { platform: "youtube", url: f.youtubeUrl, label: "YouTube" },
        ].filter(Boolean);

  if (!socialLinks.length) return;

  const linkMap = (list) =>
    (list || []).map((item) => ({ label: item.label, href: item.href })).filter((i) => i.label && i.href);
  const certMap = (list) =>
    (list || []).map((item) => ({ src: item.src, alt: item.alt })).filter((i) => i.src);

  await strapi.documents("api::site-setting.site-setting").update({
    documentId: existing.documentId,
    data: {
      footer: {
        logo: f.logo,
        blurb: f.blurb,
        facebookUrl: f.facebookUrl,
        instagramUrl: f.instagramUrl,
        youtubeUrl: f.youtubeUrl,
        address: f.address,
        phone: f.phone,
        phoneHref: f.phoneHref,
        email: f.email,
        copyrightName: f.copyrightName,
        developerName: f.developerName,
        developerHref: f.developerHref,
        socialLinks,
        proSolutionsLinks: linkMap(f.proSolutionsLinks),
        serviceLinks: linkMap(f.serviceLinks),
        usefulLinks: linkMap(f.usefulLinks),
        certifications: certMap(f.certifications),
      },
    },
    status: "published",
  });
  strapi.log.info("[seed] Added footer socialLinks to Site Settings");
}

/** Fill About once if empty / missing hero — does not overwrite filled About. */
async function ensureAboutContent(strapi) {
  const existing = await strapi.documents("api::about.about").findFirst({
    populate: { hero: true },
  });
  if (!existing?.documentId) return;
  if (existing.hero?.title) {
    strapi.log.info("[seed] Skipped About content (already filled)");
    return;
  }

  await strapi.documents("api::about.about").update({
    documentId: existing.documentId,
    data: aboutSeed,
    status: "published",
  });
  strapi.log.info("[seed] Filled About content");
}

/** Fill Privacy Policy once if empty / missing hero. */
async function ensurePrivacyPolicyContent(strapi) {
  const existing = await strapi.documents("api::privacy-policy.privacy-policy").findFirst({
    populate: { hero: true, blocks: true },
  });
  if (!existing?.documentId) return;
  if (existing.hero?.title && existing.blocks?.length) {
    strapi.log.info("[seed] Skipped Privacy Policy content (already filled)");
    return;
  }

  await strapi.documents("api::privacy-policy.privacy-policy").update({
    documentId: existing.documentId,
    data: privacyPolicySeed,
    status: "published",
  });
  strapi.log.info("[seed] Filled Privacy Policy content");
}

/** Fill Terms of Use once if empty / missing hero. */
async function ensureTermsOfUseContent(strapi) {
  const existing = await strapi.documents("api::terms-of-use.terms-of-use").findFirst({
    populate: { hero: true, blocks: true },
  });
  if (!existing?.documentId) return;
  if (existing.hero?.title && existing.blocks?.length) {
    strapi.log.info("[seed] Skipped Terms of Use content (already filled)");
    return;
  }

  await strapi.documents("api::terms-of-use.terms-of-use").update({
    documentId: existing.documentId,
    data: termsOfUseSeed,
    status: "published",
  });
  strapi.log.info("[seed] Filled Terms of Use content");
}

async function seedContent(strapi) {
  await seedSingleTypeIfEmpty(strapi, "api::homepage.homepage", homepageSeed, "Homepage");
  await seedSingleTypeIfEmpty(strapi, "api::about.about", aboutSeed, "About");
  await ensureAboutContent(strapi);
  await seedSingleTypeIfEmpty(strapi, "api::contact.contact", contactSeed, "Contact");
  await seedSingleTypeIfEmpty(
    strapi,
    "api::privacy-policy.privacy-policy",
    privacyPolicySeed,
    "Privacy Policy",
  );
  await ensurePrivacyPolicyContent(strapi);
  await seedSingleTypeIfEmpty(
    strapi,
    "api::terms-of-use.terms-of-use",
    termsOfUseSeed,
    "Terms of Use",
  );
  await ensureTermsOfUseContent(strapi);
  await seedServicePages(strapi);
  await seedProjects(strapi);
  await seedBlog(strapi);
  await seedSingleTypeIfEmpty(
    strapi,
    "api::site-setting.site-setting",
    siteSettingSeed,
    "Site Settings",
  );
  await seedSingleTypeIfEmpty(
    strapi,
    "api::shared-section.shared-section",
    sharedSectionSeed,
    "Shared Sections",
  );
  await ensureSiteSettingHeader(strapi);
  await ensureSiteSettingTitle(strapi);
  await ensureFooterSocialLinks(strapi);
}

module.exports = {
  seedContent,
  homepageSeed,
  aboutSeed,
  contactSeed,
  privacyPolicySeed,
  termsOfUseSeed,
  siteSettingSeed,
  sharedSectionSeed,
};
