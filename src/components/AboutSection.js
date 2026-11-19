/* ==========================================================================
   AboutSection Component — 2-Column Editorial Split (Left: Bio | Right: Research)
   ========================================================================== */

(function (global) {
  'use strict';

  function renderAboutSection(about) {
    const icons = global.SaraviaProfile.icons;

    const paragraphsHtml = about.left.paragraphs
      .map(function (text) {
        return '<p>' + text + '</p>';
      })
      .join('');

    const focusHtml = about.right.focusPoints
      .map(function (item) {
        return '<li>' + item + '</li>';
      })
      .join('');

    return (
      '<section class="section" id="about" aria-labelledby="about-heading">' +
        '<div class="container container--wide">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + about.eyebrow + '</p>' +
            '<h2 class="section__title" id="about-heading">' + about.title + '</h2>' +
          '</div>' +

          '<div class="about-split reveal">' +
            '<div class="about-split__col about-split__col--left">' +
              '<h3 class="about-split__heading">' + about.left.title + '</h3>' +
              '<div class="about__body">' +
                paragraphsHtml +
              '</div>' +
            '</div>' +

            '<div class="about-split__col about-split__col--right">' +
              '<h3 class="about-split__heading about-split__heading--icon">' +
                icons.render(about.right.icon, 'about-split__icon') +
                '<span>' + about.right.title + '</span>' +
              '</h3>' +
              '<p class="about-split__lead">' + about.right.lead + '</p>' +
              '<ul class="about__pillars">' +
                focusHtml +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.AboutSection = { render: renderAboutSection };
})(window);
