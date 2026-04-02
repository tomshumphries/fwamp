import links from '../../content/links.json'

export default () => `
  <section id="support">
    <div class="container">
      <div class="section-heading">
        <h2>Support FWAMP</h2>
        <p>Help bring the show to Edinburgh</p>
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
