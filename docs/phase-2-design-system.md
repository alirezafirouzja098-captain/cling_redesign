# Cling Info Tech — Phase 2 Design System

## 1. Brand Direction & Visual Personality
**Design Philosophy**: Distinctive, premium, modern, and human. The design moves away from the generic "navy/orange template" look and steps into the visual territory of top-tier product development agencies. 
**Vibe**: Established yet innovative. Trustworthy without being overly corporate. Clean, breathable, and highly intentional.

## 2. Colors (Design Tokens)
Moving away from the legacy navy/orange, we are adopting a more sophisticated palette that communicates high-end engineering and modern product design.

### Brand Colors
- **Brand Primary (Deep Space)**: `#0B1120` (slate-950) — Used for primary backgrounds, hero sections, and heavy typography. Replaces standard black for a richer, more premium feel.
- **Brand Accent (Electric Indigo)**: `#4F46E5` (indigo-600) — Used for primary CTAs, links, and active states. It communicates modern technology.
- **Brand Secondary (Cyan/Teal)**: `#06B6D4` (cyan-500) — Used sparingly for gradients, hover effects, and secondary highlights to add a spark of innovation without overpowering the UX.

### Surface Colors
- **Surface Primary**: `#FFFFFF` (white) — Main background for content-heavy sections.
- **Surface Secondary**: `#F8FAFC` (slate-50) — Subtle off-white for section separation and standard cards.
- **Surface Dark**: `#1E293B` (slate-800) — Used for dark-mode cards or footer sections.

### Text Colors
- **Text High Contrast**: `#0F172A` (slate-900) — Primary headers on light backgrounds.
- **Text Body**: `#475569` (slate-600) — highly legible body copy.
- **Text Muted**: `#94A3B8` (slate-400) — Subtitles, placeholders, and meta-information.
- **Text Inverse**: `#F8FAFC` (slate-50) — Text on dark backgrounds.

### Border & Utility Colors
- **Border Light**: `#E2E8F0` (slate-200)
- **Border Dark**: `#334155` (slate-700)
- **Error**: `#EF4444` (red-500)
- **Success**: `#10B981` (emerald-500)

## 3. Typography
A dual-font system to create visual tension between striking headlines and highly readable body text.

- **Display & Headings**: `Plus Jakarta Sans` (Sans-serif, Geometric) — Modern, tech-forward, and premium.
- **Body & UI**: `Inter` (Sans-serif, Neo-Grotesque) — Clean, legible, and functional.

### Hierarchy (Tailwind Mapping)
- **Display**: 5xl/6xl/7xl, Bold (-tracking-tight), `Plus Jakarta Sans`.
- **H1**: 4xl (36px mobile / 48px desktop), Bold, `Plus Jakarta Sans`.
- **H2**: 3xl (30px mobile / 36px desktop), SemiBold.
- **H3**: 2xl (24px mobile / 30px desktop), SemiBold.
- **H4**: xl (20px), Medium.
- **Body Large**: lg (18px), Regular, `Inter`, leading-relaxed.
- **Body Primary**: base (16px), Regular, `Inter`, leading-relaxed.
- **Body Small**: sm (14px), Regular, `Inter`.
- **Caption / Kicker**: xs (12px), Uppercase, tracking-widest, SemiBold.

## 4. Spacing & Layout
Standardized 8pt grid system.

### Container & Grid
- **Max Width**: `1280px` (max-w-7xl) for standard content, `1440px` for hero/bleeding visual elements.
- **Columns**: 12-column grid on desktop, 8-column on tablet, 4-column on mobile.
- **Section Spacing**: `120px` (py-24 or py-32) on desktop, `80px` (py-16) on tablet, `64px` (py-12) on mobile.
- **Component Spacing**: `32px` (gap-8) standard between grid items.
- **Page Margins**: `24px` on mobile, `48px` on tablet, `auto` (centered) on desktop.

## 5. Component System

### Navigation
- **Desktop**: Glassmorphic or solid white top bar. Logo left, links center, CTA right. No deep megamenus; simple hover dropdowns.
- **Mobile**: Minimal top bar. Hamburger menu opens a full-screen overlay with large touch targets.

