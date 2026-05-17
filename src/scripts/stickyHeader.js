import { $ } from "./dom.js";

export function setupStickyHeader() {
  const stickyHeader = getStickyHeader();
  const fold = $(".product-landing");
  if (!stickyHeader || !fold) return;

  let isVisible = false;
  let lastScrollY = window.scrollY;
  let scrollEndTimer = null;

  const setVisible = (nextState) => {
    if (nextState === isVisible) return;
    isVisible = nextState;
    stickyHeader.classList.toggle("sticky", isVisible);
    stickyHeader.classList.remove("sticky-hidden", "pre-sticky");
  };

  const isPastFirstFold = () => fold.getBoundingClientRect().bottom <= 72;

  const showAfterScrollStops = () => {
    window.clearTimeout(scrollEndTimer);
    scrollEndTimer = window.setTimeout(() => {
      setVisible(isPastFirstFold());
      lastScrollY = Math.max(window.scrollY, 0);
    }, 180);
  };

  const update = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const isScrollingUp = currentScrollY < lastScrollY;
    const passedFirstFold = isPastFirstFold();

    if (isScrollingUp) {
      setVisible(false);
      lastScrollY = currentScrollY;
      showAfterScrollStops();
      return;
    }

    const shouldShow = passedFirstFold && currentScrollY > lastScrollY;
    setVisible(shouldShow);
    lastScrollY = currentScrollY;
    showAfterScrollStops();
  };

  const refresh = () => {
    setVisible(isPastFirstFold() && isVisible);
  };

  refresh();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", refresh);
}

function getStickyHeader() {
  const existingClone = $("#stickySiteHeader");
  if (existingClone) return existingClone;

  const siteHeader = $("#siteHeader");
  if (!siteHeader) return null;

  const clone = siteHeader.cloneNode(true);
  clone.id = "stickySiteHeader";
  clone.classList.add("site-header--sticky-copy");
  clone.setAttribute("aria-hidden", "true");
  siteHeader.insertAdjacentElement("afterend", clone);
  return clone;
}
