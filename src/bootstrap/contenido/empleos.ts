/** Contenido inicial de /empleos. Es el texto que el sitio tenía antes del CMS. */
export const EMPLEOS_INICIAL = {
  seo: {
    metaTitulo: 'Empleos — Hakamo',
    metaDescripcion:
      'Revisa vacantes y deja tu perfil con Hakamo. Crea tu currículum o súbelo gratis. Empleo en República Dominicana.',
  },
  portada: {
    titulo: 'Tu próxima oportunidad empieza aquí.',
    texto: 'Busca un puesto o deja tu CV. Si hay match, te contactamos.',
    botonSecundario: { texto: '¿No ves tu puesto? Deja tu CV →', url: '#tu-cv' },
  },
  textoBuscador: 'Puesto, área o ciudad',
  botonBuscar: 'Buscar',
  beneficios: [{ texto: 'Gratis' }, { texto: 'Vacantes reales' }, { texto: 'Te ayudamos con el CV' }, { texto: 'Te avisamos' }],
  areas: {
    titulo: 'Elige tu área',
    texto: 'Si ninguna de arriba es la tuya, entra por categoría.',
    boton: { texto: 'Ver todas →', url: '/empleos/vacantes' },
  },
  sinVacantes: {
    antetitulo: 'Vacantes',
    titulo: 'Ahora no hay puestos abiertos',
    texto: 'Deja tu perfil y te avisamos cuando haya uno para ti.',
  },
  masOportunidades: {
    titulo: 'Más oportunidades',
    boton: { texto: 'Ver todas las vacantes →', url: '/empleos/vacantes' },
    botonSecundario: { texto: 'Ver puesto →', url: '#' },
  },
  como: {
    titulo: 'Cómo postularte',
    elementos: [
      { etiqueta: '01', titulo: 'Elige un área', texto: 'O busca por puesto y ciudad.', enlace: '#categorias' },
      { etiqueta: '02', titulo: 'Abre el puesto', texto: 'Postúlate desde la vacante.', enlace: '/empleos/vacantes' },
      { etiqueta: '03', titulo: 'O deja tu CV', texto: 'Si aún no hay match, te avisamos.', enlace: '#tu-cv' },
    ],
  },
  tuCv: {
    titulo: 'Deja tu perfil',
    texto: 'Quedas en nuestra base y te avisamos. También puedes escribir a {correoReclutamiento}.',
    boton: { texto: '¿Dudas? WhatsApp {telefono}', url: 'whatsapp' },
    elementos: [
      { etiqueta: 'Sin CV', titulo: 'Crear mi CV', texto: 'Vamos a armar tu CV juntos' },
      { etiqueta: 'Ya tengo CV', titulo: 'Subir archivo', texto: 'Carga tu CV y déjanos tus datos' },
    ],
  },
};
