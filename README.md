# Saituri — saituri.ge

The website for **Saituri**, a web studio that builds websites for local Georgian businesses: restaurants, hotels, tour agencies, car dealerships, car repair shops and more.

Georgian by default, with an English switch. Contact: **+995 595 03 38 48**.

## What's in it

- `index.html` — the whole page
- `assets/css/style.css` — styles (dark theme, all animations, mobile layouts)
- `assets/js/main.js` — language switch, offer chatbot, hero slider, orbit animation
- `assets/img/work/` — screenshots of portfolio sites (640px for phones, 1100px for larger screens)
- `assets/img/dishes/` — small photos for the hero animation (not loaded on phones)
- `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest` — icons
- `assets/img/og.jpg` — preview image shown when the link is shared
- `robots.txt`, `sitemap.xml` — for Google
- `_headers` — caching and security headers for Cloudflare Pages
- `404.html` — page shown for broken links

It's a plain static site: no build step, no framework, no server.

## Deploy on Cloudflare Pages

1. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Choose this repository (`Rizznado/saituri`).
3. Build settings:
   - **Framework preset:** None
   - **Build command:** leave empty
   - **Build output directory:** `/`
4. Click **Save and Deploy**.
5. Under the project's **Custom domains**, add `saituri.ge` (and `www.saituri.ge` if you want it).

Every push to `main` redeploys the site automatically.

## Editing

- Prices and package features appear in two places: the price cards in `index.html` and the `PLANS` list in `assets/js/main.js` (used by the chatbot). Change both.
- Text has a Georgian (`class="ka"`) and an English (`class="en"`) version side by side. Edit both.
- Phone number appears in `index.html` and as `PHONE` in `assets/js/main.js`.
