
const setStaticHeaders = (...args) => {
  const [req, res, next] = [...args]
  req.ctx.routes.push(setStaticHeaders.name)
  res.set({
    'Service-Worker-Allowed': '/http'
  })
  next()
}

module.exports = setStaticHeaders
