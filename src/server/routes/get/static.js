
const express = require('express')
const constants = require('../../shared/constants')
const log = require('../../shared/logging')

const staticRouter = express.static(constants.paths.static)

const staticRoute = (...args) => {
  const [req] = [...args]
  req.ctx.routes.push(staticRoute.name)
  log.info(Object.assign({}, req.ctx, {
    message: 'attempting to serve static-file'
  }))
  return staticRouter(...args)
}

module.exports = staticRoute
