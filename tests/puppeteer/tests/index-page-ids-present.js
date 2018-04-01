
const {log} = require('../../utils')

const constants = {
  steps: {
    indexPageLoaded: {
      expectedIds: ['password_input', 'website_input']
    }
  }
}

/**
 * Check whether the page loads correctly, based on IP's present.
 *
 * @param  {Page} page a puppeteer page.
 * @return {Promise} a result promise.
 */
const indexPageIdsPresent = async page => {
  const ids = constants.steps.indexPageLoaded.expectedIds.map(id => {
    return {
      id,
      elem: page.$(`[data-test-id="${id}"]`)
    }
  })

  return Promise.all(ids)
    .then(elems => {
      const asserted = elems.map(({id, elem}) => {
        const elemMissing = elem === null

        if (elemMissing) {
          log.failure(`id missing`, {id}, {indent: 2})
        } else {
          log.success(`id present`, {id}, {indent: 2})
        }

        return elemMissing
          ? Promise.reject(new Error(`"${id}" not present.`))
          : Promise.resolve()
      })
      return Promise.all(asserted)
    })
}

indexPageIdsPresent.description = 'Check whether essential data attributes are present on the index page.'

module.exports = indexPageIdsPresent
