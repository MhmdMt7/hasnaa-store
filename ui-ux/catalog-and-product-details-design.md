# HAS NAA — Catalog & Product Details UI/UX Specifications
**Pages:** Clothing Showcase (`/clothing`), Accessories Showcase (`/accessories`), Product Details (`/product/:slug`)  
**Design Philosophy:** Haute-Couture Lookbook &middot; Tactile Clarity &middot; Personalized Concierge Conversion  
**Currency:** Egyptian Pound (EGP / ج.م)  
**Version:** 1.0 (Detailed Layout & Component Specification)

---

## 1. Product Catalog Architecture (Clothing & Accessories)

Both the **Clothing** and **Accessories** catalog pages are designed as luxury lookbooks rather than dense commercial commodity grids.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. CATEGORY EDITORIAL HERO (Title, Poetic Intro, Lookbook Hero Visual) │
├────────────────────────────────────────────────────────────────────────┤
│ 2. REFINED FILTERING & SORTING TOOLBAR                                 │
│    [Category Tabs] [Size / Color / Fabric] [Sort By] [Grid Toggle]    │
├────────────────────────────────────────────────────────────────────────┤
│ 3. PRODUCT SHOWCASE GRID                                               │
│    Desktop: 3-Col or 4-Col Portrait (3:4 Ratio) / Mobile: 2-Col / 1-Col│
├────────────────────────────────────────────────────────────────────────┤
│ 4. EDITORIAL INTERLUDE CARD (Atelier Note, Material Spotlight)         │
├────────────────────────────────────────────────────────────────────────┤
│ 5. SECONDARY PRODUCT SHOWCASE SECTION                                  │
├────────────────────────────────────────────────────────────────────────┤
│ 6. BESPOKE ATELIER CONSULTATION BANNER                                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Reusable Product Card Specification

The **Product Card** is the atomic foundation of the showcase experience.

```
┌──────────────────────────────────────┐
│  [NEW ARRIVAL]           [❤ WISHLIST]│
│                                      │
│                                      │
│                                      │
│           PRODUCT IMAGE              │
│        (Portrait 3:4 Ratio)          │
│     Hover: Cross-fade to Angle 2     │
│                                      │
│                                      │
│                                      │
├──────────────────────────────────────┤
│  READY-TO-WEAR &middot; 100% RAW SILK│  <-- Kicker (Montserrat 10px uppercase)
│  The Alabaster Silk Crepe Gown       │  <-- Title (Cormorant Garamond 18px)
│  4,850 EGP                           │  <-- Price (Montserrat SemiBold 14px)
│  ● ● ● (Available Colors)            │  <-- Micro Swatches
└──────────────────────────────────────┘
```

### 2.1 Anatomical Elements
1. **Aspect Ratio:** Strictly `3 : 4` portrait (e.g., 600px width &times; 800px height base).
2. **Surface Container:** Subtle Off-White canvas (`#FAF7F2`) with hairline `0.75px` border (`rgba(220, 200, 172, 0.45)`) and `2px` subtle border radius.
3. **Imagery:**
   - **Primary Image:** Model in natural daylight, full-length silhouette against architectural sandstone or minimalist interior.
   - **Hover Image:** Smooth cross-fade to detail crop (drape, fabric texture, or dynamic motion shot) accompanied by a subtle `1.025x` scale zoom.
4. **Status Badges:**
   - Position: Top-left corner (LTR) / Top-right corner (RTL), 12px margin.
   - Types:
     - `NEW ARRIVAL` (`وصل حديثاً`) — Warm Taupe fill `#A68B70`, Ivory text, 10px uppercase, tracked `0.3em`.
     - `ATELIER EXCLUSIVE` (`حصري للأتيليه`) — Champagne fill `#DCC8AC`, Charcoal text.
     - `LIMITED CAPSULE` (`إصدار محدود`) — Charcoal fill `#292522`, Ivory text.
5. **Product Metadata Block:**
   - **Category Kicker:** Montserrat Medium 10.5px, uppercase, tracked `0.35em`, Warm Taupe `#A68B70`.
   - **Product Title:** Cormorant Garamond Regular 18px (Desktop) / 16px (Mobile), Charcoal `#292522`.
   - **Price Tag:** Montserrat SemiBold 14px, Charcoal `#292522`.
     - English format: `4,850 EGP`
     - Arabic format: `٤,٨٥٠ ج.م`
   - **Available Colors Preview:** Subtle 8px circular swatches below the price indicating available fabric shades (e.g., Ivory, Mocha, Champagne).
