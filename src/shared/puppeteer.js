
const log = require('./log')
const chalk = require('chalk')

const puppeteer = {}

puppeteer.getValue = async (page, selector) => {
  return page.evaluate(x => x.value, await page.$(selector))
}

/**
 * Display cached & uncached URL's
 *
 * @param  {Object} page [description]
 *
 * @return {undefined}
 */
puppeteer.displayCachedLinks = async page => {
  await page.evaluate('navigator.serviceWorker.ready')
  const requests = new Map()

  page.on('request', req => {
    requests.set(req.url, req)
  })

  return
  console.assert(await page.evaluate('navigator.serviceWorker.controller'), 'page has active service worker')

  await page.reload({waitUntil: 'networkidle0'})

  Array.from(requests.values()).forEach(req => {
    const isSWRequest = req.response().fromServiceWorker()
    const message = isSWRequest ? chalk.green('url cached ✓') : chalk.red('url reloaded ✗')
    const displayUrl = req.url().slice(0, 70)

    log.info(`- ${message}`, {url: displayUrl}, {indent: 8})
  })
}

module.exports = puppeteer
