
const {Router} = require('express')

const expect = require('chai').expect
const routes = {
  get: require('./get')
}

expect(routes.get).to.have.property('notFound')

const router = Router()

router.use(routes.get.static)

router.get('/', (req, res) => {
  routes.get.primary(req, res)
})

router.get('*', (req, res) => {
  routes.get.notFound(req, res)
})

module.exports = router
