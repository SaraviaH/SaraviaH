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
        { label: 'Ecosistema', href: '#ecosystem' },
        { label: 'Sobre mí', href: '#about' },
        { label: 'Áreas de interés', href: '#areas' },
        { label: 'Aprendizaje', href: '#learning' }
      ]
    },

    ecosystem: {
      eyebrow: 'Ecosistema tecnológico',
      title: 'Ámbitos interconectados',
      lead:
        'Cada nodo representa un área de conocimiento conectada con las demás dentro del ciclo de desarrollo de software. Selecciona o recorre un nodo para ver su enfoque.',
      hint: 'Selecciona cualquier nodo para explorar las conexiones',
      nodes: [
        {
          id: 'design',
          icon: 'design',
          title: 'Diseño y experiencia de usuario',
          stage: 'Interfaz y usabilidad',
          isLearning: false,
          isCore: false,
          desktop: { x: 105, y: 195 },
          mobile: { x: 92, y: 64 },
          points: [
            'Diseño de interfaces',
            'Diseño responsive',
            'Experiencia de usuario',
            'Prototipado',
            'Sistemas de diseño'
          ]
        },
        {
          id: 'web',
          icon: 'web',
          title: 'Desarrollo web',
          stage: 'Frontend y plataformas',
          isLearning: false,
          isCore: true,
          pulseDelay: '',
          desktop: { x: 265, y: 96 },
          mobile: { x: 268, y: 64 },
          points: [
            'Creación de páginas web',
            'Interfaces y experiencias de usuario',
            'Desarrollo frontend',
            'Desarrollo backend',
            'APIs y servicios web'
          ]
        },
        {
          id: 'mobile',
          icon: 'mobile',
          title: 'Desarrollo de aplicaciones',
          stage: 'Móvil y multiplataforma',
          isLearning: false,
          isCore: false,
          desktop: { x: 265, y: 294 },
          mobile: { x: 92, y: 170 },
          points: [
            'Aplicaciones móviles',
            'Aplicaciones multiplataforma',
            'Interfaces adaptables',
            'Persistencia y gestión de datos'
          ]
        },
        {
          id: 'versioning',
          icon: 'versioning',
          title: 'Control de versiones',
          stage: 'Flujo de desarrollo',
          isLearning: false,
          isCore: false,
          desktop: { x: 460, y: 62 },
          mobile: { x: 92, y: 278 },
          points: [
            'Control de versiones',
            'Trabajo ordenado por ramas',
            'Integración de cambios',
            'Entornos de desarrollo'
          ]
        },
        {
          id: 'code',
          icon: 'code',
          title: 'Programación',
          stage: 'Núcleo de software',
          isLearning: false,
          isCore: true,
          pulseDelay: 'eco-node__pulse--delay-1',
          desktop: { x: 460, y: 195 },
          mobile: { x: 268, y: 170 },
          points: [
            'Lógica de programación',
            'Programación orientada a objetos',
            'Estructuras de datos',
            'Arquitectura y organización del código'
          ]
        },
        {
          id: 'architecture',
          icon: 'architecture',
          title: 'Arquitectura de software',
          stage: 'Diseño de sistemas',
          isLearning: false,
          isCore: false,
          desktop: { x: 460, y: 330 },
          mobile: { x: 92, y: 386 },
          points: [
            'Modelado UML',
            'Arquitectura de sistemas',
            'Diseño de soluciones',
            'Organización de componentes',
            'Documentación técnica'
          ]
        },
        {
          id: 'backend',
          icon: 'backend',
          title: 'Backend y servicios web',
          stage: 'Lógica de servidor y APIs',
          isLearning: false,
          isCore: true,
          pulseDelay: 'eco-node__pulse--delay-2',
          desktop: { x: 655, y: 96 },
          mobile: { x: 268, y: 278 },
          points: [
            'Desarrollo backend',
            'APIs y servicios web',
            'Comunicación cliente-servidor',
            'Validación y lógica de negocio'
          ]
        },
        {
          id: 'database',
          icon: 'database',
          title: 'Bases de datos',
          stage: 'Persistencia de información',
          isLearning: false,
          isCore: false,
          desktop: { x: 655, y: 294 },
          mobile: { x: 268, y: 386 },
          points: [
            'Bases de datos relacionales',
            'Modelado de datos',
            'Consultas SQL',
            'Gestión y persistencia de información'
          ]
        },
        {
          id: 'cloud',
          icon: 'cloud',
          title: 'Infraestructura y despliegue',
          stage: 'Contenedores y nube',
          isLearning: false,
          isCore: false,
          desktop: { x: 815, y: 126 },
          mobile: { x: 92, y: 494 },
          points: [
            'Contenedores',
            'Servicios en la nube',
            'Despliegue de aplicaciones',
            'Entornos de desarrollo'
          ]
        },
        {
          id: 'security',
          icon: 'security',
          title: 'Ciberseguridad',
          stage: 'Conocimientos básicos · En aprendizaje',
          isLearning: true,
          isCore: false,
          desktop: { x: 815, y: 264 },
          mobile: { x: 268, y: 494 },
          points: [
            'Fundamentos de ciberseguridad',
            'Seguridad básica de aplicaciones',
            'Buenas prácticas de protección de información',
            'Conceptos de redes y seguridad informática'
          ]
        }
      ],
      edges: [
        ['design', 'web'],
        ['design', 'mobile'],
        ['web', 'versioning'],
        ['web', 'code'],
        ['mobile', 'code'],
        ['mobile', 'architecture'],
        ['versioning', 'code'],
        ['code', 'architecture'],
        ['versioning', 'backend'],
        ['code', 'backend'],
        ['code', 'database'],
        ['architecture', 'database'],
        ['backend', 'database'],
        ['backend', 'cloud'],
        ['backend', 'security'],
        ['database', 'security'],
        ['cloud', 'security']
      ],
      pulses: [
        { route: ['design', 'web', 'code', 'backend', 'cloud'], dur: '9.5s', begin: '-1.0s', color: '#2F81F7' },
        { route: ['mobile', 'code', 'database', 'security'], dur: '8.5s', begin: '-3.2s', color: '#3FB950' },
        { route: ['versioning', 'code', 'architecture', 'database'], dur: '9.0s', begin: '-5.4s', color: '#2F81F7' },
        { route: ['cloud', 'backend', 'web', 'design'], dur: '10.2s', begin: '-2.6s', color: '#2F81F7' },
        { route: ['architecture', 'mobile', 'design'], dur: '7.4s', begin: '-4.1s', color: '#3FB950' },
        { route: ['versioning', 'backend', 'security'], dur: '7.8s', begin: '-6.0s', color: '#3FB950' }
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
