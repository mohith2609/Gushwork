import { $, $$ } from "./dom.js";

export function setupProductGallery() {
  const image = $(".product-gallery__image");
  const thumbs = $$(".product-gallery__thumb");
  const previous = $(".product-gallery__arrow--prev");
  const next = $(".product-gallery__arrow--next");
  if (!image || thumbs.length === 0) return;

  let activeIndex = Math.max(0, thumbs.findIndex((thumb) => thumb.classList.contains("active")));

  const showImage = (index) => {
    activeIndex = (index + thumbs.length) % thumbs.length;
    thumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("active", thumbIndex === activeIndex));
    image.src = thumbs[activeIndex].src;
    image.alt = thumbs[activeIndex].alt || image.alt;
  };

  thumbs.forEach((thumb, index) => thumb.addEventListener("click", () => showImage(index)));
  previous?.addEventListener("click", () => showImage(activeIndex - 1));
  next?.addEventListener("click", () => showImage(activeIndex + 1));
}

export function setupImageZoom() {
  const area = $(".product-gallery__stage");
  const image = $(".product-gallery__image");
  const preview = $(".product-gallery__zoom");
  if (!area || !image || !preview) return;

  area.addEventListener("mousemove", (event) => {
    const bounds = area.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    preview.style.display = "block";
    preview.style.backgroundImage = `url("${image.src}")`;
    preview.style.backgroundPosition = `${x}% ${y}%`;
    preview.style.left = `${bounds.right + 20}px`;
    preview.style.top = `${bounds.top}px`;
  });

  area.addEventListener("mouseleave", () => {
    preview.style.display = "none";
  });
}
