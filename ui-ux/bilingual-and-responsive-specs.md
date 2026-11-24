# HAS NAA — Bilingual & Responsive Architecture Specifications
**Focus:** English (LTR) & Arabic (RTL) Layout Adaptation & Multi-Device Breakpoint System  
**Framework Standards:** CSS Logical Properties (`margin-inline`, `padding-inline`), CSS Clamp Fluid Typography  
**Target Devices:** Mobile (375px–430px), Tablet (768px–1024px), Desktop (1440px–1920px)  
**Version:** 1.0 (Engineering & Experience Specification)

---

## 1. Bilingual Engineering Architecture (EN / AR)

HAS NAA is engineered as an intrinsically bilingual experience. The transition between English and Arabic is not a superficial translation overlay, but a complete structural and typographic transformation.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BILINGUAL PARADIGM SHIFT                        │
├──────────────────────────────────┬─────────────────────────────────────┤
│ English Configuration (LTR)      │ Arabic Configuration (RTL)          │
├──────────────────────────────────┼─────────────────────────────────────┤
│ `dir="ltr"` & `lang="en"`        │ `dir="rtl"` & `lang="ar"`           │
│ Display: Cormorant Garamond      │ Display: Alexandria / Amiri         │
│ Body & UI: Montserrat            │ Body & UI: Alexandria               │
│ Standard tracking (up to +0.45em)│ Restrained tracking (max +0.05em)   │
│ Line-height: 1.65                │ Line-height: 1.80 (Expanded)        │
│ Navigation flows Left -> Right   │ Navigation flows Right -> Left      │
│ Currency format: `4,850 EGP`     │ Currency format: `٤,٨٥٠ ج.م`        │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

## 2. Arabic RTL Structural Alignment Rules

To guarantee visual balance and cultural authenticity in the Egyptian and Arab markets, the following rules govern the RTL layout:

### 2.1 CSS Logical Properties Adoption
All spatial rules must use CSS logical properties instead of directional hardcodes:
- `margin-left` / `margin-right` &rarr; `margin-inline-start` / `margin-inline-end`
- `padding-left` / `padding-right` &rarr; `padding-inline-start` / `padding-inline-end`
- `text-align: left` &rarr; `text-align: start` (automatically flips in RTL)
- `border-left` &rarr; `border-inline-start`
- `left: 0` &rarr; `inset-inline-start: 0`

### 2.2 Navigation & Header Mirroring
- **In English (LTR):** Navigation links sit on the left; Brand Wordmark is centered; Language switcher and Concierge inquiry sit on the right.
- **In Arabic (RTL):** Navigation links (`أزياء`, `إكسسوارات`, `عن الأتيليه`) sit on the right; Brand Wordmark remains centered; Language switcher (`عربي | EN`) and Concierge inquiry sit on the left.

### 2.3 Typographic Restraint for Arabic
> [!IMPORTANT]
> **Cursive Preservation Rule:**  
> Under no circumstance should CSS `letter-spacing: 0.45em` be applied to Arabic text. Arabic characters connect via calligraphic ligatures (*wasl*). Artificially tracking Arabic creates broken, disfigured letterforms.
> In Arabic mode:
> - Display tracking is clamped to `0.02em` to `0.04em`.
> - Line height is increased to `1.8x` to prevent diacritics (*harakat*) from colliding with uppercase ascenders (*alif*, *laam*).
> - Font weight is adjusted: *Alexandria Medium (500)* visually matches *Montserrat Regular (400)* in stroke weight.

---

## 3. Responsive Breakpoint Matrix

The layout responds fluidly across five standardized responsive tiers:

| Breakpoint Tier | Viewport Width | Device Archetypes | Layout Architecture |
| :--- | :--- | :--- | :--- |
| **Mobile Small (`xs`)** | `375px – 389px` | iPhone SE, Galaxy A-series | 1-Col Grid, 100% full-width cards, edge peek carousel |
| **Mobile Standard (`sm`)** | `390px – 430px` | iPhone 14/15/16 Pro Max, S24 | 1-Col hero, 2-Col compact catalog grid, sticky inquiry bar |
| **Tablet Portrait (`md`)** | `768px – 834px` | iPad 10.9, iPad Mini | 2-Col catalog grid, collapsible navigation drawer |
| **Tablet Landscape (`lg`)**| `1024px – 1280px`| iPad Pro, MacBook Air 13" | 3-Col catalog grid, full horizontal desktop header |
| **Desktop Master (`xl`)** | `1440px – 1920px`| iMac 24", Studio Display | 4-Col catalog grid (or 2-Col editorial), asymmetric gallery |

