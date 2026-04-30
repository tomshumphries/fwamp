const LOCK_MS = 100  // post-animation cooldown to absorb trackpad momentum

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

  function snapTo(idx: number) {
    if (idx < 0 || idx >= sections.length) return
    lockedUntil = Date.now() + LOCK_MS
    targetIdx = idx
    isAnimating = true

    const top = sections[idx].getBoundingClientRect().top + window.scrollY - topbarHeight
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })

    if (fallbackTimer) clearTimeout(fallbackTimer)
    fallbackTimer = setTimeout(onAnimationEnd, 3000)
  }

  window.addEventListener('wheel', (e: WheelEvent) => {
    if (e.deltaY === 0) return
    e.preventDefault()
    if (isAnimating || Date.now() < lockedUntil) return
    snapTo(getCurrentIndex() + (e.deltaY > 0 ? 1 : -1))
  }, { passive: false })

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (isAnimating || Date.now() < lockedUntil) return
    const idx = getCurrentIndex()
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault()
      snapTo(idx + 1)
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      snapTo(idx - 1)
    }
  })
}
