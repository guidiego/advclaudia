# How to change the page content

All visible text and contact data are configured in **`src/data/site.json`**. Only that file contains content (e.g. in Portuguese); the rest of the codebase is in English.

## What you can edit

- **`nav`** — Menu links (each with `label` and `href`). Use these anchors: `#hero`, `#about`, `#practice-areas`, `#differentiators`, `#contact`.
- **`seo`** — Page title and description (SEO).
- **`contact`** — Name, OAB, city, phone, email, WhatsApp number (digits only, e.g. `5511999999999`).
- **`hero`** — Headline, subheadline, CTA button text, trust badge (OAB + years of experience).
- **`sobre`** — Section title, bio (use `\n` for line breaks), CTA link text.
- **`areas`** — Section title, list of areas (title + description), CTA text.
- **`diferenciais`** — Section title and list of items (title + description).
- **`contato`** — Section title, subtitle, form submit button text, WhatsApp button text.

After editing `site.json`, run `npm run build` (or `npm run dev`) to see changes.

## Production URL

In **`astro.config.mjs`**, set `site` to your real site URL for canonical links and social sharing.
