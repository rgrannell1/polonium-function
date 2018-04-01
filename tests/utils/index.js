
const chalk = require('chalk')
const util = require('util')

const log = (colour, message, data = '', opts) => {
  let printed = chalk[colour](message) + ' ' + util.inspect(data, {colors: true})

  if (opts && opts.spaceAfter) {
    printed += '\n'
  }
  if (opts && opts.spaceBefore) {
    printed = '\n' + printed
  }

  if (opts && opts.indent) {
    printed = printed.split('\n').map(part => {
      return `  ${part}`
    }).join('\n')
  }

  console.log(printed)
}

log.info = log.bind(null, 'white')
log.success = log.bind(null, 'green')
log.failure = log.bind(null, 'red')

module.exports = {
  log
}
