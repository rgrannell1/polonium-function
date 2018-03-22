
const express = require('express')
const httpRouter = express.Router()
const {http} = require('./index')

const app = express()
app.disable('x-powered-by')

httpRouter.use(http)

app.use('/http', httpRouter)

module.exports = app
