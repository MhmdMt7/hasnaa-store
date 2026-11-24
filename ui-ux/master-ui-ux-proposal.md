# HAS NAA | WOMEN'S FASHION — Master Website UI/UX Design Proposal
**Document Type:** Complete Digital Experience Proposal & Wireframe Blueprint  
**Positioning:** Luxury Fashion Brand Showcase (Editorial Digital Salon — Non-Ecommerce)  
**Target Market:** Modern Egyptian Women (Ages 18–45) in Cairo, Alexandria & Beyond  
**Languages:** Bilingual English (LTR) & Arabic (RTL)  
**Design Philosophy:** Quiet Luxury &middot; Timeless Femininity &middot; Modern Simplicity  
**Version:** 1.0 (Master Proposal for Client Review & Approval)

---

## 1. Executive Summary & Design Mission

Following the successful creation and approval of the **HAS NAA** brand identity, this document establishes the complete UI/UX digital design proposal for the brand's official web presence.

### 1.1 Fundamental Premise: Editorial Showcase vs. Ecommerce Store
> [!IMPORTANT]
> **Core Architectural Directive:**  
> This digital platform is designed strictly as a **High-Fashion Showcase & Digital Salon**, **NOT** an e-commerce transactional store.
> - **Prohibited Elements:** No shopping cart, checkout, payment gateways, promotional popups, stock countdowns, or automated order processing.
> - **Approved Focus:** Immersive editorial lookbooks, textile craftsmanship storytelling, high-touch personal concierge advisory, and **direct WhatsApp inquiries** with personalized client styling support.

---

## 2. Master Sitemap & Information Architecture

The website is structured around six core pages engineered for effortless, serene navigation:

```
HAS NAA Digital Ecosystem
│
├── Global Navigation & Ticker
│   ├── Announcement Bar: Worldwide Online Inquiries & Courier Delivery
│   └── Sticky Header: Navigation Links, Wordmark, Concierge, Language Switcher (EN | عربي)
│
├── Page 1: HOMEPAGE (/)
│   ├── Full-Width Editorial Runway Hero
│   ├── Curated Ready-to-Wear Capsule Showcase
│   ├── Artisanal Accessories Showcase (Leather & Silk)
│   ├── New Arrivals (Curated 4-Column Showcase)
│   ├── Featured Signature Piece (Asymmetric Highlight)
│   ├── Brand Story & Atelier Provenance (Charcoal Contrast Break)
│   ├── Private Client Services & Concierge Banner
│   ├── Instagram Visual Salon (#HasnaaElegance)
│   └── Master Luxury Footer
│
├── Page 2: CLOTHING SHOWCASE (/clothing)
│   ├── Category Header & Fabric Philosophy
│   ├── Subcategory Filter Tabs (Ready-to-Wear, Evening Gowns, Modest Luxury, Resort & Linen)
│   ├── Lookbook Sorting & Grid Density Toggle (2-Col Editorial vs 4-Col Catalog)
│   ├── 3:4 Portrait Product Showcase Cards
│   └── Online Styling Guidance Banner
│
├── Page 3: ACCESSORIES SHOWCASE (/accessories)
│   ├── Leather & Silk Artisanal Header
│   ├── Subcategory Filter Tabs (Leather Handbags, Silk Scarves, Belts, Fine Accents)
│   ├── Accessories Showcase Grid
│   └── Provenance & Material Craftsmanship Feature
│
├── Page 4: PRODUCT DETAILS (/product/:slug)
│   ├── Dual-Column Asymmetric Salon Layout
│   ├── 4-to-6 Shot Editorial Gallery with Texture Zoom Loupe
│   ├── Product Metadata, Title & Price in EGP (ج.م)
│   ├── Tactile Fabric Color Swatches & Size Selector (with Size Guide Modal)
│   ├── Primary Action: "Inquire via WhatsApp" (Bilingual dynamic message with Name, SKU, Color, Size, Price)
│   ├── Craftsmanship Accordions (Fabric Origin, Tailoring, Care, Packaging)
│   └── "Complete the Look" Curated Pairings
│
├── Page 5: ABOUT HAS NAA (/about)
│   ├── The Meaning of HAS NAA (حسناء — Feminine Grace & Poise)
│   ├── Egyptian Heritage & Mediterranean Alexandria Muses
│   ├── The Atelier, Master Pattern-makers & French Seams
│   ├── Textile Purity: Giza 45 Egyptian Cotton, Mulberry Silk, Pure Linen
│   └── The Quiet Luxury Manifesto (Anti-Fast Fashion)
│
└── Page 6: CONTACT & ONLINE CONCIERGE (/contact)
    ├── Direct VIP WhatsApp Concierge
    ├── Online Client Inquiry & Message Form
    ├── Concierge Support Hours (Daily 10:00 AM – 10:00 PM EET)
    ├── Client Advisory Email & Official Social Channels
    └── Frequently Asked Client Questions (FAQ Accordion)
```

