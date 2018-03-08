
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
  if (!state.updateWebsite || !state.updatePassword) {
    return state
  }
  if (!state.updateWebsite.website || !state.updatePassword.password) {
    return state
  }

  const fetchOpts = {
    website: state.updateWebsite.website,
    password: state.updatePassword.password
  }
  if (!state.active) {
    newState.active = true
    newState.retrievedPassword = services.fetchPassword(fetchOpts)
  }
}

export default clickSubmitButton
