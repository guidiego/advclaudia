// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// BASE_PATH: set in CI. Use '/' for custom domain (draclaudiafreire.com) or for the drclaudiafreire.github.io user site.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://draclaudiafreire.com',
  base,
  integrations: [sitemap()],
  build: {
    // Inline small CSS into HTML to reduce requests and speed first paint
    inlineStylesheets: 'auto',
    // Minify HTML output for smaller payload
    compressHTML: true,
  },
});
