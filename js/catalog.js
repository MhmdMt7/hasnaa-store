/**
 * HAS NAA | WOMEN'S FASHION
 * Catalog Display, Filter, Sort & Density Engine
 */

class CatalogRenderer {
  constructor(category = 'clothing') {
    this.category = category; // 'clothing' | 'accessories' | 'all'
    this.currentSubcategory = 'all';
    this.currentSort = 'curated';
    this.container = document.querySelector('.hn-catalog-grid');
    this.countEl = document.querySelector('.hn-catalog-count');
  }

  init() {
    if (!this.container) return;
    this.render();
    this.bindEvents();

    window.addEventListener('hasnaa:langchange', () => {
      this.render();
    });
  }

  getFilteredProducts() {
    let list = HASNAA_PRODUCTS.filter(p => {
      if (this.category !== 'all' && p.category !== this.category) return false;
      if (this.currentSubcategory !== 'all' && p.subCategory !== this.currentSubcategory) return false;
      return true;
    });

    // Sorting
    switch (this.currentSort) {
      case 'priceLow':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'curated':
      default:
        // Featured pieces first
        list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return list;
  }

  render() {
    if (!this.container) return;
    const products = this.getFilteredProducts();
    const lang = hasnaaI18n.getLang();

    if (this.countEl) {
      this.countEl.textContent = hasnaaI18n.t('catalog.count', { count: products.length });
    }

    if (products.length === 0) {
      this.container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--hn-text-muted);">
        ${lang === 'ar' ? 'لا توجد قطع مطابقة لهذا الاختيار حالياً.' : 'No pieces matching this selection currently.'}
      </p>`;
      return;
    }

    this.container.innerHTML = products.map(prod => this.createCardHTML(prod, lang)).join('');
  }

  createCardHTML(prod, lang) {
    const title = prod.name[lang] || prod.name.en;
    const priceFormatted = hasnaaI18n.formatPrice(prod.price);
    const subcategoryText = hasnaaI18n.t(`filter.${this.camelCase(prod.subCategory)}`);
    const badgeHtml = prod.isNew 
      ? `<span class="hn-badge">${hasnaaI18n.t('product.badge.new')}</span>` 
      : '';

    const swatchesHtml = prod.colors.map(c => 
      `<span class="hn-swatch-dot" style="background-color: ${c.hex};" title="${c.name[lang] || c.name.en}"></span>`
    ).join('');

    const img1 = prod.images[0] || '';
    const img2 = prod.images[1] || prod.images[0] || '';

    return `
      <article class="hn-card">
        <a href="product.html?id=${prod.id}" class="hn-card-inner">
          <div class="hn-card-media">
            ${badgeHtml}
            <img class="hn-card-img primary" src="${img1}" alt="${title}" loading="lazy" />
            <img class="hn-card-img hover" src="${img2}" alt="${title} Detail" loading="lazy" />
          </div>
          <div class="hn-card-details">
            <span class="hn-card-category">${subcategoryText}</span>
            <h3 class="hn-card-title">${title}</h3>
            <span class="hn-card-price">${priceFormatted}</span>
            <div class="hn-card-swatches">
              ${swatchesHtml}
            </div>
          </div>
        </a>
      </article>
    `;
  }

  camelCase(str) {
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  }

  bindEvents() {
    // Subcategory Filter Tabs
    document.querySelectorAll('.hn-filter-tab').forEach(tab => {
      tab.addEventListener('click', e => {
        document.querySelectorAll('.hn-filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentSubcategory = tab.getAttribute('data-sub') || 'all';
        this.render();
      });
    });

    // Sort Dropdown
    const sortSelect = document.querySelector('.hn-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        this.currentSort = e.target.value;
        this.render();
      });
    }

    // Grid Density Toggle
    const densityBtn = document.querySelector('.hn-density-toggle');
    if (densityBtn && this.container) {
      densityBtn.addEventListener('click', () => {
        this.container.classList.toggle('editorial-view');
      });
    }
  }
}
