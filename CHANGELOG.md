&#xFEFF;# Changelog

Všechny významné změny v tomto projektu budou dokumentovány v tomto souboru.

Formát je založen na [Keep a Changelog](https://keepachangelog.com/cs/1.0.0/).

## [0.1.0] - 2026-01-23

### Přidáno

- Inicializace Astro projektu s TypeScript (strict mode)
- Tailwind CSS 4 s Vite pluginem
- Základní struktura portfolia (single-page)
  - `BaseLayout.astro` - hlavní layout s SEO
  - `Header.astro` - navigační hlavička
  - `Footer.astro` - patička se sociálními odkazy
  - `Hero.astro` - úvodní sekce
  - `About.astro` - sekce O mně
  - `CV.astro` - sekce s pracovními zkušenostmi
  - `Contact.astro` - kontaktní sekce
- SEO optimalizace pomocí `astro-seo`
- Automatická generace sitemap pomocí `@astrojs/sitemap`
- Konfigurace pro Netlify deployment (`netlify.toml`)
- Path aliasy pro TypeScript (`@/*`, `@components/*`, `@layouts/*`)
