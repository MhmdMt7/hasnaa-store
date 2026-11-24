# HAS NAA — Reusable Component Library & Interaction Specifications
**Scope:** Design System Component Specifications & Micro-Interactions  
**Token Dependency:** `brand/design-tokens.css`  
**Framework Agnostic:** HTML5, Modern CSS (Custom Properties), Accessible ARIA  
**Version:** 1.0 (Component Architecture)

---

## 1. Global Component Overview

All components strictly inherit variables from `brand/design-tokens.css` to ensure mathematical consistency, seamless theme inversion, and flawless bilingual responsiveness.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COMPONENT ROSTER MATRIX                         │
├──────────────────────┬────────────────────────┬────────────────────────┤
│ 1. Announcement Bar  │ 2. Navigation Header   │ 3. Language Switcher   │
│ 4. Product Card      │ 5. Product Gallery     │ 6. Filter & Sort Bar   │
│ 7. Buttons & CTAs    │ 8. WhatsApp Inquiry    │ 9. Appointment Modal   │
│ 10. Split Hero       │ 11. Instagram Grid     │ 12. Master Footer      │
└──────────────────────┴────────────────────────┴────────────────────────┘
```

---

## 2. Component Specifications

### 2.1 Component: Announcement Bar (`hn-announcement`)
- **HTML Architecture:** `<aside class="hn-announcement" role="region" aria-label="Announcement">`
- **Visual Design:**
  - Background: `var(--hn-color-charcoal)` (#292522)
  - Color: `var(--hn-color-ivory)` (#F5F0E8)
  - Height: `36px`
  - Font: `var(--hn-font-sans)`, `11px`, `letter-spacing: 0.28em`, uppercase, weight 500
- **Interaction & Behavior:**
  - Fades seamlessly between 2 announcements every 7000ms using `opacity: 0 -> 1` and `transform: translateY(4px) -> translateY(0)`.
  - Accessible: Pauses on `:hover` and `:focus-visible`.

---

### 2.2 Component: Navigation Header (`hn-header`)
- **HTML Architecture:** `<header class="hn-header" role="banner">`
- **Visual Design:**
  - Background: `var(--hn-nav-bg)` (rgba(245, 240, 232, 0.94)) with `backdrop-filter: blur(14px)`
  - Border-bottom: `var(--hn-border-hairline)` (1px solid rgba(166, 139, 112, 0.22))
  - Height: `var(--hn-nav-height)` (80px default -> 64px on scroll)
  - Transition: `height 320ms var(--hn-ease-luxury), background 320ms ease`
- **Layout Zones:**
  - **Left (LTR) / Right (RTL):** Navigation links list (`<nav class="hn-nav-links">`).
    - Typography: Montserrat Medium 12px, `letter-spacing: 0.25em`, uppercase.
    - Hover State: Animated bottom hairline with width `0% -> 100%` centered, `180ms ease`.
  - **Center:** Brand wordmark `<a class="hn-brand-link">` embedding `logo-primary.svg` (height 32px).
  - **Right (LTR) / Left (RTL):** Language switcher pill + Concierge inquiry link.
- **Mobile Hamburger Toggle:**
  - Icon: Minimalist 2-line hairline hamburger (width 22px, height 1.2px, gap 6px, Charcoal).
  - Transition: On tap, morphs into clean 45-degree hairline cross.

---

### 2.3 Component: Bilingual Language Switcher (`hn-lang-switcher`)
- **HTML Architecture:**
  ```html
  <div class="hn-lang-switcher" role="group" aria-label="Language Selector">
    <button class="hn-lang-btn active" data-lang="en" aria-pressed="true">EN</button>
    <span class="hn-lang-divider">|</span>
    <button class="hn-lang-btn" data-lang="ar" aria-pressed="false">عربي</button>
  </div>
  ```
- **Visual Design:**
  - Container: Borderless inline pill with subtle `2px` radius.
  - Active Button: Charcoal text `#292522`, font-weight 600, with a subtle Champagne dot below or soft highlight.
  - Inactive Button: Warm Taupe text `#A68B70`, font-weight 400. Hover transitions to Charcoal.
- **Interaction Logic:**
  - Tapping changes `document.documentElement.lang` (`en` <-> `ar`) and `dir` (`ltr` <-> `rtl`).
  - Font family seamlessly switches from *Cormorant/Montserrat* to *Alexandria/Amiri*.
  - Stores preference in `localStorage('hn_preferred_lang')`.

---

