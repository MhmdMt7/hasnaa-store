/**
 * HAS NAA | WOMEN'S FASHION
 * Product Details Controller
 * Dynamic Gallery, Color/Size Selector, Bilingual WhatsApp Inquiry Generator
 */

class ProductDetailsController {
  constructor() {
    this.product = null;
    this.selectedColor = null;
    this.selectedSize = null;
  }

  init() {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id');
    
    // Find product or default to first
    this.product = HASNAA_PRODUCTS.find(p => p.id === prodId) || HASNAA_PRODUCTS[0];
    if (!this.product) return;

    this.selectedColor = this.product.colors[0] || null;
    this.selectedSize = this.product.sizes[0] || null;

    this.render();
    this.bindEvents();

    window.addEventListener('hasnaa:langchange', () => {
      this.render();
    });
  }

  render() {
    if (!this.product) return;
    const lang = hasnaaI18n.getLang();
    const p = this.product;

    // 1. Breadcrumbs
    const catText = p.category === 'clothing' ? hasnaaI18n.t('nav.clothing') : hasnaaI18n.t('nav.accessories');
    const titleText = p.name[lang] || p.name.en;
    const breadcrumbEl = document.querySelector('.hn-breadcrumb');
    if (breadcrumbEl) {
      breadcrumbEl.innerHTML = `<a href="index.html">HAS NAA</a> / <a href="${p.category}.html">${catText}</a> / <span>${p.sku}</span>`;
    }

    // 2. Title & Price
    const titleEl = document.querySelector('.hn-product-title');
    if (titleEl) titleEl.textContent = titleText;

    const priceEl = document.querySelector('.hn-product-price');
    if (priceEl) priceEl.textContent = hasnaaI18n.formatPrice(p.price);

    const descEl = document.querySelector('.hn-product-desc');
    if (descEl) descEl.textContent = p.description[lang] || p.description.en;

    // 3. Gallery
    this.renderGallery(lang);

    // 4. Color Swatches
    this.renderColorSwatches(lang);

    // 5. Sizes
    this.renderSizes();

    // 6. Accordions
    this.renderAccordions(lang);

    // 7. Update WhatsApp CTA Link
    this.updateWhatsAppCTA(lang);

    // 8. Pairings / Related Products
    this.renderPairings(lang);
  }

  renderGallery(lang) {
    const mainImgContainer = document.querySelector('.hn-gallery-main');
    const thumbsContainer = document.querySelector('.hn-gallery-thumbs');
    if (!mainImgContainer || !thumbsContainer) return;

    const images = this.product.images;
    const titleText = this.product.name[lang] || this.product.name.en;

    // Main image
    mainImgContainer.innerHTML = `
      <img src="${images[0]}" alt="${titleText}" id="hn-main-image" />
    `;

    // Thumbnails
    thumbsContainer.innerHTML = images.map((img, idx) => `
      <div class="hn-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${img}" alt="${titleText} view ${idx + 1}" />
      </div>
    `).join('');

    // Thumbnail click
    thumbsContainer.querySelectorAll('.hn-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.hn-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const idx = parseInt(thumb.getAttribute('data-index'), 10);
        const mainImg = document.getElementById('hn-main-image');
        if (mainImg) {
          mainImg.style.opacity = '0.4';
          setTimeout(() => {
            mainImg.src = images[idx];
            mainImg.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  renderColorSwatches(lang) {
    const swatchesContainer = document.querySelector('.hn-color-swatches');
    const colorLabel = document.getElementById('hn-selected-color-name');
    if (!swatchesContainer) return;

    if (colorLabel && this.selectedColor) {
      colorLabel.textContent = this.selectedColor.name[lang] || this.selectedColor.name.en;
    }

    swatchesContainer.innerHTML = this.product.colors.map(c => `
      <button type="button" 
              class="hn-color-btn ${this.selectedColor && this.selectedColor.code === c.code ? 'active' : ''}" 
              data-code="${c.code}" 
              style="background-color: ${c.hex};" 
              title="${c.name[lang] || c.name.en}"
              aria-label="${c.name[lang] || c.name.en}">
      </button>
    `).join('');

    swatchesContainer.querySelectorAll('.hn-color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        this.selectedColor = this.product.colors.find(c => c.code === code) || this.product.colors[0];
        swatchesContainer.querySelectorAll('.hn-color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (colorLabel) {
          colorLabel.textContent = this.selectedColor.name[lang] || this.selectedColor.name.en;
        }
        this.updateWhatsAppCTA(lang);
      });
    });
  }

  renderSizes() {
    const sizesContainer = document.querySelector('.hn-size-pills');
    if (!sizesContainer) return;

    sizesContainer.innerHTML = this.product.sizes.map(size => `
      <button type="button" 
              class="hn-size-btn ${this.selectedSize === size ? 'active' : ''}" 
              data-size="${size}">
        ${size}
      </button>
    `).join('');

    sizesContainer.querySelectorAll('.hn-size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedSize = btn.getAttribute('data-size');
        sizesContainer.querySelectorAll('.hn-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.updateWhatsAppCTA(hasnaaI18n.getLang());
      });
    });
  }

