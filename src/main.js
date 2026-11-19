/* ==========================================================================
   Application Entrypoint — Component Composition & Progressive Hydration
   ========================================================================== */

(function (global) {
  'use strict';

  function mountApp() {
    const root = document.getElementById('app');
    const app = global.SaraviaProfile;
    if (!root || !app || !app.data) return;

    const data = app.data;
    const ecosystem = app.ecosystemData;

    root.innerHTML =
      app.Hero.render(data.identity) +
      '<main id="main-content">' +
        app.TechEcosystem.render(ecosystem) +
        app.AboutSection.render(data.about) +
        app.InterestAreas.render(data.interestAreas) +
        app.LearningProgress.render(data.learning) +
      '</main>' +
      app.Footer.render(data.footer);

    app.TechEcosystem.bind(ecosystem);
    app.observer.init();

    // Support deep links (e.g. #ecosystem, #about, #areas, #learning) after dynamic mount
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountApp);
  } else {
    mountApp();
  }
})(window);
