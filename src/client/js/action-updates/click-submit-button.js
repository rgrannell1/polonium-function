
import services from '../services/index.js'
import {dispatchAction} from '../utils.js'

/**
 * Update the state to handle the submit button click.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const clickSubmitButton = (state, action) => {
  const fetchOpts = {
    website: state.website,
    password: state.password
  }

  if (action.state === 'active') {
    return state
  }

  const newState = Object.assign({}, state)

  if (!state.submitButtonState || state.submitButtonState === 'default') {
    newState.submitButtonState = 'active'
    newState.retrievedPassword = services.fetchPassword(fetchOpts)
  }

  return newState
}

export default clickSubmitButton
