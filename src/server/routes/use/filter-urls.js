
const log = require('../../shared/logging')
const constants = require('../../shared/constants')

const filterUrls = (req, res, next) => {
  req.ctx.routes.push(filterUrls.name)

  for (let listName of Object.keys(blacklist)) {
    const response = blacklist[listName]

    if (response(req, res, next)) {
      req.ctx.blacklist = {
        listName,
        matches: true
      }
      break
    }
  }

  log.info(Object.assign({}, req.ctx, {
    blacklist: {
      matches: false
    },
    ctx: {
      stage: 'filter_urls'
    }
  }))

  next()
}

const responses = {
  forbiddenBan (res) {
    res.send(403)
    return true
  }
}

const blacklist = {
  bannedTerms (req, res) {
    let isPhpRequest = req.ctx.request.url.pathname.indexOf('php') !== -1
    if (isPhpRequest) {
      responses.forbiddenBan(res)
    }
  },
  longUrl (req, res) {
    if (req.ctx.request.urlLength > constants.limits.urlLength) {
      responses.forbiddenBan(res)
    }
  }
}

module.exports = filterUrls
