
const testSuiteRunner = require('../../../../tests/puppeteer')

process.env.NODE_ENV = 'system-test'

module.exports = args => {
  return testSuiteRunner()
}
