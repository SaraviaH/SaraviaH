/* ==========================================================================
   Footer Component — Minimalist Identity, Links & Dynamic Copyright
   ========================================================================== */

(function (global) {
  'use strict';

  function renderFooter(footer) {
    const icons = global.SaraviaProfile.icons;
    const year = new Date().getFullYear();

    const linksHtml = footer.links
      .map(function (link) {
        const attrs = link.external
          ? ' target="_blank" rel="noopener noreferrer"'
          : '';
        return (
          '<a class="site-footer__link" href="' + link.href + '"' + attrs + '>' +
            icons.render(link.icon) +
            '<span>' + link.label + '</span>' +
          '</a>'
        );
      })
      .join('');

    return (
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="site-footer__inner">' +
            '<div class="site-footer__brand">' +
              '<span class="site-footer__name">' + footer.identity + '</span>' +
              '<p class="site-footer__motto">' + footer.motto + '</p>' +
            '</div>' +

            '<div class="site-footer__meta">' +
              '<nav class="site-footer__links" aria-label="Enlaces profesionales">' +
                linksHtml +
              '</nav>' +
              '<p class="site-footer__copy">&copy; ' + year + ' ' + footer.identity + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.Footer = { render: renderFooter };
})(window);
