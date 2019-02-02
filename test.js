import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper([
  './node_modules/@ianwalter/sled/dist/sled.iife.js',
  './dist/power-sled.iife.js'
])

test('drop down', withPage, async (t, page) => {
  const height = await page.evaluate(() => {
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.height = 0
    document.body.appendChild(p)
    const sled = new Sled(p)
    sled.slide('100px')
    return p.getBoundingClientRect().height
  })
  t.is(height, 100)
})
