
const express = require('express')
const httpRouter = express.Router()
const {http} = require('./index')

const app = express()

httpRouter.use(http)

app.use('/http', httpRouter)

app.listen(3000, () => {
  console.log('app listening on port 3000')
})
