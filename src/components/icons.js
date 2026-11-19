/* ==========================================================================
   Lightweight SVG Icon Primitives (24x24 viewBox, Pure Minimal Strokes)
   ========================================================================== */

(function (global) {
  'use strict';

  const ICON_PATHS = {
    // Código: etiquetas de programación </>
    code:
      '<polyline points="8 7 3 12 8 17" />' +
      '<polyline points="16 7 21 12 16 17" />' +
      '<line x1="13.5" y1="5.5" x2="10.5" y2="18.5" />',

    // Web: ventana de navegador
    web:
      '<rect x="3" y="4" width="18" height="16" rx="2" />' +
      '<line x1="3" y1="9" x2="21" y2="9" />' +
      '<circle cx="6.2" cy="6.5" r="0.65" fill="currentColor" stroke="none" />' +
      '<circle cx="8.7" cy="6.5" r="0.65" fill="currentColor" stroke="none" />',

    // Móvil: smartphone
    mobile:
      '<rect x="7" y="2.5" width="10" height="19" rx="2" />' +
      '<line x1="10.5" y1="18" x2="13.5" y2="18" />',

    // Backend: servidor minimalista
    backend:
      '<rect x="3" y="4" width="18" height="6.5" rx="1.5" />' +
      '<rect x="3" y="13.5" width="18" height="6.5" rx="1.5" />' +
      '<circle cx="6.8" cy="7.25" r="0.8" fill="currentColor" stroke="none" />' +
      '<circle cx="6.8" cy="16.75" r="0.8" fill="currentColor" stroke="none" />' +
      '<line x1="11" y1="7.25" x2="17" y2="7.25" />' +
      '<line x1="11" y1="16.75" x2="17" y2="16.75" />',

    // Bases de datos: cilindro de almacenamiento
    database:
      '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />' +
      '<path d="M4.5 5.5v13c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-13" />' +
      '<path d="M4.5 12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8" />',

    // Ciberseguridad: escudo
    security:
      '<path d="M12 3l7.2 3v5.6c0 4.55-3.05 8.55-7.2 9.9-4.15-1.35-7.2-5.35-7.2-9.9V6L12 3z" />' +
      '<path d="M9.5 12.2l1.8 1.8 3.5-3.8" />',

    // Diseño y UX: cursor + elementos geométricos
    design:
      '<path d="M4.5 4.5l6.2 14.8 2.1-5.6 5.6-2.1L4.5 4.5z" />' +
      '<circle cx="17.5" cy="17.5" r="2.5" />',

    // Cloud: nube
    cloud:
      '<path d="M7 18.5h10.2a4.3 4.3 0 0 0 .75-8.53A5.8 5.8 0 0 0 6.6 8.35 3.9 3.9 0 0 0 7 18.5z" />',

    // Arquitectura: nodos conectados
    architecture:
      '<rect x="9.5" y="3" width="5" height="4.5" rx="1" />' +
      '<rect x="3" y="16.5" width="5" height="4.5" rx="1" />' +
      '<rect x="16" y="16.5" width="5" height="4.5" rx="1" />' +
      '<path d="M12 7.5v4.5M5.5 16.5v-2.2a2.3 2.3 0 0 1 2.3-2.3h8.4a2.3 2.3 0 0 1 2.3 2.3v2.2" />',

    // Versionamiento: ramas de código
    versioning:
      '<circle cx="6.5" cy="6" r="2.2" />' +
      '<circle cx="17.5" cy="6" r="2.2" />' +
      '<circle cx="6.5" cy="18" r="2.2" />' +
      '<line x1="6.5" y1="8.2" x2="6.5" y2="15.8" />' +
      '<path d="M17.5 8.2c0 3.8-3 4.8-11 4.8" />',

    // GitHub minimal icon
    github:
      '<path d="M9 19c-4.5 1.4-4.5-2.3-6.3-2.8m12.6 5.6v-3.5a3 3 0 0 0-.85-2.35c2.85-.32 5.85-1.4 5.85-6.3a4.9 4.9 0 0 0-1.3-3.42 4.55 4.55 0 0 0-.12-3.37s-1.07-.34-3.5 1.3a12.1 12.1 0 0 0-6.36 0C6.6 2.42 5.52 2.76 5.52 2.76a4.55 4.55 0 0 0-.12 3.37 4.9 4.9 0 0 0-1.3 3.42c0 4.88 2.98 5.98 5.82 6.3A3 3 0 0 0 9 18.2v3.6" />',

    // Email minimal icon
    mail:
      '<rect x="3" y="5" width="18" height="14" rx="2" />' +
      '<polyline points="3.5 6.5 12 13 20.5 6.5" />',

    // Investigación y exploración: brújula minimalista
    research:
      '<circle cx="12" cy="12" r="9" />' +
      '<polygon points="15.8 8.2 13.8 13.8 8.2 15.8 10.2 10.2 15.8 8.2" />',

    // Personalizar: deslizadores de ajuste
    sliders:
      '<line x1="4" y1="7" x2="20" y2="7" />' +
      '<line x1="4" y1="12" x2="20" y2="12" />' +
      '<line x1="4" y1="17" x2="20" y2="17" />' +
      '<circle cx="9" cy="7" r="2" fill="var(--bg-surface)" />' +
      '<circle cx="15" cy="12" r="2" fill="var(--bg-surface)" />' +
      '<circle cx="10" cy="17" r="2" fill="var(--bg-surface)" />'
  };

  function renderStandaloneIcon(name, className) {
    const body = ICON_PATHS[name] || '';
    const cls = className ? ' class="' + className + '"' : '';
    return (
      '<svg' + cls + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      body +
      '</svg>'
    );
  }

  function getIconContent(name) {
    return ICON_PATHS[name] || '';
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.icons = {
    render: renderStandaloneIcon,
    getContent: getIconContent
  };
})(window);
