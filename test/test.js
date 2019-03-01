import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper([
  './node_modules/@ianwalter/sled/dist/sled.iife.js',
  './dist/power-sled.iife.js'
])

test('toggle', withPage, async (t, page) => {
  await page.evaluate(() => {
    const a = document.createElement('a')
    a.innerHTML = 'Click Me'
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.height = 0
    document.body.appendChild(a)
    document.body.appendChild(p)
    const sled = new PowerSled(a, p)
    document.body.addEventListener('click', sled.toggle())
  })

  await page.click('a')

  const height = await page.evaluate(() => {
    return document.querySelector('p').getBoundingClientRect().height
  })

  t.is(height, 35)
})

test('close on clicking target again', withPage, async (t, page) => {
  await page.evaluate(() => {
    const a = document.createElement('a')
    a.innerHTML = 'Click Me'
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.height = 0
    document.body.appendChild(a)
    document.body.appendChild(p)
    const sled = new PowerSled(a, p)
    document.body.addEventListener('click', sled.toggle())
  })

  await page.click('a')
  await page.click('a')

  const height = await page.evaluate(() => {
    return document.querySelector('p').getBoundingClientRect().height
  })

  t.is(height, 0)
})

test('close on clicking other body element', withPage, async (t, page) => {
  await page.evaluate(() => {
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
  })

  await page.click('span')

  const height = await page.evaluate(() => {
    return document.querySelector('p').getBoundingClientRect().height
  })

  t.is(height, 0)
})

test('target click close when menu began open', withPage, async (t, page) => {
  await page.evaluate(() => {
    const span = document.createElement('span')
    span.innerHTML = 'Move Me'
    const a = document.createElement('a')
    a.innerHTML = 'Click Me'
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    document.body.appendChild(span)
    document.body.appendChild(a)
    document.body.appendChild(p)
    const sled = new PowerSled(a, p)
    document.body.addEventListener('click', sled.toggle())
  })

  await page.click('a')

  const height = await page.evaluate(() => {
    return document.querySelector('p').getBoundingClientRect().height
  })

  t.is(height, 0)
})

test('body click close when menu began open', withPage, async (t, page) => {
  await page.evaluate(() => {
    const span = document.createElement('span')
    span.innerHTML = 'Move Me'
    const a = document.createElement('a')
    a.innerHTML = 'Click Me'
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    document.body.appendChild(span)
    document.body.appendChild(a)
    document.body.appendChild(p)
    const sled = new PowerSled(a, p)
    document.body.addEventListener('click', sled.toggle())
  })

  await page.click('span')

  const height = await page.evaluate(() => {
    return document.querySelector('p').getBoundingClientRect().height
  })

  t.is(height, 0)
})
