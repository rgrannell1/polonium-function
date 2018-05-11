
/**
 * Constant values used for testing.
 *
 * @type {Object}
 */
const constants = {
  port: 3000,
  url: 'localhost:3000/http/',
  loadTime: 30000,
  typeDelayMs: 25,
  steps: {
    indexPageLoaded: {
      expectedIds: ['password_input', 'website_input', 'submit_button']
    },
    indexPagePasswordValid: {
      website: 'google',
      password: '-6kFq""zJ#qQ4%4A:Q"W4{4`!',
      output: 'MGoJca8NtxgJlJ5byeEw'
    }
  }
}

module.exports = constants
