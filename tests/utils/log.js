
const chalk = require('chalk')
const util = require('util')

/**
 * Log to the console
 *
 * @param  {String} colour      The color of the log
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 *
 * @return {undefined}
 */
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

/**
 * Log information to the console
 *
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 *
 * @return {undefined}
 */
log.info = log.bind(null, 'white')

/**
 * Log a success to the console
 *
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 *
 * @return {undefined}
 */
log.success = log.bind(null, 'green')

/**
 * Log a failure to the console
 *
 * @param  {String} message     Human-readable message
 * @param  {String|Object} data Data to log
 * @param  {Object} opts        Logging options
 *
 * @return {undefined}
 */
log.failure = log.bind(null, 'red')

module.exports = log
