import { headerTemplate } from "./header.js";
import { productIntroTemplate } from "./productIntro.js";
import { specsTemplate } from "./specs.js";
import { benefitsTemplate } from "./benefits.js";
import { faqTemplate } from "./faq.js";
import { applicationsTemplate } from "./applications.js";
import { processTemplate } from "./process.js";
import { testimonialsTemplate } from "./testimonials.js";
import { solutionsTemplate } from "./solutions.js";
import { contactTemplate, ctaTemplate, downloadsTemplate } from "./lowerPage.js";
import { footerTemplate } from "./footer.js";
import { modalsTemplate } from "./modals.js";

export function renderPage() {
  // Section order follows the Figma flow from the product area down to the footer.
  return `
    ${headerTemplate()}
    <main>
      ${productIntroTemplate()}
      ${specsTemplate()}
      ${benefitsTemplate()}
      ${faqTemplate()}
      ${applicationsTemplate()}
      ${processTemplate()}
      ${testimonialsTemplate()}
      ${solutionsTemplate()}
      ${ctaTemplate()}
      ${downloadsTemplate()}
      ${contactTemplate()}
    </main>
    ${footerTemplate()}
    ${modalsTemplate()}
  `;
}
