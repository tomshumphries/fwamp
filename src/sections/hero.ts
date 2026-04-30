import logo from '../assets/images/logos/logo-transparent.png'
import copy from '../../content/copy.json'

export default () => `
  <section class="hero" id="hero">
    <div class="container">
      <img class="hero-logo" src="${logo}" alt="FWAMP Logo" />
      <p class="subtitle">The Musical</p>
      <p class="tagline">${copy.show.tagline}</p>
      <p class="hero-festival">${copy.show.festival} &bull; ${copy.show.dates}</p>
      <p class="hero-fundraiser">Fundraiser Night &bull; 22 May 2026 &bull; Archive, Leeds</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Fringe &mdash; ${copy.show.ticketPrice}</a>
        <a class="btn btn-outline" href="#support">Fundraiser &mdash; £6</a>
        <a class="btn btn-outline" href="#trailer">Watch Trailer</a>
      </div>
    </div>
  </section>
`
