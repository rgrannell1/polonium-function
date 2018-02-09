
'use strict'

import constants from './constants.js'
import lang from './locale/en.js'

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

      return Notification.requestPermission()
        .then(() => {
          return sendPasswordRequest(params)
            .then(handlers.onSuccess.bind(null, params, state))
            .catch(handlers.onFailure.bind(null, state))
        })
    }
  },
  onDropDownClick (state) {
    state.showDropdown = !state.showDropdown
    m.redraw()
  },
  onWebsiteUpdate (state, value) {
    constants.state.website = value.trim()
    constants.state.websiteError = constants.state.website.length < constants.limits.minimumWebsiteLength
      ? lang.errors.websiteLength(constants.limits.minimumWebsiteLength)
      : ''
  },
  onPasswordUpdate (state, value) {
    constants.state.password = value.trim()
    constants.state.passwordError = constants.state.password.length < constants.limits.minimumPasswordLength
      ? lang.errors.passwordLength(constants.limits.minimumPasswordLength)
      : ''
  },
  onDocumentClick (event) {
    const $dropdown = document.getElementById('links')
    const isInside = $dropdown === event.target || $dropdown.contains(event.target)

    if (!isInside) {
      constants.state.showDropdown = false
      m.redraw()
    }
  }
}

const components = { }

components.dropdown = {
  view (vnode) {
    const dropdownOpts = {
      class: constants.state.showDropdown ? 'active' : 'inactive'
    }

    return m('ul#settings-menu', dropdownOpts,
      m('li', m('a[href=/http/#!/terms]', lang.dropdown.termsAndConditionsText)))
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
      m('a[href=/http/]',
        m('h1#icon-branch', {class: 'brand'}, lang.title)),
      m('label#links', {for: 'slide', title: 'Main menu', onclick: onDropDownClick}, '⋮')
    )
  }
}

components.loadingBar = {
  view (vnode) {
    const state = constants.state
    const loadingBarClass = state.isActive
      ? 'load-bar active'
      : 'load-bar inactive'

    return m('div', {class: loadingBarClass}, m('.bar'), m('.bar'), m('.bar'))
  }
}

/**
 * main body components.
 *
 * @type {object} a mithril component
 */
components.main = {
  view (vnode) {
    const state = constants.state

    const onButtonClick = reactions.onSubmitClick.bind(null, state)
    const onWebsiteUpdate = reactions.onWebsiteUpdate.bind(null, state)
    const onPasswordUpdate = reactions.onPasswordUpdate.bind(null, state)

    const isInvalidWebsite = state.websiteError && state.websiteError.length > 0
    const isInvalidPassword = state.passwordError && state.passwordError.length > 0

    let buttonClass = state.isActive
      ? 'submit active'
      : 'submit'

    const anyInvalidInput = isInvalidWebsite || isInvalidPassword

    if (anyInvalidInput) {
      buttonClass += ' invalid'
    }

    const websiteClass = state.websiteError
      ? 'invalid'
      : 'valid'
    const passwordClass = state.passwordError
      ? 'invalid'
      : 'valid'

    return m('main',
      m('form.main-input',
        m('#website-input-container', {class: 'website'},
          m('label', {for: 'website'}, lang.labels.website),
          m('input#website', {
            type: 'text',
            required: '',
            minlength: constants.limits.minimumWebsiteLength,
            oninput: m.withAttr('value', onWebsiteUpdate),
            autocorrect: 'off',
            autocapitalize: 'none',
            pattern: constants.patterns.website,
            class: websiteClass
          })),
        m('p#website-input-error', state.websiteError),

        m('#password-input-container', {class: 'password'},
          m('label', {for: 'password'}, lang.labels.password),
          m('input#password', {
            type: 'password',
            required: '',
            minlength: constants.limits.minimumPasswordLength,
            oninput: m.withAttr('value', onPasswordUpdate),
            pattern: constants.patterns.password,
            class: passwordClass
          })),
        m('p#password-input-error', state.passwordError),
        m('input#submit', {
          type: 'button',
          value: lang.submitButton.defaultText,
          class: buttonClass,
          onclick: onButtonClick
        })
      )
    )
  }
}

/**
 * Display terms & conditions to users. Plain English where
 * @type {Object}
 */
components.terms = {
  view (vnode) {
    const {headers, paragraphs, title} = lang.termsAndConditions

    return m('main.text-body', {},
      m('h1', title),

      m('h2', headers.connection),
      m('p', paragraphs.connection),

      m('h2', headers.collectedData),
      m('p', paragraphs.collectedData),

      m('h3', headers.deviceInformation),
      m('p', paragraphs.deviceInformation),

      m('h3', headers.locationInformation),
      m('p', paragraphs.locationInformation),

      m('h2', headers.informationTransfer),
      m('p', paragraphs.informationTransfer)
    )
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

handlers.onSuccess = async (params, state, response) => {
  state.isActive = false

  const worker = new Worker('./js/workers/notifications.js')

  worker.postMessage({
    topic: 'notify_password',
    website: params.salt,
    password: await response.text()
  })

  m.redraw()
}

handlers.onFailure = async (state, err) => {
  state.isActive = false
  console.error(err)

  m.redraw()
}

/**
 * the body component.
 *
 * @type {object} a mithril component.
 */
components.body = {
  view (vnode) {
    return m('.container',
      m(components.dropdown, {state: constants.state}),
      m(components.header),
      m(components.loadingBar),
      m(components.main)
    )
  }
}

components.termsOfService = {
  view (vnode) {
    return m('.container',
      m(components.dropdown, {state: constants.state}),
      m(components.header, {state: constants.state}),
      m(components.terms, {state: constants.state})
    )
  }
}

export {components}
export {reactions}
export default components
