import { assets, siteContent } from "../data/siteContent.js";

export function headerTemplate() {
  const productLinks = siteContent.nav.products
    .map((item) => `<li><a class="product-route-link" href="${item.path}" data-product-name="${item.label}">${item.label}</a></li>`)
    .join("");

  return `
    <header class="site-header" id="siteHeader">
      <div class="container site-header__inner">
        <a class="brand-logo" href="/" aria-label="Mangalam HDPE Pipes home">
          <span class="brand-logo__frame"><img src="${assets.logo}" alt="Mangalam HDPE Pipes"></span>
        </a>

        <nav class="primary-nav" aria-label="Primary navigation">
          <ul class="primary-nav__list">
            <li><a class="primary-nav__link" href="/">About Us</a></li>
            <li class="product-menu">
              <a class="primary-nav__link product-menu__toggle" href="#">
                Products <img class="product-menu__arrow" src="${assets.navChevron}" alt="">
              </a>
              <ul class="product-menu__list" aria-label="Product menu">${productLinks}</ul>
            </li>
            <li><button class="nav-contact-button" type="button">Contact Us</button></li>
          </ul>
        </nav>

        <button class="mobile-nav-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="mobile-nav-toggle__line"></span>
          <span class="mobile-nav-toggle__line"></span>
          <span class="mobile-nav-toggle__line"></span>
        </button>
      </div>
    </header>
  `;
}
