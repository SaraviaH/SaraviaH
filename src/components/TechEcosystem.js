/* ==========================================================================
   TechEcosystem Component — 8 Independent Animated Orbital Planetary Systems
   Supports Paired Batches (Left / Right), Single Focus Mode, and All-8 View.
   ========================================================================== */

(function (global) {
  'use strict';

  function generateParticles(seedIndex, size) {
    const count = size > 560 ? 34 : 26;
    const radii = [0.6, 1.0, 1.35];
    const particles = [];
    let s = (seedIndex + 1) * 7919;

    for (let i = 0; i < count; i++) {
      s = (s * 48271) % 2147483647;
      const x = Math.round((s / 2147483647) * (size - 24) + 12);
      s = (s * 48271) % 2147483647;
      const y = Math.round((s / 2147483647) * (size - 24) + 12);
      const r = radii[i % radii.length];
      const delay = ((i % 7) * 0.6).toFixed(1);
      particles.push(
        '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" ' +
          'fill="var(--orbit-blue, #1793D1)" class="orbit-star" style="animation-delay:' + delay + 's" />'
      );
    }
    return particles.join('');
  }

  function renderCoreVisual(system, cx, cy, icons) {
    const core = system.core;
    const coreRadius = 44;
    let inner = '';

    if (core.type === 'text') {
      inner =
        '<text x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle" ' +
          'font-family="Consolas, Menlo, DejaVu Sans Mono, monospace" ' +
          'font-size="24" font-weight="700" fill="var(--orbit-blue, #1793D1)">' +
          core.value.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
        '</text>';
    } else if (core.type === 'logo') {
      const half = core.size / 2;
      inner =
        '<image href="' + core.logo + '" ' +
          'x="' + (cx - half) + '" y="' + (cy - half) + '" ' +
          'width="' + core.size + '" height="' + core.size + '" ' +
          'preserveAspectRatio="xMidYMid meet" />';
    } else if (core.type === 'icon') {
      const scale = (core.size / 24).toFixed(4);
      const half = core.size / 2;
      inner =
        '<g transform="translate(' + (cx - half) + ' ' + (cy - half) + ') scale(' + scale + ')" ' +
          'fill="none" stroke="var(--orbit-blue, #1793D1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
          icons.getContent(core.icon) +
        '</g>';
    }

    return (
      '<g class="orbit-core" aria-label="Núcleo: ' + core.label + '">' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + (coreRadius + 10) + '" fill="url(#coreGlow-' + system.id + ')" />' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + coreRadius + '" fill="#0D1117" stroke="var(--orbit-blue, #1793D1)" stroke-width="2" />' +
        inner +
      '</g>'
    );
  }

  function renderOrbitSvg(system, systemIndex, icons) {
    const size = system.viewBoxSize || 520;
    const cx = size / 2;
    const cy = size / 2;

    const starsMarkup = generateParticles(systemIndex, size);

    const guidesMarkup = system.orbits
      .map(function (orbit) {
        return (
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + orbit.radius + '" ' +
            'fill="none" stroke="#30363D" stroke-dasharray="4 6" />'
        );
      })
      .join('');

    const ringsMarkup = system.orbits
      .map(function (orbit, orbitIdx) {
        const count = orbit.items.length;
        const oppositeDir = orbit.direction === 'normal' ? 'reverse' : 'normal';
        const startDeg = orbitIdx === 0 ? -90 : orbitIdx === 1 ? -58 : -32;

        const spokesMarkup = system.showCoreLinks
          ? orbit.items
              .map(function (_, idx) {
                const rad = ((startDeg + (360 / count) * idx) * Math.PI) / 180;
                const x = (cx + orbit.radius * Math.cos(rad)).toFixed(1);
                const y = (cy + orbit.radius * Math.sin(rad)).toFixed(1);
                return (
                  '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" ' +
                    'stroke="var(--orbit-blue, #1793D1)" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="2 5" />'
                );
              })
              .join('')
          : '';

        const nodesMarkup = orbit.items
          .map(function (item, idx) {
            const deg = startDeg + (360 / count) * idx;
            const rad = (deg * Math.PI) / 180;
            const x = (cx + orbit.radius * Math.cos(rad)).toFixed(1);
            const y = (cy + orbit.radius * Math.sin(rad)).toFixed(1);
            const halfLogo = (orbit.logoSize / 2).toFixed(1);

            const circleClass = item.isExploring
              ? 'orbit-node__circle orbit-node__circle--exploring'
              : 'orbit-node__circle';

            let visualMarkup;
            if (item.missingAsset) {
              visualMarkup =
                '<circle r="' + (orbit.nodeRadius - 5) + '" fill="none" stroke="#30363D" stroke-dasharray="2 2.5" />' +
                '<text y="4" text-anchor="middle" font-family="Consolas, Menlo, monospace" ' +
                  'font-size="10.5" font-weight="600" fill="#8B949E">' + item.slotCode + '</text>';
            } else {
              visualMarkup =
                '<image class="orbit-node__logo" href="' + item.logo + '" ' +
                  'x="-' + halfLogo + '" y="-' + halfLogo + '" ' +
                  'width="' + orbit.logoSize + '" height="' + orbit.logoSize + '" ' +
                  'preserveAspectRatio="xMidYMid meet" />';
            }

            const labelText = item.isExploring ? item.name + ' *' : item.name;

            return (
              '<g transform="translate(' + x + ' ' + y + ')">' +
                '<g class="orbit-up" style="animation:orbitSpin calc(var(--orbit-dur) * var(--orbit-speed-factor, 1)) linear infinite ' + oppositeDir + '">' +
                  '<rect x="-72" y="-72" width="144" height="144" fill="none" pointer-events="none" />' +
                  '<g class="orbit-node" ' +
                    'data-system-id="' + system.id + '" ' +
                    'data-tech-id="' + item.id + '" ' +
                    'tabindex="0" role="button" ' +
                    'aria-label="' + (item.fullName || item.name) + ' — ' + item.tier + '">' +
                    '<title>' + (item.fullName || item.name) + '</title>' +
                    '<circle class="' + circleClass + '" r="' + orbit.nodeRadius + '" />' +
                    visualMarkup +
                    '<text class="orbit-node__label" y="' + orbit.labelOffset + '" text-anchor="middle" ' +
                      'font-size="' + orbit.labelSize + '">' + labelText + '</text>' +
                  '</g>' +
                '</g>' +
              '</g>'
            );
          })
          .join('');

        return (
          '<g class="orbit-ring" style="transform-origin:' + cx + 'px ' + cy + 'px;--orbit-dur:' + orbit.duration + ';animation:orbitSpin calc(var(--orbit-dur) * var(--orbit-speed-factor, 1)) linear infinite ' + orbit.direction + '">' +
            spokesMarkup +
            nodesMarkup +
          '</g>'
        );
      })
      .join('');

    const stageClass =
      size > 560 ? 'orbit-svg orbit-svg--wide' : 'orbit-svg';

    return (
      '<svg class="' + stageClass + '" ' +
        'data-orbit-system="' + system.id + '" ' +
        'xmlns="http://www.w3.org/2000/svg" ' +
        'viewBox="0 0 ' + size + ' ' + size + '" ' +
        'width="' + size + '" height="' + size + '" ' +
        'role="group" aria-label="Sistema orbital de ' + system.title + '">' +
        '<defs>' +
          '<radialGradient id="coreGlow-' + system.id + '" cx="50%" cy="50%" r="50%">' +
            '<stop offset="0%" stop-color="var(--orbit-blue, #1793D1)" stop-opacity="0.28" />' +
            '<stop offset="65%" stop-color="var(--orbit-blue, #1793D1)" stop-opacity="0.06" />' +
            '<stop offset="100%" stop-color="var(--orbit-blue, #1793D1)" stop-opacity="0" />' +
          '</radialGradient>' +
        '</defs>' +
        '<g aria-hidden="true">' + starsMarkup + '</g>' +
        '<g aria-hidden="true">' + guidesMarkup + '</g>' +
        ringsMarkup +
        renderCoreVisual(system, cx, cy, icons) +
      '</svg>'
    );
  }

  function renderTechDetail(item) {
    const displayName = item.fullName || item.name;
    const badgeClass = item.isExploring
      ? 'orbit-detail__tier orbit-detail__tier--exploring'
      : 'orbit-detail__tier';

    const logoHtml = item.missingAsset
      ? '<span class="orbit-detail__slot" aria-hidden="true">' + item.slotCode + '</span>'
      : '<img class="orbit-detail__logo" src="' + item.logo + '" alt="" width="26" height="26" loading="lazy" />';

    return (
      '<div class="orbit-detail__lead">' +
        '<span class="orbit-detail__icon-wrap">' + logoHtml + '</span>' +
        '<div>' +
          '<h4 class="orbit-detail__name">' + displayName + '</h4>' +
          '<span class="' + badgeClass + '">' + item.tier + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="orbit-detail__desc">' + item.description + '</p>'
    );
  }

  function renderSystemPanel(system, index, icons, isFirst, sideLabel) {
    const defaultTech = system.orbits[0].items[0];
    const hasExploring = system.orbits.some(function (o) {
      return o.items.some(function (i) { return i.isExploring; });
    });

    const totalTechs = system.orbits.reduce(function (acc, o) {
      return acc + o.items.length;
    }, 0);

    return (
      '<article class="orbit-panel' + (isFirst ? ' is-selected' : '') + '" ' +
        'data-panel-id="' + system.id + '" ' +
        'id="orbit-panel-' + system.id + '">' +

        '<header class="orbit-panel__head">' +
          '<div>' +
            '<span class="orbit-panel__index">0' + (index + 1) + ' / 08 · ' + totalTechs + ' tecnologías' +
              (sideLabel ? ' · ' + sideLabel : '') +
            '</span>' +
            '<h3 class="orbit-panel__title">' + system.title + '</h3>' +
            '<p class="orbit-panel__desc">' + system.description + '</p>' +
          '</div>' +
          '<button type="button" class="orbit-motion-btn" data-toggle-motion="' + system.id + '" aria-pressed="false">' +
            'Pausar' +
          '</button>' +
        '</header>' +

        '<div class="orbit-panel__stage">' +
          renderOrbitSvg(system, index, icons) +
        '</div>' +

        '<div class="orbit-detail" data-detail-for="' + system.id + '" aria-live="polite">' +
          renderTechDetail(defaultTech) +
        '</div>' +

        (hasExploring
          ? '<p class="orbit-panel__footnote">* Tecnología en etapa de exploración y aprendizaje activo.</p>'
          : '') +
      '</article>'
    );
  }

  function renderTechEcosystem(ecosystemData) {
    const icons = global.SaraviaProfile.icons;

    const systemMap = {};
    const indexMap = {};
    ecosystemData.systems.forEach(function (sys, idx) {
      systemMap[sys.id] = sys;
      indexMap[sys.id] = idx;
    });

    // Batch Tabs (4 paired Left/Right batches)
    const batchTabsHtml = ecosystemData.batches
      .map(function (batch, idx) {
        return (
          '<button type="button" ' +
            'class="orbit-tab' + (idx === 0 ? ' is-active' : '') + '" ' +
            'role="tab" ' +
            'aria-selected="' + (idx === 0 ? 'true' : 'false') + '" ' +
            'data-batch-target="' + batch.id + '">' +
            '<span class="orbit-tab__num">' + batch.label + '</span>' +
            '<span>' + batch.title + '</span>' +
          '</button>'
        );
      })
      .join('');

    // Single Tabs (8 individual systems)
    const singleTabsHtml = ecosystemData.systems
      .map(function (sys, idx) {
        return (
          '<button type="button" ' +
            'class="orbit-tab' + (idx === 0 ? ' is-active' : '') + '" ' +
            'role="tab" ' +
            'aria-selected="' + (idx === 0 ? 'true' : 'false') + '" ' +
            'aria-controls="orbit-panel-' + sys.id + '" ' +
            'data-tab-target="' + sys.id + '">' +
            '<span class="orbit-tab__num">0' + (idx + 1) + '</span>' +
            '<span>' + sys.shortTitle + '</span>' +
          '</button>'
        );
      })
      .join('');

    // Render all 4 paired batches (Izquierda | Derecha)
    const batchesHtml = ecosystemData.batches
      .map(function (batch, bIdx) {
        const leftSys = systemMap[batch.left];
        const rightSys = systemMap[batch.right];
        const leftHtml = leftSys
          ? renderSystemPanel(leftSys, indexMap[leftSys.id], icons, bIdx === 0, 'Izquierda')
          : '';
        const rightHtml = rightSys
          ? renderSystemPanel(rightSys, indexMap[rightSys.id], icons, false, 'Derecha')
          : '';

        return (
          '<div class="orbit-batch' + (bIdx === 0 ? ' is-batch-active' : '') + '" data-batch-id="' + batch.id + '">' +
            '<div class="orbit-batch__banner">' +
              '<span class="orbit-batch__tag">' + batch.label + '</span>' +
              '<span class="orbit-batch__title">' + batch.title + '</span>' +
            '</div>' +
            '<div class="orbit-batch__grid">' +
              leftHtml +
              rightHtml +
            '</div>' +
          '</div>'
        );
      })
      .join('');

    return (
      '<section class="section" id="ecosystem" aria-labelledby="ecosystem-heading">' +
        '<div class="container container--wide">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + ecosystemData.eyebrow + '</p>' +
            '<h2 class="section__title" id="ecosystem-heading">' + ecosystemData.title + '</h2>' +
            '<p class="section__lead">' + ecosystemData.lead + '</p>' +
          '</div>' +

          '<div class="orbit-controls reveal">' +
            '<div class="orbit-controls__nav">' +
              '<div class="orbit-tabs orbit-tabs--batches" role="tablist" aria-label="Lotes tecnológicos">' +
                batchTabsHtml +
              '</div>' +
              '<div class="orbit-tabs orbit-tabs--single" role="tablist" aria-label="Especialidades individuales" hidden>' +
                singleTabsHtml +
              '</div>' +
              '<span class="orbit-all-note" id="orbit-all-note" hidden>Mostrando los 4 lotes (8 sistemas orbitales independientes)</span>' +
            '</div>' +

            '<div class="orbit-mode-switch" role="group" aria-label="Modo de visualización">' +
              '<button type="button" class="orbit-mode-btn is-active" data-eco-mode="batches" aria-pressed="true">Por lotes</button>' +
              '<button type="button" class="orbit-mode-btn" data-eco-mode="single" aria-pressed="false">Individual</button>' +
              '<button type="button" class="orbit-mode-btn" data-eco-mode="all" aria-pressed="false">Ver los 8</button>' +
            '</div>' +
          '</div>' +

          '<div class="orbit-panels reveal" id="orbit-panels" data-view-mode="batches">' +
            batchesHtml +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  let controller = null;

  function bindTechEcosystem(ecosystemData) {
    const section = document.getElementById('ecosystem');
    const panelsWrap = document.getElementById('orbit-panels');
    if (!section || !panelsWrap) return;

    const batchTabsWrap = section.querySelector('.orbit-tabs--batches');
    const singleTabsWrap = section.querySelector('.orbit-tabs--single');
    const allNote = document.getElementById('orbit-all-note');

    const techLookup = {};
    ecosystemData.systems.forEach(function (sys) {
      techLookup[sys.id] = {};
      sys.orbits.forEach(function (orbit) {
        orbit.items.forEach(function (item) {
          techLookup[sys.id][item.id] = item;
        });
      });
    });

    function selectTech(systemId, techId) {
      const item = techLookup[systemId] && techLookup[systemId][techId];
      if (!item) return;

      const panel = section.querySelector('[data-panel-id="' + systemId + '"]');
      if (!panel) return;

      const detail = panel.querySelector('[data-detail-for="' + systemId + '"]');
      if (detail) {
        detail.innerHTML = renderTechDetail(item);
      }

      panel.querySelectorAll('.orbit-node').forEach(function (node) {
        const isCurrent = node.getAttribute('data-tech-id') === techId;
        node.classList.toggle('is-selected', isCurrent);
        node.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });
    }

    function activateBatch(batchId) {
      section.querySelectorAll('[data-batch-target]').forEach(function (tab) {
        const match = tab.getAttribute('data-batch-target') === batchId;
        tab.classList.toggle('is-active', match);
        tab.setAttribute('aria-selected', match ? 'true' : 'false');
      });

      section.querySelectorAll('.orbit-batch').forEach(function (batchEl) {
        const match = batchEl.getAttribute('data-batch-id') === batchId;
        batchEl.classList.toggle('is-batch-active', match);
      });

      if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
        global.SaraviaProfile.observer.refreshOrbits();
      }
    }

    function activateSingleTab(systemId) {
      section.querySelectorAll('[data-tab-target]').forEach(function (tab) {
        const match = tab.getAttribute('data-tab-target') === systemId;
        tab.classList.toggle('is-active', match);
        tab.setAttribute('aria-selected', match ? 'true' : 'false');
      });

      section.querySelectorAll('.orbit-panel').forEach(function (panel) {
        const match = panel.getAttribute('data-panel-id') === systemId;
        panel.classList.toggle('is-selected', match);
      });

      if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
        global.SaraviaProfile.observer.refreshOrbits();
      }
    }

    function setViewMode(mode, notify) {
      const valid = mode === 'batches' || mode === 'single' || mode === 'all' ? mode : 'batches';
      panelsWrap.setAttribute('data-view-mode', valid);

      if (batchTabsWrap) batchTabsWrap.hidden = valid !== 'batches';
      if (singleTabsWrap) singleTabsWrap.hidden = valid !== 'single';
      if (allNote) allNote.hidden = valid !== 'all';

      section.querySelectorAll('[data-eco-mode]').forEach(function (btn) {
        const active = btn.getAttribute('data-eco-mode') === valid;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
        global.SaraviaProfile.observer.refreshOrbits();
      }

      if (notify) {
        document.dispatchEvent(new CustomEvent('saraviah:viewmode', { detail: { mode: valid } }));
      }
    }

    controller = { setViewMode: setViewMode };

    // Batch tab clicks
    section.querySelectorAll('[data-batch-target]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateBatch(tab.getAttribute('data-batch-target'));
      });
    });

    // Single tab clicks
    section.querySelectorAll('[data-tab-target]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateSingleTab(tab.getAttribute('data-tab-target'));
      });
    });

    // View mode switch clicks
    section.querySelectorAll('[data-eco-mode]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setViewMode(btn.getAttribute('data-eco-mode'), true);
      });
    });

    // Per-system pause/resume button
    section.querySelectorAll('.orbit-motion-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const sysId = btn.getAttribute('data-toggle-motion');
        const svg = section.querySelector('.orbit-svg[data-orbit-system="' + sysId + '"]');
        if (!svg) return;
        const nextPaused = svg.getAttribute('data-user-paused') !== 'true';
        svg.setAttribute('data-user-paused', nextPaused ? 'true' : 'false');
        btn.setAttribute('aria-pressed', nextPaused ? 'true' : 'false');
        btn.textContent = nextPaused ? 'Reanudar' : 'Pausar';
        if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
          global.SaraviaProfile.observer.refreshOrbits();
        }
      });
    });

    // Interactive tech selection
    section.querySelectorAll('.orbit-node').forEach(function (node) {
      const sysId = node.getAttribute('data-system-id');
      const techId = node.getAttribute('data-tech-id');

      node.addEventListener('click', function () {
        selectTech(sysId, techId);
      });

      node.addEventListener('focus', function () {
        selectTech(sysId, techId);
      });

      node.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectTech(sysId, techId);
        }
      });
    });

    ecosystemData.systems.forEach(function (sys) {
      const firstItem = sys.orbits[0].items[0];
      if (firstItem) {
        selectTech(sys.id, firstItem.id);
      }
    });
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.TechEcosystem = {
    render: renderTechEcosystem,
    bind: bindTechEcosystem,
    setViewMode: function (mode) {
      if (controller && controller.setViewMode) {
        controller.setViewMode(mode, false);
      }
    }
  };
})(window);
