import { $, $$ } from "./dom.js";
import { addSwipe } from "./swipe.js";

export function setupProcessTabs() {
  const buttons = $$(".process-tab");
  const panels = $$(".process-panel");
  if (buttons.length === 0 || panels.length === 0) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((entry) => entry.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.tab)?.classList.add("active");
    });
  });
}

export function setupMobileProcessCarousel() {
  const card = $(".production-flow-section .mobile-process-card");
  const slides = card ? $$(".process-slide", card) : [];
  const badge = $("#processStepLabel");
  const previous = $("#processPrevButton");
  const next = $("#processNextButton");
  const content = $(".mobile-process-slides", card || document);
  if (!card || slides.length === 0) return;

  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("active")));
  let isMoving = false;

  const render = (direction = 1) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === index);
      slide.style.transform = slideIndex === index ? "translateX(0)" : `translateX(${direction > 0 ? "100%" : "-100%"})`;
      slide.style.opacity = slideIndex === index ? "1" : "0";
      slide.style.position = slideIndex === index ? "relative" : "absolute";
    });

    const active = slides[index];
    if (badge && active) badge.textContent = `Step ${index + 1}/${slides.length}: ${active.dataset.title || ""}`;
    if (previous) previous.disabled = index === 0;
    if (next) next.disabled = index === slides.length - 1;
  };

  const goTo = (nextIndex) => {
    if (isMoving || nextIndex < 0 || nextIndex >= slides.length || nextIndex === index) return;
    const direction = nextIndex > index ? 1 : -1;
    index = nextIndex;
    isMoving = true;
    render(direction);
    window.setTimeout(() => {
      isMoving = false;
    }, 420);
  };

  previous?.addEventListener("click", () => goTo(index - 1));
  next?.addEventListener("click", () => goTo(index + 1));
  addSwipe(content, { onLeft: () => goTo(index + 1), onRight: () => goTo(index - 1) });
  render();
}
