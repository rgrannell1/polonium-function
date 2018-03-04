
import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger'

const reducers = {}

reducers.toggleDropdown = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        dropdownShown: state.dropdownShown === true ? false : true
      }
    default:
      return state
  }
}

reducers.updateWebsite = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WEBSITE':
      return {website: action.text}
    default:
      return state
  }
}

reducers.updatePassword = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WEBSITEE':
      return {password: action.text}
    default:
      return state
  }
}

const createAppStore = defaults => {
  reducers.constants = () => {
    return Object.assign({}, defaults)
  }

  return createStore(combineReducers(reducers), {}, applyMiddleware(logger))
}

export default createAppStore
