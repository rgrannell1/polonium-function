
import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from 'redux-logger'

const reducers = {}
const initialState = {
  dropdownShown: false
}

reducers.toggleDropdown = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        dropdownShown: state.dropdownShown === true ? false : true
      }
    default:
      return state
  }
}

export default createStore(
  combineReducers(reducers),
  {
    toggleDropdown: {
      dropdownShown: false
    }
  },
  applyMiddleware(logger)
)