  renderAccordions(lang) {
    const p = this.product;
    const fabricContent = document.getElementById('hn-acc-fabric-text');
    if (fabricContent) fabricContent.textContent = p.fabric[lang] || p.fabric.en;

    const tailoringContent = document.getElementById('hn-acc-tailoring-text');
    if (tailoringContent) tailoringContent.textContent = p.tailoring[lang] || p.tailoring.en;
  }

  updateWhatsAppCTA(lang) {
    const waLinkEl = document.querySelector('.hn-wa-inquiry-link');
    const waStickyEl = document.querySelector('.hn-wa-sticky-link');
    if (!waLinkEl && !waStickyEl) return;

    const colorName = this.selectedColor ? (this.selectedColor.name[lang] || this.selectedColor.name.en) : '';
    const sizeName = this.selectedSize || '';
    const url = hasnaaI18n.generateWhatsAppLink(this.product, colorName, sizeName);

    if (waLinkEl) waLinkEl.setAttribute('href', url);
    if (waStickyEl) waStickyEl.setAttribute('href', url);
  }

  renderPairings(lang) {
    const container = document.querySelector('.hn-pairings-grid');
    if (!container || !this.product.related) return;

    const relatedProds = this.product.related
      .map(id => HASNAA_PRODUCTS.find(p => p.id === id))
      .filter(Boolean);

    if (relatedProds.length === 0) {
      container.parentElement.style.display = 'none';
      return;
    }

    container.parentElement.style.display = 'block';
    container.innerHTML = relatedProds.map(prod => {
      const title = prod.name[lang] || prod.name.en;
      const price = hasnaaI18n.formatPrice(prod.price);
      return `
        <article class="hn-card">
          <a href="product.html?id=${prod.id}" class="hn-card-inner">
            <div class="hn-card-media">
              <img class="hn-card-img primary" src="${prod.images[0]}" alt="${title}" loading="lazy" />
            </div>
            <div class="hn-card-details">
              <h4 class="hn-card-title">${title}</h4>
              <span class="hn-card-price">${price}</span>
            </div>
          </a>
        </article>
      `;
    }).join('');
  }

  bindEvents() {
    // Accordion Toggle
    document.querySelectorAll('.hn-accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.hn-accordion');
        if (item) {
          item.classList.toggle('open');
        }
      });
    });

    // Size Guide Modal
    const modalBtn = document.querySelector('.hn-size-guide-trigger');
    const modal = document.getElementById('hn-size-guide-modal');
    const modalClose = document.querySelector('.hn-modal-close');

    if (modalBtn && modal) {
      modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });

      if (modalClose) {
        modalClose.addEventListener('click', () => {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.hn-product-salon')) {
    const controller = new ProductDetailsController();
    controller.init();
  }
});
