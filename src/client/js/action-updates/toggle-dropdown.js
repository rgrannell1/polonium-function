
import {dispatchAction} from '../utils.js'

/**
 * Update the state to indicate the dropdown should be toggled on / off.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const toggleDropdown = (state, action) => {
  const newState = Object.assign({}, state)
  newState.dropdownShown = state.dropdownShown !== true

  return newState
}

export default toggleDropdown
