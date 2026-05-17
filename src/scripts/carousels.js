import { $, $$ } from "./dom.js";

export function setupLogoCount() {
  const logos = $$(".partner-logos img");
  if (logos.length === 0) return;

  const update = () => {
    const width = window.innerWidth;
    const visibleCount = width >= 1240 ? 6 : width >= 1000 ? 5 : width >= 550 ? 4 : 3;
    logos.forEach((logo, index) => {
      logo.style.display = index < visibleCount ? "block" : "none";
    });
  };

  update();
  window.addEventListener("resize", update);
}

export function setupApplicationsCarousel() {
  const section = $(".use-case-section");
  const track = section ? $(".scroll-track", section) : null;
  const cards = track ? $$(".use-case-card", track) : [];
  const previous = section ? $(".is-prev", section) : null;
  const next = section ? $(".is-next", section) : null;
  if (!track || cards.length === 0) return;

  let index = 0;

  const cardStep = () => {
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    return cards[0].getBoundingClientRect().width + gap;
  };

  const maxIndex = () => {
    const viewport = track.parentElement?.getBoundingClientRect().width || cardStep();
    return Math.max(0, cards.length - Math.max(1, Math.floor(viewport / cardStep())));
  };

  const render = () => {
    index = Math.min(index, maxIndex());
    track.style.transform = `translateX(${-index * cardStep()}px)`;
    if (previous) previous.disabled = index === 0;
    if (next) next.disabled = index === maxIndex();
  };

  previous?.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    render();
  });

  next?.addEventListener("click", () => {
    index = Math.min(maxIndex(), index + 1);
    render();
  });

  render();
  window.addEventListener("resize", render);
}

export function setupDraggableTestimonials() {
  const track = $(".proof-carousel .scroll-track");
  if (!track) return;

  let startX = 0;
  let startScroll = 0;
  let dragging = false;

  const start = (x) => {
    dragging = true;
    startX = x;
    startScroll = track.scrollLeft;
    track.classList.add("active-drag");
  };
  const move = (x) => {
    if (dragging) track.scrollLeft = startScroll - (x - startX) * 1.4;
  };
  const stop = () => {
    dragging = false;
    track.classList.remove("active-drag");
  };

  track.addEventListener("mousedown", (event) => start(event.pageX));
  track.addEventListener("mousemove", (event) => {
    event.preventDefault();
    move(event.pageX);
  });
  track.addEventListener("mouseup", stop);
  track.addEventListener("mouseleave", stop);
  track.addEventListener("touchstart", (event) => start(event.touches[0].pageX), { passive: true });
  track.addEventListener("touchmove", (event) => move(event.touches[0].pageX), { passive: true });
  track.addEventListener("touchend", stop);
}
