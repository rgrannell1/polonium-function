
const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const constants = require('../../shared/constants')
const log = require('../../shared/logging')

const staticRouter = expressStaticGzip(constants.paths.static)

const staticRoute = (...args) => {
  const [req] = [...args]
  req.ctx.routes.push(staticRoute.name)
  log.info(Object.assign({}, req.ctx, {
    message: 'attempting to serve static-file'
  }))
  return staticRouter(...args)
}

module.exports = staticRoute
