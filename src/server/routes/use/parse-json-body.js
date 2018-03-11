
const bodyParser = require('body-parser')

const parseJsonBody = (...args) => {
  const [req] = [...args]
  req.ctx.routes.push(parseJsonBody.name)
  return bodyParser.json()(...args)
}

module.exports = parseJsonBody
