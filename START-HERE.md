# Fitvi.bes — start here

This folder contains your editable three-page fashion and accessories website.

## What's included

- **Home** (`index.html`): editable headline, images, featured finds and collection sections.
- **Products** (`products.html`): a searchable product catalogue with category filters. Add as many product records as you need in the CMS.
- **About Fitvi.bes** (`about.html`): editable brand story, principles and affiliate disclosures.
- **Admin dashboard** (`admin/`): an editing interface for your content. It needs one-time Decap Turbo/GitHub setup before it can save changes.

## Easiest free publishing route

1. Extract this ZIP to a folder.
2. Create a GitHub repository and upload the *contents* of this folder to the repository root.
3. In Netlify, import the GitHub repository. For this plain HTML/CSS/JS site, leave the build command blank and set the publish directory to `.`.
4. Publish the site and copy the Netlify URL.
5. Follow the full dashboard setup in `README.md` to connect Decap Turbo and replace `REPLACE_WITH_DECAP_TURBO_SITE_ID` in `admin/config.yml` with the real Site ID.

## Everyday editing after setup

1. Open `https://YOUR-SITE.netlify.app/admin/` and sign in.
2. Use **Products → Product Catalog** to add, edit, reorder or remove products.
3. Use **Home Sections → Sections / Collections** to add or edit outfit/accessory collections.
4. Use **Site & Home Page** to edit the homepage and **About Fitvi.bes** to edit the story page.
5. Save/publish. GitHub stores the edits; Netlify publishes the update.

## Before launch

- The supplied products are examples for layout only. Replace them with products you have checked.
- Affiliate URLs are blank on purpose. Paste your own working, approved tracked links.
- Replace image URLs with images you own or are permitted to use.
- Confirm disclosures and retailer/program rules for the affiliate accounts you use.
- Keep a backup of this project and the content JSON files.

The static site files and tools have no licence charge, but the free hosting and CMS plans have their own terms, quotas and availability limits. A custom domain typically has an annual fee, so use the supplied host subdomain to start.
