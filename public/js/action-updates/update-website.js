
/**
 * Update the state to include the current website value.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updateWebsite = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WEBSITE':
      return {website: action.text}
    default:
      return state
  }
}

export default updateWebsite
