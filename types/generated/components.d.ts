import type { Schema, Struct } from '@strapi/strapi';

export interface ComunBoton extends Struct.ComponentSchema {
  collectionName: 'components_comun_botons';
  info: {
    displayName: 'Bot\u00F3n o enlace';
    icon: 'cursor';
  };
  attributes: {
    texto: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComunDato extends Struct.ComponentSchema {
  collectionName: 'components_comun_datos';
  info: {
    description: 'Cifra destacada con su etiqueta';
    displayName: 'Dato';
    icon: 'chartBubble';
  };
  attributes: {
    etiqueta: Schema.Attribute.String & Schema.Attribute.Required;
    valor: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComunElemento extends Struct.ComponentSchema {
  collectionName: 'components_comun_elementos';
  info: {
    displayName: 'Elemento de lista';
    icon: 'bulletList';
  };
  attributes: {
    texto: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComunFondo extends Struct.ComponentSchema {
  collectionName: 'components_comun_fondos';
  info: {
    description: 'Imagen o color de fondo de una secci\u00F3n, con capa encima para que el texto se lea';
    displayName: 'Fondo';
    icon: 'picture';
  };
  attributes: {
    color: Schema.Attribute.String;
    colorCapa: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'videos'>;
    opacidadCapa: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    posicion: Schema.Attribute.String & Schema.Attribute.DefaultTo<'50% 50%'>;
    textoAlternativo: Schema.Attribute.String;
    tonoTexto: Schema.Attribute.Enumeration<['oscuro', 'claro']>;
  };
}

export interface ComunHero extends Struct.ComponentSchema {
  collectionName: 'components_comun_heroes';
  info: {
    description: 'Primera secci\u00F3n de una p\u00E1gina: textos, botones y fondo. Un salto de l\u00EDnea en el t\u00EDtulo lo parte en dos l\u00EDneas';
    displayName: 'Portada de p\u00E1gina';
    icon: 'landscape';
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    botonPrincipal: Schema.Attribute.Component<'comun.boton', false>;
    botonSecundario: Schema.Attribute.Component<'comun.boton', false>;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.Text;
  };
}

export interface ComunImagenExpandible extends Struct.ComponentSchema {
  collectionName: 'components_comun_imagen_expandibles';
  info: {
    description: 'Imagen o video que crece al bajar, con t\u00EDtulo y texto encima';
    displayName: 'Imagen que se expande';
    icon: 'expand';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images' | 'videos'>;
    indicacion: Schema.Attribute.String;
    texto: Schema.Attribute.Text;
    textoAlternativo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ComunItem extends Struct.ComponentSchema {
  collectionName: 'components_comun_items';
  info: {
    description: 'Tarjeta o fila de una secci\u00F3n: etiqueta (a\u00F1o, n\u00FAmero, iniciales), t\u00EDtulo, texto e imagen';
    displayName: 'Elemento';
    icon: 'bulletList';
  };
  attributes: {
    enlace: Schema.Attribute.String;
    etiqueta: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images'>;
    subtitulo: Schema.Attribute.String;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface ComunRed extends Struct.ComponentSchema {
  collectionName: 'components_comun_reds';
  info: {
    displayName: 'Red social';
    icon: 'earth';
  };
  attributes: {
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    texto: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComunSeccion extends Struct.ComponentSchema {
  collectionName: 'components_comun_seccions';
  info: {
    description: 'Bloque de una p\u00E1gina: textos, lista de elementos, bot\u00F3n y fondo';
    displayName: 'Secci\u00F3n';
    icon: 'layout';
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    boton: Schema.Attribute.Component<'comun.boton', false>;
    botonSecundario: Schema.Attribute.Component<'comun.boton', false>;
    elementos: Schema.Attribute.Component<'comun.item', true>;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    mostrar: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface ComunSeo extends Struct.ComponentSchema {
  collectionName: 'components_comun_seos';
  info: {
    description: 'T\u00EDtulo y descripci\u00F3n para buscadores y redes';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    imagenCompartir: Schema.Attribute.Media<'images'>;
    metaDescripcion: Schema.Attribute.Text;
    metaTitulo: Schema.Attribute.String;
  };
}

export interface EmpresasAcceso extends Struct.ComponentSchema {
  collectionName: 'components_empresas_accesos';
  info: {
    displayName: 'Acceso a otra p\u00E1gina';
    icon: 'arrowRight';
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images'>;
    textoEnlace: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqGrupo extends Struct.ComponentSchema {
  collectionName: 'components_faq_grupos';
  info: {
    description: 'Pesta\u00F1a de la p\u00E1gina de preguntas frecuentes';
    displayName: 'Grupo de preguntas';
    icon: 'folder';
  };
  attributes: {
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    preguntas: Schema.Attribute.Component<'faq.pregunta', true>;
  };
}

export interface FaqPregunta extends Struct.ComponentSchema {
  collectionName: 'components_faq_preguntas';
  info: {
    displayName: 'Pregunta';
    icon: 'question';
  };
  attributes: {
    pregunta: Schema.Attribute.String & Schema.Attribute.Required;
    respuesta: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProyectosClip extends Struct.ComponentSchema {
  collectionName: 'components_proyectos_clips';
  info: {
    description: 'Video a pantalla completa. Sin video, la imagen enlaza a otra p\u00E1gina (Instagram, YouTube\u2026)';
    displayName: 'Clip en campo';
    icon: 'play';
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    enlace: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images'>;
    mostrar: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    textoBoton: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface PuertaOpcion extends Struct.ComponentSchema {
  collectionName: 'components_puerta_opcions';
  info: {
    description: 'Tarjeta para elegir entre empresas y empleo';
    displayName: 'Opci\u00F3n de la puerta';
    icon: 'arrowRight';
  };
  attributes: {
    boton: Schema.Attribute.Component<'comun.boton', false>;
    colorFondo: Schema.Attribute.String;
    etiqueta: Schema.Attribute.String;
    imagenFondo: Schema.Attribute.Media<'images'>;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedValor extends Struct.ComponentSchema {
  collectionName: 'components_shared_valors';
  info: {
    displayName: 'Valor';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SitioContacto extends Struct.ComponentSchema {
  collectionName: 'components_sitio_contactos';
  info: {
    description: 'Se usan en la cabecera, el pie, el bot\u00F3n de WhatsApp y las p\u00E1ginas';
    displayName: 'Datos de contacto';
    icon: 'phone';
  };
  attributes: {
    direccion: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    emailReclutamiento: Schema.Attribute.Email;
    enlaceMapa: Schema.Attribute.String;
    latitud: Schema.Attribute.Decimal;
    longitud: Schema.Attribute.Decimal;
    telefono: Schema.Attribute.String;
    telefonoAlt: Schema.Attribute.String;
  };
}

export interface SitioPie extends Struct.ComponentSchema {
  collectionName: 'components_sitio_pies';
  info: {
    displayName: 'Pie de p\u00E1gina';
    icon: 'layout';
  };
  attributes: {
    botonEmpleos: Schema.Attribute.Component<'comun.boton', false>;
    botonEmpresas: Schema.Attribute.Component<'comun.boton', false>;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    fondoEmpleos: Schema.Attribute.Component<'comun.fondo', false>;
    texto: Schema.Attribute.Text;
    textoPrivacidad: Schema.Attribute.String;
  };
}

export interface SolicitarTextos extends Struct.ComponentSchema {
  collectionName: 'components_solicitar_textos';
  info: {
    description: 'Etiquetas, ejemplos y botones del formulario por pasos';
    displayName: 'Textos del formulario';
    icon: 'pencil';
  };
  attributes: {
    antetituloModalidad: Schema.Attribute.String;
    antetituloPersonal: Schema.Attribute.String;
    antetituloResumen: Schema.Attribute.String;
    botonAtras: Schema.Attribute.String;
    botonContinuar: Schema.Attribute.String;
    botonEnviando: Schema.Attribute.String;
    botonEnviar: Schema.Attribute.String;
    ejemploCorreo: Schema.Attribute.String;
    ejemploDetallePersonal: Schema.Attribute.String;
    ejemploDetalleReunion: Schema.Attribute.String;
    ejemploEmpresa: Schema.Attribute.String;
    ejemploMensaje: Schema.Attribute.String;
    ejemploNombre: Schema.Attribute.String;
    ejemploTelefono: Schema.Attribute.String;
    etiquetaCorreo: Schema.Attribute.String;
    etiquetaDetalle: Schema.Attribute.String;
    etiquetaEmpresa: Schema.Attribute.String;
    etiquetaFecha: Schema.Attribute.String;
    etiquetaMensaje: Schema.Attribute.String;
    etiquetaNombre: Schema.Attribute.String;
    etiquetaTelefono: Schema.Attribute.String;
    preguntaModalidad: Schema.Attribute.String;
    preguntaPersonal: Schema.Attribute.String;
    textoResumen: Schema.Attribute.String;
    tituloResumen: Schema.Attribute.String;
  };
}

export interface VacanteTextos extends Struct.ComponentSchema {
  collectionName: 'components_vacante_textos';
  info: {
    description: 'Textos fijos de la ficha de cada vacante y su formulario. {correoReclutamiento} se cambia por el correo de Configuraci\u00F3n del sitio';
    displayName: 'Textos de la ficha';
    icon: 'pencil';
  };
  attributes: {
    antetituloDescripcion: Schema.Attribute.String;
    antetituloPostulacion: Schema.Attribute.String;
    antetituloRequisitos: Schema.Attribute.String;
    cargando: Schema.Attribute.String;
    cierra: Schema.Attribute.String;
    crealoAqui: Schema.Attribute.String;
    ejemploCarta: Schema.Attribute.String;
    ejemploCorreo: Schema.Attribute.String;
    ejemploNombre: Schema.Attribute.String;
    ejemploTelefono: Schema.Attribute.String;
    enviadaTexto: Schema.Attribute.String;
    enviadaTitulo: Schema.Attribute.String;
    enviando: Schema.Attribute.String;
    enviar: Schema.Attribute.String;
    error: Schema.Attribute.Text;
    etiquetaCarta: Schema.Attribute.String;
    etiquetaCorreo: Schema.Attribute.String;
    etiquetaCv: Schema.Attribute.String;
    etiquetaNombre: Schema.Attribute.String;
    etiquetaTelefono: Schema.Attribute.String;
    noDisponible: Schema.Attribute.String;
    noExisteTexto: Schema.Attribute.String;
    noExisteTitulo: Schema.Attribute.String;
    postularme: Schema.Attribute.String;
    sinArea: Schema.Attribute.String;
    sinCv: Schema.Attribute.String;
    textoCerrada: Schema.Attribute.Text;
    textoPostulacion: Schema.Attribute.Text;
    tituloCerrada: Schema.Attribute.String;
    tituloDescripcion: Schema.Attribute.String;
    tituloPostulacion: Schema.Attribute.String;
    tituloRequisitos: Schema.Attribute.String;
    verOtras: Schema.Attribute.String;
    verVacantes: Schema.Attribute.String;
    volver: Schema.Attribute.String;
  };
}

export interface VacantesTextos extends Struct.ComponentSchema {
  collectionName: 'components_vacantes_textos';
  info: {
    description: 'Buscador, filtros, botones y paginaci\u00F3n del listado de vacantes';
    displayName: 'Textos del listado';
    icon: 'pencil';
  };
  attributes: {
    abiertos: Schema.Attribute.String;
    anterior: Schema.Attribute.String;
    borrar: Schema.Attribute.String;
    buscador: Schema.Attribute.String;
    buscarArea: Schema.Attribute.String;
    cerrada: Schema.Attribute.String;
    cualquierContrato: Schema.Attribute.String;
    cualquierModalidad: Schema.Attribute.String;
    de: Schema.Attribute.String;
    etiquetaArea: Schema.Attribute.String;
    etiquetaCiudad: Schema.Attribute.String;
    etiquetaContrato: Schema.Attribute.String;
    etiquetaModalidad: Schema.Attribute.String;
    limpiarFiltros: Schema.Attribute.String;
    mostrarFiltros: Schema.Attribute.String;
    ocultarCerradas: Schema.Attribute.String;
    ocultarFiltros: Schema.Attribute.String;
    porPagina: Schema.Attribute.String;
    puesto: Schema.Attribute.String;
    puestos: Schema.Attribute.String;
    siguiente: Schema.Attribute.String;
    sinAreas: Schema.Attribute.String;
    sinResultadosTexto: Schema.Attribute.String;
    sinResultadosTitulo: Schema.Attribute.String;
    todas: Schema.Attribute.String;
    todasLasAreas: Schema.Attribute.String;
    todasPorPagina: Schema.Attribute.String;
    verCerradas: Schema.Attribute.String;
    verDetalle: Schema.Attribute.String;
    verPuesto: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'comun.boton': ComunBoton;
      'comun.dato': ComunDato;
      'comun.elemento': ComunElemento;
      'comun.fondo': ComunFondo;
      'comun.hero': ComunHero;
      'comun.imagen-expandible': ComunImagenExpandible;
      'comun.item': ComunItem;
      'comun.red': ComunRed;
      'comun.seccion': ComunSeccion;
      'comun.seo': ComunSeo;
      'empresas.acceso': EmpresasAcceso;
      'faq.grupo': FaqGrupo;
      'faq.pregunta': FaqPregunta;
      'proyectos.clip': ProyectosClip;
      'puerta.opcion': PuertaOpcion;
      'shared.valor': SharedValor;
      'sitio.contacto': SitioContacto;
      'sitio.pie': SitioPie;
      'solicitar.textos': SolicitarTextos;
      'vacante.textos': VacanteTextos;
      'vacantes.textos': VacantesTextos;
    }
  }
}
