/* ==========================================================================
   Profile Data — Single Source of Truth (Strict Content & Restraint Rules)
   ========================================================================== */

(function (global) {
  'use strict';

  const PROFILE_DATA = {
    identity: {
      name: 'SARAVIAH',
      role: 'Systems and Telecommunications Engineering Student',
      focus: 'Software Developer | Web & Mobile Development',
      heroImage: {
        src: './assets/panel_perfil.png',
        alt: 'Ilustración principal del perfil de SARAVIAH',
        width: 1774,
        height: 887
      },
      description: [
        'Soy estudiante de Ingeniería de Sistemas y Telecomunicaciones, interesado en el desarrollo de software y la creación de soluciones digitales.',
        'Me gusta desarrollar páginas web, aplicaciones móviles y sistemas que combinen funcionalidad, diseño y buenas prácticas de programación.',
        'Disfruto explorar nuevas tecnologías, experimentar con interfaces, desarrollar experiencias interactivas y aprender sobre arquitectura de software y seguridad informática.',
        'Mi objetivo es transformar ideas en soluciones digitales funcionales, intuitivas y bien estructuradas.'
      ],
      quickNav: [
        { label: 'Technology Ecosystem', href: '#ecosystem' },
        { label: 'Sobre mí', href: '#about' },
        { label: 'Áreas de interés', href: '#areas' },
        { label: 'Aprendizaje', href: '#learning' }
      ]
    },

    about: {
      eyebrow: 'Perfil',
      title: 'A little about me',
      paragraphs: [
        'Me motiva convertir ideas en soluciones digitales claras, funcionales y bien pensadas. Disfruto tanto la parte visual de construir interfaces intuitivas como la estructura interna que sostiene una aplicación web o móvil.',
        'A medida que avanzo en mi formación en Ingeniería de Sistemas y Telecomunicaciones, dedico tiempo a explorar cómo se organizan los sistemas desde su arquitectura, aprender nuevas tecnologías y experimentar con propuestas creativas e interactivas.'
      ],
      pillars: [
        'Crear soluciones digitales útiles y bien estructuradas',
        'Desarrollar aplicaciones web y móviles adaptables',
        'Diseñar interfaces claras e intuitivas',
        'Aprender nuevas tecnologías de forma constante',
        'Explorar la arquitectura y organización del software',
        'Experimentar con proyectos creativos e interactivos'
      ]
    },

    interestAreas: {
      eyebrow: 'Enfoque',
      title: 'Áreas de interés',
      items: [
        {
          id: 'web-dev',
          icon: 'web',
          title: 'Web Development',
          description: 'Creación de sitios web, plataformas y sistemas digitales.',
          accent: 'blue'
        },
        {
          id: 'mobile-dev',
          icon: 'mobile',
          title: 'Mobile Development',
          description: 'Desarrollo de aplicaciones móviles y experiencias multiplataforma.',
          accent: 'blue'
        },
        {
          id: 'software-eng',
          icon: 'architecture',
          title: 'Software Engineering',
          description: 'Programación, arquitectura, bases de datos y diseño de soluciones.',
          accent: 'blue'
        },
        {
          id: 'cybersecurity',
          icon: 'security',
          title: 'Cybersecurity',
          description: 'Fundamentos de seguridad informática y protección de aplicaciones.',
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
          subtitle: 'Base aplicada en desarrollo y práctica académica',
          items: [
            'Desarrollo web orientado a interfaces y lógica de servidor',
            'Lógica de programación y programación orientada a objetos',
            'Bases de datos relacionales, modelado y consultas SQL',
            'Diseño de interfaces y maquetación responsive',
            'Control de versiones y organización del código'
          ]
        },
        {
          key: 'developing',
          title: 'Áreas que continúo desarrollando',
          subtitle: 'Profundización técnica y buenas prácticas',
          items: [
            'Desarrollo de aplicaciones móviles y multiplataforma',
            'Diseño de APIs, servicios web y persistencia de datos',
            'Arquitectura de software, modelado UML y documentación técnica',
            'Contenedores, entornos de desarrollo y despliegue en la nube',
            'Sistemas de diseño, prototipado y experiencia de usuario'
          ]
        },
        {
          key: 'exploring',
          title: 'Áreas que estoy explorando',
          subtitle: 'Fundamentos iniciales y aprendizaje activo',
          items: [
            'Fundamentos de ciberseguridad y seguridad básica de aplicaciones',
            'Conceptos de redes y protección de la información',
            'Arquitectura de sistemas escalables y diseño de soluciones',
            'Experiencias web interactivas y optimización de rendimiento'
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
      ]
    }
  };

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.data = PROFILE_DATA;
})(window);
