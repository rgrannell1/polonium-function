
const {polonium} = require('polonium')

const parseArgs = req => {
  const qs = req.query

  return {
    password: qs.password,
    rounds: parseInt(qs.rounds),
    salt: qs.salt,
    len: parseInt(qs.len),
    digest: qs.digest
  }
}

const handlers = { }

handlers.success = (req, res, password) => {
  res.send(password, 200)
}

handlers.failure = (req, res, err) => {
  res.send(err.message, 500)
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
