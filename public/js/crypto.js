
const constants = {
  urls: {
    host: `https://${window.location.host}/http`
  },
  state: {},
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

handlers.onSuccess = async response => {
  alert(await response.text())
}

handlers.onFailure = async err => {
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
    const params = {
      password: constants.state.password,
      rounds: constants.options.rounds,
      salt: constants.state.website,
      len: constants.options.len,
      digest: constants.options.digest
    }

    return sendPasswordRequest(params)
      .then(handlers.onSuccess)
      .catch(handlers.onFailure)
  },
  onWebsiteUpdate (state, value) {
    constants.state.website = value
  },
  onPasswordUpdate (state, value) {
    constants.state.password = value
  }
}

const components = { }

/**
 * header components.
 *
 * @type {object}
 */
components.header = {
  view (vnode) {
    return m('header#main-head',
      m('label.burger-menu', {for: 'slide', title: 'Main menu'}, '☰'),
      m('a', {href: '/#!#'},
        m('h1#icon-branch', {class: 'brand'}, 'Polonium')),
      m('label.links', {for: 'slide', title: 'Main menu'}, '⋮')
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
          m('label', {for: 'password'}, 'Master Password'),
          m('input#password', {
            type: 'password',
            required: '',
            oninput: m.withAttr('value', onPasswordUpdate)
          })),

        m('input#submit', {
          type: 'button', value: 'Get Site Password', class: 'submit', onclick: onButtonClick})
      )
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
      m(components.header),
      m(components.main)
    )
  }
}

/**
 * mount the body component to the router
 */
m.route(document.body, '/', {
  '/': components.body
})
