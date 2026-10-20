/**
 * Ruta pública para enviar una postulación con CV (ver controlador `enviar`).
 * No requiere token: valida los datos y el archivo antes de guardar nada.
 */
export default {
  routes: [
    {
      method: 'POST',
      path: '/postulaciones/enviar',
      handler: 'api::postulacion.postulacion.enviar',
      config: { auth: false },
    },
  ],
};
