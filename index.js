
const router = require('./routes')
const log = require('./shared/logging')
const express = require('express')

const app = express()
app.use(router)

/**
 * Initialise a Polonium server
 *
 * @param  {object} req
 * @param  {object} res
 * @return {Server}
 */
module.exports.http = (req, res) => {
  if (!req.url) {
    req.url = '/'
    req.path = '/'
  }

  log.info({
    message: 'function initialised.'
  })

  return app(req, res)
}
