export function modalsTemplate() {
  return `
    <div class="dialog-backdrop" id="catalogueModal" aria-hidden="true">
      <div class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="catalogueModalTitle">
        <button class="dialog-close" type="button" aria-label="Close modal">&times;</button>
        <h2 id="catalogueModalTitle">Let us email the entire catalogue to you</h2>
        <form class="dialog-form">
          <label>Your Email *<input type="email" placeholder="example@gmail.com" required></label>
          <label>Your Contact (Optional)<input type="tel" placeholder="+91 0000000000"></label>
          <button type="submit">Download Brochure</button>
        </form>
      </div>
    </div>

    <div class="dialog-backdrop" id="quoteModal" aria-hidden="true">
      <div class="dialog-card" role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">
        <button class="dialog-close" type="button" aria-label="Close modal">&times;</button>
        <h2 id="quoteModalTitle">Request a Custom Quote</h2>
        <form class="dialog-form">
          <label>Full Name *<input type="text" placeholder="Your name" required></label>
          <label>Company Name<input type="text" placeholder="Company name"></label>
          <label>Email Address *<input type="email" placeholder="example@gmail.com" required></label>
          <label>Phone Number *<input type="tel" placeholder="+91 0000000000" required></label>
          <button type="submit">Request Custom Quote</button>
        </form>
      </div>
    </div>
  `;
}
