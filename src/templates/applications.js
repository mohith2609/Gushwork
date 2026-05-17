import { assets, siteContent } from "../data/siteContent.js";

export function applicationsTemplate() {
  const cards = siteContent.applications.images
    .map((image) => `
      <article class="use-case-card">
        <div class="card-media"><img src="${image}" alt=""></div>
        <div class="card-body">
          <h3>${siteContent.applications.cardTitle}</h3>
          <p>${siteContent.applications.cardText}</p>
        </div>
      </article>
    `)
    .join("");

  return `
    <section class="use-case-section" aria-labelledby="useCasesTitle">
      <div class="container">
        <div class="use-case-content">
          <div class="use-case-heading-row">
            <div class="section-heading" style="display: flex; flex-direction: column; justify-content: space-between;">
              <h2 class="use-case-title" id="useCasesTitle">${siteContent.applications.title}</h2>
              <p class="use-case-subtitle">${siteContent.applications.subtitle}</p>
            </div>
            <div class="slider-controls">
              <button class="slider-button is-prev" type="button" aria-label="Previous applications"><img src="${assets.arrow}" alt="" style="transform: rotate(-180deg);"></button>
              <button class="slider-button is-next" type="button" aria-label="Next applications"><img src="${assets.arrow}" alt=""></button>
            </div>
          </div>
          <div class="use-case-slider"><div class="scroll-track">${cards}</div></div>
        </div>
      </div>
    </section>
  `;
}
