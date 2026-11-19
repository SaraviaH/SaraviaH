/* ==========================================================================
   Profile Data — Single Source of Truth (Honest Content & Editorial Split)
   ========================================================================== */

(function (global) {
  'use strict';

  const PROFILE_DATA = {
    identity: {
      name: 'SARAVIAH',
      role: 'Systems and Telecommunications Engineering Student',
      focus: 'Software Developer | Web, Mobile & Tech Research',
      heroImage: {
        src: './assets/panel_perfil.png',
        alt: 'Portada de Jose SaraviaH con Miku, Teto y Neru',
        width: 1024,
        height: 512
      },
      description: [
        'Soy estudiante de Ingeniería de Sistemas y Telecomunicaciones, apasionado por el desarrollo de software, la creación de soluciones digitales y la investigación tecnológica.',
        'He desarrollado aplicaciones móviles con React Native y aplicaciones web modernas utilizando React, Next.js y otras tecnologías del ecosistema web y backend.',
        'Disfruto investigar nuevas tecnologías, experimentar con interfaces interactivas y profundizar en arquitectura de software, servicios en la nube y fundamentos de seguridad informática.',
        'Mi objetivo es transformar ideas en soluciones digitales funcionales, intuitivas y bien estructuradas.'
      ],
      quickNav: [
        { label: 'Technology Ecosystem', href: '#ecosystem' },
        { label: 'Sobre mí e investigación', href: '#about' },
        { label: 'Áreas de interés', href: '#areas' },
        { label: 'Aprendizaje', href: '#learning' }
      ]
    },

    about: {
      eyebrow: 'Perfil & Investigación',
      title: 'Desarrollo e investigación tecnológica',
      left: {
        title: 'A little about me',
        paragraphs: [
          'Me motiva convertir ideas en soluciones digitales claras, funcionales y bien pensadas. He creado aplicaciones móviles multiplataforma con React Native y proyectos web modernos con React, Next.js y distintas herramientas del lado del servidor.',
          'Disfruto cuidar tanto la experiencia visual y usabilidad en las interfaces como la estructura interna, el modelado de datos y las buenas prácticas que sostienen un sistema.'
        ]
      },
      right: {
        icon: 'research',
        title: 'Investigación y exploración',
        lead:
          'Además de construir software, dedico parte de mi tiempo a la investigación técnica para comprender cómo evolucionan las herramientas y los sistemas modernos.',
        focusPoints: [
          'Investigación tecnológica aplicada en nuevas herramientas y flujos de trabajo',
          'Arquitectura de software y organización modular de componentes',
          'Diseño de interfaces claras y experiencias web interactivas',
          'Servicios en la nube, contenedores y despliegue continuo',
          'Fundamentos de redes y ciberseguridad en aplicaciones'
        ]
      }
    },

    interestAreas: {
      eyebrow: 'Enfoque',
      title: 'Áreas de interés',
      items: [
        {
          id: 'web-dev',
          icon: 'web',
          title: 'Web Development',
          description:
            'Creación de sitios web, plataformas interactivas y sistemas digitales con enfoque en rendimiento y usabilidad.',
          accent: 'blue'
        },
        {
          id: 'mobile-dev',
          icon: 'mobile',
          title: 'Mobile Development',
          description:
            'Desarrollo de aplicaciones móviles y experiencias multiplataforma conectadas a persistencia local y en la nube.',
          accent: 'blue'
        },
        {
          id: 'software-eng',
          icon: 'architecture',
          title: 'Software Engineering',
          description:
            'Programación, arquitectura de sistemas, bases de datos e investigación aplicada al diseño de soluciones.',
          accent: 'blue'
        },
        {
          id: 'cybersecurity',
          icon: 'security',
          title: 'Cybersecurity',
          description:
            'Fundamentos de seguridad informática, investigación de buenas prácticas y protección de aplicaciones.',
          accent: 'green'
        }
      ]
    },

    learning: {
      eyebrow: 'Evolución',
      title: 'Conocimientos y aprendizaje',
      lead:
        'Una mirada honesta a mi recorrido actual: lo que ya he puesto en práctica, lo que sigo fortaleciendo y los ámbitos que estoy explorando.',
      stages: [
        {
          key: 'worked',
          title: 'Áreas que ya he trabajado',
          subtitle: 'Base aplicada en desarrollo web, móvil y práctica académica',
          items: [
            'Creación de aplicaciones web con React, Next.js y lógica de servidor',
            'Desarrollo de aplicaciones móviles multiplataforma con React Native',
            'Lógica de programación y programación orientada a objetos',
            'Bases de datos relacionales, modelado y consultas SQL',
            'Diseño de interfaces, maquetación responsive y control de versiones'
          ]
        },
        {
          key: 'developing',
          title: 'Áreas que continúo desarrollando',
          subtitle: 'Profundización técnica y buenas prácticas',
          items: [
            'Diseño de APIs REST, servicios backend y persistencia de datos',
            'Arquitectura de software, modelado UML y documentación técnica',
            'Contenedores, entornos de desarrollo y despliegue en la nube',
            'Sistemas de diseño, prototipado y experiencia de usuario',
            'Integración eficiente entre aplicaciones cliente y servicios cloud'
          ]
        },
        {
          key: 'exploring',
          title: 'Áreas que estoy explorando',
          subtitle: 'Investigación activa y fundamentos iniciales',
          items: [
            'Fundamentos de ciberseguridad y seguridad básica de aplicaciones',
            'Conceptos de redes y protección de la información',
            'Investigación de nuevas herramientas multiplataforma y ecosistemas modernos',
            'Optimización de rendimiento y arquitectura escalable de soluciones'
          ]
        }
      ]
    },

    footer: {
      identity: 'SARAVIAH',
      motto: 'Building ideas into digital experiences.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/SaraviaH',
          icon: 'github',
          external: true
        },
        {
          label: 'Email',
          href: 'mailto:josesaraviahuaman@gmail.com',
          icon: 'mail',
          external: false
        }
        /* Agrega aquí enlaces adicionales (ej. LinkedIn o portafolio):
        ,{
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/tu-usuario',
          icon: 'globe',
          external: true
        }
        */
      ]
    }
  };

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.data = PROFILE_DATA;
})(window);
