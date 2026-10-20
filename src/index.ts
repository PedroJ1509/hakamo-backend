import type { Core } from '@strapi/strapi';
import { abrirLecturaPublica } from './bootstrap/permisos';
import { sembrarContenido } from './bootstrap/sembrar';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

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
