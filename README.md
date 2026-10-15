# Bitstek - Demo

Same look as the original site: the original CSS, fonts, images and UIkit/theme scripts are
kept in `public/`, and every page's markup is converted 1:1 into React components.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/
    npm run preview

## Deploy
- Netlify: build command `npm run build`, publish directory `dist` (`public/_redirects` handles routing)
- Vercel: framework preset "Vite" (`vercel.json` handles routing)

## Routes
/ (Home), /about, /markets, /calculator, /education, /packages, /careers, /contact

## Structure
- `src/pages/*`        one component per original page
- `src/components/*`   Header, Footer, ToTop, Layout (re-runs the theme scripts on each route change)
- `public/js/calculator.js`  original options-calculator script, unchanged logic

## Still to confirm (carried over from the original site)
1. Contact form posts to https://bitstekadvisory.com/contact.php (server code is not part of this project).
2. Login / Sign up point to crm.bitstekadvisory.com on the home page and "#" on other pages (as in the original).
3. Footer Terms / Privacy / Documentation links are "#" placeholders.
