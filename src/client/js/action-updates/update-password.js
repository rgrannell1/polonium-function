
import {dispatchAction} from '../utils.js'

/**
 * Update the state to include the current password value
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updatePassword = (state, action) => {
  return { password: action.text }
}

export default updatePassword
