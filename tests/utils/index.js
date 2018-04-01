
const chalk = require('chalk')
const util = require('util')

const log = (colour, message, data) => {
  const printed = chalk[colour](message) + ' ' + util.inspect(data, {colors: true})
  console.log(printed)
}

log.info = log.bind(null, 'white')
log.success = log.bind(null, 'green')
log.failure = log.bind(null, 'red')

module.exports = {
  log
}
