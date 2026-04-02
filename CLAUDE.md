# FWAMP

A static website for an Edinburgh Fringe musical.

## Tech Stack

- Vite + TypeScript (vanilla, no framework)
- Hosting: TBD (likely Vercel or Netlify)
- Domain: TBD

## Project Structure

```
index.html          # entry point
src/
  main.ts           # app entry
  style.css         # global styles
  assets/           # static assets (images etc)
public/             # public static files (favicon etc)
```

## Content

The site will display:
- Photos
- Links
- YouTube videos
- Text

Content will be imported from files provided by the user.

## Development

```bash
npm run dev     # local dev server with hot reload
npm run build   # production build (outputs to dist/)
npm run preview # preview production build locally
```

## Notes

- Git identity is set to personal account (tom humphries / tshumphries@hotmail.co.uk) locally
- Work GitHub account added as collaborator on the repo to handle auth via existing keychain credentials
