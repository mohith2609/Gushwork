import { assets, siteContent } from "../data/siteContent.js";

export function productIntroTemplate() {
  const { product } = siteContent;
  const thumbs = product.gallery
    .map((image, index) => `<img class="product-gallery__thumb${index === 0 ? " active" : ""}" src="${image}" alt="Product image ${index + 1}">`)
    .join("");
  const certifications = product.certifications
    .map((item) => `<span class="certification-pill"><img src="${item.icon}" alt="">${item.label}</span>`)
    .join("");
  const highlights = product.highlights
    .map((item) => `<li><img class="highlight-check" src="${assets.check}" alt="">${item}</li>`)
    .join("");
  const partners = Array.from({ length: 6 }, () => `<img src="${assets.partner}" alt="Euroflex">`).join("");

  return `
    <section class="product-intro-band">
      <div class="product-intro textured-surface">
        <div class="container">
          <nav class="product-breadcrumbs" aria-label="Breadcrumb"><a href="/">Products</a> &gt; <span id="productBreadcrumbText">${product.breadcrumb}</span></nav>

          <div class="product-landing product-landing__grid">
            <section class="product-gallery" aria-label="Product images">
              <div class="product-gallery__stage">
                <img class="product-gallery__image" src="${product.gallery[0]}" alt="Workers handling HDPE pipe coils">
                <button class="product-gallery__arrow product-gallery__arrow--prev" type="button" aria-label="Previous image"><img src="${assets.arrow}" alt="" style="transform: rotate(-180deg);"></button>
                <button class="product-gallery__arrow product-gallery__arrow--next" type="button" aria-label="Next image"><img src="${assets.arrow}" alt=""></button>
              </div>
              <div class="product-gallery__thumbs" aria-label="Choose product image">${thumbs}</div>
              <div class="product-gallery__zoom" aria-hidden="true"></div>
            </section>

            <section class="product-summary product-summary--mobile" aria-labelledby="productTitle">
              <div class="product-certifications" aria-label="Certifications">${certifications}</div>
              <h1 class="product-heading" id="productTitle">${product.title}</h1>
              <ul class="product-highlights">${highlights}</ul>
              <div class="price-panel">
                <span class="price-panel__label">Price Range</span>
                <strong class="price-panel__range">${product.price.range}</strong>
                <div class="price-panel__meta">
                  <span class="shipping-note">${product.price.shipping}</span>
                  <span class="return-note">${product.price.returns}</span>
                </div>
                <p class="certification-note">${product.price.note}</p>
              </div>
              <div class="product-actions">
                <button class="button button--primary" type="button" data-modal-target="quoteModal">Get Custom Quote</button>
                <button class="button button--secondary" type="button">View Technical Specs <img src="${assets.caret}" alt="" style="width: 18px; height: 18px;"></button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section class="partner-strip" aria-label="Trusted companies">
        <div class="container">
          <p class="partner-strip__title">Trusted by Hundreds of Companies Globally</p>
          <div class="partner-logos">${partners}</div>
        </div>
      </section>
    </section>
  `;
}
