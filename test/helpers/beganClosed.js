import PowerSled from '../..'

window.run(resolve => {
  const span = document.createElement('span')
  span.innerHTML = 'Move Me'
  const a = document.createElement('a')
  a.innerHTML = 'Click Me'
  const p = document.createElement('p')
  p.innerHTML = `
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  `
  p.style.height = 0
  document.body.appendChild(span)
  document.body.appendChild(a)
  document.body.appendChild(p)
  const sled = new PowerSled(a, p)
  document.body.addEventListener('click', sled.toggle())
  resolve()
})
