// Used only until the "projects" table in Supabase has rows.
// Once you add projects via /admin, these are ignored automatically.
// category: "webdev" | "wp" | "shopify" — used to group the /projects page.
export const fallbackProjects = [
  {
    id: "karvaan-tours",
    title: "Karvaan Tours",
    category: "webdev",
    description:
      "A private Japan tours booking platform — itinerary pages, tour packages and destination guides for day trips from Tokyo.",
    features: [
      "Dynamic tour package & pricing pages",
      "Destination guides across Fuji, Hakone, Nikko & more",
      "Fast, SEO-friendly Next.js build",
    ],
    tech: ["Next.js", "React", "SEO"],
    image: "https://www.karvaantours.com/images/home-page-hero-section-1920.webp",
    url: "https://www.karvaantours.com/",
  },
  {
    id: "ticket-barter",
    title: "Ticket Barter",
    category: "webdev",
    description:
      "A ticket-trading platform where users list and swap event tickets — accounts, listings and a membership tier.",
    features: [
      "User accounts & ticket listings",
      "Peer-to-peer swap flow",
      "Membership tier system",
    ],
    tech: ["JavaScript", "Node.js"],
    image: "https://ticket-barter.com/static/images/landing/blog-1.jpg",
    url: "https://ticket-barter.com/",
  },
  {
    id: "montek-creative",
    title: "Montek Creative",
    category: "webdev",
    description:
      "A creative-agency site deployment — services, portfolio and journal sections with a polished animated layout.",
    features: [
      "Animated services & portfolio sections",
      "Custom journal/blog layout",
      "Smooth scroll-based motion design",
    ],
    tech: ["JavaScript", "CSS Animation"],
    image: "https://montek-creative.vercel.app/assets/images/01.jpg",
    url: "https://montek-creative.vercel.app/",
  },
  {
    id: "pick-pack-pro",
    title: "Pick Pack Pro",
    category: "webdev",
    description:
      "A UK fulfilment & 3PL company site — service pages, pricing and 650+ integration listings for Amazon, Shopify and TikTok sellers.",
    features: [
      "650+ marketplace & courier integration pages",
      "Structured service & pricing hub",
      "Built for SEO across dozens of landing pages",
    ],
    tech: ["WordPress", "SEO", "Elementor"],
    image:
      "https://www.pickpackpro.co.uk/Images/smart-ecommerce-fulfillment-warehouse-uk-amazon-shopify-tiktok.webp",
    url: "https://www.pickpackpro.co.uk/",
  },
  {
    id: "souvenir-handicraft",
    title: "Souvenir Handicraft",
    category: "webdev",
    description:
      "An online storefront for authentic Pakistani handicrafts — Multani blue pottery, camel-skin lamps, Chiniot woodwork and hand-knotted carpets.",
    features: [
      "Curated handicraft product catalog",
      "Custom storefront design",
      "Built for international buyers",
    ],
    tech: ["JavaScript", "Ecommerce"],
    image:
      "https://images.pexels.com/photos/24390385/pexels-photo-24390385.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "https://souvenirhandicraft.com/",
  },
  {
    id: "the-data-scientist",
    title: "The Data Scientist",
    category: "wp",
    description:
      "A data science & AI blog and consultancy site for Dr. Stylianos Kampakis — articles, courses and podcast pages.",
    features: [
      "Blog, courses & podcast sections",
      "Custom WordPress theme",
      "Consultancy service pages",
    ],
    tech: ["WordPress", "SEO"],
    image:
      "https://thedatascientist.com/wp-content/uploads/2023/05/the_data_scientist_blue_logo-1536x410.png",
    url: "https://thedatascientist.com/",
  },
  {
    id: "straightup-inspections",
    title: "StraightUp Inspections",
    category: "wp",
    description:
      "A builder-led building inspections company site for Canberra & the ACT — service pages and booking contact.",
    features: [
      "Service & pricing pages",
      "Booking/contact flow",
      "Custom WordPress theme",
    ],
    tech: ["WordPress", "Elementor"],
    image:
      "https://straightupinspections.com.au/wp-content/themes/straightup-wp-theme/assets/img/hero-house.webp",
    url: "https://straightupinspections.com.au/",
  },
  {
    id: "smithhonig",
    title: "SmithHönig",
    category: "shopify",
    description:
      "A luxury home-decor Shopify store — bold designer pillows, peel-and-stick wallpaper and rugs with a large product catalog.",
    features: [
      "Large, well-organized product catalog",
      "Custom Shopify theme & storefront design",
      "Full cart & checkout flow",
    ],
    tech: ["Shopify", "Liquid", "Ecommerce"],
    image:
      "https://cdn.shopify.com/s/files/1/0027/7141/9249/files/Luxury_Pillows_Designer_Throw_Pillows_Exclusive_Decor_SmithHonig.jpg",
    url: "https://smithhonig.com/",
  },
  {
    id: "instamart",
    title: "Instamart",
    category: "shopify",
    description:
      "A festive & home-goods Shopify storefront — Christmas décor, grave flowers and household products with worldwide shipping.",
    features: [
      "Seasonal & festive product catalog",
      "Worldwide shipping setup",
      "Custom Shopify storefront",
    ],
    tech: ["Shopify", "Liquid", "Ecommerce"],
    image:
      "https://cdn.shopify.com/s/files/1/0903/2060/1453/files/WhatsApp_Image_2025-11-21_at_7.50.01_AM_29b6db3d-e125-4236-a4f0-93179345964a.jpg",
    url: "https://insta-mart.co.uk/",
  },
];
