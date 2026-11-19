/* ==========================================================================
   TechEcosystem Component — 8 Independent Animated Orbital Planetary Systems
   Visual DNA faithfully derived from the user's reference SVG.
   ========================================================================== */

(function (global) {
  'use strict';

  function generateParticles(seedIndex, size) {
    // Deterministic subtle particle field (28 crisp #1793D1 micro-stars per system)
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
          'fill="#1793D1" class="orbit-star" style="animation-delay:' + delay + 's" />'
      );
    }
    return particles.join('');
  }

  function renderCoreVisual(core, cx, cy, icons) {
    const coreRadius = 44;
    let inner = '';

    if (core.type === 'text') {
      inner =
        '<text x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle" ' +
          'font-family="Consolas, Menlo, DejaVu Sans Mono, monospace" ' +
          'font-size="24" font-weight="700" fill="#1793D1">' +
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
          'fill="none" stroke="#1793D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
          icons.getContent(core.icon) +
        '</g>';
    }

    return (
      '<g class="orbit-core" aria-label="Núcleo: ' + core.label + '">' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + (coreRadius + 10) + '" fill="url(#coreGlow-' + cx + ')" />' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + coreRadius + '" fill="#0D1117" stroke="#1793D1" stroke-width="2" />' +
        inner +
      '</g>'
    );
  }

  function renderOrbitSvg(system, systemIndex, icons) {
    const size = system.viewBoxSize || 520;
    const cx = size / 2;
    const cy = size / 2;

    // 1. Subtle twinkling space particles
    const starsMarkup = generateParticles(systemIndex, size);

    // 2. Concentric dashed circular orbits
    const guidesMarkup = system.orbits
      .map(function (orbit) {
        return (
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + orbit.radius + '" ' +
            'fill="none" stroke="#30363D" stroke-dasharray="4 6" />'
        );
      })
      .join('');

    // 3. Rotating orbital rings with counter-rotating upright technology nodes
    const ringsMarkup = system.orbits
      .map(function (orbit, orbitIdx) {
        const count = orbit.items.length;
        const oppositeDir = orbit.direction === 'normal' ? 'reverse' : 'normal';
        // Slight angular offset per orbit so nodes don't stack vertically at t=0
        const startDeg = orbitIdx === 0 ? -90 : orbitIdx === 1 ? -58 : -32;

        const spokesMarkup = system.showCoreLinks
          ? orbit.items
              .map(function (_, idx) {
                const rad = ((startDeg + (360 / count) * idx) * Math.PI) / 180;
                const x = (cx + orbit.radius * Math.cos(rad)).toFixed(1);
                const y = (cy + orbit.radius * Math.sin(rad)).toFixed(1);
                return (
                  '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" ' +
                    'stroke="#1793D1" stroke-opacity="0.16" stroke-width="1" stroke-dasharray="2 5" />'
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
                '<g class="orbit-up" style="animation:orbitSpin ' + orbit.duration + ' linear infinite ' + oppositeDir + '">' +
                  // Exact symmetric invisible bounding box guarantees dead-center counter-rotation (zero wobble)
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
          '<g class="orbit-ring" style="transform-origin:' + cx + 'px ' + cy + 'px;animation:orbitSpin ' + orbit.duration + ' linear infinite ' + orbit.direction + '">' +
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
          '<radialGradient id="coreGlow-' + cx + '" cx="50%" cy="50%" r="50%">' +
            '<stop offset="0%" stop-color="#1793D1" stop-opacity="0.28" />' +
            '<stop offset="65%" stop-color="#1793D1" stop-opacity="0.06" />' +
            '<stop offset="100%" stop-color="#1793D1" stop-opacity="0" />' +
          '</radialGradient>' +
        '</defs>' +
        '<g aria-hidden="true">' + starsMarkup + '</g>' +
        '<g aria-hidden="true">' + guidesMarkup + '</g>' +
        ringsMarkup +
        renderCoreVisual(system.core, cx, cy, icons) +
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

  function renderSystemPanel(system, index, icons, isFirst) {
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
            '<span class="orbit-panel__index">0' + (index + 1) + ' / 08 · ' + totalTechs + ' tecnologías</span>' +
            '<h3 class="orbit-panel__title">' + system.title + '</h3>' +
            '<p class="orbit-panel__desc">' + system.description + '</p>' +
          '</div>' +
          '<button type="button" class="orbit-motion-btn" data-toggle-motion="' + system.id + '" aria-pressed="false">' +
            'Pausar órbitas' +
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

    const tabsHtml = ecosystemData.systems
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

    const panelsHtml = ecosystemData.systems
      .map(function (sys, idx) {
        return renderSystemPanel(sys, idx, icons, idx === 0);
      })
      .join('');

    return (
      '<section class="section" id="ecosystem" aria-labelledby="ecosystem-heading">' +
        '<div class="container">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + ecosystemData.eyebrow + '</p>' +
            '<h2 class="section__title" id="ecosystem-heading">' + ecosystemData.title + '</h2>' +
            '<p class="section__lead">' + ecosystemData.lead + '</p>' +
          '</div>' +

          '<div class="orbit-controls reveal">' +
            '<div class="orbit-tabs" role="tablist" aria-label="Especialidades tecnológicas">' +
              tabsHtml +
            '</div>' +
            '<button type="button" class="orbit-view-toggle" id="orbit-view-toggle" aria-pressed="false">' +
              'Ver los 8 sistemas' +
            '</button>' +
          '</div>' +

          '<div class="orbit-panels reveal" id="orbit-panels" data-view-mode="single">' +
            panelsHtml +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function bindTechEcosystem(ecosystemData) {
    const section = document.getElementById('ecosystem');
    const panelsWrap = document.getElementById('orbit-panels');
    const viewToggle = document.getElementById('orbit-view-toggle');
    if (!section || !panelsWrap) return;

    // Index all technologies by system + tech id
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

    function activateTab(systemId) {
      section.querySelectorAll('.orbit-tab').forEach(function (tab) {
        const match = tab.getAttribute('data-tab-target') === systemId;
        tab.classList.toggle('is-active', match);
        tab.setAttribute('aria-selected', match ? 'true' : 'false');
      });

      section.querySelectorAll('.orbit-panel').forEach(function (panel) {
        const match = panel.getAttribute('data-panel-id') === systemId;
        panel.classList.toggle('is-selected', match);
      });

      // Notify motion observer so only visible SVGs animate
      if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
        global.SaraviaProfile.observer.refreshOrbits();
      }
    }

    // Tabs switching
    section.querySelectorAll('.orbit-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (panelsWrap.getAttribute('data-view-mode') === 'all') {
          panelsWrap.setAttribute('data-view-mode', 'single');
          if (viewToggle) {
            viewToggle.setAttribute('aria-pressed', 'false');
            viewToggle.textContent = 'Ver los 8 sistemas';
          }
        }
        activateTab(tab.getAttribute('data-tab-target'));
      });
    });

    // Toggle between focused single-system mode and vertical all-8 mode
    if (viewToggle) {
      viewToggle.addEventListener('click', function () {
        const isAll = panelsWrap.getAttribute('data-view-mode') === 'all';
        const nextMode = isAll ? 'single' : 'all';
        panelsWrap.setAttribute('data-view-mode', nextMode);
        viewToggle.setAttribute('aria-pressed', nextMode === 'all' ? 'true' : 'false');
        viewToggle.textContent = nextMode === 'all' ? 'Explorar uno a uno' : 'Ver los 8 sistemas';

        if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
          global.SaraviaProfile.observer.refreshOrbits();
        }
      });
    }

    // Per-system pause/resume motion button
    section.querySelectorAll('.orbit-motion-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const sysId = btn.getAttribute('data-toggle-motion');
        const svg = section.querySelector('.orbit-svg[data-orbit-system="' + sysId + '"]');
        if (!svg) return;
        const nextPaused = svg.getAttribute('data-user-paused') !== 'true';
        svg.setAttribute('data-user-paused', nextPaused ? 'true' : 'false');
        svg.classList.toggle('is-paused', nextPaused);
        btn.setAttribute('aria-pressed', nextPaused ? 'true' : 'false');
        btn.textContent = nextPaused ? 'Reanudar órbitas' : 'Pausar órbitas';
      });
    });

    // Interactive hover/focus/click on every orbiting technology logo
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

    // Mark initial selected node for each system
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
    bind: bindTechEcosystem
  };
})(window);