### 2.4 Component: Product Card (`hn-card`)
- **HTML Architecture:**
  ```html
  <article class="hn-card" data-category="clothing">
    <a href="/product/the-alabaster-silk-gown" class="hn-card-inner">
      <div class="hn-card-media">
        <span class="hn-badge">NEW ARRIVAL</span>
        <img class="hn-card-img primary" src="alabaster-1.jpg" alt="The Alabaster Silk Crepe Gown" />
        <img class="hn-card-img hover" src="alabaster-2.jpg" alt="Alabaster Silk Detail" />
      </div>
      <div class="hn-card-details">
        <span class="hn-card-category">READY-TO-WEAR &middot; 100% RAW SILK</span>
        <h3 class="hn-card-title">The Alabaster Silk Crepe Gown</h3>
        <span class="hn-card-price">4,850 EGP</span>
        <div class="hn-card-swatches">
          <span class="hn-swatch" style="--swatch-color: #F5F0E8;" title="Ivory"></span>
          <span class="hn-swatch" style="--swatch-color: #6B5140;" title="Mocha"></span>
          <span class="hn-swatch" style="--swatch-color: #DCC8AC;" title="Champagne"></span>
        </div>
      </div>
    </a>
  </article>
  ```
- **Styling Tokens Applied:**
  - Aspect Ratio: `3 / 4`
  - Container Background: `var(--hn-card-bg)` (#FAF7F2)
  - Border: `var(--hn-border-hairline)`
  - Transition: `transform 540ms var(--hn-ease-luxury), box-shadow 540ms ease`
  - Hover Effect: `hn-card-img.primary` fades opacity from 1 to 0; `hn-card-img.hover` scales to 1.03x.

---

### 2.5 Component: Filter & Sort Bar (`hn-filter-bar`)
- **Components:**
  - **Filter Category Tabs:** Horizontal pill bar with active indicator.
  - **Dropdown Trigger Buttons:** `Size (All)`, `Color (All)`, `Fabric (All)` with delicate chevron vectors.
  - **Sort Trigger Button:** `Sort: Curated Lookbook ▾`.
  - **Grid Density Toggle:** Two minimalist SVG icons allowing switch between 2-column editorial view and 4-column compact view.
- **Drawer State:** On mobile viewports, tapping "Filters" opens a smooth full-height side drawer from the right (LTR) or left (RTL).

---

### 2.6 Component: WhatsApp Inquiry Action (`hn-btn-whatsapp`)
- **HTML Architecture:**
  ```html
  <a href="https://wa.me/20100XXXXXXX?text=..." class="hn-btn hn-btn-whatsapp" target="_blank" rel="noopener">
    <svg class="hn-icon-wa" viewBox="0 0 24 24"><!-- SVG WhatsApp icon --></svg>
    <span>INQUIRE VIA WHATSAPP</span>
  </a>
  ```
- **Visual Design:**
  - Height: `52px`
  - Background: `var(--hn-color-charcoal)` (#292522)
  - Text: `var(--hn-color-ivory)` (#F5F0E8), Montserrat Medium, `13px`, tracked `0.42em`
  - Icon: Champagne Beige `#DCC8AC`, 18px width, placed with 12px margin.
  - Hover: Background changes to Mocha Brown `#6B5140`, icon scales subtly by 1.1x.

---

### 2.7 Component: Product Gallery (`hn-gallery`)
- **Desktop Behavior:**
  - Two-column asymmetric presentation. The gallery column occupies 58% width and stacks images vertically with 16px gaps.
  - As the user scrolls, the right-hand product suite remains pinned via `position: sticky; top: 104px;`.
- **Mobile Behavior:**
  - Swipes into an edge-to-edge touch carousel with a delicate hairline Champagne pagination progress bar below the imagery.
- **Magnification:**
  - On mouseover, high-resolution 2400px source image is sampled dynamically within an interactive circular lens loupe.

---

### 2.8 Component: Appointment Booking Modal (`hn-modal-appointment`)
- **Architecture:** Accessible `<dialog class="hn-modal">` with ARIA focus trap.
- **Backdrop:** `rgba(41, 37, 34, 0.65)` with `backdrop-filter: blur(8px)`.
- **Card Container:** Primary Ivory background, sharp 2px border radius, 1px Champagne border.
- **Header:** Features the compact HN monogram at the top, followed by *"Private Atelier Fitting & Consultation"*.
- **Inputs:** Floating labels with bottom hairline border, transitioning to Champagne gold when populated.
