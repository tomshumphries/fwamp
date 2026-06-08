import logo from '../assets/images/logos/logo-transparent.png'
import copy from '../../content/copy.json'

export default () => `
  <section class="hero" id="hero">
    <div class="container">
      <h1 class="sr-only">FWAMP! Fantasy World Adventures Mega Park! The Musical</h1>
      <img class="hero-logo" src="${logo}" alt="FWAMP! Fantasy World Adventures Mega Park! The Musical" />
      <p class="subtitle">The Musical</p>
      <p class="tagline">${copy.show.tagline}</p>
    </div>
  </section>
`
