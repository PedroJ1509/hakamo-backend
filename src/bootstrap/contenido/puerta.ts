/** Contenido inicial de la Puerta (/). Es el texto que el sitio tenía antes del CMS. */
export const PUERTA_INICIAL = {
  seo: {
    metaTitulo: 'Hakamo | Empresas y talento',
    metaDescripcion:
      'Hakamo conecta empresas con talento. Elige si buscas personal para tu operación o si buscas empleo.',
  },
  fondo: {
    textoAlternativo: '',
    posicion: '50% 50%',
    colorCapa: '#0e2744',
    opacidadCapa: 70,
  },
  menu: [
    { texto: 'Empresas', url: '/empresas' },
    { texto: 'Empleos', url: '/empleos' },
  ],
  antetitulo: 'Construcción · Industria · Gran escala',
  titulo: '¿Qué quieres hacer?',
  texto: 'Hakamo conecta empresas con talento para proyectos que construyen el país.',
  opcionEmpresa: {
    etiqueta: 'Soy empresa',
    titulo: 'Quiero conocer cómo Hakamo puede ayudarme',
    texto: 'Soluciones de personal, reuniones y más para tu proyecto.',
    boton: { texto: 'Conocer Hakamo', url: '/empresas' },
    colorFondo: '#FFFFFF',
  },
  opcionEmpleo: {
    etiqueta: 'Busco empleo',
    titulo: 'Quiero encontrar mi próxima oportunidad',
    texto: 'Vacantes en construcción, energía y salud e higiene.',
    boton: { texto: 'Ver vacantes', url: '/empleos' },
    colorFondo: '#D7E7F8',
  },
  datos: [
    { valor: '10+', etiqueta: 'años en construcción' },
    { valor: '2019', etiqueta: 'constitución como empresa' },
    { valor: '2021', etiqueta: 'nacimiento del outsourcing' },
    { valor: '100%', etiqueta: 'cumplimiento normativo' },
  ],
  tituloClientes: 'Empresas que confían en Hakamo',
  mostrarClientes: true,
};

export const CLIENTES_INICIALES = [
  { nombre: 'Grupo Cafra', sector: 'Construcción e infraestructura · RD', orden: 1 },
  { nombre: 'Energía 2000', sector: 'Generación Eléctrica · RD', orden: 2 },
  { nombre: 'Lindsayca Group', sector: 'Energía & Infraestructura', orden: 3 },
  { nombre: 'TSK Dominicana', sector: 'Ingeniería & Construcción', orden: 4 },
  { nombre: 'Grupo Ramos', sector: 'Retail · Supermercados', orden: 5 },
];
