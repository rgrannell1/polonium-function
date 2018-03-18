
module.exports = () => {
  if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV not provided, server cannot start.')
  }

  return require(`./${process.env.NODE_ENV}`)
}
