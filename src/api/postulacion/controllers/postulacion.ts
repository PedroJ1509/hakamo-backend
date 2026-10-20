/**
 * postulacion controller
 */

import { factories } from '@strapi/strapi';

/** Archivos de CV aceptados y tamaño máximo. */
const TIPOS_CV = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const MAXIMO_CV = 5 * 1024 * 1024;

const ORIGENES = new Set(['vacante', 'cv_creado', 'cv_subido']);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Texto recibido del formulario, recortado y con un largo máximo. */
function campo(valor: unknown, maximo = 200): string {
  return typeof valor === 'string' ? valor.trim().slice(0, maximo) : '';
}

type ArchivoSubido = { size: number; mimetype?: string; type?: string };

export default factories.createCoreController('api::postulacion.postulacion', ({ strapi }) => ({
  /**
   * POST /api/postulaciones/enviar — único punto público para enviar una postulación.
   * Recibe `multipart/form-data` con `data` (JSON) y, opcional, `cv` (PDF o Word de hasta 5 MB).
   * Sube el archivo y crea la postulación; el público no puede subir archivos por otra vía.
   */
  async enviar(ctx) {
    let data: Record<string, unknown> = {};
    try {
      const crudo = ctx.request.body?.data;
      data = typeof crudo === 'string' ? JSON.parse(crudo) : (crudo ?? {});
    } catch {
      return ctx.badRequest('Datos inválidos');
    }

    const nombre = campo(data.nombre);
    const email = campo(data.email);
    if (!nombre || !EMAIL.test(email)) return ctx.badRequest('Nombre y correo son obligatorios');

    const origen = ORIGENES.has(campo(data.origen)) ? campo(data.origen) : 'vacante';

    let archivo = ctx.request.files?.cv as ArchivoSubido | ArchivoSubido[] | undefined;
    if (Array.isArray(archivo)) archivo = archivo[0];
    if (archivo) {
      const tipo = archivo.mimetype ?? archivo.type ?? '';
      if (!TIPOS_CV.has(tipo)) return ctx.badRequest('El CV debe ser PDF o Word');
      if (archivo.size > MAXIMO_CV) return ctx.badRequest('El CV no puede pasar de 5 MB');
    }

    // La vacante es opcional; solo se enlaza si existe y está publicada.
    const idVacante = campo(data.vacante, 64);
    const vacante = idVacante
      ? await strapi.documents('api::vacante.vacante').findOne({ documentId: idVacante, status: 'published' })
      : null;

    let cv: number | undefined;
    if (archivo) {
      const [subido] = await strapi.plugin('upload').service('upload').upload({ data: {}, files: archivo });
      cv = subido?.id;
    }

    await strapi.documents('api::postulacion.postulacion').create({
      data: {
        nombre,
        apellido: campo(data.apellido),
        email,
        telefono: campo(data.telefono, 40),
        areaInteres: campo(data.areaInteres, 120),
        cartaPresentacion: campo(data.cartaPresentacion, 5000),
        origen,
        estado: 'recibida',
        ...(vacante ? { vacante: vacante.documentId } : {}),
        ...(cv ? { cv } : {}),
      } as never,
    });

    ctx.status = 201;
    ctx.body = { ok: true };
  },
}));
