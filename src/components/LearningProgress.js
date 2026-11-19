/* ==========================================================================
   LearningProgress Component — Honest Knowledge & Learning Stages
   ========================================================================== */

(function (global) {
  'use strict';

  function renderLearningProgress(learning) {
    const columnsHtml = learning.stages
      .map(function (stage) {
        const listHtml = stage.items
          .map(function (item) {
            return '<li>' + item + '</li>';
          })
          .join('');

        return (
          '<div class="learning-col learning-col--' + stage.key + '">' +
            '<div class="learning-col__header">' +
              '<span class="learning-col__dot learning-col__dot--' + stage.key + '" aria-hidden="true"></span>' +
              '<h3 class="learning-col__title">' + stage.title + '</h3>' +
            '</div>' +
            '<p class="learning-col__subtitle">' + stage.subtitle + '</p>' +
            '<ul class="learning-col__list">' + listHtml + '</ul>' +
          '</div>'
        );
      })
      .join('');

    return (
      '<section class="section" id="learning" aria-labelledby="learning-heading">' +
        '<div class="container">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + learning.eyebrow + '</p>' +
            '<h2 class="section__title" id="learning-heading">' + learning.title + '</h2>' +
            '<p class="section__lead">' + learning.lead + '</p>' +
          '</div>' +

          '<div class="learning-ledger reveal">' +
            columnsHtml +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.LearningProgress = { render: renderLearningProgress };
})(window);
