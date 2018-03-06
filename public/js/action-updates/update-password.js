
/**
 * Update the state to include the current password value
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updatePassword = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PASSWORD':
      return {password: action.text}
    default:
      return state
  }
}

export default updatePassword
