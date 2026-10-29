import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // En el servidor, Strapi va detrás de Nginx con HTTPS (https://cms.hakamo.com.do):
  // PUBLIC_URL es esa dirección e IS_PROXIED=true le dice que confíe en Nginx.
  url: env('PUBLIC_URL', ''),
  proxy: env.bool('IS_PROXIED', false),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

export default config;
