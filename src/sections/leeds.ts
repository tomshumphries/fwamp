import copy from '../../content/copy.json'
import links from '../../content/links.json'

export default () => `
  <section id="leeds">
    <div class="container">
      <div class="section-heading">
        <h2>Leeds Preview</h2>
      </div>
      <div class="venue-layout">
        <div class="venue-card">
          <h3 class="venue-name">${copy.leedsVenue.name}</h3>
          <p class="venue-address">${copy.leedsVenue.address}</p>
          <div class="venue-pills">
            <span class="venue-pill">${copy.leedsVenue.dates}</span>
            <span class="venue-pill">${copy.leedsVenue.time}</span>
            <span class="venue-pill">${copy.leedsVenue.ticketPrice}</span>
          </div>
          <div class="venue-map">
            <iframe
              src="https://maps.google.com/maps?q=53.8063196,-1.5556465&hl=en&z=16&output=embed"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="venue-buttons">
            <a class="btn btn-primary" href="${links.leedsVenue.tickets}" target="_blank" rel="noopener">Get Tickets</a>
            <a class="btn btn-outline" href="${links.leedsVenue.getDirections}" target="_blank" rel="noopener">Get Directions</a>
          </div>
        </div>

        <div class="venue-card">
          <h3 class="venue-card-heading">${copy.leedsVenue.whyTitle}</h3>
          <p class="leeds-why-body">${copy.leedsVenue.whyBody}</p>
        </div>
      </div>
    </div>
  </section>
`
