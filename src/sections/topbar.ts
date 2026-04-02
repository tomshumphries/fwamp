import links from '../../content/links.json'
import copy from '../../content/copy.json'

export default () => `
  <div class="top-bar">
    <div class="top-bar-inner">
      <div class="top-bar-socials">
        ${links.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener" title="${s.platform}">${s.platform}</a>`).join('')}
      </div>
      <div class="top-bar-actions">
        <a href="${links.support.gofundme.url}" target="_blank" rel="noopener" class="top-bar-btn">Donate</a>
        <a href="${links.support.sponsor.url}" target="_blank" rel="noopener" class="top-bar-btn">Sponsor</a>
        <a href="${copy.show.ticketUrl}" target="_blank" rel="noopener" class="top-bar-btn top-bar-tickets">Tickets</a>
      </div>
    </div>
  </div>
`
