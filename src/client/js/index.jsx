
import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import Clipboard from 'clipboard'

import MainPage from './pages/main/index.jsx'
import TermsPage from './pages/terms/index.jsx'

import createAppStore from './store.jsx'

const rgb = (r, g, b) => `rgb(${[r, g, b]})`

const initialState = {
  dropdownShown: false,
  title: 'Polonium',
  baseUrl: '/http',
  links: [
    {href: '/http#terms', text: 'Privacy & Security'}
  ],
  colours: {
    font: rgb(64, 64, 64),
    barLight: rgb(28, 214, 205),
    barMedium: rgb(28, 130, 214),
    barDark: rgb(28, 37, 214),
    primary: rgb(61, 41, 255),
    primaryLight: rgb(23, 0, 252),
    primaryDark: rgb(53, 49, 89),
    error: rgb(239, 74, 74),
    white: rgb(255, 255, 255)
  },
  copyDialog: {
    title: 'Derived Password'
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
