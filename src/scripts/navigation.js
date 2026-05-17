import { $, $$ } from "./dom.js";

export function setupMobileNavigation() {
  $$(".mobile-nav-toggle").forEach((button) => {
    const header = button.closest(".site-header");
    const navList = header ? $(".primary-nav__list", header) : null;
    if (!navList) return;

    button.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("show");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  $$(".product-menu__toggle").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      if (window.innerWidth > 768) return;
      event.preventDefault();
      toggle.closest(".product-menu")?.classList.toggle("open");
    });
  });
}
