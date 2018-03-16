
/**
 * Update the state to include the current website value.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updateWebsite = (state, action) => {
  return Object.assign({}, state, {
    website: {
      text: action.text,
      error: action.error
    }
  })
}

export default updateWebsite
