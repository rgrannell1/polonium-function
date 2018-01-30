
const constants = {
  urls: {
    host: `https://${window.location.host}/http`
  },
  state: {
    isActive: false,
    showDropdown: false
  },
  options: {
    rounds: 1000000,
    len: 20,
    digest: 'sha1'
  }
}

const sendPasswordRequest = async params => {
  const url = new URL(`${constants.urls.host}/password`)

  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key])
  })

  return fetch(url, {cache: 'no-store'})
}

const handlers = { }

handlers.onSuccess = async (state, response) => {
  state.isActive = false
  alert(await response.text())
}

handlers.onFailure = async (state, err) => {
  state.isActive = false
  console.error(err)
}

const reactions = {
  /**
   * retrieve a result.
   *
   * @param  {object} state the persistant state of the application
   * @return {promise} a result promise.
   */
  onSubmitClick (state) {
    if (!state.isActive) {
      state.isActive = true

      m.redraw()

      const params = {
        password: constants.state.password,
        rounds: constants.options.rounds,
        salt: constants.state.website,
        len: constants.options.len,
        digest: constants.options.digest
      }

      sendPasswordRequest(params)
        .then(handlers.onSuccess.bind(null, state))
        .catch(handlers.onFailure.bind(null, state))
    }
  },
  onDropDownClick (state) {
    state.showDropdown = !state.showDropdown
    m.redraw()
  },
  onWebsiteUpdate (state, value) {
    constants.state.website = value
  },
  onPasswordUpdate (state, value) {
    constants.state.password = value
  }
}

const components = { }

components.dropdown = {
  view (vnode) {
    const dropdownOpts = {
      class: constants.state.showDropdown ? 'active' : 'inactive'
    }

    return m('ul#settings-menu', dropdownOpts,
      m('li', m('a', {href: ' #'}, 'Settings')),
      m('li', m('a', {href: '#'}, 'Privacy')),
      m('li', m('a', {href: '#'}, 'Help')))
  }
}

/**
 * header components.
 *
 * @type {object}
 */
components.header = {
  view (vnode) {
    const onDropDownClick = reactions.onDropDownClick.bind(null, constants.state)

    return m('header#main-head',
      m('label.burger-menu', {for: 'slide', title: 'Main menu'}, '☰'),
      m('a', {href: '/#!#'},
        m('h1#icon-branch', {class: 'brand'}, 'Polonium')),
      m('label.links', {for: 'slide', title: 'Main menu', onclick: onDropDownClick}, '⋮')
    )
  }
}

/**
 * main body components.
 *
 * @type {object} a mithril component
 */
components.main = {
  view (vnode) {
    const onButtonClick = reactions.onSubmitClick.bind(null, constants.state)
    const onWebsiteUpdate = reactions.onWebsiteUpdate.bind(null, constants.state)
    const onPasswordUpdate = reactions.onPasswordUpdate.bind(null, constants.state)

    const buttonClass = constants.state.isActive
      ? 'submit active'
      : 'submit'

    return m('main',
      m('ul#settings-menu', {class: 'inactive'},
        m('li', m('a', {class: '#'}), 'Settings'),
        m('li', m('a', {class: '#'}), 'Privacy'),
        m('li', m('a', {class: '#'}), 'Help')
      ),
      m('form.main-input',
        m('#website-input-container', {class: 'website'},
          m('label', {for: 'website'}, 'Site'),
          m('input#website', {
            required: '',
            oninput: m.withAttr('value', onWebsiteUpdate)
          })),

        m('#password-input-container', {class: 'password'},
          m('label', {for: 'passwo-rd'}, 'Master Password'),
          m('input#password', {
            type: 'password',
            required: '',
            oninput: m.withAttr('value', onPasswordUpdate)
          })),

        m('input#submit', {
          type: 'button', value: 'Get Site Password', class: buttonClass, onclick: onButtonClick})
      )
    )
  }
}

components.terms = {
  view (vnode) {
    return m('main',
      m('h1', 'Security & Privacy Policy'),

      m('h2', 'Connection'),
      m('p', 'Polonium uses HTTPS to ensure your data is secure during transmission.'),

      m('h2', 'User Information'),
      m('p', 'We do not store any sensitive submitted data; namely the content of the website & password fields, the derived keys, or the options provided the derivation of the keys.'),

      m('p', 'We do store metadata related to each used, such as the IP address, browser details, time, subpages visited, and bitrate of the incoming connection. This data is not shared with a third-party; it is used for analytical and security purposes.')
    )
  }
}

/**
 * the body component.
 *
 * @type {object} a mithril component.
 */
components.body = {
  view (vnode) {
    return m('.container', {state: constants.state},
      m(components.dropdown, {state: constants.state}),
      m(components.header),
      m(components.main)
    )
  }
}

components.termsOfService = {
  view (vnode) {
    return m('.container', {state: constants.state},
      m(components.dropdown, {state: constants.state}),
      m(components.header, {state: constants.state}),
      m(components.terms, {state: constants.state})
    )
  }
}

/**
 * mount the body component to the router
 */
m.route(document.body, '/', {
  '/': components.body,
  '/terms': components.termsOfService
})
