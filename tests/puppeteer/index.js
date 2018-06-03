
const chalk = require('chalk')
const {log} = require('../../src/shared')
const puppeteer = require('puppeteer')
const app = require('../../index-export.js')
const constants = require('./constants')
const tests = require('./tests')

/**
 * Start the polonium server, in a promise wrapper.
 *
 * @return {Promise} a promise resolving with a server.
 */
const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(constants.port, () => {
      log.success(`server started on port ${constants.port}`, {}, {indent: 2})
      resolve(server)
    })
  })
}

/**
 * Run an individual test with a setup browser instance.
 *
 * @param  {function} test a puppeteer page.
 * @return {undefined}
 */
const testRunner = async test => {
  const browser = await puppeteer.launch({
    headless: false,
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

  try {
    await test(page)
  } catch (err) {
    throw err
  } finally {
    server.close()
  }
}

/**
 * Run every browser-based test in an isolated fashion.
 *
 * @return {undefined}
 */
const testSuiteRunner = async () => {
  for (let testName of Object.keys(tests)) {
    let test = tests[testName]

    log.info(`${chalk.white('☐')} Running Test "${testName}" (${chalk.blue(test.description)})`, {}, {spaceAfter: 1})
    try {
      await testRunner(test)
    } catch (err) {
      log.failure(`${chalk.red('☒ FAILED')} test "${testName}" (${chalk.blue(test.description)})`, {err}, {spaceAfter: 1})
      process.exit(1)
    }
    log.info(`${chalk.green('☑ PASSED')} Test "${testName}" (${chalk.blue(test.description)})`, {}, {spaceAfter: 1, spaceBefore: 1})
  }
  process.exit(0)
}

module.exports = testSuiteRunner
