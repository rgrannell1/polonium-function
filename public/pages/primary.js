
const expect = require('chai').expect

module.exports = state => {
  const m = require('mithril')
  const components = require('./components')

  const component = {
    view: vnode => {
      expect(vnode).to.have.property('attrs')
      expect(vnode.attrs).to.have.property('state')

      const container = m(
        '.container',
        m(components.header), m('main',
          m(components.dropdown, {state: vnode.attrs.state}),
          m('form.main-input',
            m(components.websiteInput),
            m(components.passwordInput),
            m(components.submitInput)
          )
        )
      )

      return m('html', {lang: 'en'},
        m(components.head),
        m('body', container),
        m('script', {src: 'dist/build-index.js'})
      )
    }
  }

  return m(component, {state})
}
