
/**
 * Update the state to indicate the dropdown should be toggled on / off.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const toggleDropdown = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        dropdownShown: state.dropdownShown !== true
      }
    default:
      return state
  }
}

export default toggleDropdown
