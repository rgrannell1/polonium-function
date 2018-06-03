
const {log, puppeteer} = require('../../../src/shared')

/**
 * Check whether the page returns a valid password.
 *
 * @param  {Page} page a puppeteer page.
 * @return {Promise} a result promise.
 */
const indexPagesPasswordValid = async page => {
  await puppeteer.displayCachedLinks(page)
}

indexPagesPasswordValid.description = 'Check whether correct URLs are cached'

module.exports = indexPagesPasswordValid
