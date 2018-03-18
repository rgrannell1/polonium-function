
const puppeteer = require('puppeteer')
const app = require('../../index-export.js')

const constants = {
  port: 3000,
  loadTime: 10 * 1000,
  steps: {
    indexPageLoaded: {
      expectedIds: ['password_input', 'website_input']
    }
  }
}

const tests = {}

tests.indexPageLoaded = async page => {
  const ids = constants.steps.indexPageLoaded.expectedIds.map(id => {
    return {
      id,
      elem: page.$(`[data-test-id="${id}"]`)
    }
  })

  return await Promise.all(ids)
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
      resolve(server)
    })
  })
}

const runner = async tester => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()

  const server = await startServer()
  await page.goto(`http://localhost:${constants.port}/http/`, {
    timeout: constants.loadTime
  })
  await tester(page)
//  server.close()

//  await page.close()
  // await browser.close()
  // process.exit(0)
}

runner(tests.indexPageLoaded)
