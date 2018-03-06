
/**
 * Update the state to
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const toggleLoadingBar = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING_BAR':
      return {
        active: state.loadingBar !== true
      }
    default:
      return state
  }
}

export default toggleLoadingBar
