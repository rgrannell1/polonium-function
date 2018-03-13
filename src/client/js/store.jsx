
import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger'
import {routerReducer} from 'react-router-redux'

import actionUpdates from './action-updates/index.js'

/**
 * Create a Redux store
 *
 * @param  {object} defaults default values to be fixed in the Redux state.
 * @return {Store}  a Redux store
 */
const createAppStore = defaults => {
  if (!defaults.baseUrl) {
    throw 'missing baseurl'
  }
  const reducers = combineReducers({
    app: actionUpdates,
    constants: () => Object.assign({}, defaults),
    routing: routerReducer
  })

  return createStore(reducers, { }, applyMiddleware(logger))
}

export default createAppStore
