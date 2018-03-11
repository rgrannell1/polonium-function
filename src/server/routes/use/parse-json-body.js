
const bodyParser = require('body-parser')

module.exports = (...args) => {
  return bodyParser.json()(...args)
}
