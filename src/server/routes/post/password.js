
const {polonium} = require('polonium')
const constants = require('../../shared/constants')

const parseArgs = req => {
  const qs = req.query

  return {
    password: qs.password,
    rounds: constants.fixedParameters.rounds,
    salt: qs.salt,
    len: constants.fixedParameters.len,
    digest: constants.fixedParameters.digest
  }
}

const handlers = { }

handlers.success = (req, res, password) => {
  res.status(200).send(password)
}

handlers.failure = (req, res, err) => {
  res.status(500).send(err.message)
}

/**
 * Derive a password for the client
 *
 * @param  {object} req
 * @param  {object} res
 * @return {Promise}
 */
module.exports = (req, res) => {
  return polonium(parseArgs(req, res))
    .then(
      handlers.success.bind(null, req, res))
    .catch(
      handlers.failure.bind(null, req, res))
}
