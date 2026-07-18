# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile for the Ever Works general-purpose minimal website
# template (Astro + pnpm monorepo). Produces a small nginx image serving the
# static build, suitable for Kubernetes deployment via `@ever-works/k8s-plugin`.
#
#   - `deps`    → install the app's workspace dependencies.
#   - `builder` → `pnpm --filter @ever-works/web-minimal run build` → apps/web/dist.
#   - `runner`  → nginx serving apps/web/dist on :3000 (matches the k8s Service targetPort).

ARG NODE_VERSION=22-alpine
ARG NGINX_VERSION=1.27-alpine

# ---- deps ------------------------------------------------------------------

FROM node:${NODE_VERSION} AS deps
WORKDIR /work
RUN corepack enable
RUN apk add --no-cache libc6-compat

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/web/package.json ./apps/web/package.json

# Prefer the internal Verdaccio npm cache when VERDACCIO_REGISTRY is set;
# empty (e.g. a fork) falls back to public npm. Best-effort lock rewrite.
ARG VERDACCIO_REGISTRY=""
RUN if [ -n "$VERDACCIO_REGISTRY" ]; then \
        echo "registry=${VERDACCIO_REGISTRY}" >> /work/.npmrc && \
        { sed -i "s|https://registry.npmjs.org|${VERDACCIO_REGISTRY%/}|g" /work/pnpm-lock.yaml 2>/dev/null || true; }; \
    fi

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --filter "@ever-works/web-minimal..."

# ---- builder ---------------------------------------------------------------

FROM node:${NODE_VERSION} AS builder
WORKDIR /work
RUN corepack enable

COPY --from=deps /work/node_modules ./node_modules
COPY --from=deps /work/apps/web/node_modules ./apps/web/node_modules
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm --filter @ever-works/web-minimal run build

# ---- runner ----------------------------------------------------------------

FROM nginx:${NGINX_VERSION} AS runner

ARG GITHUB_REPOSITORY=""
ARG GITHUB_SHA=""
LABEL org.opencontainers.image.source="https://github.com/${GITHUB_REPOSITORY}"
LABEL org.opencontainers.image.revision="${GITHUB_SHA}"
LABEL org.opencontainers.image.title="${GITHUB_REPOSITORY}"

# Serve on 3000 so the k8s Service targetPort: 3000 matches without special-casing.
RUN cat > /etc/nginx/conf.d/default.conf <<'EOF'
server {
    listen 3000;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri.html $uri/index.html /index.html =404;
    }

    location = /healthz {
        access_log off;
        return 200 "ok\n";
        add_header Content-Type text/plain;
    }
}
EOF

COPY --from=builder /work/apps/web/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
