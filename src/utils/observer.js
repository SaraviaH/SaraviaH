/* ==========================================================================
   Progressive Reveal & Lazy Orbital Animation Controller
   Only animates orbital SVGs that are both visible in the DOM and viewport.
   ========================================================================== */

(function (global) {
  'use strict';

  let orbitObserver = null;
  let reducedMotion = false;

  function isElementDisplayed(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight + 60 && rect.bottom > -60;
  }

  function syncOrbitPause(svg, inView) {
    const userPaused = svg.getAttribute('data-user-paused') === 'true';
    const shouldPause = reducedMotion || userPaused || !inView || !isElementDisplayed(svg);
    svg.classList.toggle('is-paused', shouldPause);
  }

  function refreshOrbits() {
    const orbitSvgs = document.querySelectorAll('.orbit-svg');
    orbitSvgs.forEach(function (svg) {
      syncOrbitPause(svg, isInViewport(svg));
    });
  }

  function initObservers() {
    reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = document.querySelectorAll('.reveal');
    const orbitSvgs = document.querySelectorAll('.orbit-svg');

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      revealElements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      orbitSvgs.forEach(function (svg) {
        syncOrbitPause(svg, !reducedMotion);
      });
      return;
    }

    // Progressive editorial reveal
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 24px 0px', threshold: 0.01 }
    );

    revealElements.forEach(function (el) {
      if (isInViewport(el)) {
        el.classList.add('is-visible');
      } else {
        revealObserver.observe(el);
      }
    });

    // Per-system orbital SVG observer — pauses offscreen & hidden tabs cleanly
    orbitObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          syncOrbitPause(entry.target, entry.isIntersecting);
        });
      },
      { rootMargin: '60px 0px 60px 0px', threshold: 0.01 }
    );

    orbitSvgs.forEach(function (svg) {
      syncOrbitPause(svg, isInViewport(svg));
      orbitObserver.observe(svg);
    });
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.observer = {
    init: initObservers,
    refreshOrbits: refreshOrbits
  };
})(window);
