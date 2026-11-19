/* ==========================================================================
   AboutSection Component — Editorial "A little about me"
   ========================================================================== */

(function (global) {
  'use strict';

  function renderAboutSection(about) {
    const paragraphsHtml = about.paragraphs
      .map(function (text) {
        return '<p>' + text + '</p>';
      })
      .join('');

    const pillarsHtml = about.pillars
      .map(function (item) {
        return '<li>' + item + '</li>';
      })
      .join('');

    return (
      '<section class="section" id="about" aria-labelledby="about-heading">' +
        '<div class="container container--editorial">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + about.eyebrow + '</p>' +
            '<h2 class="section__title" id="about-heading">' + about.title + '</h2>' +
          '</div>' +

          '<div class="about__body reveal">' +
            paragraphsHtml +
          '</div>' +

          '<ul class="about__pillars reveal">' +
            pillarsHtml +
          '</ul>' +
        '</div>' +
      '</section>'
    );
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.AboutSection = { render: renderAboutSection };
})(window);
