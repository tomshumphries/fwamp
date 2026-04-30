const LOCK_MS = 600  // ms cooldown between snaps

export function initScrollSnap() {
  if (window.innerWidth <= 768) return

  const topbarHeight = document.querySelector<HTMLElement>('.top-bar')?.offsetHeight ?? 52
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section, footer'))
  let lockedUntil = 0
  let targetIdx: number | null = null
  let isAnimating = false
  let fallbackTimer: ReturnType<typeof setTimeout> | null = null

  function getCurrentIndex(): number {
    if (targetIdx !== null) return targetIdx
    let idx = 0
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= topbarHeight + 10) idx = i
    }
    return idx
  }

  function onAnimationEnd() {
    if (!isAnimating) return
    isAnimating = false
    targetIdx = null
    lockedUntil = Math.max(lockedUntil, Date.now() + LOCK_MS)
    if (fallbackTimer) { clearTimeout(fallbackTimer); fallbackTimer = null }
  }

  window.addEventListener('scrollend', onAnimationEnd, { passive: true })

  function snapTo(idx: number, scrollingUp: boolean) {
    if (idx < 0 || idx >= sections.length) return
    lockedUntil = Date.now() + LOCK_MS
    targetIdx = idx
    isAnimating = true

    const section = sections[idx]
    const isTall = section.offsetHeight > window.innerHeight + 300

    // Entering a tall section from below — land at its bottom so the user can scroll up through it
    const top = isTall && scrollingUp
      ? section.getBoundingClientRect().top + window.scrollY + section.offsetHeight - window.innerHeight
      : section.getBoundingClientRect().top + window.scrollY - topbarHeight

    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })

    if (fallbackTimer) clearTimeout(fallbackTimer)
    fallbackTimer = setTimeout(onAnimationEnd, 3000)
  }

  window.addEventListener('wheel', (e: WheelEvent) => {
    if (e.deltaY === 0) return

    if (isAnimating) {
      e.preventDefault()
      return
    }

    const idx = getCurrentIndex()
    const isTall = sections[idx].offsetHeight > window.innerHeight + 300

    // Tall sections: let the browser handle scrolling naturally
    if (isTall) return

    // Page-size sections: snap
    e.preventDefault()
    if (Date.now() < lockedUntil) return
    snapTo(idx + (e.deltaY > 0 ? 1 : -1), e.deltaY < 0)
  }, { passive: false })
}
