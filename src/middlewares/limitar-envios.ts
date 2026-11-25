import type { Core } from '@strapi/strapi';

/**
 * Freno para los dos formularios públicos que escriben datos.
 *
 * Va ANTES de `strapi::body`, así un envío demasiado grande se corta por su cabecera
 * `Content-Length` sin que Strapi llegue a leerlo entero (por defecto aceptaría ~200 MB).
 * Además limita cuántos envíos puede hacer una misma dirección IP en una ventana de tiempo.
 *
 * El contador vive en la memoria del proceso: se reinicia al reiniciar Strapi y no se
 * comparte entre varias instancias. Para el sitio actual (una instancia) basta; si algún día
 * se escala, conviene moverlo a Redis o al propio Nginx (`limit_req`).
 */
type Regla = {
  ruta: string;
  /** Tamaño máximo de la petición completa, en bytes. */
  maxBytes: number;
  /** Envíos permitidos por IP dentro de `ventanaMs`. */
  maxEnvios: number;
  ventanaMs: number;
};

const MINUTOS = 60_000;

const REGLAS: Regla[] = [
  // Postulación con CV: el archivo admite 5 MB; el resto es margen para el formulario.
  { ruta: '/api/postulaciones/enviar', maxBytes: 6 * 1024 * 1024, maxEnvios: 10, ventanaMs: 10 * MINUTOS },
  // Mensajes de contacto y solicitud: solo texto.
  { ruta: '/api/mensajes', maxBytes: 64 * 1024, maxEnvios: 20, ventanaMs: 10 * MINUTOS },
];

const ES_LOCAL = new Set(['127.0.0.1', '::1', '::ffff:127.0.0.1']);

/**
 * IP del visitante. Detrás de Nginx, Strapi ve la conexión de Nginx (127.0.0.1) y todos los
 * visitantes parecerían uno solo: con 10 envíos de cualquier persona quedaría bloqueado el sitio
 * entero. Por eso, si la conexión viene del propio servidor, se usa `X-Forwarded-For`, y de ella la
 * ÚLTIMA entrada: es la que añade Nginx; las anteriores las puede escribir el cliente. Si la
 * conexión no es local, la cabecera no se toma en cuenta (se podría falsificar).
 */
function ipDelVisitante(ctx: any): string {
  const conexion: string = ctx.req?.socket?.remoteAddress ?? ctx.ip;
  const reenviada: string = ctx.get('x-forwarded-for');
  if (reenviada && ES_LOCAL.has(conexion)) {
    const ultima = reenviada.split(',').pop()?.trim();
    if (ultima) return ultima;
  }
  return conexion;
}

/** Si hay más claves que esto, se purgan las ventanas vencidas para no crecer sin límite. */
const MAX_CLAVES = 5_000;

export default (_config: unknown, { strapi }: { strapi: Core.Strapi }) => {
  // Solo el límite por IP se puede apagar, y solo de forma explícita (pruebas automatizadas
  // locales). El tope de tamaño de cada envío siempre está activo.
  const sinLimitePorIp = process.env.LIMITE_ENVIOS_DESACTIVADO === 'true';
  if (sinLimitePorIp) strapi.log.warn('Límite de envíos por IP DESACTIVADO por LIMITE_ENVIOS_DESACTIVADO=true.');

  const envios = new Map<string, number[]>();

  const purgar = (ahora: number) => {
    for (const [clave, marcas] of envios) {
      const regla = REGLAS.find((r) => clave.endsWith(`|${r.ruta}`));
      const vigentes = marcas.filter((t) => ahora - t < (regla?.ventanaMs ?? 10 * MINUTOS));
      if (vigentes.length === 0) envios.delete(clave);
      else envios.set(clave, vigentes);
    }
  };

  return async (ctx: any, next: () => Promise<unknown>) => {
    if (ctx.method !== 'POST') return next();
    const regla = REGLAS.find((r) => ctx.path === r.ruta);
    if (!regla) return next();

    const peso = Number(ctx.request.length ?? ctx.get('content-length') ?? 0);
    if (peso > regla.maxBytes) {
      ctx.status = 413;
      ctx.body = { data: null, error: { status: 413, name: 'PayloadTooLargeError', message: 'El envío es demasiado grande', details: {} } };
      return;
    }

    if (sinLimitePorIp) return next();

    const ahora = Date.now();
    if (envios.size > MAX_CLAVES) purgar(ahora);
    const clave = `${ipDelVisitante(ctx)}|${regla.ruta}`;
    const recientes = (envios.get(clave) ?? []).filter((t) => ahora - t < regla.ventanaMs);

    if (recientes.length >= regla.maxEnvios) {
      const espera = Math.ceil((regla.ventanaMs - (ahora - recientes[0])) / 1000);
      ctx.set('Retry-After', String(espera));
      ctx.status = 429;
      ctx.body = { data: null, error: { status: 429, name: 'TooManyRequestsError', message: 'Demasiados envíos desde esta conexión. Inténtalo más tarde.', details: {} } };
      return;
    }

    recientes.push(ahora);
    envios.set(clave, recientes);
    return next();
  };
};
