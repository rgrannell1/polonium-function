
const logger = { }

const levelLogger = level => object => {
  object.timestamp = Date.now()

  const content = process.env.NODE_ENV === 'development'
    ? JSON.stringify(object, null, 2)
    : JSON.stringify(object)

  console[level](content)
}

logger.info = levelLogger('info')
logger.error = levelLogger('error')
logger.debug = levelLogger('debug')

module.exports = logger
