import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper()

test('toggle', withPage, async (t, page) => {
  await t.evaluate('./test/helpers/beganClosed.js')

  await page.click('a')

  t.is(await t.evaluate('./test/helpers/getHeight.js'), 35)
})

test('close on clicking target again', withPage, async (t, page) => {
  await t.evaluate('./test/helpers/beganClosed.js')

  await page.click('a')
  await page.click('a')

  t.is(await t.evaluate('./test/helpers/getHeight.js'), 0)
})

test('close on clicking other body element', withPage, async (t, page) => {
  await t.evaluate('./test/helpers/beganClosed.js')

  await page.click('a')
  await page.click('span')

  t.is(await t.evaluate('./test/helpers/getHeight.js'), 0)
})

test('target click close when menu began open', withPage, async (t, page) => {
  await t.evaluate('./test/helpers/beganOpen.js')

  await page.click('a')

  t.is(await t.evaluate('./test/helpers/getHeight.js'), 0)
})

test('body click close when menu began open', withPage, async (t, page) => {
  await t.evaluate('./test/helpers/beganOpen.js')

  await page.click('span')

  t.is(await t.evaluate('./test/helpers/getHeight.js'), 0)
})
