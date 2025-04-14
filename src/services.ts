import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const initHeaderAnimation = () => {
  const heroContent = document.querySelector('.header_component');

  if (!heroContent) return;

  gsap.from(heroContent, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.3,
  });
};

export const initServicesFeaturesAnimation = () => {
  const section = document.querySelector('.section_features');
  const featuresList = document.querySelector('.features_list');
  const featuresBtn = document.querySelector('#features-btn');

  if (!section || !featuresList || !featuresBtn) return;

  // Création d'une timeline pour l'animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 50%',
      toggleActions: 'play none none reverse',
    },
  });

  // Animation des éléments de la liste
  const featuresItems = featuresList.querySelectorAll('.features_item');
  featuresItems.forEach((item, index) => {
    tl.from(
      item,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      index * 0.3
    );
  });

  // Animation du bouton après les éléments
  tl.from(featuresBtn, {
    y: 30,
    opacity: 0,
    duration: 0.2,
    ease: 'power2.out',
  });
};

export const initGalleryAnimation = () => {
  const section = document.querySelector('.section_gallery');
  const gallery = document.querySelector('.gallery_component');

  if (!section || !gallery) return;

  gsap.from(gallery, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};

export const initStepsAnimation = () => {
  const section = document.querySelector('.section_steps');
  const contentLeft = document.querySelector('.steps_content-left');
  const timelineIcons = document.querySelectorAll('.steps_timeline-icon-wrapper');
  const timelineItems = document.querySelectorAll('.steps_timeline-right');

  if (!section || !contentLeft || !timelineIcons.length || !timelineItems.length) return;

  // Animation du contenu de gauche
  gsap.from(contentLeft, {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: contentLeft,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // Animation des icônes et du contenu en fonction du scroll
  timelineIcons.forEach((icon, index) => {
    // Animation de l'icône
    gsap.from(icon, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: icon,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Animation du contenu correspondant
    gsap.from(timelineItems[index], {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: timelineItems[index],
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });
};
