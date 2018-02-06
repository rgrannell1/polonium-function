
const log = require('../../shared/logging')

module.exports = (req, res, next) => {
  const [seconds, nanoSeconds] = process.hrtime(req.ctx.performance.startTime)

  delete req.ctx.performance.startTime
  req.ctx.performance.elapsedTime = seconds + nanoSeconds / 1e-9

  log.info(Object.assign({}, req.ctx, {
    ctx: {
      stage: 'request_ended'
    }
  }))

  next()
}
