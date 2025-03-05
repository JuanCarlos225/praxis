import { User, Quiz, QuizResult } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    registrationDate: '2023-01-15'
  }
];

export const mockQuizzes: Quiz[] = [
  {
    "id": "1",
    "title": "¿Qué son los mods y por qué son populares?",
    "description": "Los mods (abreviatura de modificaciones) son cambios hechos en videojuegos o aplicaciones para agregar o mejorar funciones. Los crean jugadores o programadores independientes y pueden incluir mejoras gráficas, nuevos personajes, misiones o ajustes en la jugabilidad.\n\nLos mods son populares porque permiten personalizar los juegos y hacerlos más divertidos. Juegos como Minecraft, Skyrim y Grand Theft Auto V tienen comunidades activas que crean miles de mods. Algunos mods han sido tan innovadores que las empresas los han incorporado en versiones oficiales o han servido de inspiración para nuevos juegos.\n\nAdemás, los mods ayudan a aprender sobre programación, diseño y desarrollo de software, fomentando la creatividad.\n\n*Tipos de Mods:*\n1. Mods gráficos: Mejoran los gráficos con texturas en alta calidad, mejor iluminación o efectos visuales.\n2. Mods de jugabilidad: Cambian la forma en que se juega, como la dificultad o la inteligencia artificial de los enemigos.\n3. Mods de contenido: Agregan cosas nuevas, como misiones, personajes, armas o mapas.\n4. Mods de corrección: Arreglan errores que los desarrolladores no solucionaron.\n5. Mods de conversión total: Transforman el juego en algo completamente nuevo, cambiando historia, gráficos y mecánicas.\n\nLos mods se instalan manualmente o con plataformas como Steam Workshop o Nexus Mods.",
    "questions": [
      {
        "id": "1-1",
        "text": "¿Qué es un mod en los videojuegos?",
        "options": [
          "Un error en el juego",
          "Un cambio o mejora en el juego",
          "Una actualización oficial",
          "Un programa externo"
        ],
        "correctAnswer": 1
      },
      {
        "id": "1-2",
        "text": "¿Qué juego es famoso por su comunidad de mods?",
        "options": [
          "FIFA 23",
          "Call of Duty: Warzone",
          "The Elder Scrolls V: Skyrim",
          "League of Legends"
        ],
        "correctAnswer": 2
      },
      {
        "id": "1-3",
        "text": "¿Por qué los jugadores usan mods?",
        "options": [
          "Para personalizar la experiencia",
          "Para hacer los juegos más cortos",
          "Porque son obligatorios",
          "Porque los crean los desarrolladores originales"
        ],
        "correctAnswer": 0
      },
      {
        "id": "1-4",
        "text": "¿Qué tipo de mod mejora los gráficos de un juego?",
        "options": [
          "Mod de jugabilidad",
          "Mod de contenido",
          "Mod gráfico",
          "Mod de conversión total"
        ],
        "correctAnswer": 2
      },
      {
        "id": "1-5",
        "text": "¿Dónde es seguro descargar mods?",
        "options": [
          "En cualquier página web",
          "En foros desconocidos",
          "En plataformas oficiales como Steam Workshop",
          "En enlaces compartidos sin verificar"
        ],
        "correctAnswer": 2
      },
      {
        "id": "1-6",
        "text": "¿Qué mod cambia por completo la historia y mecánicas del juego?",
        "options": [
          "Mod gráfico",
          "Mod de contenido",
          "Mod de conversión total",
          "Mod de jugabilidad"
        ],
        "correctAnswer": 2
      },
      {
        "id": "1-7",
        "text": "¿Qué habilidad se puede aprender creando mods?",
        "options": [
          "Programación",
          "Cálculo avanzado",
          "Escritura de novelas",
          "Producción musical"
        ],
        "correctAnswer": 0
      }
    ]
  },  
  {
    id: '2',
    title: 'Riesgos principales: virus, malware, robo de datos, vulnerabilidades',
    description: "Los mods pueden ser una gran herramienta para mejorar la experiencia en los videojuegos, pero también pueden representar riesgos si no se descargan de fuentes confiables. Algunos mods maliciosos pueden contener virus, malware o programas diseñados para robar información personal.\n\nRiesgos principales\n1. Virus y malware\n○ Algunos mods pueden incluir programas dañinos que infectan la computadora o el dispositivo móvil. Estos pueden ralentizar el sistema, borrar archivos o incluso permitir que hackers accedan al dispositivo.\n2. Robo de datos personales\n○ Algunos mods maliciosos pueden capturar información privada, como nombres de usuario, contraseñas o datos bancarios. Esto puede poner en riesgo la seguridad de las cuentas y la información financiera del usuario.\n3. Acceso no autorizado y vulnerabilidades\n○ Algunos mods requieren permisos especiales para funcionar. Si el usuario instala un mod sin verificar su origen, puede darle acceso a su dispositivo a personas malintencionadas.\n4. Baneos en juegos en línea\n○ Muchos juegos prohíben el uso de mods no oficiales en sus servidores en línea. Usar mods en estos juegos puede resultar en la suspensión o eliminación de la cuenta del usuario.\n5. Pérdida de rendimiento del dispositivo\n○ Algunos mods no están bien optimizados y pueden hacer que el juego o el dispositivo se vuelvan más lentos o se bloqueen.\n\nPara evitar estos riesgos, siempre se recomienda descargar mods solo de plataformas confiables y revisar los comentarios de otros usuarios antes de instalarlos.",
    questions: [
      {
        id: '2-1',
        text: '¿Cuál es uno de los principales riesgos de descargar mods de fuentes no confiables?',
        options: [
          'Mejorar la calidad gráfica del juego',
          'Obtener nuevas misiones',
          'Incluir virus o malware',
          'Hacer que el juego sea más rápido'
        ],
        correctAnswer: 2
      },
      {
        id: '2-2',
        text: '¿Qué tipo de información pueden robar algunos mods maliciosos?',
        options: [
          'Solo la configuración del juego',
          'Datos personales, como contraseñas y cuentas bancarias',
          'Los gráficos del juego',
          'Los nombres de los personajes del juego'
        ],
        correctAnswer: 1
      },
      {
        id: '2-3',
        text: '¿Qué sucede si un mod pide permisos innecesarios en el dispositivo?',
        options: [
          'Puede dar acceso a hackers',
          'Hará que el juego sea más divertido',
          'Mejorará el rendimiento del dispositivo',
          'No tiene ninguna consecuencia'
        ],
        correctAnswer: 0
      },
      {
        id: '2-4',
        text: '¿Qué problema pueden causar los mods en juegos en línea?',
        options: [
          'Obtener más puntos en el juego',
          'Ser baneado o expulsado del servidor',
          'Mejorar la velocidad de la conexión',
          'Hacer que el juego sea más fácil'
        ],
        correctAnswer: 1
      },
      {
        id: '2-5',
        text: '¿Cómo pueden afectar los mods mal optimizados al dispositivo?',
        options: [
          'Mejoran la duración de la batería',
          'Aceleran el rendimiento del juego',
          'Pueden hacer que el juego o el dispositivo se vuelvan lentos',
          'No afectan en absoluto al rendimiento'
        ],
        correctAnswer: 2
      },
      {
        id: '2-6',
        text: '¿Cuál es una forma segura de evitar instalar mods peligrosos?',
        options: [
          'Descargar mods desde cualquier página sin verificar',
          'Usar solo mods recomendados en foros confiables',
          'Instalar cualquier mod sin leer comentarios',
          'Aceptar todos los permisos sin revisarlos'
        ],
        correctAnswer: 1
      },
      {
        id: '2-7',
        text: '¿Por qué es importante leer los comentarios antes de descargar un mod?',
        options: [
          'Para saber si el mod es seguro y funciona bien',
          'Para aprender a programar mods',
          'Para saber cuántas descargas tiene el mod',
          'Para desbloquear niveles secretos en el juego'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    "id": "3",
    "title": "¿Cómo se infiltran los mods maliciosos en aplicaciones y juegos?",
    "description": "Los mods maliciosos pueden infiltrarse en dispositivos de diversas formas, muchas veces sin que los usuarios se den cuenta. A continuación, se explican los métodos más comunes utilizados por los creadores de mods peligrosos:\n\n1. Descargas desde sitios no oficiales\nMuchos mods maliciosos se encuentran en páginas web no confiables que imitan plataformas legítimas. Al descargar desde estas fuentes, el usuario puede instalar sin querer software dañino.\n\n2. Mods empaquetados con software malicioso\nAlgunos mods incluyen archivos adicionales ocultos que contienen virus, spyware o ransomware. Estos programas pueden robar información personal o dañar el sistema del usuario.\n\n3. Ingeniería social y engaños\nAlgunos hackers crean mods falsos con nombres atractivos o promesas de mejoras increíbles, pero en realidad contienen malware. También pueden usar videos, anuncios o foros para promocionarlos.\n\n4. Mods que requieren permisos innecesarios\nCuando un mod solicita permisos excesivos, como acceso a datos personales o conexión a internet sin razón aparente, es posible que esté diseñado para robar información o controlar el dispositivo.\n\n5. Archivos ejecutables en lugar de simples modificaciones\nLos mods legítimos suelen ser archivos de juego modificados, pero los peligrosos pueden incluir ejecutables (.exe o .apk) que instalan malware al abrirse.\n\n¿Cómo evitar instalar mods maliciosos?\n● Descargar mods solo desde fuentes confiables, como Steam Workshop o Nexus Mods.\n● Leer comentarios y valoraciones de otros usuarios.\n● Verificar que el mod no pida permisos sospechosos. Evitar mods que requieran instalar programas adicionales desconocidos.",
    "questions": [
      {
        "id": "3-1",
        "text": "¿Dónde es más probable encontrar mods maliciosos?",
        "options": [
          "En tiendas oficiales de juegos",
          "En páginas web no oficiales",
          "En foros de desarrolladores",
          "En archivos de instalación originales"
        ],
        "correctAnswer": 1
      },
      {
        "id": "3-2",
        "text": "¿Qué es una señal de que un mod podría ser peligroso?",
        "options": [
          "Que tenga muchas descargas",
          "Que sea recomendado en la página oficial del juego",
          "Que solicite permisos innecesarios",
          "Que agregue contenido adicional al juego"
        ],
        "correctAnswer": 2
      },
      {
        "id": "3-3",
        "text": "¿Por qué algunos mods incluyen archivos ejecutables?",
        "options": [
          "Para mejorar el rendimiento del juego",
          "Para actualizar el mod automáticamente",
          "Para instalar malware sin que el usuario lo note",
          "Para corregir errores en el juego"
        ],
        "correctAnswer": 2
      },
      {
        "id": "3-4",
        "text": "¿Qué estrategia usan los hackers para engañar a los usuarios?",
        "options": [
          "Modificar las texturas del juego",
          "Publicar mods falsos con nombres atractivos",
          "Usar Steam Workshop para distribuir malware",
          "Crear juegos completamente nuevos"
        ],
        "correctAnswer": 1
      },
      {
        "id": "3-5",
        "text": "¿Cómo puedes evitar descargar mods peligrosos?",
        "options": [
          "Descargando cualquier mod sin verificar su origen",
          "Evitando leer reseñas y comentarios",
          "Usando páginas confiables como Nexus Mods",
          "Instalando mods de cualquier enlace en redes sociales"
        ],
        "correctAnswer": 2
      },
      {
        "id": "3-6",
        "text": "¿Qué tipo de archivo es más sospechoso en un mod?",
        "options": [
          "Archivos de imagen (.png, .jpg)",
          "Archivos de texto (.txt)",
          "Archivos ejecutables (.exe, .apk)",
          "Archivos de sonido (.mp3, .wav)"
        ],
        "correctAnswer": 2
      },
      {
        "id": "3-7",
        "text": "Si un mod solicita permisos para acceder a datos personales, ¿qué debes hacer?",
        "options": [
          "Instalarlo sin problemas",
          "Aceptar los permisos solo si es un juego popular",
          "Revisar si realmente necesita esos permisos",
          "Compartir el mod con otros antes de probarlo"
        ],
        "correctAnswer": 2
      }
    ]
  },
  {
    "id": "4",
    "title": "Casos reales de usuarios afectados",
    "description": "Aunque muchas personas creen que los mods son inofensivos, existen numerosos casos donde los usuarios han sido afectados por mods maliciosos. Aquí hay algunos ejemplos reales:\n\nCaso 1: Robo de cuentas en GTA V\nUn grupo de jugadores descargó un mod que prometía mejoras gráficas avanzadas. Sin embargo, el mod contenía un troyano que robó sus datos de inicio de sesión y vendió sus cuentas en la dark web.\n\nCaso 2: Malware en mods de Minecraft\nEn 2021, se descubrió que varios mods de Minecraft disponibles en páginas no oficiales contenían un virus que bloqueaba las computadoras y pedía un pago para desbloquearlas.\n\nCaso 3: Datos personales comprometidos en Android\nUn mod popular para un juego móvil pedía permisos para acceder a la cámara y los contactos. Los desarrolladores descubrieron que estaba enviando información de los usuarios a un servidor desconocido.\n\nCaso 4: Baneo de jugadores en Fortnite\nUn mod que prometía ventajas en Fortnite resultó ser un programa de trampas que, al ser detectado, provocó el baneo de cientos de jugadores.\n\nEstos casos demuestran la importancia de descargar mods solo de fuentes confiables y revisar bien los permisos que solicitan.",
    "questions": [
      {
        "id": "4-1",
        "text": "¿Qué sucedió con los jugadores que descargaron un mod gráfico para GTA V?",
        "options": [
          "Mejoraron la calidad del juego",
          "Ganaron acceso a contenido exclusivo",
          "Perdieron sus cuentas por robo de datos",
          "Obtuvieron dinero extra en el juego"
        ],
        "correctAnswer": 2
      },
      {
        "id": "4-2",
        "text": "¿Qué tipo de ataque se detectó en algunos mods de Minecraft?",
        "options": [
          "Un virus que bloqueaba las computadoras",
          "Un mod que mejoraba la inteligencia artificial",
          "Un error que hacía que el juego se cerrara",
          "Una mejora en la velocidad del juego"
        ],
        "correctAnswer": 0
      },
      {
        "id": "4-3",
        "text": "¿Por qué un mod de Android fue peligroso?",
        "options": [
          "Pedía permisos innecesarios y enviaba datos a servidores desconocidos",
          "No tenía suficientes descargas",
          "No mejoraba la jugabilidad del juego",
          "No era compatible con algunos dispositivos"
        ],
        "correctAnswer": 0
      },
      {
        "id": "4-4",
        "text": "¿Qué problema enfrentaron algunos jugadores de Fortnite por usar mods?",
        "options": [
          "Fueron baneados",
          "Su cuenta fue mejorada",
          "Obtuvieron más recompensas",
          "El mod les permitió jugar gratis"
        ],
        "correctAnswer": 0
      },
      {
        "id": "4-5",
        "text": "¿Cómo pueden los usuarios evitar caer en estos problemas?",
        "options": [
          "Instalando cualquier mod sin precaución",
          "Descargando mods solo de páginas oficiales",
          "Compartiendo mods sospechosos con otros jugadores",
          "Ignorando los comentarios de otros usuarios"
        ],
        "correctAnswer": 1
      },
      {
        "id": "4-6",
        "text": "¿Qué acción sospechosa realizaba un mod malicioso en teléfonos Android?",
        "options": [
          "Bloquear el teléfono permanentemente",
          "Acceder a la cámara y los contactos sin permiso",
          "Desinstalar otros juegos automáticamente",
          "Mejorar la calidad de los gráficos sin costo"
        ],
        "correctAnswer": 1
      },
      {
        "id": "4-7",
        "text": "¿Qué hicieron los hackers con las cuentas robadas en GTA V?",
        "options": [
          "Las usaron para jugar gratis",
          "Las vendieron en la dark web",
          "Las regalaron a otros jugadores",
          "Las eliminaron permanentemente"
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "id": "5",
    "title": "Cómo protegerse de mods maliciosos",
    "description": "Instalar mods puede ser seguro si se toman las precauciones adecuadas. A continuación, te mostramos cómo protegerte de mods maliciosos y evitar poner en riesgo tu dispositivo y tu información personal.\n\n1. Descargar mods solo de fuentes confiables\nPlataformas oficiales como Steam Workshop, Nexus Mods y ModDB verifican los mods antes de publicarlos, reduciendo el riesgo de malware. Evita descargar mods de páginas desconocidas o enlaces en redes sociales.\n\n2. Leer comentarios y reseñas antes de instalar\nLas opiniones de otros usuarios pueden revelar si un mod es confiable o si ha causado problemas. Si un mod tiene muchas quejas o advertencias, es mejor evitarlo.\n\n3. Analizar los archivos antes de instalarlos\nUsa un antivirus o un escáner de malware para revisar los archivos descargados. Si un mod incluye archivos ejecutables sospechosos, es recomendable no instalarlo.\n\n4. Evitar mods que pidan permisos innecesarios\nSi un mod solicita acceso a tus datos personales, cámara o conexión a internet sin razón lógica, podría tratarse de un software malicioso.\n\n5. Mantener el sistema y el antivirus actualizados\nTener un antivirus activo y actualizado ayuda a detectar y eliminar posibles amenazas. También es importante actualizar el sistema operativo y los juegos para corregir vulnerabilidades de seguridad.\n\n6. Realizar copias de seguridad antes de instalar un mod\nAntes de modificar un juego, guarda una copia de seguridad de tus archivos originales. Así, si algo sale mal, podrás restaurar el juego sin perder tu progreso.\n\n7. Desinstalar mods sospechosos inmediatamente\nSi notas un comportamiento extraño en tu dispositivo después de instalar un mod (fallos, lentitud, accesos no autorizados), desinstálalo de inmediato y ejecuta un análisis de seguridad.\n\nSiguiendo estos consejos, puedes disfrutar de los mods sin comprometer tu seguridad ni la de tu dispositivo.",
    "questions": [
      {
        "id": "5-1",
        "text": "¿Cuál es la mejor fuente para descargar mods de forma segura?",
        "options": [
          "Páginas desconocidas con enlaces directos",
          "Steam Workshop y Nexus Mods",
          "Redes sociales y foros sin moderación",
          "Cualquier sitio web que ofrezca descargas gratuitas"
        ],
        "correctAnswer": 1
      },
      {
        "id": "5-2",
        "text": "¿Por qué es importante leer comentarios antes de descargar un mod?",
        "options": [
          "Para ver si el mod es popular",
          "Para saber si el mod es seguro y funciona correctamente",
          "Para asegurarse de que el mod es gratuito",
          "Para ver si el creador responde rápido"
        ],
        "correctAnswer": 1
      },
      {
        "id": "5-3",
        "text": "¿Qué herramienta se recomienda usar antes de instalar un mod?",
        "options": [
          "Un bloqueador de anuncios",
          "Un escáner de malware o antivirus",
          "Un convertidor de archivos",
          "Un gestor de descargas"
        ],
        "correctAnswer": 1
      },
      {
        "id": "5-4",
        "text": "Si un mod solicita acceso a tu cámara o datos personales sin motivo, ¿qué debes hacer?",
        "options": [
          "Ignorarlo y continuar con la instalación",
          "Buscar otro mod que no pida permisos sospechosos",
          "Darle los permisos, pero cerrar el juego después",
          "Compartirlo con amigos para probarlo juntos"
        ],
        "correctAnswer": 1
      },
      {
        "id": "5-5",
        "text": "¿Qué medida de seguridad ayuda a evitar perder datos al instalar mods?",
        "options": [
          "Descargar mods de cualquier fuente",
          "Realizar una copia de seguridad de los archivos originales",
          "Instalar varios mods al mismo tiempo",
          "Borrar el antivirus antes de instalar el mod"
        ],
        "correctAnswer": 1
      },
      {
        "id": "5-6",
        "text": "¿Qué acción debes tomar si un mod hace que tu juego funcione mal o sospechas que es peligroso?",
        "options": [
          "Esperar a que el problema se arregle solo",
          "Desinstalar el mod y hacer un análisis de seguridad",
          "Reiniciar el juego sin borrar el mod",
          "Compartir el mod con otros jugadores para ver si les pasa lo mismo"
        ],
        "correctAnswer": 1
      },
      {
        "id": "5-7",
        "text": "¿Por qué es importante mantener actualizado el antivirus cuando usas mods?",
        "options": [
          "Para mejorar la velocidad de descarga de los mods",
          "Para detectar posibles amenazas en archivos sospechosos",
          "Para recibir más recomendaciones de mods",
          "Para que los juegos funcionen más rápido"
        ],
        "correctAnswer": 1
      }
    ]
  }
];

export const mockQuizResults: QuizResult[] = [
  {
    id: '1',
    userId: '1',
    quizId: '1',
    score: 3,
    percentage: 100,
    completedAt: '2023-05-10T14:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    quizId: '2',
    score: 2,
    percentage: 75,
    completedAt: '2023-05-12T10:15:00Z'
  },
  {
    id: '3',
    userId: '1',
    quizId: '3',
    score: 3,
    percentage: 100,
    completedAt: '2023-05-15T16:45:00Z'
  },
  {
    id: '4',
    userId: '1',
    quizId: '4',
    score: 2,
    percentage: 80,
    completedAt: '2023-05-18T09:20:00Z'
  },
  {
    id: '5',
    userId: '1',
    quizId: '5',
    score: 3,
    percentage: 100,
    completedAt: '2023-05-15T16:45:00Z'
  }
];