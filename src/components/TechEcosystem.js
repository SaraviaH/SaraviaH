/* ==========================================================================
   TechEcosystem Component — Interconnected Animated SVG Icon Network
   ========================================================================== */

(function (global) {
  'use strict';

  function buildNetworkSvg(ecosystem, variant) {
    const isMobile = variant === 'mobile';
    const width = isMobile ? 360 : 920;
    const height = isMobile ? 558 : 394;
    const nodeRadius = isMobile ? 25 : 28;
    const icons = global.SaraviaProfile.icons;

    const nodeMap = {};
    ecosystem.nodes.forEach(function (node) {
      nodeMap[node.id] = node;
    });

    // Build SVG edges
    const edgesMarkup = ecosystem.edges
      .map(function (pair) {
        const a = nodeMap[pair[0]][variant];
        const b = nodeMap[pair[1]][variant];
        return (
          '<line class="eco-edge" ' +
          'data-from="' + pair[0] + '" data-to="' + pair[1] + '" ' +
          'x1="' + a.x + '" y1="' + a.y + '" ' +
          'x2="' + b.x + '" y2="' + b.y + '" />'
        );
      })
      .join('');

    // Build motion paths & luminous traveling pulses
    const pulsePathsDefs = [];
    const pulseCircles = [];

    ecosystem.pulses.forEach(function (pulse, index) {
      const pathId = 'eco-route-' + variant + '-' + index;
      const d = pulse.route
        .map(function (nodeId, step) {
          const pt = nodeMap[nodeId][variant];
          return (step === 0 ? 'M ' : 'L ') + pt.x + ' ' + pt.y;
        })
        .join(' ');

      pulsePathsDefs.push('<path id="' + pathId + '" d="' + d + '" />');
      pulseCircles.push(
        '<circle class="eco-pulse-dot" r="2.2" fill="' + pulse.color + '" filter="url(#ecoGlow-' + variant + ')">' +
          '<animateMotion dur="' + pulse.dur + '" begin="' + pulse.begin + '" repeatCount="indefinite" calcMode="linear">' +
            '<mpath href="#' + pathId + '" />' +
          '</animateMotion>' +
        '</circle>'
      );
    });

    // Build icon nodes (pure icon-only, accessible title & role)
    const nodesMarkup = ecosystem.nodes
      .map(function (node, index) {
        const pt = node[variant];
        const delayMs = 40 + index * 32;
        const classes = ['eco-node'];
        if (node.isCore) classes.push('eco-node--core');
        if (node.isLearning) classes.push('eco-node--learning');

        const pulseRing = node.isCore
          ? '<circle class="eco-node__pulse ' + (node.pulseDelay || '') + '" cx="0" cy="0" r="' + (nodeRadius + 2) + '" />'
          : node.isLearning
          ? '<circle class="eco-node__pulse eco-node__pulse--green eco-node__pulse--delay-2" cx="0" cy="0" r="' + (nodeRadius + 2) + '" />'
          : '';

        const iconOffset = -12;

        return (
          '<g class="' + classes.join(' ') + '" ' +
            'data-node-id="' + node.id + '" ' +
            'transform="translate(' + pt.x + ',' + pt.y + ')" ' +
            'style="transition-delay:' + delayMs + 'ms" ' +
            'tabindex="0" role="button" aria-label="' + node.title + ' — ' + node.stage + '">' +
            '<title>' + node.title + '</title>' +
            pulseRing +
            '<g class="eco-node__inner">' +
              '<circle class="eco-node__circle" cx="0" cy="0" r="' + nodeRadius + '" />' +
              '<g class="eco-node__icon" transform="translate(' + iconOffset + ',' + iconOffset + ')">' +
                icons.getContent(node.icon) +
              '</g>' +
            '</g>' +
          '</g>'
        );
      })
      .join('');

    return (
      '<svg class="ecosystem-svg ecosystem-svg--' + variant + '" ' +
        'viewBox="0 0 ' + width + ' ' + height + '" ' +
        'width="' + width + '" height="' + height + '" ' +
        'role="group" aria-label="Red interconectada de ámbitos tecnológicos">' +
        '<defs>' +
          '<filter id="ecoGlow-' + variant + '" x="-100%" y="-100%" width="300%" height="300%">' +
            '<feGaussianBlur stdDeviation="2.2" result="blur" />' +
            '<feMerge>' +
              '<feMergeNode in="blur" />' +
              '<feMergeNode in="SourceGraphic" />' +
            '</feMerge>' +
          '</filter>' +
          pulsePathsDefs.join('') +
        '</defs>' +
        '<g class="eco-edges">' + edgesMarkup + '</g>' +
        '<g class="eco-pulses" aria-hidden="true">' + pulseCircles.join('') + '</g>' +
        '<g class="eco-nodes">' + nodesMarkup + '</g>' +
      '</svg>'
    );
  }

  function renderInspectorContent(node) {
    const dotClass = node.isLearning
      ? 'ecosystem__inspector-dot ecosystem__inspector-dot--learning'
      : 'ecosystem__inspector-dot';

    const itemsHtml = node.points
      .map(function (point) {
        return '<li>' + point + '</li>';
      })
      .join('');

    return (
      '<div class="ecosystem__inspector-meta">' +
        '<h3 class="ecosystem__inspector-title">' + node.title + '</h3>' +
        '<span class="ecosystem__inspector-tag">' +
          '<span class="' + dotClass + '" aria-hidden="true"></span>' +
          node.stage +
        '</span>' +
      '</div>' +
      '<ul class="ecosystem__inspector-list">' + itemsHtml + '</ul>'
    );
  }

  const DEFAULT_OVERVIEW = {
    title: 'Ecosistema conectado',
    stage: '10 ámbitos · Red de desarrollo',
    isLearning: false,
    points: [
      'Desarrollo web y aplicaciones móviles',
      'Programación y arquitectura de software',
      'Bases de datos e infraestructura',
      'Diseño UX y fundamentos de ciberseguridad'
    ]
  };

  function renderTechEcosystem(ecosystem) {
    return (
      '<section class="section" id="ecosystem" aria-labelledby="ecosystem-heading">' +
        '<div class="container">' +
          '<div class="section__header reveal">' +
            '<p class="section__eyebrow">' + ecosystem.eyebrow + '</p>' +
            '<h2 class="section__title" id="ecosystem-heading">' + ecosystem.title + '</h2>' +
            '<p class="section__lead">' + ecosystem.lead + '</p>' +
          '</div>' +

          '<div class="ecosystem__stage reveal">' +
            '<div class="ecosystem__canvas">' +
              buildNetworkSvg(ecosystem, 'desktop') +
              buildNetworkSvg(ecosystem, 'mobile') +
            '</div>' +
            '<div class="ecosystem__inspector" id="ecosystem-inspector" aria-live="polite">' +
              renderInspectorContent(DEFAULT_OVERVIEW) +
            '</div>' +
          '</div>' +
          '<p class="ecosystem__hint reveal">' + ecosystem.hint + '</p>' +
        '</div>' +
      '</section>'
    );
  }

  function bindTechEcosystem(ecosystem) {
    const section = document.getElementById('ecosystem');
    const inspector = document.getElementById('ecosystem-inspector');
    if (!section || !inspector) return;

    const nodeMap = {};
    ecosystem.nodes.forEach(function (n) {
      nodeMap[n.id] = n;
    });

    let pinnedId = null;

    function resetNetwork() {
      inspector.innerHTML = renderInspectorContent(DEFAULT_OVERVIEW);
      section.querySelectorAll('.ecosystem-svg').forEach(function (svg) {
        svg.querySelectorAll('.eco-node').forEach(function (el) {
          el.classList.remove('is-active');
          el.setAttribute('aria-pressed', 'false');
        });
        svg.querySelectorAll('.eco-edge').forEach(function (edge) {
          edge.classList.remove('is-highlighted', 'is-dimmed');
        });
      });
    }

    function setActive(nodeId) {
      const node = nodeMap[nodeId];
      if (!node) {
        resetNetwork();
        return;
      }

      inspector.innerHTML = renderInspectorContent(node);

      section.querySelectorAll('.ecosystem-svg').forEach(function (svg) {
        svg.querySelectorAll('.eco-node').forEach(function (el) {
          const isMatch = el.getAttribute('data-node-id') === nodeId;
          el.classList.toggle('is-active', isMatch);
          el.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
        });

        svg.querySelectorAll('.eco-edge').forEach(function (edge) {
          const from = edge.getAttribute('data-from');
          const to = edge.getAttribute('data-to');
          const connected = from === nodeId || to === nodeId;
          edge.classList.toggle('is-highlighted', connected);
          edge.classList.toggle('is-dimmed', !connected);
        });
      });
    }

    // Bind hover, focus, and click/keyboard toggle across both responsive SVGs
    section.querySelectorAll('.eco-node').forEach(function (el) {
      const id = el.getAttribute('data-node-id');

      el.addEventListener('mouseenter', function () {
        setActive(id);
      });

      el.addEventListener('mouseleave', function () {
        if (pinnedId) {
          setActive(pinnedId);
        } else {
          resetNetwork();
        }
      });

      el.addEventListener('focus', function () {
        setActive(id);
      });

      el.addEventListener('blur', function () {
        if (pinnedId) {
          setActive(pinnedId);
        } else {
          resetNetwork();
        }
      });

      el.addEventListener('click', function () {
        pinnedId = pinnedId === id ? null : id;
        if (pinnedId) {
          setActive(pinnedId);
        } else {
          resetNetwork();
        }
      });

      el.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          pinnedId = pinnedId === id ? null : id;
          if (pinnedId) {
            setActive(pinnedId);
          } else {
            resetNetwork();
          }
        } else if (event.key === 'Escape') {
          pinnedId = null;
          resetNetwork();
        }
      });
    });

    resetNetwork();
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.TechEcosystem = {
    render: renderTechEcosystem,
    bind: bindTechEcosystem
  };
})(window);
