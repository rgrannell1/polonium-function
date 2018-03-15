
import services from '../services/index.js'
import {dispatchAction} from '../utils.js'

/**
 * Update the state to handle the submit button click.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const clickSubmitButtonDeprecated = (state, action) => {
  const fetchOpts = {
    salt: state.website,
    password: state.password
  }

  if (action.state === 'active') {
    return state
  }

  const newState = Object.assign({}, state, {
    triggered: true
  })

  if (!state.submitButtonState || state.submitButtonState === 'default') {
    newState.submitButtonState = 'active'

    services.fetchPassword(fetchOpts)
      .then(password => {
        if (password) {
          alert(password)
        } else {
          console.error('no password recieved')
        }
      })
      .catch(err => {
        alert(err)
      })
  }

  return newState
}

const clickSubmitButton = (state, action) => {
  const fetchOpts = {
    salt: state.website,
    password: state.password
  }

  // -- already active, just return the old-state
  if (state.submitButton && state.submitButton.state === 'active') {
    return state
  }

  let newButtonState = 'default'

  // -- an initial click. If the data is valid trigger a password fetch,
  // -- otherwise block

  if (!state.submitButton || state.submitButton.state === 'default') {
    const websiteError = state && state.website && state.website.error
    const passwordError = state && state.password && state.password.error
    const valid = !(websiteError || passwordError)

    if (valid) {
      newButtonState = 'active'
    } else {
      newButtonState = 'blocked'
    }
  } else if (state.submitButton.state === 'blocked') {
    newButtonState = 'blocked'
  }

  const newState = Object.assign({}, state, {
    submitButton: {
      triggered: true,
      state: newButtonState
    }
  })

  return newState
}

export default clickSubmitButton
