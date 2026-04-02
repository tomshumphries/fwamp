import './style.css'
import logoClean from './assets/images/logos/logo-clean.png'

import topbar from './sections/topbar'
import hero from './sections/hero'
import trailer from './sections/trailer'
import videos from './sections/videos'
import gallery, { initGallery } from './sections/gallery'
import reviews from './sections/reviews'
import venue from './sections/venue'
import support from './sections/support'
import footer from './sections/footer'

// Change this array to reorder sections on the page
const sections = [
  { id: 'hero', label: 'Home', render: hero },
  { id: 'trailer', label: 'Trailer', render: trailer },
  { id: 'videos', label: 'Videos', render: videos },
  { id: 'gallery', label: 'Gallery', render: gallery },
  { id: 'reviews', label: 'Reviews', render: reviews },
  { id: 'venue', label: 'Venue', render: venue },
  { id: 'support', label: 'Support', render: support },
]

const navItems = sections
  .map((s) => `<li><a href="#${s.id}" class="nav-link" data-section="${s.id}">${s.label}</a></li>`)
  .join('')

const sectionHtml = sections.map((s) => s.render()).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="side-nav">
    <div class="nav-logo"><img src="${logoClean}" alt="FWAMP" class="nav-logo-img" /></div>
    <ul class="nav-links">
      ${navItems}
    </ul>
  </nav>
  ${topbar()}
  <main class="main-content">
    ${sectionHtml}
    ${footer()}
  </main>
`

// Highlight active nav link on scroll
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')
const sectionEls = sections.map((s) => document.getElementById(s.id)!).filter(Boolean)

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'))
        const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`)
        active?.classList.add('active')
      }
    }
  },
  { rootMargin: '-40% 0px -60% 0px' }
)

for (const el of sectionEls) {
  observer.observe(el)
}

initGallery()
