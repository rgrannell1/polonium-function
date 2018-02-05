
const logger = { }

logger.info = object => {
  object.timestamp = Date.now()
  console.log(JSON.stringify(object))
}

logger.error = object => {
  object.timestamp = Date.now()
  console.log(JSON.stringify(object))
}

logger.debug = object => {
  object.timestamp = Date.now()
  console.debug(JSON.stringify(object))
}

module.exports = logger
