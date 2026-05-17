import { assets, siteContent } from "../data/siteContent.js";

export function faqTemplate() {
  const items = siteContent.faq.questions
    .map((question) => `
      <article class="question-item">
        <button class="question-toggle" type="button" aria-expanded="false">
          <span>${question}</span><img class="question-toggle__icon" src="${assets.caret}" alt="">
        </button>
        <div class="question-answer"><p>${siteContent.faq.answer}</p></div>
      </article>
    `)
    .join("");

  return `
    <section class="questions-section" aria-labelledby="questionsTitle">
      <div class="container">
        <div class="questions-content">
          <h2 class="questions-title" id="questionsTitle" style="display: inline; color: #2B3990; font-weight: 600;">${siteContent.faq.titleA}</h2>
          <h2 class="questions-title" style="display: inline;">${siteContent.faq.titleB}</h2>
          <div class="questions-list">${items}</div>
          <div class="catalogue-panel">
            <div class="catalogue-panel__copy">
              <h3>Want us to email the entire catalogue?</h3>
              <p>Enter your email and an expert will share the catalogue with you.</p>
            </div>
            <div class="catalogue-panel__form">
              <input class="catalogue-email-input" type="email" placeholder="Email Address" required>
              <button class="catalogue-send-button" type="button">Request Catalogue</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
