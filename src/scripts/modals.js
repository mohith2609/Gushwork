import { $, $$ } from "./dom.js";

export function setupModals() {
  const modals = $$(".dialog-backdrop");

  const close = (modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  const open = (modal) => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    $("input", modal)?.focus();
  };

  $$("[data-modal-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modal = document.getElementById(trigger.dataset.modalTarget);
      if (modal) open(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest(".dialog-close")) close(modal);
    });

    $("form", modal)?.addEventListener("submit", (event) => {
      event.preventDefault();
      close(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    modals.filter((modal) => modal.classList.contains("is-open")).forEach(close);
  });
}
