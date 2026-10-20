/** Configuración inicial del sitio. Son los datos que el sitio tenía antes del CMS. */
export const SITIO_INICIAL = {
  nombre: 'Hakamo',
  nombreLegal: 'Hakamo Gestión Humana & Outsourcing',
  contacto: {
    telefono: '829-679-0671',
    telefonoAlt: '829-679-6842',
    email: 'gestionhumanahakamo@gmail.com',
    emailReclutamiento: 'info@hakamo.com.do',
    direccion: 'Montecristi, República Dominicana',
    latitud: 19.8469,
    longitud: -71.6453,
  },
  redes: [
    { nombre: 'Instagram', texto: 'Instagram @hakamord', url: 'https://instagram.com/hakamord' },
    { nombre: 'LinkedIn', texto: 'LinkedIn · Hakamo', url: 'https://www.linkedin.com/company/hakamo' },
  ],
  menuEmpresas: [
    { texto: 'Empresas', url: '/empresas' },
    { texto: 'Nosotros', url: '/nosotros' },
    { texto: 'Servicios', url: '/servicios' },
    { texto: 'Proyectos', url: '/proyectos' },
    { texto: 'Contacto', url: '/contacto' },
    { texto: 'Solicitar', url: '/empresas/solicitar' },
  ],
  botonCabeceraEmpresas: { texto: 'Busco empleo', url: '/empleos' },
  menuEmpleos: [
    { texto: 'Empleos', url: '/empleos' },
    { texto: 'Áreas', url: '/empleos#categorias' },
    { texto: 'Vacantes', url: '/empleos/vacantes' },
    { texto: 'Postularte', url: '/empleos#como' },
    { texto: 'Tu CV', url: '/empleos#tu-cv' },
    { texto: 'Cultura', url: '/empleo' },
  ],
  botonCabeceraEmpleos: { texto: 'Empresas', url: '/empresas' },
  pie: {
    texto: 'Personal, nómina y cumplimiento para obras y plantas.',
    botonEmpresas: { texto: 'Solicitar personal', url: '/empresas/solicitar' },
    botonEmpleos: { texto: 'Buscar empleo', url: '/empleos/vacantes' },
    textoPrivacidad: 'Privacidad',
  },
  mostrarWhatsapp: true,
  seo: {
    metaTitulo: 'Hakamo | Gestión Humana & Outsourcing',
    metaDescripcion:
      'Impulsamos talentos, fortalecemos empresas. Outsourcing de gestión humana para el sector construcción: reclutamiento, nómina, cumplimiento legal y supervisión de proyectos.',
  },
};
