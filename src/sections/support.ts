import links from '../../content/links.json'

export default () => `
  <section id="support">
    <div class="container">
      <div class="section-heading">
        <h2>Support FWAMP</h2>
        <p>Help bring the show to Edinburgh</p>
      </div>

      <div class="support-event-card">
        <div class="support-event-badge">Live Fundraiser Event</div>
        <div class="support-event-inner">
          <div class="support-event-left">
            <h3 class="support-event-title">FWAMP! Fundraiser Night</h3>
            <p class="support-event-desc">An evening at the theme park — organised by the brilliant <strong>Rat Depot</strong> arts collective in Leeds. Come and celebrate with us before we head to Edinburgh, and help make it happen.</p>
            <ul class="support-event-perks">
              <li>Live performances from the FWAMP! cast</li>
              <li>Local band performance</li>
              <li>Pub quiz hosted by Rat Depot</li>
              <li>Carnival games — 3 free theme park tokens included with every ticket</li>
            </ul>
            <p class="support-event-proceeds">All proceeds go directly to the Edinburgh Fringe production.</p>
          </div>
          <div class="support-event-right">
            <div class="support-event-meta">
              <div class="support-event-meta-item">
                <span class="support-event-meta-label">Date</span>
                <span class="support-event-meta-value">Friday 22 May 2026</span>
              </div>
              <div class="support-event-meta-item">
                <span class="support-event-meta-label">Time</span>
                <span class="support-event-meta-value">6:00 PM</span>
              </div>
              <div class="support-event-meta-item">
                <span class="support-event-meta-label">Venue</span>
                <span class="support-event-meta-value">Archive, Leeds<br><small>94 Kirkstall Rd, LS3 1HD</small></span>
              </div>
              <div class="support-event-meta-item">
                <span class="support-event-meta-label">Tickets</span>
                <span class="support-event-meta-value support-event-price">£6.00</span>
              </div>
            </div>
            <a class="btn support-event-btn" href="${links.support.ratdepot.url}" target="_blank" rel="noopener">
              Get Tickets
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <p class="support-event-org">Tickets via Rat Depot</p>
          </div>
        </div>
      </div>

      <div class="support-secondary-heading">
        <p>Other ways to help</p>
      </div>
      <div class="support-cards">
        <div class="support-card">
          <h3>Donate</h3>
          <p>Every contribution helps us get to the Fringe</p>
          <a class="btn btn-primary" href="${links.support.gofundme.url}" target="_blank" rel="noopener">GoFundMe</a>
        </div>
        <div class="support-card">
          <h3>Become a Sponsor</h3>
          <p>Partner with us and get your brand in front of Fringe audiences</p>
          <a class="btn btn-primary" href="${links.support.sponsor.url}" target="_blank" rel="noopener">Sponsor Form</a>
        </div>
      </div>
    </div>
  </section>
`
