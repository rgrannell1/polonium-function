
const log = require('../../shared/logging')
const constants = require('../../shared/constants')

module.exports = (req, res, next) => {
  for (let response of blacklist) {
    if (response(req, res, next)) {
      log.info({

      })
      break
    } else {
      log.info({

      })
    }
  }

  next()
}

const responses = {
  errorBan (res) {
    res.send(403)
  }
}

const blacklist = {
  bannedTerms (req, res) {
    let isPhpRequest = req.ctx.request.url.pathname.indexOf('php') !== -1
    if (isPhpRequest) {
      responses.errorBan(res)
    }
  },
  longUrl (req, res) {
    if (req.ctx.request.urlLength > constants.limits.urlLength) {
      responses.errorBan(res)
    }
  }
}
