import { $, $$ } from "./dom.js";

export function setupFaqList() {
  const items = $$(".question-item");
  if (items.length === 0) return;

  items.forEach((item, index) => {
    const button = $(".question-toggle", item);
    if (!button) return;

    // Keep the first answer open by default, matching the designed accordion state.
    if (index === 0) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }

    button.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("active");

      items.forEach((entry) => {
        entry.classList.remove("active");
        $(".question-toggle", entry)?.setAttribute("aria-expanded", "false");
      });

      if (shouldOpen) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}
