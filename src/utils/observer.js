/* ==========================================================================
   Progressive Reveal & Lazy SVG Animation Controller
   ========================================================================== */

(function (global) {
  'use strict';

  function initObservers() {
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = document.querySelectorAll('.reveal');
    const ecosystemSvgs = document.querySelectorAll('.ecosystem-svg');

    // Respect prefers-reduced-motion immediately
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      revealElements.forEach(function (el) {
        el.classList.add('is-visible');
      });

      ecosystemSvgs.forEach(function (svg) {
        svg.classList.add('is-visible');
        if (prefersReducedMotion) {
          svg.classList.add('is-paused');
          if (typeof svg.pauseAnimations === 'function') {
            svg.pauseAnimations();
          }
          // Hide traveling dots statically when reduced motion is preferred
          svg.querySelectorAll('.eco-pulses').forEach(function (g) {
            g.setAttribute('display', 'none');
          });
        }
      });
      return;
    }

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight + 40 && rect.bottom > -40;
    }

    function activateEcosystem() {
      ecosystemSvgs.forEach(function (svg) {
        svg.classList.add('is-visible');
        svg.classList.remove('is-paused');
        if (typeof svg.unpauseAnimations === 'function') {
          svg.unpauseAnimations();
        }
      });
    }

    function pauseEcosystem() {
      ecosystemSvgs.forEach(function (svg) {
        svg.classList.add('is-paused');
        if (typeof svg.pauseAnimations === 'function') {
          svg.pauseAnimations();
        }
      });
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

    // Activate & pause SVG animations strictly while in viewport
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      if (isInViewport(ecosystemSection)) {
        activateEcosystem();
      } else {
        pauseEcosystem();
      }

      const svgObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              activateEcosystem();
            } else {
              pauseEcosystem();
            }
          });
        },
        { rootMargin: '80px 0px 80px 0px', threshold: 0.01 }
      );

      svgObserver.observe(ecosystemSection);
    }
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.observer = { init: initObservers };
})(window);
