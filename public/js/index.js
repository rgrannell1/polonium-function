
'use strict'

const m = require('mithril')
const pages = require('../pages')

/**
 * Server routes
 *
 * @return {undefined}
 */
document.body.onload = function () {
  m.route.mode = 'search'
  m.route(document.body, '/', {
    '/': pages.primary
  })
}
