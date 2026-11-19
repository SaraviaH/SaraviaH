/* ==========================================================================
   Site Configuration — Opciones personalizables del perfil web SARAVIAH
   Edita estos valores predeterminados si deseas cambiar la apariencia inicial.
   ========================================================================== */

(function (global) {
  'use strict';

  const SITE_CONFIG = {
    // Clave utilizada para guardar las preferencias del visitante en localStorage
    storageKey: 'saraviah_profile_prefs_v1',

    // Color de acento inicial ('blue' | 'green' | 'violet' | 'amber')
    defaultAccent: 'blue',

    // Paletas de acento disponibles en el panel de personalización
    accents: {
      blue: {
        label: 'GitHub Blue',
        orbit: '#1793D1',
        accent: '#2F81F7',
        soft: 'rgba(47, 129, 247, 0.14)'
      },
      green: {
        label: 'Emerald',
        orbit: '#3FB950',
        accent: '#238636',
        soft: 'rgba(35, 134, 54, 0.18)'
      },
      violet: {
        label: 'Violet',
        orbit: '#A371F7',
        accent: '#8957E5',
        soft: 'rgba(137, 87, 229, 0.16)'
      },
      amber: {
        label: 'Amber',
        orbit: '#E3B341',
        accent: '#D29922',
        soft: 'rgba(210, 153, 34, 0.16)'
      }
    },

    // Velocidad inicial de las órbitas ('normal' | 'slow' | 'paused')
    defaultOrbitSpeed: 'normal',

    speedFactors: {
      normal: 1,
      slow: 1.65,
      paused: 1
    },

    // Modo inicial del Technology Ecosystem ('batches' | 'single' | 'all')
    defaultEcosystemView: 'batches',

    // Visibilidad inicial de secciones en la página web
    defaultSections: {
      ecosystem: true,
      about: true,
      areas: true,
      learning: true
    },

    // Etiquetas legibles para los controles de visibilidad de secciones
    sectionLabels: {
      ecosystem: 'Technology Ecosystem',
      about: 'Sobre mí e investigación',
      areas: 'Áreas de interés',
      learning: 'Conocimientos y aprendizaje'
    }
  };

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.config = SITE_CONFIG;
})(window);