### Buttons
- **Primary**: Solid Indigo (`#4F46E5`), white text, slightly rounded (`rounded-lg`), subtle shadow. Hover: slight translateY and increased shadow.
- **Secondary**: Transparent background, 1px solid Border Light (`#E2E8F0`), Text Body color. Hover: Surface Secondary background.
- **Text Link**: Indigo text, underline on hover with a smooth transition.

### Cards
- **Service Card**: Padding `32px`, subtle border (`border-slate-200`), white background. Icon + H3 + Body + Arrow Link. Hover: Border shifts to Indigo, subtle shadow (`shadow-lg`).
- **Case Study Card (Work)**: Image dominant. Image ratio 4:3 or 16:9. Text is placed below the image (Title, Industry tag, short description).
- **Product Card**: Distinctive dark mode styling (Surface Dark background) to separate from standard services. Neon cyan accents.

### Forms
- **Input/Textarea**: High contrast borders (`border-slate-300`), rounded-lg, 16px font size to prevent iOS zoom. Focus state: `ring-2 ring-indigo-500 border-indigo-500`.

## 6. Homepage Visual Structure (Rethought)
Moving away from standard generic blocks:
1. **Hero**: Editorial, asymmetric. Left side: Massive Display Typography + Kicker + Primary CTA. Right side: Abstract 3D composition or high-quality contextual app mockup. Dark background (Deep Space) to establish a premium feel immediately.
2. **Social Proof Strip**: Clean, monochromatic logo strip matching the background hue.
3. **Services (Grid vs List)**: A bento-box or asymmetrical grid layout rather than 4 identical cards, emphasizing Cling's strongest offerings (e.g., App Dev & ERPs get larger visual weight).
4. **Case Studies (Work)**: Large, high-impact imagery. Not a grid of 6, but 2-3 massively featured projects with outcome statistics.
5. **Products Section**: Horizontal scroll (even on desktop) or a dark-mode band breaking the page rhythm to showcase Cling's proprietary products.
6. **Footer**: Clean, multi-column layout, not overly dense.

## 7. Motion & Interaction
- **Philosophy**: Snappy, premium, un-intrusive.
- **Easing**: Custom cubic-bezier (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` - Framer Motion's default spring-like feel).
- **Page Entrance**: Subtle fade and slight translate-y (20px) on initial scroll.
- **Hover States**: Fast out, slow in. Subtle scale (1.02x) on cards.
- **Accessibility**: Wrap all motion in `prefers-reduced-motion: no-preference` media queries.

## 8. Image & Asset Strategy
- **Corner Radius**: `12px` (rounded-xl) for standard images, `16px` (rounded-2xl) for large feature images.
- **Treatment**: Minimal overlays. Clean, sharp photography or high-end 3D renders. 
- **Placeholders**: If an asset is missing, use a stylized, branded geometric pattern placeholder rather than generic Unsplash stock.

## 9. Accessibility
- **Contrast**: All text must pass WCAG AA (4.5:1 for normal text).
- **Focus States**: Universal `:focus-visible` styling (`outline-2 outline-offset-2 outline-indigo-500`) applied globally.
- **Touch**: Mobile buttons and nav links must be at least 44px in height.

## 10. Figma Alignment & Required Changes
*Note: Direct Figma editing is not available. The following documents the deviation from the legacy Figma design.*
- **Palette**: Discarded the legacy navy/orange in favor of Deep Space / Indigo / Cyan.
- **Typography**: Replaced standard generic sans with the dual `Plus Jakarta Sans` / `Inter` system for stronger personality.
- **Card Layouts**: Shifted from repetitive uniform grids to bento-box/asymmetric layouts for featured services and portfolio items to create editorial pacing.
- **Hero**: Moved from a standard center-aligned text block to a high-impact, asymmetric dark-mode hero.

## 11. Implementation Guidance for Phase 3
1. **Tailwind Config**: Extend the theme with the precise Hex codes (Deep Space, Electric Indigo) and fonts (`Plus Jakarta Sans`, `Inter`).
2. **CSS Variables**: Utilize CSS variables in `globals.css` for primary theme colors to allow easy dark-mode adaptation later if needed.
3. **Components**: Build isolated, reusable React components (`Button`, `Card`, `Section`, `Badge`) before assembling pages.
4. **Framer Motion**: Integrate `framer-motion` for the defined scroll-reveals and micro-interactions.
