# HAS NAA — Typographic System & Guidelines
**Philosophy:** Editorial High-Fashion Serifs &middot; Modern Minimalist Sans &middot; Authentic Arabic Calligraphic Grace  
**Languages:** English (LTR) & Arabic (RTL)  
**Version:** 1.0 (Production Release)

---

## 1. Typographic Vision & Art Direction

Typography at **HAS NAA** is treated as architectural sculpture. Every character, serif bracket, and hairline counter-space is carefully orchestrated to evoke the poise of Parisian haute couture and Milanese runway editorials, harmonized with the noble literary heritage of Egypt and Alexandria.

```
       Cormorant Garamond          Montserrat                Alexandria
   [Editorial Luxury Serif]   [Modern Geometric Sans]  [Contemporary Arabic Sans]
      Elegance in Detail        WOMEN'S FASHION           الأناقة في أدق التفاصيل
```

---

## 2. Selected Font Families

### 2.1 Primary English Display: *Cormorant Garamond*
Designed by Christian Thalmann, *Cormorant Garamond* is a magnificent traditional serif inspired by the 16th-century master Claude Garamont. Its razor-sharp terminals, delicate brackets, and extreme stroke contrast evoke luxury titles such as *Vogue*, *Harper's Bazaar*, and *L'Officiel*.

- **Role:** Main brand wordmark, editorial collection titles, hero section headlines, quotes, luxury product names.
- **Weights In Use:**
  - `Light (300)` — Delicate hero statements and oversized editorial banners.
  - `Regular (400)` — Standard collection titles, H1-H3 headers, packaging titles.
  - `Italic (400i)` — Brand slogan, editorial subtitles, poetic fashion annotations.
  - `Medium (500)` — Emphasis within luxury serif titles.
