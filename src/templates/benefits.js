import { siteContent } from "../data/siteContent.js";
import { bagIcon } from "./icons.js";

export function benefitsTemplate() {
  const cards = siteContent.benefits.cards
    .map((card) => `
      <article class="benefit-card">
        <div class="benefit-card__icon">${card.icon === "bag" ? bagIcon() : `<img src="${card.image}" alt="">`}</div>
        <h3 class="benefit-card__title">${card.title}</h3>
        <p class="benefit-card__text">${siteContent.benefits.description}</p>
      </article>
    `)
    .join("");

  return `
    <section class="benefits-section" aria-labelledby="benefitsTitle">
      <div class="container">
        <div class="benefits-content">
          <h2 class="benefits-title" id="benefitsTitle">${siteContent.benefits.title}</h2>
          <p class="benefits-subtitle">${siteContent.benefits.subtitle}</p>
          <div class="benefit-grid">${cards}</div>
          <button class="quote-request-button" type="button" data-modal-target="quoteModal">Request a Quote</button>
        </div>
      </div>
    </section>
  `;
}
