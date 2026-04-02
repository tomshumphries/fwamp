import links from '../../content/links.json'

const socialLinks = links.socials
  .map(
    (s) =>
      `<a class="social-link" href="${s.url}" target="_blank" rel="noopener">${s.platform}</a>`
  )
  .join('')

export default () => `
  <footer>
    <div class="container">
      <div class="social-links">
        ${socialLinks}
      </div>
      <p>&copy; 2025 Fantasy World Adventures Mega Park. All rights reserved.</p>
    </div>
  </footer>
`
