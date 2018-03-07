
import {dispatchAction} from '../utils.js'

/**
 * Update the state to indicate the dropdown should be toggled on / off.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const toggleDropdown = dispatchAction({
  TOGGLE_DROPDOWN (state, newState) {
    return {
      dropdownShown: state.dropdownShown !== true
    }
  }
})

export default toggleDropdown
