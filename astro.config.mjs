// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// BASE_PATH: set in CI for GitHub Pages (e.g. /advclaudia/). Leave unset for custom domain or root.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.GITHUB_PAGES === 'true' ? `https://${process.env.GITHUB_REPOSITORY_OWNER || 'github'}.github.io` : 'https://example.com',
  base,
  build: {
    // Inline small CSS into HTML to reduce requests and speed first paint
    inlineStylesheets: 'auto',
    // Minify HTML output for smaller payload
    compressHTML: true,
  },
});
