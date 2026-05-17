import "./styles.css";
import { initPageInteractions } from "./scripts/init.js";
import { renderPage } from "./templates/page.js";

const app = document.getElementById("app");

if (app) {
  // Build the page first, then attach behavior once the generated DOM exists.
  app.innerHTML = renderPage();
  initPageInteractions();

  // Let copied section links still land correctly after the template render.
  if (window.location.hash) {
    window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }, 150);
  }
}