- **Web Font Source:** [Google Fonts — Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- **Fallback Stack:** `'Cormorant Garamond', 'Bodoni MT', 'Didot', 'Playfair Display', Georgia, serif;`

### 2.2 Secondary English Supporting: *Montserrat*
Designed by Julieta Ulanovsky, *Montserrat* is a clean, architectural geometric sans-serif inspired by early 20th-century urban signage. It provides the essential modern, functional counterbalance to Cormorant's classical romance.

- **Role:** Brand descriptor ("WOMEN'S FASHION"), navigation menus, body text, e-commerce filters, product specifications, button CTAs, cart & checkout inputs.
- **Weights In Use:**
  - `Light (300)` — Extended editorial body copy and photo credits.
  - `Regular (400)` — Primary e-commerce body text, product descriptions.
  - `Medium (500)` — Button labels, uppercase category kickers, metadata.
  - `SemiBold (600)` — Price tags, active navigation states, numeric indicators.
- **Web Font Source:** [Google Fonts — Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Fallback Stack:** `'Montserrat', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`

### 2.3 Primary Arabic Sans & UI: *Alexandria*
Designed by Mai Erksousi, *Alexandria* is an ultra-sophisticated contemporary Arabic geometric typeface. It matches the horizontal rhythm and optical proportions of modern Latin geometric typography, ensuring seamless bilingual balance.

- **Role:** Primary Arabic headlines, Arabic navigation menus, product descriptions, mobile app UI, e-commerce cart, checkout.
- **Weights In Use:**
  - `Light (300)` — Arabic editorial paragraphs.
  - `Regular (400)` — Primary Arabic body text, subheadings.
  - `Medium (500)` — Arabic category labels, button text.
  - `SemiBold (600)` — Arabic prices, active tabs, major headers.
- **Web Font Source:** [Google Fonts — Alexandria](https://fonts.google.com/specimen/Alexandria)
- **Fallback Stack:** `'Alexandria', 'IBM Plex Sans Arabic', 'Segoe UI', Tahoma, Arial, sans-serif;`

### 2.4 Classical Arabic Display Accent: *Amiri*
Designed by Khaled Hosny, *Amiri* is an exquisite Naskh-based revival of classic Cairo Bulaq Press typography. It brings authentic literary gravitas and historical romance to high-fashion Arabic communications.

- **Role:** Arabic brand slogan ("الأناقة في أدق التفاصيل"), heritage storytelling, cultural campaign titles, Eid / Ramadan haute-couture collections.
- **Weights In Use:**
  - `Regular (400)` / `Slanted (400i)` — Arabic brand slogan and editorial quotes.
- **Web Font Source:** [Google Fonts — Amiri](https://fonts.google.com/specimen/Amiri)
- **Fallback Stack:** `'Amiri', 'Traditional Arabic', serif;`

---

## 3. Typographic Hierarchy & Scale (Desktop & Mobile)

| Level / Token | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Weight | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | Cormorant Garamond | `72px / 4.5rem` | `44px / 2.75rem` | `1.10` | `+0.20em` | 400 | Title / Upper |
| **Display 2** | Cormorant Garamond | `56px / 3.5rem` | `36px / 2.25rem` | `1.15` | `+0.22em` | 400 | Title / Upper |
| **Heading 1 (H1)** | Cormorant Garamond | `42px / 2.625rem`| `30px / 1.875rem` | `1.20` | `+0.25em` | 400 | Title / Upper |
| **Heading 2 (H2)** | Cormorant Garamond | `32px / 2.0rem` | `24px / 1.5rem` | `1.25` | `+0.20em` | 400 | Title / Normal|
| **Heading 3 (H3)** | Cormorant Garamond | `24px / 1.5rem` | `20px / 1.25rem` | `1.30` | `+0.15em` | 500 | Title / Normal|
| **Heading 4 (H4)** | Montserrat | `18px / 1.125rem`| `16px / 1.0rem` | `1.35` | `+0.12em` | 500 | Title Case |
| **Subtitle / Slogan** | Cormorant Garamond | `16px / 1.0rem` | `14px / 0.875rem` | `1.45` | `+0.22em` | 400 Italic | Title Case |
| **Body Large** | Montserrat | `18px / 1.125rem`| `16px / 1.0rem` | `1.65` | `+0.02em` | 300 | Sentence |
| **Body Standard** | Montserrat | `15px / 0.9375rem`| `14px / 0.875rem`| `1.65` | `0em` | 400 | Sentence |
| **Body Small** | Montserrat | `13px / 0.8125rem`| `12px / 0.75rem` | `1.55` | `+0.02em` | 400 | Sentence |
| **Kicker / Overline**| Montserrat | `11px / 0.6875rem`| `10px / 0.625rem` | `1.20` | `+0.45em` | 500 | UPPERCASE |
| **Button CTA** | Montserrat | `12.5px / 0.78rem`| `12px / 0.75rem` | `1.0` | `+0.42em` | 500 | UPPERCASE |
| **Caption / Meta** | Montserrat | `11px / 0.6875rem`| `10px / 0.625rem` | `1.40` | `+0.08em` | 400 | Sentence |

---

## 4. Letter-Spacing (Tracking & Kerning) Rules

Quiet Luxury relies heavily on precise typographic whitespace:

1. **Brand Wordmark Tracking (`HAS NAA`):**
   - Letter-spacing must strictly be set to `+0.30em` to `+0.35em`.
   - The space between "HAS" and "NAA" is a dedicated non-breaking optical space equal to `0.85em`.
2. **Brand Descriptor Tracking (`WOMEN'S FASHION`):**
   - Letter-spacing is widely tracked at `+0.45em` to `+0.55em` in uppercase.
   - All uppercase navigation items and buttons must maintain minimum `+0.35em` tracking.
3. **Arabic Letter-Spacing (CRITICAL RULE):**
   - **Never apply wide letter-spacing to Arabic text.** Arabic is intrinsically a cursive script; applying character tracking causes the glyph connections (*wasl*) to fracture or break, destroying legibility and aesthetics.
   - Arabic tracking must remain between `0.0em` and `+0.04em`.
   - Instead of tracking, horizontal elegance in Arabic is achieved through proportional font sizing, natural kashida balance, and generous vertical line-height (`1.65x - 1.85x`).

---

## 5. Bilingual English & Arabic Pairing Architecture

HAS NAA is designed from the ground up for bilingual fluency in Egyptian and Arab fashion markets.

```
┌─────────────────────────────────────────────────────────────┐
│                      BILINGUAL HARMONY                      │
│                                                             │
│   PRIMARY BRAND SLOGAN (ENGLISH):                           │
│   "Elegance in Every Detail"                                │
│                                                             │
│   FORMAL ARABIC SLOGAN APPLICATION:                         │
│   "الأناقة في أدق التفاصيل"                                 │
│   (Positioned strictly underneath the stacked logo)         │
│                                                             │
│   PRICE & METADATA FORMATTING:                              │
│   3,450 EGP (LTR)  /  ٣,٤٥٠ ج.م (RTL)                       │
└─────────────────────────────────────────────────────────────┘
```

### 5.1 Primary Slogan & Arabic Layout Rule
- **Primary Slogan:** The English slogan *"Elegance in Every Detail"* is the master brand slogan and the primary expression across international marketing and e-commerce.
- **Arabic Translation:** The official Arabic translation is *"الأناقة في أدق التفاصيل"*.
- **Placement Directives:**
  - In formal Arabic applications, the Arabic slogan must be positioned **directly underneath the stacked logo lockup**.
  - **PROHIBITION:** Do **not** create an equal side-by-side bilingual slogan lockup. Side-by-side arrangements introduce visual clutter that compromises Quiet Luxury proportions.
  - In full Arabic (RTL) web pages, the Arabic slogan anchors the centered hero emblem or footer.

### 5.2 Optical Sizing & Baseline Alignment
- **Size Compensation:** Because Arabic characters generally occupy a different vertical proportion within their em-square, Arabic text in `Alexandria` should be sized at **95% to 100%** of `Montserrat` for perfect visual baseline equivalence.
- **Line-Height Compensation:** Arabic typography requires greater line height due to prominent diacritics and ascenders/descenders (*alif*, *laam*, *yaa*, *noon*). Always expand `line-height` by +0.15 to +0.25 in RTL context (e.g., standard body `1.65` in English becomes `1.80` in Arabic).

---

## 6. Implementation Code & CDN Imports

### 6.1 HTML `<head>` Integration
```html
<!-- Google Fonts Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- HAS NAA Master Brand Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### 6.2 CSS `@import` Declaration
```css
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
```

---

## 7. Typographic Do's and Don'ts

### Do:
- Use generous line spacing on all editorial paragraphs to let the text breathe.
- Set uppercase kickers, navigation links, and buttons with extended tracking (`letter-spacing: 0.4em`).
- Combine Cormorant Garamond for the emotional headline and Montserrat for functional specs.
- Respect Arabic script continuity and provide generous line height in RTL mode.

### Don't:
- Do not use decorative display serifs (Cormorant) for small UI body text or form inputs.
- Do not italicize Arabic text artificially (oblique slant distorting Arabic calligraphy is forbidden).
- Do not use center-alignment on paragraphs longer than 3 lines; keep body copy left-aligned in LTR, right-aligned in RTL.
- Do not condense, stretch, or artificially distort font aspect ratios.
- Do not create equal side-by-side bilingual slogan lockups. The Arabic slogan must always be positioned directly underneath the stacked logo.
- Do not invent detached sub-brand typography; all collections remain strictly unified under the master brand.
