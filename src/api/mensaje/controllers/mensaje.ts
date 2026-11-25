/**
 * mensaje controller
 *
 * `create` es público (lo usan los formularios del sitio), así que no se confía en lo que
 * llega: solo se aceptan los campos del formulario, con su largo máximo, y `leido` siempre
 * empieza en falso. Antes un anónimo podía crear mensajes ya marcados como leídos (para que
 * el equipo no los viera) o de cientos de KB.
 */

import { factories } from '@strapi/strapi';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Largo máximo de cada campo; lo que pase se recorta. */
const MAXIMO = { nombre: 120, email: 200, telefono: 40, asunto: 160, mensaje: 5000 } as const;

function texto(valor: unknown, maximo: number): string {
  return typeof valor === 'string' ? valor.trim().slice(0, maximo) : '';
}

export default factories.createCoreController('api::mensaje.mensaje', () => ({
  async create(ctx) {
    const crudo = ctx.request.body?.data;
    const datos = (crudo && typeof crudo === 'object' ? crudo : {}) as Record<string, unknown>;

    const nombre = texto(datos.nombre, MAXIMO.nombre);
    const asunto = texto(datos.asunto, MAXIMO.asunto);
    const mensaje = texto(datos.mensaje, MAXIMO.mensaje);
    const email = texto(datos.email, MAXIMO.email);
    const telefono = texto(datos.telefono, MAXIMO.telefono);

    if (!nombre || !asunto || !mensaje) return ctx.badRequest('Nombre, asunto y mensaje son obligatorios');
    if (email && !EMAIL.test(email)) return ctx.badRequest('Revisa el correo electrónico');

    ctx.request.body = {
      data: { nombre, asunto, mensaje, leido: false, ...(email ? { email } : {}), ...(telefono ? { telefono } : {}) },
    };
    return super.create(ctx);
  },
}));
