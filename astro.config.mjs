import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pirlotvlive.me',
  compressHTML: false,
  build: { format: 'preserve' },
});
