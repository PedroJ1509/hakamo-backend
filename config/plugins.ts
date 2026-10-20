/**
 * Subida de archivos: a Cloudinary cuando están sus tres claves en el entorno.
 * Sin ellas (por ejemplo en una máquina de desarrollo) se usa el proveedor local
 * y los archivos quedan en public/uploads.
 */
export default ({ env }) => {
  const cloudinary = env('CLOUDINARY_NAME') && env('CLOUDINARY_KEY') && env('CLOUDINARY_SECRET');

  if (!cloudinary) return {};

  return {
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
