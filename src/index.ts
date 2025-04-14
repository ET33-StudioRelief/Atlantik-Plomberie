import './index.css';

import {
  initContactAnimations,
  initCustomerParallax,
  initEqdfContactAnimation,
  initEqdfTestimonialAnimation,
  initFeaturesAnimations,
  initFooterAnimations,
  initHeroAnimation,
  initHubAnimations,
  initNavbarAnimation,
  initStatsAnimations,
  initTestimonialParallax,
} from './home';
import { initFaqAnimation, initHubAnimation } from './ressources';
import {
  initGalleryAnimation,
  initHeaderAnimation,
  initServicesFeaturesAnimation,
  initStepsAnimation,
} from './services';

// Initialisation au chargement de Webflow
window.Webflow ||= [];
window.Webflow.push(() => {
  // Initialisation des animations des composants globaux
  initNavbarAnimation();
  initFooterAnimations();

  if (window.location.pathname === '/') {
    initFeaturesAnimations();
    initStatsAnimations();
    initContactAnimations();
    initCustomerParallax();
    initHubAnimations();
    initHeroAnimation();
    initTestimonialParallax();
  }

  if (window.location.pathname === '/services') {
    initHeaderAnimation();
    initServicesFeaturesAnimation();
    initGalleryAnimation();
    initStepsAnimation();
  }

  if (window.location.pathname.includes('/ressources')) {
    initHubAnimation();
    initFaqAnimation();
  }

  if (window.location.pathname.includes('/en-quete-de-fuite')) {
    initStepsAnimation();
    initFaqAnimation();
    initEqdfContactAnimation();
    initEqdfTestimonialAnimation();
    initContactAnimations();
  }
});
