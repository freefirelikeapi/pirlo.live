import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pirlo.live',
  compressHTML: false,
  build: { format: 'preserve' },
});
