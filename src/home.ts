import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
export const initNavbarAnimation = () => {
  const navbar = document.querySelector('.navbar_component') as HTMLElement;
  const heroSection = document.querySelector('.section_hero');

  if (!navbar) return;

  let lastScrollTop = 0;
  let isScrollingDown = false;
  let isScrollingUp = false;

  // Fonction pour mettre à jour le style de la navbar
  const updateNavbarStyle = () => {
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        navbar.style.backgroundColor = 'transparent';
      } else {
        navbar.style.backgroundColor = 'white';
      }
    } else {
      navbar.style.backgroundColor = 'white';
    }
  };

  // Écouteur d'événements pour le scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Mise à jour de la transparence
    updateNavbarStyle();

    if (currentScroll > lastScrollTop) {
      // Scroll vers le bas
      if (!isScrollingDown) {
        gsap.to(navbar, {
          y: -100,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        isScrollingDown = true;
        isScrollingUp = false;
      }
    } else {
      // Scroll vers le haut
      if (!isScrollingUp) {
        gsap.to(navbar, {
          y: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        isScrollingUp = true;
        isScrollingDown = false;
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Initialisation du style au chargement
  updateNavbarStyle();
};

export const initFooterAnimations = () => {
  const footerSection = document.querySelector('.footer_component');
  const footerContent = document.querySelector('.footer_content');

  if (!footerSection || !footerContent) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footerSection,
      start: 'top 80%',
      toggleActions: 'restart pause resume reset',
    },
  });

  tl.from(footerContent, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });
};

export const initFeaturesAnimations = () => {
  const section = document.querySelector('.section_hp_features');
  const heading = document.querySelector('.hp_features_heading-content');
  const imageWrapper = document.querySelector('.hp_features_image-wrapper');
  const features = [
    document.querySelector('#feature1'),
    document.querySelector('#feature2'),
    document.querySelector('#feature3'),
    document.querySelector('#feature4'),
  ];
  const button = document.querySelector('#feature-btn');

  if (!section || !heading || !imageWrapper || features.some((f) => !f) || !button) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'restart pause resume reset',
    },
  });

  tl.from(heading, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });

  tl.from(
    imageWrapper,
    {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    },
    '-=0.4'
  );

  features.forEach((feature) => {
    tl.from(
      feature,
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  });

  tl.from(
    button,
    {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    },
    '-=0.2'
  );
};

export const initContactAnimations = () => {
  const contactSection = document.querySelector('.section_hp_contact');
  const contactItems = document.querySelectorAll('.hp_contact_item');

  if (!contactSection || !contactItems.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSection,
      start: 'top 80%',
      toggleActions: 'restart pause resume reset',
    },
  });

  // Animation des items de contact
  contactItems.forEach((item) => {
    tl.from(
      item,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.6'
    );
  });
};

export const initStatsAnimations = () => {
  const statsSection = document.querySelector('.section_stats.text-color-alternate');
  const statsContent = document.querySelector('.stats_content');
  const statsItems = document.querySelectorAll('.stats_item');
  const statsBtn = document.querySelector('#stats-btn');

  if (!statsSection || !statsContent || !statsItems.length || !statsBtn) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: statsSection,
      start: 'top 50%',
      toggleActions: 'restart pause resume reset',
    },
  });

  // Animation du slide
  tl.from(statsContent, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });

  // Animation des stats items
  statsItems.forEach((item) => {
    tl.from(
      item,
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<0.2'
    );
  });

  // Animation du bouton
  tl.from(
    statsBtn,
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    },
    '-=0.2'
  );
};

export const initCustomerParallax = () => {
  const customerSection = document.querySelector('.section_customer');
  const customerImages = document.querySelectorAll('.customer_img');

  if (!customerSection || !customerImages.length) return;

  customerImages.forEach((image) => {
    gsap.to(image, {
      y: -100, // Déplacement vertical de 30%
      ease: 'none',
      scrollTrigger: {
        trigger: customerSection,
        start: 'top bottom', // Commence quand le haut de la section atteint le bas de la fenêtre
        end: 'bottom top', // Se termine quand le bas de la section atteint le haut de la fenêtre
        scrub: 2, // L'animation suit le scroll avec un délai de 1 seconde
      },
    });
  });
};

export const initHubAnimations = () => {
  const hubSection = document.querySelector('.section_hub');
  const hubHeading = document.querySelector('.hub_heading-content');
  const hubCards = document.querySelectorAll('.layout423_card');

  if (!hubSection || !hubHeading || !hubCards.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hubSection,
      start: 'top 80%',
      toggleActions: 'restart pause resume reset',
    },
  });

  // Animation du titre
  tl.from(hubHeading, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });

  // Animation des cartes
  hubCards.forEach((card) => {
    tl.from(
      card,
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  });
};

export const initHeroAnimation = () => {
  const heroContent = document.querySelector('.hero_text-content');

  if (!heroContent) return;

  gsap.from(heroContent, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.3,
  });
};

export const initTestimonialParallax = () => {
  if (window.innerWidth <= 767) return;
  const testimonialList = document.querySelector('.testimonial_list');
  const testimonialCards = document.querySelectorAll('.testimonial_card');
  const centerCard = document.querySelector('#testi-center');

  if (!testimonialList || !testimonialCards.length || !centerCard) return;

  // Animation pour la carte du milieu
  gsap.to(centerCard, {
    y: 50, // Déplacement vers le bas
    ease: 'none',
    scrollTrigger: {
      trigger: testimonialList,
      start: 'top center',
      end: 'bottom center',
      scrub: 1, // L'animation suit le scroll avec un délai
    },
  });

  // Animation pour les cartes latérales
  testimonialCards.forEach((card) => {
    if (card !== centerCard) {
      gsap.to(card, {
        y: -30, // Déplacement vers le haut
        ease: 'none',
        scrollTrigger: {
          trigger: testimonialList,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });
    }
  });
};

/* En quête de fuite */
export const initEqdfContactAnimation = () => {
  const section = document.querySelector('.section_eqf_contact');
  const faq = document.querySelector('.eqf_contact_component');

  if (!section || !faq) return;

  gsap.from(faq, {
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

export const initEqdfTestimonialAnimation = () => {
  const section = document.querySelector('.section_eqf_testimonial');
  const gallery = document.querySelector('.eqf_testimonial_component');

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
