import { siteContent } from "../data/siteContent.js";
import { $ } from "./dom.js";

const defaultProductName = siteContent.product.breadcrumb;

function productFromPath(pathname) {
  return siteContent.nav.products.find((product) => product.path === pathname);
}

export function setupProductRoutes() {
  // Product menu links update the breadcrumb and URL without forcing a page reload.
  updateProductLabel(productFromPath(window.location.pathname)?.label || defaultProductName);

  document.addEventListener("click", (event) => {
    const homeLink = event.target.closest('a[href="/"]');
    if (homeLink) {
      event.preventDefault();
      window.history.pushState({}, "", "/");
      updateProductLabel(defaultProductName);
      closeOpenProductMenus();
      return;
    }

    const link = event.target.closest(".product-route-link");
    if (!link) return;

    event.preventDefault();
    const name = link.dataset.productName || defaultProductName;
    window.history.pushState({ productName: name }, "", link.getAttribute("href"));
    updateProductLabel(name);
    closeOpenProductMenus();
  });

  window.addEventListener("popstate", () => {
    updateProductLabel(productFromPath(window.location.pathname)?.label || defaultProductName);
  });
}

function updateProductLabel(name) {
  const breadcrumb = $("#productBreadcrumbText");
  if (breadcrumb) breadcrumb.textContent = name;
}

function closeOpenProductMenus() {
  document.querySelectorAll(".product-menu.open").forEach((menu) => menu.classList.remove("open"));
  document.querySelectorAll(".primary-nav__list.show").forEach((menu) => menu.classList.remove("show"));
}
