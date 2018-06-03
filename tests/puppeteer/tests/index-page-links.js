
const {log} = require('../../../src/shared')
const constants = require('../constants')

/**
 * Check whether the page loads correctly, based on IP's present.
 *
 * @param  {Page} page a puppeteer page.
 * @return {Promise} a result promise.
 */
const indexPageLinks = async page => {
  const brandLink = await page.$('[data-test-id="brand_link"]', {visible: true})
}

indexPageLinks.description = 'Page links work correctly.'

module.exports = indexPageLinks
