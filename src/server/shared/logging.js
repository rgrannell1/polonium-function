
const util = require('util')
const configModule = require('../config')

const logger = { }

const levelLogger = level => object => {
  object.timestamp = Date.now()

  const config = configModule()

  if (!config.logging.supress) {
    const content = config.logging.human
      ? util.inspect(object, {depth: null, colors: true})
      : JSON.stringify(object)

    console[level](content)
  }
}

logger.info = levelLogger('info')
logger.error = levelLogger('error')
logger.debug = levelLogger('debug')

module.exports = logger
