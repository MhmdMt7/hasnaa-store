# HAS NAA — Homepage UI/UX Design Specification
**Page:** Master Editorial Homepage (`/`)  
**Design Philosophy:** Haute-Couture Digital Salon &middot; Generous Negative Space &middot; Editorial Narrative  
**Target Viewports:** Desktop (1440px / 1920px), Tablet (768px - 1024px), Mobile (375px - 430px)  
**Version:** 1.0 (Detailed Layout & Wireframe Specification)

---

## 1. Homepage Sectional Architecture Overview

The homepage is composed of 11 meticulously balanced modules designed to guide the visitor through an immersive editorial narrative:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. MINIMAL LUXURY ANNOUNCEMENT TICKER (Global)                         │
├────────────────────────────────────────────────────────────────────────┤
│ 2. STICKY EDITORIAL NAVIGATION HEADER (Logo, Nav Links, Lang Switcher) │
├────────────────────────────────────────────────────────────────────────┤
│ 3. FULL-WIDTH EDITORIAL RUNWAY HERO (Hero Visual, Headline, Primary CTA)│
├────────────────────────────────────────────────────────────────────────┤
│ 4. CURATED CLOTHING CAPSULE SHOWCASE (Split Editorial Showcase)        │
├────────────────────────────────────────────────────────────────────────┤
│ 5. ARTISANAL ACCESSORIES SHOWCASE (Tactile Leather & Silk Feature)     │
├────────────────────────────────────────────────────────────────────────┤
│ 6. NEW ARRIVALS (Curated 4-Column Luxury Grid)                         │
├────────────────────────────────────────────────────────────────────────┤
│ 7. FEATURED SIGNATURE PRODUCTS (Asymmetric Editorial Highlight)        │
├────────────────────────────────────────────────────────────────────────┤
│ 8. BRAND STORY & ATELIER PROVENANCE (Text-Image Split Narrative)       │
├────────────────────────────────────────────────────────────────────────┤
│ 9. PRIVATE CLIENT SERVICES & CONCIERGE BANNER                          │
├────────────────────────────────────────────────────────────────────────┤
│ 10. EDITORIAL & INSTAGRAM VISUAL SALON (#HasnaaElegance)               │
├────────────────────────────────────────────────────────────────────────┤
│ 11. MASTER LUXURY FOOTER                                               │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Detailed Module Specifications

### Module 1: Minimal Luxury Announcement Ticker
- **Height:** 36px
- **Background:** Charcoal `#292522`
- **Typography:** Montserrat Medium, 11px / 0.6875rem, uppercase, `letter-spacing: 0.28em`, Ivory text `#F5F0E8`
- **Content:**
  - **EN:** *"COMPLIMENTARY ATELIER FITTING & PRIVATE CONSULTATION IN CAIRO & ALEXANDRIA — [BOOK APPOINTMENT]"*
  - **AR:** *"استشارات وتجارب قياس خاصة في الأتيليه بالقاهرة والإسكندرية — [احجزي موعدك]"*
- **Behavior:** Subtle slow fade transition every 7 seconds, dismissible via subtle close cross or static marquee.

---

### Module 2: Sticky Editorial Navigation Header
- **Height:** 80px (transitions seamlessly to 64px on scroll via `backdrop-filter: blur(14px)`)
- **Background:** Primary Ivory `#F5F0E8` with 94% opacity; bottom hairline border `rgba(166, 139, 112, 0.22)`
- **Structure (Dual-Language Alignment):**
  - **Left Section (LTR) / Right Section (RTL):**
    - Navigation Links: `CLOTHING` (`أزياء`), `ACCESSORIES` (`إكسسوارات`), `ABOUT ATELIER` (`عن الأتيليه`), `CONTACT` (`تواصل`)
    - Typography: Montserrat Medium 12px, uppercase, `letter-spacing: 0.25em`, Charcoal `#292522`
    - Hover Effect: Animated 1px Champagne hairline underline expanding from center.
  - **Center Section:**
    - Master Brand Wordmark: `HAS NAA` in *Cormorant Garamond* (28px height) with the subtle descriptor `WOMEN'S FASHION` (7px height, tracked `0.45em`).
    - Clicking returns to top / home.
  - **Right Section (LTR) / Left Section (RTL):**
    - `CONCIERGE INQUIRY` (WhatsApp icon + subtle text)
    - Language Switcher: Pill button displaying `EN | عربي` (Active language indicated with subtle Champagne background and Charcoal text).

```
[ LTR Header Layout ]
┌────────────────────────────────────────────────────────────────────────┐
│ CLOTHING  ACCESSORIES  ABOUT      [ HAS NAA ]     CONCIERGE   EN | عربي│
│                                 WOMEN'S FASHION                        │
└────────────────────────────────────────────────────────────────────────┘

[ RTL Header Layout ]
┌────────────────────────────────────────────────────────────────────────┐
│ عربي | EN   الاستفسار والمساعدة      [ حسناء ]       أزياء  إكسسوارات   │
│                                 أزياء نسائية                           │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Module 3: Full-Width Editorial Runway Hero
- **Height:** 100vh (Viewport height minus navigation) or minimum 780px.
- **Visual Asset:** Full-bleed cinematic photography or slow-motion ambient video featuring golden Mediterranean sunlight on flowing Egyptian raw silk and tailoring.
- **Overlay:** Soft warm scrim gradient (`linear-gradient(180deg, rgba(41,37,34,0.15) 0%, rgba(41,37,34,0.45) 100%)`).
- **Content Positioning:** Centered bottom-aligned with generous breathing room.
- **Copy:**
  - **Kicker / Overline:** Montserrat Medium 11px, tracked `0.45em`, Champagne Beige `#DCC8AC`, uppercase.
    - EN: *"AUTUMN / WINTER 2026 COUTURE"*
    - AR: *"مجموعة خريف وشتاء ٢٠٢٦"*
  - **Main Headline:** Cormorant Garamond Light 400, Display 1 (`clamp(2.75rem, 5vw, 4.5rem)`), Ivory `#F5F0E8`, tracked `0.15em`.
    - EN: *"Elegance in Every Detail"*
    - AR: *"الأناقة في أدق التفاصيل"*
  - **Sub-headline:** Montserrat Light 300, 16px, line-height 1.6, Ivory `#FAF7F2` with 90% opacity.
    - EN: *"A celebration of timeless Egyptian craftsmanship and modern feminine poise."*
    - AR: *"احتفاء بالبراعة اليدوية المصرية الخالدة والرقي الأنثوي المعاصر."*
  - **Action CTAs:** Dual action buttons.
    - Primary CTA: Solid Charcoal button with Ivory text: `EXPLORE CLOTHING` (`استكشفي الأزياء`).
    - Secondary CTA: Ghost button with Ivory hairline border: `DISCOVER ACCESSORIES` (`استكشفي الإكسسوارات`).
- **Micro-Detail:** Centered bottom animated scroll-down indicator with subtle Champagne vertical hairline.

---

### Module 4: Curated Clothing Collection Showcase
- **Layout:** Asymmetric Split Showcase (60% featured portrait image + 40% editorial text card with secondary product thumbnail).
- **Background:** Primary Ivory `#F5F0E8`.
- **Content Elements:**
  - Editorial Title: *"The Ready-to-Wear Atelier"* / *"تشكيلة الأزياء الجاهزة"*
  - Description: Deep exploration of structured silhouettes, breathable Egyptian cotton dresses, tailored linen blazers, and pure silk blouses.
  - Visuals: High-resolution full-body lookbook photography.
  - Interactive Action: `VIEW ALL CLOTHING (42 PIECES)` button with directional arrow icon.

---

### Module 5: Artisanal Accessories Showcase
- **Layout:** Horizontal 3-Card Carousel or Panoramic Trio featuring full-bleed macro details.
- **Background:** Subtle Off-White `#FAF7F2` with hairline dividers.
- **Categories Featured:**
  1. *Artisanal Leather Handbags* (Full-grain Florentine & Egyptian leather with matte brass hardware).
  2. *Hand-Rolled Silk Foulards* (Custom geometric and calligraphic motifs in Champagne & Mocha).
  3. *Sculptural Belts & Accents* (Minimalist waist cinchers and statement hardware).
- **Card Interaction:** Smooth 1.03x image hover zoom, caption reveals category title, piece count, and `INQUIRE` link.

---

### Module 6: New Arrivals (Curated 4-Column Showcase)
- **Header:**
  - Kicker: *"FRESH FROM THE ATELIER"* / *"أحدث إبداعات الأتيليه"*
  - Title: *"New Seasonal Arrivals"* / *"وصل حديثاً"*
  - Filter Pills: `All` | `Dresses` | `Co-Ords` | `Handbags` | `Scarves`
- **Grid Structure:** 4 Columns (Desktop) / 2 Columns (Tablet) / 1 Column with Peek Carousel (Mobile).
- **Cards Displayed:** 4 signature pieces with portrait `3:4` aspect ratio:
  1. *The Alabaster Silk Crepe Gown* — 4,850 EGP
  2. *The Zamalek Linen Tailored Coat* — 3,650 EGP
  3. *The Monogram Saddle Shoulder Bag* — 2,950 EGP
  4. *The Dunes Cashmere-Silk Scarf* — 1,450 EGP
- **Card Functionality:**
  - High-res portrait photo with subtle secondary lifestyle photo cross-fade on hover.
  - Badge: "NEW ARRIVAL" in Warm Taupe.
  - Title, Category, and Price in EGP (`ج.م`).
  - Tapping card opens the dedicated **Product Details** experience.

---

### Module 7: Featured Products (Asymmetric Editorial Highlight)
- **Concept:** Focus on the flagship signature piece of the season.
- **Layout:** Full-width container with a 50/50 editorial split:
  - **Left (LTR):** Immersive lifestyle image taken in the serene sand dunes of the North Coast or historic Heliopolis palace architecture.
  - **Right (LTR):** Editorial narrative card detailing:
    - Piece Name: *"The Empress Egyptian Cotton Kimono Gown"*
    - Textile Origin: Giza 45 Extra-Long Staple Cotton, hand-spun and botanical-dyed.
    - Tailoring Time: 34 hours of hand-guided seam finishing.
    - Pricing: 5,400 EGP.
    - Actions: `VIEW PRODUCT DETAILS` & `WHATSAPP STYLIST INQUIRY`.

---

### Module 8: Brand Story & Atelier Provenance
- **Background:** Deep Charcoal `#292522` (Creating an intentional dramatic contrast break in the homepage narrative).
- **Typography:** Primary Ivory `#F5F0E8` and Champagne Beige `#DCC8AC`.
- **Layout:** Centered editorial narrative framed by the **HN Monogram Seal**.
- **Copy:**
  - Kicker: *"THE HOUSE OF HAS NAA"* / *"دار حسناء للأزياء"*
  - Headline: *"Born from the Poetic Heritage of Egypt, Tailored for the Modern Woman"*
  - Body Text:
    - *“HAS NAA was established with a singular devotion: to restore the quiet majesty of bespoke tailoring, sublime Egyptian cotton, and pure silk to the modern woman's wardrobe. We believe that true luxury does not demand attention—it commands it through effortless poise, impeccable drape, and understated grace.”*
  - Atelier Locations: Cairo Atelier (Zamalek) & Alexandria Design Studio.
  - CTA: `READ OUR FULL ATELIER STORY` (`اقرئي قصة الدار`).

---

### Module 9: Private Client Services & Concierge Banner
- **Background:** Warm Taupe Tint `#FAF7F2` with delicate Champagne border.
- **Service Pillars (3-Column Grid):**
  1. **Bespoke Fitting & Tailoring:** Custom garment sizing and silhouette adjustments available by appointment in Cairo.
  2. **Direct WhatsApp Concierge:** Instant access to our dedicated luxury styling team for fabric advice, size guidance, and private orders.
  3. **White-Glove Delivery:** Delivered in signature matte blind-debossed gift boxes with unbleached silk tissue paper across Egypt and the Gulf.

---

### Module 10: Instagram & Editorial Visual Salon
- **Header:**
  - Headline: *"The Has Naa Lifestyle"* / *"أسلوب حياة حسناء"*
  - Handle: `@HasnaaFashion` &middot; `#HasnaaElegance` &middot; `#الأناقة_في_أدق_التفاصيل`
- **Visual Gallery:** Seamless 6-image horizontal grid (editorial runway photography, textile close-ups, packaging unboxing, model lifestyle in Cairo and Alexandria).
- **Interaction:** Hovering an image displays an overlay with the HN monogram and link to view on Instagram.

---

### Module 11: Master Luxury Footer
- **Background:** Deep Charcoal `#292522`
- **Typography:** Primary Ivory `#F5F0E8` (Headings) and Warm Taupe `#A68B70` (Links)
- **Columns (5-Column Layout):**
  - **Col 1 (Brand Column):** Stacked HN Monogram + `HAS NAA` wordmark + *"Elegance in Every Detail"* + Arabic calligraphy inscription.
  - **Col 2 (Collections):** Ready-to-Wear, Evening Wear, Modest Luxury, Leather Bags, Silk Foulards, New Arrivals.
  - **Col 3 (Client Services):** Private Appointments, WhatsApp Concierge, Fabric & Garment Care, Size & Fit Guide, Delivery Protocols.
  - **Col 4 (The House):** About HAS NAA, Egyptian Heritage, Atelier Craftsmanship, Sustainability, Careers.
  - **Col 5 (The Private Journal):** Minimalist newsletter input field with hairline border: *"Receive private invitations to new capsule releases"*.
- **Sub-Footer Bar:**
  - Copyright &copy; 2026 HAS NAA. All Rights Reserved.
  - Terms of Service &middot; Privacy Policy.
  - Language Switcher: `English (US)` | `العربية (مصر)`.
