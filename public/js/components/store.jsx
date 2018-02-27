
import {createStore, combineReducers} from "../libs/redux.min.js"

const reducers = {}
const initialState = {
  dropdownShown: false
}

reducers.toggleDropdown = (state = initialState, action) => {
  if (state.dropdownShown === false) {
    state.dropdownShown = true
  } else if (state.dropdownShown === true) {
    state.dropdownShown = false
  }
  return state
}

const app = combineReducers(reducers)

const store = createStore(app);
export default store;
