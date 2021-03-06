
const {log} = require('../../../src/shared')
const constants = require('../constants')

/**
 * Check whether the page loads correctly, based on IP's present.
 *
 * @param  {Page} page a puppeteer page.
 * @return {Promise} a result promise.
 */
const indexPageIdsPresent = async page => {
  const ids = constants.steps.indexPageLoaded.expectedIds.map(async id => {
    return {
      id,
      elem: await page.$(`[data-test-id="${id}"]`)
    }
  })

  const elems = await Promise.all(ids)
  const asserted = elems.map(({id, elem}) => {
    const elemMissing = elem === null

    if (elemMissing) {
      log.failure(`data-test-id missing`, {id}, {indent: 2})
    } else {
      log.success(`data-test-id present`, {id}, {indent: 2})
    }

    return elemMissing
      ? Promise.reject(new Error(`"${id}" not present.`))
      : Promise.resolve()
  })
  return Promise.all(asserted)
}

indexPageIdsPresent.description = 'Check whether essential data attributes are present on the index page.'

module.exports = indexPageIdsPresent
