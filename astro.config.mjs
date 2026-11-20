import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://futballpirlotv.me',
  compressHTML: false,
  build: { format: 'preserve' },
});
