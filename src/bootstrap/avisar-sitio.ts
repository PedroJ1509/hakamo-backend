import type { Core } from '@strapi/strapi';

/** Acciones que cambian lo que el sitio puede mostrar. */
const ACCIONES = ['create', 'update', 'delete', 'publish', 'unpublish', 'discardDraft'];

/** Lo que llega desde los formularios del sitio no cambia ninguna página. */
const IGNORADOS = ['api::mensaje.mensaje', 'api::postulacion.postulacion'];

/** Espera tras el último cambio antes de avisar, para agrupar en un solo aviso un guardado con varios pasos. */
const ESPERA_MS = 1000;

/**
 * Cada vez que se guarda, publica o borra contenido, avisa al sitio para que
 * deje de usar la copia guardada y muestre el cambio en la próxima visita.
 *
 * Necesita SITIO_URL y SITIO_REVALIDAR_SECRETO en el .env; sin ellas no hace nada
 * y el sitio se actualiza solo, como mucho un minuto después.
 */
export function avisarAlSitio(strapi: Core.Strapi) {
  const url = process.env.SITIO_URL;
  const secreto = process.env.SITIO_REVALIDAR_SECRETO;
  if (!url || !secreto) {
    strapi.log.info('Aviso al sitio desactivado: faltan SITIO_URL o SITIO_REVALIDAR_SECRETO.');
    return;
  }

  let pendiente: NodeJS.Timeout | null = null;
  const avisar = () => {
    if (pendiente) clearTimeout(pendiente);
    pendiente = setTimeout(async () => {
      pendiente = null;
      try {
        const res = await fetch(`${url.replace(/\/$/, '')}/api/revalidar`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${secreto}` },
        });
        if (!res.ok) strapi.log.warn(`El sitio rechazó el aviso de cambios (${res.status}).`);
      } catch (error) {
        strapi.log.warn(`No se pudo avisar al sitio de los cambios: ${(error as Error).message}`);
      }
    }, ESPERA_MS);
  };

  strapi.documents.use(async (context, next) => {
    const resultado = await next();
    if (context.uid.startsWith('api::') && !IGNORADOS.includes(context.uid) && ACCIONES.includes(context.action)) {
      avisar();
    }
    return resultado;
  });
}
