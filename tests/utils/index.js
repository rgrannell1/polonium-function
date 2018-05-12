
const chalk = require('chalk')
const util = require('util')

/**
 * Log to the console
 *
 * @param  {String} colour      The color of the log
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 * @return {[type]}             [description]
 */
const log = (colour, message, data = '', opts) => {
  let printed = chalk[colour](message) + ' ' + util.inspect(data, {colors: true})

  if (opts && opts.spaceAfter) {
    printed += '\n'
  }
  if (opts && opts.spaceBefore) {
    printed = '\n' + printed
  }

  if (opts && opts.indent) {
    printed = printed.split('\n').map(part => {
      return `  ${part}`
    }).join('\n')
  }

  console.log(printed)
}

/**
 * Log information to the console
 *
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 * @return {[type]}             [description]
 */
log.info = log.bind(null, 'white')

/**
 * Log a success to the console
 *
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 * @return {[type]}             [description]
 */
log.success = log.bind(null, 'green')

/**
 * Log a failure to the console
 *
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 * @return {[type]}             [description]
 */
log.failure = log.bind(null, 'red')

const puppeteer = {}

puppeteer.getValue = async (page, selector) => {
  return page.evaluate(x => x.value, await page.$(selector))
}

/**
 * Display cached & uncached URL's
 *
 * @param  {[type]} page [description]
 * @return {[type]}      [description]
 */
puppeteer.displayCachedLinks = async page => {
  await page.evaluate('navigator.serviceWorker.ready')
  const requests = new Map()

  page.on('request', req => {
    requests.set(req.url, req)
  })

  console.assert(await page.evaluate('navigator.serviceWorker.controller'), 'page has active service worker')

  await page.reload({waitUntil: 'networkidle0'})

  Array.from(requests.values()).forEach(req => {
    const isSWRequest = req.response().fromServiceWorker()
    const message = isSWRequest ? chalk.green('url cached ✓') : chalk.red('url reloaded ✗')
    const displayUrl = req.url().slice(0, 70)

    log.info(`- ${message}`, {url: displayUrl}, {indent: 8})
  })
}

module.exports = {
  log,
  puppeteer
}
