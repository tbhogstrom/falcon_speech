import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel({
    analytics: true,
    imageService: true,
    webAnalytics: true
  })
});