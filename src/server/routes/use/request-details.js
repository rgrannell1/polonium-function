
const log = require('../../shared/logging')
const uaParser = require('ua-parser-js')
const geoip = require('geoip-lite')
const url = require('url')

const requestDetails = (req, res, next) => {
  const parsedUrl = url.parse(req.url)

  delete parsedUrl.search
  delete parsedUrl.query
  delete parsedUrl.path
  delete parsedUrl.href

  const address = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  req.ctx = {
    user: {
      address: address.replace(' ', '').split(','),
      userAgent: req.headers['user-agent']
    },
    request: {
      url: parsedUrl,
      urlLength: req.url ? req.url.length : 0
    },
    performance: {
      startTime: process.hrtime()
    },
    routes: [requestDetails.name]
  }

  // -- lookup user-agent details.
  try {
    req.ctx.user.userAgentDetails = uaParser(req.headers['user-agent'])
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

module.exports = requestDetails
