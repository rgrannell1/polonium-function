
const {log} = require('../utils')
const puppeteer = require('puppeteer')
const app = require('../../index-export.js')
const tests = require('./tests')

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

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(constants.port, () => {
      log.success(`server started on port ${constants.port}`, {}, {indent: 2})
      resolve(server)
    })
  })
}

const testRunner = async tester => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()

  log.info('Created browser page', {}, {indent: 2})

  const server = await startServer()
  await page.goto(constants.url, {
    timeout: constants.loadTime
  })

  log.info('Arrived at target URL', {
    url: constants.url,
    timeout: constants.loadTime
  }, {indent: 2})

  await tester(page)

  // server.close()

  // await page.close()
  // await browser.close()
//  process.exit(0)
}

/**
 * Run every browser-based test in an isolated fashion.
 *
 * @return {undefined}
 */
const testSuiteRunner = async () => {
  for (let testName of Object.keys(tests)) {
    let test = tests[testName]

    log.info(`Running Test "${testName}" (${test.description})`, {}, {spaceAfter: 1})
    try {
      await testRunner(test)
    } catch (err) {
      log.failure(`Failed Test "${testName}" (${test.description})`, {err}, {spaceAfter: 1})
      process.exit(1)
    }
    log.info(`Passed Test "${testName}" (${test.description})`, {}, {spaceAfter: 1, spaceBefore: 1})
  }
  process.exit(0)
}

process.env.NODE_ENV = 'system-test'
testSuiteRunner()
