# Content Guide

Everything the site needs, what we have, and what's still missing.

## Status: What We Have

### Show Details (complete — `content/copy.json`)
- [x] Full name: Fantasy World Adventures Mega Park! The Musical
- [x] Company: FWAMP! Theatre Company
- [x] Creators: Abbie Freeston and Matthew Stanley
- [x] Tagline: "The rollercoaster that is love, life, and being a constant disappointment to your parents"
- [x] Full description / synopsis
- [x] Venue: theSpace on the Mile, Space 3, 80 High Street, Edinburgh EH1 1TH
- [x] Dates: 17-29 August 2026
- [x] Duration: 70 minutes
- [x] Age restriction: 16+
- [x] Content warnings: scenes of a sexual nature, strong language
- [x] Ticket price: £12.00
- [x] Ticket URL: https://tickets.thespaceuk.com/event/911:6660/

### Links & Socials (complete — `content/links.json`)
- [x] Instagram, TikTok, Facebook, LinkedIn, YouTube
- [x] 4 YouTube song clips (Welcome to FWAMP, Let's Parade, Maintenance Men, Man of the Hour)
- [x] 1 official trailer
- [x] 2 reviews (Fairy Powered Productions 5-star, Leeds Living)
- [x] Fundraiser event details (date, venue, price — `content/copy.json`)
- [x] Get Directions URL for venue
- [x] GoFundMe link
- [x] Sponsor form link

### Photos (complete — `src/assets/images/photos/`)
- [x] 60 show photos (from WeTransfer download)
- [x] 9 curated for homepage preview grid
- [x] All 60 available in "View All" lightbox gallery

### Logos (complete — `src/assets/images/logos/`)
- [x] `logo-transparent.png` — transparent background (used in hero + side nav)
- [x] `logo-clean.png` — solid peach background
- [x] `logo-full.png` — with confetti decorations

### Brand Guidelines (complete — `docs/BRAND_GUIDELINES.md`)
- [x] Fonts: Bobby Jones Soft, One Little Font, Gabriel Sans Condensed
- [x] Colours: pink, burgundy, blue, yellow, peach
- [x] Background gradient: yellow → peach

### Reviews (complete — quotes live in `content/links.json`)
- [x] Fairy Powered Productions — 5 stars, quote extracted
- [x] Leeds Living — quote extracted (no star rating)

## What's Still TBD

- [x] Bobby Jones Soft — loaded via `@font-face` in `style.css`
- [ ] One Little Font, Gabriel Sans Condensed — still using system fonts as fallback
- [ ] Show times (specific daily schedule if it varies)
- [ ] Cast / crew list (if desired on site)
- [x] Favicon — 16px, 32px, 180px variants in `public/`
- [x] Open Graph / social share image — `public/og-image.jpg`

## Content File Structure

```
content/
  links.json        # All external URLs (socials, videos, reviews, support)
  copy.json         # All text content (show info, descriptions, copy)

docs/
  BRAND_GUIDELINES.md  # Fonts, colours, logo usage
  CONTENT_GUIDE.md     # This file

src/assets/images/
  logos/             # 3 logo variants
  photos/            # 60 show photos
```
