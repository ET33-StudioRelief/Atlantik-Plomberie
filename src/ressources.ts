import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const initHubAnimation = () => {
  const section = document.querySelector('.section_hub');
  const hub = document.querySelector('.hub_component');

  if (!section || !hub) return;

  gsap.from(hub, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 50%',
      toggleActions: 'play none none reverse',
    },
  });
};

export const initFaqAnimation = () => {
  const section = document.querySelector('.section_faq');
  const faq = document.querySelector('.faq_component');

  if (!section || !faq) return;

  gsap.from(faq, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });
};
