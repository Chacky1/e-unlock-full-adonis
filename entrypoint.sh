#!/bin/sh
set -e

if [ "$NODE_ENV" = "production" ]; then
  echo "Production server is being started..."
  exec pnpm start
else
  echo "Development server is being started..."
  exec pnpm dev
fi
