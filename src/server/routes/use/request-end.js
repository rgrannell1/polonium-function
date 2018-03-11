
const log = require('../../shared/logging')

const requestEnd = (req, res, next) => {
  const [seconds, nanoSeconds] = process.hrtime(req.ctx.performance.startTime)
  req.ctx.routes.push(requestEnd.name)

  delete req.ctx.performance.startTime
  req.ctx.performance.elapsedTime = seconds + nanoSeconds / 1e-9

  log.info(Object.assign({}, req.ctx, {
    ctx: {
      stage: 'request_ended'
    }
  }))

  next()
}

module.exports = requestEnd
