
import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger'

import actionUpdates from './action-updates/index.js'

/**
 * Create a Redux store
 *
 * @param  {object} defaults default values to be fixed in the Redux state.
 * @return {Store}  a Redux store
 */
const createAppStore = defaults => {
  actionUpdates.constants = () => Object.assign({}, defaults)
  return createStore(combineReducers(actionUpdates), {}, applyMiddleware(logger))
}

export default createAppStore
