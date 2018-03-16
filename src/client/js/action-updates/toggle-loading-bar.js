
/**
 * Update the state to
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const toggleLoadingBar = (state, action) => {
  const newState = Object.assign({}, state)
  newState.active = state.loadingBar !== true
  return newState
}

export default toggleLoadingBar
