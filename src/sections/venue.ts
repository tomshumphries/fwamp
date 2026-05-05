import copy from '../../content/copy.json'
import links from '../../content/links.json'

function buildCalendar(): string {
  const dayHeaders = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    .map(d => `<span class="cal-head">${d}</span>`)
    .join('')

  // Aug 17 (Mon) → Aug 30 (Sun): 2 clean rows, Aug 30 included for hotel checkout
  const days: string[] = []
  for (let d = 17; d <= 30; d++) {
    const dateStr = `2026-08-${String(d).padStart(2, '0')}`
    days.push(`<button class="cal-day cal-show" data-date="${dateStr}" aria-label="August ${d}">${d}</button>`)
  }

  return `
    <div class="cal">
      <div class="cal-title">August 2026</div>
      <div class="cal-grid">
        ${dayHeaders}
        ${days.join('')}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8!2d-3.1867538!3d55.9500241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7858dfade59%3A0xe5fb7645a69f913a!2stheSpace%20on%20the%20Mile!5e0!3m2!1sen!2suk!4v1746449000000!5m2!1sen!2suk"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="venue-buttons">
            <a class="btn btn-primary" href="${copy.show.ticketUrl}" target="_blank" rel="noopener">Get Tickets</a>
            <a class="btn btn-outline" href="${links.venue.getDirections}" target="_blank" rel="noopener">Get Directions</a>
          </div>
        </div>

        <div class="venue-card">
          <h3 class="venue-card-heading">Plan Your Visit</h3>
          <div class="planner-steps">
            <span class="planner-dot active"></span>
            <span class="planner-dot"></span>
            <span class="planner-dot"></span>
          </div>

          <div class="planner-step active" id="planner-step-1">
            <p class="planner-prompt">Select your dates</p>
            <p class="planner-hint" id="planner-hint">Tap your arrival date</p>
            ${buildCalendar()}
          </div>

          <div class="planner-step" id="planner-step-2">
            <p class="planner-prompt">How many people?</p>
            <div class="planner-people">
              ${[1, 2, 3, 4].map(n => `<button class="planner-person" data-count="${n}">${n}</button>`).join('')}
              <button class="planner-person planner-person-more" id="planner-person-more">5+</button>
            </div>
            <div class="planner-stepper" id="planner-stepper" hidden>
              <div class="planner-stepper-row">
                <button class="planner-stepper-btn" id="planner-stepper-dec">&minus;</button>
                <span class="planner-stepper-val" id="planner-stepper-val">5</span>
                <button class="planner-stepper-btn" id="planner-stepper-inc">+</button>
              </div>
              <button class="planner-stepper-confirm" id="planner-stepper-confirm">Confirm &rarr;</button>
            </div>
            <button class="planner-back" id="planner-back-1">&larr; Back</button>
          </div>

          <div class="planner-step" id="planner-step-3">
            <p class="planner-prompt">Book your trip</p>
            <p class="planner-summary" id="planner-summary"></p>
            <div class="planner-book-cards">
              <a class="planner-book-card" id="book-booking" href="#" target="_blank" rel="noopener">
                <span class="book-name">Booking.com</span>
                <span class="book-desc">Hotels &amp; apartments</span>
                <span class="book-cta">Search &rarr;</span>
              </a>
              <a class="planner-book-card" id="book-airbnb" href="#" target="_blank" rel="noopener">
                <span class="book-name">Airbnb</span>
                <span class="book-desc">Homes &amp; private rooms</span>
                <span class="book-cta">Search &rarr;</span>
              </a>
              <a class="planner-book-card" id="book-hostelworld" href="#" target="_blank" rel="noopener">
                <span class="book-name">Hostelworld</span>
                <span class="book-desc">Hostels &amp; budget stays</span>
                <span class="book-cta">Search &rarr;</span>
              </a>
            </div>
            <button class="planner-back" id="planner-back-2">&larr; Back</button>
          </div>
        </div>
      </div>
    </div>
  </section>
`

export function initVenue() {
  let arrival: string | null = null
  let departure: string | null = null
  let stepperCount = 5

  const steps = [1, 2, 3].map(n => document.getElementById(`planner-step-${n}`)!)
  const dots = document.querySelectorAll<HTMLElement>('.planner-dot')
  const hint = document.getElementById('planner-hint')!
  const stepperEl = document.getElementById('planner-stepper')!
  const stepperValEl = document.getElementById('planner-stepper-val')!
  const stepperDecEl = document.getElementById('planner-stepper-dec') as HTMLButtonElement
  const stepperIncEl = document.getElementById('planner-stepper-inc') as HTMLButtonElement

  function goTo(n: number) {
    steps.forEach((el, i) => el.classList.toggle('active', i + 1 === n))
    dots.forEach((dot, i) => dot.classList.toggle('active', i + 1 === n))
  }

  function dayLabel(dateStr: string): string {
    return `${parseInt(dateStr.split('-')[2])} Aug`
  }

  function updateCal() {
    document.querySelectorAll<HTMLButtonElement>('.cal-show').forEach(btn => {
      const d = btn.dataset.date!
      btn.classList.remove('cal-arrival', 'cal-departure', 'cal-in-range', 'cal-unavailable')
      if (d === arrival) {
        btn.classList.add('cal-arrival')
      } else if (d === departure) {
        btn.classList.add('cal-departure')
      } else if (arrival && departure && d > arrival && d < departure) {
        btn.classList.add('cal-in-range')
      } else if (arrival && !departure && d < arrival) {
        btn.classList.add('cal-unavailable')
      }
    })
  }

  function applyPeople(people: number) {
    const checkin = arrival!
    const checkout = departure!
    const nights = Math.round(
      (new Date(checkout).getTime() - new Date(checkin).getTime()) / 86400000
    )

    ;(document.getElementById('book-booking') as HTMLAnchorElement).href =
      `https://www.booking.com/searchresults.en-gb.html?dest_id=-2595386&dest_type=city&checkin=${checkin}&checkout=${checkout}&group_adults=${people}&no_rooms=1&group_children=0&lang=en-gb`
    ;(document.getElementById('book-airbnb') as HTMLAnchorElement).href =
      `https://www.airbnb.co.uk/s/Edinburgh--Scotland/homes?checkin=${checkin}&checkout=${checkout}&adults=${people}`
    ;(document.getElementById('book-hostelworld') as HTMLAnchorElement).href =
      `https://www.hostelworld.com/pwa/s?q=Edinburgh,%20Scotland&country=Scotland&city=Edinburgh&type=city&id=22&from=${checkin}&to=${checkout}&guests=${people}&page=1`

    const summaryEl = document.getElementById('planner-summary')!
    summaryEl.textContent = `${dayLabel(checkin)} – ${dayLabel(checkout)} · ${nights} night${nights === 1 ? '' : 's'} · ${people} ${people === 1 ? 'person' : 'people'}`

    setTimeout(() => goTo(3), 450)
  }

  // Step 1 — calendar
  document.querySelectorAll<HTMLButtonElement>('.cal-show').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = btn.dataset.date!
      if (!arrival) {
        arrival = d
        hint.textContent = 'Now tap your departure date'
        updateCal()
      } else if (!departure) {
        if (d <= arrival) {
          arrival = d
          hint.textContent = 'Now tap your departure date'
          updateCal()
          return
        }
        departure = d
        updateCal()
        setTimeout(() => goTo(2), 650)
      } else {
        arrival = d
        departure = null
        hint.textContent = 'Now tap your departure date'
        updateCal()
      }
    })
  })

  // Step 2 — 1–4 instant circles
  document.querySelectorAll<HTMLButtonElement>('.planner-person:not(#planner-person-more)').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.planner-person').forEach(b => b.classList.remove('active'))
      stepperEl.setAttribute('hidden', '')
      btn.classList.add('active')
      applyPeople(parseInt(btn.dataset.count!))
    })
  })

  // Step 2 — 5+ circle opens stepper
  function refreshStepper() {
    stepperValEl.textContent = String(stepperCount)
    stepperDecEl.disabled = stepperCount <= 5
  }

  document.getElementById('planner-person-more')?.addEventListener('click', () => {
    document.querySelectorAll('.planner-person').forEach(b => b.classList.remove('active'))
    document.getElementById('planner-person-more')!.classList.add('active')
    stepperCount = 5
    refreshStepper()
    stepperEl.removeAttribute('hidden')
  })

  stepperDecEl.addEventListener('click', () => {
    if (stepperCount > 5) { stepperCount--; refreshStepper() }
  })

  stepperIncEl.addEventListener('click', () => {
    stepperCount++
    refreshStepper()
  })

  document.getElementById('planner-stepper-confirm')?.addEventListener('click', () => {
    applyPeople(stepperCount)
  })

  // Back buttons
  document.getElementById('planner-back-1')?.addEventListener('click', () => goTo(1))
  document.getElementById('planner-back-2')?.addEventListener('click', () => goTo(2))
}
