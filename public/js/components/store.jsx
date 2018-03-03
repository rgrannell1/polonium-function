
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

const store = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(logger)
  );

export default store;
