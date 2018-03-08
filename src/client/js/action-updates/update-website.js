
import {dispatchAction} from '../utils.js'

/**
 * Update the state to include the current website value.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updateWebsite = (state, action) => {
  const newState = Object.assign({}, state)
  newState.website = action.text
  return newState
}

export default updateWebsite
