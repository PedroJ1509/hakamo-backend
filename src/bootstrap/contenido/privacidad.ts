/** Contenido inicial de /privacidad. Es el texto que el sitio tenía antes del CMS. */
export const PRIVACIDAD_INICIAL = {
  seo: {
    metaTitulo: 'Privacidad — Hakamo',
    metaDescripcion: 'Qué datos recoge Hakamo cuando una empresa solicita personal o una persona se postula.',
  },
  menu: [
    { texto: 'Empresas', url: '/empresas' },
    { texto: 'Talentos', url: '/empleos' },
  ],
  antetitulo: 'Datos personales',
  titulo: 'Privacidad',
  contenido: [
    'Hakamo recoge solo lo que hace falta para conectar una empresa con talento o para responder un mensaje.',
    'Si buscas empleo, guardamos el nombre, el contacto, el CV y la vacante a la que te postulas. Esos datos los usa el equipo de reclutamiento para evaluar tu perfil y, si avanzas, presentarlos a la empresa del puesto.',
    'Si eres empresa, guardamos el nombre de la compañía, el contacto y el perfil que solicitas. Esa información no se publica en el portal de empleos.',
    'No vendemos datos. Puedes pedir ver, corregir o borrar tu información escribiendo a {correo}.',
  ].join('\n\n'),
};
