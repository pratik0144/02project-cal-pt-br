// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://calculadoradehorasextrasonline.com',
  trailingSlash: 'always',
  redirects: {
    '/privacy': '/politica-de-privacidade/',
    '/terms': '/termos-e-condicoes/',
    '/about': '/sobre-nos/',
    '/contact': '/fale-conosco/',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});