/* ==========================================================================
   Hero Component — Centered Full 2:1 Transparent PNG + Identity Below
   ========================================================================== */

(function (global) {
  'use strict';

  function renderHero(identity) {
    const bioHtml = identity.description
      .map(function (paragraph) {
        return '<p>' + paragraph + '</p>';
      })
      .join('');

    const navHtml = identity.quickNav
      .map(function (item) {
        return '<a href="' + item.href + '">' + item.label + '</a>';
      })
      .join('');

    return (
      '<header class="hero" id="top">' +
        '<div class="hero__media">' +
          '<img ' +
            'class="hero__image" ' +
            'src="' + identity.heroImage.src + '" ' +
            'alt="' + identity.heroImage.alt + '" ' +
            'width="' + identity.heroImage.width + '" ' +
            'height="' + identity.heroImage.height + '" ' +
            'fetchpriority="high" ' +
          '/>' +
        '</div>' +

        '<div class="container container--editorial">' +
          '<div class="hero__identity">' +
            '<h1 class="hero__name">' + identity.name + '</h1>' +
            '<div class="hero__titles">' +
              '<p class="hero__role">' + identity.role + '</p>' +
              '<p class="hero__focus">' + identity.focus + '</p>' +
            '</div>' +

            '<div class="hero__divider" aria-hidden="true"></div>' +

            '<div class="hero__bio">' +
              bioHtml +
            '</div>' +

            '<nav class="hero__nav" aria-label="Secciones del perfil">' +
              navHtml +
            '</nav>' +
          '</div>' +
        '</div>' +
      '</header>'
    );
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.Hero = { render: renderHero };
})(window);
