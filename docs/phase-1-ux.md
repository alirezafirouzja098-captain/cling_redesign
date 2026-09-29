# Cling Info Tech — Phase 1 UX & Information Architecture

## 1. UX Goals
- **Clarity First**: The visitor must understand what Cling builds and who they build it for within 5 seconds.
- **Trust Building**: Surface proof (stats, case studies, client logos) early in the journey.
- **Streamlined Navigation**: Reduce top-level clutter by logically grouping related pages (e.g., merging Team and About).
- **Clear Conversion Path**: Guide users naturally from Discovery to a unified primary CTA: "Start a Project".

## 2. Core Website Positioning
- **Primary Message**: Making Your Ideas Happen! We are an end-to-end IT Solutions provider.
- **Supporting Message**: We deliver premier web design, mobile apps, AI/ML, and ERP solutions to foster profitable online growth.
- **Proof**: 350+ Happy Clients, 390+ Projects Completed, 32M+ Lines of Code, and a dedicated leadership team.

## 3. Target Visitor Types
1. **Potential Client (Enterprise/SME)**: Needs complex solutions like ERPs or custom portals. *Goal*: Verify capabilities, view case studies, and contact sales.
2. **Startup/Founder**: Needs an MVP, App, or SaaS product. *Goal*: See portfolio quality, understand the process, start a project.
3. **Existing Business**: Looking for specialized services like AI/ML automation or Digital Marketing. *Goal*: Learn about specific service offerings.
4. **Job Seeker**: Looking for career opportunities. *Goal*: Find company culture info and apply for open roles.

## 4. New Sitemap
- **Home**: Overview of capabilities, proof, and process.
- **Services**: Grouped overview of all services.
  - Subpages: App Development, Web Design, ERPs, AI/ML, 3D Animation, Digital Marketing.
- **Work (Portfolio)**: Filterable grid of past projects.
  - Subpages: Individual Case Studies.
- **Products**: Showcase of proprietary Cling products.
  - Subpages: Individual Product details [CONTENT TO VERIFY].
- **Company**: Merged About, Team, and Achievements.
- **Careers**: Culture, benefits, and open positions.
- **Insights**: Blog and industry thoughts.
- **Contact**: Primary conversion landing page.

## 5. Navigation Architecture

**Desktop Navigation**
`Logo | Services | Work | Products | Company | Insights | [Start a Project]`

**Mobile Navigation**
- Hamburger Menu button (top right).
- Full-screen or slide-out menu with a clean, stacked list.
- Services acts as an accordion dropdown.
- Persistent `[Start a Project]` CTA button at the bottom of the menu.

## 6. Homepage Architecture
1. **Hero**: Headline ("Making Your Ideas Happen!"), Subheadline, Primary CTA ("Start a Project").
2. **Trust / Social Proof**: 4-column stats (390+ Projects, 350+ Clients, etc.).
3. **Core Services**: High-level visual cards for App Dev, Web Dev, ERPs, AI/ML. CTA: "Explore All Services".
4. **Featured Work**: Highlight 2-3 premium case studies. CTA: "View Our Portfolio".
5. **Why Cling**: Brief value proposition (Quality, Innovation, Support).
6. **Products Highlight**: Brief mention of proprietary products.
7. **Testimonials**: Carousel of client quotes [CONTENT TO VERIFY].
8. **Final CTA**: "Ready to build something great?" -> "Start a Project".

## 7. Services Architecture
**Categorization**:
- **Digital Product Development**: App Development, Web Design
- **Enterprise Solutions**: ERPs
- **AI & Emerging Tech**: AI/ML (Surveillance Models), 3D Animation
- **Growth & Marketing**: Digital Marketing

**Service Landing Page Structure** (for individual services):
Hero -> Problem Statement -> Solution -> Core Capabilities -> Development Process -> Technologies Used -> Relevant Case Studies -> FAQs -> CTA.

## 8. Portfolio Architecture
**Main Work Page**: Filterable grid (Filters: Web, Mobile, ERP, AI/ML, 3D).

## 9. Case Study Architecture
1. Project Overview
2. Client/Business Context
3. The Challenge
4. Goals
5. The Solution
6. Key Features
7. Technology Stack
8. Screenshots/Media
9. Results [CONTENT TO VERIFY]
10. Final CTA

## 10. Products Architecture
**Products Landing Page**: Grid showcasing Cling's software products.
**Product Detail**: Product Name -> Target User -> Problem Solved -> Main Features -> CTA (Request Demo / Learn More).
*[CONTENT TO VERIFY]*: Exact product list and external URLs.

