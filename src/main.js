import "./styles.css";
import { initPageInteractions } from "./scripts/init.js";
import { renderPage } from "./templates/page.js";

const app = document.getElementById("app");

if (app) {
  app.innerHTML = renderPage();
  initPageInteractions();
  if (window.location.hash) {
    window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }, 150);
  }
}
