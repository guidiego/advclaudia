// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// BASE_PATH: set in CI. Use '/' for custom domain (drclaudiafreire.com). Use '/advclaudia/' for *.github.io project site.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://drclaudiafreire.com',
  base,
  build: {
    // Inline small CSS into HTML to reduce requests and speed first paint
    inlineStylesheets: 'auto',
    // Minify HTML output for smaller payload
    compressHTML: true,
  },
});
