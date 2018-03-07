
import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import constants from '../../constants.js'

import Header from './../header/index.jsx'
import Dropdown from '../dropdown/index.jsx'
import LoadingBar from '../loading-bar/index.jsx'
import PasswordForm from '../password-form/index.jsx'

import app_css from './index.css.jsx'
import createAppStore from '../../store.jsx'

const initialState = {
  dropdownShown: false,
  title: 'Polonium',
  links: [
    {href: '/terms', text: 'Privacy & Security'}
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

/**
 * The Polonium app component
 *
 * @param  {Object} props.
 * @param {string} props.title the title to display
 * @param {array} props.links  an array of link objects
 *
 * @return {Element}
 */
const App = props => {
  const style = app_css(initialState.colours)
  return (
    <div style={style.container}>
      <Header title={props.title} />
      <LoadingBar active={true}></LoadingBar>
      <main>
        <Dropdown links={props.links} />
        <PasswordForm/>
      </main>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

const store = createAppStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)
const element = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/http" component={App}/>
    </Router>
  </Provider>
)

render(element, document.getElementById('root'));
