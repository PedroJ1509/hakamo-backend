#!/usr/bin/env bash
# Despliega el backend (Strapi) en el servidor con un solo comando:
#
#   bash /var/www/hakamo/backend/scripts/desplegar.sh
#
# Pasos: copia de la base de datos, código de GitHub (main), instalación,
# compilación y reinicio con pm2. Si algo falla antes del reinicio, Strapi
# sigue funcionando con la versión anterior.
set -euo pipefail

CARPETA=/var/www/hakamo/backend
PROCESO=hakamo-backend
RESPALDOS=/root/respaldos-hakamo
GUARDAR=10   # cuántas copias de la base se conservan

paso() { printf '\n\033[1;34m==> %s\033[0m\n' "$1"; }
falla() { printf '\n\033[1;31mERROR: %s\033[0m\n' "$1" >&2; exit 1; }

cd "$CARPETA"

paso "1/6 Copia de seguridad de la base de datos"
BASE=$(grep '^DATABASE_NAME=' .env | cut -d= -f2 | tr -d '"')
[ -n "$BASE" ] || falla "No encontré DATABASE_NAME en .env"
mkdir -p "$RESPALDOS"
COPIA="$RESPALDOS/backend-$(date +%F-%H%M).sql"
sudo -u postgres pg_dump "$BASE" > "$COPIA"
[ -s "$COPIA" ] || falla "La copia quedó vacía"
echo "Guardada: $COPIA ($(du -h "$COPIA" | cut -f1))"
ls -1t "$RESPALDOS"/backend-*.sql | tail -n +$((GUARDAR + 1)) | xargs -r rm --

paso "2/6 Código nuevo desde GitHub"
# package-lock.json cambia solo cuando alguien corre npm install aquí: se descarta.
git checkout -- package-lock.json 2>/dev/null || true
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  git status --short
  falla "Hay archivos modificados en el servidor. Revísalos antes de desplegar."
fi
ANTES=$(git rev-parse --short HEAD)
git pull --ff-only origin main
DESPUES=$(git rev-parse --short HEAD)
echo "Versión: $ANTES -> $DESPUES"

paso "3/6 Instalando dependencias"
npm ci --no-audit --no-fund

paso "4/6 Compilando"
NODE_ENV=production npm run build

paso "5/6 Reiniciando Strapi"
pm2 restart "$PROCESO" --update-env

paso "6/6 Comprobando que arrancó"
for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null http://localhost:1337/_health; then
    printf '\n\033[1;32mLISTO: backend desplegado (%s -> %s)\033[0m\n' "$ANTES" "$DESPUES"
    echo "Si algo no funciona, la copia de la base está en $COPIA"
    exit 0
  fi
  sleep 3
done
pm2 logs "$PROCESO" --lines 30 --nostream
falla "Strapi no respondió en 90 segundos. Revisa los registros de arriba."
