
import {dispatchAction} from '../utils.js'

/**
 * Update the state to
 *
 * @param  {Object} state  The current application state
 * @param  {Object} action The inbound action to be performed
 * @return {Object}        The new state
 */
const toggleLoadingBar = (state, newState) => {
  return {
    active: state.loadingBar !== true
  }
}

export default toggleLoadingBar
