
/**
 * Update the state to handle the submit button click.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const clickSubmitButton = (state = {}, action) => {
  switch (action.type) {
    case 'CLICK_SUBMIT_BUTTON':
      const newState = { }

      if (!state.active) {
        newState.active = true
      }

      return newState
    default:
      return state
  }
}

export default clickSubmitButton
