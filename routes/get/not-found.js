
const log = require('../../shared/logging')

/**
 * Handle 404 responses
 *
 * @param  {object} req
 * @param  {object} res
 *
 * @return {undefined}
 */
module.exports = (req, res) => {
  log.info(Object.assign({}, req.ctx, {
    message: 'content not found'
  }))

  res.send('no content found', 404)
}
