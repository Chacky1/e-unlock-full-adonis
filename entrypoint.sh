#!/bin/sh
set -e

echo "Run migrations..."
node ace migration:run

if [ "$NODE_ENV" = "production" ]; then
  echo "Production server is being started..."
  exec node ace serve --watch=false
else
  echo "Development server is being started..."
  exec pnpm dev
fi
