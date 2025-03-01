# ===============================
# Étape 1 : Construction de l’application
# ===============================
FROM node:22-slim AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install --include=dev;

RUN pnpm run build

# ===============================
# Étape 2 : Création de l'image finale
# ===============================
FROM node:22-slim

WORKDIR /app

RUN npm install -g pnpm

# Copier l'application depuis l'étape builder
COPY --from=builder /app/build /app

# Copier le script d'entrée qui va gérer les migrations et le démarrage
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3333

ENTRYPOINT ["/entrypoint.sh"]
