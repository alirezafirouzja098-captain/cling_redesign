// Navigation items derived from Phase 1 information architecture
export const navigation = {
  main: [
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "App Development", href: "/services/app-development" },
        { label: "Web Design & Development", href: "/services/web-design-development" },
        { label: "ERP Solutions", href: "/services/erp-solutions" },
        { label: "AI & ML", href: "/services/ai-ml" },
        { label: "3D Animation", href: "/services/3d-animation" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
      ],
    },
    { label: "Work", href: "/work" },
    { label: "Products", href: "/products" },
    { label: "Company", href: "/company" },
    { label: "Insights", href: "/insights" },
  ],
  cta: { label: "Start a Project", href: "/contact" },
  footer: {
    company: [
      { label: "About Us", href: "/company" },
      { label: "Our Team", href: "/company#team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "App Development", href: "/services/app-development" },
      { label: "Web Design", href: "/services/web-design-development" },
      { label: "ERP Solutions", href: "/services/erp-solutions" },
      { label: "AI & ML", href: "/services/ai-ml" },
    ],
    resources: [
      { label: "Our Work", href: "/work" },
      { label: "Products", href: "/products" },
      { label: "Insights", href: "/insights" },
    ],
  },
};
