# Cling Website Rebuild — Phase 0 Audit

## 1. Existing Website Overview
Cling Info Tech provides end-to-end IT Solutions including website development, mobile application development, digital marketing, custom web portals, ERP development, 3D animation, and AI/ML services. They claim 350+ happy clients, 390+ projects completed, and over 32 million lines of code.

## 2. Current Navigation
- **Home**
- **About Us**
  - Team
  - Achievements
  - Career
- **Services**
  - Our Services
  - AI/ML
  - 3D Videos
- **Solutions**
  - Our Products
  - Domains We Serve
  - Payment Gateways
- **Resources**
  - Portfolio
  - Blog
  - Case Studies
- **Clients**

## 3. Current Pages
- Homepage
- Team
- Achievements
- Career
- Services
- AI
- Video3D
- Products
- Domains We Serve
- Payment Gateways
- Portfolio
- Blog
- Case Studies
- Clients

## 4. Services
- App Development
- Web Design/Development
- ERPs
- AI/ML (Surveillance Models)
- 3D Animation (Logo animation, Advertisement video)
- Digital Marketing

## 5. Products
- [CONTENT TO VERIFY] Specific products are not explicitly detailed on the homepage, needs verification from the `/products` page.

## 6. Portfolio
- 390+ Projects Completed.
- [CONTENT TO VERIFY] Specific portfolio items need to be extracted from `/portfolio` or `/case-studies`.

## 7. Company Information
- Name: Cling Info Tech (Cling Multi Solutions Pvt Ltd)
- Leadership:
  - Ramesh Singh (Co-founder & Director)
  - Ashi Gupta (Managing Director)
  - Akshay Gupta (CEO)
- Social Links: Instagram, LinkedIn

## 8. Existing CTAs
- "Contact Us" Form (Full Name, Email, Phone, Company, Message).
- Submissions via forms on the homepage.

## 9. Existing Functionality
- Hamburger menu for mobile navigation.
- Multi-level dropdowns in main nav.
- Video playback for 3D animation/AI previews.
- Carousel/slider for testimonials.
- Contact form submission.
- Animated statistics counters.

## 10. Existing Assets
- Logo: `[REQUIRED EXISTING ASSET]` (Current: `logo.png`)
- Team Photos:
  - Ramesh Singh `[REQUIRED EXISTING ASSET]`
  - Ashi Gupta `[REQUIRED EXISTING ASSET]`
  - Akshay Gupta `[REQUIRED EXISTING ASSET]`
- Icons & Graphics: Hamburger menu, Services placeholders (`services2.png`, `services3.png`, `services5.png`), Video thumbnails (`videoThumbnail1.png`, `videoThumbnail2.png`, `AIThumbnail.png`), background/dot images.
- Videos: 3D Animations and AI surveillance samples `[REQUIRED EXISTING ASSET]`.

## 11. Content to Retain
- Leadership team names and titles.
- General company statistics (350+ clients, 390+ projects) [CONTENT TO VERIFY].
- Core service offerings (App Dev, Web Dev, ERPs, AI/ML, 3D Animation).
- Contact form fields.

## 12. Content to Review
- "Our Story", "Our Vision", and "Our Mission" text for potential copyediting and improvement.
- Timeline ("A journey as dynamic as us" 2019-2022) to see if it needs an update for 2023-present.

## 13. Content to Remove/Replace Later
- Generic placeholder images and unstructured text blobs.

## 14. Information That Needs Verification
- Specific details on the Domains they serve, Payment Gateways, and particular Products.
- Exact portfolio case studies.
- Testimonial quotes and attribution.
- Social media and contact info (phone/email/address).
- Details from the 2023-present timeline.

## 15. Technical Decisions
- **Framework**: Next.js (App Router)
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Tooling**: ESLint, Next.js image optimization

## 16. Project Structure
```text
app/
components/
public/
  images/
  branding/
  services/
  products/
  portfolio/
  team/
  clients/
lib/
styles/
types/
data/
docs/
```

## 17. Known Limitations
- Not all subpages have been deeply audited yet. Only the main homepage content structure is verified.
- Missing specific asset files that will need to be provided by the company (marked as `[REQUIRED EXISTING ASSET]`).

## 18. Recommended Next Phase
Phase 1 will focus on: UX architecture and information architecture.
