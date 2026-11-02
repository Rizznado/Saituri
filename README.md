# Saituri — saituri.ge

The website for **Saituri**, a web studio that builds websites for local Georgian businesses: restaurants, hotels, tour agencies, car dealerships, car repair shops and more.

Georgian by default, with an English switch. Contact: **+995 595 03 38 48**.

## What's in it

- `public/` — everything that goes online
  - `index.html` — the whole page
  - `assets/css/style.css` — styles (dark theme, all animations, mobile layouts)
  - `assets/js/main.js` — language switch, offer chatbot, hero slider, orbit animation
  - `assets/img/work/` — screenshots of portfolio sites (640px for phones, 1100px for larger screens)
  - `assets/img/dishes/` — small photos for the hero animation (not loaded on phones)
  - `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest` — icons
  - `assets/img/og.jpg` — preview image shown when the link is shared
  - `robots.txt`, `sitemap.xml` — for Google
  - `_headers` — caching and security headers
  - `404.html` — page shown for broken links
- `wrangler.jsonc` — tells the Cloudflare Worker to serve the `public/` folder

It's a plain static site: no build step, no framework, no server code.

## Deploy on Cloudflare Workers

1. In the Cloudflare dashboard open **Workers & Pages** and your Worker.
2. Check the Worker's name at the top of the page. It must match `"name"` in `wrangler.jsonc` (currently `saituri`).
3. Go to **Settings → Build → Connect** and choose this repository (`Rizznado/Saituri`), branch `main`.
   - **Build command:** leave empty
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** `/`
4. Save. Cloudflare deploys straight away, and again on every push to `main`.
5. Under **Settings → Domains & Routes**, keep `saituri.ge` connected (add `www.saituri.ge` if you want it).

## Editing

- Prices and package features appear in two places: the price cards in `public/index.html` and the `PLANS` list in `public/assets/js/main.js` (used by the chatbot). Change both.
- Text has a Georgian (`class="ka"`) and an English (`class="en"`) version side by side. Edit both.
- Phone number appears in `public/index.html` and as `PHONE` in `public/assets/js/main.js`.
