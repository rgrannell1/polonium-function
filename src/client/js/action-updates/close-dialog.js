
import {dispatchAction} from '../utils.js'

/**
 * Update the state to
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const closeDialog = (state, action) => {
  const newState = Object.assign({}, state, {
    derivedPassword: undefined
  })
  newState.submitButton.state = 'default'

  return newState
}

export default closeDialog
