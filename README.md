# Hakamo — CMS (Strapi 5)

Panel de contenido del sitio de Hakamo. Cada página del sitio es un tipo único «Página · …»; lo común (logo, contacto, menús, pie) está en «Configuración del sitio». Las secciones usan los componentes `comun.*` (Sección, Elemento, Fondo, Botón, SEO, Portada).

## Al arrancar

`src/index.ts` deja listo el aviso al sitio y ejecuta dos pasos en cada arranque:

- **Permisos** (`src/bootstrap/permisos.ts`): el rol público puede leer las páginas y colecciones del sitio, y solo puede crear Mensaje. Las postulaciones entran por `POST /api/postulaciones/enviar`, que valida el correo y el CV (PDF o Word, hasta 5 MB). Nada más.
- **Contenido inicial** (`src/bootstrap/sembrar.ts` y `src/bootstrap/contenido/`): si una página o colección está vacía, se crea con el texto que tenía el sitio. Nunca sobrescribe lo que ya se editó en el panel.

Al agregar una página nueva: crea su esquema, reinicia Strapi, y después agrega su semilla en `sembrar.ts` y su permiso en `permisos.ts`.

## Aviso al sitio

`src/bootstrap/avisar-sitio.ts`: al guardar, publicar o borrar contenido, Strapi avisa al sitio (`POST {SITIO_URL}/api/revalidar`) y el cambio se ve en la próxima visita. Necesita en `.env`:

| Variable | Valor |
|---|---|
| `SITIO_URL` | URL del sitio, sin barra final. En local: `http://localhost:3000` |
| `SITIO_REVALIDAR_SECRETO` | Una clave larga al azar. La misma que `REVALIDAR_SECRETO` en el sitio. |

Sin ellas el sitio se actualiza solo, como mucho un minuto después.

## En el servidor

Strapi va detrás de Nginx con HTTPS. En el `.env` del servidor:

| Variable | Valor |
|---|---|
| `PUBLIC_URL` | `https://cms.hakamo.com.do` |
| `IS_PROXIED` | `true` |

## Imágenes

Si `.env` tiene `CLOUDINARY_NAME`, `CLOUDINARY_KEY` y `CLOUDINARY_SECRET`, las subidas van a Cloudinary (`config/plugins.ts`). Si falta alguna, se guardan en `public/uploads`: sirve para trabajar en local, pero en producción hay que poner las tres, porque muchos hostings borran esa carpeta al desplegar.

---

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
