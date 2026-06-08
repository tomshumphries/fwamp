import copy from '../../content/copy.json'

const photoModules = import.meta.glob('../assets/images/team/*.jpeg', { eager: true, import: 'default' }) as Record<string, string>

function photo(key: string): string {
  return photoModules[`../assets/images/team/${key}.jpeg`] ?? ''
}

function memberCard(member: typeof copy.team[0]): string {
  return `
    <div class="team-card">
      <div class="team-photos">
        <div class="polaroid polaroid-back">
          <img src="${photo(member.photo2)}" alt="${member.name}, ${member.role} FWAMP! The Musical" loading="lazy" />
        </div>
        <div class="polaroid polaroid-front">
          <img src="${photo(member.photo1)}" alt="${member.name}, ${member.role} FWAMP! The Musical" loading="lazy" />
        </div>
      </div>
      <div class="team-info">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <p class="team-bio">${member.bio}</p>
      </div>
    </div>
  `
}

export function initTeam() {
  document.querySelectorAll<HTMLElement>('.team-photos').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('swapped'))
  })
}

export default () => `
  <section id="team">
    <div class="container">
      <div class="section-heading">
        <h2>Meet the Production Team</h2>
      </div>
      <div class="team-grid">
        ${copy.team.map(memberCard).join('')}
      </div>
    </div>
  </section>
`
