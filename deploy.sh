#!/usr/bin/env bash
set -euo pipefail

SITE_DIR="$(dirname "$(readlink -f "$0")")"
cd "$SITE_DIR"

echo "==> Building Hugo site..."
hugo

echo "==> Deploying to VPS..."
DEST="${1:-user@your-vps:/var/www/couchcouch.github.io}"
rsync -avz --delete public/ "$DEST"

echo "==> Done!"
