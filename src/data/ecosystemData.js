/* ==========================================================================
   Orbital Technology Ecosystem Data — 8 Independent Planetary Systems
   ========================================================================== */

(function (global) {
  'use strict';

  const ECOSYSTEM_DATA = {
    eyebrow: 'Sistemas orbitales',
    title: 'Technology Ecosystem',
    lead:
      'Cada especialidad funciona como un sistema orbital independiente, organizado por lotes (Izquierda / Derecha) o de forma individual. Selecciona cualquier tecnología para ver su rol.',
    batches: [
      {
        id: 'lote-1',
        label: 'Lote 01',
        title: 'Core & Backend',
        left: 'languages',
        right: 'backend'
      },
      {
        id: 'lote-2',
        label: 'Lote 02',
        title: 'Frontend & Mobile',
        left: 'frontend',
        right: 'mobile'
      },
      {
        id: 'lote-3',
        label: 'Lote 03',
        title: 'Databases & Cloud',
        left: 'databases',
        right: 'cloud'
      },
      {
        id: 'lote-4',
        label: 'Lote 04',
        title: 'DevOps & Design',
        left: 'devops',
        right: 'design'
      }
    ],
    systems: [
      {
        id: 'languages',
        shortTitle: 'Languages',
        title: 'Programming Languages',
        description:
          'Lenguajes principales para desarrollo web, backend, aplicaciones móviles y manejo de datos.',
        viewBoxSize: 520,
        core: {
          type: 'text',
          value: '</>',
          label: 'Programming Languages'
        },
        orbits: [
          {
            radius: 106,
            duration: '28s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'java',
                name: 'Java',
                logo: './assets/logos/java.svg',
                tier: 'Lenguaje principal',
                description:
                  'Lenguaje orientado a objetos utilizado en servicios backend, APIs REST y arquitectura empresarial.'
              },
              {
                id: 'javascript',
                name: 'JavaScript',
                logo: './assets/logos/javascript.svg',
                tier: 'Lenguaje principal',
                description:
                  'Base de la interactividad en el navegador, manipulación del DOM y aplicaciones web dinámicas.'
              },
              {
                id: 'typescript',
                name: 'TypeScript',
                logo: './assets/logos/typescript.svg',
                tier: 'Lenguaje principal',
                description:
                  'Tipado estático sobre JavaScript para construir interfaces web y aplicaciones móviles más mantenibles.'
              },
              {
                id: 'python',
                name: 'Python',
                logo: './assets/logos/python.svg',
                tier: 'Lenguaje principal',
                description:
                  'Desarrollo de servicios backend, prototipado ágil, automatización y aplicaciones multiplataforma.'
              }
            ]
          },
          {
            radius: 182,
            duration: '46s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 11,
            labelOffset: 36,
            items: [
              {
                id: 'html5',
                name: 'HTML5',
                logo: './assets/logos/html5.svg',
                tier: 'Estándar web',
                description:
                  'Estructuración semántica y accesible de documentos y aplicaciones web.'
              },
              {
                id: 'css3',
                name: 'CSS3',
                logo: './assets/logos/css3.svg',
                tier: 'Estándar web',
                description:
                  'Diseño visual, maquetación responsive, variables globales y animaciones fluidas.'
              },
              {
                id: 'sql',
                name: 'SQL',
                logo: './assets/logos/sql.svg',
                tier: 'Lenguaje de consultas',
                description:
                  'Definición de esquemas relacionales, consultas estructuradas y persistencia de datos.'
              }
            ]
          }
        ]
      },

      {
        id: 'backend',
        shortTitle: 'Backend',
        title: 'Backend Development',
        description:
          'Servicios de servidor, APIs REST, autenticación y contenerización con protagonismo en Java y Spring Boot.',
        viewBoxSize: 520,
        core: {
          type: 'logo',
          logo: './assets/logos/java.svg',
          size: 48,
          label: 'Java / Backend'
        },
        orbits: [
          {
            radius: 106,
            duration: '26s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'java-be',
                name: 'Java',
                logo: './assets/logos/java.svg',
                tier: 'Núcleo backend',
                description:
                  'Base principal para el desarrollo de servicios robustos, orientados a objetos y escalables.'
              },
              {
                id: 'spring-boot',
                name: 'Spring Boot',
                logo: './assets/logos/spring-boot.svg',
                tier: 'Framework principal',
                description:
                  'Construcción de APIs REST, arquitectura en capas, seguridad y conexión con bases de datos.'
              },
              {
                id: 'spring-mvc',
                name: 'Spring MVC',
                logo: './assets/logos/spring-mvc.svg',
                tier: 'Arquitectura web',
                description:
                  'Patrón Modelo-Vista-Controlador para enrutamiento, controladores HTTP y aplicaciones web en Java.'
              }
            ]
          },
          {
            radius: 184,
            duration: '46s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 11,
            labelOffset: 36,
            items: [
              {
                id: 'lombok',
                name: 'Lombok',
                logo: './assets/logos/lombok.svg',
                missingAsset: true,
                slotCode: 'LB',
                tier: 'Productividad Java',
                description:
                  'Reducción de código repetitivo en modelos, DTOs y entidades Java mediante anotaciones.'
              },
              {
                id: 'maven-be',
                name: 'Maven',
                logo: './assets/logos/maven.svg',
                tier: 'Gestión de dependencias',
                description:
                  'Compilación, gestión de paquetes y ciclo de vida de proyectos Java y Spring.'
              },
              {
                id: 'python-be',
                name: 'Python',
                logo: './assets/logos/python.svg',
                tier: 'Lenguaje backend',
                description:
                  'Implementación de servicios ligeros, lógica de negocio y scripts de soporte.'
              },
              {
                id: 'fastapi',
                name: 'FastAPI',
                logo: './assets/logos/fastapi.svg',
                tier: 'Framework Python',
                description:
                  'Creación de APIs modernas y rápidas en Python con validación de esquemas y documentación automática.'
              },
              {
                id: 'docker-be',
                name: 'Docker',
                logo: './assets/logos/docker.svg',
                tier: 'Contenedores',
                description:
                  'Empaquetado de servicios backend y bases de datos en entornos reproducibles.'
              }
            ]
          }
        ]
      },

      {
        id: 'frontend',
        shortTitle: 'Frontend',
        title: 'Frontend Development',
        description:
          'Jerarquía clara entre frameworks principales (Angular, React y Next.js), herramientas de estilo/build y librerías visuales.',
        viewBoxSize: 620,
        core: {
          type: 'icon',
          icon: 'web',
          size: 46,
          label: 'Frontend & UI'
        },
        orbits: [
          {
            radius: 92,
            duration: '26s',
            direction: 'normal',
            nodeRadius: 25,
            logoSize: 30,
            labelSize: 11.5,
            labelOffset: 40,
            items: [
              {
                id: 'angular',
                name: 'Angular',
                logo: './assets/logos/angular.svg',
                tier: 'Framework principal',
                description:
                  'Desarrollo de aplicaciones web estructuradas con componentes, servicios, enrutamiento y TypeScript.'
              },
              {
                id: 'react',
                name: 'React',
                logo: './assets/logos/react.svg',
                tier: 'Framework principal',
                description:
                  'Construcción de interfaces declarativas y modulares basadas en componentes reutilizables.'
              },
              {
                id: 'nextjs',
                name: 'Next.js',
                logo: './assets/logos/nextjs.svg',
                tier: 'Framework React full-stack',
                description:
                  'Desarrollo de aplicaciones web modernas sobre React con enrutamiento, renderizado híbrido y optimización.'
              }
            ]
          },
          {
            radius: 166,
            duration: '44s',
            direction: 'reverse',
            nodeRadius: 22,
            logoSize: 25,
            labelSize: 10.5,
            labelOffset: 36,
            items: [
              {
                id: 'ts-fe',
                name: 'TypeScript',
                logo: './assets/logos/typescript.svg',
                tier: 'Núcleo frontend',
                description:
                  'Tipado seguro para componentes, modelos de datos y consumo de APIs en el cliente.'
              },
              {
                id: 'js-fe',
                name: 'JavaScript',
                logo: './assets/logos/javascript.svg',
                tier: 'Núcleo frontend',
                description:
                  'Lógica de interfaz, manejo de eventos y comportamiento interactivo en navegador.'
              },
              {
                id: 'vite',
                name: 'Vite',
                logo: './assets/logos/vite.svg',
                tier: 'Entorno de compilación',
                description:
                  'Servidor de desarrollo rápido y empaquetado optimizado para proyectos web modernos.'
              },
              {
                id: 'tailwind',
                name: 'Tailwind CSS',
                logo: './assets/logos/tailwindcss.svg',
                tier: 'Estilos y diseño',
                description:
                  'Diseño responsive ágil y sistemas visuales consistentes mediante utilidades CSS.'
              },
              {
                id: 'bootstrap',
                name: 'Bootstrap',
                logo: './assets/logos/bootstrap.svg',
                tier: 'Framework CSS',
                description:
                  'Maquetación adaptable y componentes de interfaz responsivos.'
              },
              {
                id: 'html5-fe',
                name: 'HTML5',
                logo: './assets/logos/html5.svg',
                tier: 'Estándar web',
                description:
                  'Estructura semántica de vistas, formularios y contenido accesible.'
              },
              {
                id: 'css3-fe',
                name: 'CSS3',
                logo: './assets/logos/css3.svg',
                tier: 'Estándar web',
                description:
                  'Estilizado personalizado, grid, flexbox y transiciones suaves.'
              }
            ]
          },
          {
            radius: 242,
            duration: '64s',
            direction: 'normal',
            nodeRadius: 20,
            logoSize: 22,
            labelSize: 10,
            labelOffset: 34,
            items: [
              {
                id: 'thymeleaf',
                name: 'Thymeleaf',
                logo: './assets/logos/thymeleaf.svg',
                tier: 'Motor de plantillas',
                description:
                  'Renderizado de vistas HTML del lado del servidor integrado con Spring.'
              },
              {
                id: 'swiper',
                name: 'Swiper',
                logo: './assets/logos/swiper.svg',
                tier: 'Librería visual',
                description:
                  'Carruseles y deslizadores táctiles fluidos para contenido interactivo.'
              },
              {
                id: 'fontawesome',
                name: 'Font Awesome',
                logo: './assets/logos/fontawesome.svg',
                tier: 'Iconografía UI',
                description:
                  'Conjunto de iconos vectoriales escalables para interfaces web.'
              },
              {
                id: 'sweetalert2',
                name: 'SweetAlert2',
                logo: './assets/logos/sweetalert2.svg',
                missingAsset: true,
                slotCode: 'SW',
                tier: 'Librería visual',
                description:
                  'Alertas modales personalizadas y confirmaciones interactivas en el navegador.'
              },
              {
                id: 'chartjs',
                name: 'Chart.js',
                logo: './assets/logos/chartjs.svg',
                tier: 'Visualización de datos',
                description:
                  'Gráficos interactivos y responsivos para representar métricas y reportes.'
              },
              {
                id: 'aos',
                name: 'AOS',
                logo: './assets/logos/aos.svg',
                missingAsset: true,
                slotCode: 'AOS',
                tier: 'Librería visual',
                description:
                  'Animaciones discretas activadas al hacer scroll en páginas web.'
              },
              {
                id: 'notyf',
                name: 'Notyf',
                logo: './assets/logos/notyf.svg',
                missingAsset: true,
                slotCode: 'NT',
                tier: 'Librería visual',
                description:
                  'Notificaciones toast ligeras y no intrusivas para feedback al usuario.'
              }
            ]
          }
        ]
      },

      {
        id: 'databases',
        shortTitle: 'Databases',
        title: 'Databases',
        description:
          'Almacenamiento relacional, persistencia local y servicios en la nube conectados al backend y móvil.',
        viewBoxSize: 520,
        showCoreLinks: true,
        core: {
          type: 'logo',
          logo: './assets/logos/postgresql.svg',
          size: 50,
          label: 'PostgreSQL'
        },
        orbits: [
          {
            radius: 106,
            duration: '30s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'postgresql',
                name: 'PostgreSQL',
                logo: './assets/logos/postgresql.svg',
                tier: 'Motor principal · Backend',
                description:
                  'Base de datos relacional principal para modelado avanzado, integridad y APIs backend.'
              },
              {
                id: 'mysql',
                name: 'MySQL',
                logo: './assets/logos/mysql.svg',
                tier: 'Relacional · Backend',
                description:
                  'Gestión de bases de datos relacionales para aplicaciones web y sistemas transaccionales.'
              },
              {
                id: 'supabase-db',
                name: 'Supabase',
                logo: './assets/logos/supabase.svg',
                tier: 'PostgreSQL Cloud · Web & Móvil',
                description:
                  'Base de datos PostgreSQL gestionada con autenticación y conexión directa desde web y móvil.'
              }
            ]
          },
          {
            radius: 182,
            duration: '48s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 10.5,
            labelOffset: 36,
            items: [
              {
                id: 'sqlserver',
                name: 'SQL Server',
                fullName: 'Microsoft SQL Server',
                logo: './assets/logos/sqlserver.svg',
                tier: 'Relacional empresarial',
                description:
                  'Modelado relacional, procedimientos almacenados y gestión de datos en entornos corporativos.'
              },
              {
                id: 'oracle',
                name: 'Oracle DB',
                fullName: 'Oracle Database',
                logo: './assets/logos/oracle.svg',
                tier: 'Relacional empresarial',
                description:
                  'Diseño de esquemas, consultas SQL y administración de bases de datos relacionales.'
              },
              {
                id: 'sqlite-db',
                name: 'SQLite',
                logo: './assets/logos/sqlite.svg',
                tier: 'Persistencia local · Móvil',
                description:
                  'Almacenamiento ligero embebido ideal para persistencia offline en aplicaciones móviles.'
              }
            ]
          }
        ]
      },

      {
        id: 'mobile',
        shortTitle: 'Mobile',
        title: 'Mobile Development',
        description:
          'Desarrollo de aplicaciones móviles multiplataforma, persistencia local y sincronización en la nube.',
        viewBoxSize: 520,
        core: {
          type: 'logo',
          logo: './assets/logos/react.svg',
          size: 50,
          label: 'React Native'
        },
        orbits: [
          {
            radius: 106,
            duration: '28s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'react-native',
                name: 'React Native',
                logo: './assets/logos/react.svg',
                tier: 'Framework principal',
                description:
                  'Creación de aplicaciones móviles nativas multiplataforma con componentes y arquitectura limpia.'
              },
              {
                id: 'ts-mobile',
                name: 'TypeScript',
                logo: './assets/logos/typescript.svg',
                tier: 'Lenguaje principal',
                description:
                  'Tipado estático para pantallas, navegación, estado y contratos de datos móviles.'
              },
              {
                id: 'android-studio-mob',
                name: 'Android Studio',
                logo: './assets/logos/androidstudio.svg',
                tier: 'Entorno móvil',
                description:
                  'Compilación, emuladores Android, depuración y gestión del SDK móvil.'
              }
            ]
          },
          {
            radius: 180,
            duration: '46s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 11,
            labelOffset: 36,
            items: [
              {
                id: 'sqlite-mob',
                name: 'SQLite',
                logo: './assets/logos/sqlite.svg',
                tier: 'Almacenamiento local',
                description:
                  'Persistencia estructurada directamente en el dispositivo para uso rápido y offline.'
              },
              {
                id: 'supabase-mob',
                name: 'Supabase',
                logo: './assets/logos/supabase.svg',
                tier: 'Backend móvil',
                description:
                  'Sincronización de datos, autenticación y almacenamiento remoto para apps móviles.'
              },
              {
                id: 'flutter',
                name: 'Flutter',
                logo: './assets/logos/flutter.svg',
                isExploring: true,
                tier: 'En exploración',
                description:
                  'Exploración de interfaces multiplataforma y widgets reactivos en aprendizaje continuo.'
              }
            ]
          }
        ]
      },

      {
        id: 'devops',
        shortTitle: 'DevOps & Tools',
        title: 'DevOps & Development Tools',
        description:
          'Control de versiones, contenedores, automatización de compilación y entornos de desarrollo integrados.',
        viewBoxSize: 520,
        core: {
          type: 'logo',
          logo: './assets/logos/git.svg',
          size: 48,
          label: 'Git & Tools'
        },
        orbits: [
          {
            radius: 106,
            duration: '28s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'git',
                name: 'Git',
                logo: './assets/logos/git.svg',
                tier: 'Control de versiones',
                description:
                  'Gestión de ramas, historial de cambios, merges ordenados y flujo colaborativo.'
              },
              {
                id: 'github',
                name: 'GitHub',
                logo: './assets/logos/github.svg',
                tier: 'Colaboración y repositorios',
                description:
                  'Alojamiento de código, pull requests, documentación y despliegue con Pages.'
              },
              {
                id: 'docker',
                name: 'Docker',
                logo: './assets/logos/docker.svg',
                tier: 'Contenedores',
                description:
                  'Aislamiento de servicios y consistencia entre desarrollo y despliegue.'
              },
              {
                id: 'maven',
                name: 'Maven',
                logo: './assets/logos/maven.svg',
                tier: 'Build y dependencias',
                description:
                  'Automatización de compilación, empaquetado y librerías en el ecosistema Java.'
              }
            ]
          },
          {
            radius: 184,
            duration: '48s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 10.5,
            labelOffset: 36,
            items: [
              {
                id: 'vscode',
                name: 'VS Code',
                fullName: 'Visual Studio Code',
                logo: './assets/logos/vscode.svg',
                tier: 'Editor de código',
                description:
                  'Entorno ágil para desarrollo web, TypeScript, Python y React Native.'
              },
              {
                id: 'eclipse',
                name: 'Eclipse',
                logo: './assets/logos/eclipse.svg',
                tier: 'IDE Java',
                description:
                  'Entorno integrado utilizado para desarrollo y depuración en Java.'
              },
              {
                id: 'netbeans',
                name: 'NetBeans',
                logo: './assets/logos/netbeans.svg',
                tier: 'IDE Java',
                description:
                  'Desarrollo académico y estructuración de proyectos Java y web.'
              },
              {
                id: 'visualstudio',
                name: 'Visual Studio',
                logo: './assets/logos/visualstudio.svg',
                tier: 'IDE',
                description:
                  'Entorno de desarrollo integrado para soluciones de escritorio, web y bases de datos.'
              },
              {
                id: 'androidstudio',
                name: 'Android Studio',
                logo: './assets/logos/androidstudio.svg',
                tier: 'IDE Móvil',
                description:
                  'Herramientas oficiales de compilación, depuración y emulación para Android.'
              }
            ]
          }
        ]
      },

      {
        id: 'cloud',
        shortTitle: 'Cloud',
        title: 'Cloud & Deployment',
        description:
          'Despliegue de aplicaciones web y APIs, servicios gestionados y almacenamiento de medios en la nube.',
        viewBoxSize: 520,
        core: {
          type: 'icon',
          icon: 'cloud',
          size: 48,
          label: 'Cloud & Deployment'
        },
        orbits: [
          {
            radius: 104,
            duration: '28s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'render',
                name: 'Render',
                logo: './assets/logos/render.svg',
                tier: 'Despliegue backend',
                description:
                  'Publicación de servicios web, APIs y contenedores con despliegue continuo.'
              },
              {
                id: 'netlify',
                name: 'Netlify',
                logo: './assets/logos/netlify.svg',
                tier: 'Despliegue frontend',
                description:
                  'Alojamiento y publicación automática de aplicaciones web estáticas y SPAs.'
              },
              {
                id: 'railway',
                name: 'Railway',
                logo: './assets/logos/railway.svg',
                tier: 'Infraestructura cloud',
                description:
                  'Despliegue ágil de backends y bases de datos en entornos gestionados.'
              },
              {
                id: 'vercel',
                name: 'Vercel',
                logo: './assets/logos/vercel.svg',
                tier: 'Despliegue web y Next.js',
                description:
                  'Publicación continua y optimizada para aplicaciones web con React, Next.js y proyectos frontend.'
              }
            ]
          },
          {
            radius: 176,
            duration: '44s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 11,
            labelOffset: 36,
            items: [
              {
                id: 'supabase-cloud',
                name: 'Supabase',
                logo: './assets/logos/supabase.svg',
                tier: 'Backend as a Service',
                description:
                  'PostgreSQL en la nube, autenticación y APIs listas para consumo web y móvil.'
              },
              {
                id: 'cloudinary',
                name: 'Cloudinary',
                logo: './assets/logos/cloudinary.svg',
                tier: 'Gestión multimedia',
                description:
                  'Almacenamiento, optimización y entrega rápida de imágenes y recursos digitales.'
              }
            ]
          }
        ]
      },

      {
        id: 'design',
        shortTitle: 'Software Design',
        title: 'Software Design',
        description:
          'Prototipado de interfaces, modelado UML y diseño estructural previo a la implementación.',
        viewBoxSize: 520,
        core: {
          type: 'icon',
          icon: 'architecture',
          size: 46,
          label: 'Software Design'
        },
        orbits: [
          {
            radius: 104,
            duration: '30s',
            direction: 'normal',
            nodeRadius: 24,
            logoSize: 28,
            labelSize: 11,
            labelOffset: 39,
            items: [
              {
                id: 'figma',
                name: 'Figma',
                logo: './assets/logos/figma.svg',
                tier: 'Diseño UI / UX',
                description:
                  'Wireframes, prototipado interactivo y sistemas de diseño para web y móvil.'
              },
              {
                id: 'uml',
                name: 'UML',
                logo: './assets/logos/uml.svg',
                tier: 'Modelado de software',
                description:
                  'Diagramas de clases, casos de uso, secuencia y arquitectura de sistemas.'
              }
            ]
          },
          {
            radius: 176,
            duration: '46s',
            direction: 'reverse',
            nodeRadius: 21,
            logoSize: 24,
            labelSize: 10.5,
            labelOffset: 36,
            items: [
              {
                id: 'plantuml',
                name: 'PlantUML',
                logo: './assets/logos/plantuml.svg',
                tier: 'Diagramas como código',
                description:
                  'Generación de diagramas UML y documentación técnica versionable en texto plano.'
              },
              {
                id: 'visual-paradigm',
                name: 'Visual Paradigm',
                logo: './assets/logos/visual-paradigm.svg',
                missingAsset: true,
                slotCode: 'VP',
                tier: 'Herramienta CASE',
                description:
                  'Modelado visual de arquitectura de software, bases de datos y procesos.'
              }
            ]
          }
        ]
      }
    ]
  };

  global.SaraviaProfile = global.SaraviaProfile || {};
  global.SaraviaProfile.ecosystemData = ECOSYSTEM_DATA;
})(window);