6. **Card Navigation:**
   - The entire card area is clickable, navigating seamlessly to `/product/:slug`.

---

## 3. Filtering & Sorting Interface

```
┌────────────────────────────────────────────────────────────────────────┐
│ ALL (42)  |  EVENING GOWNS (12)  |  READY-TO-WEAR (18)  |  RESORT (12) │
├────────────────────────────────────────────────────────────────────────┤
│ [Filters: Size ▾]  [Color ▾]  [Fabric ▾]      [Sort: Curated ▾] [⊞ ⊟] │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Subcategory Quick Tabs
- Displayed horizontally above the grid with generous horizontal scrolling on mobile.
- Active tab features a solid Charcoal pill with Ivory text; inactive tabs feature transparent background with hairline border.

### 3.2 Filter Drawers & Dropdowns
- **Size Filter:** Multi-select pills: `36 (FR)` | `38 (FR)` | `40 (FR)` | `42 (FR)` | `44 (FR)` | `Custom Fit`.
- **Color Filter:** Visual swatches displaying real fabric tones: `Primary Ivory`, `Champagne Beige`, `Warm Taupe`, `Mocha Brown`, `Obsidian Charcoal`.
- **Fabric Composition:** `Giza 45 Egyptian Cotton`, `Mulberry Silk Crepe`, `Egyptian Linen`, `Cashmere Blend`.

### 3.3 Sorting Options
1. `Curated Lookbook Order` (Default editorial recommendation)
2. `Newest Arrivals` (`الأحدث أولاً`)
3. `Price: Low to High` (`السعر: من الأقل للأعلى`)
4. `Price: High to Low` (`السعر: من الأعلى للأقل`)

### 3.4 Grid Density Toggle
- Allows the client to toggle between:
  - **Editorial Mode (2 Columns on Desktop):** Massive portrait imagery with full runway feel.
  - **Catalog Mode (4 Columns on Desktop):** High-efficiency browsing for complete wardrobe view.

---

## 4. Product Details Experience (`/product/:slug`)

The Product Details page is an intimate bespoke salon presentation designed to provide complete tactile confidence and direct concierge conversion.

```
┌───────────────────────────────────┬───────────────────────────────────┐
│                                   │ BREADCRUMBS: HOME / CLOTHING / ...│
│                                   │                                   │
│                                   │ READY-TO-WEAR &middot; REF: HN-DR-2601   │
│       LARGE PRODUCT GALLERY       │                                   │
│                                   │ The Alabaster Silk Crepe Gown     │
│   [Main High-Resolution View]     │ 4,850 EGP                         │
│                                   │                                   │
│   (Hover to Zoom Weave Texture)   │ ───────────────────────────────── │
│                                   │ COLOR: Mocha Brown (3 Available)  │
│                                   │ [● Ivory] [● Mocha] [● Champagne] │
│                                   │                                   │
│   [Thumb 1] [Thumb 2] [Thumb 3]   │ SELECT SIZE: [Size Guide Modal]   │
│                                   │ [36]  [38]  [40]  [42]  [Custom]  │
│                                   │                                   │
│                                   │ ┌───────────────────────────────┐ │
│                                   │ │ [WhatsApp] INQUIRE VIA ATELIER│ │
│                                   │ └───────────────────────────────┘ │
│                                   │ ┌───────────────────────────────┐ │
│                                   │ │ BOOK PRIVATE BOUTIQUE FITTING │ │
│                                   │ └───────────────────────────────┘ │
│                                   │                                   │
│                                   │ ▾ Fabric Provenance & Composition │
│                                   │ ▾ Atelier Tailoring & Care Notes  │
│                                   │ ▾ Complimentary Custom Alterations│
└───────────────────────────────────┴───────────────────────────────────┘
```

### 4.1 Layout Architecture (Dual-Column Asymmetric)
- **Left Column (LTR) / Right Column (RTL) — Gallery (58% Width):**
  - Sticky-scroll gallery displaying 4 to 6 editorial photographs:
    1. Full-length front silhouette
    2. Dynamic profile / movement drape
    3. Macro textile & seam close-up (showing stitch density and hand-finished hems)
    4. Back silhouette and closure details
    5. Lifestyle lookbook shot in ambient setting
  - Magnifier Loupe: Desktop cursor transforms into a delicate Champagne circular loupe providing 2.5x high-res inspection of the silk/cotton weave.
- **Right Column (LTR) / Left Column (RTL) — Product Suite (42% Width):**
  - Sticky container that remains in comfortable viewport view as the user scrolls through the gallery.

### 4.2 Detailed Product Suite Elements

#### 1. Breadcrumb & SKU Metadata
- Montserrat 11px uppercase, tracked `0.25em`, Warm Taupe `#A68B70`.
- Example: `HOME / CLOTHING / EVENING GOWNS / REF: HN-DR-2601`

