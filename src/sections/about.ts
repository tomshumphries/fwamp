import copy from '../../content/copy.json'

export default () => `
  <section id="about">
    <div class="container">
      <div class="section-heading">
        <h2>About the Show</h2>
      </div>
      <div class="about-content">
        <div class="about-block">
          <p>${copy.show.aboutShow}</p>
          <p class="about-detail">${copy.show.duration} &bull; ${copy.show.ageRestriction} &bull; ${copy.show.genre}</p>
        </div>
        <div class="about-block">
          <h3>Who We Are</h3>
          <p>${copy.show.aboutCompany}</p>
        </div>
      </div>
      <div class="about-cta">
        <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Get Tickets &mdash; ${copy.show.ticketPrice}</a>
      </div>
    </div>
  </section>
`
