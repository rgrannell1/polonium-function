
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import MainPage from './pages/main/index.jsx'
import TermsPage from './pages/terms/index.jsx'

import createAppStore from './store.jsx'

const rgb = (r, g, b) => `rgb(${[r, g, b]})`

const initialState = {
  dropdownShown: false,
  title: 'Polonium',
  baseUrl: '/http',
  links: [
    {href: '/http/terms', text: 'Privacy & Security'}
  ],
  colours: {
    font: rgb(64, 64, 64),
    barLight: rgb(28, 214, 205),
    barMedium: rgb(28, 130, 214),
    barDark: rgb(28, 37, 214),
    primary: rgb(61, 41, 255),
    primaryLight: rgb(28, 130, 214),
    primaryDark: rgb(53, 49, 89),
    error: rgb(239, 74, 74),
    white: rgb(255, 255, 255)
  },
  copyDialog: {
    title: 'Derived Password'
  }
}

const store = createAppStore(initialState)
const element = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/http' component={MainPage} />
        <Route exact path='/http/terms' component={TermsPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

render(element, document.getElementById('root'))
