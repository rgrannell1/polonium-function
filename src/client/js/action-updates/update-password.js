
/**
 * Update the state to include the current password value
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updatePassword = (state, action) => {
  return Object.assign({}, state, {
    formModified: true,
    password: {
      text: action.text,
      error: action.error
    }
  })
}

export default updatePassword
