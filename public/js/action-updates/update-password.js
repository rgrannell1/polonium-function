
import {dispatchAction} from '../utils.js'

/**
 * Update the state to include the current password value
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updatePassword = dispatchAction({
  UPDATE_PASSWORD (state, newState, action) {
    return { password: action.text }
  }
})

export default updatePassword
