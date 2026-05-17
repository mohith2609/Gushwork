import { assets, siteContent } from "../data/siteContent.js";

export function specsTemplate() {
  const rows = siteContent.specs.rows
    .map(([label, value]) => `<div class="spec-table__row" role="row"><div class="spec-table__label" role="cell">${label}</div><div class="spec-table__value" role="cell">${value}</div></div>`)
    .join("");

  return `
    <section class="specs-section" aria-labelledby="specsTitle">
      <div class="container">
        <div class="specs-panel">
          <h2 class="specs-panel__title" id="specsTitle">${siteContent.specs.title}</h2>
          <p class="specs-panel__subtitle">${siteContent.specs.subtitle}</p>
          <div class="spec-table" role="table" aria-label="Technical specifications">
            <div class="spec-table__row" role="row" style="background-color: #374151d7;">
              <div class="spec-table__label" role="columnheader" style="color: #FFFFFF;">PARAMETER</div>
              <div class="spec-table__value" role="columnheader">SPECIFICATION</div>
            </div>
            ${rows}
            <div class="spec-table__row" role="row">
              <div class="spec-table__label" role="cell">Country of Origin</div>
              <div class="spec-table__value" role="cell"><span class="country-chip"><img width="20" height="20" src="/site-assets/flag-india.svg" alt="India"> India</span></div>
            </div>
          </div>
          <button class="datasheet-button" type="button" data-modal-target="catalogueModal">
            <img class="datasheet-button__icon" src="${assets.downloadPrimary}" alt=""> Download Full Technical Datasheet
          </button>
        </div>
      </div>
    </section>
  `;
}
