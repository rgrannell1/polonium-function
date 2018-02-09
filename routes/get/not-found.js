
const log = require('../../shared/logging')

module.exports = (req, res) => {
  log.info(Object.assign({}, req.ctx, {
    message: 'content not found'
  }))

  res.send('no content found', 404)
}
