export function initScrollSnap() {
  if (window.innerWidth <= 768) return

  const topbarHeight = document.querySelector<HTMLElement>('.top-bar')?.offsetHeight ?? 52
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section, footer'))

  function getCurrentIndex(): number {
    let idx = 0
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= topbarHeight + 10) idx = i
    }
    return idx
  }

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    const idx = getCurrentIndex()
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault()
      sections[Math.min(idx + 1, sections.length - 1)]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      sections[Math.max(idx - 1, 0)]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
