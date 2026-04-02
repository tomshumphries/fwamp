import logo from '../assets/images/logos/logo-transparent.png'
import copy from '../../content/copy.json'

export default () => `
  <section class="hero" id="hero">
    <div class="container">
      <img class="hero-logo" src="${logo}" alt="FWAMP Logo" />
      <p class="subtitle">The Musical</p>
      <p class="tagline">${copy.show.tagline}</p>
      <p class="hero-festival">${copy.show.festival} &bull; ${copy.show.dates}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Get Tickets &mdash; ${copy.show.ticketPrice}</a>
        <a class="btn btn-outline" href="#trailer">Watch Trailer</a>
      </div>
    </div>
  </section>
`
