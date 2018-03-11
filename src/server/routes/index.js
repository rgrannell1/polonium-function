
const {Router} = require('express')

const expect = require('chai').expect
const routes = {
  get: require('./get'),
  post: require('./post'),
  use: require('./use')
}

expect(routes.get).to.have.property('notFound')

const router = Router()

router.use(routes.use.requestDetails)
router.use(routes.use.filterUrls)
router.get(routes.get.static)
router.use(routes.use.parseJsonBody)

router.post('/password', routes.post.password)
router.get('*', routes.get.notFound)

router.use(routes.use.requestEnd)

module.exports = router
