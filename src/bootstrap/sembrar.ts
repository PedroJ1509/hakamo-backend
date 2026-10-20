import type { Core, UID } from '@strapi/strapi';
import { BLOG_INICIAL } from './contenido/blog';
import { CONTACTO_INICIAL } from './contenido/contacto';
import { CULTURA_INICIAL } from './contenido/cultura';
import { EMPLEOS_INICIAL } from './contenido/empleos';
import { EQUIPO_INICIAL } from './contenido/equipo';
import { EMPRESAS_INICIAL } from './contenido/empresas';
import { FAQ_INICIAL } from './contenido/faq';
import { NO_ENCONTRADA_INICIAL } from './contenido/no-encontrada';
import { NOSOTROS_INICIAL } from './contenido/nosotros';
import { PRIVACIDAD_INICIAL } from './contenido/privacidad';
import { PROYECTOS_INICIALES, PROYECTOS_PAGINA_INICIAL } from './contenido/proyectos';
import { SERVICIOS_INICIALES, SERVICIOS_PAGINA_INICIAL } from './contenido/servicios';
import { CLIENTES_INICIALES, PUERTA_INICIAL } from './contenido/puerta';
import { SITIO_INICIAL } from './contenido/sitio';
import { SOLICITAR_INICIAL } from './contenido/solicitar';
import { VACANTE_FICHA_INICIAL } from './contenido/vacante';
import { AREAS_INICIALES, VACANTES_PAGINA_INICIAL } from './contenido/vacantes';

/**
 * Crea y publica una página (single type) solo si todavía no existe.
 * Si el tipo aún no está registrado (por ejemplo, mientras Strapi recarga un esquema nuevo), no hace nada.
 */
async function sembrarPagina(strapi: Core.Strapi, uid: UID.ContentType, data: Record<string, unknown>) {
  if (!strapi.contentType(uid)) return;
  const existente = await strapi.documents(uid).findFirst();
  if (existente) return;
  await strapi.documents(uid).create({ data: data as never, status: 'published' });
  strapi.log.info(`[contenido] ${uid} creada con el texto inicial`);
}

/** Crea y publica registros de una colección solo si está vacía. */
async function sembrarColeccion(strapi: Core.Strapi, uid: UID.ContentType, filas: Record<string, unknown>[]) {
  if (!strapi.contentType(uid)) return;
  const total = await strapi.documents(uid).count({});
  if (total > 0) return;
  for (const data of filas) {
    await strapi.documents(uid).create({ data: data as never, status: 'published' });
  }
  strapi.log.info(`[contenido] ${uid}: ${filas.length} registros iniciales`);
}

export async function sembrarContenido(strapi: Core.Strapi) {
  await sembrarPagina(strapi, 'api::configuracion-sitio.configuracion-sitio', SITIO_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-puerta.pagina-puerta', PUERTA_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-empresas.pagina-empresas', EMPRESAS_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-nosotros.pagina-nosotros', NOSOTROS_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-servicios.pagina-servicios', SERVICIOS_PAGINA_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-proyectos.pagina-proyectos', PROYECTOS_PAGINA_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-contacto.pagina-contacto', CONTACTO_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-solicitar.pagina-solicitar', SOLICITAR_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-faq.pagina-faq', FAQ_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-privacidad.pagina-privacidad', PRIVACIDAD_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-empleos.pagina-empleos', EMPLEOS_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-vacantes.pagina-vacantes', VACANTES_PAGINA_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-vacante.pagina-vacante', VACANTE_FICHA_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-cultura.pagina-cultura', CULTURA_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-blog.pagina-blog', BLOG_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-equipo.pagina-equipo', EQUIPO_INICIAL);
  await sembrarPagina(strapi, 'api::pagina-no-encontrada.pagina-no-encontrada', NO_ENCONTRADA_INICIAL);
  await sembrarColeccion(strapi, 'api::division.division', AREAS_INICIALES);
  await sembrarColeccion(strapi, 'api::cliente.cliente', CLIENTES_INICIALES);
  await sembrarColeccion(strapi, 'api::servicio.servicio', SERVICIOS_INICIALES);
  await sembrarColeccion(strapi, 'api::proyecto.proyecto', PROYECTOS_INICIALES);
}
