import copy from '../../content/copy.json'

const SHOW_START = 17
const SHOW_END = 29

function buildCalendar(): string {
  const firstDay = new Date(2026, 7, 1) // August 2026
  const daysInMonth = 31

  // Convert to Mon-first index (Mon=0 … Sun=6)
  const startOffset = (firstDay.getDay() + 6) % 7

  const dayHeaders = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    .map(d => `<span class="cal-head">${d}</span>`)
    .join('')

  const empties = Array(startOffset)
    .fill('<span class="cal-day cal-empty"></span>')
    .join('')

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const d = i + 1
    const isShow = d >= SHOW_START && d <= SHOW_END
    const dateStr = `2026-08-${String(d).padStart(2, '0')}`
    if (isShow) {
      return `<button class="cal-day cal-show" data-date="${dateStr}" aria-label="August ${d}">${d}</button>`
    }
    return `<span class="cal-day cal-inactive">${d}</span>`
  }).join('')

  return `
    <div class="cal">
      <div class="cal-title">August 2026</div>
      <div class="cal-grid">
        ${dayHeaders}
        ${empties}
        ${days}
      </div>
    </div>
  `
}

export default () => `
  <section id="venue">
    <div class="container">
      <div class="section-heading">
        <h2>Venue &amp; Tickets</h2>
      </div>
      <div class="venue-layout">
        <div class="venue-card">
          <h3 class="venue-name">${copy.show.venue}</h3>
          <p class="venue-address">${copy.show.venueAddress}</p>
          <div class="venue-pills">
            <span class="venue-pill">${copy.show.duration}</span>
            <span class="venue-pill">${copy.show.ageRestriction}</span>
            <span class="venue-pill">${copy.show.ticketPrice}</span>
          </div>
          <div class="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.0!2d-3.1883!3d55.9505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDU3JzAxLjgiTiAzwrAxMScxNy45Ilc!5e0!3m2!1sen!2suk!4v1"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="venue-buttons">
            <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Get Tickets</a>
            <a class="btn btn-outline" href="https://www.google.com/maps/search/The+Space+on+the+Mile+Edinburgh" target="_blank" rel="noopener">Get Directions</a>
          </div>
        </div>
        <div class="venue-card">
          <h3 class="venue-card-heading">Plan Your Visit</h3>
          <p class="venue-plan-label">Pick a show date to find nearby hotels for 2 nights.</p>
          ${buildCalendar()}
          <div class="venue-plan-buttons" id="venue-plan-buttons" hidden>
            <p class="venue-hotels-label">Book a hotel for your visit</p>
            <div class="venue-hotel-btns">
              <a class="venue-hotel-btn" id="btn-booking" href="#" target="_blank" rel="noopener">Booking.com</a>
              <a class="venue-hotel-btn" id="btn-airbnb" href="#" target="_blank" rel="noopener">Airbnb</a>
              <a class="venue-hotel-btn" id="btn-hostelworld" href="#" target="_blank" rel="noopener">Hostelworld</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

export function initVenue() {
  const buttonsEl = document.getElementById('venue-plan-buttons') as HTMLElement
  const btnBooking = document.getElementById('btn-booking') as HTMLAnchorElement
  const btnAirbnb = document.getElementById('btn-airbnb') as HTMLAnchorElement
  const btnHostelworld = document.getElementById('btn-hostelworld') as HTMLAnchorElement

  if (!buttonsEl) return


  document.querySelectorAll<HTMLButtonElement>('.cal-show').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cal-show').forEach(b => b.classList.remove('cal-selected'))
      btn.classList.add('cal-selected')

      const val = btn.dataset.date!
      const [year, month, day] = val.split('-').map(Number)
      const fmt = (y: number, m: number, d: number) =>
        `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`

      const checkin = fmt(year, month, day - 1)
      const checkout = fmt(year, month, day + 1)

      btnBooking.href = `https://www.booking.com/searchresults.en-gb.html?dest_id=-2595386&dest_type=city&checkin=${checkin}&checkout=${checkout}&group_adults=2&no_rooms=1&group_children=0&lang=en-gb`
      btnAirbnb.href = `https://www.airbnb.co.uk/s/Edinburgh--Scotland/homes?checkin=${checkin}&checkout=${checkout}&adults=2`
      btnHostelworld.href = `https://www.hostelworld.com/pwa/s?q=Edinburgh,%20Scotland&country=Scotland&city=Edinburgh&type=city&id=22&from=${checkin}&to=${checkout}&guests=2&page=1`

      buttonsEl.removeAttribute('hidden')
      buttonsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  })
}
