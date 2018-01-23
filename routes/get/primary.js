
const primaryPage = require('../../public/pages').primary

const render = require('mithril-node-render')
require('mithril/test-utils/browserMock')(global)

module.exports = (req, res) => {
  return render(primaryPage())
    .then(content => {
      res.send(content, 200)
    })
}
