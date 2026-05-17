import { setupApplicationsCarousel, setupDraggableTestimonials, setupLogoCount } from "./carousels.js";
import { setupCatalogueForm, setupSimpleActions } from "./forms.js";
import { setupFaqList } from "./faq.js";
import { setupModals } from "./modals.js";
import { setupMobileNavigation } from "./navigation.js";
import { setupImageZoom, setupProductGallery } from "./productGallery.js";
import { setupProductRoutes } from "./productRoutes.js";
import { setupMobileProcessCarousel, setupProcessTabs } from "./process.js";
import { setupStickyHeader } from "./stickyHeader.js";

export function initPageInteractions() {
  setupStickyHeader();
  setupProductRoutes();
  setupMobileNavigation();
  setupProductGallery();
  setupImageZoom();
  setupLogoCount();
  setupFaqList();
  setupCatalogueForm();
  setupApplicationsCarousel();
  setupProcessTabs();
  setupMobileProcessCarousel();
  setupDraggableTestimonials();
  setupModals();
  setupSimpleActions();
}
