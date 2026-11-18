import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pirlotvenvivo.biz',
  compressHTML: false,
  build: { format: 'preserve' },
});
