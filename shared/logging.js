
const logger = { }

logger.info = object => {
  console.log(JSON.stringify(object))
}

logger.error = object => {
  console.log(JSON.stringify(object))
}

logger.debug = object => {
  console.debug(JSON.stringify(object))
}

module.exports = logger
