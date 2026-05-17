import { $, $$ } from "./dom.js";

export function setupCatalogueForm() {
  const input = $(".catalogue-email-input");
  const button = $(".catalogue-send-button");
  if (!input || !button) return;

  const submit = () => {
    // Basic front-end validation is enough here because the form is a static demo.
    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.focus();
      input.reportValidity();
      return;
    }

    const label = button.textContent;
    button.disabled = true;
    button.textContent = "Sent";

    window.setTimeout(() => {
      input.value = "";
      button.disabled = false;
      button.textContent = label;
    }, 1600);
  };

  button.addEventListener("click", submit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submit();
  });
}

export function setupSimpleActions() {
  // Lightweight placeholders keep non-submission buttons responsive in the demo.
  $$(".learn-more-button").forEach((button) => {
    button.addEventListener("click", () => {
      const title = $("h3", button.closest(".solution-card"))?.textContent?.trim();
      if (title) window.alert(`You clicked "Learn More" for: ${title}`);
    });
  });

  $(".expert-call-button")?.addEventListener("click", () => {
    window.alert("Connecting you with an expert! Please wait...");
  });

  $$(".project-contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
  });

  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest(".mobile-process-card")) event.preventDefault();
  });
}
