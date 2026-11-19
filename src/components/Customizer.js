/* ==========================================================================
   Customizer Component — Live Personalization Panel (Accent, Speed, Layout, Sections)
   Persists preferences safely in localStorage; respects siteConfig.js defaults.
   ========================================================================== */

(function (global) {
  'use strict';

  function cloneDefaults(config) {
    return {
      accent: config.defaultAccent || 'blue',
      orbitSpeed: config.defaultOrbitSpeed || 'normal',
      ecosystemView: config.defaultEcosystemView || 'batches',
      sections: Object.assign({}, config.defaultSections)
    };
  }

  function loadPrefs(config) {
    const defaults = cloneDefaults(config);
    try {
      const raw = global.localStorage.getItem(config.storageKey);
      if (!raw) return defaults;
      const parsed = JSON.parse(raw);
      return {
        accent: config.accents[parsed.accent] ? parsed.accent : defaults.accent,
        orbitSpeed: config.speedFactors[parsed.orbitSpeed] !== undefined ? parsed.orbitSpeed : defaults.orbitSpeed,
        ecosystemView:
          parsed.ecosystemView === 'batches' ||
          parsed.ecosystemView === 'single' ||
          parsed.ecosystemView === 'all'
            ? parsed.ecosystemView
            : defaults.ecosystemView,
        sections: Object.assign({}, defaults.sections, parsed.sections || {})
      };
    } catch (e) {
      return defaults;
    }
  }

  function savePrefs(config, prefs) {
    try {
      global.localStorage.setItem(config.storageKey, JSON.stringify(prefs));
    } catch (e) {
      // Ignorar silenciosamente si el navegador bloquea storage local (p. ej. modo estricto file://)
    }
  }

  function clearPrefs(config) {
    try {
      global.localStorage.removeItem(config.storageKey);
    } catch (e) {
      // Ignorar silenciosamente
    }
  }

  function renderCustomizer(config) {
    const icons = global.SaraviaProfile.icons;

    const accentButtons = Object.keys(config.accents)
      .map(function (key) {
        const preset = config.accents[key];
        return (
          '<button type="button" class="customizer__swatch" ' +
            'data-accent-option="' + key + '" ' +
            'aria-label="Color ' + preset.label + '" ' +
            'title="' + preset.label + '">' +
            '<span class="customizer__swatch-dot" style="background-color:' + preset.orbit + '"></span>' +
            '<span>' + preset.label + '</span>' +
          '</button>'
        );
      })
      .join('');

    const speedButtons = [
      { key: 'normal', label: 'Normal' },
      { key: 'slow', label: 'Lenta' },
      { key: 'paused', label: 'Pausada' }
    ]
      .map(function (opt) {
        return (
          '<button type="button" class="customizer__pill" data-speed-option="' + opt.key + '">' +
            opt.label +
          '</button>'
        );
      })
      .join('');

    const viewButtons = [
      { key: 'batches', label: 'Por lotes' },
      { key: 'single', label: 'Individual' },
      { key: 'all', label: 'Ver los 8' }
    ]
      .map(function (opt) {
        return (
          '<button type="button" class="customizer__pill" data-view-option="' + opt.key + '">' +
            opt.label +
          '</button>'
        );
      })
      .join('');

    const sectionCheckboxes = Object.keys(config.defaultSections)
      .map(function (secId) {
        const label = (config.sectionLabels && config.sectionLabels[secId]) || secId;
        return (
          '<label class="customizer__check">' +
            '<input type="checkbox" data-section-toggle="' + secId + '" checked />' +
            '<span>' + label + '</span>' +
          '</label>'
        );
      })
      .join('');

    return (
      '<aside class="customizer" aria-label="Personalización del perfil">' +
        '<div class="customizer__panel" id="customizer-panel" hidden>' +
          '<div class="customizer__head">' +
            '<div>' +
              '<h2 class="customizer__title">Personalizar perfil</h2>' +
              '<p class="customizer__sub">Ajusta colores, órbitas y secciones</p>' +
            '</div>' +
            '<button type="button" class="customizer__reset" id="customizer-reset">Restablecer</button>' +
          '</div>' +

          '<div class="customizer__group">' +
            '<span class="customizer__label">Acento visual</span>' +
            '<div class="customizer__swatches">' + accentButtons + '</div>' +
          '</div>' +

          '<div class="customizer__group">' +
            '<span class="customizer__label">Velocidad orbital</span>' +
            '<div class="customizer__pills">' + speedButtons + '</div>' +
          '</div>' +

          '<div class="customizer__group">' +
            '<span class="customizer__label">Distribución del ecosistema</span>' +
            '<div class="customizer__pills">' + viewButtons + '</div>' +
          '</div>' +

          '<div class="customizer__group">' +
            '<span class="customizer__label">Secciones visibles</span>' +
            '<div class="customizer__checks">' + sectionCheckboxes + '</div>' +
          '</div>' +
        '</div>' +

        '<button type="button" class="customizer__trigger" id="customizer-trigger" ' +
          'aria-expanded="false" aria-controls="customizer-panel">' +
          icons.render('sliders', 'customizer__trigger-icon') +
          '<span>Personalizar</span>' +
        '</button>' +
      '</aside>'
    );
  }

  function bindCustomizer(config) {
    const trigger = document.getElementById('customizer-trigger');
    const panel = document.getElementById('customizer-panel');
    const resetBtn = document.getElementById('customizer-reset');
    if (!trigger || !panel) return;

    let prefs = loadPrefs(config);

    function applyPrefs(syncView) {
      const rootStyle = document.documentElement.style;
      const accent = config.accents[prefs.accent] || config.accents.blue;

      rootStyle.setProperty('--orbit-blue', accent.orbit);
      rootStyle.setProperty('--accent-blue', accent.accent);
      rootStyle.setProperty('--accent-blue-soft', accent.soft);

      const speedFactor = config.speedFactors[prefs.orbitSpeed] || 1;
      rootStyle.setProperty('--orbit-speed-factor', String(speedFactor));
      document.body.classList.toggle('orbits-paused', prefs.orbitSpeed === 'paused');

      // Apply section visibility (ecosystem, about, areas, learning)
      Object.keys(config.defaultSections).forEach(function (secId) {
        const el = document.getElementById(secId);
        const visible = prefs.sections[secId] !== false;
        if (el) {
          el.hidden = !visible;
        }
        const cb = panel.querySelector('[data-section-toggle="' + secId + '"]');
        if (cb) {
          cb.checked = visible;
        }
      });

      // Sync ecosystem view mode if requested
      if (
        syncView &&
        global.SaraviaProfile.TechEcosystem &&
        global.SaraviaProfile.TechEcosystem.setViewMode
      ) {
        global.SaraviaProfile.TechEcosystem.setViewMode(prefs.ecosystemView);
      }

      // Update active states inside panel
      panel.querySelectorAll('[data-accent-option]').forEach(function (btn) {
        const active = btn.getAttribute('data-accent-option') === prefs.accent;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      panel.querySelectorAll('[data-speed-option]').forEach(function (btn) {
        const active = btn.getAttribute('data-speed-option') === prefs.orbitSpeed;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      panel.querySelectorAll('[data-view-option]').forEach(function (btn) {
        const active = btn.getAttribute('data-view-option') === prefs.ecosystemView;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (global.SaraviaProfile.observer && global.SaraviaProfile.observer.refreshOrbits) {
        global.SaraviaProfile.observer.refreshOrbits();
      }
    }

    function setOpen(open) {
      panel.hidden = !open;
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    trigger.addEventListener('click', function () {
      setOpen(panel.hidden);
    });

    document.addEventListener('click', function (event) {
      if (!panel.hidden && !event.target.closest('.customizer')) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) {
        setOpen(false);
        trigger.focus();
      }
    });

    panel.querySelectorAll('[data-accent-option]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        prefs.accent = btn.getAttribute('data-accent-option');
        savePrefs(config, prefs);
        applyPrefs(false);
      });
    });

    panel.querySelectorAll('[data-speed-option]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        prefs.orbitSpeed = btn.getAttribute('data-speed-option');
        savePrefs(config, prefs);
        applyPrefs(false);
      });
    });

    panel.querySelectorAll('[data-view-option]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        prefs.ecosystemView = btn.getAttribute('data-view-option');
        savePrefs(config, prefs);
        applyPrefs(true);
      });
    });

    panel.querySelectorAll('[data-section-toggle]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        const secId = cb.getAttribute('data-section-toggle');
        prefs.sections[secId] = cb.checked;
        savePrefs(config, prefs);
        applyPrefs(false);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        clearPrefs(config);
        prefs = cloneDefaults(config);
        applyPrefs(true);
      });
    }

    // Listen to direct ecosystem view mode clicks to keep Customizer pills in sync
    document.addEventListener('saraviah:viewmode', function (event) {
      if (event.detail && event.detail.mode && prefs.ecosystemView !== event.detail.mode) {
        prefs.ecosystemView = event.detail.mode;
        savePrefs(config, prefs);
        applyPrefs(false);
      }
    });

    applyPrefs(true);
  }

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.Customizer = {
    render: renderCustomizer,
    bind: bindCustomizer
  };
})(window);
