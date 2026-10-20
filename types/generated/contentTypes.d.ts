import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiClienteCliente extends Struct.CollectionTypeSchema {
  collectionName: 'clientes';
  info: {
    displayName: 'Cliente';
    pluralName: 'clientes';
    singularName: 'cliente';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    division: Schema.Attribute.Relation<'manyToOne', 'api::division.division'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cliente.cliente'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    orden: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    sector: Schema.Attribute.String;
    sitioweb: Schema.Attribute.String;
    testimonio: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConfiguracionSitioConfiguracionSitio
  extends Struct.SingleTypeSchema {
  collectionName: 'configuracion_sitios';
  info: {
    description: 'Logo, contacto, men\u00FAs, pie y redes. Se ve en todas las p\u00E1ginas';
    displayName: 'Configuraci\u00F3n del sitio';
    pluralName: 'configuraciones-sitio';
    singularName: 'configuracion-sitio';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    botonCabeceraEmpleos: Schema.Attribute.Component<'comun.boton', false>;
    botonCabeceraEmpresas: Schema.Attribute.Component<'comun.boton', false>;
    contacto: Schema.Attribute.Component<'sitio.contacto', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::configuracion-sitio.configuracion-sitio'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    logoClaro: Schema.Attribute.Media<'images'>;
    menuEmpleos: Schema.Attribute.Component<'comun.boton', true>;
    menuEmpresas: Schema.Attribute.Component<'comun.boton', true>;
    mostrarWhatsapp: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    nombre: Schema.Attribute.String;
    nombreLegal: Schema.Attribute.String;
    pie: Schema.Attribute.Component<'sitio.pie', false>;
    publishedAt: Schema.Attribute.DateTime;
    redes: Schema.Attribute.Component<'comun.red', true>;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDivisionDivision extends Struct.CollectionTypeSchema {
  collectionName: 'divisions';
  info: {
    description: '\u00C1reas del portal de empleo. colorPrimario es el color del texto de la etiqueta y colorSecundario su fondo';
    displayName: 'Division';
    pluralName: 'divisions';
    singularName: 'division';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    clientes: Schema.Attribute.Relation<'oneToMany', 'api::cliente.cliente'>;
    colorPrimario: Schema.Attribute.String;
    colorSecundario: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descripcion: Schema.Attribute.RichText;
    imagenHero: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::division.division'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mision: Schema.Attribute.Text;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    orden: Schema.Attribute.Integer;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    proyectos: Schema.Attribute.Relation<'oneToMany', 'api::proyecto.proyecto'>;
    publishedAt: Schema.Attribute.DateTime;
    servicios: Schema.Attribute.Relation<'oneToMany', 'api::servicio.servicio'>;
    slug: Schema.Attribute.UID<'nombre'>;
    tagline: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vacantes: Schema.Attribute.Relation<'oneToMany', 'api::vacante.vacante'>;
    vision: Schema.Attribute.Text;
  };
}

export interface ApiHeroSlideHeroSlide extends Struct.CollectionTypeSchema {
  collectionName: 'hero_slides';
  info: {
    displayName: 'HeroSlide';
    pluralName: 'hero-slides';
    singularName: 'hero-slide';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaTexto: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    descripcion: Schema.Attribute.Text;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hero-slide.hero-slide'
    > &
      Schema.Attribute.Private;
    orden: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMensajeMensaje extends Struct.CollectionTypeSchema {
  collectionName: 'mensajes';
  info: {
    displayName: 'Mensaje';
    pluralName: 'mensajes';
    singularName: 'mensaje';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    asunto: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email;
    leido: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mensaje.mensaje'
    > &
      Schema.Attribute.Private;
    mensaje: Schema.Attribute.Text & Schema.Attribute.Required;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    telefono: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaBlogPaginaBlog extends Struct.SingleTypeSchema {
  collectionName: 'pagina_blogs';
  info: {
    description: 'Textos del blog (/blog y cada art\u00EDculo). Los art\u00EDculos se editan en Post';
    displayName: 'P\u00E1gina \u00B7 Blog';
    pluralName: 'paginas-blog';
    singularName: 'pagina-blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    botonArticulo: Schema.Attribute.Component<'comun.boton', false>;
    cierre: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-blog.pagina-blog'
    > &
      Schema.Attribute.Private;
    portada: Schema.Attribute.Component<'comun.seccion', false>;
    publishedAt: Schema.Attribute.DateTime;
    recuadroArticulo: Schema.Attribute.Component<'comun.seccion', false>;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    sinArticulos: Schema.Attribute.Component<'comun.seccion', false>;
    textoLeer: Schema.Attribute.String;
    textoTodos: Schema.Attribute.String;
    textoVolver: Schema.Attribute.String;
    tituloRelacionados: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaContactoPaginaContacto
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_contactos';
  info: {
    description: 'Canales, formulario y ruta (/contacto). Tel\u00E9fonos, correo, direcci\u00F3n y punto del mapa se editan en Configuraci\u00F3n del sitio';
    displayName: 'P\u00E1gina \u00B7 Contacto';
    pluralName: 'paginas-contacto';
    singularName: 'pagina-contacto';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    canales: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formulario: Schema.Attribute.Component<'comun.seccion', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-contacto.pagina-contacto'
    > &
      Schema.Attribute.Private;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    ruta: Schema.Attribute.Component<'comun.seccion', false>;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaCulturaPaginaCultura extends Struct.SingleTypeSchema {
  collectionName: 'pagina_culturas';
  info: {
    description: 'C\u00F3mo es trabajar con Hakamo (/empleo)';
    displayName: 'P\u00E1gina \u00B7 Cultura';
    pluralName: 'paginas-cultura';
    singularName: 'pagina-cultura';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    actividades: Schema.Attribute.Component<'comun.seccion', false>;
    areas: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    diferenciales: Schema.Attribute.Component<'comun.elemento', true>;
    fondoDiferenciales: Schema.Attribute.Component<'comun.fondo', false>;
    formacion: Schema.Attribute.Component<'comun.seccion', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-cultura.pagina-cultura'
    > &
      Schema.Attribute.Private;
    portada: Schema.Attribute.Component<'comun.seccion', false>;
    proceso: Schema.Attribute.Component<'comun.seccion', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    siguiente: Schema.Attribute.Component<'comun.seccion', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaEmpleosPaginaEmpleos extends Struct.SingleTypeSchema {
  collectionName: 'pagina_empleos';
  info: {
    description: 'Inicio del portal de empleo (/empleos). Las vacantes y \u00E1reas se editan en Vacante y Divisi\u00F3n';
    displayName: 'P\u00E1gina \u00B7 Empleos';
    pluralName: 'paginas-empleos';
    singularName: 'pagina-empleos';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    areas: Schema.Attribute.Component<'comun.seccion', false>;
    beneficios: Schema.Attribute.Component<'comun.elemento', true>;
    botonBuscar: Schema.Attribute.String;
    como: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fondoBeneficios: Schema.Attribute.Component<'comun.fondo', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-empleos.pagina-empleos'
    > &
      Schema.Attribute.Private;
    masOportunidades: Schema.Attribute.Component<'comun.seccion', false>;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    sinVacantes: Schema.Attribute.Component<'comun.seccion', false>;
    textoBuscador: Schema.Attribute.String;
    tuCv: Schema.Attribute.Component<'comun.seccion', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaEmpresasPaginaEmpresas
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_empresas';
  info: {
    description: 'Inicio para empresas (/empresas)';
    displayName: 'P\u00E1gina \u00B7 Empresas';
    pluralName: 'paginas-empresas';
    singularName: 'pagina-empresas';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accesos: Schema.Attribute.Component<'empresas.acceso', true>;
    cinta: Schema.Attribute.Component<'comun.elemento', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datos: Schema.Attribute.Component<'comun.dato', true>;
    fondoAccesos: Schema.Attribute.Component<'comun.fondo', false>;
    fondoCinta: Schema.Attribute.Component<'comun.fondo', false>;
    fondoDatos: Schema.Attribute.Component<'comun.fondo', false>;
    imagenExpandible: Schema.Attribute.Component<
      'comun.imagen-expandible',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-empresas.pagina-empresas'
    > &
      Schema.Attribute.Private;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaEquipoPaginaEquipo extends Struct.SingleTypeSchema {
  collectionName: 'pagina_equipos';
  info: {
    description: 'Equipo (/equipo). En cada persona: etiqueta = iniciales, t\u00EDtulo = nombre, subt\u00EDtulo = cargo, texto = bio, imagen = foto';
    displayName: 'P\u00E1gina \u00B7 Equipo';
    pluralName: 'paginas-equipo';
    singularName: 'pagina-equipo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cierre: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-equipo.pagina-equipo'
    > &
      Schema.Attribute.Private;
    miembros: Schema.Attribute.Component<'comun.seccion', false>;
    portada: Schema.Attribute.Component<'comun.seccion', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaFaqPaginaFaq extends Struct.SingleTypeSchema {
  collectionName: 'pagina_faqs';
  info: {
    description: 'Grupos de preguntas y bloque de ayuda (/faq)';
    displayName: 'P\u00E1gina \u00B7 Preguntas frecuentes';
    pluralName: 'paginas-faq';
    singularName: 'pagina-faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ayuda: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fondoPreguntas: Schema.Attribute.Component<'comun.fondo', false>;
    grupos: Schema.Attribute.Component<'faq.grupo', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-faq.pagina-faq'
    > &
      Schema.Attribute.Private;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaNoEncontradaPaginaNoEncontrada
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_no_encontradas';
  info: {
    description: 'P\u00E1gina que se ve cuando una ruta no existe. Antet\u00EDtulo = n\u00FAmero grande; cada elemento es una salida (etiqueta, t\u00EDtulo, texto, subt\u00EDtulo = texto del enlace, enlace); bot\u00F3n = \u00ABO escr\u00EDbenos\u00BB; bot\u00F3n secundario = enlace de arriba';
    displayName: 'P\u00E1gina \u00B7 No encontrada (404)';
    pluralName: 'paginas-no-encontrada';
    singularName: 'pagina-no-encontrada';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenido: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-no-encontrada.pagina-no-encontrada'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaNosotrosPaginaNosotros
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_nosotros';
  info: {
    description: 'Historia, misi\u00F3n, valores, equipo y clientes (/nosotros)';
    displayName: 'P\u00E1gina \u00B7 Nosotros';
    pluralName: 'paginas-nosotros';
    singularName: 'pagina-nosotros';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    actividades: Schema.Attribute.Component<'comun.seccion', false>;
    clientes: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    equipo: Schema.Attribute.Component<'comun.seccion', false>;
    formacion: Schema.Attribute.Component<'comun.seccion', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-nosotros.pagina-nosotros'
    > &
      Schema.Attribute.Private;
    misionVision: Schema.Attribute.Component<'comun.seccion', false>;
    pilares: Schema.Attribute.Component<'comun.seccion', false>;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    trayectoria: Schema.Attribute.Component<'comun.seccion', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valores: Schema.Attribute.Component<'comun.seccion', false>;
  };
}

export interface ApiPaginaPrivacidadPaginaPrivacidad
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_privacidads';
  info: {
    description: 'Aviso de privacidad (/privacidad). El texto admite {correo}';
    displayName: 'P\u00E1gina \u00B7 Privacidad';
    pluralName: 'paginas-privacidad';
    singularName: 'pagina-privacidad';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    contenido: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-privacidad.pagina-privacidad'
    > &
      Schema.Attribute.Private;
    menu: Schema.Attribute.Component<'comun.boton', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    titulo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaProyectosPaginaProyectos
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_proyectos';
  info: {
    description: 'Portada, franja de fotos, clip y cierre (/proyectos). Las obras se editan en la colecci\u00F3n Proyecto';
    displayName: 'P\u00E1gina \u00B7 Proyectos';
    pluralName: 'paginas-proyectos';
    singularName: 'pagina-proyectos';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cierre: Schema.Attribute.Component<'comun.seccion', false>;
    clip: Schema.Attribute.Component<'proyectos.clip', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    galeria: Schema.Attribute.Component<'comun.seccion', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-proyectos.pagina-proyectos'
    > &
      Schema.Attribute.Private;
    obras: Schema.Attribute.Component<'comun.seccion', false>;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaPuertaPaginaPuerta extends Struct.SingleTypeSchema {
  collectionName: 'pagina_puertas';
  info: {
    description: 'Portada del sitio (/): elegir entre empresas y empleo';
    displayName: 'P\u00E1gina \u00B7 Puerta';
    pluralName: 'pagina-puertas';
    singularName: 'pagina-puerta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datos: Schema.Attribute.Component<'comun.dato', true>;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-puerta.pagina-puerta'
    > &
      Schema.Attribute.Private;
    menu: Schema.Attribute.Component<'comun.boton', true>;
    mostrarClientes: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    opcionEmpleo: Schema.Attribute.Component<'puerta.opcion', false>;
    opcionEmpresa: Schema.Attribute.Component<'puerta.opcion', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
    tituloClientes: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaServiciosPaginaServicios
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_servicios';
  info: {
    description: 'Cat\u00E1logo, seguridad, proceso, sectores y marco legal (/servicios). Los servicios se editan en la colecci\u00F3n Servicio';
    displayName: 'P\u00E1gina \u00B7 Servicios';
    pluralName: 'paginas-servicios';
    singularName: 'pagina-servicios';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    catalogo: Schema.Attribute.Component<'comun.seccion', false>;
    cierre: Schema.Attribute.Component<'comun.seccion', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-servicios.pagina-servicios'
    > &
      Schema.Attribute.Private;
    marcoLegal: Schema.Attribute.Component<'comun.seccion', false>;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    proceso: Schema.Attribute.Component<'comun.seccion', false>;
    publishedAt: Schema.Attribute.DateTime;
    sectores: Schema.Attribute.Component<'comun.seccion', false>;
    seguridad: Schema.Attribute.Component<'comun.seccion', false>;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valor: Schema.Attribute.Component<'comun.seccion', false>;
  };
}

export interface ApiPaginaSolicitarPaginaSolicitar
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_solicitars';
  info: {
    description: 'Formulario por pasos de /empresas/solicitar: personal, reuni\u00F3n o mensaje';
    displayName: 'P\u00E1gina \u00B7 Solicitar';
    pluralName: 'paginas-solicitar';
    singularName: 'pagina-solicitar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fondoFormulario: Schema.Attribute.Component<'comun.fondo', false>;
    listo: Schema.Attribute.Component<'comun.seccion', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-solicitar.pagina-solicitar'
    > &
      Schema.Attribute.Private;
    modalidades: Schema.Attribute.Component<'comun.item', true>;
    opcionContactar: Schema.Attribute.Component<'comun.item', false>;
    opcionPersonal: Schema.Attribute.Component<'comun.item', false>;
    opcionReunion: Schema.Attribute.Component<'comun.item', false>;
    pasosContactar: Schema.Attribute.Component<'comun.item', true>;
    pasosPersonal: Schema.Attribute.Component<'comun.item', true>;
    pasosReunion: Schema.Attribute.Component<'comun.item', true>;
    portada: Schema.Attribute.Component<'comun.hero', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    textos: Schema.Attribute.Component<'solicitar.textos', false>;
    tiposPersonal: Schema.Attribute.Component<'comun.item', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaVacantePaginaVacante extends Struct.SingleTypeSchema {
  collectionName: 'pagina_vacantes_ficha';
  info: {
    description: 'Textos y fondo de la ficha de cada vacante (/empleos/vacantes/\u2026). El contenido de cada puesto se edita en Vacante';
    displayName: 'P\u00E1gina \u00B7 Ficha de vacante';
    pluralName: 'paginas-vacante';
    singularName: 'pagina-vacante';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-vacante.pagina-vacante'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    textos: Schema.Attribute.Component<'vacante.textos', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaginaVacantesPaginaVacantes
  extends Struct.SingleTypeSchema {
  collectionName: 'pagina_vacantes';
  info: {
    description: 'Listado de vacantes (/empleos/vacantes). En los textos por \u00E1rea, {area} se cambia por el nombre del \u00E1rea';
    displayName: 'P\u00E1gina \u00B7 Vacantes';
    pluralName: 'paginas-vacantes';
    singularName: 'pagina-vacantes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    antetitulo: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fondo: Schema.Attribute.Component<'comun.fondo', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pagina-vacantes.pagina-vacantes'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'comun.seo', false>;
    texto: Schema.Attribute.Text;
    textoArea: Schema.Attribute.Text;
    textos: Schema.Attribute.Component<'vacantes.textos', false>;
    titulo: Schema.Attribute.String;
    tituloArea: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPostPost extends Struct.CollectionTypeSchema {
  collectionName: 'posts';
  info: {
    displayName: 'Post';
    pluralName: 'posts';
    singularName: 'post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    contenido: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    division: Schema.Attribute.Relation<'manyToOne', 'api::division.division'>;
    fechaPublicacion: Schema.Attribute.Date;
    imagenPortada: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::post.post'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    resumen: Schema.Attribute.Text;
    slug: Schema.Attribute.UID<'titulo'>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPostulacionPostulacion extends Struct.CollectionTypeSchema {
  collectionName: 'postulacions';
  info: {
    description: 'Postulaciones y CV recibidos desde el sitio. \u00ABorigen\u00BB dice si vino de una vacante, del constructor de CV o de un archivo subido';
    displayName: 'Postulacion';
    pluralName: 'postulacions';
    singularName: 'postulacion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    apellido: Schema.Attribute.String;
    areaInteres: Schema.Attribute.String;
    cartaPresentacion: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cv: Schema.Attribute.Media<'files'>;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    estado: Schema.Attribute.Enumeration<
      ['recibida', 'en_revision', 'aceptada', 'rechazada']
    > &
      Schema.Attribute.DefaultTo<'recibida'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::postulacion.postulacion'
    > &
      Schema.Attribute.Private;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    origen: Schema.Attribute.Enumeration<
      ['vacante', 'cv_creado', 'cv_subido']
    > &
      Schema.Attribute.DefaultTo<'vacante'>;
    publishedAt: Schema.Attribute.DateTime;
    telefono: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vacante: Schema.Attribute.Relation<'manyToOne', 'api::vacante.vacante'>;
  };
}

export interface ApiProyectoProyecto extends Struct.CollectionTypeSchema {
  collectionName: 'proyectos';
  info: {
    description: 'Obras de /proyectos. Se muestran las activas, por orden; la primera va en grande';
    displayName: 'Proyecto';
    pluralName: 'proyectos';
    singularName: 'proyecto';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descripcion: Schema.Attribute.Text;
    division: Schema.Attribute.Relation<'manyToOne', 'api::division.division'>;
    estado: Schema.Attribute.Enumeration<
      ['en_proceso', 'completado', 'destacado']
    >;
    fecha: Schema.Attribute.Date;
    imagenes: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::proyecto.proyecto'
    > &
      Schema.Attribute.Private;
    orden: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    rol: Schema.Attribute.String;
    sector: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'titulo'>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServicioServicio extends Struct.CollectionTypeSchema {
  collectionName: 'servicios';
  info: {
    description: 'Servicios del cat\u00E1logo de /servicios. Se muestran los activos, por orden';
    displayName: 'Servicio';
    pluralName: 'servicios';
    singularName: 'servicio';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descripcion: Schema.Attribute.Text;
    detalle: Schema.Attribute.Text;
    division: Schema.Attribute.Relation<'manyToOne', 'api::division.division'>;
    etiquetas: Schema.Attribute.Component<'comun.elemento', true>;
    icono: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::servicio.servicio'
    > &
      Schema.Attribute.Private;
    orden: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'titulo'>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVacanteVacante extends Struct.CollectionTypeSchema {
  collectionName: 'vacantes';
  info: {
    description: 'Puestos del portal de empleo. \u00ABDivisi\u00F3n\u00BB es el \u00E1rea (Construcci\u00F3n, Energ\u00EDa\u2026)';
    displayName: 'Vacante';
    pluralName: 'vacantes';
    singularName: 'vacante';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descripcion: Schema.Attribute.Blocks;
    division: Schema.Attribute.Relation<'manyToOne', 'api::division.division'>;
    estado: Schema.Attribute.Enumeration<['activa', 'cerrada']> &
      Schema.Attribute.DefaultTo<'activa'>;
    fechaCierre: Schema.Attribute.Date;
    fechaPublicacion: Schema.Attribute.Date;
    imagen: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vacante.vacante'
    > &
      Schema.Attribute.Private;
    modalidad: Schema.Attribute.Enumeration<
      ['presencial', 'remoto', 'hibrido']
    >;
    postulacions: Schema.Attribute.Relation<
      'oneToMany',
      'api::postulacion.postulacion'
    >;
    publishedAt: Schema.Attribute.DateTime;
    requisitos: Schema.Attribute.Blocks;
    salario: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'titulo'>;
    tipo: Schema.Attribute.Enumeration<
      ['tiempo_completo', 'medio_tiempo', 'contrato']
    >;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    ubicacion: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::cliente.cliente': ApiClienteCliente;
      'api::configuracion-sitio.configuracion-sitio': ApiConfiguracionSitioConfiguracionSitio;
      'api::division.division': ApiDivisionDivision;
      'api::hero-slide.hero-slide': ApiHeroSlideHeroSlide;
      'api::mensaje.mensaje': ApiMensajeMensaje;
      'api::pagina-blog.pagina-blog': ApiPaginaBlogPaginaBlog;
      'api::pagina-contacto.pagina-contacto': ApiPaginaContactoPaginaContacto;
      'api::pagina-cultura.pagina-cultura': ApiPaginaCulturaPaginaCultura;
      'api::pagina-empleos.pagina-empleos': ApiPaginaEmpleosPaginaEmpleos;
      'api::pagina-empresas.pagina-empresas': ApiPaginaEmpresasPaginaEmpresas;
      'api::pagina-equipo.pagina-equipo': ApiPaginaEquipoPaginaEquipo;
      'api::pagina-faq.pagina-faq': ApiPaginaFaqPaginaFaq;
      'api::pagina-no-encontrada.pagina-no-encontrada': ApiPaginaNoEncontradaPaginaNoEncontrada;
      'api::pagina-nosotros.pagina-nosotros': ApiPaginaNosotrosPaginaNosotros;
      'api::pagina-privacidad.pagina-privacidad': ApiPaginaPrivacidadPaginaPrivacidad;
      'api::pagina-proyectos.pagina-proyectos': ApiPaginaProyectosPaginaProyectos;
      'api::pagina-puerta.pagina-puerta': ApiPaginaPuertaPaginaPuerta;
      'api::pagina-servicios.pagina-servicios': ApiPaginaServiciosPaginaServicios;
      'api::pagina-solicitar.pagina-solicitar': ApiPaginaSolicitarPaginaSolicitar;
      'api::pagina-vacante.pagina-vacante': ApiPaginaVacantePaginaVacante;
      'api::pagina-vacantes.pagina-vacantes': ApiPaginaVacantesPaginaVacantes;
      'api::post.post': ApiPostPost;
      'api::postulacion.postulacion': ApiPostulacionPostulacion;
      'api::proyecto.proyecto': ApiProyectoProyecto;
      'api::servicio.servicio': ApiServicioServicio;
      'api::vacante.vacante': ApiVacanteVacante;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
