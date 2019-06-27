import { test } from '@ianwalter/bff-puppeteer'
import PowerSled from '.'

function addTestElement (beginClosed = false) {
  const span = document.createElement('span')
  span.innerHTML = 'Move Me'
  const a = document.createElement('a')
  a.innerHTML = 'Click Me'
  const p = document.createElement('p')
  p.innerHTML = `
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  `
  if (beginClosed) {
    p.style.height = 0
  }
  document.body.appendChild(span)
  document.body.appendChild(a)
  document.body.appendChild(p)
  const sled = new PowerSled(a, p)
  document.body.addEventListener('click', sled.toggle())
  return a
}

test('toggle', async ({ expect }) => {
  const el = addTestElement(true)
  el.click()
  expect(document.querySelector('p').getBoundingClientRect().height).toBe(36)
})

test('close on clicking target again', async ({ expect }) => {
  const el = addTestElement(true)
  el.click()
  el.click()
  expect(document.querySelector('p').getBoundingClientRect().height).toBe(0)
})

test('close on clicking other body element', async ({ expect }) => {
  const el = addTestElement(true)
  el.click()
  document.querySelector('span').click()
  expect(document.querySelector('p').getBoundingClientRect().height).toBe(0)
})

test('began open', async ({ expect }) => {
  addTestElement()
  expect(document.querySelector('p').getBoundingClientRect().height).toBe(36)
})

test('target click close when menu began open', async ({ expect }) => {
  const el = addTestElement()
  el.click()
  expect(document.querySelector('p').getBoundingClientRect().height).toBe(0)
})

test('body click close when menu began open', async ({ expect }) => {
  addTestElement()
  document.querySelector('span').click()
  expect(document.querySelector('p').getBoundingClientRect().height).toBe(0)
})
