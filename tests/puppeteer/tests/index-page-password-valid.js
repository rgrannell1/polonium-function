
const {log, puppeteer} = require('../../utils')
const constants = require('../constants')

/**
 * Check whether the page returns a valid password.
 *
 * @param  {Page} page a puppeteer page.
 * @return {Promise} a result promise.
 */
const indexPagesPasswordValid = async page => {
  try {
    await page.type('[data-test-id="website_input"]', constants.steps.indexPagePasswordValid.website, {delay: constants.typeDelayMs})
    await page.type('[data-test-id="password_input"]', constants.steps.indexPagePasswordValid.password, {delay: constants.typeDelayMs})
    log.success('input entered successfully', {}, {indent: 2})
  } catch (err) {
    log.failure('input not entered successfully', {}, {indent: 2})
    return Promise.reject(err)
  }

  const copyButtonTimeout = constants.steps.indexPagePasswordValid.copyButtonTimeout

  await page.click('[data-test-id="submit_button"]')
  try {
    await page.waitForSelector('[data-test-id="derived_password_field"]', {
      visible: true,
      timeout: copyButtonTimeout
    })
  } catch (err) {
    log.failure('"copy_password_button" did not become visible', {timeout: copyButtonTimeout}, {indent: 2})
    return Promise.reject(err)
  }
  await page.$('[data-test-id="derived_password_field"]', {
    visible: true,
    timeout: copyButtonTimeout
  })

  const derivedPassword = await puppeteer.getValue(page, '[data-test-id="derived_password_field"]')

  if (derivedPassword !== constants.steps.indexPagePasswordValid.output) {
    return Promise.reject(new Error('incorrect password returned by Polonium'))
  } else {
    log.success('correct password returned by Polonium', {derivedPassword}, {indent: 2})
  }
}

indexPagesPasswordValid.description = 'Check whether a password is returned by Polonium'

module.exports = indexPagesPasswordValid
