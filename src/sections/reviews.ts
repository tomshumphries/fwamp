import links from '../../content/links.json'

export default () => `
  <section id="reviews">
    <div class="container">
      <div class="section-heading">
        <h2>Reviews</h2>
      </div>
      <div class="review-cards">
        <div class="review-card">
          <div class="source">${links.reviews[0].source}</div>
          <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote>"This show is sweet as candy and equally funny — a rollicking, raucous, random, rollercoaster of a musical. You won't regret it and you'll certainly give it a clap!"</blockquote>
          <a class="read-more" href="${links.reviews[0].url}" target="_blank" rel="noopener">Read full review &rarr;</a>
        </div>
        <div class="review-card">
          <div class="source">${links.reviews[1].source}</div>
          <blockquote>"A crazy adventure you wouldn't want to miss! Crude humour and an intriguing storyline — the uniqueness of FWAMP is something I would recommend to anyone."</blockquote>
          <a class="read-more" href="${links.reviews[1].url}" target="_blank" rel="noopener">Read full review &rarr;</a>
        </div>
      </div>
    </div>
  </section>
`
