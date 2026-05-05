import logo from '../assets/images/logos/logo-transparent.png'
import copy from '../../content/copy.json'
import links from '../../content/links.json'

export default () => `
  <section class="hero" id="hero">
    <div class="container">
      <img class="hero-logo" src="${logo}" alt="FWAMP Logo" />
      <p class="subtitle">The Musical</p>
      <p class="tagline">${copy.show.tagline}</p>
      <p class="hero-festival">${copy.show.festival} &bull; ${copy.show.dates}</p>
      <p class="hero-fundraiser">Fundraiser Night &bull; ${copy.fundraiser.date} &bull; ${copy.fundraiser.venue}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Fringe &mdash; ${copy.show.ticketPrice}</a>
        <a class="btn btn-outline" href="${links.support.ratdepot.url}" target="_blank" rel="noopener">Fundraiser &mdash; ${copy.fundraiser.price}</a>
      </div>
    </div>
  </section>
`
