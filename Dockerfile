# ===============================
# Étape 1 : Construction de l’application
# ===============================
FROM node:22-slim AS builder

# Définir l'environnement
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN npm install -g pnpm

COPY . .

# Installer les dépendances selon l'environnement :
# - En production, n'installer que les dépendances de production.
# - En développement, inclure aussi les devDependencies (pour ts-node-maintained, etc.)
RUN if [ "$NODE_ENV" = "production" ]; then \
      pnpm install --prod; \
    else \
      pnpm install --include=dev; \
    fi

# Si on est en production, lancer le build de l'application
RUN if [ "$NODE_ENV" = "production" ]; then pnpm run build; fi

# ===============================
# Étape 2 : Création de l'image finale
# ===============================
FROM node:22-slim

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN npm install -g pnpm

# Copier l'application depuis l'étape builder
COPY --from=builder /app /app

# Copier le script d'entrée qui va gérer les migrations et le démarrage
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3333

ENTRYPOINT ["/entrypoint.sh"]
