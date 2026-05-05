import links from '../../content/links.json'

const cards = links.reviews
  .map(
    (review) => `
    <div class="review-card">
      <div class="source">${review.source}</div>
      ${'stars' in review ? `<div class="stars">${'&#9733;'.repeat(review.stars!)}</div>` : ''}
      <blockquote>"${review.quote}"</blockquote>
      <a class="read-more" href="${review.url}" target="_blank" rel="noopener">Read full review &rarr;</a>
    </div>
  `
  )
  .join('')

export default () => `
  <section id="reviews">
    <div class="container">
      <div class="section-heading">
        <h2>Reviews</h2>
      </div>
      <div class="review-cards">
        ${cards}
      </div>
    </div>
  </section>
`
