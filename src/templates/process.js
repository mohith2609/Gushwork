import { siteContent } from "../data/siteContent.js";

function points(items, className) {
  return items.map((item) => `<li><span class="${className}">&#10003;</span> ${item}</li>`).join("");
}

function mobileSlide(step, index) {
  return `
    <article class="process-slide${index === 0 ? " active" : ""}" data-step="${index + 1}" data-title="${step.label}">
      <h2 class="process-slide__title">${step.title}</h2>
      <p class="process-slide__text">${step.text}</p>
      <ul class="process-feature-list">${points(step.points, "process-check")}</ul>
      <div class="process-slide__image"><img src="${step.image}" alt=""></div>
    </article>
  `;
}

function desktopPanel(step, index) {
  return `
    <article class="process-panel${index === 0 ? " active" : ""}" id="${step.id}">
      <div class="process-detail">
        <div class="process-detail__copy">
          <h3>${step.title}</h3>
          <p>${step.text}</p>
          <ul class="process-detail__points">${points(step.points, "benefit-card__icon")}</ul>
        </div>
        <div class="process-detail__image"><img src="${step.image}" alt=""></div>
      </div>
    </article>
  `;
}

export function processTemplate() {
  const steps = siteContent.process.steps;
  const tabs = steps.map((step, index) => `<button class="process-tab${index === 0 ? " active" : ""}" type="button" data-tab="${step.id}">${step.label}</button>`).join("");

  return `
    <section class="production-flow-section" id="production-flow" aria-labelledby="processTitle">
      <div class="mobile-process-carousel">
        <div class="mobile-process-card">
          <div class="process-step-indicator"><span class="process-step-label" id="processStepLabel">Step 1/${steps.length}: ${steps[0].label}</span></div>
          <div class="mobile-process-slides">${steps.map(mobileSlide).join("")}</div>
          <div class="mobile-process-nav">
            <button class="mobile-process-button is-prev" id="processPrevButton" type="button"><span class="mobile-process-button__icon">&larr;</span>Previous</button>
            <button class="mobile-process-button is-next" id="processNextButton" type="button">Next<span class="mobile-process-button__icon">&rarr;</span></button>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="production-flow-content">
          <h2 class="production-flow-title" id="processTitle">${siteContent.process.title}</h2>
          <p class="production-flow-subtitle">${siteContent.process.subtitle}</p>
          <div class="production-flow-layout">
            <div class="process-tabs-wrap">
              <hr class="process-tabs-line">
              <div class="process-tabs" role="tablist" aria-label="Manufacturing steps">${tabs}</div>
            </div>
            <div class="process-panels">${steps.map(desktopPanel).join("")}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
