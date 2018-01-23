
const notFoundPage = require('../../public/pages').notFound

const render = require('mithril-node-render')
require('mithril/test-utils/browserMock')(global)

module.exports = (req, res) => {
  return render(notFoundPage())
    .then(content => {
      res.send(content, 404)
    })
}
