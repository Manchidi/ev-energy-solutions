# EV Energy Solutions website

Marketing site for EV Energy Solutions: EV charging infrastructure and intelligent energy
storage, Pretoria, South Africa.

Vite + React + TypeScript, no UI framework. One stylesheet, no CSS-in-JS.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then writes static output to dist/
npm run preview    # serves dist/
```

`npm run build` produces a plain static site in `dist/`, ready to deploy to Vercel, Netlify,
Cloudflare Pages, or any static host.

## Before it goes live

1. **Contact details** in `src/data/site.ts`. `email` and `phone` are deliberately empty; the
   contact page renders a visible `[add email address]` placeholder until they are filled in, so
   nothing invented ships by accident.
2. **Enquiry form**: set `formEndpoint` in the same file to a form handler (Formspree, Netlify
   Forms, your own function). While it is empty the form validates and shows an on-page notice but
   sends nothing.
3. **SPA routing**: `public/_redirects` covers Netlify. On Vercel add a `vercel.json` rewrite of
   `/(.*)` → `/index.html`; on Apache/Nginx point all unknown paths at `index.html`.

## Structure

```
src/
  pages/          Home, Solutions, Products (chargers), About, Contact, NotFound
  components/     Layout, Header, Footer, Button, SectionHead, StatBand, CtaBand,
                  ProductCard, Reveal (scroll fade-in), ScrollManager, Icons
  data/
    site.ts       Company details, footer navigation, form endpoint
    products.ts   The charger range, one entry per model
  styles.css      Design tokens + all component styles
public/assets/img Logo, photography and product images
```

## Content rules

The copy is written from two source documents: the EV Energy Solutions company profile and the
WAGA Motion product catalogue. Two things to keep true as the site grows:

- **Only claim what the business does.** Services on the site map one-to-one to the four in the
  company profile. There are no invented figures: no years in business, sites deployed, or client
  counts. The dark band under the hero deliberately carries equipment and standards facts instead.
- **Product specifications come from the catalogue.** `src/data/products.ts` is the single source;
  if the catalogue revision changes, update it there. A model with no honest photograph can omit
  `image` and the card falls back to a typographic panel (see LPS300).

## Design

- Display type Sora, body type Inter, loaded from Google Fonts in `index.html`.
- Palette sampled from the logo: lime `#5ece0f`, green `#2aa85e`, blue `#1158a4`, deep navy
  `#08192e` for dark surfaces and primary buttons.
- Section rhythm alternates white and `--surface` grey. Headings sit left with supporting copy in a
  second column (`<SectionHead split />`).
- Reduced-motion preferences disable the scroll reveal and smooth scrolling.
