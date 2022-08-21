const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.menu-item')

const cb = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      links.forEach(link => link.classList.remove('active'))

      const activeId = entry.target.id
      const activeLink = document.querySelector(`.menu-item[href="#${activeId}"]`)

      if (activeLink) {
        activeLink.classList.add('active')
      }
    }
  })
}

const sectionObserver = new IntersectionObserver(cb, {
  threshold: [0.2, 0.5, 0.8]
})

sections.forEach(sec => {
  sectionObserver.observe(sec)
})
