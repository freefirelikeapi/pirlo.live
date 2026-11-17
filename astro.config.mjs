import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://futbolpirlotv.me',
  compressHTML: false,
  build: { format: 'preserve' },
});
