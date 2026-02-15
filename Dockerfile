# Stage 1: Install dependencies (cached when only source changes)
FROM node:22-alpine AS deps
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 2: Build static site
FROM deps AS build
COPY . .
RUN pnpm build

# Stage 3: Production runtime
FROM caddy:2-alpine AS runtime

# Non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Caddy needs writable dirs for internal state even with admin/tls off
RUN mkdir -p /data /config && chown -R appuser:appgroup /data /config

# Static assets (read-only at runtime)
COPY --from=build --chown=appuser:appgroup /app/dist /srv
COPY --chown=appuser:appgroup Caddyfile /etc/caddy/Caddyfile

USER appuser
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1
