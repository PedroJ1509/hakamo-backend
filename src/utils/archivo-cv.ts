import { open } from 'node:fs/promises';

/**
 * Formatos de CV aceptados. El tipo que declara el cliente (`mimetype`) y el nombre
 * del archivo los controla quien sube, así que no bastan: también se comprueba que el
 * contenido empiece como lo hace un archivo de ese formato.
 */
const FORMATOS = [
  { extension: '.pdf', mimetype: 'application/pdf', firma: 'pdf' },
  { extension: '.doc', mimetype: 'application/msword', firma: 'ole' },
  {
    extension: '.docx',
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    firma: 'zip',
  },
] as const;

/** Cuántos bytes del inicio se leen; un PDF puede llevar basura antes de `%PDF-` hasta el byte 1024. */
const BYTES_CABECERA = 1100;

function coincideFirma(firma: (typeof FORMATOS)[number]['firma'], cabecera: Buffer): boolean {
  switch (firma) {
    case 'pdf':
      return cabecera.subarray(0, 1024).includes('%PDF-');
    case 'ole': // .doc antiguo: contenedor OLE2
      return cabecera.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
    case 'zip': // .docx: archivo ZIP
      return cabecera.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]));
  }
}

export type ArchivoRecibido = {
  size: number;
  mimetype?: string;
  type?: string;
  originalFilename?: string | null;
  name?: string | null;
  filepath?: string;
  path?: string;
};

/**
 * `null` si el archivo es un CV válido; si no, el motivo para mostrarle al usuario.
 * Exige que coincidan extensión, tipo declarado y contenido real.
 */
export async function motivoDeRechazoCv(archivo: ArchivoRecibido): Promise<string | null> {
  const nombre = (archivo.originalFilename ?? archivo.name ?? '').toLowerCase();
  const extension = nombre.includes('.') ? nombre.slice(nombre.lastIndexOf('.')) : '';
  const tipo = archivo.mimetype ?? archivo.type ?? '';

  const formato = FORMATOS.find((f) => f.extension === extension);
  if (!formato || formato.mimetype !== tipo) return 'El CV debe ser PDF o Word';

  const ruta = archivo.filepath ?? archivo.path;
  if (!ruta) return 'No se pudo leer el archivo';

  let cabecera: Buffer;
  const descriptor = await open(ruta, 'r');
  try {
    const { buffer, bytesRead } = await descriptor.read(Buffer.alloc(BYTES_CABECERA), 0, BYTES_CABECERA, 0);
    cabecera = buffer.subarray(0, bytesRead);
  } finally {
    await descriptor.close();
  }

  return coincideFirma(formato.firma, cabecera) ? null : 'El archivo no es un PDF o Word válido';
}
