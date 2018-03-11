
const {polonium} = require('polonium')
const constants = require('../../shared/constants')
const log = require('../../shared/logging')

const parseArgs = req => {
  const body = req.body

  return {
    password: body.password,
    rounds: constants.fixedParameters.rounds,
    salt: body.salt,
    len: constants.fixedParameters.len,
    digest: constants.fixedParameters.digest
  }
}

const handlers = { }

handlers.success = (req, res, password) => {
  req.ctx.routes.push(handlers.success.name)

  log.info(Object.assign({}, req.ctx, {
    message: 'password retrieval successful'
  }))

  res.status(200).send(password)
}

handlers.failure = (req, res, err) => {
  req.ctx.routes.push(handlers.failure.name)

  log.info(Object.assign({}, req.ctx, {
    message: 'password retrieval failed'
  }))

  res.status(500).send(err.message)
}

/**
 * Derive a password for the client
 *
 * @param  {object} req
 * @param  {object} res
 * @return {Promise}
 */
const password = (req, res) => {
  req.ctx.routes.push(password.name)

  const args = parseArgs(req, res)

  return polonium(args)
    .then(
      handlers.success.bind(null, req, res))
    .catch(
      handlers.failure.bind(null, req, res))
}

module.exports = password
