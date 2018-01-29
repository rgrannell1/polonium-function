
const {Router} = require('express')

const expect = require('chai').expect
const routes = {
  get: require('./get')
}

expect(routes.get).to.have.property('notFound')

const router = Router()

router.use(routes.get.static)

router.get('/password', routes.get.password)
router.get('*', routes.get.notFound)

module.exports = router