---

## 4. Mobile Experience Deep-Dive (Special Attention)

In the Egyptian luxury fashion landscape, **over 78% of client engagements occur via mobile devices** (primarily iOS Safari through Instagram referrals and WhatsApp links). The mobile experience is engineered with bespoke luxury ergonomics:

```
┌──────────────────────────────────────┐
│ [≡ Menu]    [ HAS NAA ]    [عربي | WA]│  <-- 60px Slim Header
├──────────────────────────────────────┤
│                                      │
│                                      │
│         RUNWAY EDITORIAL HERO        │  <-- 85vh Immersive Portrait
│                                      │
│       "Elegance in Every Detail"     │
│        [ EXPLORE THE ATELIER ]       │
│                                      │
├──────────────────────────────────────┤
│  CURATED PIECES                      │
│                                      │
│  ┌───────────────┐ ┌───────────────┐ │
│  │ [Image 3:4]   │ │ [Image 3:4]   │ │  <-- 2-Col Fluid Touch Grid
│  │ Alabaster Gown│ │ Linen Coat    │ │
│  │ 4,850 EGP     │ │ 3,650 EGP     │ │
│  └───────────────┘ └───────────────┘ │
├──────────────────────────────────────┤
│ [WHATSAPP CONCIERGE: INQUIRE (52px)] │  <-- Sticky Bottom Action Bar
└──────────────────────────────────────┘
```

### 4.1 Mobile-Specific Ergonomics & Touch Controls
1. **Minimum Touch Target:** All interactive buttons, size pills, and navigation icons maintain a minimum bounding box of **48 x 48px** to guarantee effortless touch precision.
2. **Thumb-Zone Navigation:** Primary actions (such as `INQUIRE VIA WHATSAPP` on the product page) are fixed to a sticky bottom bar, positioned directly within the natural thumb arc for one-handed operation.
3. **Edge-to-Edge Touch Carousels:** Product image galleries on mobile transform into fluid horizontal swipe carousels with native touch acceleration (`-webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory;`).
4. **Zero Horizontal Layout Shift (CLS = 0):** All images and containers have pre-defined aspect-ratio boxes (`aspect-ratio: 3 / 4;`) to eliminate jarring reflows while browsing on cellular data.

---

## 5. Mobile Navigation Drawer Architecture

When the user taps the 2-line minimalist hamburger icon on mobile:

```
┌───────────────────────────────────────────┐
│ [✕ CLOSE]                     [عربي | EN] │
├───────────────────────────────────────────┤
│                                           │
│   01. CLOTHING                            │
│       • Ready-to-Wear                     │
│       • Evening Gowns                     │
│       • Resort & Linen                    │
│                                           │
│   02. ACCESSORIES                         │
│       • Leather Handbags                  │
│       • Silk Foulards                     │
│       • Fine Accents                      │
│                                           │
│   03. THE ATELIER & ABOUT                 │
│                                           │
│   04. CONTACT & CONCIERGE                 │
│                                           │
│   ─────────────────────────────────────   │
│   [BOOK PRIVATE ATELIER APPOINTMENT]      │
│   [CHAT DIRECTLY ON WHATSAPP]             │
│                                           │
│   Zamalek Flagship: +20 (2) 2736-XXXX     │
│   Fouad St, Alexandria: +20 (3) 484-XXXX  │
│                                           │
│   HAS NAA &middot; Elegance in Every Detail│
└───────────────────────────────────────────┘
```

- **Animation:** Full-screen overlay sliding smoothly from the left (LTR) or right (RTL) over `400ms var(--hn-ease-luxury)`.
- **Background:** Primary Ivory `#F5F0E8` with 98% opacity.
- **Typography:** Links typeset in *Cormorant Garamond* (24px) with subtle numeric prefix (`01.`, `02.`) in *Montserrat* (11px).
