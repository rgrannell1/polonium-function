
const util = require('util')

const logger = { }

const levelLogger = level => object => {
  object.timestamp = Date.now()

  const content = process.env.NODE_ENV === 'development'
    ? util.inspect(object, {depth: null, colors: true})
    : JSON.stringify(object)

  console[level](content)
}

logger.info = levelLogger('info')
logger.error = levelLogger('error')
logger.debug = levelLogger('debug')

module.exports = logger
