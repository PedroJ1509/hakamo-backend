import type { Core } from '@strapi/strapi';

/**
 * Acciones que el rol público puede leer sin token.
 * Cada página nueva del sitio se agrega aquí.
 */
const LECTURA_PUBLICA = [
  'api::configuracion-sitio.configuracion-sitio.find',
  'api::pagina-puerta.pagina-puerta.find',
  'api::pagina-empresas.pagina-empresas.find',
  'api::pagina-nosotros.pagina-nosotros.find',
  'api::pagina-servicios.pagina-servicios.find',
  'api::pagina-proyectos.pagina-proyectos.find',
  'api::pagina-contacto.pagina-contacto.find',
  'api::pagina-solicitar.pagina-solicitar.find',
  'api::pagina-faq.pagina-faq.find',
  'api::pagina-privacidad.pagina-privacidad.find',
  'api::pagina-empleos.pagina-empleos.find',
  'api::pagina-vacantes.pagina-vacantes.find',
  'api::pagina-vacante.pagina-vacante.find',
  'api::pagina-cultura.pagina-cultura.find',
  'api::pagina-blog.pagina-blog.find',
  'api::pagina-equipo.pagina-equipo.find',
  'api::pagina-no-encontrada.pagina-no-encontrada.find',
  'api::post.post.find',
  'api::post.post.findOne',
  'api::vacante.vacante.find',
  'api::vacante.vacante.findOne',
  'api::division.division.find',
  'api::division.division.findOne',
  'api::servicio.servicio.find',
  'api::servicio.servicio.findOne',
  'api::proyecto.proyecto.find',
  'api::proyecto.proyecto.findOne',
  'api::cliente.cliente.find',
  'api::cliente.cliente.findOne',
];

/**
 * Lo único que el público puede crear con los permisos de Strapi: los mensajes de los
 * formularios de empresas. Las postulaciones entran por POST /api/postulaciones/enviar,
 * que valida datos y CV. Todo se lee solo desde el panel.
 */
const ESCRITURA_PUBLICA = ['api::mensaje.mensaje.create'];

/**
 * Permisos que el público ya no debe tener (se quitan si alguna vez se dieron).
 *
 * El sitio no tiene inicio de sesión de usuarios: el panel de administración usa su propia
 * autenticación. Los accesos de `users-permissions` que Strapi concede por defecto
 * (registrarse, iniciar sesión, recuperar contraseña…) solo servían para que cualquiera
 * creara cuentas en el CMS. Strapi los crea únicamente en una base sin permisos, así que
 * quitarlos aquí es permanente.
 */
const RETIRADOS = [
  'api::postulacion.postulacion.create',
  'plugin::users-permissions.auth.register',
  'plugin::users-permissions.auth.callback',
  'plugin::users-permissions.auth.connect',
  'plugin::users-permissions.auth.forgotPassword',
  'plugin::users-permissions.auth.resetPassword',
  'plugin::users-permissions.auth.emailConfirmation',
  'plugin::users-permissions.auth.sendEmailConfirmation',
  'plugin::users-permissions.auth.refresh',
];

export async function abrirLecturaPublica(strapi: Core.Strapi) {
  const rol = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });
  if (!rol) return;

  await strapi.db
    .query('plugin::users-permissions.permission')
    .deleteMany({ where: { action: { $in: RETIRADOS }, role: rol.id } });

  // Además, se apaga la opción "permitir registros" de users-permissions (segunda barrera).
  const ajustes = strapi.store({ type: 'plugin', name: 'users-permissions', key: 'advanced' });
  const actuales = (await ajustes.get({})) as Record<string, unknown> | null;
  if (actuales?.allow_register) await ajustes.set({ value: { ...actuales, allow_register: false } });

  for (const action of [...LECTURA_PUBLICA, ...ESCRITURA_PUBLICA]) {
    const existe = await strapi.db
      .query('plugin::users-permissions.permission')
      .findOne({ where: { action, role: rol.id } });
    if (!existe) {
      await strapi.db
        .query('plugin::users-permissions.permission')
        .create({ data: { action, role: rol.id } });
    }
  }
}
