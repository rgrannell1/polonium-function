
/**
 * Update the state to indicate the dropdown should be toggled on / off.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const setDerivedPassword = (state, action) => {
  const newState = Object.assign({}, state, {
    derivedPassword: {
      error: action.error,
      text: action.text
    }
  })
  return newState
}

export default setDerivedPassword