#### 2. Headline & Pricing
- Title: *The Alabaster Silk Crepe Gown* (Cormorant Garamond Regular, 34px).
- Price: `4,850 EGP` (Montserrat SemiBold, 20px, Charcoal `#292522`).
- Price Note: Montserrat Regular 12px: *"Includes complimentary personal tailoring and signature gift packaging."*

#### 3. Color Swatch Selector
- Label: `COLOR: Mocha Brown` (with color name updated dynamically on selection).
- Swatches: 32px diameter circles wrapped in a delicate 1px Champagne border on active selection, featuring actual fabric photographic swatches:
  - *Ivory Alabaster* (`#F5F0E8`)
  - *Mocha Roast* (`#6B5140`)
  - *Champagne Sand* (`#DCC8AC`)

#### 4. Size Selector & Interactive Size Guide Modal
- Sizes: `36 (FR)` | `38 (FR)` | `40 (FR)` | `42 (FR)` | `44 (FR)` | `Custom Fitting`.
- Size Guide Link: `[ VIEW SIZE & MEASUREMENT GUIDE ]` (Triggers modal with bust, waist, hip, and length charts in centimeters and inches for Egyptian and European standard sizing).
- Custom Fitting Note: Clicking `Custom Fitting` highlights our complimentary atelier measurement service in Cairo and Alexandria.

#### 5. Conversion Actions (Showcase & Inquiry Focused)
> [!IMPORTANT]
> The site intentionally avoids transactional shopping carts and impersonal checkout flows. Client conversion is driven by personalized concierge interaction:

- **Primary Action: `INQUIRE VIA WHATSAPP` (Direct Stylist Line)**
  - Height: 52px
  - Background: Charcoal `#292522` (transitions to Mocha `#6B5140` on hover)
  - Typography: Montserrat Medium 13px, uppercase, tracked `0.4em`, Ivory `#F5F0E8` text.
  - Icon: Minimalist WhatsApp vector icon in Champagne Beige `#DCC8AC`.
  - Automation: Clicking opens WhatsApp Web or the WhatsApp Mobile App with an encoded pre-filled inquiry:  
    *“Hello HAS NAA Atelier, I am interested in inquiring about The Alabaster Silk Crepe Gown (Ref: HN-DR-2601) in Mocha Brown, Size 38. Could you please share piece availability and fitting options?”*
- **Secondary Action: `BOOK PRIVATE ATELIER FITTING`**
  - Height: 50px
  - Background: Transparent with 1px Charcoal border.
  - Typography: Montserrat Medium 12.5px, uppercase, tracked `0.35em`, Charcoal `#292522`.
  - Action: Opens the direct Showroom Appointment scheduling drawer.

#### 6. Craftsmanship & Transparency Accordions
- **Accordion 1: Fabric Provenance & Composition**
  - Details: 100% Pure Mulberry Silk Crepe (40 momme), ethically woven and dyed with natural organic pigments. Breathable, hypoallergenic, with natural luminous sheen.
- **Accordion 2: Atelier Tailoring & Fit Notes**
  - Details: Tailored with French seams, blind-stitched hem, and hidden mother-of-pearl rear buttons. Designed for a fluid, relaxed A-line silhouette with graceful movement.
- **Accordion 3: Complimentary Alterations & Showroom Service**
  - Details: Every garment includes one complimentary custom hem and waist fitting at our Zamalek Flagship Atelier or via home concierge service in Greater Cairo.
- **Accordion 4: White-Glove Packaging & Care Instructions**
  - Details: Delivered in our signature matte blind-debossed luxury keepsake box, unbleached tissue wrapping, and cedar garment bag. Dry clean only.

---

## 5. "Complete the Look" / Curated Pairings Module

Directly below the primary product suite, an editorial section features 3 curated accessories designed by the HAS NAA creative director to complement the garment:

- **Complement 1:** *The Monogram Saddle Leather Bag in Mocha* (2,950 EGP)
- **Complement 2:** *The Spun Gold Silk Foulard* (1,450 EGP)
- **Complement 3:** *The Sculptural Brass Waist Belt* (1,850 EGP)

Tapping any pairing updates the WhatsApp inquiry option to an aggregated look inquiry:  
*“I would like to inquire about the complete Alabaster Gown look including the Monogram Saddle Bag...”*
