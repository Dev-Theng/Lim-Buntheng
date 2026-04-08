/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Lazy-load vendor scripts to reduce unused JS on initial load.
   */
  const scriptCache = new Map();
  const loadScript = (src) => {
    if (scriptCache.has(src)) {
      return scriptCache.get(src);
    }
    const promise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-src="${src}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', reject);
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      script.dataset.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(script);
    });
    scriptCache.set(src, promise);
    return promise;
  };

  const styleCache = new Map();
  const loadStyle = (href) => {
    if (styleCache.has(href)) {
      return styleCache.get(href);
    }
    const promise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`link[data-href="${href}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', reject);
        return;
      }
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.href = href;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load ${href}`));
      document.head.appendChild(link);
    });
    styleCache.set(href, promise);
    return promise;
  };

  const runWhenIdle = (callback) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      setTimeout(callback, 1500);
    }
  };

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    const header = document.querySelector('#header');
    if (!header || !headerToggleBtn) {
      return;
    }
    header.classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', headerToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init (lazy-loaded)
   */
  async function aosInit() {
    if (!document.querySelector('[data-aos]')) {
      return;
    }
    try {
      await loadStyle('/assets/vendor/aos/aos.css');
      await loadScript('/assets/vendor/aos/aos.js');
      if (typeof AOS === 'undefined') {
        return;
      }
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
      if (typeof AOS.refresh === 'function') {
        AOS.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Init typed.js (lazy-loaded)
   */
  async function initTyped() {
    const selectTyped = document.querySelector('.typed');
    if (!selectTyped || selectTyped.dataset.typedInit === 'true') {
      return;
    }
    try {
      await loadScript('/assets/vendor/typed.js/typed.umd.js');
      if (typeof Typed === 'undefined') {
        return;
      }
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      if (!typed_strings) {
        return;
      }
      typed_strings = typed_strings.split(',');
      selectTyped.dataset.typedInit = 'true';
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Initiate Pure Counter (lazy-loaded)
   */
  let pureCounterInitialized = false;
  async function initPureCounter() {
    if (pureCounterInitialized || !document.querySelector('.purecounter')) {
      return;
    }
    try {
      await loadScript('/assets/vendor/purecounter/purecounter_vanilla.js');
      if (typeof PureCounter === 'undefined') {
        return;
      }
      pureCounterInitialized = true;
      new PureCounter();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Animate the skills items on reveal (lazy-loaded)
   */
  async function initSkillsAnimation() {
    const skillsAnimation = document.querySelectorAll('.skills-animation');
    if (!skillsAnimation.length) {
      return;
    }
    try {
      await loadScript('/assets/vendor/waypoints/noframework.waypoints.js');
      if (typeof Waypoint === 'undefined') {
        return;
      }
      skillsAnimation.forEach((item) => {
        if (item.dataset.waypointInit === 'true') {
          return;
        }
        item.dataset.waypointInit = 'true';
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function() {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Initiate glightbox (lazy-loaded)
   */
  async function initGlightbox() {
    if (!document.querySelector('.glightbox')) {
      return;
    }
    try {
      await loadStyle('/assets/vendor/glightbox/css/glightbox.min.css');
      await loadScript('/assets/vendor/glightbox/js/glightbox.min.js');
      if (typeof GLightbox === 'undefined') {
        return;
      }
      if (window.__glightboxInstance) {
        if (typeof window.__glightboxInstance.reload === 'function') {
          window.__glightboxInstance.reload();
        }
        return;
      }
      window.__glightboxInstance = GLightbox({
        selector: '.glightbox'
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Init isotope layout and filters (lazy-loaded)
   */
  async function initIsotope() {
    const layouts = document.querySelectorAll('.isotope-layout');
    if (!layouts.length) {
      return;
    }
    try {
      await Promise.all([
        loadScript('/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'),
        loadScript('/assets/vendor/isotope-layout/isotope.pkgd.min.js')
      ]);
      if (typeof Isotope === 'undefined' || typeof imagesLoaded === 'undefined') {
        return;
      }
      layouts.forEach(function(isotopeItem) {
        if (isotopeItem.dataset.isotopeInit === 'true') {
          return;
        }
        isotopeItem.dataset.isotopeInit = 'true';
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });

      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Init swiper sliders (lazy-loaded)
   */
  function initSwiperWithCustomPagination(swiperElement, config) {
    new Swiper(swiperElement, config);
  }

  async function initSwiper() {
    const swipers = document.querySelectorAll(".init-swiper");
    if (!swipers.length) {
      return;
    }
    try {
      await loadStyle('/assets/vendor/swiper/swiper-bundle.min.css');
      await loadScript('/assets/vendor/swiper/swiper-bundle.min.js');
      if (typeof Swiper === 'undefined') {
        return;
      }
      swipers.forEach(function(swiperElement) {
        if (swiperElement.dataset.swiperInit === 'true') {
          return;
        }
        swiperElement.dataset.swiperInit = 'true';
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        const getSlidesPerView = (cfg) => {
          if (!cfg) {
            return 1;
          }
          let perView = cfg.slidesPerView;
          const width = window.innerWidth || 0;
          if (cfg.breakpoints && typeof cfg.breakpoints === 'object') {
            const sorted = Object.keys(cfg.breakpoints)
              .map((bp) => Number(bp))
              .filter((bp) => !Number.isNaN(bp))
              .sort((a, b) => a - b);
            sorted.forEach((bp) => {
              if (width >= bp) {
                const bpConfig = cfg.breakpoints[bp];
                if (bpConfig && bpConfig.slidesPerView !== undefined) {
                  perView = bpConfig.slidesPerView;
                }
              }
            });
          }
          if (perView === 'auto' || perView === undefined || perView === null) {
            return 1;
          }
          const parsed = Number(perView);
          return Number.isNaN(parsed) ? 1 : parsed;
        };

        const slidesCount = swiperElement.querySelectorAll('.swiper-slide').length;
        if (config.loop) {
          const perView = getSlidesPerView(config);
          if (slidesCount <= perView || slidesCount < 2) {
            config.loop = false;
          }
        }

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  const initEnhancements = () => {
    aosInit();
    initTyped();
    initPureCounter();
    initSkillsAnimation();
    initGlightbox();
    initIsotope();
    initSwiper();
  };

  /**
   * Load Bootstrap Icons CSS after first user interaction to reduce unused CSS on initial load.
   */
  let iconsLoaded = false;
  const loadIcons = () => {
    if (iconsLoaded) {
      return;
    }
    iconsLoaded = true;
    loadStyle('/assets/vendor/bootstrap-icons/bootstrap-icons.css').catch((error) => {
      console.error(error);
    });
  };

  ['pointerdown', 'touchstart', 'keydown', 'scroll', 'mousemove'].forEach((eventName) => {
    window.addEventListener(eventName, loadIcons, { once: true, passive: true });
  });
  setTimeout(loadIcons, 5000);

  let enhancementScheduled = false;
  const scheduleEnhancements = () => {
    if (enhancementScheduled) {
      return;
    }
    enhancementScheduled = true;
    runWhenIdle(() => {
      enhancementScheduled = false;
      initEnhancements();
    });
  };

  window.addEventListener('load', scheduleEnhancements);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy (cached measurements to avoid forced reflow on scroll)
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');
  let scrollspySections = [];
  let scrollspyTicking = false;

  function collectScrollspySections() {
    navmenulinks = document.querySelectorAll('.navmenu a');
    scrollspySections = [];
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      scrollspySections.push({
        link: navmenulink,
        section,
        top: 0,
        height: 0
      });
    });
    updateScrollspyMeasurements();
  }

  function updateScrollspyMeasurements() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    scrollspySections.forEach((item) => {
      const rect = item.section.getBoundingClientRect();
      item.top = rect.top + scrollY;
      item.height = rect.height;
    });
  }

  function navmenuScrollspy() {
    if (!scrollspySections.length) {
      collectScrollspySections();
    }
    const position = (window.scrollY || 0) + 200;
    scrollspySections.forEach((item) => {
      if (position >= item.top && position <= (item.top + item.height)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        item.link.classList.add('active');
      } else {
        item.link.classList.remove('active');
      }
    });
  }

  const onScrollSpy = () => {
    if (scrollspyTicking) {
      return;
    }
    scrollspyTicking = true;
    requestAnimationFrame(() => {
      navmenuScrollspy();
      scrollspyTicking = false;
    });
  };

  window.addEventListener('load', () => {
    collectScrollspySections();
    navmenuScrollspy();
  });
  window.addEventListener('resize', () => {
    updateScrollspyMeasurements();
    navmenuScrollspy();
  });
  document.addEventListener('scroll', onScrollSpy, { passive: true });

})();
