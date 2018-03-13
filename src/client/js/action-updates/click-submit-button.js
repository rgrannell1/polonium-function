
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

  const newState = Object.assign({}, state, {
    triggered: true
  })

  if (state.buttonState === 'default') {
    return transition.defaultToActive(state, newState, action)
  }

  return newState
}

export default clickSubmitButton
