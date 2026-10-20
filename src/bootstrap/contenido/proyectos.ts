/** Contenido inicial de /proyectos y de la colección Proyecto. Es el texto que el sitio tenía antes del CMS. */
export const PROYECTOS_PAGINA_INICIAL = {
  seo: {
    metaTitulo: 'Proyectos — Hakamo',
    metaDescripcion:
      'Obras, energía e infraestructura donde Hakamo sostiene el talento en campo. Portafolio y galería de operaciones en República Dominicana.',
  },
  portada: {
    antetitulo: 'Proyectos',
    titulo: 'Obras que sostienen\nla operación',
    texto: 'Construcción, energía e infraestructura. El talento en campo, de Manzanillo a todo el país.',
    botonPrincipal: { texto: 'Ver obras', url: '#obras' },
    botonSecundario: { texto: 'En campo', url: '#en-campo' },
    fondo: { textoAlternativo: 'Obra y proyectos en campo', posicion: '55% 40%', tonoTexto: 'claro' },
  },
  galeria: {
    elementos: [
      { titulo: 'Obra y proyecto en campo' },
      { titulo: 'Equipo de gestión humana' },
      { titulo: 'Reunión de coordinación' },
    ],
  },
  obras: {},
  clip: {
    antetitulo: 'En campo',
    titulo: 'La obra, de cerca',
    enlace: 'https://instagram.com/hakamord',
    textoBoton: 'Ver en Instagram',
  },
  cierre: {
    antetitulo: 'Siguiente obra',
    titulo: '¿Su próximo proyecto?',
    texto: 'Armamos el equipo, la nómina y el acompañamiento en campo desde el día uno.',
    boton: { texto: 'Solicitar personal', url: '/empresas/solicitar' },
    botonSecundario: { texto: 'Busco empleo', url: '/empleos' },
  },
};

export const PROYECTOS_INICIALES = [
  {
    titulo: 'Energía · Manzanillo',
    slug: 'manzanillo',
    sector: 'Generación eléctrica',
    rol: 'Outsourcing de personal técnico y operativo',
    descripcion:
      'Dotación y gestión humana para proyectos de energía: contratación, nómina, cumplimiento y acompañamiento en campo.',
    estado: 'destacado',
    orden: 1,
    activo: true,
  },
  {
    titulo: 'Infraestructura · Grupo Cafra',
    slug: 'infraestructura',
    sector: 'Construcción e infraestructura',
    rol: 'Personal de obra y supervisión en campo',
    descripcion:
      'Equipos operativos para obras de infraestructura, con inducción, alineación HSE y seguimiento continuo en terreno.',
    estado: 'completado',
    orden: 2,
    activo: true,
  },
  {
    titulo: 'Retail · showrooms y plazas',
    slug: 'retail',
    sector: 'Comercio y diseño',
    rol: 'Reclutamiento y gestión documental',
    descripcion:
      'Apoyo en tiendas, showrooms y plazas comerciales: perfiles técnicos y administrativos con cumplimiento laboral.',
    estado: 'completado',
    orden: 3,
    activo: true,
  },
  {
    titulo: 'Cobertura nacional',
    slug: 'cobertura',
    sector: 'Montecristi y todo el país',
    rol: 'Payroll, TSS y supervisión',
    descripcion:
      'Operaciones adaptadas a cada obra y entorno: de Montecristi al territorio nacional, con el mismo estándar de servicio.',
    estado: 'en_proceso',
    orden: 4,
    activo: true,
  },
];
