import copy from '../../content/copy.json'

export default () => `
  <section id="venue">
    <div class="container">
      <div class="section-heading">
        <h2>Venue</h2>
      </div>
      <div class="venue-content">
        <div class="venue-info">
          <h3>${copy.show.venue}</h3>
          <p class="address">${copy.show.venueAddress}</p>
          <p class="venue-dates"><strong>${copy.show.dates}</strong></p>
          <p class="venue-detail">${copy.show.duration} &bull; ${copy.show.ageRestriction} &bull; ${copy.show.ticketPrice}</p>
          <br/>
          <div class="venue-buttons">
            <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Get Tickets</a>
            <a class="btn btn-outline" href="https://www.google.com/maps/search/The+Space+on+the+Mile+Edinburgh" target="_blank" rel="noopener">Get Directions</a>
          </div>
        </div>
        <div class="venue-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.0!2d-3.1883!3d55.9505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDU3JzAxLjgiTiAzwrAxMScxNy45Ilc!5e0!3m2!1sen!2suk!4v1"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
`
