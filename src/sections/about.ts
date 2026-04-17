import copy from '../../content/copy.json'

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
    </div>
  </section>
`