---

## 3. Brand Identity & Design Token Harmonization

The UI design proposal directly inherits all approved brand variables from `brand/design-tokens.css`:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      UI COLOR SYSTEM IN HARMONY                        │
├────────────────────────────────────────────────────────────────────────┤
│ • Primary Canvas (60%):  Primary Ivory (#F5F0E8) / Off-White (#FAF7F2) │
│ • Structure & Copy (30%):Charcoal (#292522) — 14.3:1 WCAG AAA Contrast│
│ • Luxury Accents (10%):  Champagne Beige (#DCC8AC) & Warm Taupe #A68B70│
│ • Editorial Depth:       Mocha Brown (#6B5140) for descriptors & hover │
│ • Nocturne Mode:         Deep Obsidian Charcoal (#1E1B19)              │
└────────────────────────────────────────────────────────────────────────┘
```

- **Editorial Typography Pairing:**
  - Headlines: *Cormorant Garamond* (Light 300, Regular 400, Italic 400i)
  - UI, Meta & Buttons: *Montserrat* (Medium 500, tracked `0.42em`, uppercase)
  - Arabic Typography: *Alexandria* (Modern geometric sans) + *Amiri* (Literary accents)
- **Architectural Radii & Shadows:**
  - Sharp 0px to subtle 2px corners; no bubbly consumer card rounding.
  - Diffuse ambient warm shadows (`rgba(41, 37, 34, 0.05)`), zero heavy black drops.

---

## 4. Key Page Wireframes & Experience Blueprints

### 4.1 Homepage Wireframe (`/`)
```
┌────────────────────────────────────────────────────────────────────────┐
│ [TOP BAR]  Private Atelier Appointments — Cairo & Alexandria           │
├────────────────────────────────────────────────────────────────────────┤
│ CLOTHING   ACCESSORIES   ABOUT       [ HAS NAA ]     CONCIERGE   EN|عربي│
│                                    WOMEN'S FASHION                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                       RUNWAY EDITORIAL HERO                            │
│               Cinematic Sunlit Silk / North Coast Dunes                │
│                                                                        │
│                      "Elegance in Every Detail"                        │
│                A celebration of timeless Egyptian poise                │
│                                                                        │
│                 [ EXPLORE CLOTHING ]  [ DISCOVER ACCESSORIES ]         │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ THE READY-TO-WEAR ATELIER                                              │
│ [ 60% Featured Model Lookbook ]    [ 40% Editorial Text & Key Piece ]  │
│ Fluid silk crepe, tailored linen   The Alabaster Gown (4,850 EGP)      │
├────────────────────────────────────────────────────────────────────────┤
│ ARTISANAL ACCESSORIES (Trio Panorama)                                  │
│ [ Leather Handbags ]     [ Silk Foulards ]     [ Sculptural Accents ]  │
├────────────────────────────────────────────────────────────────────────┤
│ NEW SEASONAL ARRIVALS                                                  │
│ [ Card 1: 3:4 ]   [ Card 2: 3:4 ]   [ Card 3: 3:4 ]   [ Card 4: 3:4 ]  │
├────────────────────────────────────────────────────────────────────────┤
│ BRAND PROVENANCE & THE HOUSE OF HAS NAA (Deep Charcoal Canvas #292522) │
│ [ HN Seal ]  "Born from the Poetic Heritage of Egypt, Tailored for..." │
├────────────────────────────────────────────────────────────────────────┤
│ PRIVATE CLIENT SERVICES (Atelier Fitting &bull; WhatsApp &bull; White-Glove) │
├────────────────────────────────────────────────────────────────────────┤
│ INSTAGRAM VISUAL SALON (@HasnaaFashion &bull; #HasnaaElegance)         │
│ [ Photo 1 ]  [ Photo 2 ]  [ Photo 3 ]  [ Photo 4 ]  [ Photo 5 ]         │
├────────────────────────────────────────────────────────────────────────┤
│ [MASTER FOOTER]  Wordmark, Collections, Client Services, Newsletter    │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.2 Product Details Wireframe (`/product/:slug`)
```
┌────────────────────────────────────────────────────────────────────────┐
│ HEADER (Sticky Minimalist)                                             │
├───────────────────────────────────┬────────────────────────────────────┤
│                                   │ BREADCRUMB: CLOTHING / EVENING     │
│                                   │                                    │
│   LARGE PRODUCT GALLERY           │ The Alabaster Silk Crepe Gown      │
│                                   │ 4,850 EGP (Includes tailoring)     │
│   [Shot 1: Full Front Silhouette] │                                    │
│   [Shot 2: Drape & Profile Motion]│ COLOR: Mocha Brown                 │
│   [Shot 3: Macro Texture Loupe]   │ [● Ivory] [● Mocha] [● Champagne]  │
│   [Shot 4: Back Closure Detail]   │                                    │
│                                   │ SELECT SIZE: [ Size Guide ]        │
│                                   │ [36]  [38]  [40]  [42]  [Custom]   │
│                                   │                                    │
│                                   │ ┌────────────────────────────────┐ │
│                                   │ │ [WA] INQUIRE VIA WHATSAPP      │ │
│                                   │ └────────────────────────────────┘ │
│                                   │ ┌────────────────────────────────┐ │
│                                   │ │  BOOK PRIVATE ATELIER FITTING  │ │
│                                   │ └────────────────────────────────┘ │
│                                   │                                    │
│                                   │ ▾ Fabric: 100% Mulberry Silk Crepe │
│                                   │ ▾ Tailoring: Hand-Finished French  │
│                                   │ ▾ Service: Complimentary Fitting   │
├───────────────────────────────────┴────────────────────────────────────┤
│ COMPLETE THE LOOK: Curated Pairings (Leather Bag + Silk Scarf + Belt)  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Bilingual & RTL Architecture

1. **Native RTL Mirroring:** When switched to Arabic, the layout flips fluidly via CSS logical properties (`margin-inline`, `padding-inline`, `dir="rtl"`).
2. **Cursive Protection:** Strict prohibition of excessive tracking in Arabic ensures calligraphic ligatures remain intact.
3. **Arabic Typography Integration:**
   - Display & UI: *Alexandria* (Geometric modern luxury Arabic)
   - Slogan & Editorial Accent: *Amiri* (Classical Naskh heritage)
4. **Arabic Slogan Layout Compliance:**
   - In accordance with approved brand decisions, the Arabic slogan (*الأناقة في أدق التفاصيل*) is typeset **directly underneath the stacked logo**, with strictly no side-by-side bilingual lockups.

---

## 6. Mobile Experience Strategy

Given that over **78% of Egyptian luxury fashion discovery occurs on mobile smartphones**:
- **Ergonomic Touch Targets:** Minimum 48 x 48px interactive surfaces.
- **Sticky Inquiry Bar:** Direct WhatsApp inquiry button pinned to the bottom viewport on all product detail pages for instant single-thumb interaction.
- **Touch Gestures:** Native touch deceleration and scroll-snap on multi-angle galleries.
- **Performance:** Pre-compressed WebP/AVIF imagery with explicit aspect-ratio containers (`3:4`) to guarantee zero Cumulative Layout Shift (CLS = 0).

---

## 7. Complete Documentation Directory Structure

All detailed specifications and wireframe files have been authored and organized in the workspace:

```
f:\HasnaaStore\ui-ux\
├── master-ui-ux-proposal.md             <-- This Master Synthesis Document
├── sitemap-and-user-journeys.md         <-- Full Sitemap, Personas & User Flows
├── homepage-design.md                   <-- 11 Homepage Modules & Micro-Copy
├── catalog-and-product-details-design.md<-- Lookbook Grids, Filters & Product Suite
├── about-and-contact-design.md          <-- Atelier Storytelling & Concierge Forms
├── component-specifications.md          <-- 12 UI Components & Micro-Interactions
└── bilingual-and-responsive-specs.md    <-- RTL Adaptation & Breakpoint Rules
```

---

## 8. Summary of Deliverables & Approval Request

The UI/UX architecture for **HAS NAA | WOMEN'S FASHION** is fully detailed, visually cohesive with the approved Quiet Luxury identity, and strictly respects the non-ecommerce showcase boundary.

We invite your review and approval of this design proposal before moving forward to the subsequent digital realization phase.
