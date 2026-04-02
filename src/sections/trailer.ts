import links from '../../content/links.json'

export default () => `
  <section id="trailer">
    <div class="container">
      <div class="section-heading">
        <h2>Official Trailer</h2>
      </div>
      <div class="trailer-wrapper">
        <iframe
          src="https://www.youtube.com/embed/${links.videos.trailer.embedId}"
          title="FWAMP Official Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
`
