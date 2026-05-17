import { assets } from "../data/siteContent.js";

export function footerTemplate() {
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <div class="site-footer__brand">
          <img class="site-footer__logo" src="${assets.logo}" alt="Mangalam HDPE Pipes">
          <span class="site-footer__tagline"><span class="text-dark">Premium</span> <span class="text-accent">HDPE Pipes & Fittings</span> <span class="text-accent">Manufacturer</span> <span class="text-dark"> in South India</span></span>
        </div>
        <div class="site-footer__links">
          <div class="site-footer__column"><h4>About Us</h4><ul><li><a href="#">About Us</a></li></ul></div>
          <div class="site-footer__column"><h4>Categories</h4><ul><li><a href="#">Water Supply</a></li><li><a href="#">Industrial Piping</a></li><li><a href="#">Agriculture & Irrigation</a></li><li><a href="#">Drainage Systems</a></li><li><a href="#">Telecom Ducts</a></li><li><a href="#">Infrastructure Projects</a></li></ul></div>
          <div class="site-footer__column"><h4>Products</h4><ul><li><a href="#">HDPE Pipes</a></li><li><a href="#">HDPE Coils</a></li><li><a href="#">Pipe Fittings</a></li><li><a href="#">Electrofusion Fittings</a></li><li><a href="#">Butt Fusion Fittings</a></li><li><a href="#">Custom Pipe Solutions</a></li></ul></div>
          <div class="site-footer__column">
            <h4>Contact</h4>
            <address>
              <p><img src="${assets.location}" alt=""> 2126, Road No. 2, GIDC Sachin, Surat - 394 230 Gujarat, India</p>
              <p><img src="${assets.phone}" alt=""> +91-XXX-XXX-XXXX</p>
              <p><img src="${assets.mail}" alt=""> info@mangalamhdpepipes.com</p>
              <p><img src="${assets.support}" alt=""> support@mangalamhdpepipes.com</p>
            </address>
            <div class="social-list">
              <a href="#" aria-label="LinkedIn"><img src="${assets.linkedin}" alt=""></a>
              <a href="#" aria-label="X"><img src="${assets.x}" alt=""></a>
              <a href="#" aria-label="Instagram"><img src="${assets.instagram}" alt=""></a>
            </div>
          </div>
        </div>
      </div>
      <hr style="border: 1px solid #FFFFFF; margin: 10px 0;">
      <div class="site-footer__bottom">
        <div class="container">
          <p class="copyright-text">Copyright &copy; 2025 Mangalam HDPE Pipes | All Rights Reserved</p>
          <div class="site-footer__legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Sitemap</a></div>
        </div>
      </div>
    </footer>
  `;
}
