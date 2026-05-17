import { siteContent } from "../data/siteContent.js";

export function solutionsTemplate() {
  const cards = siteContent.solutions
    .map(([title, text, image]) => `
      <article class="solution-card">
        <div class="card-body">
          <h3>${title}</h3>
          <p>${text}</p>
          <div class="card-media"><img src="${image}" alt=""></div>
          <button class="learn-more-button" type="button">Learn More</button>
        </div>
      </article>
    `)
    .join("");

  return `
    <section class="solutions-section" id="solutions" aria-labelledby="solutionsTitle">
      <div class="container">
        <h2 class="block-title" id="solutionsTitle">Complete Piping Solutions Portfolio</h2>
        <p class="block-subtitle">Explore HDPE pipes, fittings, coils, and related solutions for modern infrastructure and industrial use.</p>
        <div class="solutions-grid">${cards}</div>
      </div>
    </section>
  `;
}
