/**
 * Submenús con los que arrancó el sitio. Cada uno cuelga de una entrada del
 * menú principal, identificada por su dirección. Se siembran una sola vez en
 * «Configuración del sitio → Submenús»; desde ahí se editan en el panel.
 */
export const SUBMENUS_INICIALES = [
  {
    padre: '/nosotros',
    enlaces: [
      { texto: 'Quiénes somos', url: '/nosotros' },
      { texto: 'Trayectoria', url: '/nosotros#trayectoria' },
      { texto: 'Misión y visión', url: '/nosotros#mision-vision' },
      { texto: 'Valores', url: '/nosotros#valores' },
    ],
  },
  {
    padre: '/servicios',
    enlaces: [
      { texto: 'Outsourcing de personal', url: '/servicios#servicio-outsourcing-personal' },
      { texto: 'Reclutamiento especializado', url: '/servicios#servicio-reclutamiento-especializado' },
      { texto: 'Payroll y administración de nómina', url: '/servicios#servicio-payroll-nomina' },
      { texto: 'Cumplimiento laboral y gestión documental', url: '/servicios#servicio-cumplimiento-laboral' },
      { texto: 'Supervisión de proyectos en campo', url: '/servicios#servicio-supervision-proyectos' },
      { texto: 'Seguridad y salud ocupacional', url: '/servicios#servicio-seguridad-salud-ocupacional' },
      { texto: 'Ver todos los servicios', url: '/servicios#catalogo' },
    ],
  },
  {
    padre: '/proyectos',
    enlaces: [
      { texto: 'Obras destacadas', url: '/proyectos#obras' },
      { texto: 'Historial por año', url: '/proyectos/historial' },
      { texto: 'En campo', url: '/proyectos#en-campo' },
    ],
  },
  {
    padre: '/contacto',
    enlaces: [
      { texto: 'Escríbenos', url: '/contacto#formulario' },
      { texto: 'Cómo llegar', url: '/contacto#ruta' },
      { texto: 'Preguntas frecuentes', url: '/faq' },
    ],
  },
  {
    padre: '/empleos/vacantes',
    enlaces: [
      { texto: 'Todas las vacantes', url: '/empleos/vacantes' },
      { texto: 'Vacantes por área', url: '/empleos#categorias' },
    ],
  },
  {
    padre: '/empleos#como',
    enlaces: [
      { texto: 'Cómo postularte', url: '/empleos#como' },
      { texto: 'Deja tu CV', url: '/empleos#tu-cv' },
    ],
  },
  {
    padre: '/empleo',
    enlaces: [
      { texto: 'Cómo es trabajar aquí', url: '/empleo' },
      { texto: 'Del registro al proyecto', url: '/empleo#proceso' },
      { texto: 'Dónde trabajarías', url: '/empleo#obras' },
    ],
  },
];
