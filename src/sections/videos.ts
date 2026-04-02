import links from '../../content/links.json'

const videoClips = links.videos.clips
  .map(
    (clip) => `
    <div class="video-card">
      <h3 class="video-title">${clip.title}</h3>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/${clip.embedId}"
          title="${clip.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `
  )
  .join('')

export default () => `
  <section id="videos">
    <div class="container">
      <div class="section-heading">
        <h2>Videos</h2>
        <p>FWAMP! fan favourites</p>
      </div>
      <div class="video-grid">
        ${videoClips}
      </div>
    </div>
  </section>
`
