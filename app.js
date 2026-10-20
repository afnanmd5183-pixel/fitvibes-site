(function () {
  'use strict';

  const FALLBACK = {
    site: {
      brand: 'Fitvi.bes', tagline: 'Find your fit. Smarter finds. Better style.', announcement: 'THE STYLE FILE · GOOD FINDS, NO FUSS',
      hero_kicker: 'THE GOOD-TASTE DEPARTMENT', hero_title: 'Good taste.\nNo gatekeeping.',
      hero_description: "Outfits, watches and little details that make the whole look click. Curated for your everyday, not someone else's rulebook.",
      hero_button_text: 'Explore the edit', hero_button_url: '/products.html', hero_note: 'A little classic. A little unexpected. Very you.',
      hero_image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85',
      hero_detail_image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=650&q=85',
      products_kicker: 'THE GOOD FINDS EDIT', products_title: 'The good finds.',
      products_description: 'Outfits, everyday details and accessories worth a second look. Scroll your mood, find your thing.'
    },
    sections: { sections: [
      { name: 'Outfits', key: 'outfits', title: 'Everyday fits, main-character energy.', description: 'Easy outfit ideas and wearable pieces for your everyday rotation.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', link_url: '/products.html?section=outfits', button_text: 'Explore outfits', order: 1, enabled: true },
      { name: 'Watches', key: 'watches', title: 'The detail that does the most.', description: 'Classic dials, clean straps and little finishing touches.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', link_url: '/products.html?section=watches', button_text: 'Explore watches', order: 2, enabled: true },
      { name: 'Accessories', key: 'accessories', title: 'Small things. Serious impact.', description: 'Bags, belts and everyday add-ons that finish the fit.', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85', link_url: '/products.html?section=accessories', button_text: 'Explore accessories', order: 3, enabled: true }
    ] },
    products: { products: [
      { id: 'everyday-white-tee', title: 'The everyday white tee', section_key: 'outfits', tagline: 'The reliable one in every rotation.', description: 'A clean, easy base for layered looks, denim days and low-effort fits.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', price_note: 'Check retailer for current price', retailer: 'Meesho', market: 'India', affiliate_url: '', button_text: 'View the find', badge: 'THE BASE LAYER', featured: true, active: true, order: 1 },
      { id: 'classic-navy-overshirt', title: 'The navy overshirt edit', section_key: 'outfits', tagline: 'One layer, instantly more put-together.', description: 'A smart-casual layer to wear open over a tee or buttoned up with straight-leg denim.', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85', price_note: 'Check retailer for current price', retailer: 'Meesho', market: 'India', affiliate_url: '', button_text: 'View the find', badge: 'EASY LAYERING', featured: true, active: true, order: 2 },
      { id: 'minimal-dial-watch', title: 'Minimal dial, maximum wear', section_key: 'watches', tagline: 'Clean lines. Easy everyday energy.', description: 'A minimalist watch look that can work with tees, shirts and smart-casual outfits.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', price_note: 'Check retailer for current price', retailer: 'Amazon India', market: 'India', affiliate_url: '', button_text: 'View the find', badge: 'THE CLASSIC', featured: true, active: true, order: 3 },
      { id: 'everyday-watch-detail', title: 'The everyday watch detail', section_key: 'watches', tagline: 'Low-key, but never an afterthought.', description: 'Use a watch to bring a little structure to an otherwise relaxed outfit.', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85', price_note: 'Check retailer for current price', retailer: 'Amazon India', market: 'India', affiliate_url: '', button_text: 'View the find', badge: 'THE DETAIL', featured: false, active: true, order: 4 },
      { id: 'everyday-crossbody', title: 'The everyday carry-all', section_key: 'accessories', tagline: 'Practical can still look polished.', description: 'An accessory inspiration pick for carrying the daily essentials without overcomplicating the look.', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85', price_note: 'Check retailer for current price', retailer: 'Amazon India', market: 'India', affiliate_url: '', button_text: 'View the find', badge: 'THE EVERYDAY EXTRA', featured: false, active: true, order: 5 },
      { id: 'clean-sneaker-inspo', title: 'The clean sneaker formula', section_key: 'accessories', tagline: 'That finishing touch that goes with almost anything.', description: 'A style idea for pairing simple sneakers with denim, relaxed trousers and casual fits.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', price_note: 'Check retailer for current price', retailer: 'Amazon India', market: 'India', affiliate_url: '', button_text: 'View the find', badge: 'THE FINISH', featured: false, active: true, order: 6 }
    ] },
    about: {
      kicker: 'NOT A RULEBOOK. A REFERENCE POINT.', title: 'Style should feel like you.', intro: 'Fitvi.bes is a little corner of the internet for discovering outfits, watches and accessories that make getting dressed feel easier—and more personal.', button_text: 'Explore the edit', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1100&q=85',
      story_title: 'Good style is a feeling, not a price tag.', story: 'We collect inspiration and product finds for people who want to look put-together without making style feel complicated. Some days call for a clean tee and sneakers; other days, one good watch does the talking. The point is to find what feels right for you.',
      principles: [{number:'01',icon:'◒',title:'Wearable over viral',description:'We favour pieces you can imagine working in real life, not just in a trend cycle.'},{number:'02',icon:'✳',title:'Details matter',description:'Fit, shape, colour and small design choices can make a piece more versatile.'},{number:'03',icon:'↗',title:'Clear, not overhyped',description:'We share what we can verify and avoid pretending every product is perfect.'}],
      disclosure: 'Some links on Fitvi.bes may be affiliate links. If you choose to buy through one, we may earn a commission at no extra cost to you. We aim to make recommendations helpful and clearly disclose affiliate relationships. Product prices and availability can change, so check the retailer\'s page before buying.',
      amazon_disclosure: 'As an Amazon Associate I earn from qualifying purchases.'
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const text = (value) => String(value == null ? '' : value);
  const escapeHTML = (value) => text(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

  async function loadJSON(path, fallback) {
    try {
      const response = await fetch(path, { cache: 'no-cache' });
      if (!response.ok) throw new Error('Content file unavailable');
      const json = await response.json();
      return json && typeof json === 'object' ? json : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function safeImage(value) {
    const url = text(value).trim();
    if (url.startsWith('/images/uploads/')) return url;
    try {
      const parsed = new URL(url, window.location.origin);
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return parsed.href;
    } catch (_) { /* use placeholder below */ }
    return '';
  }

  function safeLink(value, allowRelative = true) {
    const url = text(value).trim();
    if (!url || url === '#') return '';
    if (allowRelative && (url.startsWith('/') || url.startsWith('#') || url.startsWith('./'))) return url;
    try {
      const parsed = new URL(url);
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return parsed.href;
    } catch (_) { /* invalid URL */ }
    return '';
  }

  function setTextFields(data) {
    $$('[data-site]').forEach((node) => {
      const key = node.getAttribute('data-site');
      if (!(key in data)) return;
      const value = text(data[key]);
      if (key === 'hero_title') {
        const lines = value.split('\n');
        node.innerHTML = `${escapeHTML(lines.shift() || '')}${lines.length ? `<br><em>${escapeHTML(lines.join(' '))}</em>` : ''}`;
      } else if (key === 'products_title') {
        const words = value.split(/\s+/).filter(Boolean);
        if (words.length > 1) node.innerHTML = `${escapeHTML(words.slice(0, -1).join(' '))} <em>${escapeHTML(words[words.length - 1])}</em>`;
        else node.textContent = value;
      } else {
        node.textContent = value;
      }
    });
    $$('[data-site-link]').forEach((node) => {
      const key = node.getAttribute('data-site-link');
      const href = safeLink(data[key]);
      if (href) node.setAttribute('href', href);
    });
    $$('[data-site-image]').forEach((node) => {
      const key = node.getAttribute('data-site-image');
      const src = safeImage(data[key]);
      if (src) node.setAttribute('src', src);
    });
  }

  function setAboutFields(data) {
    $$('[data-about]').forEach((node) => {
      const key = node.getAttribute('data-about');
      if (!(key in data)) return;
      const value = text(data[key]);
      if (key === 'title') {
        const match = value.match(/^(.*?)(\s+)([^\s]+[.!?]?)$/);
        node.innerHTML = match ? `${escapeHTML(match[1])} <em>${escapeHTML(match[3])}</em>` : escapeHTML(value);
      } else {
        node.textContent = value;
      }
    });
    $$('[data-about-image]').forEach((node) => {
      const key = node.getAttribute('data-about-image');
      const src = safeImage(data[key]);
      if (src) node.setAttribute('src', src);
    });
  }

  function addImageFallbacks(root = document) {
    $$('img', root).forEach((img) => {
      img.addEventListener('error', () => {
        img.classList.add('image-not-loaded');
        img.removeAttribute('src');
        img.setAttribute('alt', img.getAttribute('alt') || 'Image unavailable');
        if (img.parentElement) img.parentElement.classList.add('image-placeholder');
      }, { once: true });
    });
  }

  function getSectionName(sections, key) {
    const section = (sections || []).find((item) => text(item.key).toLowerCase() === text(key).toLowerCase());
    return section ? text(section.name) : text(key || 'More finds');
  }

  function renderHomeSections(sectionData) {
    const root = $('#home-sections');
    if (!root) return;
    const sections = (sectionData.sections || []).filter((item) => item.enabled !== false).sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
    if (!sections.length) {
      root.innerHTML = '<div class="empty-section-message">Your next favourite collection will appear here.</div>';
      return;
    }
    root.innerHTML = sections.map((section, index) => {
      const name = escapeHTML(section.name || 'Collection');
      const title = escapeHTML(section.title || section.name || 'Explore the edit');
      const description = escapeHTML(section.description || 'Discover more from this collection.');
      const image = safeImage(section.image);
      const url = safeLink(section.link_url) || `/products.html?section=${encodeURIComponent(text(section.key))}`;
      const className = index === 0 ? 'collection-card collection-card-tall' : (index === 2 ? 'collection-card collection-card-wide' : 'collection-card');
      const label = String(index + 1).padStart(2, '0');
      return `<article class="${className}"><div class="collection-card-image${image ? '' : ' image-placeholder'}">${image ? `<img src="${escapeHTML(image)}" alt="${name} inspiration" loading="lazy">` : ''}</div><div class="collection-card-content"><span class="collection-index">${label} / THE EDIT</span><h3>${name}</h3><p>${description}</p><a href="${escapeHTML(url)}" class="round-link" aria-label="Explore ${name}">↗</a></div></article>`;
    }).join('');
    addImageFallbacks(root);
  }

  function renderFeaturedProducts(productsData, sectionsData) {
    const root = $('#featured-products');
    if (!root) return;
    const products = (productsData.products || []).filter((product) => product.active !== false && product.featured === true).sort((a, b) => Number(a.order || 999) - Number(b.order || 999)).slice(0, 2);
    const fallback = (productsData.products || []).filter((product) => product.active !== false).sort((a, b) => Number(a.order || 999) - Number(b.order || 999)).slice(0, 2);
    const items = products.length ? products : fallback;
    if (!items.length) {
      root.innerHTML = '<p class="small-note">New favourites are on the way.</p>';
      return;
    }
    root.innerHTML = items.map((product, index) => {
      const image = safeImage(product.image);
      const name = escapeHTML(product.title || 'A Fitvi.bes find');
      const sectionName = escapeHTML(getSectionName(sectionsData.sections, product.section_key));
      const url = `/products.html?section=${encodeURIComponent(text(product.section_key || 'all'))}`;
      return `<a class="featured-card${index === 1 ? ' featured-card-offset' : ''}" href="${url}">${image ? `<img src="${escapeHTML(image)}" alt="${name}" loading="lazy">` : '<div class="featured-image-placeholder"></div>'}<div><span>${sectionName}</span><h3>${name}</h3></div></a>`;
    }).join('');
    addImageFallbacks(root);
  }

  function renderProductCard(product, sections) {
    const title = escapeHTML(product.title || 'Untitled find');
    const description = escapeHTML(product.description || product.tagline || 'A curated style find.');
    const image = safeImage(product.image);
    const sectionName = escapeHTML(getSectionName(sections, product.section_key));
    const badge = escapeHTML(product.badge || sectionName.toUpperCase());
    const retailer = escapeHTML(product.retailer || 'Retailer');
    const market = escapeHTML(product.market || 'Check availability');
    const priceNote = escapeHTML(product.price_note || 'Check retailer for current price');
    const affiliate = safeLink(product.affiliate_url, false);
    const buttonText = escapeHTML(product.button_text || 'View the find');
    const imageMarkup = image ? `<img src="${escapeHTML(image)}" alt="${title}" loading="lazy">` : '';
    const cta = affiliate
      ? `<a class="deal-link" href="${escapeHTML(affiliate)}" target="_blank" rel="sponsored nofollow noopener noreferrer">${buttonText} ↗</a>`
      : '<span class="deal-link deal-link-disabled" title="Add the correct affiliate URL in the admin dashboard">Link coming soon ↗</span>';
    return `<article class="product-card" data-section="${escapeHTML(text(product.section_key).toLowerCase())}" data-search="${escapeHTML([product.title, product.description, product.tagline, sectionName, product.retailer, product.market].join(' ').toLowerCase())}"><div class="product-image${image ? '' : ' image-placeholder'}">${imageMarkup}<span class="product-badge">${badge}</span><span class="save-button" aria-hidden="true">✳</span></div><div class="product-info"><div class="product-meta"><span>${sectionName.toUpperCase()}</span><span>${retailer.toUpperCase()} · ${market.toUpperCase()}</span></div><h3>${title}</h3><p>${description}</p><div class="product-card-bottom"><span class="price-note">${priceNote}</span>${cta}</div></div></article>`;
  }

  function renderProducts(productsData, sectionsData) {
    const grid = $('#product-grid');
    const filterRoot = $('#category-filters');
    if (!grid || !filterRoot) return;
    const allProducts = (productsData.products || []).filter((product) => product.active !== false).sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
    const sections = (sectionsData.sections || []).filter((item) => item.enabled !== false).sort((a, b) => Number(a.order || 999) - Number(b.order || 999));

    filterRoot.innerHTML = `<button class="filter-chip is-selected" data-filter="all" type="button">All finds <span>✳</span></button>` + sections.map((section) => `<button class="filter-chip" data-filter="${escapeHTML(text(section.key).toLowerCase())}" type="button">${escapeHTML(section.name || section.key)}</button>`).join('');
    grid.innerHTML = allProducts.map((product) => renderProductCard(product, sections)).join('');
    addImageFallbacks(grid);

    const params = new URLSearchParams(window.location.search);
    let activeFilter = (params.get('section') || 'all').toLowerCase();
    if (activeFilter !== 'all' && !sections.some((section) => text(section.key).toLowerCase() === activeFilter)) activeFilter = 'all';
    const searchInput = $('#product-search');
    const count = $('#product-count');
    const empty = $('#empty-products');
    const note = $('#active-filter-note');

    function applyFilters() {
      const search = text(searchInput && searchInput.value).trim().toLowerCase();
      let visible = 0;
      $$('.product-card', grid).forEach((card) => {
        const sectionMatch = activeFilter === 'all' || card.dataset.section === activeFilter;
        const searchMatch = !search || card.dataset.search.includes(search);
        const show = sectionMatch && searchMatch;
        card.hidden = !show;
        if (show) visible += 1;
      });
      $$('.filter-chip', filterRoot).forEach((button) => {
        const active = button.dataset.filter === activeFilter;
        button.classList.toggle('is-selected', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      if (count) count.textContent = `${visible} ${visible === 1 ? 'find' : 'finds'} in the edit`;
      if (empty) empty.hidden = visible > 0;
      if (grid) grid.hidden = visible === 0;
      if (note) {
        const activeName = activeFilter === 'all' ? '' : getSectionName(sections, activeFilter);
        const parts = [];
        if (activeName) parts.push(`Showing ${activeName}`);
        if (search) parts.push(`matching “${search}”`);
        note.textContent = parts.join(' · ');
        note.hidden = parts.length === 0;
      }
    }

    filterRoot.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      activeFilter = button.dataset.filter;
      const nextURL = new URL(window.location.href);
      if (activeFilter === 'all') nextURL.searchParams.delete('section');
      else nextURL.searchParams.set('section', activeFilter);
      window.history.replaceState({}, '', nextURL);
      applyFilters();
    });
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    const clearButton = $('#clear-filters');
    if (clearButton) clearButton.addEventListener('click', () => {
      activeFilter = 'all';
      if (searchInput) searchInput.value = '';
      const nextURL = new URL(window.location.href);
      nextURL.searchParams.delete('section');
      window.history.replaceState({}, '', nextURL);
      applyFilters();
    });
    applyFilters();
  }

  function renderPrinciples(aboutData) {
    const root = $('#principles-grid');
    if (!root) return;
    const principles = Array.isArray(aboutData.principles) ? aboutData.principles : [];
    if (!principles.length) return;
    root.innerHTML = principles.map((item, index) => `<article class="principle-card"><span class="principle-number">${escapeHTML(item.number || String(index + 1).padStart(2, '0'))}</span><span class="principle-icon">${escapeHTML(item.icon || '✳')}</span><h3>${escapeHTML(item.title || 'A Fitvi.bes principle')}</h3><p>${escapeHTML(item.description || '')}</p></article>`).join('');
  }

  function setupNavigation() {
    const toggle = $('.menu-toggle');
    const nav = $('.main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      });
      $$('.main-nav a').forEach((link) => link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      }));
    }
    const year = $('#current-year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  async function init() {
    setupNavigation();
    const [site, sections, products, about] = await Promise.all([
      loadJSON('/content/site.json', FALLBACK.site),
      loadJSON('/content/sections.json', FALLBACK.sections),
      loadJSON('/content/products.json', FALLBACK.products),
      loadJSON('/content/about.json', FALLBACK.about)
    ]);
    setTextFields(site);
    setAboutFields(about);
    const page = document.body.getAttribute('data-page');
    if (page === 'home') {
      renderHomeSections(sections);
      renderFeaturedProducts(products, sections);
    } else if (page === 'products') {
      renderProducts(products, sections);
    } else if (page === 'about') {
      renderPrinciples(about);
    }
    addImageFallbacks();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
