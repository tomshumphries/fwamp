// Curated 9 for the preview grid
import photo1 from '../assets/images/photos/_MG_3014.JPG'
import photo2 from '../assets/images/photos/_MG_3075.JPG'
import photo3 from '../assets/images/photos/_MG_3180.JPG'
import photo4 from '../assets/images/photos/_MG_3412.JPG'
import photo5 from '../assets/images/photos/_MG_3377.JPG'
import photo6 from '../assets/images/photos/_MG_3508.JPG'
import photo7 from '../assets/images/photos/_MG_3645.JPG'
import photo8 from '../assets/images/photos/_MG_3860.JPG'
import photo9 from '../assets/images/photos/_MG_3881.JPG'

const previewPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]

// All 60 photos via glob import
const allPhotoModules = import.meta.glob('../assets/images/photos/*.JPG', { eager: true, import: 'default' }) as Record<string, string>
const allPhotos = Object.values(allPhotoModules)

const previewItems = previewPhotos
  .map((src) => `<div class="gallery-item"><img src="${src}" alt="FWAMP show photo" loading="lazy" /></div>`)
  .join('')

const allItems = allPhotos
  .map((src, i) => `<div class="lightbox-item"><img src="${src}" alt="FWAMP show photo ${i + 1}" loading="lazy" /></div>`)
  .join('')

export default () => `
  <section id="gallery">
    <div class="container">
      <div class="section-heading">
        <h2>Gallery</h2>
        <p>Photography by Ella Fairley</p>
      </div>
      <div class="gallery-grid">
        ${previewItems}
      </div>
      <div class="gallery-more">
        <button class="btn btn-outline" id="gallery-view-all">View All Photos</button>
      </div>
    </div>
  </section>

  <div class="lightbox" id="lightbox">
    <div class="lightbox-header">
      <span class="lightbox-title">All Photos (${allPhotos.length})</span>
      <button class="lightbox-close" id="lightbox-close">&times;</button>
    </div>
    <div class="lightbox-grid">
      ${allItems}
    </div>
  </div>
`

export function initGallery() {
  const viewAllBtn = document.getElementById('gallery-view-all')
  const lightbox = document.getElementById('lightbox')
  const closeBtn = document.getElementById('lightbox-close')

  viewAllBtn?.addEventListener('click', () => {
    lightbox?.classList.add('open')
    document.body.style.overflow = 'hidden'
  })

  closeBtn?.addEventListener('click', () => {
    lightbox?.classList.remove('open')
    document.body.style.overflow = ''
  })

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open')
      document.body.style.overflow = ''
    }
  })
}
