import { assets } from "../data/siteContent.js";

export function ctaTemplate() {
  return `
    <section class="expert-cta-section">
      <div class="container">
        <div class="expert-cta">
          <div class="expert-cta__copy">
            <h3 style="display: inline;">Didn't find what </h3><h3 style="color:#2B3990; display: inline;">you're looking for?</h3>
            <p>Talk to our experts for custom solutions and tailored guidance.</p>
          </div>
          <button class="expert-call-button" type="button"><img src="${assets.phone}" alt="">Talk to an Expert</button>
        </div>
      </div>
    </section>
  `;
}

export function downloadsTemplate() {
  const rows = [
    ["HDPE Pipe Installation Manual (PDF)", "hdpe-manual.pdf"],
    ["Maintenance & Inspection Handbook (PDF)", "maintenance-handbook.pdf"],
    ["Engineering Specifications Sheet (PDF)", "engineering-specs.pdf"],
  ].map(([label, file]) => `<div class="download-row"><span>${label}</span><button class="file-download-button" type="button" data-file="${file}">Download PDF <img src="${assets.downloadFile}" alt=""></button></div>`).join("");

  return `
    <section class="downloads-section" aria-labelledby="downloadsTitle">
      <div class="container">
        <h2 class="block-title" id="downloadsTitle">Resources & Downloads</h2>
        <p class="block-subtitle">Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.</p>
        <div class="download-stack">${rows}</div>
      </div>
    </section>
  `;
}

export function contactTemplate() {
  return `
    <section class="project-contact-section" aria-labelledby="contactTitle">
      <div class="container">
        <div class="project-contact-panel">
          <div class="project-contact-copy">
            <h2 id="contactTitle">Ready to Plan Your HDPE Piping Project?</h2>
            <p>Get a personalized consultation and quote for pipe solutions tailored to your project requirements.</p>
            <hr style="border: 1px solid #FFFFFF; opacity: 0.2; margin: 10px 0;">
            <p class="contact-note">For immediate assistance, call us at <a href="tel:+91-XXX-XXX-XXXX">+91-XXX-XXX-XXXX</a> or send an email to <a href="mailto:info@mangalamhdpepipes.com">info@mangalamhdpepipes.com</a>.</p>
          </div>
          <div class="contact-card">
            <h3>Contact Us Today</h3>
            <form class="project-contact-form">
              <input type="text" placeholder="Full Name" required>
              <input type="text" placeholder="Company Name">
              <input type="email" placeholder="Email Address" required>
              <div class="phone-field"><select class="country-code-select"><option value="+91">+91</option><option value="+1">+1</option><option value="+44">+44</option></select><input type="tel" placeholder="7003020616" required></div>
              <button class="request-quote-button" type="submit">Request Custom Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
