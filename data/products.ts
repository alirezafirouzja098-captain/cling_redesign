export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  targetUser: string;
  problemSolved: string;
  features: string[];
  status: "available" | "live" | "demo";
  cta: string;
  ctaHref: string;
  externalUrl?: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "rusho",
    name: "Rusho",
    slug: "rusho",
    tagline: "On-demand home services platform with verified experts.",
    description:
      "Ghaziabad's premier on-demand home services platform, delivering trained and background-checked professionals for cleaning, home help, errands, and repairs directly to resident doorsteps.",
    category: "On-Demand Platform",
    targetUser: "Urban homeowners, gated communities, and residential townships",
    problemSolved: "Finding trusted, background-checked, and reliable home service professionals quickly.",
    features: [
      "Home & Kitchen Deep Cleaning",
      "Home Helper, Errands & Mechanic Services",
      "100% Background-Checked Staff",
      "Live Expert Tracking & Fast Booking",
      "Transparent Digital Pricing & Invoicing",
    ],
    status: "live",
    cta: "Explore Platform",
    ctaHref: "/contact?interest=rusho",
    externalUrl: "https://www.withrusho.com",
    image: "/images/products/rusho.webp",
    featured: true,
  },
  {
    id: "arvionpulse",
    name: "ArvionPulse",
    slug: "arvionpulse",
    tagline: "Universal lead-generation and data enrichment scraper.",
    description:
      "Universal B2B lead-generation platform that discovers and enriches business contacts from Google Maps, Justdial, IndiaMART, and LinkedIn into unified outreach pipelines.",
    category: "Data & Lead Intelligence",
    targetUser: "B2B sales teams, growth agencies, and recruitment companies",
    problemSolved: "Manual, fragmented prospect discovery and outdated business directory information.",
    features: [
      "Multi-Source Scraping (Maps, Justdial, IndiaMART, LinkedIn)",
      "Category & Location-Based Precision Search",
      "Website & Contact Enrichment Engine",
      "Scraper Performance Analytics Dashboard",
      "Export to CSV, CRM, and Outreach Workflows",
    ],
    status: "live",
    cta: "Explore Tool",
    ctaHref: "/contact?interest=arvionpulse",
    externalUrl: "https://pulse.arvioninfra.com",
    image: "/images/products/arvionpulse.webp",
    featured: true,
  },
  {
    id: "task-flow",
    name: "Task Flow",
    slug: "task-flow",
    tagline: "Collaborative team project and task management system.",
    description:
      "A streamlined project management platform designed to help cross-functional development and operational teams organize workflows, assign sprint tasks, and track milestone delivery in real time.",
    category: "Productivity & Ops",
    targetUser: "Engineering teams, agile agencies, and project managers",
    problemSolved: "Disorganized tasks, lost project context, and opaque team progress tracking.",
    features: [
      "Cross-Team Workspaces & Roles",
      "Real-time Sprint & Milestone Tracking",
      "Kanban & List Workflow Views",
      "Automated Activity Logs & Notifications",
    ],
    status: "live",
    cta: "Request Demo",
    ctaHref: "/contact?interest=task-flow",
    externalUrl: "https://taskflow.clinginfotech.com",
    image: "/images/products/task-flow.webp",
    featured: true,
  },
  {
    id: "cling-sales",
    name: "Cling Sales",
    slug: "cling-sales",
    tagline: "Intelligent sales CRM with automated lead distribution.",
    description:
      "A purpose-built CRM platform streamlining lead intake from marketing channels, scheduling smart follow-ups, and empowering sales teams to close deals faster.",
    category: "CRM & Sales",
    targetUser: "Inside sales teams, account executives, and business founders",
    problemSolved: "Leads slipping through cracks due to forgotten follow-ups and unassigned inquiries.",
    features: [
      "Automatic Multi-Channel Lead Ingestion",
      "Automated Follow-up Reminders & Calendaring",
      "Real-time Pipeline & Deal Stage Tracking",
      "Individual Sales Representative Analytics",
    ],
    status: "live",
    cta: "Request Demo",
    ctaHref: "/contact?interest=cling-sales",
    externalUrl: "http://sales.clinginfotech.com",
    image: "/images/products/cling-sales.webp",
    featured: false,
  },
  {
    id: "cling-invoice",
    name: "Cling Invoice",
    slug: "cling-invoice",
    tagline: "Seamless employee reimbursements and billing management.",
    description:
      "Enterprise expense reimbursement and invoice tracking portal that speeds up approval workflows and enables direct corporate disbursement.",
    category: "Fintech & Accounting",
    targetUser: "Finance departments, HR teams, and corporate employees",
    problemSolved: "Slow, paper-heavy reimbursement cycles and audit headaches.",
    features: [
      "Digital Receipt & Invoice Submission",
      "Automated Manager Approval Chains",
      "One-Click Bank Disbursement Export",
      "Audit-Ready Historical Financial Reporting",
    ],
    status: "live",
    cta: "Learn More",
    ctaHref: "/contact?interest=cling-invoice",
    externalUrl: "https://invoices.clinginfotech.com",
    image: "/images/products/cling-invoice.webp",
    featured: false,
  },
  {
    id: "cling-erp",
    name: "ClingERP",
    slug: "cling-erp",
    tagline: "The all-in-one modular business management ERP platform.",
    description:
      "Comprehensive modular ERP connecting manufacturing, inventory, order processing, HR, and accounting into a single real-time enterprise pane.",
    category: "Enterprise Software",
    targetUser: "Manufacturing, retail distributors, and mid-sized enterprises",
    problemSolved: "Siloed legacy accounting tools and uncoordinated warehouse operations.",
    features: [
      "Multi-Warehouse Inventory Control",
      "Order Processing & Dispatch Workflow",
      "Integrated HR & Biometric Attendance",
      "P&L and Real-time Financial Reporting",
    ],
    status: "available",
    cta: "Request Demo",
    ctaHref: "/contact?interest=cling-erp",
    image: "/images/products/cling-erp.webp",
    featured: true,
  },
  {
    id: "cling-portal",
    name: "ClingPortal",
    slug: "cling-portal",
    tagline: "Custom-branded client workspaces and member portals.",
    description:
      "Configurable digital workspace giving companies a secure, role-based portal for client reporting, document sharing, and project collaboration.",
    category: "Web Platform",
    targetUser: "Professional service firms, consulting agencies, and client-facing orgs",
    problemSolved: "Exchanging sensitive reports and deliverables via insecure email attachments.",
    features: [
      "Granular Role-based Access Control",
      "Branded Client Dashboards",
      "Encrypted Document Vault",
      "Automated Milestone & Ticket Notifications",
    ],
    status: "available",
    cta: "Learn More",
    ctaHref: "/contact?interest=cling-portal",
    image: "/images/products/cling-portal.webp",
    featured: false,
  },
];
