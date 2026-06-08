# FWAMP!

**Fantasy World Adventures Mega Park! The Musical**
A static promotional website for an Edinburgh Fringe 2026 musical comedy.

## Tech Stack

- **Build**: Vite + TypeScript (vanilla, no framework)
- **Hosting**: GitHub Pages (auto-deploys via GitHub Actions on push to main)
- **URL**: https://tomshumphries.github.io/fwamp/

## Project Structure

```
fwamp/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages deploy (builds on push to main)
├── content/                    # Content data (not code)
│   ├── links.json              # External URLs + review quotes (socials, videos, reviews, support)
│   └── copy.json               # All text content (show info, fundraiser, descriptions, copy)
├── docs/
│   ├── BRAND_GUIDELINES.md     # Fonts, colours, logo usage
│   └── CONTENT_GUIDE.md        # What content we have and what's still needed
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logos/          # logo-transparent.png, logo-clean.png, logo-full.png
│   │   │   ├── photos/        # 60 show photos (_MG_*.JPG)
│   │   │   └── team/          # Production team headshots (name1.jpeg, name2.jpeg × 6 members)
│   │   └── fonts/              # Custom fonts (if any)
│   ├── sections/               # One file per page section (easy to reorder)
│   │   ├── topbar.ts           # Sticky top bar (socials, donate, tickets)
│   │   ├── hero.ts             # Logo, tagline, CTAs
│   │   ├── about.ts            # Show description + company info
│   │   ├── team.ts             # Production team bios — 2-col polaroid card grid
│   │   ├── trailer.ts          # Embedded YouTube trailer
│   │   ├── videos.ts           # 2x2 grid of embedded song clips
│   │   ├── gallery.ts          # 3x3 photo preview + "View All" lightbox (60 photos)
│   │   ├── reviews.ts          # Review cards with quotes
│   │   ├── leeds.ts            # Leeds preview info card + map + "trial run" copy
│   │   ├── fringe.ts           # Edinburgh Fringe venue info + map + Plan Your Visit planner
│   │   ├── support.ts          # GoFundMe + Sponsor cards
│   │   └── footer.ts           # Social links + copyright
│   ├── main.ts                 # App entry — section ordering + nav setup
│   ├── scroll.ts               # Keyboard navigation (arrow/page keys) for desktop scroll snap
│   ├── style.css               # All styles
│   └── vite-env.d.ts           # Type declarations for image imports
├── public/                     # Static files served as-is
│   ├── og-image.jpg            # Open Graph social share image
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite config (base path for GitHub Pages)
└── CLAUDE.md                   # This file
```

## Architecture

### Section system
Each page section is a separate file in `src/sections/` exporting a render function.
Sections are ordered via an array in `main.ts` — reorder the array to reorder the page.
The side nav auto-generates from this same array.

### Content/code separation
All text copy lives in `content/copy.json`. External URLs and review quotes live in `content/links.json`.
Sections import from these JSON files — update content without touching component code.

### Gallery
- 9 curated photos shown in a 3x3 grid on the page
- "View All" button opens a full-screen lightbox overlay with all 60 photos
- Uses Vite's `import.meta.glob` to dynamically import the entire photos directory

## Brand

- **Colours**: yellow `#ffde59`, peach `#ffb68a` (gradient bg), pink `#ff66c4`, burgundy `#80004e`, blue `#87b0e1`
- **Fonts**: Bobby Jones Soft (primary), One Little Font (secondary), Gabriel Sans Condensed (body)
- **Logo**: Three versions in `src/assets/images/logos/` — transparent (used in hero + nav), clean (solid bg), full (with confetti)
- See `docs/BRAND_GUIDELINES.md` for full details

## Show Details

- **Venue**: theSpace on the Mile, Space 3, 80 High Street, Edinburgh
- **Dates**: 17-29 August 2026
- **Tickets**: £12.00 — https://tickets.thespaceuk.com/event/911:6660/
- **Duration**: 70 min, 16+
- **Created by**: Abbie Freeston and Matthew Stanley

## Development

```bash
npm run dev     # local dev server with hot reload
npm run build   # production build (outputs to dist/)
npm run preview # preview production build locally
```

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages.

## Git Notes

- Local git identity: tom humphries / tshumphries@hotmail.co.uk (personal account)
- Work GitHub account added as collaborator to handle auth via existing macOS keychain
- Repo: https://github.com/tomshumphries/fwamp
