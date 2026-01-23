# Osobní stránky - Radek Smejkal

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://app.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Osobní prezentační web postavený na moderních technologiích s důrazem na výkon a uživatelskou přívětivost.

## O projektu

Tento repositář obsahuje zdrojový kód mých osobních stránek, které slouží jako:

- **Portfolio** - prezentace projektů a dovedností
- **Životopis** - přehled profesních zkušeností a vzdělání
- **Kontaktní bod** - pro potenciální zaměstnavatele, klienty a kolegy

## Technologie

| Technologie | Účel |
|-------------|------|
| **Astro** | Statický generátor optimalizovaný pro obsahové stránky |
| **Tailwind CSS** | Utility-first CSS framework pro rychlý vývoj |
| **TypeScript** | Typová bezpečnost a lepší developer experience |
| **Netlify** | Hosting s automatickým deployem z GitHubu |

## Obsah stránek

- **Úvodní sekce** - krátké představení, fotografie
- **O mně** - detailnější bio, osobní příběh
- **Životopis/CV** - vzdělání, pracovní zkušenosti, dovednosti
- **Kontakt** - sociální sítě, email, kontaktní formulář

## Metodika vývoje

### Git workflow
- Feature branches pro každou změnu
- Pull request reviews před mergem
- Chráněná main větev

### Conventional commits
```
feat: nová funkcionalita
fix: oprava chyby
docs: změny v dokumentaci
style: formátování, bez změny logiky
refactor: refaktoring kódu
```

### Continuous Deployment
- Automatický deploy na Netlify při push do main
- Preview deploys pro pull requesty

### Design principy
- Mobile-first responzivní design
- Přístupnost (a11y) jako priorita
- Optimalizace výkonu (Core Web Vitals)

## Struktura projektu

```
/
├── src/
│   ├── components/    # Znovupoužitelné komponenty
│   ├── layouts/       # Layouty stránek
│   ├── pages/         # Jednotlivé stránky
│   └── styles/        # Globální styly
├── public/            # Statické soubory (obrázky, favicon)
├── astro.config.mjs   # Konfigurace Astro
├── tailwind.config.mjs
├── tsconfig.json
└── README.md
```

## Jak spustit lokálně

### Prerekvizity
- Node.js 18+
- npm nebo pnpm

### Instalace

```bash
# Klonování repositáře
git clone https://github.com/radeksm/stranky.git
cd stranky

# Instalace závislostí
npm install
```

### Vývoj

```bash
# Spuštění dev serveru
npm run dev

# Web běží na http://localhost:4321
```

### Build

```bash
# Produkční build
npm run build

# Náhled produkčního buildu
npm run preview
```

## Roadmap

- [x] **Fáze 0**: Inicializace projektu a dokumentace
- [ ] **Fáze 1**: Základní struktura a design
  - Nastavení Astro projektu
  - Implementace layoutu
  - Základní komponenty
- [ ] **Fáze 2**: Obsah a texty
  - Naplnění jednotlivých sekcí
  - Fotografie a grafika
- [ ] **Fáze 3**: Optimalizace a SEO
  - Meta tagy a Open Graph
  - Sitemap a robots.txt
  - Lighthouse audit
- [ ] **Fáze 4**: Launch
  - Finální review
  - Nasazení na produkci
  - Propojení s vlastní doménou

## License

Tento projekt je licencován pod [MIT licencí](LICENSE).

---

Vytvořeno s ❤️ pomocí [Astro](https://astro.build)
