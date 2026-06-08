import copy from '../../content/copy.json'
import links from '../../content/links.json'

export default () => `
  <section id="about">
    <div class="container">
      <div class="section-heading">
        <h2>About the Show</h2>
      </div>
      <p class="about-synopsis">${copy.show.aboutShow}</p>
      <div class="about-pills">
        <span class="about-pill">${copy.show.duration}</span>
        <span class="about-pill">${copy.show.ageRestriction}</span>
        <span class="about-pill">${copy.show.genre}</span>
        ${copy.show.contentWarnings.map(w => `<span class="about-pill about-pill-warning">${w}</span>`).join('')}
      </div>
      <div class="about-who">
        <h3>Who We Are</h3>
        <p>${copy.show.aboutCompany}</p>
      </div>
      <div class="faq sr-only">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>Where is FWAMP performed?</summary>
          <p>FWAMP! is at theSpace on the Mile, Space 3, 80 High Street, Edinburgh, EH1 1TH, right in the heart of the Old Town on the Royal Mile.</p>
        </details>
        <details>
          <summary>When does FWAMP run at Edinburgh Fringe 2026?</summary>
          <p>FWAMP! runs from 17 to 29 August 2026 as part of the Edinburgh Festival Fringe.</p>
        </details>
        <details>
          <summary>Is there a preview run of FWAMP before Edinburgh?</summary>
          <p>Yes. FWAMP! has a two-night preview at the Alec Clegg Studio, stage@leeds, University of Leeds on Thursday 30 and Friday 31 July 2026 at 7:30pm. Tickets are ${copy.leedsVenue.ticketPrice}. <a href="${links.leedsVenue.tickets}" target="_blank" rel="noopener">Book via stage@leeds</a>.</p>
        </details>
        <details>
          <summary>How much are FWAMP tickets?</summary>
          <p>Edinburgh Fringe tickets are ${copy.fringeVenue.ticketPrice}, <a href="${links.fringeVenue.tickets}" target="_blank" rel="noopener">book at the theSpace website</a>. Leeds preview tickets are ${copy.leedsVenue.ticketPrice}, <a href="${links.leedsVenue.tickets}" target="_blank" rel="noopener">book via stage@leeds</a>.</p>
        </details>
        <details>
          <summary>How long is FWAMP?</summary>
          <p>FWAMP! is 70 minutes long with no interval.</p>
        </details>
        <details>
          <summary>Is FWAMP suitable for children?</summary>
          <p>FWAMP! is rated 16+ and contains scenes of a sexual nature and strong language. It is not suitable for under 16s.</p>
        </details>
        <details>
          <summary>Who created FWAMP?</summary>
          <p>FWAMP! was created by Abbie Freeston and Matthew Stanley, and is produced by FWAMP! Theatre Company.</p>
        </details>
      </div>
    </div>
  </section>
`
