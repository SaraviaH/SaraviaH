/* ==========================================================================
   InterestAreas Component — Four Discrete Visual Blocks with Simple SVGs
   ========================================================================== */

(function (global) {
  'use strict';

  function renderInterestAreas(interestAreas) {
    const icons = global.SaraviaProfile.icons;

    const blocksHtml = interestAreas.items
      .map(function (item) {
        const iconClass =
          item.accent === 'green'
            ? 'area-block__icon area-block__icon--accent'
            : 'area-block__icon';

        return (
          '<article class="area-block">' +
            icons.render(item.icon, iconClass) +
            '<h3 class="area-block__title">' + item.title + '</h3>' +
            '<p class="area-block__desc">' + item.description + '</p>' +
          '</article>'
        );
      })
      .join('');

    return (
      '<section class="section" id="areas" aria-labelledby="areas-heading">' +
        '<div class="container">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + interestAreas.eyebrow + '</p>' +
            '<h2 class="section__title" id="areas-heading">' + interestAreas.title + '</h2>' +
          '</div>' +

          '<div class="areas-grid reveal">' +
            blocksHtml +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.InterestAreas = { render: renderInterestAreas };
})(window);
