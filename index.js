
const router = require('./routes')
const express = require('express')

const app = express()
app.use(router)

module.exports.http = (req, res) => {
  if (!req.url) {
    req.url = '/'
    req.path = '/'
  }
  return app(req, res)
}
