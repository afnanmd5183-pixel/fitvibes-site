# Fitvi.bes — premium style finds

A responsive, three-page affiliate discovery website with a beige, navy and white editorial design. Built for outfits, watches and accessories, with editable collection sections and product listings.

## Pages included

- `index.html` — Home page with editable hero, collection cards and featured products.
- `products.html` — Product catalogue with editable category filters, search, descriptions and retailer buttons.
- `about.html` — About Fitvi.bes, how-we-choose principles and affiliate disclosures.
- `admin/` — Decap CMS content editor. After setup, visit `/admin/` to edit content through a dashboard.

## What can be edited in the dashboard?

- Website brand name, tagline, announcement bar and home hero copy/images.
- Any number of home collection/section cards: name, unique key, title, description, image, link, button text, order and visibility.
- Product cards: title, description, tagline, section/category, image, retailer, market, optional price note, affiliate URL, badge, featured status, visibility and order.
- About-page story, images, principles and disclosures.

To add a new category, add a section under **Home Sections → Sections / Collections**, give it a unique lowercase key such as `college-fits`, then set any products for that category to the same `section_key`. Category filters and the homepage collection cards are generated from the editable data.

## Start with a free deployment

You need a GitHub account, a Netlify account and a free Decap Turbo account. No custom domain is required; Netlify can provide a free `*.netlify.app` address, subject to availability and the host's plan limits.

### A. Upload the website to GitHub

1. Create a new GitHub repository, for example `fitvibes-site`.
2. Upload the *contents* of this project folder to the repository root. The files should include `index.html`, `products.html`, `about.html`, `assets/`, `content/`, `admin/` and `netlify.toml` at the top level.
3. Use the branch name `main`.

### B. Publish the site on Netlify

1. Sign in at <https://www.netlify.com/>.
2. Choose **Add new project / Import an existing project** and connect your GitHub repository.
3. For this plain HTML/CSS/JavaScript site, leave the build command empty and set the publish directory to `.` (the repository root).
4. Deploy. Open the generated site URL and check Home, Products and About.

### C. Connect the editable dashboard (one-time setup)

Decap CMS is the dashboard interface. Decap Turbo provides the hosted authentication/backend to save your edits to the connected GitHub repository.

1. Sign in at <https://decapcms.org/turbo/> and create a free organization.
2. Open **Git connection** and install/connect the Decap Turbo GitHub App to the GitHub account that owns this repository. Limit it to this repository if possible.
3. Create a Decap Turbo **Site** and select the GitHub repository and `main` branch.
4. Set the config path to `admin/config.yml`.
5. Add the exact deployed admin URL to the site's allowed admin interface URLs: `https://YOUR-SITE.netlify.app/admin/` (replace `YOUR-SITE` with your actual Netlify subdomain).
6. Copy the Site ID from the Decap Turbo site's Overview tab.
7. Open `admin/config.yml` in GitHub. Replace `REPLACE_WITH_DECAP_TURBO_SITE_ID` with the copied Site ID, save the change and commit it to `main`.
8. Wait for the Netlify deployment to finish, then visit `https://YOUR-SITE.netlify.app/admin/` and log in through Decap Turbo.
9. Test editing a collection, adding a sample product and publishing it. Confirm it appears publicly before entering your real affiliate links.

The dashboard uses `turbo-github`; do not replace it with a GitHub token in the public code. Never paste a private access token into HTML, JavaScript or this repository.

## Adding and editing content

- Open `/admin/` and choose **Products → Product Catalog** to add or edit products.
- Choose **Home Sections → Sections / Collections** to add, edit, reorder or hide sections.
- Use **Site & Home Page** to update the homepage headline, description and hero images.
- Use **About Fitvi.bes** to update the story and principles.
- Click Save/Publish in the CMS. The change is committed to GitHub and Netlify rebuilds/redeploys the website automatically.

### Important for categories

Every section needs a unique key using lowercase letters, numbers and hyphens (e.g. `watches`, `accessories`, `college-fits`). The product's `section_key` must match it exactly. Use a sensible, stable key; you can freely change the visible section name without changing the key.

### Product links and example content

The included product entries and Unsplash images are sample layout content. Affiliate URLs are intentionally blank, so the cards show a “Link coming soon” state instead of inventing links. Replace examples with actual products you have checked, actual approved tracking links, accurate descriptions and image assets you are permitted to use. Do not imply you personally tested a product unless you did.

## Visual / technical notes

- Palette: navy, beige, warm white and muted neutrals.
- Responsive page layout, mobile nav, product search and category filters.
- Product and section data lives in `content/*.json`; CMS edits those files.
- Images uploaded from the CMS are stored in `images/uploads/` in the repository.
- `netlify.toml` sets the site root as the publish directory and adds a no-index header for `/admin/`.
- External font and image URLs need an internet connection. Replace sample image URLs with approved images when launching.

## Affiliate note

The About page includes a general affiliate disclosure and Amazon's statement. Keep these accurate for your actual program membership and comply with each affiliate program's current rules. Verify the retailer/market for every link (Amazon.in and Amazon.com are separate marketplaces), and check prices/availability on the destination page.

## Costs and limitations

The project files are free/open web technologies and the suggested hosting/CMS have free plans, but free plans have terms, quotas and availability limits that can change. This is not a guarantee of lifetime free hosting. A custom domain usually costs money to register and renew. Back up the GitHub repository and keep an exported copy of your content.
