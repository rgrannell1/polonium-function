
import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import MainPage from './pages/main/index.jsx'
import TermsPage from './pages/terms/index.jsx'

import createAppStore from './store.jsx'

const initialState = {
  dropdownShown: false,
  title: 'Polonium',
  links: [
    {href: '/http#terms', text: 'Privacy & Security'}
  ],
  colours: {
    font: '#404040',
    barLight: '#1cd6cd',
    barMedium: '#1c82d6',
    barDark: '#1c25d6',
    primary: 'rgb(61, 41, 255)',
    primaryDark: 'rgb(40, 26, 168)',
    error: '#ef4a4a',
    white: 'white'
  }
}

const store = createAppStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)
const element = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/http" component={MainPage}/>
      <Route path="/http#terms" component={TermsPage}/>
    </Router>
  </Provider>
)

render(element, document.getElementById('root'));
