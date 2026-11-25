/**
 * CORS_ORIGINS: orígenes que pueden llamar a la API desde un navegador, separados por comas
 * (p. ej. https://hakamo.com.do,https://www.hakamo.com.do). Sin definir se aceptan todos,
 * que es como funcionaba antes; conviene definirla en el servidor.
 */
export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  { name: 'strapi::cors', config: { origin: env.array('CORS_ORIGINS', ['*']) } },
  { name: 'strapi::poweredBy', config: { poweredBy: 'Hakamo' } },
  'strapi::query',
  // Antes del body: corta los envíos enormes y frena el spam sin leer la petición entera.
  'global::limitar-envios',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]