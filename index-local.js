
const express = require('express')
const httpRouter = express.Router()
const {http} = require('./index')

const app = express()
app.disable('x-powered-by')

httpRouter.use(http)

app.use('/http', httpRouter)

app.listen(3000, '0.0.0.0', () => {
  console.log('app listening on port 3000')
})
