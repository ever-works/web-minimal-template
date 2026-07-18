import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Public base URL — used for canonical links + the sitemap. Override with SITE_URL.
  site: process.env.SITE_URL || 'https://acme.com',
  // Fully static output — served by nginx in the Docker image.
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
