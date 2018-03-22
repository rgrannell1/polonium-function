
const router = require('./src/server/routes')
const log = require('./src/server/shared/logging')
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
exports.http = function http (req, res) {
  if (!req.url) {
    req.url = '/'
    req.path = '/'
  }

  log.info({
    message: 'function initialised.'
  })

  return app(req, res)
}