## 11. About (Company) Architecture
Merge disjointed pages into one cohesive story.
1. Our Story & Vision/Mission
2. Global Presence & Domains Served
3. Leadership Team (Ramesh Singh, Ashi Gupta, Akshay Gupta)
4. Key Milestones
5. CTA

## 12. Team Architecture
Integrated into the "Company" page to reduce clicks and build immediate trust when reading about the company.

## 13. Careers Architecture
Hero -> Why work at Cling (Culture) -> Benefits [CONTENT TO VERIFY] -> Open Positions [CONTENT TO VERIFY] -> Application Form/CTA.

## 14. Contact Architecture
**Primary CTA**: "Start a Project" (Consistent across the site).
**Form Structure**:
- Full Name (Required)
- Email (Required)
- Phone (Optional)
- Company (Optional)
- Project Type (Dropdown: Web, App, ERP, AI, etc.) (Optional)
- Message (Required)
*Includes clear success/error states and alternative contact info (Email/Phone).*

## 15. User Journeys
- **Journey 1 (New Client)**: Homepage -> Services (Web Dev) -> Work (Related Case Study) -> Contact -> Inquiry Submitted.
- **Journey 2 (Product Visitor)**: Homepage -> Products -> Specific Product -> Request Demo.
- **Journey 3 (Job Seeker)**: Homepage -> Footer "Careers" link -> Open Positions -> Apply.

## 16. CTA Strategy
| Location | CTA Label | Destination | Purpose |
|----------|-----------|-------------|---------|
| Global Nav | Start a Project | `/contact` | Primary Conversion |
| Hero | Start a Project | `/contact` | Primary Conversion |
| Services Section | View All Services | `/services` | Exploration |
| Work Section | Explore Our Work | `/work` | Exploration |
| Footer | Start a Project | `/contact` | Secondary Conversion |

## 17. Footer Architecture
**Columns**:
1. **Company Info**: Logo, brief tagline, Social Links (LinkedIn, Instagram).
2. **Services**: App Dev, Web Dev, ERPs, AI/ML.
3. **Company**: About Us, Careers, Contact.
4. **Resources**: Work, Products, Insights (Blog).

## 18. Mobile UX Strategy
- **Navigation**: Clean hamburger menu, no deep nesting.
- **Horizontal Scrolling**: Use horizontal swipe for Service cards and Testimonials to save vertical screen space.
- **Stats**: Stack into a 2x2 grid instead of 4 columns.
- **Touch Targets**: Minimum 44x44px for all interactive elements.

## 19. Accessibility Requirements
- **Keyboard Navigation**: Fully accessible via Tab key with visible focus states (`:focus-visible`).
- **Headings**: Strict semantic hierarchy (H1 -> H2 -> H3) per page.
- **Forms**: Explicit `<label>` elements for all inputs.
- **Contrast**: Text elements must meet WCAG AA contrast ratios.

## 20. SEO Architecture
- `/services`
- `/services/[service-slug]`
- `/work`
- `/work/[project-slug]`
- `/products`
- `/company`
- `/careers`
- `/contact`

## 21. Content Strategy
- **KEEP**: Company stats, core service names, leadership team names.
- **REWRITE**: "Our Story", "Mission/Vision" (Shift tone from company-centric to customer-benefit-centric).
- **COMBINE**: About, Team, and Achievements into `/company`.
- **REMOVE**: Unstructured text blobs that do not serve a UX purpose.
- **VERIFY**: Exact product details, case study specifics, and open job roles.

## 22. Content Requiring Verification
- Specific Proprietary Products.
- Case Study details and measurable results.
- Client Testimonials and attributions.
- Employee Benefits and Open Positions.
- Physical office address and contact phone numbers.

## 23. Decisions Made
- **Primary CTA** standardized to "Start a Project".
- **Team and About pages merged** into a single `/company` route for a stronger narrative.
- **Products separated from Services** to highlight them as distinct business assets.
- **Portfolio renamed to Work** and restructured around detailed Case Studies.

## 24. Open Questions
- What specific filters do we need for the Work/Portfolio page?
- Are there specific integrations or tech stacks (e.g., React, Node, Python) we should highlight on the Services pages?

## 25. Phase 2 Requirements
Phase 2 will focus on Wireframing and Visual Design System creation based strictly on this information architecture.
