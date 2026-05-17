import { assets, siteContent } from "../data/siteContent.js";
import { avatarPlaceholder } from "./icons.js";

export function testimonialsTemplate() {
  const cards = siteContent.testimonials.cards
    .map(([title, text, name, role]) => `
      <article class="proof-card">
        <div class="proof-card__quote"><img src="${assets.quote}" alt=""></div>
        <h2 class="product-heading" style="font-size: 24px; line-height: 120%;">${title}</h2>
        <p class="proof-card__text">${text}</p>
        <div class="proof-author">
          <div class="proof-author__avatar">${avatarPlaceholder()}</div>
          <div class="proof-author__details"><span class="proof-author__name">${name}</span><span class="proof-author__role">${role}</span></div>
        </div>
      </article>
    `)
    .join("");

  return `
    <section class="proof-section" aria-labelledby="proofTitle">
      <div class="container">
        <h2 class="block-title" id="proofTitle">${siteContent.testimonials.title}</h2>
        <p class="block-subtitle">${siteContent.testimonials.subtitle}</p>
        <div class="proof-carousel"><div class="scroll-track">${cards}</div></div>
      </div>
    </section>
  `;
}
