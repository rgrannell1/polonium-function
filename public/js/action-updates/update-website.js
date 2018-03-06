
import {dispatchAction} from '../utils.js'

/**
 * Update the state to include the current website value.
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const updateWebsite = dispatchAction({
  UPDATE_WEBSITE (state, newState, action) {
    return { website: action.text }
  }
})

export default updateWebsite
