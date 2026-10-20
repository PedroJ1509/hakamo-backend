import type { Core } from '@strapi/strapi';
import { avisarAlSitio } from './bootstrap/avisar-sitio';
import { abrirLecturaPublica } from './bootstrap/permisos';
import { sembrarContenido } from './bootstrap/sembrar';

export default {
  /** Al guardar o publicar contenido, el sitio se entera y lo muestra en la próxima visita. */
  register({ strapi }: { strapi: Core.Strapi }) {
    avisarAlSitio(strapi);
  },

  /**
   * Al arrancar: el rol público puede leer las páginas y, si una página
   * todavía no existe, se crea con el texto que el sitio tenía antes del CMS.
   * Nunca sobrescribe lo que ya se editó en el panel.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await abrirLecturaPublica(strapi);
    await sembrarContenido(strapi);
  },
};
