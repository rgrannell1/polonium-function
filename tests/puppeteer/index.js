
const {log} = require('../utils')
const puppeteer = require('puppeteer')
const app = require('../../index-export.js')

const constants = {
  port: 3000,
  url: 'http://localhost:3000/http/',
  loadTime: 10 * 1000,
  steps: {
    indexPageLoaded: {
      expectedIds: ['password_input', 'website_input']
    }
  }
}

const tests = { }

/**
 * Check whether the page loads correctly, based on IP's present.
 *
 * @param  {Page} page a puppeteer page.
 * @return {Promise} a result promise.
 */
tests.indexPageLoaded = async page => {
  const ids = constants.steps.indexPageLoaded.expectedIds.map(id => {
    return {
      id,
      elem: page.$(`[data-test-id="${id}"]`)
    }
  })

  return Promise.all(ids)
    .then(elems => {
      const asserted = elems.map(({id, elem}) => {
        return elem === null
          ? Promise.reject(new Error(`"${id}" not present.`))
          : Promise.resolve()
      })
      return Promise.all(asserted)
    })
}

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(constants.port, () => {
      log.success(`server started on port ${constants.port}`)
      resolve(server)
    })
  })
}

const runner = async tester => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()

  log.info('Created browser page', {})

  process.env.NODE_ENV = 'system-test'
  const server = await startServer()
  await page.goto(constants.url, {
    timeout: constants.loadTime
  })

  log.info('Arrived at target URL', {
    url: constants.url,
    timeout: constants.loadTime
  })

  await tester(page)
  // server.close()

  // await page.close()
  // await browser.close()
  process.exit(0)
}

runner(tests.indexPageLoaded).catch(err => {
  log.failure('an error occurred during testing', {err})
  process.exit(1)
})
