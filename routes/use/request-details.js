
const log = require('../../shared/logging')
const uaParser = require('ua-parser-js')
const geoip = require('geoip-lite')
const url = require('url')

module.exports = (req, res, next) => {
  req.ctx = {
    user: {
      address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    },
    request: {
      url: url.parse(req.url),
      urlLength: req.url ? req.url.length : 0
    },
    performance: {
      startTime: process.hrtime()
    }
  }

  // -- lookup user-agent details.
  try {
    req.ctx.userAgentDetails = uaParser(req.headers['user-agent'])
  } catch (err) {
    log.error({err: err.message})
  }

  // -- lookup geoip details from IP address.
  try {
    req.ctx.user.location = geoip.lookup(req.ctx.user.address)
  } catch (err) {
    log.error({err: err.message})
  }

  log.info(Object.assign({}, req.ctx, {
    ctx: {
      stage: 'request_received'
    }
  }))

  next()
}
