
const testSuiteRunner = require('../../../../tests/puppeteer')

module.exports = args => {
  process.env.NODE_ENV = 'system-test'
  return testSuiteRunner(args)
}
